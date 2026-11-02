import { CONFIGURATOR_IS_NEW } from "../lib/configurator.mjs";
import ConfiguratorButton from "./ConfiguratorButton";

export default function ConfiguratorCallout({ featured = false, kind, english = false }) {
  return <section className={`configurator-callout${featured ? " featured" : ""}`} aria-label={english ? "Gate configurator" : "Configurador de automatismos"}>
    <div className="copy">
      {featured && CONFIGURATOR_IS_NEW && <span className="new-badge" data-configurator-novelty>{english ? "New" : "Novidade"}</span>}
      <h2>{featured ? "Descubra o automatismo adequado ao seu portão." : english ? "Explore the options for your gate" : "Que automatismo faz sentido para o seu portão?"}</h2>
      <p>{english ? "Describe your existing gate and installation conditions to receive automation options by email, subject to technical assessment. The configurator is available in Portuguese." : "Indique as características do seu portão e as condições da instalação para receber até três soluções de automatização por email, sujeitas a validação técnica."}</p>
      <ConfiguratorButton kind={kind} english={english} featured />
      <p className="note">{english ? "Sliding, swing, sectional and up-and-over gates." : "Portões de correr, de batente, seccionados e basculantes."}</p>
    </div>
    {featured && <figure><img src="/automatismos/tipos/instalacao-correr-v2-768.webp" alt="Ilustração de um portão de correr com automatismo" width="768" height="512" loading="lazy" /><figcaption>Imagem ilustrativa gerada por IA.</figcaption></figure>}
    <style jsx>{`
      .configurator-callout { box-sizing:border-box; margin:30px 0 45px; padding:34px; border:1px solid #d8e3f1; border-radius:24px; background:#eef3fa; color:#34445a; font-family:Arial,sans-serif; }
      .featured { display:grid; grid-template-columns:1.2fr 1fr; align-items:center; gap:36px; padding:38px; margin:32px 0 55px; background:linear-gradient(135deg,#eef3fa,#fff); }
      .new-badge { display:inline-block; padding:7px 14px; margin-bottom:16px; border-radius:999px; color:#08285c; background:#dce8f8; font-weight:700; font-size:13px; }
      h2 { color:#08285c; font-size:28px; line-height:1.2; margin:0 0 16px; }
      .featured h2 { font-size:clamp(28px,3vw,38px); max-width:520px; }
      p { margin:0 0 22px; max-width:800px; font-size:17px; line-height:1.7; }
      .start { display:inline-block; padding:15px 24px; background:#25D366; border-radius:14px; box-shadow:0 10px 25px rgba(37,211,102,.2); color:white; font-weight:700; font-size:17px; text-decoration:none; }
      .start:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      .note { font-size:13px; margin:16px 0 0; color:#586679; }
      figure { margin:0; min-width:0; }
      img { display:block; width:100%; height:auto; border-radius:20px; }
      figcaption { font-size:11px; color:#66758a; margin-top:8px; }
      @media(max-width:768px) { .configurator-callout { padding:26px 22px; margin:26px 0 34px; } .featured { grid-template-columns:1fr; gap:24px; } h2 { font-size:26px; } .featured h2 { font-size:30px; } p { font-size:16px; } }
      @media(max-width:480px) { .start { display:block; text-align:center; padding:15px 12px; font-size:16px; } }
    `}</style>
  </section>;
}
