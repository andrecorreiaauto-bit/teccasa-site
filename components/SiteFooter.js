import { company } from "../lib/company";

export default function SiteFooter({ english = false, showSocialLinks = !english }) {
  return <footer className="site-footer">
    <img src="/favicon.png" alt="" width="70" height="70" />
    <h2>TecCasa Soluções</h2><p>{english ? "Gate Automation · Repairs · Smart Solutions" : "Automatismos · Reparações · Soluções Inteligentes"}</p>
    <div className="contacts"><a href={`tel:${company.telephone}`}>922 021 980</a><a href={`mailto:${company.email}`}>{company.email}</a><span>{english ? "Lisbon and surrounding areas" : "Lisboa e arredores"}</span></div>
    <div className="socials"><a className="whatsapp" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer">WhatsApp</a>{showSocialLinks && <><a className="facebook" href="https://www.facebook.com/share/1CzrBzuXSY/" target="_blank" rel="noopener noreferrer">Facebook</a><a className="instagram" href="https://www.instagram.com/teccasasolucoes/" target="_blank" rel="noopener noreferrer">Instagram</a></>}</div>
    <small>© {new Date().getFullYear()} TecCasa Soluções. {english ? "All rights reserved." : "Todos os direitos reservados."}</small>
    <style jsx>{`
      .site-footer { box-sizing:border-box; margin:45px auto 0; padding:45px 30px; text-align:center; color:#555; border-radius:25px; background:linear-gradient(180deg,#fff 0%,#fff 15%,#f5f7fb 35%,#dfe8f5 65%,#cfdcf0 100%); border:1px solid rgba(11,44,95,.05); font-family:Arial,sans-serif; }
      img { display:block; margin:0 auto 18px; }
      h2 { margin:0 0 10px; color:#08285c; font-size:24px; }
      p { margin:0 0 25px; font-size:17px; line-height:1.7; }
      .contacts,.socials { display:flex; justify-content:center; flex-wrap:wrap; gap:15px 25px; margin-bottom:25px; }
      a { color:#08285c; text-underline-offset:4px; }
      .socials a { border-radius:999px; padding:12px 18px; font-size:14px; font-weight:700; text-decoration:none; background:#e7eef9; }
      .socials .whatsapp { color:white; background:#25D366; }
      .socials .facebook { color:white; background:#1877f2; }
      .socials .instagram { color:white; background:linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5); }
      a:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      small { font-size:13px; }
      @media(max-width:600px) { .site-footer { padding:32px 20px; } .contacts { flex-direction:column; } }
    `}</style>
  </footer>;
}
