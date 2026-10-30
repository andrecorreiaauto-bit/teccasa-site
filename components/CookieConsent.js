import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { CONSENT_KEY, readConsent, saveConsent, enableAnalytics, disableAnalytics } from "../lib/consent.mjs";

export default function CookieConsent({ english = false }) {
  const { pathname } = useRouter();
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState(null);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("intro");
  const [category, setCategory] = useState("overview");
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
    const preferences = () => { setOpen(true); setView("settings"); setCategory("overview"); };
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
  const visible = ready && (!choice || open);
  const previousFocus = useRef(null);
  useEffect(() => {
    if (!visible) return;
    previousFocus.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (previousFocus.current?.isConnected) previousFocus.current.focus();
    };
  }, [visible]);
  useEffect(() => {
    if (visible) panel.current?.focus();
  }, [visible, view]);
  useEffect(() => {
    if (!visible) return;
    const keyboard = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (choice) { setAnalytics(choice.analytics); setOpen(false); }
        else if (view === "settings") setView("intro");
        else choose(false);
      }
      if (event.key === "Tab") {
        const controls = [...panel.current.querySelectorAll('button, a[href], input')].filter((element) => !element.disabled && element.getClientRects().length);
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && (document.activeElement === last || document.activeElement === panel.current)) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", keyboard);
    return () => document.removeEventListener("keydown", keyboard);
  }, [visible, view, choice]);

  if (!visible) return null;
  const cookiesHref = english ? "/en/cookies" : "/cookies";
  const settings = view === "settings";
  const categories = [
    ["overview", english ? "About cookies" : "Sobre os cookies"],
    ["necessary", english ? "Strictly necessary" : "Estritamente necessários"],
    ["analytics", english ? "Performance and analytics" : "Desempenho e análise"],
  ];
  const showSettings = () => { setOpen(true); setView("settings"); setCategory("overview"); };
  const closeSettings = () => {
    setAnalytics(choice?.analytics || false);
    if (choice) setOpen(false);
    else setView("intro");
  };
  return (
    <div className="consent-backdrop">
      <section ref={panel} tabIndex={-1} className={`consent ${settings ? "settings" : "intro"}`} aria-labelledby="cookie-title" role="dialog" aria-modal="true">
        <header>
          <div className="brand"><img src="/favicon.png" alt="" width="32" height="32" /><span>TecCasa Soluções</span></div>
          {settings ? <button type="button" className="text-button" onClick={closeSettings}>{english ? "Close settings" : "Fechar definições"}</button> : <button type="button" className="text-button decline" onClick={() => choose(false)}>{english ? "Continue without accepting" : "Continuar sem aceitar"}</button>}
        </header>
        {settings ? <>
          <h2 id="cookie-title" className="settings-title">{english ? "Cookie settings" : "Definições de cookies"}</h2>
          <div className="settings-layout">
            <nav className="category-nav" aria-label={english ? "Cookie categories" : "Categorias de cookies"}>
              {categories.map(([key, label]) => <button type="button" key={key} aria-pressed={category === key} onClick={() => setCategory(key)}>{label}{key === "analytics" && <small>{analytics ? (english ? "Enabled" : "Ativos") : (english ? "Disabled" : "Desativados")}</small>}</button>)}
            </nav>
            <div className="category-content" aria-live="polite">
              {category === "overview" && <>
                <h3>{english ? "Your privacy choices" : "As suas escolhas de privacidade"}</h3>
                <p>{english ? "Cookies are small files stored in your browser. We also use local storage to remember your privacy choice." : "Os cookies são pequenos ficheiros guardados no navegador. Utilizamos também armazenamento local para recordar a sua escolha de privacidade."}</p>
                <p>{english ? "Necessary storage remembers your choice. Optional Google Analytics helps us understand which pages are useful and improve the website. It only starts when you authorise it." : "O armazenamento necessário guarda a sua escolha. O Google Analytics, opcional, ajuda-nos a perceber quais as páginas mais úteis e a melhorar o site. Só é ativado quando o autoriza."}</p>
                <p>{english ? "You can accept all optional cookies, reject them all, or select the categories you want and save your choices. This website does not request permission for advertising cookies." : "Pode aceitar todos os cookies opcionais, rejeitá-los todos ou selecionar as categorias que pretende e guardar as suas escolhas. Este site não solicita autorização para cookies de publicidade."}</p>
              </>}
              {category === "necessary" && <>
                <div className="category-heading"><h3>{english ? "Strictly necessary" : "Estritamente necessários"}</h3><span className="status">{english ? "Always enabled" : "Sempre ativos"}</span></div>
                <p>{english ? "We save your acceptance or refusal, its date and the notice version in this browser. This avoids asking you again on every visit and is necessary to respect your choice." : "Guardamos neste navegador a aceitação ou recusa, a data e a versão do aviso. Isto evita repetir a pergunta em cada visita e é necessário para respeitar a sua escolha."}</p>
                <p>{english ? "Storage key:" : "Chave de armazenamento:"} <code>teccasa_cookie_consent_v1</code></p>
              </>}
              {category === "analytics" && <>
                <div className="category-heading"><h3>{english ? "Performance and analytics" : "Desempenho e análise"}</h3>
                  <label className="toggle"><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /><span className="switch" aria-hidden="true" /><span>{english ? "Allow analytics" : "Permitir análise"}</span></label>
                </div>
                <p>{english ? "Google Analytics measures visits, sessions and the pages viewed. These statistics help us understand what works and where the website can improve. Refusing does not affect access to our services." : "O Google Analytics mede visitas, sessões e páginas consultadas. Estas estatísticas ajudam-nos a perceber o que funciona e onde podemos melhorar o site. A recusa não afeta o acesso aos nossos serviços."}</p>
                <p>{english ? "Cookies:" : "Cookies:"} <code>_ga</code> / <code>_ga_*</code>. {english ? "Advertising signals are disabled in this site's configuration." : "Os sinais publicitários estão desativados na configuração deste site."}</p>
              </>}
              <p className="duration">{english ? "Your choice is saved in this browser for up to 180 days and can be changed at any time in the footer." : "A escolha fica guardada neste navegador até 180 dias e pode ser alterada a qualquer momento no rodapé."}</p>
              <a href={cookiesHref}>{english ? "Read the cookie policy" : "Consultar a política de cookies"}</a>
            </div>
          </div>
          <footer>
            <button type="button" className="text-button back" onClick={() => setView("intro")}>{english ? "Back to notice" : "Voltar ao aviso"}</button>
            <div className="actions settings-actions">
              <button type="button" onClick={() => choose(false)}>{english ? "Reject all" : "Rejeitar todos"}</button>
              <button type="button" onClick={() => choose(analytics)}>{english ? "Save my choices" : "Guardar as minhas escolhas"}</button>
              <button type="button" className="accept" onClick={() => choose(true)}>{english ? "Accept all" : "Aceitar todos"}</button>
            </div>
          </footer>
        </> : <div className="intro-content">
          <span className="eyebrow">{english ? "Privacy at TecCasa" : "Privacidade na TecCasa"}</span>
          <h2 id="cookie-title">{english ? "Help us make your visit better." : "Ajude-nos a melhorar a sua visita."}</h2>
          <p>{english ? "With your permission, we use Google Analytics to understand which pages are useful and improve the website. Analytics cookies are optional and are only activated after you accept." : "Com a sua autorização, usamos o Google Analytics para perceber quais as páginas mais úteis e melhorar o site. Os cookies de análise são opcionais e só são ativados depois de aceitar."}</p>
          <p>{english ? "You can accept them, choose your preferences or continue without accepting. Your choice is saved for up to 180 days and can be changed at any time." : "Pode aceitar, escolher as suas preferências ou continuar sem aceitar. A escolha fica guardada até 180 dias e pode ser alterada a qualquer momento."} <a href={cookiesHref}>{english ? "Cookie policy" : "Política de cookies"}</a>.</p>
          <div className="actions intro-actions">
            <button type="button" onClick={showSettings}>{english ? "Cookie settings" : "Definições de cookies"}</button>
            <button type="button" className="accept" onClick={() => choose(true)}>{english ? "Accept cookies" : "Aceitar cookies"}</button>
          </div>
        </div>}
      </section>
      <style jsx>{`
        .consent-backdrop { position: fixed; z-index: 2000; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(8, 25, 49, .42); padding: 20px; box-sizing: border-box; }
        .consent { width: min(100%, 800px); max-height: calc(100dvh - 40px); overflow-y: auto; box-sizing: border-box; background: #fff; color: #08285c; border: 1px solid #c8d6e8; border-radius: 24px; box-shadow: 0 20px 70px #08285c40; font: 16px/1.65 Arial, sans-serif; }
        .settings { width: min(100%, 1000px); }
        header { display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; padding: 22px 28px; border-bottom: 1px solid #e1e8f1; }
        .brand { display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 700; }
        .intro-content { padding: 30px 36px 36px; }
        .eyebrow { font-size: 13px; color: #52647a; font-weight: 700; }
        h2 { font-size: clamp(25px, 4vw, 32px); line-height: 1.2; margin: 12px 0 18px; }
        h3 { font-size: 20px; line-height: 1.3; margin: 0 0 16px; }
        p { margin: 0 0 16px; color: #34445a; }
        a { color: #08285c; text-underline-offset: 3px; }
        button { border: 1px solid #08285c; color: #08285c; background: #fff; padding: 12px 18px; font: 700 15px/1.4 Arial, sans-serif; border-radius: 12px; cursor: pointer; }
        button:hover { background: #edf2f8; }
        .text-button { border: 0; border-radius: 4px; padding: 5px 0; font-size: 14px; text-decoration: underline; text-underline-offset: 4px; background: transparent; }
        .decline { white-space: nowrap; }
        .accept { background: #08285c; color: #fff; }
        .accept:hover { background: #16457b; }
        .actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .intro-actions { justify-content: flex-end; margin-top: 28px; }
        .intro-actions button { min-width: 185px; }
        .settings-title { padding: 0 28px; font-size: 25px; margin: 24px 0; }
        .settings-layout { display: grid; grid-template-columns: 230px minmax(0, 1fr); border-top: 1px solid #e1e8f1; border-bottom: 1px solid #e1e8f1; }
        .category-nav { background: #f4f7fb; padding: 12px; display: flex; flex-direction: column; align-items: stretch; gap: 8px; }
        .category-nav button { border: 1px solid transparent; text-align: left; background: transparent; border-radius: 10px; }
        .category-nav button[aria-pressed="true"] { border-color: #b8cbe4; background: #e4edf8; }
        small { display: block; font-weight: 400; color: #52647a; margin-top: 4px; }
        .category-content { padding: 28px; min-height: 300px; overflow-wrap: anywhere; }
        .category-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
        .status { background: #edf2f8; padding: 4px 10px; border-radius: 8px; font-size: 13px; font-weight: 700; }
        .duration { font-size: 14px; color: #52647a; padding-top: 12px; border-top: 1px solid #e1e8f1; }
        footer { padding: 20px 28px 24px; }
        .back { margin-bottom: 16px; }
        .settings-actions { justify-content: flex-end; }
        .toggle { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700; cursor: pointer; position: relative; margin-bottom: 16px; }
        .toggle input { position: absolute; width: 46px; height: 26px; margin: 0; opacity: 0; cursor: pointer; }
        .switch { display: block; width: 46px; height: 26px; background: #66758a; border-radius: 20px; position: relative; flex-shrink: 0; }
        .switch::after { content: ''; position: absolute; width: 20px; height: 20px; top: 3px; left: 3px; background: white; border-radius: 50%; transition: transform .15s; }
        input:checked + .switch { background: #08285c; }
        input:checked + .switch::after { transform: translateX(20px); }
        button:focus-visible, a:focus-visible { outline: 3px solid #e8a027; outline-offset: 4px; }
        input:focus-visible + .switch { outline: 3px solid #e8a027; outline-offset: 4px; }
        @media(max-width: 650px) {
          .consent-backdrop { padding: 10px; }
          .consent { max-height: calc(100dvh - 20px); border-radius: 18px; }
          header { padding: 18px 20px; gap: 12px; }
          .brand { font-size: 16px; }
          .intro-content { padding: 20px; }
          .intro-actions button { flex: 1 1 180px; }
          .settings-layout { grid-template-columns: 1fr; }
          .category-nav { flex-direction: row; flex-wrap: wrap; }
          .category-nav button { flex: 1 1 140px; padding: 10px; font-size: 14px; }
          .category-content { padding: 20px; min-height: 0; }
          .settings-title { padding: 0 20px; }
          footer { padding: 18px 20px; }
          .settings-actions button { flex: 1 1 150px; }
        }
        @media(prefers-reduced-motion: reduce) { .switch::after { transition: none; } }
      `}</style>
    </div>
  );
}
