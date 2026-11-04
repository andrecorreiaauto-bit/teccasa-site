export default function BrandLogoGrid({ brands, english = false }) {
  return <div className="brand-logo-grid" data-brand-logos style={{ "--logo-columns": Math.min(6, brands.length) }}>
    {brands.map(brand => <div className="logo-card" key={brand.name}>
      {brand.href ? <a href={brand.href} title={english ? `${brand.name} — detailed page in Portuguese` : brand.name} hrefLang={english ? "pt-PT" : undefined}>
        <img src={brand.logo} alt={brand.name} width="180" height="72" loading="lazy" style={{ transform: `scale(${brand.scale || 1})` }} />
      </a> : <img src={brand.logo} alt={brand.name} width="180" height="72" loading="lazy" style={{ transform: `scale(${brand.scale || 1})` }} />}
    </div>)}
    <style jsx>{`
      .brand-logo-grid { display:grid; grid-template-columns:repeat(var(--logo-columns),minmax(0,1fr)); gap:16px; }
      .logo-card { box-sizing:border-box; height:128px; min-width:0; display:flex; align-items:center; justify-content:center; overflow:hidden; border:1px solid #d8e3f1; border-radius:20px; background:linear-gradient(180deg,#fff,#edf3fa); }
      a { box-sizing:border-box; display:flex; align-items:center; justify-content:center; width:100%; height:100%; padding:18px 16px; border-radius:19px; }
      img { display:block; width:auto; height:auto; max-width:88%; max-height:58px; object-fit:contain; }
      .logo-card>a>img { max-width:100%; }
      .logo-card:has(a):hover { border-color:#9eb7d7; background:#f2f6fc; }
      a:focus-visible { outline:3px solid #d79a16; outline-offset:-4px; }
      @media(max-width:1000px) { .brand-logo-grid { grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; } }
      @media(max-width:700px) { .brand-logo-grid { grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; } .logo-card { height:112px; border-radius:18px; } a { padding:16px 13px; } img { max-height:52px; } }
      @media(max-width:480px) { .brand-logo-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .logo-card { height:104px; } a { padding:16px; } img { max-height:48px; } }
    `}</style>
  </div>;
}
