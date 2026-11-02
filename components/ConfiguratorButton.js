import { CONFIGURATOR_IS_NEW, CONFIGURATOR_PATH, GATE_TYPES } from "../lib/configurator.mjs";

export default function ConfiguratorButton({ english = false, kind, featured = false }) {
  const type = GATE_TYPES[kind];
  const href = CONFIGURATOR_PATH + (type ? `?tipo=${type}` : "");
  return <a className={`configurator-launch${featured ? " featured" : ""}${CONFIGURATOR_IS_NEW ? " is-new" : ""}`} href={href}>
    <span className="label">{english ? "Configure gate automation (PT)" : "Configurar a automatização"}</span>
    {CONFIGURATOR_IS_NEW && <span className="ribbon" data-configurator-novelty>{english ? "New" : "Novidade"}</span>}
    <style jsx>{`
      .configurator-launch { position:relative; display:inline-flex; align-items:center; justify-content:center; align-self:center; box-sizing:border-box; min-height:56px; max-width:100%; padding:17px 28px; overflow:hidden; background:#08285c; border:1px solid #08285c; border-radius:16px; color:#fff; text-decoration:none; font:700 17px/1.3 Arial,sans-serif; box-shadow:0 10px 25px rgba(11,44,95,.18); }
      .is-new { padding-right:76px; }
      .featured { background:#25D366; border-color:#25D366; box-shadow:0 10px 25px rgba(37,211,102,.2); }
      .label { position:relative; z-index:1; }
      .ribbon { position:absolute; z-index:2; top:15px; right:-29px; width:110px; transform:rotate(45deg); background:#f7b545; color:#08285c; text-align:center; font:700 10px/20px Arial,sans-serif; letter-spacing:.2px; box-shadow:0 2px 6px rgba(0,0,0,.12); }
      .configurator-launch:hover { filter:brightness(1.05); }
      .configurator-launch:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      @media(max-width:480px) { .configurator-launch { width:100%; font-size:15px; padding:16px 22px; } .is-new { padding-right:70px; } }
    `}</style>
  </a>;
}
