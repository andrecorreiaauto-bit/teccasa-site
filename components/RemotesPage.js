import SiteFooter from "./SiteFooter";
import Head from "next/head";
import SiteHeader from "./SiteHeader";
import ServiceCoverageNotice from "./ServiceCoverageNotice";
import { company } from "../lib/company";
import { remoteBrands, remotesContent } from "../lib/remotes-content";

const ptRoute = "/comandos-garagem";
const enRoute = "/en/garage-remote-controls-lisbon";
const whatsappBase = "https://wa.me/" + company.telephone.slice(1);

function ActionLink({ action, ...props }) {
  if (action.message) {
    return (
      <a
        {...props}
        href={whatsappBase + "?text=" + encodeURIComponent(action.message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {action.label}
      </a>
    );
  }
  return <a {...props} href={action.href}>{action.label}</a>;
}

function SectionHeading({ section, id }) {
  return (
    <div className="section-head" id={id}>
      <div className="kicker">{section.kicker}</div>
      <h2>{section.title}</h2>
      {section.intro && <p>{section.intro}</p>}
    </div>
  );
}

export default function RemotesPage({ english = false }) {
  const lang = english ? "en" : "pt-PT";
  const content = remotesContent[english ? "en" : "pt"];
  const { hero, needs, compatibility, diagnostics, prepare, faq, final } = content;
  const url = company.url + (english ? enRoute : ptRoute);
  const title = content.pageTitle + " | " + company.name;
  const description = english
    ? "Gate and garage remotes and receivers in Lisbon. Extra remotes, replacement, fault diagnosis and compatibility checks for existing systems."
    : "Comandos para portões e garagens em Lisboa. Identificação do sistema, avaliação de compatibilidade e programação de comandos e recetores.";
  const phone = "tel:" + company.telephone;
  const email = "mailto:" + company.email;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url + "#webpage",
        url,
        name: title,
        description,
        inLanguage: lang,
        about: { "@id": company.url + "/#organization" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.questions.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={company.url + "/preview.jpg"} />
        <meta name="google-site-verification" content="_Dnes5RL-b6NjpXQVjaV6Nz7AlQFSU4PvvcSTWUKe44" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </Head>
      <div className="remotes-page" lang={lang}>
        <SiteHeader english={english} alternateHref={english ? ptRoute : enRoute} />
        <main>
          <nav className="breadcrumb" aria-label={english ? "Breadcrumb" : "Localização no site"}>
            <ActionLink action={content.home} />
            <span aria-hidden="true">/</span>
            {content.breadcrumb}
          </nav>

          <section className="hero">
            <div>
              <div className="kicker">{hero.kicker}</div>
              <h1>{hero.title[0]}<br />{hero.title[1]}</h1>
              <p className="intro">{hero.intro}</p>
              <div className="actions" data-contact-actions>
                <ActionLink action={hero.photo} className="btn whatsapp" data-contact-button="whatsapp" />
                <a href="#situations" className="btn outline" data-contact-button="secondary">{hero.situations}</a>
              </div>
              <p className="hero-note">{hero.note}</p>
            </div>
            <div className="hero-media">
              <img {...hero.image} fetchPriority="high" />
            </div>
          </section>

          <section className="section situations" id={english ? "common-problems" : "problemas"}>
            <SectionHeading section={needs} id="situations" />
            <div className="need-grid">
              {needs.cards.map(({ title, text, image, action }, index) => (
                <article className="need-card" key={image.src}>
                  <img {...image} loading="lazy" />
                  <div className="need-copy">
                    <div className="number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <ActionLink action={action} className="text-link" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="compat">
              <div>
                <div className="kicker">{compatibility.kicker}</div>
                <h2>{compatibility.title}</h2>
                <p>{compatibility.intro}</p>
              </div>
              <div className="compat-points">
                {compatibility.points.map(({ title, text }) => (
                  <div className="compat-item" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="brands">
              <p>{compatibility.brandsIntro}</p>
              <div className="brand-grid" role="group" aria-label={compatibility.brandsLabel} data-brand-logos>
                {remoteBrands.map(({ size, ...image }) => (
                  <div className={"brand-logo " + size} key={image.src}>
                    <img {...image} width="150" height="64" loading="lazy" />
                  </div>
                ))}
              </div>
              <p className="micro">{compatibility.brandsNote}</p>
            </div>
          </section>

          <section className="section">
            <SectionHeading section={diagnostics} />
            <div className="diagnostic-grid">
              {diagnostics.cards.map(({ title, text, image, action }) => (
                <article className="diagnostic" key={image.src}>
                  <img {...image} loading="lazy" />
                  <div className="diagnostic-copy">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <ActionLink action={action} className="text-link" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="prepare">
            <div className="kicker">{prepare.kicker}</div>
            <h2>{prepare.title}</h2>
            <p className="intro">{prepare.intro}</p>
            <div className="steps">
              {prepare.steps.map(({ title, text }) => (
                <div className="step" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <p className="prepare-note">{prepare.note}</p>
          </section>

          <section className="section faq">
            <h2>{faq.title}</h2>
            {faq.questions.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </section>

          <div className="coverage-slot"><ServiceCoverageNotice english={english} /></div>

          <section className="final">
            <div className="kicker">{final.kicker}</div>
            <h2>{final.title}</h2>
            <p>{final.intro}</p>
            <div className="actions" data-contact-actions>
              <ActionLink action={hero.photo} className="btn whatsapp" data-contact-button="whatsapp" />
              <a className="btn" data-contact-button="secondary" href={email}>{final.email}</a>
              <a className="btn" data-contact-button="secondary" href={phone}>{final.phone}</a>
            </div>
            <p className="micro">{final.note}</p>
          </section>

          <SiteFooter english={english} />
        </main>
        <ActionLink
          className="floating-wa"
          style={{ position: "fixed" }}
          action={{ ...hero.photo, label: "WhatsApp" }}
          aria-label={english ? "Talk to TecCasa on WhatsApp" : "Falar com a TecCasa por WhatsApp"}
        />
      </div>
      <style jsx global>{`body { margin: 0; }`}</style>
    </>
  );
}
