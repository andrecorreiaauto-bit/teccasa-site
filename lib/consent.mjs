export const CONSENT_KEY = "teccasa_cookie_consent_v1";
export const CONSENT_VERSION = "2026-10-30";
export const CONSENT_DAYS = 180;
export const ANALYTICS_ID = "G-N8YRYYNTV5";

export function readConsent(storage, now = Date.now()) {
  try {
    const value = JSON.parse(storage.getItem(CONSENT_KEY));
    if (value?.version !== CONSENT_VERSION || typeof value.analytics !== "boolean" ||
        !Number.isFinite(value.updatedAt) || !Number.isFinite(value.expiresAt) ||
        value.updatedAt > now || value.expiresAt <= now ||
        value.expiresAt - value.updatedAt > CONSENT_DAYS * 86400000) return null;
    return value;
  } catch { return null; }
}

export function saveConsent(storage, analytics, now = Date.now()) {
  const value = { version: CONSENT_VERSION, analytics: !!analytics, updatedAt: now, expiresAt: now + CONSENT_DAYS * 86400000 };
  try { storage.setItem(CONSENT_KEY, JSON.stringify(value)); } catch { /* The choice still applies to this page. */ }
  return value;
}

export function disableAnalytics() {
  window[`ga-disable-${ANALYTICS_ID}`] = true;
  document.getElementById("teccasa-analytics")?.remove();
  const parts = window.location.hostname.split(".");
  const domains = [null, ...parts.map((_, i) => parts.slice(i).join("."))];
  document.cookie.split(";").map((cookie) => cookie.split("=")[0].trim()).filter((name) => /^_ga(?:_|$)/.test(name)).forEach((name) => {
    domains.forEach((domain) => {
      const base = `${name}=; Max-Age=0; path=/; SameSite=Lax; Secure`;
      document.cookie = base + (domain ? `; domain=${domain}` : "");
      if (domain) document.cookie = base + `; domain=.${domain}`;
    });
  });
}

export function enableAnalytics() {
  window[`ga-disable-${ANALYTICS_ID}`] = false;
  if (document.getElementById("teccasa-analytics")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_ID, {
    send_page_view: false,
    cookie_expires: CONSENT_DAYS * 86400,
    cookie_update: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.id = "teccasa-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  document.head.appendChild(script);
}
