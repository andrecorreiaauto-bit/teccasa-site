import { ANALYTICS_ID, readConsent, isAnalyticsExcluded } from "./consent.mjs";
import { CONFIGURATOR_PATH, GATE_TYPES } from "./configurator.mjs";

export const ENTRY_KEY = "teccasa_configurator_entry_v1";
export const FUNNEL_STEPS = ["gate", "dimensions", "pillars", "installation", "extras", "photos", "contact", "results"];
export const FUNNEL_EVENTS = { open: "configurator_open", start: "configurator_start", step: "configurator_step", submit: "configurator_submit", success: "generate_lead", error: "configurator_error", reset: "configurator_reset" };

export function analyticsAllowed(browser = window) {
  try {
    return !!readConsent(browser.localStorage)?.analytics && !isAnalyticsExcluded(browser.localStorage) &&
      !browser[`ga-disable-${ANALYTICS_ID}`] && typeof browser.gtag === "function";
  } catch { return false; }
}

// Public route names only: never retain query strings, free text or contact data.
function safePath(path) { return typeof path === "string" && path.length <= 160 && /^\/[a-z0-9/-]*$/.test(path) ? path : ""; }
function placement(anchor) {
  if (anchor.closest(".seo-directory")) return "management";
  if (anchor.closest(".site-header, nav")) return "navigation";
  if (anchor.closest("footer, .company-identity")) return "footer";
  return "content";
}

export function trackConfiguratorEntry(anchor, { browser = window } = {}) {
  try {
    const url = new URL(anchor.getAttribute("href"), browser.location.origin);
    const location = placement(anchor);
    if (url.origin !== browser.location.origin || url.pathname !== CONFIGURATOR_PATH || location === "management" || !analyticsAllowed(browser)) return false;
    const page = safePath(browser.location.pathname);
    if (!page) return false;
    const type = Object.values(GATE_TYPES).includes(url.searchParams.get("tipo")) ? url.searchParams.get("tipo") : "unspecified";
    try { browser.sessionStorage.setItem(ENTRY_KEY, JSON.stringify({page, placement: location, at: Date.now()})); } catch {}
    browser.gtag("event", "configurator_entry", { page_path: page, page_location: browser.location.origin + page, link_placement: location, requested_gate_type: type, transport_type: "beacon" });
    return true;
  } catch { return false; }
}

function entryContext(browser, doc) {
  try {
    const entry = JSON.parse(browser.sessionStorage.getItem(ENTRY_KEY));
    if (entry && safePath(entry.page) && ["navigation", "footer", "content"].includes(entry.placement) && Number.isFinite(entry.at) && entry.at <= Date.now() && Date.now() - entry.at < 30 * 60000) return { entry_page: entry.page, entry_placement: entry.placement };
  } catch {}
  try {
    const url = new URL(doc.referrer);
    if (url.origin === browser.location.origin && url.pathname !== CONFIGURATOR_PATH && safePath(url.pathname)) return { entry_page: url.pathname, entry_placement: "internal" };
  } catch {}
  return { entry_page: CONFIGURATOR_PATH, entry_placement: "direct_or_external" };
}

export function validFunnelPayload(data) {
  return !!data && Object.hasOwn(FUNNEL_EVENTS, data.event) && FUNNEL_STEPS.includes(data.step) &&
    Object.values(GATE_TYPES).includes(data.gateType) && Number.isSafeInteger(data.sequence) && data.sequence > 0 && data.sequence < 10000000;
}

export function createConfiguratorTracker({ browser = window, doc = document } = {}) {
  let lastSequence = 0, context;
  return data => {
    if (!validFunnelPayload(data) || data.sequence <= lastSequence) return false;
    lastSequence = data.sequence;
    if (!analyticsAllowed(browser)) return false;
    context ||= entryContext(browser, doc);
    browser.gtag("event", FUNNEL_EVENTS[data.event], {
      page_path: CONFIGURATOR_PATH, page_location: browser.location.origin + CONFIGURATOR_PATH,
      ...context, configurator_step: data.step, gate_type: data.gateType,
      ...(data.event === "success" ? { lead_type: "gate_automation", method: "configurator" } : {}),
      transport_type: "beacon",
    });
    return true;
  };
}
