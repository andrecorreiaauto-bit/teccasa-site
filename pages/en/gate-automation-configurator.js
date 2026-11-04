import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ConfiguratorMeasurement from "../../components/ConfiguratorMeasurement";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { company } from "../../lib/company";
import { configuratorUrl, readConfiguratorMessage } from "../../lib/configurator.mjs";

export default function EnglishConfigurator() {
  const router = useRouter();
  const frame = useRef(null);
  const [height, setHeight] = useState(1250);
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);
  const src = router.isReady ? configuratorUrl(router.query.tipo, "en") : null;
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
  const url = `${company.url}/en/gate-automation-configurator`;
  return <>
    <Head>
      <title>Gate automation configurator | TecCasa Soluções</title>
      <meta name="description" content="Find out how much automating your gate could cost. Receive up to three options with indicative prices by email, subject to technical assessment." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Which automation system suits your gate? | TecCasa Soluções" />
      <meta property="og:description" content="Tell us about your gate and receive up to three automation options with indicative prices by email." />
      <meta property="og:type" content="website" /><meta property="og:url" content={url} />
      <meta property="og:image" content={`${company.url}/automatismos/tipos/instalacao-correr-v2-1440.webp`} />
    </Head>
    <div className="configurator-page" lang="en-GB">
      <SiteHeader english alternateHref="/configurador-automatismos-portoes" />
      <ConfiguratorMeasurement frame={frame} src={src} />
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb navigation"><a href="/en">Home</a><span aria-hidden="true"> / </span><a href="/en/automatic-gate-installation-lisbon">Automation installation</a><span aria-hidden="true"> / </span><span>Configurator</span></nav>
        <header className="intro"><p className="eyebrow">Automation configurator</p><h1>Which automation system suits your gate?</h1><p className="intro-copy">Tell us about your gate and receive up to three automation options with indicative prices by email.</p><p className="validation">Prices depend on the information provided and technical assessment. Some cases require an on-site visit.</p></header>
        <section className="configurator" aria-label="Configure your gate automation">
          {!ready && <p className="loading" role="status">{slow ? <>The configurator is taking longer to load. You can <a href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer">ask for help on WhatsApp</a> or try reloading the page.</> : "Preparing your gate…"}</p>}
          {src && <iframe ref={frame} src={src} title="TecCasa gate automation configurator" style={{height}} sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox allow-modals" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" />}
          <noscript>Enable JavaScript to configure your gate automation or <a href="https://wa.me/351922021980">contact us on WhatsApp</a>.</noscript>
        </section>
        <p className="budget-link">Measurements, usage and installation conditions affect the price. <a href="/en/automatic-gate-installation-lisbon">Discuss what affects your quotation and equipment choice.</a></p>
        <section className="support"><div><h2>Not sure about a measurement? We can help.</h2><p>You do not need every answer. We can review the conditions with you and confirm the details before proceeding.</p></div><a className="whatsapp" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer">Talk to TecCasa</a></section>
        <p className="privacy">Quotations are sent by email. Photos are optional and AI assessment requires your permission in the configurator. <a href="/en/privacy">Privacy policy</a> · <a href="/en/service-terms">Service terms</a></p>
        <SiteFooter english />
      </main>
      <a className="floating-whatsapp" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer" aria-label="Talk to TecCasa por WhatsApp">WhatsApp</a>
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
      .budget-link { font-size:15px; margin:20px 8px 28px; }
      .privacy { margin:22px 4px; font-size:13px; }
      .floating-whatsapp { position:fixed; bottom:22px; right:22px; z-index:900; padding:12px 18px; background:#25D366; color:white; text-decoration:none; font-size:14px; font-weight:700; border-radius:999px; box-shadow:0 8px 24px rgba(37,211,102,.25); }
      a:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      @media(max-width:768px) { .configurator-page { padding:100px 12px 24px; font-size:16px; } .intro { padding:26px 22px; border-radius:22px; } .intro-copy { font-size:16px; } .configurator { padding:12px 8px; border-radius:18px; } .support { flex-direction:column; align-items:stretch; gap:20px; padding:26px 22px; } .whatsapp { text-align:center; } .floating-whatsapp { right:14px; bottom:14px; } }
    `}</style>
  </>;
}
