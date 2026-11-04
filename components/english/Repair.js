import EnglishPageLayout from "./PageLayout";
import ServiceCoverageNotice from "../ServiceCoverageNotice";
import CoverageMap from "../CoverageMap";
import ConfiguratorButton from "../ConfiguratorButton";
import BrandLogoGrid from "../BrandLogoGrid";
import { automationBrands } from "../../lib/brand-logos";
import { CONFIGURATOR_IS_NEW } from "../../lib/configurator.mjs";

const page = {
  "id": "repair",
  "route": "/en/electric-gate-repair-lisbon",
  "ptRoute": "/reparacao-portoes",
  "title": "Gate Automation and Automatic Gate Repairs in Lisbon | TecCasa Soluções",
  "description": "Diagnosis and repairs for gate motors, control boards, remotes and safety devices in Lisbon. Sectional garage door springs, cables and mechanics also assessed.",
  "message": "Hello, I would like assistance with gate automation or an automatic gate.\n\nLocation:\nGate type:\nBrand/model (if known):\nWhat happens:\nIs there another entrance to the garage?",
  "wrapper": "repair-landing",
  "questions": [
    {
      "question": "Do you repair the motor or the whole gate?",
      "answer": "The assessment covers the automation and the gate movement. Work may involve the motor, control board, receiver, accessories or mechanical parts of a sectional garage door. The proposal defines the work needed and its limits."
    },
    {
      "question": "Do you also assess sectional door springs and cables?",
      "answer": "Yes. We assess the sectional door balance and suspension system, including springs, cables and related parts. The work depends on identifying the door and the condition of the system."
    },
    {
      "question": "Does a fault mean the automation has to be replaced?",
      "answer": "Not necessarily. Diagnosis identifies what can be adjusted or repaired. If replacement makes sense, we explain why and the conditions of the proposed solution."
    },
    {
      "question": "What should I send when I first get in touch?",
      "answer": "Your location, gate type, a description of what happens and any photos you have. Add the brand or model if known. You do not need to dismantle the equipment."
    },
    {
      "question": "Can you give me a price straight away?",
      "answer": "Your description and photos help prepare the request. Some situations need testing or an on-site assessment before the repair and quote can be defined."
    },
    {
      "question": "The door is tilted or a cable is loose. Can I keep using it?",
      "answer": "Stop using it and keep people and vehicles clear. Do not adjust springs, cables or supports, or try to hold the door up by hand. Request an assessment and only send photos taken safely."
    }
  ],
  "pair": true
};

export default function Repair() {
  return <EnglishPageLayout page={page} styles={styles}>
<section className="hero"><div><p className="eyebrow">Technical support · Lisbon and surrounding areas</p><h1>Gate automation and automatic gate repairs</h1><p className="lead">Will your gate not open or close, or has it started behaving inconsistently? We assess the automation and gate movement to identify the cause.</p><p>Support for motors, control boards, remotes and safety devices. For sectional garage doors, we also assess mechanical parts, including springs and cables.</p><div data-contact-actions="true" className="actions"><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20assistance%20with%20gate%20automation%20or%20an%20automatic%20gate.%0A%0ALocation%3A%0AGate%20type%3A%0ABrand%2Fmodel%20%28if%20known%29%3A%0AWhat%20happens%3A%0AIs%20there%20another%20entrance%20to%20the%20garage%3F" rel="noopener noreferrer" data-contact-button="whatsapp" className="action green" target="_blank">Describe the fault</a><a href="tel:+351922021980" data-contact-button="secondary" className="action outline">Call +351 922 021 980</a></div><p className="micro">Tell us your location and what happens. If you do not know the brand or model, we can help.</p></div><figure className="hero-picture"><img src="/hero-reparacao-portoes.png" alt="Illustration of technical assistance for gate automation" width="1200" height="800" fetchPriority="high" /><figcaption>Support for automation on sliding gates, swing gates and garage doors.</figcaption></figure></section>
<div role="navigation" aria-label="Find your fault" className="shortcuts"><a href="#sintomas">Automation fault <span>↓</span></a><a href="#seccionados">Sectional door problem <span>↓</span></a><a href="#pedir-assistencia">Request assistance <span>↓</span></a></div>
<section id="sintomas" className="section"><span id="problemas"></span><p className="eyebrow">Start with the symptom</p><h2>What is happening?</h2><p className="section-intro">The same symptom can have different causes. These pages help describe the problem and prepare a request for assistance.</p><div className="grid three"><a href="/portao-garagem-nao-abre" className="linked-card" title="Detailed page in Portuguese" aria-label="Will not open or respond — detailed page in Portuguese"><img src="/central-eletronica.png" alt="" width="600" height="400" loading="lazy" /><div><h3>Will not open or respond</h3><p>The problem may be with the remote, control board, motor or safety devices.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/portao-nao-fecha" className="linked-card" title="Detailed page in Portuguese" aria-label="Will not close — detailed page in Portuguese"><img src="/fotocelulas-erro.png" alt="" width="600" height="400" loading="lazy" /><div><h3>Will not close</h3><p>We assess the closing conditions and how the system responds.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/portao-fecha-e-volta-a-abrir" className="linked-card" title="Detailed page in Portuguese" aria-label="Closes, then opens again — detailed page in Portuguese"><img src="/portao-inverte-fecho.png" alt="" width="600" height="400" loading="lazy" /><div><h3>Closes, then opens again</h3><p>Where it reverses and the other symptoms help prepare the diagnosis.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/portao-abre-ate-meio" className="linked-card" title="Detailed page in Portuguese" aria-label="Opens only halfway — detailed page in Portuguese"><img src="/portao-abre-ate-meio.png" alt="" width="600" height="400" loading="lazy" /><div><h3>Opens only halfway</h3><p>The stopping point, load and gate behaviour form part of the assessment.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/motor-portao-faz-barulho-mas-nao-abre" className="linked-card" title="Detailed page in Portuguese" aria-label="Makes a noise but does not move — detailed page in Portuguese"><img src="/motor-portao.png" alt="" width="600" height="400" loading="lazy" /><div><h3>Makes a noise but does not move</h3><p>Noise alone does not identify which part has failed.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/en/gate-remote-control-not-working" className="linked-card"><img src="/comando-portao.png" alt="" width="600" height="400" loading="lazy" /><div><h3>Remote fails or has lost range</h3><p>We identify the remote and receiver actually installed.</p><span className="card-link">Learn more <b aria-hidden="true">→</b></span></div></a></div></section>
<section className="section two-col"><div><p className="eyebrow">Diagnosis before deciding</p><h2>Understand the fault. Explain the work needed.</h2><p>The assessment covers the automation, accessories, wiring and gate movement. Mechanical resistance can also affect the motor.</p><p>We explain the adjustment, repair or replacement options and service conditions before proceeding.</p><a href="/quanto-custa-automatizar-portao" className="text-link" title="Detailed page in Portuguese">Considering replacement? See what affects the choice →<small className="pt-destination"> (Portuguese)</small></a></div><ol className="steps"><li><span>01</span><div><h3>Understand your request</h3><p>We gather the symptoms, equipment details and location.</p></div></li><li><span>02</span><div><h3>Assess the system</h3><p>We check where the fault comes from and which parts need attention.</p></div></li><li><span>03</span><div><h3>Present the solution</h3><p>We explain the proposed work, materials and conditions.</p></div></li><li><span>04</span><div><h3>Check operation</h3><p>After the work, we check movement and safety devices.</p></div></li></ol></section>
<section id="seccionados" className="section feature sectional"><figure className="feature-picture"><img src="/automatismos/tipos/instalacao-seccionado-768.webp" alt="Illustration of a sectional garage door" width="1200" height="800" loading="lazy" /><figcaption>AI-generated illustration.</figcaption></figure><div><p className="eyebrow">Sectional garage doors</p><h2>The motor and the door mechanics.</h2><p>Not every sectional door fault starts with the motor. The balance, suspension and panel travel also need assessment.</p><ul className="check-list"><li><strong>Springs and balance:</strong> identifying the system and assessing the work required.</li><li><strong>Cables and related parts:</strong> assessing condition and compatibility.</li><li><strong>Rollers, tracks and connections:</strong> checking the door movement and supports.</li></ul><a href="/reparacao-portoes-seccionados" className="action navy" title="Detailed page in Portuguese">Sectional garage door repairs<small className="pt-destination"> (Portuguese)</small></a><p className="micro">If a cable is loose, a spring is broken or the door is tilted, stop using it and request an assessment. Do not adjust parts to try to restore movement.</p></div></section>
<section className="section"><h2>Support for your gate type</h2><div className="grid four type-cards"><a href="/reparacao-portoes-correr" className="linked-card" title="Detailed page in Portuguese" aria-label="Sliding gates — detailed page in Portuguese"><img src="/automatismos/tipos/instalacao-correr-v2-768.webp" alt="Illustration of an automated sliding gate" width="768" height="512" loading="lazy" /><div><h3>Sliding gates</h3><p>Motor, transmission and movement along the track.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/reparacao-portoes-batente" className="linked-card" title="Detailed page in Portuguese" aria-label="Swing gates — detailed page in Portuguese"><img src="/automatismos/tipos/instalacao-batente-v2-768.webp" alt="" width="600" height="400" loading="lazy" /><div><h3>Swing gates</h3><p>Motors, arms, mounting points and coordination of the leaves.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/reparacao-portoes-seccionados" className="linked-card" title="Detailed page in Portuguese" aria-label="Sectional garage doors — detailed page in Portuguese"><img src="/automatismos/tipos/instalacao-seccionado-768.webp" alt="Illustration of a sectional garage door" width="600" height="400" loading="lazy" /><div><h3>Sectional garage doors</h3><p>Automation, suspension and panel travel.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/reparacao-portoes-basculantes" className="linked-card" title="Detailed page in Portuguese" aria-label="Up-and-over garage doors — detailed page in Portuguese"><img src="/automatismos/tipos/instalacao-basculante-768.webp" alt="" width="600" height="400" loading="lazy" /><div><h3>Up-and-over garage doors</h3><p>Motor, rail, connection and door mechanism.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a></div></section>
<section className="section"><p className="eyebrow">Independent technical service</p><h2>Support for different automation brands</h2><p className="section-intro">We identify the motor, control board and accessories. Repair options depend on the fault, compatibility and availability of parts.</p><p className="language-note">Detailed brand pages are currently in Portuguese.</p><BrandLogoGrid brands={automationBrands} english /></section>
<section id="pedir-assistencia" className="section contact-panel"><div><p className="eyebrow">We can start with photos</p><h2>Tell us what happens to your gate.</h2><p>Send your location, a description of the fault and overview photos of the gate and motor. For a garage, tell us whether there is another entrance.</p><div data-contact-actions="true" className="actions"><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20assistance%20with%20gate%20automation%20or%20an%20automatic%20gate.%0A%0ALocation%3A%0AGate%20type%3A%0ABrand%2Fmodel%20%28if%20known%29%3A%0AWhat%20happens%3A%0AIs%20there%20another%20entrance%20to%20the%20garage%3F" rel="noopener noreferrer" data-contact-button="whatsapp" className="action green" target="_blank">Request assistance</a><a href="tel:+351922021980" data-contact-button="secondary" className="action outline">Call +351 922 021 980</a><a href="mailto:geral@tec-casa.pt" data-contact-button="secondary" className="action outline">geral@tec-casa.pt</a></div><p className="micro">You do not need to dismantle anything to get in touch. Confirming the fault may require an on-site assessment.</p></div><div className="info-list"><div><b>01</b><span><strong>Location and gate type</strong>To understand the visit and the equipment involved.</span></div><div><b>02</b><span><strong>What happens</strong>At which stage it fails and when the problem started.</span></div><div><b>03</b><span><strong>Any photos you already have</strong>Overview, motor and visible damage, photographed safely.</span></div></div></section>
<section className="section faq"><h2>Questions about assistance and repairs</h2><details open><summary>Do you repair the motor or the whole gate?</summary><p>The assessment covers the automation and the gate movement. Work may involve the motor, control board, receiver, accessories or mechanical parts of a sectional garage door. The proposal defines the work needed and its limits.</p></details><details><summary>Do you also assess sectional door springs and cables?</summary><p>Yes. We assess the sectional door balance and suspension system, including springs, cables and related parts. The work depends on identifying the door and the condition of the system.</p></details><details><summary>Does a fault mean the automation has to be replaced?</summary><p>Not necessarily. Diagnosis identifies what can be adjusted or repaired. If replacement makes sense, we explain why and the conditions of the proposed solution.</p></details><details><summary>What should I send when I first get in touch?</summary><p>Your location, gate type, a description of what happens and any photos you have. Add the brand or model if known. You do not need to dismantle the equipment.</p></details><details><summary>Can you give me a price straight away?</summary><p>Your description and photos help prepare the request. Some situations need testing or an on-site assessment before the repair and quote can be defined.</p></details><details><summary>The door is tilted or a cable is loose. Can I keep using it?</summary><p>Stop using it and keep people and vehicles clear. Do not adjust springs, cables or supports, or try to hold the door up by hand. Request an assessment and only send photos taken safely.</p></details></section>
<ServiceCoverageNotice english />
<section className="section final dark"><h2>Let us find the right solution for your situation.</h2><p>We start with diagnosis and explain the work recommended for your automation system or automatic gate.</p><div data-contact-actions="true" className="actions"><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20assistance%20with%20gate%20automation%20or%20an%20automatic%20gate.%0A%0ALocation%3A%0AGate%20type%3A%0ABrand%2Fmodel%20%28if%20known%29%3A%0AWhat%20happens%3A%0AIs%20there%20another%20entrance%20to%20the%20garage%3F" rel="noopener noreferrer" data-contact-button="whatsapp" className="action green" target="_blank">Talk to TecCasa</a><a href="tel:+351922021980" data-contact-button="secondary" className="action outline">Call +351 922 021 980</a></div></section>
<p className="practical"><a href="/en/service-terms">Service terms</a></p>
  </EnglishPageLayout>;
}

const styles = `
.english-page a{color:#08285c;text-underline-offset:4px}
.english-page h1,.english-page h2,.english-page h3{color:#08285c}
.english-page h1{font-size:clamp(36px,4.2vw,54px);line-height:1.08;letter-spacing:-1.2px;margin:0 0 25px;font-weight:800}
.english-page h2{font-size:34px;line-height:1.22;letter-spacing:-.5px;margin:0 0 20px}
.english-page h3{font-size:21px;line-height:1.35;margin:0 0 13px}
.english-page p{margin:0 0 18px}
.english-page a:focus-visible,.english-page summary:focus-visible{outline:3px solid #f7b545;outline-offset:5px}
.english-page a{-webkit-tap-highlight-color:transparent}
.english-page section[id]{scroll-margin-top:175px}
.english-page .hero{display:grid;grid-template-columns:1.08fr 1fr;gap:42px;align-items:center;padding:26px 0 42px}
.english-page .hero .lead{font-size:20px;line-height:1.7}
.english-page .hero p:not(.eyebrow):not(.micro){max-width:640px}
.english-page .eyebrow{font-size:12px;font-weight:700;letter-spacing:.4px;line-height:1.6;color:#42617e;margin:0 0 17px}
.english-page .micro{font-size:12px;line-height:1.7;color:#66778a;margin:15px 0 0}
.english-page .hero-picture,.english-page .feature-picture{margin:0;min-width:0}
.english-page .hero-picture img{width:100%;height:auto;display:block;border-radius:28px;box-shadow:0 20px 50px #08285c22}
.english-page .hero-picture figcaption,.english-page .feature-picture figcaption{font-size:12px;line-height:1.6;color:#66778a;margin-top:12px;text-align:center}
.english-page .actions{display:flex;align-items:stretch;gap:12px;flex-wrap:wrap;margin-top:26px}
.english-page .action{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;text-align:center;min-height:58px;padding:16px 22px;border:1px solid transparent;border-radius:16px;text-decoration:none;font:700 16px/1.4 Arial,sans-serif;max-width:100%;overflow-wrap:anywhere}
.english-page .action.green{background:#25d366;border-color:#25d366;color:#fff}
.english-page .action.outline{background:#fff;border-color:#c9d5e5;color:#08285c}
.english-page .action.navy{background:#08285c;border-color:#08285c;color:#fff}
.english-page .action:hover{filter:brightness(.97)}
.english-page .shortcuts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;padding-top:24px;margin-bottom:10px;border-top:1px solid #dce5f0}
.english-page .shortcuts a{display:flex;align-items:center;justify-content:space-between;gap:15px;background:#eef3fa;border-radius:16px;padding:18px;text-decoration:none;font-size:15px;font-weight:700;line-height:1.5}
.english-page .shortcuts span{font-size:20px}
.english-page .section{padding:46px 0}
.english-page .section-intro{max-width:850px;font-size:18px;line-height:1.75;margin:0 0 28px}
.english-page .grid{display:grid;gap:20px;align-items:stretch}
.english-page .grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}
.english-page .grid.four{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.english-page .two-col{display:grid;grid-template-columns:1.05fr 1fr;gap:40px;align-items:start}
.english-page .linked-card{display:flex;flex-direction:column;border:1px solid #dce5f0;border-radius:23px;background:#f0f5fb;text-decoration:none;overflow:hidden;min-width:0;transition:box-shadow .15s ease}
.english-page .linked-card:hover{box-shadow:0 12px 24px #0b2c5f15}
.english-page .linked-card>div{display:flex;flex-direction:column;flex:1;padding:24px}
.english-page .linked-card h3{font-size:21px;margin:0 0 12px}
.english-page .linked-card p{font-size:15px;line-height:1.75;color:#4e6075;margin-bottom:22px}
.english-page .linked-card .eyebrow{font-size:11px;margin-bottom:12px}
.english-page .linked-card>img{display:block;width:100%;height:190px;object-fit:cover;background:#e8eff8}
.english-page .linked-card .card-link{margin-top:auto;font-size:13px;font-weight:700;display:flex;justify-content:space-between;gap:12px}
.english-page .card-link b{font-size:18px;line-height:1}
.english-page .type-cards .linked-card>img{height:155px}
.english-page .type-cards .linked-card>div{padding:22px 19px}
.english-page .type-cards h3{font-size:20px}
.english-page .type-cards p{font-size:14px}
.english-page .text-link{font-size:15px;font-weight:700;text-underline-offset:5px;display:inline-block}
.english-page .steps{display:grid;gap:20px;padding:0;margin:0;list-style:none}
.english-page .steps li{display:flex;gap:17px;align-items:flex-start}
.english-page .steps li>span{display:grid;place-items:center;flex-shrink:0;width:40px;height:40px;border-radius:50%;background:#08285c;color:#fff;font-size:12px;font-weight:700}
.english-page .steps h3{font-size:18px;margin:2px 0 6px}
.english-page .steps p{font-size:15px;line-height:1.7;margin:0}
.english-page .feature{display:grid;grid-template-columns:1fr 1.15fr;gap:36px;align-items:center;margin:22px 0;padding:34px;border-radius:27px;background:#edf3fa}
.english-page .feature-picture img{display:block;width:100%;height:auto;border-radius:22px}
.english-page .feature h2{font-size:31px}
.english-page .feature .action{margin-top:10px}
.english-page .check-list{padding-left:20px;margin:20px 0 24px;font-size:16px;line-height:1.75}
.english-page .check-list li{margin-bottom:12px;padding-left:4px}
.english-page .sectional .micro{margin-top:18px;line-height:1.8}
.english-page .contact-panel{display:grid;grid-template-columns:1.18fr 1fr;gap:36px;background:#edf3fa;padding:34px;border-radius:26px;margin:22px 0}
.english-page .contact-panel h2{font-size:31px}
.english-page .contact-panel .action{font-size:14px;padding:15px 18px}
.english-page .info-list{display:grid;gap:24px;align-content:center}
.english-page .info-list>div{display:flex;gap:16px}
.english-page .info-list b{display:grid;place-items:center;flex-shrink:0;width:34px;height:34px;background:#dfe9f6;border-radius:50%;font-size:12px;color:#08285c}
.english-page .info-list span{font-size:15px;line-height:1.7}
.english-page .info-list strong{display:block;font-size:16px;color:#08285c;margin-bottom:5px}
.english-page .faq details{padding:20px 0;border-bottom:1px solid #dce5f0}
.english-page .faq summary{color:#08285c;font-weight:700;font-size:17px;line-height:1.65;cursor:pointer;margin-left:20px;padding-left:5px}
.english-page .faq details p{font-size:16px;line-height:1.75;max-width:920px;margin:15px 0 0 25px}
.english-page .final{text-align:center;border-radius:28px;padding:42px 30px;margin:24px 0}
.english-page .final h2{max-width:850px;margin:0 auto 20px}
.english-page .final>p{max-width:800px;margin:0 auto 26px}
.english-page .final .actions{justify-content:center}
.english-page .dark{background:#0b2c5f;color:#fff}
.english-page .dark h2,.english-page .dark h3{color:#fff}
.english-page .dark .micro{color:#d1dff0;margin-top:20px}
.english-page .practical{font-size:13px;line-height:1.8;color:#66778a;padding:12px 0 26px;margin:0}
@media(max-width:1100px){.english-page .hero{gap:28px}
.english-page .actions .action{flex:1 1 170px}
.english-page .grid.four{grid-template-columns:repeat(2,minmax(0,1fr))}
.english-page .two-col{gap:30px}
.english-page .feature{gap:28px}
.english-page .contact-panel{grid-template-columns:1fr;gap:28px}
.english-page .info-list{grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.english-page .info-list>div{display:block}
.english-page .info-list b{margin-bottom:12px}}
@media(max-width:850px){.english-page .hero{grid-template-columns:1fr;gap:28px}
.english-page .hero-picture{max-width:720px}
.english-page .hero h1{max-width:780px}
.english-page .grid.three{grid-template-columns:repeat(2,minmax(0,1fr))}
.english-page .two-col,.english-page .feature{grid-template-columns:1fr}
.english-page .feature-picture{max-width:700px}
.english-page .hero p:not(.eyebrow):not(.micro){max-width:none}}
@media(max-width:600px){.english-page h1{font-size:35px;line-height:1.12;letter-spacing:-.6px;margin-bottom:22px}
.english-page h2{font-size:28px;letter-spacing:-.4px}
.english-page h3{font-size:21px}
.english-page .hero{padding:21px 4px 32px;gap:26px}
.english-page .hero .lead{font-size:18px;line-height:1.75}
.english-page .hero-picture img{border-radius:22px}
.english-page .hero-picture figcaption{font-size:11px}
.english-page .actions{flex-direction:column;margin-top:24px}
.english-page .actions .action{flex:0 1 auto;width:100%}
.english-page .action{font-size:16px;padding:16px 19px;min-height:58px}
.english-page .eyebrow{font-size:12px}
.english-page .micro{font-size:12px}
.english-page .shortcuts{grid-template-columns:1fr;gap:10px;padding-top:20px}
.english-page .shortcuts a{padding:15px 18px}
.english-page .section{padding:30px 4px}
.english-page .section-intro{font-size:17px;line-height:1.75;margin-bottom:24px}
.english-page .grid.three,.english-page .grid.four{grid-template-columns:1fr;gap:16px}
.english-page .linked-card>div{padding:23px}
.english-page .linked-card>img{height:190px}
.english-page .type-cards{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}
.english-page .type-cards .linked-card>img{height:115px}
.english-page .type-cards .linked-card>div{padding:18px 14px}
.english-page .type-cards h3{font-size:18px}
.english-page .type-cards p{font-size:13px;line-height:1.7}
.english-page .type-cards .card-link{font-size:12px}
.english-page .two-col{gap:28px}
.english-page .steps{gap:22px}
.english-page .steps h3{font-size:18px}
.english-page .feature,.english-page .contact-panel{padding:27px 21px;margin:20px 0;border-radius:24px}
.english-page .feature h2,.english-page .contact-panel h2{font-size:28px}
.english-page .feature .action{width:100%}
.english-page .check-list{font-size:15px}
.english-page .info-list{grid-template-columns:1fr;gap:18px}
.english-page .info-list>div{display:flex;gap:14px}
.english-page .info-list b{margin:0}
.english-page .faq summary{font-size:17px}
.english-page .faq details p{margin-left:4px;font-size:16px}
.english-page .final{padding:33px 21px;margin:22px 0}
.english-page .final>p{font-size:17px}
.english-page .practical{font-size:12px;padding:12px 4px 24px}}
@media(max-width:360px){.english-page .type-cards{grid-template-columns:1fr!important}}
@media(prefers-reduced-motion:reduce){.english-page .linked-card{transition:none}}
.english-page.repair-landing{min-height:100vh;padding:110px 40px 40px;background:#f4f7fb;color:#405168;font:17px/1.75 Arial,sans-serif}
.english-page.repair-landing *{box-sizing:border-box}
.english-page .main-card{width:min(1200px,calc(100% - 40px));margin:auto;padding:50px;background:#fff;border-radius:22px;box-shadow:0 10px 30px #0b2c5f12}
.english-page #problemas{display:block;scroll-margin-top:110px}
.english-page .floating-whatsapp{position:fixed;bottom:25px;right:25px;z-index:900;padding:13px 18px;border-radius:999px;background:#25d366;color:white;text-decoration:none;font-size:14px;font-weight:700;box-shadow:0 4px 18px #0002}
@media(max-width:768px){.english-page.repair-landing{padding:95px 6px 10px}
.english-page .main-card{width:100%;padding:16px 12px;border-radius:18px}}
@media(max-width:600px){.english-page .floating-whatsapp{right:14px;bottom:14px;font-size:13px}}
`;
