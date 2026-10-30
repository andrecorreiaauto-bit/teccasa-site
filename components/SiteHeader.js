import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SiteHeader({ english = false, alternateHref }) {
  const { pathname: path } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = english ? [
    ["Home", "/en"],
    ["Gate Repair", "/en/electric-gate-repair-lisbon"],
    ["Gate Installation", "/en/automatic-gate-installation-lisbon"],
    ["Garage Remotes", "/en/garage-remote-controls-lisbon"],
    ["Security Cameras", "/en/security-cameras-lisbon"],
    ["About us", "/en/about"],
  ] : [
    ["Início", "/"],
    ["Instalação de Automatismos", "/instalacao-automatismos-portoes"],
    ["Reparação de Portões", "/reparacao-portoes-lisboa"],
    ["Comandos", "/comandos-garagem"],
    ["Domótica", "/casas-inteligentes-lisboa"],
    ["Vigilância", "/instalacao-camaras-lisboa"],
    ["A empresa", "/a-empresa"],
  ];
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const onKeyDown = (event) => { if (event.key === "Escape") close(); };
    document.addEventListener("click", close);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);
  return (<>
        <nav className="site-header" aria-label={english ? "Main navigation" : "Navegação principal"} onClick={(event) => event.stopPropagation()}>
          <div className="header-row">
            <a className="brand" href={english ? "/en" : "/"}><img src="/favicon.png" alt="" width="30" height="30" />TecCasa Soluções</a>
            <div className="header-controls">
              <a className="language" href={alternateHref || (english ? "/a-empresa" : "/en/about")} lang={english ? "pt" : "en"}>{english ? "PT" : "EN"}</a>
              <button type="button" className="menu-button" aria-expanded={menuOpen} aria-controls="company-navigation" aria-label={english ? (menuOpen ? "Close menu" : "Open menu") : (menuOpen ? "Fechar menu" : "Abrir menu")} onClick={() => setMenuOpen((open) => !open)}>☰</button>
            </div>
          </div>
          {menuOpen && <div className="navigation-links" id="company-navigation">
            {menuItems.map(([label, href]) => <a key={href} href={href} aria-current={href === path ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="whatsapp" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>WhatsApp</a>
          </div>}
        </nav>
    <style jsx>{`
        .site-header { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; box-sizing: border-box; width: min(1200px, calc(100% - 40px)); padding: 14px 20px; background: rgba(255,255,255,0.92); backdrop-filter: blur(10px); border: 1px solid rgba(11,44,95,0.08); border-radius: 28px; box-shadow: 0 10px 30px rgba(11,44,95,0.10); }
        .header-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .brand { display: flex; align-items: center; gap: 10px; font-size: 20px; font-weight: 700; text-decoration: none; }
        .header-controls { display: flex; align-items: center; gap: 10px; }
        .language { font-size: 14px; font-weight: 700; border: 1px solid rgba(11,44,95,0.18); border-radius: 999px; padding: 7px 10px; line-height: 1; background: rgba(255,255,255,0.75); text-decoration: none; }
        .menu-button { display: block; background: none; border: none; padding: 0; font-size: 30px; cursor: pointer; color: #08285c; }
        .navigation-links { display: flex; flex-direction: column; gap: 14px; margin-top: 22px; padding-top: 18px; border-top: 1px solid rgba(11,44,95,0.08); max-height: calc(100dvh - 150px); overflow-y: auto; }
        .navigation-links a { text-decoration: none; font-weight: 700; font-size: 17px; padding: 10px 0; }
        .navigation-links .whatsapp { padding: 14px; margin-top: 10px; border-radius: 14px; text-align: center; background: #25d366; color: white; box-shadow: 0 10px 25px rgba(37,211,102,0.22); }

      a { color: #08285c; text-underline-offset: 4px; }
      a:focus-visible, button:focus-visible { outline: 3px solid #f7b545; outline-offset: 5px; }
      @media(max-width: 768px) { .site-header { top: 10px; width: calc(100% - 20px); padding: 12px; border-radius: 18px; } .brand { font-size: 16px; gap: 8px; } }
    `}</style>
  </>);
}
