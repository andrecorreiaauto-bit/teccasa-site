import localPages from "../lib/local-services.json";

export default function LocalAreas({ english = false }) {
  const places = Object.values(localPages).filter(page => page.kind === "installation");
  return <section className="local-areas" aria-labelledby="local-areas-title">
    <h2 id="local-areas-title">{english ? "Gate services by area" : "Instalação e reparação na sua zona"}</h2>
    <p>{english ? "Local service guides in Portuguese. Contact us directly to arrange a visit." : "Consulte o serviço na sua zona e fale diretamente connosco para preparar a visita."}</p>
    <div className="areas-grid">{places.map(page => <div key={page.area}><h3>{page.area}</h3><a href={`/${page.slug}`}>{english ? "Gate installation (PT)" : "Instalação de automatismos"}</a><a href={`/${page.pairedSlug}`}>{english ? "Gate repair (PT)" : "Reparação de portões"}</a></div>)}</div>
    <style jsx>{`
      .local-areas { box-sizing:border-box; max-width:1200px; margin:46px auto; padding:32px; background:#fff; border:1px solid #dce5f0; border-radius:22px; text-align:left; font:16px/1.7 Arial,sans-serif; color:#34445a; }
      h2 { font-size:28px; line-height:1.25; color:#08285c; margin:0 0 14px; }
      p { margin:0 0 24px; }
      .areas-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px; }
      h3 { font-size:18px; color:#08285c; margin:0 0 12px; }
      a { display:block; color:#08285c; text-underline-offset:4px; font-size:14px; margin:8px 0; }
      a:focus-visible { outline:3px solid #e4a719; outline-offset:4px; }
      @media(max-width:800px) { .areas-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
      @media(max-width:480px) { .local-areas { padding:24px 20px; } .areas-grid { grid-template-columns:1fr; gap:18px; } h2 { font-size:24px; } }
    `}</style>
  </section>;
}
