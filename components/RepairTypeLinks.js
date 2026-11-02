import pages from "../lib/gate-repair-pages.json";

const labels = { correr:"Portões de correr", batente:"Portões de batente", seccionados:"Portões seccionados", basculantes:"Portões basculantes" };
export default function RepairTypeLinks() {
  return <section className="repair-types" aria-labelledby="repair-types-title">
    <h2 id="repair-types-title">Qual é o tipo do seu portão?</h2>
    <p>A forma como o portão se movimenta ajuda a enquadrar a avaria. Consulte a informação para o seu tipo de acesso.</p>
    <div className="type-links">{Object.values(pages).map(page => <a key={page.slug} href={`/${page.slug}`}><img src={page.imageSmall} width="768" height="512" alt="" loading="lazy" /><div><h3>{labels[page.kind]}</h3><span>Ver reparação →</span></div></a>)}</div>
    <style jsx>{`
      .repair-types { box-sizing:border-box; max-width:1100px; margin:0 auto; padding:50px 20px 20px; }
      h2 { color:#08285c; font-size:clamp(26px,3vw,36px); margin:0 0 18px; }
      p { max-width:850px; font-size:18px; line-height:1.75; color:#555; margin:0 0 28px; }
      .type-links { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; }
      a { display:grid; grid-template-columns:150px 1fr; align-items:center; background:#e6edf7; color:#08285c; border-radius:22px; overflow:hidden; text-decoration:none; }
      img { display:block; width:150px; height:140px; object-fit:cover; }
      a > div { padding:18px; }
      h3 { font-size:20px; margin:0 0 12px; }
      span { font-size:15px; font-weight:700; text-decoration:underline; text-underline-offset:4px; }
      a:focus-visible { outline:3px solid #f7b545; outline-offset:4px; }
      @media(max-width:768px) { .type-links { grid-template-columns:1fr; } a { grid-template-columns:110px 1fr; } img { width:110px; height:140px; } h3 { font-size:18px; } }
    `}</style>
  </section>;
}
