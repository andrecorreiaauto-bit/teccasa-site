export default function CompanyIntro({ english = false }) {
  return (
    <section className="company-intro" aria-labelledby="company-intro-title">
      <span>{english ? "Meet TecCasa" : "Conheça a TecCasa"}</span>
      <h2 id="company-intro-title">{english ? "A small business. A personal service." : "Uma pequena empresa, com contacto direto."}</h2>
      <p>{english
        ? "TecCasa Soluções is a small gate automation, repairs and smart home business. Here, you speak directly with the person who assesses the problem, explains the quote and carries out the work. With one base on the north bank and another on the south bank of the Tagus, we are close to our customers in Lisbon and the surrounding area."
        : "A TecCasa Soluções é uma pequena empresa de automatismos, reparações e domótica. Aqui, fala diretamente com quem analisa o problema, explica o orçamento e faz o trabalho. Com uma base na margem norte e outra na margem sul do Tejo, estamos perto dos nossos clientes em Lisboa e arredores."}</p>
      <a href={english ? "/en/about" : "/a-empresa"}>{english ? "Get to know TecCasa" : "Conheça a TecCasa"} →</a>
      <style jsx>{`
        .company-intro { padding: clamp(24px, 5vw, 44px); margin: 42px 0; border: 1px solid #dce5f0; border-radius: 24px; background: #f1f5fa; color: #08285c; }
        span { font: 700 14px/1.5 Arial, sans-serif; }
        h2 { font-size: clamp(24px, 4vw, 32px); line-height: 1.2; margin: 12px 0 18px; }
        p { color: #34445a; font-size: 17px; line-height: 1.8; max-width: 850px; }
        a { display: inline-block; margin-top: 10px; color: #08285c; font-weight: 700; text-underline-offset: 5px; }
      `}</style>
    </section>
  );
}
