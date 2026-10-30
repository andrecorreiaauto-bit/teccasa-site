export default function CompanyIntro({ english = false }) {
  return (
    <section className="company-intro" aria-labelledby="company-intro-title">
      <span>{english ? "The people behind the service" : "Quem está por trás do serviço"}</span>
      <h2 id="company-intro-title">{english ? "Technical know-how. Personal service." : "Conhecimento técnico. Atendimento próximo."}</h2>
      <p>{english
        ? "TecCasa Soluções is led by André Correia. We work on gate automation, repairs and smart home solutions in Lisbon and the surrounding area, with direct contact, clear explanations and attention to each customer's needs."
        : "A TecCasa Soluções é um projeto liderado por André Correia, dedicado a automatismos, reparações e soluções inteligentes em Lisboa e arredores. Valorizamos o contacto direto, a explicação clara e o cuidado com cada trabalho, desde o primeiro pedido até ao acompanhamento após a intervenção."}</p>
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
