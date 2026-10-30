import catalog from "../lib/page-catalog.json";

export default function SeoDirectory({ onClose }) {
  return <section className="seo-directory" aria-labelledby="seo-directory-title">
    <div className="directory-heading"><h2 id="seo-directory-title">Painel SEO</h2><button type="button" onClick={onClose}>Fechar painel</button></div>
    <p>Acesso rápido a todas as {catalog.groups.reduce((total, group) => total + group.items.length, 0)} páginas publicadas. As páginas legais estão identificadas como não indexáveis.</p>
    {catalog.groups.map(group => <section key={group.title}><h3>{group.title}</h3><div className="links">{group.items.map(item => <a key={item.path} href={item.path}>{item.label}{!item.indexable && <small>Não indexável</small>}</a>)}</div></section>)}
    <section><h3>Ferramentas de análise e gestão</h3><div className="links">{[["Google Analytics","https://analytics.google.com"],["Google Search Console","https://search.google.com/search-console"],["Vercel","https://vercel.com"],["Google Business Profile","https://business.google.com"],["Sitemap","/sitemap.xml"]].map(([label, href]) => <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{label}</a>)}</div></section>
    <style jsx>{`
      .seo-directory { box-sizing:border-box; background:#08285c; padding:32px; border-radius:28px; margin:50px auto 40px; color:white; font:16px/1.6 Arial,sans-serif; }
      .directory-heading { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
      h2 { font-size:32px; margin:0; color:white; }
      h3 { font-size:21px; margin:28px 0 14px; color:white; }
      p { color:#d4e0f0; }
      .links { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr)); gap:12px; }
      a { padding:14px; background:#ffffff14; color:white; border-radius:12px; text-decoration:none; }
      small { display:block; color:#c8d6e8; margin-top:5px; }
      button { background:white; color:#08285c; border:0; border-radius:8px; padding:10px 14px; font:700 14px Arial,sans-serif; cursor:pointer; }
      a:focus-visible,button:focus-visible { outline:3px solid #f7b545; outline-offset:4px; }
      @media(max-width:480px) { .seo-directory { padding:24px 18px; } }
    `}</style>
  </section>;
}
