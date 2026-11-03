import BrandLogoGrid from "./BrandLogoGrid";
import { automationBrands } from "../lib/brand-logos";

export default function RepairBrandLinks() {
  return <section className="repair-brands" aria-labelledby="repair-brands-title">
    <h2 id="repair-brands-title">Assistência a automatismos de várias marcas</h2>
    <p>Consulte a informação sobre a marca do seu automatismo. A possibilidade de reparação depende do modelo, do estado do equipamento e da disponibilidade de peças, confirmados no diagnóstico.</p>
    <BrandLogoGrid brands={automationBrands} />
    <style jsx>{`
      .repair-brands { box-sizing:border-box; max-width:1100px; margin:0 auto; padding:50px 20px 20px; }
      h2 { color:#08285c; font-size:clamp(26px,3vw,36px); margin:0 0 18px; }
      p { max-width:850px; font-size:18px; line-height:1.75; color:#555; margin:0 0 28px; }
    `}</style>
  </section>;
}
