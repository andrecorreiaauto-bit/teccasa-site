import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import localServices from "../lib/local-services.json";

const whatsapp = "https://wa.me/351922021980?text=" + encodeURIComponent("Olá! Gostaria de confirmar se a TecCasa se desloca à minha localidade: ");

export default function ServiceAreas({ areas }) {
  const url = "https://tec-casa.pt/zonas-de-assistencia";
  const description = "Algumas das zonas de assistência da TecCasa para instalação e reparação de automatismos de portões. Confirme outras localidades por WhatsApp.";
  const breadcrumb = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
    { "@type":"ListItem", position:1, name:"Início", item:"https://tec-casa.pt/" },
    { "@type":"ListItem", position:2, name:"Zonas de assistência", item:url },
  ] };
  return <>
    <Head>
      <title>Zonas de assistência | TecCasa Soluções</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zonas de assistência | TecCasa Soluções" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(breadcrumb).replace(/</g,"\u003c") }} />
    </Head>
    <div className="areas-page" lang="pt-PT">
      <SiteHeader alternateHref="/en" />
      <main>
        <nav className="breadcrumbs" aria-label="Localização no site"><a href="/">Início</a><span aria-hidden="true"> / </span><span>Zonas de assistência</span></nav>
        <section className="hero" aria-labelledby="areas-title">
          <p className="eyebrow">Instalação e reparação de automatismos</p>
          <h1 id="areas-title">Sempre perto, nas duas margens do Tejo.</h1>
          <p>Prestamos assistência em Lisboa e arredores, nas duas margens do Tejo. As localidades apresentadas abaixo são algumas das zonas que atendemos.</p>
          <p className="coverage-note">Esta lista não é exaustiva.</p>
        </section>
        <section className="contact" aria-labelledby="confirm-area-title">
          <div><h2 id="confirm-area-title">Não encontra a sua localidade?</h2><p>Envie-nos a localização por WhatsApp para confirmarmos a possibilidade de deslocação.</p></div>
          <a className="whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Confirmar a minha localidade</a>
        </section>
        <section className="locations" aria-labelledby="locations-title">
          <h2 id="locations-title">Algumas das zonas que atendemos</h2>
          <p>Escolha a localidade para consultar a informação de instalação ou reparação de portões. As deslocações são feitas por marcação.</p>
          <div className="area-grid">{areas.map(area => <article className="area" key={area.name}>
            <h3>{area.name}</h3>
            <div className="service-links">
              <a href={area.installation} aria-label={`Instalação de automatismos em ${area.name}`}>Instalação <span aria-hidden="true">→</span></a>
              <a href={area.repair} aria-label={`Reparação de portões em ${area.name}`}>Reparação <span aria-hidden="true">→</span></a>
            </div>
          </article>)}</div>
        </section>
        <section className="contact closing" aria-labelledby="other-areas-title">
          <div><h2 id="other-areas-title">A sua localidade pode não estar nesta lista.</h2><p>Fale connosco para confirmar a deslocação e explicar o que precisa. O contacto é direto com quem analisa e executa o trabalho.</p></div>
          <a className="whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Perguntar por WhatsApp</a>
        </section>
        <p className="general-links">Informação geral: <a href="/instalacao-automatismos-portoes">Instalação de automatismos</a> · <a href="/reparacao-portoes">Reparação de portões</a></p>
      </main>
    </div>
    <style jsx>{`
      .areas-page { background:#f4f7fb; padding:122px 24px 48px; color:#34445a; font:17px/1.75 Arial,sans-serif; }
      main { max-width:1200px; margin:auto; }
      a { color:#08285c; text-underline-offset:4px; }
      a:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      .breadcrumbs { font-size:14px; margin-bottom:20px; }
      .hero { background:linear-gradient(120deg,#0b285b,#103f83); border-radius:30px; padding:52px; color:white; }
      .eyebrow { font-size:15px; font-weight:700; margin:0 0 16px; }
      h1 { max-width:800px; font-size:clamp(32px,4vw,48px); line-height:1.2; margin:0 0 24px; }
      .hero p:not(.eyebrow) { max-width:800px; margin:12px 0 0; font-size:19px; }
      .hero .coverage-note { font-weight:700; }
      h2,h3 { color:#08285c; line-height:1.35; }
      h2 { font-size:27px; margin:0 0 12px; }
      .contact { display:flex; align-items:center; justify-content:space-between; gap:28px; padding:30px 34px; margin-top:24px; background:#e9eff7; border-radius:24px; }
      .contact h2 { font-size:23px; }
      .contact p { max-width:720px; margin:0; }
      .whatsapp { display:inline-block; flex-shrink:0; background:#25D366; color:white; padding:14px 22px; border-radius:14px; font-size:16px; font-weight:700; text-align:center; text-decoration:none; }
      .locations { margin:48px 0 32px; }
      .locations > p { max-width:800px; margin:0 0 26px; }
      .area-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
      .area { padding:24px; background:white; border:1px solid #d8e3f1; border-radius:22px; }
      h3 { font-size:20px; margin:0 0 18px; }
      .service-links { display:flex; flex-wrap:wrap; gap:12px 24px; }
      .service-links a { font-size:16px; font-weight:700; }
      .closing { background:white; border:1px solid #d8e3f1; }
      .general-links { font-size:15px; margin:28px 0 0; }
      @media(max-width:960px) { .contact { align-items:flex-start; flex-direction:column; gap:20px; } .area-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
      @media(max-width:600px) { .areas-page { padding:100px 16px 36px; } .hero { padding:30px 24px; border-radius:24px; } .hero p:not(.eyebrow) { font-size:17px; } .contact { padding:26px 24px; } .area-grid { grid-template-columns:1fr; gap:14px; } .locations { margin-top:36px; } .whatsapp { box-sizing:border-box; width:100%; } }
    `}</style>
  </>;
}

export function getStaticProps() {
  const grouped = new Map();
  for (const page of Object.values(localServices)) {
    if (!grouped.has(page.area)) grouped.set(page.area,{ name:page.area });
    grouped.get(page.area)[page.kind === "installation" ? "installation" : "repair"] = "/" + page.slug;
  }
  const areas = [...grouped.values()].sort((a,b) => a.name.localeCompare(b.name,"pt"));
  if (areas.some(area => !area.installation || !area.repair)) throw new Error("Missing local service page");
  return { props:{ areas } };
}
