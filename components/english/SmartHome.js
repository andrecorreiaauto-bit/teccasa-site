import EnglishPageLayout from "./PageLayout";
import ServiceCoverageNotice from "../ServiceCoverageNotice";
import CoverageMap from "../CoverageMap";
import ConfiguratorButton from "../ConfiguratorButton";
import BrandLogoGrid from "../BrandLogoGrid";
import { automationBrands } from "../../lib/brand-logos";
import { CONFIGURATOR_IS_NEW } from "../../lib/configurator.mjs";

const page = {
  "id": "smart-home",
  "route": "/en/smart-home-lisbon",
  "ptRoute": "/casas-inteligentes-lisboa",
  "title": "Smart Home Design and Installation in Lisbon | TecCasa Soluções",
  "description": "Smart home design, installation and integration for lighting, shutters, climate control and access in Lisbon and surrounding areas. Solutions planned around your routines.",
  "message": "Hello, I would like to discuss a smart home project.\n\nLocation:\nExisting home or building work:\nWhat I would like to control or automate:\nExisting equipment:",
  "wrapper": "smart-service",
  "questions": [
    {
      "question": "Do I need to automate the whole home at once?",
      "answer": "No. We can plan a first phase for a function or room and consider how you want to expand later. The aim is to establish a coherent foundation for the next steps."
    },
    {
      "question": "Can existing switches and equipment be reused?",
      "answer": "That depends on the equipment, wiring and intended solution. The assessment identifies what can stay and what needs adapting or replacing."
    },
    {
      "question": "Do I always need to use my phone?",
      "answer": "We can plan buttons, panels, schedules or other controls suited to the chosen solution. How you use the system is defined during the project."
    },
    {
      "question": "When should I involve TecCasa during building work?",
      "answer": "Ideally, before control points and wiring are finalised. Send the plans available and the current stage of the work so we can plan the next step."
    }
  ],
  "pair": true
};

export default function SmartHome() {
  return <EnglishPageLayout page={page} styles={styles}>
<section className="hero service-hero"><div><p className="eyebrow">Smart home · Design, installation and integration</p><h1>Your home, simpler to control.</h1><p className="lead">Lighting, shutters, climate control and access designed around your routines. We build the solution around your space, what is already installed and what you want to improve.</p><div className="actions" data-contact-actions=""><a className="action green" href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20smart%20home%20project.%0A%0ALocation%3A%0AExisting%20home%20or%20building%20work%3A%0AWhat%20I%20would%20like%20to%20control%20or%20automate%3A%0AExisting%20equipment%3A" rel="noopener noreferrer" data-contact-button="whatsapp" target="_blank">Discuss my project</a><a className="action outline" href="tel:+351922021980" data-contact-button="secondary">Call +351 922 021 980</a></div><p className="micro">One room or a whole home. We can start with your idea.</p></div><figure className="hero-picture"><img src="/hero-domotica.png" alt="Illustration of smart home control from a phone" fetchPriority="high" width="1672" height="941" /><figcaption>Controls and automation tailored to how you use your home.</figcaption></figure></section>
<section className="section"><p className="eyebrow">Start with what matters to you</p><h2>What would you like to make simpler?</h2><p className="section-intro">We select useful functions and a practical way to use them: an app, buttons, schedules or panels, depending on the chosen solution.</p><div className="solution-grid"><article className="solution-card"><img src="/domotica-iluminacao.png" alt="Illustration: Lighting" loading="lazy" width="1672" height="941" /><div><h3>Lighting</h3><p>Switch, dim and combine lights for different times of day, with scenes and controls suited to your space.</p></div></article><article className="solution-card"><img src="/domotica-estores-clima.png" alt="Illustration: Shutters and climate control" loading="lazy" width="1672" height="941" /><div><h3>Shutters and climate control</h3><p>Manage daylight, shutters and comfort. We check the equipment and available controls before defining the integration.</p></div></article><article className="solution-card"><img src="/domotica-portao.png" alt="Illustration: Access" loading="lazy" width="1672" height="941" /><div><h3>Access</h3><p>Operate the gate and coordinate your arrival with other home functions, after assessing compatibility and how the system will be used.</p></div></article><article className="solution-card"><img src="/domotica-vigilancia.png" alt="Illustration: Keep an eye on your home" loading="lazy" width="1672" height="941" /><div><h3>Keep an eye on your home</h3><p>Consider cameras, sensors and notifications as part of the project. Integration depends on the chosen systems and existing equipment.</p></div></article></div></section>
<section className="section scope-section"><div><p className="eyebrow">Suited to your space</p><h2>Improve what is there.<br />Plan what comes next.</h2><p>The starting point shapes the solution. In an existing home, we assess what can be reused. During building work, we help plan control points and connections before the work is closed up.</p></div><div className="scope-cards"><article><h3>Improve your existing home</h3><p>Start with one function or room and plan a foundation that can evolve. We assess power, wiring, network and existing equipment.</p></article><article><h3>A project during building work</h3><p>Plan functions, control points and wiring requirements. Where appropriate, we coordinate with others involved in the building work.</p></article></div></section>
<section className="integration-section"><figure><img src="/casa-inteligente-conectada.png" alt="Illustration of connected smart home systems" loading="lazy" width="1672" height="941" /></figure><div><p className="eyebrow">Thoughtful integration</p><h2>A coherent solution for your home.</h2><p>We select apps and communication methods to suit the equipment and how you want to control your home. Compatibility is checked during the project.</p><div className="ecosystem-label">Apps and ecosystems</div><div className="logo-row four"><div><img src="/google-home.png" alt="Google Home" loading="lazy" width="3840" height="2160" /></div><div><img src="/alexa.png" alt="Amazon Alexa" loading="lazy" width="471" height="320" /></div><div><img src="/smartlife.png" alt="Smart Life" loading="lazy" width="225" height="225" /></div><div><img src="/tuya.png" alt="Tuya" loading="lazy" width="256" height="256" /></div></div><div className="protocols"><span>Communication between devices</span><img src="/wifi.png" alt="Wi-Fi" loading="lazy" width="960" height="569" /><img src="/zigbee.png" alt="Zigbee" loading="lazy" width="4096" height="4096" /></div></div></section>
<section className="section"><p className="eyebrow">Think about your routines</p><h2>Small actions. A more practical home.</h2><div className="scenario-grid"><article><img src="/cenario-chegar-casa.png" alt="Illustration of an arriving-home routine" loading="lazy" width="1672" height="941" /><div><h3>Arriving home</h3><p>One action can combine entrance lighting and other functions included in the project. Scenes are defined with you.</p></div></article><article><img src="/controlo-remoto-casa.png" alt="Illustration of remote control of home equipment" loading="lazy" width="1672" height="941" /><div><h3>Leave with things set up</h3><p>Check device states and operate the equipment included in the project, with permissions and remote access configured for the chosen solution.</p></div></article></div></section>
<section className="section process-section"><div><p className="eyebrow">From idea to everyday use</p><h2>Understand your routines.<br />Plan your project.</h2><p>We start with your needs and explain what the solution allows, the work involved and how to use it.</p></div><ol className="project-steps"><li><b>01</b><div><h3>Tell us what you want to improve.</h3><p>Share your location, the stage your property is at and the functions you want. Photos, plans and equipment details help.</p></div></li><li><b>02</b><div><h3>We define the solution with you.</h3><p>We scope the functions, check compatibility and present the work, quote and proposed phases.</p></div></li><li><b>03</b><div><h3>We install, configure and explain.</h3><p>We check operation and show you how to use the agreed controls and scenes.</p></div></li></ol></section>
<section className="section faq"><p className="eyebrow">Before we begin</p><h2>Questions before getting started.</h2><details open><summary>Do I need to automate the whole home at once?</summary><p>No. We can plan a first phase for a function or room and consider how you want to expand later. The aim is to establish a coherent foundation for the next steps.</p></details><details><summary>Can existing switches and equipment be reused?</summary><p>That depends on the equipment, wiring and intended solution. The assessment identifies what can stay and what needs adapting or replacing.</p></details><details><summary>Do I always need to use my phone?</summary><p>We can plan buttons, panels, schedules or other controls suited to the chosen solution. How you use the system is defined during the project.</p></details><details><summary>When should I involve TecCasa during building work?</summary><p>Ideally, before control points and wiring are finalised. Send the plans available and the current stage of the work so we can plan the next step.</p></details></section>
<ServiceCoverageNotice english />
<section className="final dark"><p className="eyebrow">TecCasa Soluções</p><h2>What shall we make simpler in your home?</h2><p>A small improvement or a project for your whole home. Tell us your idea and we will plan the next step with you.</p><div className="actions" data-contact-actions=""><a className="action green" href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20smart%20home%20project.%0A%0ALocation%3A%0AExisting%20home%20or%20building%20work%3A%0AWhat%20I%20would%20like%20to%20control%20or%20automate%3A%0AExisting%20equipment%3A" rel="noopener noreferrer" data-contact-button="whatsapp" target="_blank">Discuss my project</a><a className="action outline" href="tel:+351922021980" data-contact-button="secondary">Call +351 922 021 980</a><a className="action outline" href="mailto:geral@tec-casa.pt" data-contact-button="secondary">geral@tec-casa.pt</a></div><p className="micro">Homeowners and residential buildings · Lisbon and surrounding areas · Visits by appointment</p></section>
  </EnglishPageLayout>;
}

const styles = `
.english-page.smart-service *{box-sizing:border-box}
.english-page.smart-service a{color:#08285c;text-underline-offset:4px}
.english-page.smart-service button{font-family:Arial,sans-serif}
.english-page.smart-service h1,.english-page.smart-service h2,.english-page.smart-service h3{color:#08285c}
.english-page.smart-service h1{font-size:clamp(36px,4.2vw,54px);line-height:1.08;letter-spacing:-1.2px;margin:0 0 25px;font-weight:800}
.english-page.smart-service h2{font-size:34px;line-height:1.22;letter-spacing:-.5px;margin:0 0 20px}
.english-page.smart-service h3{font-size:21px;line-height:1.35;margin:0 0 13px}
.english-page.smart-service p{margin:0 0 18px}
.english-page.smart-service a:focus-visible,.english-page.smart-service button:focus-visible,.english-page.smart-service summary:focus-visible{outline:3px solid #f7b545;outline-offset:5px}
.english-page.smart-service button,.english-page.smart-service a,.english-page.smart-service summary{-webkit-tap-highlight-color:transparent}
.english-page.smart-service [hidden]{display:none!important}
.english-page.smart-service section[id]{scroll-margin-top:175px}
.english-page.smart-service .main-card{width:min(1200px,calc(100% - 40px));margin:auto;padding:50px;border-radius:22px;background:#fff;box-shadow:0 10px 30px #0b2c5f12}
.english-page.smart-service .hero{display:grid;grid-template-columns:1.08fr 1fr;gap:42px;align-items:center;padding:26px 0 42px}
.english-page.smart-service .hero .lead{font-size:20px;line-height:1.7}
.english-page.smart-service .hero p:not(.eyebrow):not(.micro){max-width:640px}
.english-page.smart-service .eyebrow{font-size:12px;font-weight:700;letter-spacing:.4px;line-height:1.6;color:#42617e;margin:0 0 17px}
.english-page.smart-service .micro{font-size:12px;line-height:1.7;color:#66778a;margin:15px 0 0}
.english-page.smart-service .hero-picture,.english-page.smart-service .feature-picture{margin:0;min-width:0}
.english-page.smart-service .hero-picture img{width:100%;height:auto;display:block;border-radius:28px;box-shadow:0 20px 50px #08285c22}
.english-page.smart-service .hero-picture figcaption,.english-page.smart-service .feature-picture figcaption{font-size:12px;line-height:1.6;color:#66778a;margin-top:12px;text-align:center}
.english-page.smart-service .actions{display:flex;align-items:stretch;gap:12px;flex-wrap:wrap;margin-top:26px}
.english-page.smart-service .action{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;text-align:center;min-height:58px;padding:16px 22px;border:1px solid transparent;border-radius:16px;text-decoration:none;font:700 16px/1.4 Arial,sans-serif;max-width:100%;overflow-wrap:anywhere}
.english-page.smart-service .action.green{background:#25d366;border-color:#25d366;color:#fff}
.english-page.smart-service .action.outline{background:#fff;border-color:#c9d5e5;color:#08285c}
.english-page.smart-service .action.navy{background:#08285c;border-color:#08285c;color:#fff}
.english-page.smart-service .action:hover{filter:brightness(.97)}
.english-page.smart-service .config-button{overflow:hidden;min-height:80px;padding:18px 72px 18px 24px;background:#08285c;color:#fff;text-align:left;box-shadow:0 10px 25px #0b2c5f20;font-size:17px}
.english-page.smart-service .config-button small{display:block;font-size:12px;font-weight:400;line-height:1.4;margin-top:5px}
.english-page.smart-service .shortcuts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;padding-top:24px;margin-bottom:10px;border-top:1px solid #dce5f0}
.english-page.smart-service .shortcuts a{display:flex;align-items:center;justify-content:space-between;gap:15px;background:#eef3fa;border-radius:16px;padding:18px;text-decoration:none;font-size:15px;font-weight:700;line-height:1.5}
.english-page.smart-service .shortcuts span{font-size:20px}
.english-page.smart-service .section{padding:46px 0}
.english-page.smart-service .section-intro{max-width:850px;font-size:18px;line-height:1.75;margin:0 0 28px}
.english-page.smart-service .grid{display:grid;gap:20px;align-items:stretch}
.english-page.smart-service .grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}
.english-page.smart-service .grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}
.english-page.smart-service .grid.four{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.english-page.smart-service .two-col{display:grid;grid-template-columns:1.05fr 1fr;gap:40px;align-items:start}
.english-page.smart-service .linked-card{display:flex;flex-direction:column;border:1px solid #dce5f0;border-radius:23px;background:#f0f5fb;text-decoration:none;overflow:hidden;min-width:0;transition:box-shadow .15s ease}
.english-page.smart-service .linked-card:hover{box-shadow:0 12px 24px #0b2c5f15}
.english-page.smart-service .linked-card>div{display:flex;flex-direction:column;flex:1;padding:24px}
.english-page.smart-service .linked-card h3{font-size:21px;margin:0 0 12px}
.english-page.smart-service .linked-card p{font-size:15px;line-height:1.75;color:#4e6075;margin-bottom:22px}
.english-page.smart-service .linked-card .eyebrow{font-size:11px;margin-bottom:12px}
.english-page.smart-service .linked-card>img{display:block;width:100%;height:190px;object-fit:cover;background:#e8eff8}
.english-page.smart-service .linked-card .card-link{margin-top:auto;font-size:13px;font-weight:700;display:flex;justify-content:space-between;gap:12px}
.english-page.smart-service .card-link b{font-size:18px;line-height:1}
.english-page.smart-service .type-cards .linked-card>img{height:155px}
.english-page.smart-service .type-cards .linked-card>div{padding:22px 19px}
.english-page.smart-service .type-cards h3{font-size:20px}
.english-page.smart-service .type-cards p{font-size:14px}
.english-page.smart-service .icon-card>img{height:175px;object-fit:contain;padding:16px;background:#eef3fa}
.english-page.smart-service .service-grid .linked-card:not(.icon-card)>img{height:175px}
.english-page.smart-service .text-link{font-size:15px;font-weight:700;text-underline-offset:5px;display:inline-block}
.english-page.smart-service .steps{display:grid;gap:20px;padding:0;margin:0;list-style:none}
.english-page.smart-service .steps li{display:flex;gap:17px;align-items:flex-start}
.english-page.smart-service .steps li>span{display:grid;place-items:center;flex-shrink:0;width:40px;height:40px;border-radius:50%;background:#08285c;color:#fff;font-size:12px;font-weight:700}
.english-page.smart-service .steps h3{font-size:18px;margin:2px 0 6px}
.english-page.smart-service .steps p{font-size:15px;line-height:1.7;margin:0}
.english-page.smart-service .feature{display:grid;grid-template-columns:1fr 1.15fr;gap:36px;align-items:center;margin:22px 0;padding:34px;border-radius:27px;background:#edf3fa}
.english-page.smart-service .feature-picture img{display:block;width:100%;height:auto;border-radius:22px}
.english-page.smart-service .feature h2{font-size:31px}
.english-page.smart-service .feature .action{margin-top:10px}
.english-page.smart-service .check-list{padding-left:20px;margin:20px 0 24px;font-size:16px;line-height:1.75}
.english-page.smart-service .check-list li{margin-bottom:12px;padding-left:4px}
.english-page.smart-service .sectional .micro{margin-top:18px;line-height:1.8}
.english-page.smart-service .config-feature{grid-template-columns:1.12fr 1fr;align-items:center;background:linear-gradient(135deg,#edf3fa,#f7f9fd)}
.english-page.smart-service .config-feature .steps{margin:26px 0}
.english-page.smart-service .config-feature .steps li>span{background:#e0eaf7;color:#08285c}
.english-page.smart-service .new-pill{display:inline-block;background:#f7b545;color:#08285c;font-size:11px;line-height:1.4;border-radius:999px;font-weight:700;padding:7px 13px;margin-bottom:18px}
.english-page.smart-service .contact-panel{display:grid;grid-template-columns:1.18fr 1fr;gap:36px;background:#edf3fa;padding:34px;border-radius:26px;margin:22px 0}
.english-page.smart-service .contact-panel h2{font-size:31px}
.english-page.smart-service .contact-panel .action{font-size:14px;padding:15px 18px}
.english-page.smart-service .info-list{display:grid;gap:24px;align-content:center}
.english-page.smart-service .info-list>div{display:flex;gap:16px}
.english-page.smart-service .info-list b{display:grid;place-items:center;flex-shrink:0;width:34px;height:34px;background:#dfe9f6;border-radius:50%;font-size:12px;color:#08285c}
.english-page.smart-service .info-list span{font-size:15px;line-height:1.7}
.english-page.smart-service .info-list strong{display:block;font-size:16px;color:#08285c;margin-bottom:5px}
.english-page.smart-service .small-card{padding:24px 21px;background:#eef3fa;border-radius:22px}
.english-page.smart-service .small-card h3{font-size:20px}
.english-page.smart-service .small-card p{font-size:15px;line-height:1.7;margin:0}
.english-page.smart-service .small-card .number{display:block;font-size:12px;font-weight:700;color:#5b7796;margin-bottom:16px}
.english-page.smart-service .path-card{padding:30px;border:1px solid #d8e3f1;border-radius:24px;background:#fff}
.english-page.smart-service .path-card h3{font-size:25px}
.english-page.smart-service .path-card p:not(.eyebrow){font-size:16px}
.english-page.smart-service .panel{background:#edf3fa;padding:34px;border-radius:26px;margin:20px 0}
.english-page.smart-service .aside-note{padding:25px;background:#fff;border-radius:21px;border:1px solid #dce5f0}
.english-page.smart-service .aside-note h3{font-size:21px}
.english-page.smart-service .aside-note ul{font-size:15px;line-height:1.8;padding-left:20px;margin:0}
.english-page.smart-service .aside-note li{margin-bottom:10px}
.english-page.smart-service .aside-note .symptom-links{padding:0;list-style:none}
.english-page.smart-service .symptom-links a{font-weight:700;text-decoration:none}
.english-page.smart-service .coverage{display:grid;grid-template-columns:1.1fr 1fr;gap:38px;align-items:center}
.english-page.smart-service .coverage-cards{display:grid;gap:14px}
.english-page.smart-service .coverage-cards article{border:1px solid #dce5f0;border-radius:20px;padding:23px;background:#f1f5fa}
.english-page.smart-service .coverage-cards article>span{font-size:14px;font-weight:700;color:#08285c}
.english-page.smart-service .coverage-cards p{font-size:15px;line-height:1.75;margin:8px 0 0}
.english-page.smart-service .faq details{padding:20px 0;border-bottom:1px solid #dce5f0}
.english-page.smart-service .faq summary{color:#08285c;font-weight:700;font-size:17px;line-height:1.65;cursor:pointer;margin-left:20px;padding-left:5px}
.english-page.smart-service .faq details p{font-size:16px;line-height:1.75;max-width:920px;margin:15px 0 0 25px}
.english-page.smart-service .final{text-align:center;border-radius:28px;padding:42px 30px;margin:24px 0}
.english-page.smart-service .final h2{max-width:850px;margin:0 auto 20px}
.english-page.smart-service .final>p{max-width:800px;margin:0 auto 26px}
.english-page.smart-service .final .actions{justify-content:center}
.english-page.smart-service .dark{background:#0b2c5f;color:#fff}
.english-page.smart-service .dark h2,.english-page.smart-service .dark h3{color:#fff}
.english-page.smart-service .dark .micro{color:#d1dff0;margin-top:20px}
.english-page.smart-service .dark .config-button{background:#fff;color:#08285c;box-shadow:0 8px 24px #0002}
.english-page.smart-service .practical{font-size:13px;line-height:1.8;color:#66778a;padding:12px 0 26px;margin:0}
.english-page.smart-service .footer-contacts{display:flex;justify-content:center;gap:22px;flex-wrap:wrap;font-size:15px}
.english-page.smart-service .floating-wa{position:fixed;bottom:25px;right:25px;z-index:900;display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 18px;border-radius:999px;background:#25d366;color:white;text-decoration:none;font-size:14px;font-weight:700;box-shadow:0 4px 18px #0002}
@media(max-width:1100px){.english-page.smart-service .hero{gap:28px}
.english-page.smart-service .actions .action{flex:1 1 170px}
.english-page.smart-service .grid.four{grid-template-columns:repeat(2,minmax(0,1fr))}
.english-page.smart-service .two-col{gap:30px}
.english-page.smart-service .feature{gap:28px}
.english-page.smart-service .contact-panel{grid-template-columns:1fr;gap:28px}
.english-page.smart-service .info-list{grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.english-page.smart-service .info-list>div{display:block}
.english-page.smart-service .info-list b{margin-bottom:12px}}
@media(max-width:850px){.english-page.smart-service .hero{grid-template-columns:1fr;gap:28px}
.english-page.smart-service .hero-picture{max-width:720px}
.english-page.smart-service .hero h1{max-width:780px}
.english-page.smart-service .grid.three{grid-template-columns:repeat(2,minmax(0,1fr))}
.english-page.smart-service .two-col,.english-page.smart-service .feature,.english-page.smart-service .coverage{grid-template-columns:1fr}
.english-page.smart-service .feature-picture{max-width:700px}
.english-page.smart-service .config-feature .feature-picture{order:1}
.english-page.smart-service .hero p:not(.eyebrow):not(.micro){max-width:none}
.english-page.smart-service .coverage{gap:26px}}
@media(max-width:600px){.english-page.smart-service .main-card{width:100%;padding:16px 12px;border-radius:18px}
.english-page.smart-service h1{font-size:35px;line-height:1.12;letter-spacing:-.6px;margin-bottom:22px}
.english-page.smart-service h2{font-size:28px;letter-spacing:-.4px}
.english-page.smart-service h3{font-size:21px}
.english-page.smart-service .hero{padding:21px 4px 32px;gap:26px}
.english-page.smart-service .hero .lead{font-size:18px;line-height:1.75}
.english-page.smart-service .hero-picture img{border-radius:22px}
.english-page.smart-service .hero-picture figcaption{font-size:11px}
.english-page.smart-service .actions{flex-direction:column;margin-top:24px}
.english-page.smart-service .actions .action{flex:0 1 auto;width:100%}
.english-page.smart-service .action{font-size:16px;padding:16px 19px;min-height:58px}
.english-page.smart-service .config-button{padding-right:70px;font-size:16px;min-height:80px}
.english-page.smart-service .eyebrow{font-size:12px}
.english-page.smart-service .micro{font-size:12px}
.english-page.smart-service .shortcuts{grid-template-columns:1fr;gap:10px;padding-top:20px}
.english-page.smart-service .shortcuts a{padding:15px 18px}
.english-page.smart-service .section{padding:30px 4px}
.english-page.smart-service .section-intro{font-size:17px;line-height:1.75;margin-bottom:24px}
.english-page.smart-service .grid.two,.english-page.smart-service .grid.three,.english-page.smart-service .grid.four{grid-template-columns:1fr;gap:16px}
.english-page.smart-service .linked-card>div{padding:23px}
.english-page.smart-service .linked-card>img{height:190px}
.english-page.smart-service .type-cards{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}
.english-page.smart-service .type-cards .linked-card>img{height:115px}
.english-page.smart-service .type-cards .linked-card>div{padding:18px 14px}
.english-page.smart-service .type-cards h3{font-size:18px}
.english-page.smart-service .type-cards p{font-size:13px;line-height:1.7}
.english-page.smart-service .type-cards .card-link{font-size:12px}
.english-page.smart-service .service-grid .linked-card{display:grid;grid-template-columns:105px minmax(0,1fr)}
.english-page.smart-service .service-grid .linked-card>img,.english-page.smart-service .service-grid .linked-card:not(.icon-card)>img{width:105px;height:100%;min-height:190px;object-fit:cover}
.english-page.smart-service .service-grid .icon-card>img{object-fit:contain;padding:7px}
.english-page.smart-service .service-grid .linked-card>div{padding:21px 18px}
.english-page.smart-service .service-grid h3{font-size:20px}
.english-page.smart-service .service-grid p{font-size:14px}
.english-page.smart-service .two-col{gap:28px}
.english-page.smart-service .steps{gap:22px}
.english-page.smart-service .steps h3{font-size:18px}
.english-page.smart-service .feature,.english-page.smart-service .panel,.english-page.smart-service .contact-panel{padding:27px 21px;margin:20px 0;border-radius:24px}
.english-page.smart-service .feature h2,.english-page.smart-service .contact-panel h2{font-size:28px}
.english-page.smart-service .feature .action{width:100%}
.english-page.smart-service .check-list{font-size:15px}
.english-page.smart-service .info-list{grid-template-columns:1fr;gap:18px}
.english-page.smart-service .info-list>div{display:flex;gap:14px}
.english-page.smart-service .info-list b{margin:0}
.english-page.smart-service .small-card,.english-page.smart-service .path-card{padding:25px 22px}
.english-page.smart-service .path-card h3{font-size:24px}
.english-page.smart-service .compact{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}
.english-page.smart-service .compact .small-card{padding:22px 17px}
.english-page.smart-service .compact h3{font-size:18px}
.english-page.smart-service .compact p{font-size:14px}
.english-page.smart-service .faq summary{font-size:17px}
.english-page.smart-service .faq details p{margin-left:4px;font-size:16px}
.english-page.smart-service .final{padding:33px 21px;margin:22px 0}
.english-page.smart-service .final>p{font-size:17px}
.english-page.smart-service .practical{font-size:12px;padding:12px 4px 24px}
.english-page.smart-service .footer-contacts{flex-direction:column;gap:11px}
.english-page.smart-service .floating-wa{right:14px;bottom:14px;min-height:46px;font-size:13px;padding:11px 16px}}
@media(max-width:360px){.english-page.smart-service .type-cards,.english-page.smart-service .compact{grid-template-columns:1fr!important}
.english-page.smart-service .service-grid .linked-card{grid-template-columns:85px minmax(0,1fr)}
.english-page.smart-service .service-grid .linked-card>img,.english-page.smart-service .service-grid .linked-card:not(.icon-card)>img{width:85px}}
@media(prefers-reduced-motion:reduce){.english-page.smart-service .linked-card{transition:none}}
.english-page.smart-service .service-hero{padding:15px 0 42px}
.english-page.smart-service .service-hero h1{font-size:clamp(34px,3.7vw,45px);line-height:1.15;letter-spacing:-.7px}
.english-page.smart-service .service-hero .lead{font-size:19px;line-height:1.8}
.english-page.smart-service .service-hero .micro{font-size:12px;max-width:550px}
.english-page.smart-service .hero-picture img{box-shadow:0 15px 40px #08285c18}
.english-page.smart-service .solution-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.english-page.smart-service .solution-card{display:grid;grid-template-columns:135px minmax(0,1fr);overflow:hidden;border:1px solid #dbe5f1;border-radius:21px;background:#f0f5fb;min-width:0}
.english-page.smart-service .solution-card>img{width:135px;height:100%;min-height:180px;object-fit:cover}
.english-page.smart-service .solution-card>div{padding:24px}
.english-page.smart-service .solution-card h3{font-size:21px;margin-bottom:12px}
.english-page.smart-service .solution-card p{font-size:14px;line-height:1.8;margin:0;color:#52667e}
.english-page.smart-service .scope-section{display:grid;grid-template-columns:1fr 1.05fr;gap:40px;border-top:1px solid #dce5f0}
.english-page.smart-service .scope-section>div>p:not(.eyebrow){font-size:16px;line-height:1.85;max-width:500px}
.english-page.smart-service .scope-cards{display:grid;gap:16px}
.english-page.smart-service .scope-cards article{padding:24px 26px;border:1px solid #dce5f0;border-radius:19px}
.english-page.smart-service .scope-cards h3{font-size:20px}
.english-page.smart-service .scope-cards p{font-size:14px;line-height:1.8;margin:0}
.english-page.smart-service .integration-section{display:grid;grid-template-columns:1fr 1.1fr;gap:36px;align-items:center;background:#f0f5fb;padding:30px;border-radius:23px;margin:0 0 12px}
.english-page.smart-service .integration-section figure,.english-page.smart-service .camera-process figure{margin:0;min-width:0}
.english-page.smart-service .integration-section figure img{width:100%;height:auto;display:block;border-radius:20px}
.english-page.smart-service .integration-section p:not(.eyebrow){font-size:14px;line-height:1.85}
.english-page.smart-service .integration-section h2{font-size:30px}
.english-page.smart-service .ecosystem-label{font-size:11px;font-weight:700;color:#61738a;margin:22px 0 10px}
.english-page.smart-service .logo-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px}
.english-page.smart-service .logo-row>div{display:flex;align-items:center;justify-content:center;height:68px;background:white;border:1px solid #dce5f0;border-radius:13px;padding:10px}
.english-page.smart-service .logo-row img{display:block;max-width:100%;max-height:46px;object-fit:contain}
.english-page.smart-service .protocols{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:17px}
.english-page.smart-service .protocols span{font-size:11px;color:#61738a}
.english-page.smart-service .protocols img{width:50px;height:35px;object-fit:contain}
.english-page.smart-service .scenario-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.english-page.smart-service .scenario-grid article{display:grid;grid-template-columns:155px minmax(0,1fr);border:1px solid #dce5f0;border-radius:20px;overflow:hidden}
.english-page.smart-service .scenario-grid img{width:155px;height:100%;min-height:180px;object-fit:cover}
.english-page.smart-service .scenario-grid article>div{padding:23px}
.english-page.smart-service .scenario-grid h3{font-size:21px}
.english-page.smart-service .scenario-grid p{font-size:14px;line-height:1.8;margin:0}
.english-page.smart-service .process-section{display:grid;grid-template-columns:1fr 1.1fr;gap:43px;border-top:1px solid #dce5f0;border-bottom:1px solid #dce5f0}
.english-page.smart-service .process-section>div>p:not(.eyebrow){font-size:16px;line-height:1.85;max-width:480px}
.english-page.smart-service .project-steps{display:grid;gap:23px;padding:0;margin:4px 0;list-style:none}
.english-page.smart-service .project-steps li{display:flex;align-items:flex-start;gap:17px}
.english-page.smart-service .project-steps b{display:grid;place-items:center;flex-shrink:0;width:34px;height:34px;border-radius:50%;background:#08285c;color:white;font-size:11px}
.english-page.smart-service .project-steps h3{font-size:19px;line-height:1.4;margin:2px 0 9px}
.english-page.smart-service .project-steps p{font-size:14px;line-height:1.85;margin:0}
.english-page.smart-service .application-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}
.english-page.smart-service .application-grid .solution-card{display:flex;flex-direction:column}
.english-page.smart-service .application-grid .solution-card>img{width:100%;height:150px;min-height:0;object-fit:cover}
.english-page.smart-service .application-grid .solution-card>div{padding:22px}
.english-page.smart-service .application-grid h3{font-size:20px}
.english-page.smart-service .planning-section{display:grid;grid-template-columns:1fr 1.1fr;gap:45px;border-top:1px solid #dce5f0;border-bottom:1px solid #dce5f0}
.english-page.smart-service .planning-section>div>p:not(.eyebrow){font-size:16px;line-height:1.85;max-width:500px}
.english-page.smart-service .planning-list{display:grid;gap:16px}
.english-page.smart-service .planning-list article{display:flex;gap:17px;background:#f0f5fb;border-radius:19px;padding:23px}
.english-page.smart-service .planning-list b{display:grid;place-items:center;flex-shrink:0;width:31px;height:31px;background:white;color:#08285c;border:1px solid #d4e0ef;border-radius:50%;font-size:10px}
.english-page.smart-service .planning-list h3{font-size:18px;margin:2px 0 9px}
.english-page.smart-service .planning-list p{font-size:14px;line-height:1.8;margin:0}
.english-page.smart-service .camera-brands{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:15px;margin:25px 0 0}
.english-page.smart-service .camera-brands>div{display:flex;align-items:center;justify-content:center;padding:18px 25px;height:95px;background:linear-gradient(180deg,#fff,#eef3fa);border:1px solid #dce5f0;border-radius:18px}
.english-page.smart-service .camera-brands img{max-height:52px;max-width:100%;object-fit:contain}
.english-page.smart-service .camera-process{display:grid;grid-template-columns:1fr 1.15fr;gap:40px;align-items:center}
.english-page.smart-service .camera-process figure img{display:block;width:100%;height:auto;border-radius:23px}
.english-page.smart-service .camera-process h2{font-size:30px}
.english-page.smart-service .camera-process .project-steps{margin-top:26px}
.english-page.smart-service .faq{max-width:960px;margin:auto}
.english-page.smart-service .faq h2{font-size:31px}
.english-page.smart-service .faq summary{font-size:16px}
.english-page.smart-service .faq details p{font-size:15px}
.english-page.smart-service .final{margin-top:25px}
.english-page.smart-service .final .actions{justify-content:center}
.english-page.smart-service .final .micro{margin:20px auto 0;font-size:12px}
.english-page.smart-service .final .eyebrow{color:#c8d8ed}
.english-page.smart-service .final h2{font-size:34px}
@media(max-width:1050px){.english-page.smart-service .solution-card{grid-template-columns:110px minmax(0,1fr)}
.english-page.smart-service .solution-card>img{width:110px}
.english-page.smart-service .solution-card>div{padding:22px 19px}
.english-page.smart-service .scenario-grid article{grid-template-columns:110px minmax(0,1fr)}
.english-page.smart-service .scenario-grid img{width:110px}
.english-page.smart-service .scenario-grid article>div{padding:21px 18px}
.english-page.smart-service .application-grid .solution-card>img{width:100%}}
@media(max-width:850px){.english-page.smart-service .scope-section,.english-page.smart-service .process-section,.english-page.smart-service .planning-section{grid-template-columns:1fr;gap:27px}
.english-page.smart-service .scope-section>div>p:not(.eyebrow),.english-page.smart-service .process-section>div>p:not(.eyebrow),.english-page.smart-service .planning-section>div>p:not(.eyebrow){max-width:none}
.english-page.smart-service .integration-section{grid-template-columns:1fr;gap:26px}
.english-page.smart-service .integration-section figure{max-width:650px}
.english-page.smart-service .application-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.english-page.smart-service .camera-process{grid-template-columns:1fr;gap:28px}
.english-page.smart-service .camera-process figure{max-width:650px}
.english-page.smart-service .scenario-grid{grid-template-columns:1fr}
.english-page.smart-service .scenario-grid article{grid-template-columns:160px minmax(0,1fr)}
.english-page.smart-service .scenario-grid img{width:160px}}
@media(max-width:600px){.english-page.smart-service .service-hero{padding:20px 4px 32px}
.english-page.smart-service .service-hero h1{font-size:34px}
.english-page.smart-service .service-hero .lead{font-size:17px;line-height:1.8}
.english-page.smart-service .solution-grid{grid-template-columns:1fr;gap:15px}
.english-page.smart-service .solution-card{grid-template-columns:100px minmax(0,1fr)}
.english-page.smart-service .solution-card>img{width:100px;min-height:185px}
.english-page.smart-service .solution-card>div{padding:22px 17px}
.english-page.smart-service .solution-card h3{font-size:20px}
.english-page.smart-service .solution-card p{font-size:14px;line-height:1.8}
.english-page.smart-service .scope-cards article{padding:24px 22px}
.english-page.smart-service .scope-cards h3{font-size:20px}
.english-page.smart-service .integration-section{padding:25px 21px;border-radius:21px}
.english-page.smart-service .integration-section h2{font-size:28px}
.english-page.smart-service .logo-row{grid-template-columns:repeat(2,minmax(0,1fr))}
.english-page.smart-service .logo-row>div{height:65px}
.english-page.smart-service .logo-row img{max-height:44px;max-width:90px}
.english-page.smart-service .protocols{gap:12px}
.english-page.smart-service .protocols span{width:100%}
.english-page.smart-service .scenario-grid article{grid-template-columns:100px minmax(0,1fr)}
.english-page.smart-service .scenario-grid img{width:100px}
.english-page.smart-service .scenario-grid article>div{padding:22px 17px}
.english-page.smart-service .scenario-grid h3{font-size:20px}
.english-page.smart-service .project-steps li{gap:13px}
.english-page.smart-service .project-steps b{width:30px;height:30px;font-size:10px}
.english-page.smart-service .project-steps h3{font-size:18px}
.english-page.smart-service .application-grid{grid-template-columns:1fr}
.english-page.smart-service .application-grid .solution-card{display:grid;grid-template-columns:100px minmax(0,1fr)}
.english-page.smart-service .application-grid .solution-card>img{width:100px;height:100%;min-height:170px;object-fit:cover}
.english-page.smart-service .application-grid .solution-card>div{padding:22px 17px}
.english-page.smart-service .planning-list article{padding:21px 19px;gap:13px}
.english-page.smart-service .planning-list h3{font-size:18px}
.english-page.smart-service .camera-brands{grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}
.english-page.smart-service .camera-brands>div{height:85px;padding:18px}
.english-page.smart-service .camera-brands img{max-height:45px}
.english-page.smart-service .camera-process h2{font-size:28px}
.english-page.smart-service .faq h2{font-size:28px}
.english-page.smart-service .faq summary{font-size:16px}
.english-page.smart-service .faq details p{font-size:15px}
.english-page.smart-service .final h2{font-size:29px}
.english-page.smart-service .final .actions .action{font-size:14px}
.english-page.smart-service .main-card{padding-top:18px}}
@media(max-width:350px){.english-page.smart-service .service-hero h1{font-size:31px}
.english-page.smart-service .solution-card{grid-template-columns:85px minmax(0,1fr)}
.english-page.smart-service .solution-card>img{width:85px}
.english-page.smart-service .solution-card>div{padding:21px 15px}
.english-page.smart-service .solution-card h3{font-size:19px}
.english-page.smart-service .application-grid .solution-card{grid-template-columns:85px minmax(0,1fr)}
.english-page.smart-service .application-grid .solution-card>img{width:85px}
.english-page.smart-service .application-grid .solution-card>div{padding:21px 15px}}
.english-page.smart-service{box-sizing:border-box;min-height:100vh;padding:100px 40px 40px;color:#405168;background:#f4f7fb;font:17px/1.75 Arial,sans-serif}
.english-page.smart-service .main-card{width:min(1200px,calc(100% - 40px))}
@media(max-width:600px){.english-page.smart-service{padding:94px 6px 12px;font-size:16px}
.english-page.smart-service .main-card{width:100%}}
`;
