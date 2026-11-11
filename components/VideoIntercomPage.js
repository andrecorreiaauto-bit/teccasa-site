import Head from "next/head";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ServiceCoverageNotice from "./ServiceCoverageNotice";
import { company } from "../lib/company";
import content from "../lib/video-intercom-content.json";

function Lines({ text }) {
  return text.split("<br>").map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>);
}

export default function VideoIntercomPage({ english = false }) {
  const t = content[english ? "en" : "pt"];
  const lang = english ? "en" : "pt-PT";
  const url = company.url + t.route;
  const description = english
    ? "Video intercom installation, replacement and servicing in Lisbon. CAME solutions and support for Fermax, EZVIZ and Tapo equipment, subject to assessment."
    : "Instalação, substituição e assistência a videoporteiros em Lisboa. Soluções CAME e intervenção em Fermax, EZVIZ e Tapo, após avaliação do equipamento.";
  const message = english
    ? "Hello TecCasa, I would like help with a video intercom.\n\nLocation:\nProperty type:\nExisting equipment (if any):\nWhat I would like to install or improve:\nI can send photos of the entrance and equipment."
    : "Olá TecCasa, gostaria de ajuda com um videoporteiro.\n\nLocalidade:\nTipo de imóvel:\nEquipamento existente (se houver):\nO que pretendo instalar ou melhorar:\nPosso enviar fotografias da entrada e do equipamento.";
  const whatsapp = `https://wa.me/${company.telephone.slice(1)}?text=${encodeURIComponent(message)}`;
  const phone = `tel:${company.telephone}`;
  const email = `mailto:${company.email}`;
  const home = english ? "/en" : "/";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": url + "#webpage", url, name: t.title, description, inLanguage: lang, about: { "@id": company.url + "/#organization" } },
      { "@type": "Service", "@id": url + "#service", name: english ? "Video intercom installation and service" : "Instalação e assistência a videoporteiros", url, serviceType: english ? "Video intercoms and video doorbells" : "Videoporteiros e campainhas com vídeo", provider: { "@id": company.url + "/#organization" }, areaServed: "Lisboa e arredores" },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: t.home, item: company.url + home },
        { "@type": "ListItem", position: 2, name: t.service, item: url },
      ] },
      { "@type": "FAQPage", mainEntity: t.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };
  const WhatsApp = ({ children, className = "", ...props }) => <a href={whatsapp} className={`btn wa ${className}`} target="_blank" rel="noopener noreferrer" data-contact-button="whatsapp" {...props}>{children}</a>;

  return <>
    <Head>
      <title>{t.title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={t.title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={company.url + "/videoporteiros/came-xts-lifestyle.webp"} />
      <meta name="google-site-verification" content="_Dnes5RL-b6NjpXQVjaV6Nz7AlQFSU4PvvcSTWUKe44" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </Head>
    <div className="video-intercom-page" lang={lang}>
      <SiteHeader english={english} />
      <main id="top">
        <nav className="crumb" aria-label={english ? "Breadcrumb" : "Localização no site"}><a href={home}>{t.home}</a><span aria-hidden="true">/</span>{t.service}</nav>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><div className="eyebrow">{t.eyebrow}</div><h1 id="hero-title"><Lines text={t.h1} /></h1><p>{t.lead}</p><div className="actions"><WhatsApp>{t.primary}</WhatsApp><a href="#servicos" className="btn ghost">{t.secondary}</a></div><p className="hero-note">{t.small}</p></div>
          <figure className="hero-figure"><img src="/videoporteiros/came-xts-lifestyle.webp" alt={t.heroAlt} width="1215" height="900" fetchPriority="high" /><div className="came-mark"><img src="/came-logo.png" alt="CAME" width="105" height="40" /></div><figcaption>{t.caption}</figcaption></figure>
        </section>
        <section id="servicos" className="section">
          <div className="section-head"><div className="eyebrow">{t.startKicker}</div><h2><Lines text={t.startTitle} /></h2><p>{t.startIntro}</p></div>
          <div className="service-grid">{t.cards.map(([number, title, text, id]) => <article className="service-card" id={id} key={id}><span className="number">{number}</span><h3>{title}</h3><p>{text}</p><a href="#preparar" className="card-link">{english ? "Prepare my request" : "Preparar o meu pedido"} <span aria-hidden="true">→</span></a></article>)}</div>
        </section>
        <section className="section brand-section">
          <figure className="product"><img src="/videoporteiros/came-xts-monitor.png" alt={t.productAlt} width="1000" height="667" loading="lazy" /><figcaption>CAME XTS · {english ? "Illustrative product; final version selected for your installation." : "Equipamento ilustrativo; versão a definir para a sua instalação."}</figcaption></figure>
          <div><div className="eyebrow">{t.brandKicker}</div><h2>{t.brandTitle}</h2><p>{t.brandText}</p><div className="feature-list">{t.features.map(([title, text]) => <div className="feature" key={title}><span aria-hidden="true">✓</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div><p className="fine">{t.brandNote}</p></div>
        </section>
        <section className="section multibrand" id="multimarcas"><div><div className="eyebrow">{t.multiKicker}</div><h2><Lines text={t.multiTitle} /></h2><div className="brand-names" aria-label={english ? "Other brands" : "Outras marcas"}><span>Fermax</span><span>EZVIZ</span><span>Tapo</span></div></div><div className="multi-copy"><p>{t.multiText}</p><p className="fine">{t.multiNote}</p><a href="#preparar" className="card-link">{t.multiCta} <span aria-hidden="true">→</span></a></div></section>
        <section className="section reuse"><div><div className="eyebrow">{t.reuseKicker}</div><h2><Lines text={t.reuseTitle} /></h2><p>{t.reuseText}</p></div><div className="checks">{t.checks.map(([title, text]) => <div className="check" key={title}><strong>{title}</strong><p>{text}</p></div>)}</div></section>
        <section className="section request" id="preparar"><div className="section-head"><div className="eyebrow">{t.requestKicker}</div><h2><Lines text={t.requestTitle} /></h2><p>{t.requestText}</p></div><div><ol>{t.requestList.map(text => <li key={text}>{text}</li>)}</ol><WhatsApp>{t.requestCta}</WhatsApp><p className="fine">{t.requestSmall}</p></div></section>
        <ServiceCoverageNotice english={english} />
        <section className="section faq"><div className="section-head"><div className="eyebrow">{t.faqKicker}</div><h2>{t.faqTitle}</h2></div>{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
        <section className="section contact" data-contact-surface="dark"><div className="eyebrow">{t.endKicker}</div><h2>{t.endTitle}</h2><p>{t.endText}</p><div className="actions" data-contact-actions><WhatsApp>{t.endCta}</WhatsApp><a className="btn light" data-contact-button="secondary" href={phone}>{t.call}</a><a className="btn light" data-contact-button="secondary" href={email}>{company.email}</a></div><p className="call-note">{t.callNote}</p></section>
        <SiteFooter english={english} />
      </main>
      <WhatsApp className="floating" aria-label={english ? "Talk to TecCasa on WhatsApp" : "Falar com a TecCasa por WhatsApp"}>WhatsApp</WhatsApp>
    </div>
  </>;
}
