import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { company } from "../lib/company";
import { configuratorUrl, readConfiguratorMessage } from "../lib/configurator.mjs";

export default function Configurador() {
  const router = useRouter();
  const frame = useRef(null);
  const [height, setHeight] = useState(1250);
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);
  const src = router.isReady ? configuratorUrl(router.query.tipo) : null;
  useEffect(() => {
    if (!src) return;
    setReady(false); setSlow(false);
    const timer = setTimeout(() => setSlow(true), 20000);
    const receive = event => {
      const message = readConfiguratorMessage(event, frame.current?.contentWindow);
      if (!message) return;
      if (message.type === "resize") { setHeight(message.value); setReady(true); clearTimeout(timer); }
      if (message.type === "scroll") {
        const top = frame.current.getBoundingClientRect().top + window.scrollY + message.value - 110;
        window.scrollTo({top: Math.max(0, top), behavior: "auto"});
      }
    };
    window.addEventListener("message", receive);
    return () => { clearTimeout(timer); window.removeEventListener("message", receive); };
  }, [src]);
  const url = `${company.url}/configurador-automatismos-portoes`;
  return <>
    <Head>
      <title>Configurador de automatismos para portões | TecCasa Soluções</title>
      <meta name="description" content="Saiba quanto pode custar automatizar o seu portão. Receba por email até três soluções com preços indicativos, sujeitas a validação técnica." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Que automatismo instalar no seu portão? | TecCasa Soluções" />
      <meta property="og:description" content="Indique as características do seu portão e receba por email até três soluções de automatização com preços indicativos." />
      <meta property="og:type" content="website" /><meta property="og:url" content={url} />
      <meta property="og:image" content={`${company.url}/automatismos/tipos/instalacao-correr-v2-1440.webp`} />
    </Head>
    <div className="configurator-page" lang="pt-PT">
      <SiteHeader alternateHref="/en/automatic-gate-installation-lisbon" />
      <main>
        <nav className="breadcrumbs" aria-label="Localização no site"><a href="/">Início</a><span aria-hidden="true"> / </span><a href="/instalacao-automatismos-portoes">Instalação de automatismos</a><span aria-hidden="true"> / </span><span>Configurador</span></nav>
        <header className="intro"><p className="eyebrow">Configurador de automatismos</p><h1>Que automatismo instalar no seu portão?</h1><p className="intro-copy">Indique as características do seu portão e receba por email até três soluções de automatização com preços indicativos.</p><p className="validation">Os valores dependem dos dados fornecidos e de validação técnica. Algumas situações exigem avaliação no local.</p></header>
        <section className="configurator" aria-label="Configure o automatismo do seu portão">
          {!ready && <p className="loading" role="status">{slow ? <>O configurador está a demorar a carregar. Pode <a href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer">pedir ajuda por WhatsApp</a> ou tentar recarregar a página.</> : "A preparar o seu portão…"}</p>}
          {src && <iframe ref={frame} src={src} title="Configurador visual de automatismos TecCasa" style={{height}} sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox allow-modals" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" />}
          <noscript>Ative o JavaScript para configurar o portão ou <a href="https://wa.me/351922021980">contacte-nos por WhatsApp</a>.</noscript>
        </section>
        <section className="support"><div><h2>Não sabe alguma medida? Nós ajudamos.</h2><p>Não precisa de ter todas as respostas. Podemos analisar as condições consigo e confirmar o que for necessário antes de avançar.</p></div><a className="whatsapp" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer">Falar com a TecCasa</a></section>
        <p className="privacy">As propostas seguem por email. As fotografias são opcionais e a análise por IA requer a sua autorização no configurador. <a href="/privacidade">Política de privacidade</a> · <a href="/condicoes-servicos">Condições dos serviços</a></p>
        <SiteFooter />
      </main>
      <a className="floating-whatsapp" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer" aria-label="Falar com a TecCasa por WhatsApp">WhatsApp</a>
    </div>
    <style jsx>{`
      .configurator-page { padding:110px 24px 36px; background:#f4f7fb; color:#34445a; font:17px/1.7 Arial,sans-serif; }
      main { max-width:1200px; margin:auto; }
      a { color:#08285c; text-underline-offset:4px; }
      .breadcrumbs { font-size:13px; margin:0 0 20px; }
      .intro { padding:32px 38px; background:linear-gradient(120deg,#0b285b,#103f83); color:white; border-radius:26px; margin-bottom:24px; }
      .eyebrow { font-size:13px; font-weight:700; margin:0 0 12px; }
      h1 { font-size:clamp(30px,4vw,42px); line-height:1.15; margin:0 0 18px; }
      .intro-copy { max-width:850px; margin:0; font-size:18px; }
      .intro .validation { max-width:850px; margin:14px 0 0; font-size:13px; line-height:1.6; opacity:.85; }
      .configurator { padding:26px; background:#fff; border:1px solid #d8e3f1; border-radius:24px; }
      iframe { display:block; width:100%; border:0; min-height:200px; }
      .loading { padding:16px; margin:0 0 16px; background:#eef3fa; border-radius:12px; font-size:15px; }
      .support { display:flex; align-items:center; justify-content:space-between; gap:30px; padding:30px; margin-top:26px; background:#e9eff7; border-radius:24px; }
      h2 { color:#08285c; font-size:26px; line-height:1.25; margin:0 0 14px; }
      .support p { margin:0; max-width:760px; }
      .whatsapp { flex-shrink:0; padding:14px 20px; border-radius:14px; background:#25D366; color:#fff; text-decoration:none; font-weight:700; font-size:16px; }
      .privacy { margin:22px 4px; font-size:13px; }
      .floating-whatsapp { position:fixed; bottom:22px; right:22px; z-index:900; padding:12px 18px; background:#25D366; color:white; text-decoration:none; font-size:14px; font-weight:700; border-radius:999px; box-shadow:0 8px 24px rgba(37,211,102,.25); }
      a:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      @media(max-width:768px) { .configurator-page { padding:100px 12px 24px; font-size:16px; } .intro { padding:26px 22px; border-radius:22px; } .intro-copy { font-size:16px; } .configurator { padding:12px 8px; border-radius:18px; } .support { flex-direction:column; align-items:stretch; gap:20px; padding:26px 22px; } .whatsapp { text-align:center; } .floating-whatsapp { right:14px; bottom:14px; } }
    `}</style>
  </>;
}
