import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import styles from "../lib/smart-service-styles";

export default function SmartServiceLayout({ children, alternateHref, whatsapp }) {
  return <div className="smart-service" lang="pt-PT">
    <SiteHeader alternateHref={alternateHref} />
    <main className="main-card" data-smart-service>{children}
<SiteFooter />
    </main>
    <a className="floating-wa" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a TecCasa por WhatsApp">WhatsApp</a>
    <style jsx global>{styles}</style>
  </div>;
}
