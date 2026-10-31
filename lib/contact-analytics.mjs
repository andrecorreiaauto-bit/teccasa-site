import { ANALYTICS_ID, readConsent, isAnalyticsExcluded } from "./consent.mjs";

export function contactMethod(href, base) {
  try {
    const url = new URL(href, base);
    if (url.protocol === "tel:") return "phone";
    if (url.protocol === "mailto:") return "email";
    if (url.protocol === "https:" && ["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(url.hostname)) return "whatsapp";
  } catch {}
  return null;
}

// Deliberately omit link URLs, message text, phone numbers and email addresses.
export function trackContact(anchor, { browser = window, doc = document } = {}) {
  try {
    if (isAnalyticsExcluded(browser.localStorage) || !readConsent(browser.localStorage)?.analytics ||
        browser[`ga-disable-${ANALYTICS_ID}`] || typeof browser.gtag !== "function") return false;
    const method = contactMethod(anchor.getAttribute("href") || anchor.getAttribute("data-contact-href"), browser.location.origin);
    if (!method) return false;
    const local = doc.querySelector("main[data-service-area]");
    const placement = anchor.closest(".seo-directory") ? "management" :
      anchor.closest(".site-header, nav") ? "navigation" :
      anchor.closest("footer, .company-identity") ? "footer" :
      anchor.style.position === "fixed" ? "floating" : "content";
    if (placement === "management") return false;
    browser.gtag("event", `contact_${method}`, {
      contact_method: method,
      page_path: browser.location.pathname,
      link_placement: placement,
      ...(local ? { service_area: local.dataset.serviceArea, service_kind: local.dataset.serviceKind } : {}),
      transport_type: "beacon",
    });
    return true;
  } catch { return false; }
}
