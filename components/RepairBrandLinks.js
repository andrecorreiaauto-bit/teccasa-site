const brands = [
  ["Nice", "nice"], ["BFT", "bft"], ["Motorline", "motorline"],
  ["FAAC", "faac"], ["CAME", "came"], ["Hörmann", "hormann"],
  ["Roger Technology", "roger-technology"], ["DEA", "dea"], ["Somfy", "somfy"],
  ["Beninca", "beninca"], ["V2", "v2"], ["Ditec", "ditec"],
];

export default function RepairBrandLinks() {
  return <section className="repair-brands" aria-labelledby="repair-brands-title">
    <h2 id="repair-brands-title">Assistência a automatismos de várias marcas</h2>
    <p>Consulte a informação sobre a marca do seu automatismo. A possibilidade de reparação depende do modelo, do estado do equipamento e da disponibilidade de peças, confirmados no diagnóstico.</p>
    <div className="brand-links">{brands.map(([name, slug]) => <a key={slug} href={`/automatismos-${slug}-portoes`}>{name}<span aria-hidden="true"> →</span></a>)}</div>
    <style jsx>{`
      .repair-brands { box-sizing:border-box; max-width:1100px; margin:0 auto; padding:50px 20px 20px; }
      h2 { color:#08285c; font-size:clamp(26px,3vw,36px); margin:0 0 18px; }
      p { max-width:850px; font-size:18px; line-height:1.75; color:#555; margin:0 0 28px; }
      .brand-links { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; }
      a { display:flex; justify-content:space-between; align-items:center; gap:10px; padding:20px; background:#fff; border:1px solid #d8e3f1; border-radius:18px; color:#08285c; font-size:17px; font-weight:700; text-decoration:none; box-shadow:0 8px 24px rgba(11,44,95,.04); }
      a:hover { text-decoration:underline; text-underline-offset:4px; }
      a:focus-visible { outline:3px solid #f7b545; outline-offset:4px; }
      @media(max-width:768px) { .brand-links { grid-template-columns:repeat(2,minmax(0,1fr)); } a { padding:17px; font-size:16px; } }
      @media(max-width:360px) { .brand-links { grid-template-columns:1fr; } }
    `}</style>
  </section>;
}
