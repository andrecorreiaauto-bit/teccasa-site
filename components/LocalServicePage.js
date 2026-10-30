import Head from "next/head";
import SiteHeader from "./SiteHeader";
import LocalAreas from "./LocalAreas";
import { company } from "../lib/company";

export default function LocalServicePage({ page }) {
  const url = `${company.url}/${page.slug}`;
  const installation = page.kind === "installation";
  const servicePath = installation ? "/instalacao-automatismos-portoes" : "/reparacao-portoes-lisboa";
  const serviceLabel = installation ? "Instalação de automatismos" : "Reparação de portões";
  const whatsapp = `https://wa.me/351922021980?text=${encodeURIComponent(page.message)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}#service`, name: page.title, description: page.description, url,
        serviceType: serviceLabel, areaServed: { "@type": "Place", name: page.area },
        provider: { "@id": `${company.url}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: company.url + "/" },
        { "@type": "ListItem", position: 2, name: serviceLabel, item: company.url + servicePath },
        { "@type": "ListItem", position: 3, name: page.area, item: url },
      ] },
    ],
  };
  return <>
    <Head>
      <title>{`${page.title} | TecCasa Soluções`}</title>
      <meta name="description" content={page.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${page.title} | TecCasa Soluções`} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${company.url}${page.image}`} />
      <meta property="og:image:alt" content={page.imageAlt} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </Head>
    <div className="local-page" lang="pt-PT">
      <SiteHeader alternateHref={installation ? "/en/automatic-gate-installation-lisbon" : "/en/electric-gate-repair-lisbon"} />
      <main>
        <nav className="breadcrumbs" aria-label="Localização no site"><a href="/">Início</a><span aria-hidden="true"> / </span><a href={servicePath}>{serviceLabel}</a><span aria-hidden="true"> / </span><span>{page.area}</span></nav>
        <section className="hero" aria-labelledby="local-title">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 id="local-title">{page.title}</h1>
            <p className="lead">{page.intro}</p>
            <div className="actions"><a className="primary" href={whatsapp} target="_blank" rel="noopener noreferrer">{installation ? "Pedir orçamento por WhatsApp" : "Descrever a avaria por WhatsApp"}</a><a className="phone" href={`tel:${company.telephone}`}>Ligar 922 021 980</a></div>
            <p className="call-note">Chamada para a rede móvel nacional. Deslocações por marcação.</p>
          </div>
          <figure><img src={page.image} alt={page.imageAlt} width="960" height="640" fetchPriority="high" /><figcaption>Imagem ilustrativa do serviço; não representa uma intervenção nesta localidade.</figcaption></figure>
        </section>
        <section className="introduction" aria-labelledby="coverage-title"><h2 id="coverage-title">{page.coverageTitle}</h2>{page.coverage.map((p, n) => <p key={n}>{p}</p>)}</section>
        <div className="service-content">{page.sections.map((section, n) => <section key={section.title} className="topic">
          <p className="step" aria-hidden="true">{String(n + 1).padStart(2, "0")}</p><h2>{section.title}</h2>
          {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </section>)}</div>
        <section className="visit" aria-labelledby="visit-title"><h2 id="visit-title">{page.visitTitle}</h2><p>{page.visitIntro}</p><ul>{page.visitItems.map(item => <li key={item}>{item}</li>)}</ul><p>Não precisa de desmontar o equipamento para enviar fotografias. Evite incluir pessoas, matrículas ou documentos sem relação com o pedido.</p></section>
        <section className="questions" aria-labelledby="questions-title"><h2 id="questions-title">{page.questionsTitle}</h2>{page.questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
        <section className="contact" aria-labelledby="contact-title"><h2 id="contact-title">{page.contactTitle}</h2><p>{page.contactText}</p><div className="actions"><a className="primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Falar com a TecCasa</a><a href={`mailto:${company.email}`}>{company.email}</a></div><p className="small-links"><a href={`/${page.pairedSlug}`}>{page.pairedLabel}</a><span aria-hidden="true"> · </span><a href="/condicoes-servicos">Condições dos serviços</a></p></section>
        <LocalAreas />
      </main>
    </div>
    <style jsx>{`
      .local-page { background:#f4f7fb; padding:122px 24px 48px; color:#34445a; font:17px/1.75 Arial,sans-serif; }
      main { max-width:1200px; margin:auto; }
      a { color:#08285c; text-underline-offset:4px; }
      .breadcrumbs { font-size:13px; margin-bottom:25px; }
      .hero { display:grid; grid-template-columns:1.1fr 1fr; gap:42px; align-items:center; padding:clamp(24px,4vw,48px); background:white; border:1px solid #dce5f0; border-radius:28px; }
      .eyebrow { color:#396447; font-size:14px; font-weight:700; margin-top:0; }
      h1 { color:#08285c; font-size:clamp(30px,3.8vw,48px); line-height:1.13; margin:15px 0 22px; letter-spacing:-.6px; }
      h2 { color:#08285c; font-size:clamp(23px,2.7vw,30px); line-height:1.3; margin:0 0 18px; }
      p { margin:0 0 18px; }
      .lead { font-size:19px; }
      figure { margin:0; min-width:0; }
      figure img { display:block; width:100%; height:auto; aspect-ratio:3/2; object-fit:cover; border-radius:18px; }
      figcaption { font-size:11px; line-height:1.5; margin-top:10px; color:#667385; }
      .actions { display:flex; align-items:center; flex-wrap:wrap; gap:14px 20px; margin-top:26px; }
      .primary { background:#158347; color:white; padding:13px 20px; border-radius:12px; font-weight:700; text-decoration:none; }
      .phone { font-weight:700; }
      .call-note { font-size:12px; color:#526075; margin:12px 0 0; }
      .introduction { max-width:880px; margin:60px auto 38px; }
      .service-content { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px; }
      .topic { position:relative; background:#fff; padding:32px; border:1px solid #dce5f0; border-radius:20px; }
      .topic h2 { font-size:24px; }
      .topic:last-child { grid-column:1 / -1; }
      .step { font-size:14px; color:#66819f; font-weight:700; margin-bottom:12px; }
      .visit { background:#e8eff8; border-radius:22px; padding:36px; margin:32px 0 50px; }
      .visit ul { padding-left:22px; }
      .visit li { margin-bottom:10px; }
      .questions { max-width:900px; margin:0 auto 50px; }
      details { border-bottom:1px solid #cbd8e7; padding:20px 0; }
      summary { color:#08285c; font-weight:700; cursor:pointer; padding-right:14px; }
      details p { margin:16px 0 0; }
      .contact { background:#0b2c5f; color:white; padding:40px; border-radius:24px; }
      .contact h2,.contact a { color:white; }
      .contact .primary { background:#fff; color:#08285c; }
      .small-links { font-size:14px; margin:26px 0 0; }
      a:focus-visible,summary:focus-visible { outline:3px solid #e4a719; outline-offset:5px; }
      @media(max-width:850px) { .hero { grid-template-columns:1fr; gap:25px; } .hero figure { max-width:650px; } }
      @media(max-width:600px) { .local-page { padding:96px 14px 30px; font-size:16px; } .hero { padding:24px 20px; border-radius:20px; } .service-content { grid-template-columns:1fr; } .topic,.visit,.contact { padding:25px 22px; } .introduction { margin-top:38px; } .actions { align-items:stretch; flex-direction:column; } .primary { text-align:center; } }
    `}</style>
  </>;
}
