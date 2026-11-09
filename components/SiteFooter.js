import { company } from "../lib/company";

export default function SiteFooter({ english = false }) {
  return <footer className="site-footer" data-site-footer>
    <img src="/favicon.png" alt="" width="70" height="70" loading="lazy" />
    <h2>{company.name}</h2>
    <p>{english ? "Gate Automation · Repairs · Smart Solutions" : "Automatismos · Reparações · Soluções Inteligentes"}</p>
    <div className="contacts" data-contact-actions>
      <a data-contact-button="whatsapp" href={`https://wa.me/${company.telephone.slice(1)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a data-contact-button="secondary" href={`tel:${company.telephone}`}>{english ? "+351 922 021 980" : "922 021 980"}</a>
      <a data-contact-button="secondary" href={`mailto:${company.email}`}>{company.email}</a>
    </div>
    <a className="area" href={english ? "/en/service-areas" : "/zonas-de-assistencia"}>
      {english ? "Lisbon and surrounding areas" : "Lisboa e arredores"}
    </a>
    <small>© {new Date().getFullYear()} {company.name}. {english ? "All rights reserved." : "Todos os direitos reservados."}</small>
    <style jsx>{`
      .site-footer {
        box-sizing: border-box;
        margin: 40px auto 0;
        padding: 37px 25px 30px;
        text-align: center;
        border: 1px solid #dce6f2;
        border-radius: 25px;
        background: linear-gradient(180deg, #fff, #e0e9f6);
        color: #405168;
        font: 16px/1.6 Arial, sans-serif;
      }
      .site-footer img { display: block; margin: 0 auto 14px; }
      .site-footer h2 { margin: 0; color: #08285c; font-size: 25px; line-height: 1.2; letter-spacing: 0; }
      .site-footer p { margin: 9px 0 0; font-size: 16px; }
      .contacts { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin: 22px 0 15px; }
      .contacts a { box-shadow: none; }
      .area { color: #08285c; font-size: 14px; text-underline-offset: 4px; }
      .area:focus-visible { outline: 3px solid #f7b545; outline-offset: 4px; }
      small { display: block; margin-top: 14px; font-size: 12px; }
      @media (max-width: 600px) { .site-footer { padding: 28px 18px; } }
    `}</style>
  </footer>;
}
