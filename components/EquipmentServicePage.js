import Head from "next/head";
import BrandLogoGrid from "./BrandLogoGrid";
import ConfiguratorButton from "./ConfiguratorButton";
import ServiceCoverageNotice from "./ServiceCoverageNotice";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { company } from "../lib/company";

function ServiceCards({ cards }) {
  return <div className="equipment-grid">
    {cards.map(({ title, text, href }) => href ? (
      <a className="equipment-card equipment-card-link" href={href} key={title}>
        <h3>{title}</h3><p>{text}</p><span aria-hidden="true">Saber mais →</span>
      </a>
    ) : (
      <article className="equipment-card" key={title}><h3>{title}</h3><p>{text}</p></article>
    ))}
  </div>;
}

export default function EquipmentServicePage({ slug, page }) {
  const brandPage = page.kind === "brand";
  const title = `${page.title} | TecCasa Soluções`;
  const url = `${company.url}/${slug}`;
  const whatsapp = `https://wa.me/${company.telephone.slice(1)}` +
    (page.whatsappMessage ? `?text=${encodeURIComponent(page.whatsappMessage)}` : "");
  const generalPage = brandPage ? "/reparacao-portoes" : "/instalacao-kit-portao-automatico";
  const generalTitle = brandPage ? "Reparação de Automatismos" : "Instalação de kits";
  const showParent = generalPage !== "/" + slug;

  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={page.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={page.description} />
      <meta name="google-site-verification" content="_Dnes5RL-b6NjpXQVjaV6Nz7AlQFSU4PvvcSTWUKe44" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={company.url + "/preview.jpg"} />
    </Head>
    <div className="equipment-service" lang="pt-PT">
      <SiteHeader alternateHref={brandPage ? "/en/electric-gate-repair-lisbon" : "/en/automatic-gate-installation-lisbon"} />
      <main className="equipment-main">
        <nav className="equipment-crumb" aria-label="Localização no site">
          <a href="/">Início</a><span aria-hidden="true">/</span>
          {showParent && <><a href={generalPage}>{generalTitle}</a><span aria-hidden="true">/</span></>}
          <span>{page.logo?.alt || page.heading}</span>
        </nav>
        <section className="equipment-hero" aria-labelledby="equipment-title">
          <div className="equipment-hero-copy">
            <div className="equipment-identity">
              <span className="equipment-eyebrow">{page.eyebrow}</span>
              {page.logo && <img className="equipment-logo" {...page.logo} />}
            </div>
            <h1 id="equipment-title">{page.heading}</h1>
            {page.lead.map((paragraph, index) => <p className={index ? "equipment-detail" : "equipment-lead"} key={paragraph}>{paragraph}</p>)}
            <div className="equipment-actions" data-contact-actions>
              <a data-contact-button="whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">{page.whatsappLabel}</a>
              <a data-contact-button="secondary" href={page.anchor.href}>{page.anchor.label}</a>
            </div>
          </div>
          <img className="equipment-hero-image" {...page.image} fetchPriority="high" />
        </section>
        {page.sections.map(({ id, title: heading, intro, cards, logos, notes }) => (
          <section className="equipment-section" id={id} key={heading}>
            <h2>{heading}</h2>
            {intro?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {cards && <ServiceCards cards={cards} />}
            {logos && <BrandLogoGrid brands={logos.map(({ alt, src, href }) => ({ name: alt, logo: src, href }))} />}
            {notes?.map(paragraph => <p className="equipment-detail" key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <ServiceCoverageNotice />
        <section className="equipment-contact" data-contact-surface="dark" aria-labelledby="equipment-contact-title">
          <h2 id="equipment-contact-title">{page.contact.title}</h2>
          {page.contact.intro?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {page.contact.cards && <ServiceCards cards={page.contact.cards} />}
          {page.contact.notes?.map(paragraph => <p className="equipment-detail" key={paragraph}>{paragraph}</p>)}
          <div className="equipment-actions" data-contact-actions>
            <a data-contact-button="whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">{page.contact.whatsappLabel}</a>
            <a data-contact-button="secondary" href={`tel:${company.telephone}`}>Ligar 922 021 980</a>
            <a data-contact-button="secondary" href={`mailto:${company.email}`}>Enviar email</a>
            <ConfiguratorButton />
          </div>
          <p className="equipment-detail">Chamada para a rede móvel nacional. Deslocações por marcação.</p>
        </section>
        {page.notes?.map(paragraph => <p className="equipment-notice" key={paragraph}>{paragraph}</p>)}
        <SiteFooter />
      </main>
      <a className="equipment-floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer"
        style={{ position: "fixed" }} aria-label="Falar com a TecCasa por WhatsApp">WhatsApp</a>
    </div>
  </>;
}
