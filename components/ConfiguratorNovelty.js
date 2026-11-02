import { CONFIGURATOR_IS_NEW } from "../lib/configurator.mjs";

export default function ConfiguratorNovelty({ english = false }) {
  if (!CONFIGURATOR_IS_NEW) return null;
  return <span className="novelty-bubble" data-configurator-novelty>{english ? "New" : "Novidade"}
    <style jsx>{`
      .novelty-bubble { position:relative; display:inline-block; vertical-align:middle; margin-left:12px; padding:5px 11px; background:#f7b545; color:#08285c; border-radius:999px; font:700 11px/1.25 Arial,sans-serif; letter-spacing:.2px; white-space:nowrap; box-shadow:0 3px 10px rgba(190,125,20,.2); }
      .novelty-bubble::before { content:""; position:absolute; width:7px; height:7px; left:-3px; top:50%; transform:translateY(-50%) rotate(45deg); background:#f7b545; }
      @media(max-width:380px) { .novelty-bubble { margin-left:9px; padding:5px 9px; font-size:10px; } }
    `}</style>
  </span>;
}
