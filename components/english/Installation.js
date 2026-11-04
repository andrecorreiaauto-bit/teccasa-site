import EnglishPageLayout from "./PageLayout";
import ServiceCoverageNotice from "../ServiceCoverageNotice";
import CoverageMap from "../CoverageMap";
import ConfiguratorButton from "../ConfiguratorButton";
import BrandLogoGrid from "../BrandLogoGrid";
import { automationBrands } from "../../lib/brand-logos";
import { CONFIGURATOR_IS_NEW } from "../../lib/configurator.mjs";

const page = {
  "id": "installation",
  "route": "/en/automatic-gate-installation-lisbon",
  "ptRoute": "/instalacao-automatismos-portoes",
  "title": "Gate Automation Installation in Lisbon | TecCasa Soluções",
  "description": "Installation and replacement of gate automation for sliding gates, swing gates and garage doors in Lisbon and surrounding areas. Options and indicative prices by email.",
  "message": "Hello, I would like an assessment for installing or replacing gate automation.\n\nLocation:\nGate type:\nNew installation or replacement:\nApproximate measurements (if known):",
  "wrapper": "installation-landing",
  "questions": [
    {
      "question": "Can my existing gate be automated?",
      "answer": "That depends on its condition, movement and mounting conditions. We assess these to establish whether automation is suitable and what preparation is needed."
    },
    {
      "question": "Does the configurator give a final price?",
      "answer": "The configurator emails up to three options with indicative prices based on the information you provide. Selection and pricing are subject to technical checks; some situations need an on-site assessment."
    },
    {
      "question": "What if I do not know the weight or all the measurements?",
      "answer": "You can ask for help and send photos. The initial information helps scope your request; we confirm the details needed before defining the solution."
    },
    {
      "question": "Can you replace an old gate motor?",
      "answer": "Yes. We identify the existing system, its usage and mounting conditions. Reusing accessories, remotes or wiring depends on their compatibility and condition."
    },
    {
      "question": "I bought a kit. Can you install it?",
      "answer": "We assess the supplied equipment, its compatibility with the gate and any materials or preparation still needed. Installation is quoted once those conditions are understood."
    },
    {
      "question": "How long does installation take?",
      "answer": "Timing depends on the equipment, material availability and site conditions. Preparation and scheduling are explained in the proposal."
    }
  ],
  "pair": true
};

export default function Installation() {
  return <EnglishPageLayout page={page} styles={styles}>
<section className="hero"><div><p className="eyebrow">Sliding gates, swing gates and garage doors</p><h1>Gate automation installation</h1><p className="lead">Automation selected for your gate, your usage and the installation conditions.</p><p>We assess new installations and replacements. Start with the configurator to receive up to three options with indicative prices by email, or speak to us to prepare your request.</p><div data-contact-actions="true" className="actions"><ConfiguratorButton english /><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20an%20assessment%20for%20installing%20or%20replacing%20gate%20automation.%0A%0ALocation%3A%0AGate%20type%3A%0ANew%20installation%20or%20replacement%3A%0AApproximate%20measurements%20%28if%20known%29%3A" rel="noopener noreferrer" data-contact-button="whatsapp" className="action green" target="_blank">Request an assessment</a></div><p className="micro">Not sure about a measurement? Send photos. We can help gather the information needed.</p></div><figure className="hero-picture"><img src="/instalacao-automatismos-portoes-hero.png" alt="Illustration of gate automation installation" width="1200" height="800" fetchPriority="high" /><figcaption>Equipment selection depends on the gate and the mounting conditions.</figcaption></figure></section>
<div role="navigation" aria-label="Choose your next step" className="shortcuts"><a href="#tipos">Gate type <span>↓</span></a><a href="#nova-ou-substituicao">New installation or replacement <span>↓</span></a><a href="#proposta">What the proposal should include <span>↓</span></a></div>
<section id="tipos" className="section"><p className="eyebrow">Start with the entrance you already have</p><h2>What type of gate would you like to automate?</h2><p className="section-intro">Each type of movement has its own requirements. The drive system must suit the gate and the way it is used.</p><div className="grid four type-cards"><a href="/instalacao-automatismos-portoes-correr" className="linked-card" title="Detailed page in Portuguese" aria-label="Sliding gates — detailed page in Portuguese"><img src="/automatismos/tipos/instalacao-correr-v2-768.webp" alt="Illustration of an automated sliding gate" width="768" height="512" loading="lazy" /><div><h3>Sliding gates</h3><p>Length, weight, travel and track condition.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/instalacao-automatismos-portoes-batente" className="linked-card" title="Detailed page in Portuguese" aria-label="Swing gates — detailed page in Portuguese"><img src="/automatismos/tipos/instalacao-batente-v2-768.webp" alt="" width="600" height="400" loading="lazy" /><div><h3>Swing gates</h3><p>Dimensions and weight per leaf, mounting points and available space.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/instalacao-automatismos-portoes-seccionados" className="linked-card" title="Detailed page in Portuguese" aria-label="Sectional garage doors — detailed page in Portuguese"><img src="/automatismos/tipos/instalacao-seccionado-768.webp" alt="Illustration of a sectional garage door" width="600" height="400" loading="lazy" /><div><h3>Sectional garage doors</h3><p>Door dimensions, ceiling clearance and mechanical condition.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a><a href="/instalacao-automatismos-portoes-basculantes" className="linked-card" title="Detailed page in Portuguese" aria-label="Up-and-over garage doors — detailed page in Portuguese"><img src="/automatismos/tipos/instalacao-basculante-768.webp" alt="" width="600" height="400" loading="lazy" /><div><h3>Up-and-over garage doors</h3><p>Mechanism, travel and connection to the door.</p><span className="card-link">Learn more <b aria-hidden="true">→</b><small className="pt-destination"> (Portuguese)</small></span></div></a></div></section>
<section className="section two-col"><div><p className="eyebrow">Sizing the solution</p><h2>Weight and measurements are just the start.</h2><p>A private home and a shared entrance may need different solutions, even with similar gates. Usage frequency, available space and site conditions also matter.</p><a href="/quanto-custa-automatizar-portao" className="text-link" title="Detailed page in Portuguese">What affects the choice and quote? →<small className="pt-destination"> (Portuguese)</small></a></div><div className="grid two compact"><article className="small-card"><span className="number">01</span><h3>Gate and movement</h3><p>Type, dimensions, weight and overall condition.</p></article><article className="small-card"><span className="number">02</span><h3>Usage</h3><p>Opening frequency and the needs of the entrance.</p></article><article className="small-card"><span className="number">03</span><h3>Mounting and infrastructure</h3><p>Mounting points, space, power and cable routes.</p></article><article className="small-card"><span className="number">04</span><h3>Safety and accessories</h3><p>Safety devices and controls suited to the installation.</p></article></div></section>
<section id="nova-ou-substituicao" className="section"><h2>Where are you with your project?</h2><div className="grid two"><article className="path-card"><p className="eyebrow">First automation system</p><h3>Your gate is still manual.</h3><p>We check the gate movement, mounting points, power supply and available conduits. We explain what needs to be prepared before the automation can be installed.</p><a href="/en/gate-automation-configurator" className="text-link">Start a new installation →</a></article><article className="path-card"><p className="eyebrow">Replacement</p><h3>Your gate already has a motor.</h3><p>We assess the existing equipment and which accessories can be reused. Compatibility of remote controls, safety devices and wiring is checked before replacement.</p><a href="/en/gate-automation-configurator" className="text-link">Assess a replacement →</a></article></div><p className="practical">For garage doors, we also assess the mechanical condition. If the door is jammed, tilted or has damaged parts, the repair needs to be considered before fitting a motor.</p></section>
<section className="section feature config-feature"><div><div className="feature-novelty">{CONFIGURATOR_IS_NEW && <span data-configurator-novelty="true" className="novelty-bubble">New</span>}</div><h2>Explore your options with the TecCasa configurator.</h2><p>Tell us the gate type and installation details. The configurator helps organise your request and sends the options by email.</p><ol className="steps"><li><span>01</span><div><h3>Describe your gate</h3><p>Type, dimensions, usage and site conditions.</p></div></li><li><span>02</span><div><h3>Complete the configuration</h3><p>Tell us what is already installed and add photos if you wish.</p></div></li><li><span>03</span><div><h3>Receive options by email</h3><p>Up to three options with indicative prices, subject to technical checks.</p></div></li></ol><ConfiguratorButton english /><p className="micro">Some configurations require an on-site assessment to define the solution and quote.</p></div><figure className="feature-picture"><img src="/automatismos/tipos/instalacao-correr-v2-768.webp" alt="Illustration of an automated sliding gate" width="768" height="512" loading="lazy" /><figcaption>AI-generated illustration.</figcaption></figure></section>
<section id="proposta" className="section"><p className="eyebrow">Understand what you are agreeing to</p><h2>A clear proposal for the equipment and the work.</h2><p className="section-intro">The solution is more than a motor. The proposal should explain what is planned and what still needs to be checked on site.</p><div className="grid four"><article className="small-card"><h3>Equipment</h3><p>The automation system, accessories and controls included.</p></article><article className="small-card"><h3>Installation</h3><p>Connections, fixings and materials allowed for in the work.</p></article><article className="small-card"><h3>Operation</h3><p>Adjustment and checks after installation.</p></article><article className="small-card"><h3>Conditions</h3><p>Preparation required, limits and service conditions.</p></article></div></section>
<section className="section panel two-col"><div><p className="eyebrow">Customer-supplied equipment</p><h2>Already bought a motor or kit?</h2><p>Send the model details, photos of the equipment and an overview of the gate. We assess compatibility and any preparation or materials still needed.</p><a href="/instalacao-kit-portao-automatico" className="action navy" title="Detailed page in Portuguese">Installation of your own kit<small className="pt-destination"> (Portuguese)</small></a></div><aside className="aside-note"><h3>For the assessment</h3><ul><li>Location and gate type.</li><li>Kit brand and model.</li><li>Photos of the equipment and the site.</li><li>Power supply and conduit details, if known.</li></ul></aside></section>
<section className="section"><h2>The brand is part of the choice.</h2><p className="section-intro">We match equipment to the needs of the entrance. Model selection and availability are confirmed in the proposal.</p><p className="language-note">Detailed brand pages are currently in Portuguese.</p><BrandLogoGrid brands={automationBrands} english /></section>
<section className="section faq"><h2>Questions before automating your gate</h2><details open><summary>Can my existing gate be automated?</summary><p>That depends on its condition, movement and mounting conditions. We assess these to establish whether automation is suitable and what preparation is needed.</p></details><details><summary>Does the configurator give a final price?</summary><p>The configurator emails up to three options with indicative prices based on the information you provide. Selection and pricing are subject to technical checks; some situations need an on-site assessment.</p></details><details><summary>What if I do not know the weight or all the measurements?</summary><p>You can ask for help and send photos. The initial information helps scope your request; we confirm the details needed before defining the solution.</p></details><details><summary>Can you replace an old gate motor?</summary><p>Yes. We identify the existing system, its usage and mounting conditions. Reusing accessories, remotes or wiring depends on their compatibility and condition.</p></details><details><summary>I bought a kit. Can you install it?</summary><p>We assess the supplied equipment, its compatibility with the gate and any materials or preparation still needed. Installation is quoted once those conditions are understood.</p></details><details><summary>How long does installation take?</summary><p>Timing depends on the equipment, material availability and site conditions. Preparation and scheduling are explained in the proposal.</p></details></section>
<ServiceCoverageNotice english />
<section className="section final dark"><h2>Let us plan your gate automation.</h2><p>Start with the configurator or send us your requirements. We help gather the information needed to assess the solution.</p><div data-contact-actions="true" className="actions"><ConfiguratorButton english /><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20an%20assessment%20for%20installing%20or%20replacing%20gate%20automation.%0A%0ALocation%3A%0AGate%20type%3A%0ANew%20installation%20or%20replacement%3A%0AApproximate%20measurements%20%28if%20known%29%3A" rel="noopener noreferrer" data-contact-button="whatsapp" className="action green" target="_blank">Talk to TecCasa</a><a href="tel:+351922021980" data-contact-button="secondary" className="action outline">Call +351 922 021 980</a></div><p className="micro">Options and indicative prices by email · Technical checks before installation</p></section>
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
.english-page .main-card{width:min(1200px,calc(100% - 40px));margin:auto;padding:50px;border-radius:22px;background:#fff;box-shadow:0 10px 30px #0b2c5f12}
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
.english-page .grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}
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
.english-page .config-feature{grid-template-columns:1.12fr 1fr;align-items:center;background:linear-gradient(135deg,#edf3fa,#f7f9fd)}
.english-page .config-feature .steps{margin:26px 0}
.english-page .config-feature .steps li>span{background:#e0eaf7;color:#08285c}
.english-page .small-card{padding:24px 21px;background:#eef3fa;border-radius:22px}
.english-page .small-card h3{font-size:20px}
.english-page .small-card p{font-size:15px;line-height:1.7;margin:0}
.english-page .small-card .number{display:block;font-size:12px;font-weight:700;color:#5b7796;margin-bottom:16px}
.english-page .path-card{padding:30px;border:1px solid #d8e3f1;border-radius:24px;background:#fff}
.english-page .path-card h3{font-size:25px}
.english-page .path-card p:not(.eyebrow){font-size:16px}
.english-page .panel{background:#edf3fa;padding:34px;border-radius:26px;margin:20px 0}
.english-page .aside-note{padding:25px;background:#fff;border-radius:21px;border:1px solid #dce5f0}
.english-page .aside-note h3{font-size:21px}
.english-page .aside-note ul{font-size:15px;line-height:1.8;padding-left:20px;margin:0}
.english-page .aside-note li{margin-bottom:10px}
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
.english-page .feature{gap:28px}}
@media(max-width:850px){.english-page .hero{grid-template-columns:1fr;gap:28px}
.english-page .hero-picture{max-width:720px}
.english-page .hero h1{max-width:780px}
.english-page .two-col,.english-page .feature{grid-template-columns:1fr}
.english-page .feature-picture{max-width:700px}
.english-page .config-feature .feature-picture{order:1}
.english-page .hero p:not(.eyebrow):not(.micro){max-width:none}}
@media(max-width:600px){.english-page .main-card{width:100%;padding:16px 12px;border-radius:18px}
.english-page h1{font-size:35px;line-height:1.12;letter-spacing:-.6px;margin-bottom:22px}
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
.english-page .grid.two,.english-page .grid.four{grid-template-columns:1fr;gap:16px}
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
.english-page .feature,.english-page .panel{padding:27px 21px;margin:20px 0;border-radius:24px}
.english-page .feature h2{font-size:28px}
.english-page .feature .action{width:100%}
.english-page .small-card,.english-page .path-card{padding:25px 22px}
.english-page .path-card h3{font-size:24px}
.english-page .compact{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}
.english-page .compact .small-card{padding:22px 17px}
.english-page .compact h3{font-size:18px}
.english-page .compact p{font-size:14px}
.english-page .faq summary{font-size:17px}
.english-page .faq details p{margin-left:4px;font-size:16px}
.english-page .final{padding:33px 21px;margin:22px 0}
.english-page .final>p{font-size:17px}
.english-page .practical{font-size:12px;padding:12px 4px 24px}}
@media(max-width:360px){.english-page .type-cards,.english-page .compact{grid-template-columns:1fr!important}}
@media(prefers-reduced-motion:reduce){.english-page .linked-card{transition:none}}
.english-page.installation-landing{min-height:100vh;padding:110px 40px 40px;background:#f4f7fb;color:#405168;font:17px/1.75 Arial,sans-serif}
.english-page.installation-landing *{box-sizing:border-box}
.english-page .main-card{width:min(1200px,calc(100% - 40px));margin:auto;padding:50px;background:#fff;border-radius:22px;box-shadow:0 10px 30px #0b2c5f12}
.english-page .feature-novelty{margin-bottom:18px}
.english-page .feature-novelty .novelty-bubble{margin-left:0}
.english-page .floating-whatsapp{position:fixed;bottom:25px;right:25px;z-index:900;padding:13px 18px;border-radius:999px;background:#25d366;color:#fff;text-decoration:none;font-size:14px;font-weight:700;box-shadow:0 4px 18px #0002}
@media(max-width:768px){.english-page.installation-landing{padding:95px 6px 10px}
.english-page .main-card{width:100%;padding:16px 12px;border-radius:18px}}
@media(max-width:600px){.english-page .floating-whatsapp{right:14px;bottom:14px;font-size:13px}}
`;
