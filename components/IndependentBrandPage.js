import SiteFooter from "./SiteFooter";
import ServiceCoverageNotice from "./ServiceCoverageNotice";
import ConfiguratorButton from "./ConfiguratorButton";
import Head from "next/head";
import SiteHeader from "./SiteHeader";
import { company } from "../lib/company";

// Match the established brand pages (Nice, BFT, Roger, etc.). Gate-type
// pages intentionally keep their separate layout in GateInstallationPage.
const brands = {
  erreka: {
    name: "Erreka", logo: "/marcas/erreka-logo.png", width: 600, height: 142,
    introduction: "Diagnóstico e assistência a automatismos Erreka para portões. Apoio em motores, centrais, comandos e recetores, com identificação do equipamento e avaliação da avaria antes de propor uma intervenção.",
    services: [
      ["Diagnóstico e assistência", "Análise das falhas de abertura, fecho e movimento, tendo em conta o motor, a central e o estado do portão."],
      ["Comandos e recetores", "Identificação do sistema instalado para confirmar a compatibilidade de novos comandos e a gestão dos acessos."],
      ["Centrais e acessórios", "Avaliação da central, fotocélulas e restantes componentes, sem assumir que todo o conjunto é de origem."],
      ["Reparação ou substituição", "Confirmação da viabilidade de reparação e da disponibilidade de componentes antes de recomendar uma troca."],
    ],
  },
  pujol: {
    name: "Pujol", logo: "/marcas/pujol-logo.webp", width: 257, height: 300,
    introduction: "Reparação e assistência a automatismos Pujol para portões. Avaliamos motores, centrais, comandos e recetores, incluindo sistemas com alguns anos, para perceber o que pode ser reparado e que componentes podem ser aproveitados.",
    services: [
      ["Avaliação do automatismo", "Identificação do modelo e análise de ruídos, paragens ou falhas intermitentes, juntamente com o movimento do portão."],
      ["Comandos de garagem", "Verificação do comando e do recetor para avaliar falhas de resposta ou a possibilidade de acrescentar novos comandos."],
      ["Centrais e recetores", "Diagnóstico do sistema existente, incluindo componentes que possam ter sido alterados em intervenções anteriores."],
      ["Reparação de sistemas antigos", "Análise da avaria e da disponibilidade de peças para explicar as opções de reparação ou eventual substituição."],
    ],
  },
};

const symptoms = [
  ["Comando da garagem não funciona", "/comando-garagem-nao-funciona", "O portão não responde ao comando ou deixou de reconhecer as ordens."],
  ["Comando só funciona perto", "/comando-garagem-so-funciona-perto", "O alcance diminuiu e precisa de se aproximar do portão para o acionar."],
  ["O portão não fecha", "/portao-nao-fecha", "O portão abre, mas não inicia ou não completa a manobra de fecho."],
  ["O portão fecha e volta a abrir", "/portao-fecha-e-volta-a-abrir", "O movimento inverte durante o fecho ou ao chegar ao fim do percurso."],
  ["Motor do portão sem força", "/motor-portao-sem-forca", "O automatismo faz esforço, perde velocidade ou deixa o portão a meio."],
  ["Portão de garagem não abre", "/portao-garagem-nao-abre", "Falhas de abertura em portões seccionados, basculantes e motores de teto."],
];

export default function IndependentBrandPage({ page }) {
  const brand = brands[page.kind];
  const url = `${company.url}/${page.slug}`;
  const whatsapp = `https://wa.me/351922021980?text=${encodeURIComponent(page.message)}`;
  const notice = `Serviço técnico independente multimarca. Não somos representantes nem assistência oficial ${brand.name}.`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${url}#service`, name: page.title, description: page.description, url,
      serviceType: "Reparação de portões", provider: { "@id": `${company.url}/#organization` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${company.url}/` },
      { "@type": "ListItem", position: 2, name: "Reparação de portões", item: `${company.url}/reparacao-portoes` },
      { "@type": "ListItem", position: 3, name: page.title, item: url },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </Head>
    <div className="brand-page" lang="pt-PT">
      <SiteHeader alternateHref="/en/electric-gate-repair-lisbon" />
      <main className="main-card" data-service-kind="repair">
        <section className="hero" aria-labelledby="brand-title">
          <div className="hero-copy">
            <div className="brand-heading"><span className="badge">Automatismos para portões</span><img className="brand-logo" src={brand.logo} alt={brand.name} width={brand.width} height={brand.height} /></div>
            <h1 id="brand-title">Automatismos {brand.name} para portões</h1>
            <p className="lead">{brand.introduction}</p>
            <p className="independent">{notice}</p>
            <div data-contact-actions className="actions"><a data-contact-button="whatsapp" className="button whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Pedir assistência</a><a className="button navy" href="#servicos">Ver serviços</a></div>
          </div>
          <figure>
            <img className="hero-image" src={page.image} srcSet={`${page.imageSmall} 768w, ${page.image} 1440w`} sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1250px) 44vw, 525px" width="1440" height="960" alt={page.imageAlt} fetchPriority="high" />
            <figcaption>Imagem ilustrativa gerada por IA. A montagem depende do portão existente.</figcaption>
          </figure>
        </section>

        <section id="servicos" className="services" aria-labelledby="services-title">
          <h2 id="services-title" className="section-title">Serviços em automatismos {brand.name}</h2>
          <p className="section-intro">Apoio a particulares e condomínios, com contacto direto e avaliação do equipamento antes de avançar com o trabalho.</p>
          <div className="service-grid">{brand.services.map(([title, text]) => <article className="service-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section id="avarias" className="problems" aria-labelledby="problems-title">
          <h2 id="problems-title" className="section-title">Problemas comuns em automatismos {brand.name}</h2>
          <p className="section-intro">O comportamento do portão ajuda a preparar o diagnóstico. Conheça alguns dos sintomas que podem justificar uma avaliação técnica.</p>
          <div className="problem-grid">{symptoms.map(([title, href, text]) => <a className="problem-card" href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>Saber mais →</span></a>)}</div>
        </section>

        <section className="assessment" aria-labelledby="assessment-title">
          <h2 id="assessment-title" className="section-title">Como avaliamos o seu automatismo {brand.name}</h2>
          <div className="summary-grid">{page.summary.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
          <div className="topic-grid">{page.sections.map(section => <article key={section.title}><h3>{section.title}</h3>{section.paragraphs.map(text => <p key={text}>{text}</p>)}</article>)}</div>
        </section>

        <section className="photos" aria-labelledby="photos-title">
          <div><h2 id="photos-title">Podemos começar por fotografias</h2><p>{page.contact}</p></div>
          <ul>{page.photos.map(text => <li key={text}>{text}</li>)}</ul>
          <p className="photo-note">Fotografe sem desmontar o equipamento. Evite incluir pessoas, matrículas ou documentos sem relação com o pedido.</p>
        </section>

        <section className="questions" aria-labelledby="questions-title"><h2 id="questions-title" className="section-title">Dúvidas sobre automatismos {brand.name}</h2>{page.questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>

        <ServiceCoverageNotice />
        <section className="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Precisa de ajuda com um automatismo {brand.name}?</h2>
          <p>Conte-nos o que se passa com o seu portão. Fala diretamente com quem analisa e executa o trabalho, para perceber as opções antes de decidir.</p>
          <div data-contact-actions className="actions"><a data-contact-button="whatsapp" className="button whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Pedir assistência</a><a data-contact-button="secondary" className="button navy" href={`tel:${company.telephone}`}>Ligar agora</a><ConfiguratorButton /></div>
          <p className="call-note">Chamada para a rede móvel nacional. Deslocações por marcação.</p>
        </section>
        <p className="brand-notice">{notice} A referência à marca identifica o equipamento e não uma relação oficial com o fabricante.</p>
        <p className="brand-notice"><a href="/reparacao-portoes">Reparação de Automatismos</a> · <a href="/instalacao-automatismos-portoes">Instalação de Automatismos</a></p>
        <SiteFooter />
      </main>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a TecCasa por WhatsApp">WhatsApp</a>
    </div>
    <style jsx>{`
      .brand-page { padding:110px 40px 40px; background:#f4f7fb; min-height:100vh; font-family:Arial,sans-serif; color:#444; }
      .main-card { width:min(1200px,calc(100% - 40px)); margin:auto; background:#fff; padding:50px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,.1); box-sizing:border-box; }
      a { color:#08285c; text-underline-offset:4px; }
      a:focus-visible,summary:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      h1,h2,h3 { color:#08285c; }
      p { line-height:1.75; }
      section[id] { scroll-margin-top:110px; }
      .hero { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:50px; align-items:center; padding:70px 0; }
      .brand-heading { display:flex; align-items:center; flex-wrap:wrap; gap:30px; min-height:98px; margin-bottom:20px; }
      .badge { display:inline-block; background:#eef3fa; color:#08285c; padding:8px 14px; border-radius:999px; font-size:14px; font-weight:700; box-shadow:0 8px 20px rgba(11,44,95,.08); }
      .brand-logo { height:98px; width:auto; max-width:190px; object-fit:contain; }
      h1 { font-size:clamp(40px,5vw,56px); line-height:1.05; font-weight:900; margin:0 0 24px; }
      .lead { font-size:21px; line-height:1.8; margin:0 0 18px; }
      .independent { font-size:16px; line-height:1.7; color:#666; margin:0 0 34px; }
      .actions { display:flex; flex-wrap:wrap; gap:14px; }
      .button { display:inline-block; padding:17px 28px; border-radius:16px; font-size:17px; font-weight:700; text-align:center; text-decoration:none; color:#fff; line-height:1.3; }
      .whatsapp { background:#25D366; box-shadow:0 12px 25px rgba(37,211,102,.22); }
      .navy { background:#08285c; box-shadow:0 12px 25px rgba(11,44,95,.18); }
      figure { margin:0; min-width:0; }
      .hero-image { display:block; width:100%; height:auto; border-radius:28px; box-shadow:0 25px 60px rgba(11,44,95,.18); }
      figcaption { margin-top:14px; font-size:11px; line-height:1.55; color:#666; }
      .section-title { text-align:center; font-size:38px; line-height:1.2; margin:0 0 18px; }
      .section-intro { text-align:center; font-size:19px; color:#555; max-width:850px; margin:0 auto 42px; }
      .services { padding:20px 0 70px; }
      .service-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; }
      .service-card { background:#eef3fa; border-radius:24px; padding:28px 24px; box-shadow:0 12px 28px rgba(11,44,95,.08); border:1px solid rgba(11,44,95,.05); }
      h3 { font-size:22px; line-height:1.25; margin:0 0 12px; }
      .service-card p { font-size:16px; margin:0; }
      .problems { background:linear-gradient(180deg,#fff 0%,#f5f8fc 100%); border-radius:32px; padding:50px 36px; box-shadow:0 18px 40px rgba(11,44,95,.07); border:1px solid rgba(11,44,95,.05); margin:10px 0 70px; }
      .problem-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; }
      .problem-card { display:flex; flex-direction:column; justify-content:space-between; background:#eef3fa; border-radius:22px; padding:24px; text-decoration:none; box-shadow:0 10px 24px rgba(11,44,95,.07); border:1px solid rgba(11,44,95,.05); transition:transform .25s,box-shadow .25s; }
      .problem-card h3 { font-size:21px; }
      .problem-card p { color:#444; font-size:16px; margin:0; }
      .problem-card span { font-weight:700; font-size:15px; text-decoration:underline; margin-top:22px; }
      .problem-card:hover { transform:translateY(-5px); box-shadow:0 16px 32px rgba(11,44,95,.12); }
      .assessment { padding-bottom:55px; }
      .summary-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:26px; margin:36px 0; padding-bottom:30px; border-bottom:1px solid #dce5f1; }
      .summary-grid h3 { font-size:20px; }
      .summary-grid p { font-size:16px; margin:0; }
      .topic-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:32px 38px; }
      .topic-grid h3 { font-size:24px; }
      .topic-grid p { font-size:17px; margin:0 0 14px; }
      .topic-grid p:last-child { margin-bottom:0; }
      .photos { display:grid; grid-template-columns:1fr 1fr; gap:0 36px; padding:34px; background:#eef3fa; border-radius:24px; }
      .photos h2 { font-size:28px; margin:0 0 18px; }
      .photos p { margin:0; }
      ul { margin:0; padding-left:22px; line-height:1.7; }
      li { margin-bottom:12px; }
      .photos .photo-note { grid-column:1/-1; font-size:14px; margin-top:18px; }
      .questions { padding:65px 0; }
      .questions h2 { margin-bottom:30px; }
      details { padding:22px 24px; border:1px solid #d8e3f1; border-radius:18px; margin:12px 0; }
      summary { font-weight:700; color:#08285c; cursor:pointer; font-size:18px; line-height:1.5; }
      details p { font-size:17px; margin:16px 0 0; }
      .contact { text-align:center; background:linear-gradient(180deg,#f5f8fc 0%,#e8eef8 100%); border-radius:32px; padding:55px 35px; box-shadow:0 18px 40px rgba(11,44,95,.08); }
      .contact h2 { font-size:42px; line-height:1.2; margin:0 0 18px; }
      .contact p { font-size:20px; color:#555; max-width:820px; margin:0 auto 35px; }
      .contact .actions { justify-content:center; }
      .contact .call-note { font-size:12px; margin:20px 0 0; max-width:none; }
      .area-note { text-align:center; padding:25px 20px; font-size:15px; }
      .area-note p { margin:0; }
      .brand-notice { margin:0; border:1px solid rgba(11,44,95,.08); border-radius:20px; padding:18px 22px; text-align:center; font-size:14px; color:#666; }
      .floating-whatsapp { position:fixed; bottom:22px; right:22px; z-index:900; padding:14px 20px; background:#25D366; color:#fff; text-decoration:none; font-size:16px; font-weight:700; border-radius:999px; box-shadow:0 8px 24px rgba(37,211,102,.25); }
      @media(max-width:1100px) { .service-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .problem-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .brand-heading { gap:18px; } .brand-logo { max-width:160px; } }
      @media(max-width:900px) { .main-card { width:100%; padding:30px; } .hero { gap:30px; } h1 { font-size:40px; } .lead { font-size:19px; } .section-title { font-size:32px; } .problems { padding:36px 24px; } }
      @media(max-width:768px) { .brand-page { padding:95px 6px 10px; } .main-card { padding:12px; border-radius:16px; } .hero { grid-template-columns:1fr; text-align:center; padding:30px 8px 45px; } .brand-heading { justify-content:center; } .brand-logo { height:80px; max-width:150px; } h1 { font-size:32px; line-height:1.15; } .lead { font-size:18px; line-height:1.75; } .independent { font-size:15px; } .actions { justify-content:center; } .hero-image { border-radius:22px; } .services { padding:20px 8px 45px; } .service-grid,.problem-grid,.summary-grid,.topic-grid { grid-template-columns:1fr; gap:18px; } .section-title { font-size:28px; } .section-intro { font-size:17px; margin-bottom:28px; } .problems { padding:32px 18px; border-radius:24px; margin-bottom:45px; } .assessment { padding:0 8px 40px; } .summary-grid { gap:24px; } .topic-grid { gap:30px; } .photos { grid-template-columns:1fr; gap:20px; padding:26px 20px; } .photos .photo-note { margin:0; } .questions { padding:45px 8px; } details { padding:18px; } summary { font-size:16px; } .contact { padding:35px 22px; border-radius:24px; } .contact h2 { font-size:30px; } .contact p { font-size:18px; } .area-note { padding:24px 12px; } }
      @media(max-width:480px) { .button { width:100%; box-sizing:border-box; } .floating-whatsapp { right:14px; bottom:14px; font-size:14px; padding:12px 16px; } }
      @media(prefers-reduced-motion:reduce) { .problem-card { transition:none; } .problem-card:hover { transform:none; } }
    `}</style>
  </>;
}
