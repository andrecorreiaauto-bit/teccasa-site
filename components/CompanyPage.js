import Head from "next/head";
import SiteHeader from "./SiteHeader";
import { company } from "../lib/company";

export default function CompanyPage({ english = false }) {
  const path = english ? "/en/about" : "/a-empresa";
  const title = english ? "About us | TecCasa Soluções" : "A empresa | TecCasa Soluções";
  const description = english
    ? "Meet TecCasa Soluções: gate automation, repairs and smart home solutions, with direct contact and support bases on both banks of the Tagus."
    : "Conheça a TecCasa Soluções. Automatismos, reparações e soluções inteligentes com contacto direto e duas bases de apoio, nas margens norte e sul do Tejo.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${company.url}${path}`} />
        <link rel="alternate" hrefLang="pt-PT" href={`${company.url}/a-empresa`} />
        <link rel="alternate" hrefLang="en" href={`${company.url}/en/about`} />
        <link rel="alternate" hrefLang="x-default" href={`${company.url}/a-empresa`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${company.url}${path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${company.url}/preview.jpg`} />
      </Head>
      <div className="company-page" lang={english ? "en" : "pt-PT"}>
        <SiteHeader english={english} />
        <main>
          <section className="hero">
            <span>{english ? "About us" : "A empresa"}</span>
            <h1>{english ? "A company close to you. Support at every stage." : "Uma empresa próxima. Apoio em cada etapa."}</h1>
            <p>{english ? "Gate automation, repairs and smart home solutions with direct contact and care at every stage." : "Automatismos, reparações e soluções inteligentes com contacto direto e cuidado em cada etapa."}</p>
          </section>
          <section className="story">
            <h2>{english ? "Close to our customers" : "Sempre em proximidade com os nossos clientes"}</h2>
            <p>{english ? "TecCasa Soluções installs, repairs and services gate automation, remote controls and receivers, smart home systems and intelligent solutions for homes and condominiums. We follow each request with care, from the initial assessment to the work itself and support afterwards." : "A TecCasa Soluções dedica-se à instalação, reparação e assistência técnica de automatismos para portões, comandos e recetores, domótica e soluções inteligentes para habitações e condomínios. Acompanhamos cada pedido com atenção, desde a análise inicial à execução do trabalho e ao apoio após a intervenção."}</p>
            <p>{english ? "We have two support bases, one on the north bank and one on the south bank of the Tagus, keeping us close to our customers in Lisbon and the surrounding area." : "Contamos com duas bases de apoio, uma na margem norte e outra na margem sul do Tejo, para estarmos próximos dos nossos clientes em Lisboa e arredores."}</p>
            <p>{english ? "When you contact TecCasa, you can speak directly with the person who assesses and carries out the work. We take time to understand your needs, explain the available options and recommend a solution suited to your equipment, its use and your budget." : "Ao contactar a TecCasa, pode falar diretamente com quem analisa e executa o trabalho. Dedicamos tempo a perceber a necessidade, explicar as opções e propor uma solução adequada ao equipamento, à utilização e ao orçamento de cada cliente."}</p>
          </section>
          <section className="principles" aria-label={english ? "How we work" : "Como trabalhamos"}>
            {(english ? [
              ["Understand before recommending", "We investigate the fault and assess repair options before proposing replacement."],
              ["Explain the work clearly", "We explain what needs to be done and what the quote includes, so you can make an informed decision."],
              ["Look after each installation", "We value careful work, explaining how the equipment works and providing support after the intervention."],
            ] : [
              ["Perceber antes de recomendar", "Procuramos a origem da avaria e avaliamos a possibilidade de reparação antes de propor uma substituição."],
              ["Explicar com clareza", "Esclarecemos o que é necessário fazer e o que está incluído no orçamento, para que possa decidir com informação."],
              ["Cuidar de cada instalação", "Valorizamos uma execução cuidada, a explicação do funcionamento dos equipamentos e o apoio após a intervenção."],
            ]).map(([heading, body]) => <article key={heading}><h2>{heading}</h2><p>{body}</p></article>)}
          </section>
          <section className="legal">
            <h2>{english ? "Our company" : "Identificação da empresa"}</h2>
            <p>{english ? "TecCasa Soluções is the trading name used by the company" : "TecCasa Soluções é o nome comercial utilizado pela sociedade"} <strong>{company.legalName}</strong>.</p>
            <p><strong>NIPC:</strong> {company.taxId}</p>
            <p>{english ? "This is the legal entity responsible for the services provided under the TecCasa Soluções name and identified on our invoices and company documents." : "Esta é a entidade responsável pelos serviços prestados sob o nome TecCasa Soluções e identificada nas nossas faturas e documentação da empresa."}</p>
          </section>
          <section className="contact">
            <h2>{english ? "Tell us what you need" : "Conte-nos o que precisa"}</h2>
            <p>{english ? "Describe the situation or send photos of the equipment. We will help you understand the next step." : "Descreva a situação ou envie fotografias do equipamento. Ajudamo-lo a perceber qual o próximo passo."}</p>
            <div className="actions">
              <a className="primary" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer">{english ? "Contact TecCasa on WhatsApp" : "Falar com a TecCasa por WhatsApp"}</a>
              <a href="tel:+351922021980">{english ? "Call 922 021 980" : "Ligar 922 021 980"}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </section>
        </main>
      </div>
      <style jsx>{`
        .company-page { font-family: Arial, sans-serif; color: #08285c; background: #f4f7fb; padding: 110px 24px 24px; }
        main { max-width: 1200px; margin: auto; }
        a { color: #08285c; text-underline-offset: 4px; }
        a:focus-visible, button:focus-visible { outline: 3px solid #f7b545; outline-offset: 5px; }
        main { overflow-wrap: anywhere; }
        section { margin-bottom: 28px; }
        .hero { background: linear-gradient(135deg, #08285c, #0b3f88); color: white; padding: clamp(28px, 6vw, 64px); border-radius: 26px; }
        .hero span { font-size: 15px; font-weight: 700; }
        h1 { font-size: clamp(30px, 5vw, 48px); line-height: 1.14; max-width: 870px; margin: 20px 0; }
        h2 { font-size: 26px; line-height: 1.25; margin: 0 0 18px; }
        p { font-size: 17px; line-height: 1.8; }
        .hero p { max-width: 750px; margin-bottom: 0; font-size: 19px; }
        .story, .legal, .contact { padding: clamp(24px, 5vw, 44px); background: white; border: 1px solid #dce5f0; border-radius: 24px; }
        .story p, .legal p, article p { color: #34445a; }
        .principles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        article { background: #eaf0f8; padding: 28px; border-radius: 22px; }
        article h2 { font-size: 21px; }
        article p { font-size: 16px; margin-bottom: 0; }
        .actions { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; }
        .primary { display: inline-block; padding: 15px 20px; border-radius: 14px; background: #08285c; color: white; text-decoration: none; font-weight: 700; }
        @media(max-width: 768px) { .company-page { padding: 95px 16px 16px; } }
        @media(max-width: 700px) { .principles { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
