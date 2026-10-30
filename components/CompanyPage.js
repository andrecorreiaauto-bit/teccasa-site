import Head from "next/head";
import SiteHeader from "./SiteHeader";
import { company } from "../lib/company";

export default function CompanyPage({ english = false }) {
  const path = english ? "/en/about" : "/a-empresa";
  const title = english ? "About us | TecCasa Soluções" : "A empresa | TecCasa Soluções";
  const description = english
    ? "Meet TecCasa Soluções, a small gate automation, repairs and smart home business. Speak directly with the person who assesses and carries out the work."
    : "Conheça a TecCasa Soluções, uma pequena empresa de automatismos, reparações e domótica. Fale diretamente com quem analisa e executa o trabalho.";
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
            <h1>{english ? "A small business, close to you." : "Uma pequena empresa, perto de si."}</h1>
            <p>{english ? "When you get in touch, you speak directly with the person who will assess the problem and carry out the work." : "Quando nos contacta, fala diretamente com quem vai analisar o problema e fazer o trabalho."}</p>
          </section>
          <section className="story">
            <h2>{english ? "Getting to know TecCasa" : "A TecCasa, de perto"}</h2>
            <p>{english ? "TecCasa Soluções is a small business working on gate automation, remote controls and receivers, repairs and smart home systems for homes and apartment buildings." : "A TecCasa Soluções é uma pequena empresa que trabalha com automatismos para portões, comandos e recetores, reparações e domótica para casas e condomínios."}</p>
            <p>{english ? "We take a personal approach to each request: we listen to what you need, assess the equipment and explain the options and the quote in plain language. The same person follows the work from your first enquiry through to any questions afterwards." : "Tratamos cada pedido de forma pessoal: ouvimos o que precisa, analisamos o equipamento e explicamos as opções e o orçamento numa linguagem simples. O acompanhamento é feito pela mesma pessoa, desde o primeiro contacto até às dúvidas que possam surgir depois do trabalho."}</p>
            <p>{english ? "We have two bases, one on the north bank and one on the south bank of the Tagus. From there, we look after our customers in Lisbon and the surrounding area, before and after the work is done." : "Temos duas bases, uma na margem norte e outra na margem sul do Tejo. É a partir delas que acompanhamos os nossos clientes em Lisboa e arredores, antes e depois do trabalho."}</p>
          </section>
          <section className="principles" aria-label={english ? "How we work" : "Como trabalhamos"}>
            {(english ? [
              ["First, understand the problem", "Before suggesting a new motor, we look into what has gone wrong and whether a repair makes sense."],
              ["A straightforward explanation", "We explain what needs doing, why and how much it will cost, so you know what to expect."],
              ["Help after the work is done", "After installation, we explain how to use the equipment and stay in touch for any questions that come up."],
            ] : [
              ["Primeiro, perceber o problema", "Antes de sugerir um motor novo, procuramos perceber o que avariou e se vale a pena reparar."],
              ["Uma explicação simples", "Dizemos o que é preciso fazer, porquê e quanto custa. Assim, sabe com o que pode contar."],
              ["Apoio depois do trabalho", "Depois da instalação, explicamos como utilizar o equipamento e mantemos o contacto para as dúvidas que possam surgir."],
            ]).map(([heading, body]) => <article key={heading}><h2>{heading}</h2><p>{body}</p></article>)}
          </section>
          <section className="legal">
            <h2>{english ? "The name on our invoices" : "O nome nas nossas faturas"}</h2>
            <p>{english ? "You know us as TecCasa Soluções. On invoices and other company documents, you will find our legal name:" : "Conhece-nos como TecCasa Soluções. Nas faturas e restantes documentos da empresa, encontra a nossa denominação social:"} <strong>{company.legalName}</strong>.</p>
            <p><strong>NIPC:</strong> {company.taxId}</p>
            <p><a href={english ? "/en/legal" : "/informacao-legal"}>{english ? "View company legal information" : "Consultar a informação legal da empresa"}</a></p>
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
