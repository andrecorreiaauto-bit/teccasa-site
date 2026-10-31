import test from "node:test";
import assert from "node:assert/strict";
import { contactMethod, trackContact } from "../lib/contact-analytics.mjs";
import { ANALYTICS_ID, ANALYTICS_EXCLUSION_KEY, saveConsent } from "../lib/consent.mjs";

function fixture({ consent = true, excluded = false, disabled = false, href = "https://wa.me/351922021980?text=private", location = "content", expired = false } = {}) {
  const values = new Map();
  const localStorage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
  if (consent !== null) saveConsent(localStorage, consent, expired ? Date.now() - 181 * 86400000 : Date.now());
  if (excluded) localStorage.setItem(ANALYTICS_EXCLUSION_KEY, "true");
  const events = [];
  const browser = { localStorage, location: { origin: "https://tec-casa.pt", pathname: "/reparacao-portoes-almada", search: "?email=private@example.com" }, gtag: (...event) => events.push(event), [`ga-disable-${ANALYTICS_ID}`]: disabled };
  const anchor = { getAttribute: () => href, closest: selector => location === "management" ? selector === ".seo-directory" : location === "footer" ? selector.includes("footer") : null, style: { position: location === "floating" ? "fixed" : "" } };
  const doc = { querySelector: () => ({ dataset: { serviceArea: "Almada", serviceKind: "repair" } }) };
  return { anchor, browser, doc, events, localStorage };
}

test("recognises only supported contact URLs", () => {
  for (const [url, result] of [["tel:+351922021980", "phone"], ["mailto:geral@tec-casa.pt?body=secret", "email"], ["https://wa.me/351922021980", "whatsapp"], ["https://api.whatsapp.com/send?text=secret", "whatsapp"], ["https://wa.me.evil.example/x", null], ["https://example.com/?next=wa.me", null], ["http://wa.me/x", null], ["javascript:alert(1)", null], ["/privacidade", null]]) {
    assert.equal(contactMethod(url, "https://tec-casa.pt"), result, url);
  }
});

test("no contact event without valid current consent, or when analytics is suspended", () => {
  for (const options of [{ consent: null }, { consent: false }, { expired: true }, { excluded: true }, { disabled: true }]) {
    const f = fixture(options);
    assert.equal(trackContact(f.anchor, f), false);
    assert.equal(f.events.length, 0);
  }
});

test("records one contact intent with safe context, never the URL, query or message", () => {
  const f = fixture();
  assert.equal(trackContact(f.anchor, f), true);
  assert.equal(f.events.length, 1);
  assert.deepEqual(f.events[0], ["event", "contact_whatsapp", { contact_method: "whatsapp", page_path: "/reparacao-portoes-almada", link_placement: "content", service_area: "Almada", service_kind: "repair", transport_type: "beacon" }]);
  assert.equal(JSON.stringify(f.events).includes("private"), false);
  assert.equal(JSON.stringify(f.events).includes("351922021980"), false);
});

test("covers phone, email, floating and footer links without changing navigation", () => {
  for (const [href, method, location] of [["tel:+351922021980", "phone", "footer"], ["mailto:geral@tec-casa.pt", "email", "content"], ["https://wa.me/351922021980", "whatsapp", "floating"]]) {
    const f = fixture({ href, location });
    assert.equal(trackContact(f.anchor, f), true);
    assert.equal(f.events[0][1], "contact_" + method);
    assert.equal(f.events[0][2].link_placement, location);
  }
});

test("revocation, renewed consent and test-mode changes take effect on the next click", () => {
  const f = fixture();
  assert.equal(trackContact(f.anchor, f), true);
  saveConsent(f.localStorage, false);
  assert.equal(trackContact(f.anchor, f), false);
  saveConsent(f.localStorage, true);
  f.localStorage.setItem(ANALYTICS_EXCLUSION_KEY, "true");
  assert.equal(trackContact(f.anchor, f), false);
  f.localStorage.setItem(ANALYTICS_EXCLUSION_KEY, "false");
  assert.equal(trackContact(f.anchor, f), true);
  assert.equal(f.events.length, 2);
});

test("storage failures, missing tag, non-contact and management links fail quietly", () => {
  const f = fixture();
  delete f.browser.gtag;
  assert.equal(trackContact(f.anchor, f), false);
  const denied = fixture();
  denied.browser.localStorage.getItem = () => { throw new Error("storage blocked"); };
  assert.equal(trackContact(denied.anchor, denied), false);
  for (const options of [{ href: "/" }, { location: "management" }]) {
    const other = fixture(options);
    assert.equal(trackContact(other.anchor, other), false);
    assert.equal(other.events.length, 0);
  }
});
