export default function CompanyIntro({ english = false }) {
  return (
    <section className="company-intro" aria-labelledby="company-intro-title">
      <span>{english ? "Our company" : "A nossa empresa"}</span>
      <h2 id="company-intro-title">{english ? "Technical know-how. Personal service." : "Conhecimento técnico. Atendimento próximo."}</h2>
      <p>{english
        ? "TecCasa Soluções works on gate automation, repairs and smart home solutions, with support bases on the north and south banks of the Tagus. We stay close to our customers through direct contact, clear explanations and care at every stage, from the first request to support after the work is complete."
        : "A TecCasa Soluções trabalha com automatismos, reparações e soluções inteligentes, com bases de apoio nas margens norte e sul do Tejo. Estamos próximos dos nossos clientes através do contacto direto, de explicações claras e do cuidado com cada trabalho, desde o primeiro pedido até ao acompanhamento após a intervenção."}</p>
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
