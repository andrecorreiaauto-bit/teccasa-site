import ConfiguratorCallout from "./ConfiguratorCallout";
import Head from "next/head";
import SiteHeader from "./SiteHeader";
import { company } from "../lib/company";

export default function GateInstallationPage({ page, repair = false }) {
  const url = `${company.url}/${page.slug}`;
  const servicePath = repair ? "/reparacao-portoes" : "/instalacao-automatismos-portoes";
  const serviceLabel = repair ? "Reparação de portões" : "Instalação de automatismos";
  const whatsapp = `https://wa.me/351922021980?text=${encodeURIComponent(page.message || `Olá! Gostaria de pedir uma avaliação para ${repair ? "reparação de" : "instalação de automatismo num"} portão ${page.kind === "correr" || page.kind === "batente" ? "de " : ""}${page.kind === "basculantes" ? "basculante" : page.kind === "seccionados" ? "seccionado" : page.kind}.`)}`;
  const schema = { "@context":"https://schema.org", "@graph":[
    { "@type":"Service", "@id":`${url}#service`, name:page.title, description:page.description, url,
      serviceType:serviceLabel, provider:{ "@id":`${company.url}/#organization` } },
    { "@type":"BreadcrumbList", itemListElement:[
      { "@type":"ListItem", position:1, name:"Início", item:company.url + "/" },
      { "@type":"ListItem", position:2, name:serviceLabel, item:company.url + servicePath },
      { "@type":"ListItem", position:3, name:page.title, item:url },
    ] },
  ] };
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
      <meta property="og:image" content={company.url + page.image} />
      <meta property="og:image:alt" content={page.imageAlt} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(schema).replace(/</g,"\\u003c") }} />
    </Head>
    <div className="installation-type-page" lang="pt-PT">
      <SiteHeader alternateHref={repair ? "/en/electric-gate-repair-lisbon" : "/en/automatic-gate-installation-lisbon"} />
      <main data-service-kind={repair ? "repair" : "installation"}>
        <nav className="breadcrumbs" aria-label="Localização no site"><a href="/">Início</a><span aria-hidden="true"> / </span><a href={servicePath}>{serviceLabel}</a></nav>
        <section className="hero" aria-labelledby="installation-title">
          <div className="hero-copy">
            <p className="eyebrow">{page.eyebrow || (repair ? "Perceber a avaria antes de substituir" : "Automatizar o portão que já tem")}</p>
            <h1 id="installation-title">{page.title}</h1>
            <p className="lead">{page.lead}</p>
            <div className="actions"><a className="whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Pedir avaliação por WhatsApp</a><a className="phone" href={`tel:${company.telephone}`}>Ligar 922 021 980</a></div>
            <p className="call-note">Chamada para a rede móvel nacional. Deslocações por marcação.</p>
          </div>
          <figure>
            <img src={page.image} srcSet={`${page.imageSmall} 768w, ${page.image} 1440w`} sizes="(max-width: 850px) calc(100vw - 64px), (max-width: 1250px) 48vw, 580px" width="1440" height="960" alt={page.imageAlt} fetchPriority="high" />
            <figcaption>Imagem ilustrativa gerada por IA. A solução de montagem depende do portão existente.</figcaption>
          </figure>
        </section>
        {!repair && <ConfiguratorCallout kind={page.kind} />}
        <section className="at-a-glance" aria-labelledby="considerations-title">
          <h2 id="considerations-title">{repair ? "O que observamos na avaria" : "O que conta na escolha"}</h2>
          <div className="summary-grid">{page.summary.map(([title,text]) => <div key={title} className="summary-item"><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>
        <div className="topics">{page.sections.map((section,index) => <section className="topic" key={section.title}>
          <span className="step" aria-hidden="true">{String(index+1).padStart(2,"0")}</span>
          <h2>{section.title}</h2>
          {section.paragraphs.map(text => <p key={text}>{text}</p>)}
        </section>)}</div>
        <section className="photos" aria-labelledby="photos-title">
          <div><p className="eyebrow">Podemos começar por fotografias</p><h2 id="photos-title">Mostre-nos o seu portão.</h2><p>Não precisa de saber a referência do motor nem de ter todas as medidas para iniciar o contacto. Estas imagens ajudam a preparar a avaliação:</p></div>
          <ul>{page.photos.map(text => <li key={text}>{text}</li>)}</ul>
          <p className="photo-note">Fotografe sem desmontar o equipamento. Evite incluir pessoas, matrículas ou documentos sem relação com o pedido.</p>
        </section>
        <section className="questions" aria-labelledby="questions-title"><h2 id="questions-title">{repair ? "Dúvidas sobre a reparação" : "Dúvidas antes de automatizar"}</h2>{page.questions.map(({question,answer}) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
        <section className="contact" aria-labelledby="contact-title"><div><h2 id="contact-title">Vamos perceber o que faz sentido para o seu portão?</h2><p>{page.contact}</p><p>Fala diretamente com quem analisa e executa o trabalho.</p></div><div className="actions"><a className="whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Falar com a TecCasa</a><a href={`mailto:${company.email}`}>{company.email}</a></div></section>
        <div className="practical-links"><p>Deslocações por marcação em Lisboa e arredores, nas duas margens do Tejo. Consulte algumas das <a href="/zonas-de-assistencia">zonas de assistência</a>. Se não encontrar a sua localidade, contacte-nos para confirmar a possibilidade de deslocação.</p><p>{repair ? <><a href="/reparacao-portoes">Informação geral sobre reparação</a> · <a href="/instalacao-automatismos-portoes">Quer automatizar um portão?</a></> : <>Já tem equipamento? <a href="/instalacao-kit-portao-automatico">Instalação de kits fornecidos pelo cliente</a> · <a href="/reparacao-portoes">Precisa de reparar um automatismo?</a></>} · <a href="/condicoes-servicos">Condições dos serviços</a></p></div>
      </main>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a TecCasa por WhatsApp">WhatsApp</a>
    </div>
    <style jsx>{`
      .installation-type-page { padding:122px 24px 48px; background:#f4f7fb; font:17px/1.75 Arial,sans-serif; color:#34445a; }
      main { max-width:1200px; margin:0 auto; }
      a { color:#08285c; text-underline-offset:4px; }
      a:focus-visible,summary:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      .breadcrumbs { font-size:14px; margin-bottom:20px; }
      .hero { display:grid; grid-template-columns:1fr 1.1fr; gap:36px; align-items:center; padding:38px; border-radius:30px; background:linear-gradient(120deg,#0b285b,#103f83); color:#fff; }
      .eyebrow { font-weight:700; font-size:14px; margin:0 0 16px; }
      h1 { font-size:clamp(30px,3.1vw,42px); line-height:1.18; margin:0 0 22px; }
      .lead { font-size:18px; line-height:1.75; margin:0 0 24px; }
      .actions { display:flex; align-items:center; flex-wrap:wrap; gap:14px 20px; }
      .whatsapp { display:inline-block; padding:14px 20px; border-radius:14px; color:#fff; background:#25D366; text-decoration:none; font-size:16px; font-weight:700; line-height:1.5; }
      .hero .phone { color:#fff; font-size:16px; font-weight:700; }
      .call-note { font-size:12px; opacity:.85; margin:16px 0 0; }
      figure { margin:0; min-width:0; }
      figure img { display:block; width:100%; height:auto; border-radius:22px; background:#e6edf7; }
      figcaption { font-size:11px; line-height:1.55; margin-top:10px; opacity:.85; }
      h2,h3 { color:#08285c; line-height:1.35; }
      h2 { font-size:27px; margin:0 0 18px; }
      h3 { font-size:20px; margin:0 0 12px; }
      .at-a-glance { padding:38px 0 30px; }
      .at-a-glance > h2 { font-size:24px; }
      .summary-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
      .summary-item { padding:24px; background:#e9eff7; border-radius:22px; }
      .summary-item p { margin:0; font-size:16px; }
      .topics { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:22px; }
      .topic { padding:32px; background:#fff; border:1px solid #d8e3f1; border-radius:24px; }
      .topic p { margin:0 0 16px; }
      .topic p:last-child { margin-bottom:0; }
      .step { display:block; font-size:14px; font-weight:700; color:#667b98; margin-bottom:14px; }
      .photos { display:grid; grid-template-columns:1fr 1fr; gap:0 36px; padding:34px; margin-top:24px; background:#e9eff7; border-radius:24px; }
      .photos p { margin:0 0 16px; }
      .photos .eyebrow { color:#08285c; font-size:14px; }
      ul { margin:0; padding-left:22px; }
      li { margin-bottom:12px; padding-left:4px; }
      .photos .photo-note { grid-column:1/-1; font-size:14px; margin:14px 0 0; }
      .questions { margin:42px 0; }
      details { background:#fff; border:1px solid #d8e3f1; border-radius:18px; margin:12px 0; padding:20px 24px; }
      summary { cursor:pointer; color:#08285c; font-weight:700; padding-right:8px; }
      details p { margin:16px 0 0; }
      .contact { background:#fff; border:1px solid #d8e3f1; border-radius:24px; padding:34px; }
      .contact h2 { max-width:800px; }
      .contact p { max-width:850px; margin:0 0 18px; }
      .contact .actions { margin-top:24px; }
      .practical-links { font-size:14px; margin-top:28px; }
      .floating-whatsapp { position:fixed; bottom:22px; right:22px; z-index:900; padding:12px 18px; background:#25D366; color:#fff; text-decoration:none; font-size:14px; font-weight:700; border-radius:999px; box-shadow:0 8px 24px rgba(37,211,102,.25); }
      @media(max-width:850px) { .hero { grid-template-columns:1fr; gap:28px; padding:30px; } h1 { max-width:700px; font-size:36px; } .topics { grid-template-columns:1fr; } .summary-grid { grid-template-columns:1fr; gap:14px; } .summary-item { padding:22px; } .photos { grid-template-columns:1fr; gap:10px; } }
      @media(max-width:600px) { .installation-type-page { padding:100px 16px 36px; font-size:16px; } .hero { padding:26px 22px; border-radius:24px; } h1 { font-size:30px; } .lead { font-size:17px; } .topic,.photos,.contact { padding:26px 22px; } h2 { font-size:24px; } details { padding:18px 20px; } .actions { align-items:flex-start; flex-direction:column; } .whatsapp { box-sizing:border-box; text-align:center; width:100%; } .hero-copy .phone { align-self:center; } .floating-whatsapp { right:14px; bottom:14px; padding:10px 16px; } }
    `}</style>
  </>;
}
