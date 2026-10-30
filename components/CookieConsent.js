import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { CONSENT_KEY, readConsent, saveConsent, enableAnalytics, disableAnalytics } from "../lib/consent.mjs";

export default function CookieConsent({ english = false }) {
  const { pathname } = useRouter();
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState(null);
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const trackedPath = useRef(null);
  const active = useRef(false);
  const panel = useRef(null);

  useEffect(() => {
    const sync = () => {
      let saved = null;
      try { saved = readConsent(window.localStorage); } catch {}
      if (!saved?.analytics) {
        disableAnalytics();
        if (active.current) { window.location.reload(); return; }
      } else { enableAnalytics(); active.current = true; }
      setChoice(saved);
      setAnalytics(saved?.analytics || false);
      setReady(true);
    };
    const preferences = () => setOpen(true);
    const onStorage = (event) => { if (event.key === CONSENT_KEY || event.key === null) sync(); };
    sync();
    window.addEventListener("teccasa:cookie-preferences", preferences);
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", sync);
    return () => {
      window.removeEventListener("teccasa:cookie-preferences", preferences);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", sync);
    };
  }, []);

  useEffect(() => {
    if (!choice?.analytics) return;
    let timer;
    const checkExpiry = () => {
      const remaining = choice.expiresAt - Date.now();
      if (remaining <= 0) { disableAnalytics(); window.location.reload(); }
      else timer = setTimeout(checkExpiry, Math.min(remaining, 2147483647));
    };
    checkExpiry();
    return () => clearTimeout(timer);
  }, [choice]);

  useEffect(() => {
    if (!choice?.analytics || trackedPath.current === pathname) return;
    enableAnalytics();
    active.current = true;
    window.gtag("event", "page_view", { page_location: window.location.origin + pathname, page_path: pathname, page_title: document.title });
    trackedPath.current = pathname;
  }, [choice, pathname]);

  useEffect(() => {
    if (open) panel.current?.focus();
  }, [open]);

  const choose = (allow) => {
    let saved;
    try { saved = saveConsent(window.localStorage, allow); } catch { saved = saveConsent({ setItem() {} }, allow); }
    setChoice(saved);
    setAnalytics(allow);
    setOpen(false);
    if (allow) { enableAnalytics(); active.current = true; }
    else {
      disableAnalytics();
      if (active.current) window.location.reload();
    }
  };
  if (!ready || (choice && !open)) return null;
  const cookiesHref = english ? "/en/cookies" : "/cookies";
  return (
    <section ref={panel} tabIndex={-1} className="consent" aria-labelledby="cookie-title" role="region">
      <div className="copy">
        <h2 id="cookie-title">{english ? "Help us improve TecCasa" : "Ajude-nos a melhorar a TecCasa"}</h2>
        <p>{english ? "With your permission, we use Google Analytics to understand which pages are useful and improve the website. Analytics is optional; you can browse normally without it and change your choice at any time." : "Com a sua autorização, usamos o Google Analytics para perceber quais as páginas mais úteis e melhorar o site. A análise é opcional: pode navegar normalmente sem a ativar e alterar a sua escolha a qualquer momento."}</p>
        <a href={cookiesHref}>{english ? "Cookie information" : "Informação sobre cookies"}</a>
      </div>
      {open && <div className="categories">
        <p><strong>{english ? "Necessary" : "Necessários"}</strong> — {english ? "Remember your privacy choice. Always enabled." : "Guardam a sua escolha de privacidade. Sempre ativos."}</p>
        <label><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /> {english ? "Allow Google Analytics" : "Permitir Google Analytics"}</label>
        <p>{english ? "Your choice is saved in this browser for up to 180 days. No advertising cookies are enabled by this choice." : "A escolha é guardada neste navegador por um máximo de 180 dias. Esta escolha não ativa cookies de publicidade."}</p>
      </div>}
      <div className="actions">
        <button type="button" onClick={() => choose(true)}>{english ? "Accept analytics" : "Aceitar análise"}</button>
        <button type="button" onClick={() => choose(false)}>{english ? "Necessary only" : "Só necessários"}</button>
        {open ? <button type="button" onClick={() => choose(analytics)}>{english ? "Save preferences" : "Guardar preferências"}</button> : <button type="button" onClick={() => setOpen(true)}>{english ? "Preferences" : "Preferências"}</button>}
        {open && choice && <button type="button" onClick={() => { setAnalytics(choice.analytics); setOpen(false); }}>{english ? "Close without saving" : "Fechar sem guardar"}</button>}
      </div>
      <style jsx>{`
        .consent { position: fixed; z-index: 2000; bottom: 16px; left: 50%; transform: translateX(-50%); width: min(1100px, calc(100% - 32px)); box-sizing: border-box; background: white; color: #08285c; border: 1px solid #c8d6e8; border-radius: 20px; padding: 24px; box-shadow: 0 8px 40px #08285c33; max-height: calc(100dvh - 32px); overflow-y: auto; font: 15px/1.6 Arial, sans-serif; }
        h2 { font-size: 20px; line-height: 1.3; margin: 0 0 8px; }
        p { margin: 6px 0; color: #34445a; }
        a { color: #08285c; text-underline-offset: 3px; }
        .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 16px; }
        button { border: 1px solid #08285c; color: #08285c; background: #f1f5fa; padding: 11px 17px; font: 700 15px Arial, sans-serif; border-radius: 10px; cursor: pointer; }
        button:hover { background: #e2eaf5; }
        button:focus-visible, a:focus-visible, input:focus-visible { outline: 3px solid #f7b545; outline-offset: 3px; }
        .categories { margin-top: 14px; padding-top: 12px; border-top: 1px solid #dce5f0; }
        label { display: flex; align-items: center; gap: 8px; font-weight: 700; margin: 12px 0; }
        input { width: 19px; height: 19px; accent-color: #08285c; }
        @media(max-width: 600px) { .consent { padding: 18px; bottom: 8px; width: calc(100% - 16px); } .actions { gap: 8px; } button { flex: 1 1 130px; } }
      `}</style>
    </section>
  );
}
