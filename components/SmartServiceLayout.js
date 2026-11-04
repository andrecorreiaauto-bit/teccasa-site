import SiteHeader from "./SiteHeader";
import styles from "../lib/smart-service-styles";

export default function SmartServiceLayout({ children, alternateHref, whatsapp }) {
  return <div className="smart-service" lang="pt-PT">
    <SiteHeader alternateHref={alternateHref} />
    <main className="main-card" data-smart-service>{children}
<footer className="site-footer"><img src="/favicon.png" width="70" height="70" alt="" loading="lazy" /><h2>TecCasa Soluções</h2><p>Automatismos · Reparações · Soluções Inteligentes</p><div className="footer-contacts"><a href="tel:+351922021980">922 021 980</a><a href="mailto:geral@tec-casa.pt">geral@tec-casa.pt</a><span>Lisboa e arredores</span></div><p className="micro">© {new Date().getFullYear()} TecCasa Soluções. Todos os direitos reservados.</p></footer>
    </main>
    <a className="floating-wa" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a TecCasa por WhatsApp">WhatsApp</a>
    <style jsx global>{styles}</style>
  </div>;
}
