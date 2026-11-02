export default function AutomationBudgetSummary() {
  return <section className="budget-summary" aria-labelledby="budget-summary-title">
    <h2 id="budget-summary-title">Um automatismo dimensionado para o seu portão.</h2>
    <p>O orçamento depende do portão, da utilização e das condições de montagem. O peso e as medidas contam, mas também o número de aberturas, a exposição ao vento, o espaço disponível e as proteções necessárias.</p>
    <p>Uma moradia e um acesso partilhado podem precisar de soluções diferentes, mesmo com portões parecidos. Ajudamos a perceber o que faz sentido no seu caso e o que está incluído na proposta.</p>
    <a href="/quanto-custa-automatizar-portao">O que influencia o orçamento? <span aria-hidden="true">→</span></a>
    <style jsx>{`
      .budget-summary { margin:0 0 48px; padding:32px 36px; border:1px solid #d8e3f1; border-radius:24px; background:white; color:#34445a; font-family:Arial,sans-serif; }
      h2 { color:#08285c; font-size:clamp(25px,3vw,32px); line-height:1.25; margin:0 0 16px; }
      p { max-width:970px; font-size:17px; line-height:1.75; margin:0 0 14px; }
      a { display:inline-block; color:#08285c; font-size:17px; font-weight:700; text-underline-offset:5px; margin-top:4px; }
      a:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      @media(max-width:600px) { .budget-summary { padding:26px 22px; } p,a { font-size:16px; } }
    `}</style>
  </section>;
}
