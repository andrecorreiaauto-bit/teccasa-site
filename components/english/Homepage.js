import EnglishPageLayout from "./PageLayout";
import ServiceCoverageNotice from "../ServiceCoverageNotice";
import CoverageMap from "../CoverageMap";
import ConfiguratorButton from "../ConfiguratorButton";
import BrandLogoGrid from "../BrandLogoGrid";
import { automationBrands } from "../../lib/brand-logos";
import { CONFIGURATOR_IS_NEW } from "../../lib/configurator.mjs";

const page = {
  "id": "home",
  "route": "/en",
  "ptRoute": "/",
  "title": "TecCasa Soluções | Gate Automation, Smart Home and Home Monitoring in Lisbon",
  "description": "Projects, installation and support for gate automation, smart home systems, home monitoring and access in Lisbon and surrounding areas.",
  "message": "Hello, I would like to discuss a project or some work with TecCasa.\n\nLocation:\nWhat I would like to improve or resolve:\nPhotos or plans (if available):",
  "wrapper": "homepage",
  "questions": [
    {
      "question": "Can I get in touch with an idea, before I have a full project?",
      "answer": "Yes. Tell us what you want to improve, how you use the space and what you would like to achieve. We help define the project and identify the information needed for a proposal."
    },
    {
      "question": "Can you work with existing equipment?",
      "answer": "We assess the equipment, its condition and compatibility with your intended solution. Send any model details, photos or other information you have; reuse is confirmed during the assessment."
    },
    {
      "question": "Can you consider several systems in the same project?",
      "answer": "We can consider smart home systems, home monitoring and gate automation in the same project. Integration depends on compatibility and should be specified in the proposal."
    },
    {
      "question": "Is a visit always needed to prepare a quote?",
      "answer": "Photos, plans and a description of your goal help us start the assessment. Some work can be scoped from that information; other jobs need a visit to check the space, infrastructure and work required. We explain the conditions before visiting."
    },
    {
      "question": "Does my location have to be listed on the website?",
      "answer": "No. The map shows our usual service area, including places without their own page. The marked area is approximate. Visits are by appointment and service conditions are agreed before the work."
    },
    {
      "question": "Do you provide support after installation?",
      "answer": "We explain how to use the solution and help with questions after the work. If further work is needed, we discuss your request and the applicable conditions."
    }
  ]
};

export default function Homepage() {
  return <EnglishPageLayout page={page} styles={styles}>
<section aria-labelledby="home-title" className="home-hero"><img src="/Logo.png" alt="TecCasa Soluções" width="893" height="273" fetchPriority="high" className="full-logo" /><h1 id="home-title">Technical solutions for your home, garage or residential building.</h1><p>Gate automation, repairs, smart home systems and home monitoring, with personal support, clear diagnosis and practical solutions.</p><div data-contact-actions="true" className="actions"><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20or%20some%20work%20with%20TecCasa.%0A%0ALocation%3A%0AWhat%20I%20would%20like%20to%20improve%20or%20resolve%3A%0APhotos%20or%20plans%20%28if%20available%29%3A" rel="noopener noreferrer" data-contact-button="whatsapp" className="action green" target="_blank">Ask for help</a><a href="tel:+351922021980" data-contact-button="secondary" className="action outline">Call +351 922 021 980</a></div></section>
<section aria-labelledby="config-title" className="home-config"><div>{CONFIGURATOR_IS_NEW && <span data-configurator-novelty="true" className="new-label">New</span>}<h2 id="config-title">Find the right automation system for your gate.</h2><p><strong>Find out how much automating your gate could cost.</strong> Tell us about your gate and the installation conditions to receive up to three automation options with indicative prices by email.</p><ConfiguratorButton english /><p className="micro">Options depend on the information provided and technical checks. Some installations require an on-site assessment.</p></div><figure><img src="/automatismos/tipos/instalacao-correr-v2-768.webp" alt="Illustration of an automated sliding gate" width="768" height="512" loading="lazy" /><figcaption>AI-generated illustration.</figcaption></figure></section>
<section id="servicos" className="section services-balanced"><p className="eyebrow">Find your service</p><h2>Where shall we start?</h2><p className="section-intro">A new project, an improvement or a repair. Choose the area where you need help.</p><div className="service-families"><article className="service-family"><img src="/portao.png" alt="" width="1536" height="1024" loading="lazy" /><div><h3>Gate automation</h3><p className="service-claim">An easier way to come and go.</p><p>Installation, replacement and repair of gate automation for homes and residential buildings.</p><div className="service-links"><a href="/en/automatic-gate-installation-lisbon" className="text-link">Install gate automation <span aria-hidden="true">→</span></a><a href="/en/electric-gate-repair-lisbon" className="text-link">Resolve a fault <span aria-hidden="true">→</span></a></div></div></article><article className="service-family"><img src="/domotica.png" alt="" width="1536" height="1024" loading="lazy" /><div><h3>Smart home</h3><p className="service-claim">A home that fits your routines.</p><p>Control lighting, shutters and equipment, with solutions tailored to your space and how you use it.</p><div className="service-links"><a href="/en/smart-home-lisbon" className="text-link">Explore smart home solutions <span aria-hidden="true">→</span></a></div></div></article><article className="service-family"><img src="/vigilancia.png" alt="" width="1536" height="1024" loading="lazy" /><div><h3>Home monitoring</h3><p className="service-claim">Keep an eye on your home.</p><p>Residential camera systems, with access to your footage and an installation planned for the property.</p><div className="service-links"><a href="/en/security-cameras-lisbon" className="text-link">Explore home monitoring <span aria-hidden="true">→</span></a></div></div></article><article className="service-family"><img src="/comandos.png" alt="" width="1536" height="1024" loading="lazy" /><div><h3>Remotes and access</h3><p className="service-claim">Simpler access, every day.</p><p>Remote controls, receivers and video intercoms to manage entrances and speak to visitors. We assess compatibility with your existing installation.</p><div className="service-links"><a href="/en/garage-remote-controls-lisbon" className="text-link">Remotes and receivers <span aria-hidden="true">→</span></a><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20an%20assessment%20for%20a%20video%20intercom.%0A%0ALocation%3A%0ANew%20installation%20or%20replacement%3A%0AExisting%20equipment%3A" rel="noopener noreferrer" data-contact-button="whatsapp" className="text-link" target="_blank">Discuss a video intercom <span aria-hidden="true">→</span></a></div></div></article></div><aside className="electrical-note"><span aria-hidden="true" className="electrical-icon">↯</span><div><h3>Help with small electrical jobs, too.</h3><p>We assess the connections, adjustments and improvements your project needs. Tell us what you need so we can plan the work.</p></div><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20or%20some%20work%20with%20TecCasa.%0A%0ALocation%3A%0AWhat%20I%20would%20like%20to%20improve%20or%20resolve%3A%0APhotos%20or%20plans%20%28if%20available%29%3A" rel="noopener noreferrer" data-contact-button="whatsapp" className="text-link" target="_blank">Talk to TecCasa →</a></aside></section>
<section id="como-trabalhamos" className="section project-process"><div><p className="eyebrow">From the first conversation to the work itself</p><h2>Understand what you need.<br />Plan the solution.</h2><p>A project starts with your space, how you use it and what you want to achieve. A repair starts with understanding what has stopped working.</p><p>We bring that information together to prepare a clear proposal and work suited to your situation.</p><div aria-label="How we can help" className="project-tags"><span>A new project</span><span>An improvement</span><span>A repair</span></div></div><ol className="project-steps"><li><b>01</b><div><h3>Share your idea.</h3><p>Tell us what you want to improve, where it is and your location. You can send photos or plans if you have them.</p></div></li><li><b>02</b><div><h3>We plan the project with you.</h3><p>We assess what is already there, gather any missing details and explain the options, quote and proposed work.</p></div></li><li><b>03</b><div><h3>We put the solution in place.</h3><p>We carry out the agreed work, check that it functions and show you how to use it day to day.</p></div></li></ol></section>
<section id="zonas" className="section home-coverage"><div className="coverage-heading"><div><p className="eyebrow">Close to you</p><h2>On both sides of the Tagus.</h2><p>The map shows our usual service area. The marked area is approximate and includes places beyond those with their own page on this website.</p></div><div className="coverage-key"><span aria-hidden="true"></span>Usual service area<br /><small>Approximate 45 km radius</small></div></div><CoverageMap english /><div className="map-caption"><p>Your location does not need to be listed on this website to fall within our service area.</p><span>Map: <a href="https://www.openstreetmap.org/copyright" rel="noopener noreferrer" target="_blank">© OpenStreetMap</a></span></div><div className="coverage-bottom"><p>Visits by appointment. Availability and service conditions are agreed before the work.</p><a href="/en/service-areas" className="text-link">View service areas →</a></div></section>
<section className="section faq home-faq"><p className="eyebrow">Before we begin</p><h2>Your project can start with a conversation.</h2><details open><summary>Can I get in touch with an idea, before I have a full project?</summary><p>Yes. Tell us what you want to improve, how you use the space and what you would like to achieve. We help define the project and identify the information needed for a proposal.</p></details><details><summary>Can you work with existing equipment?</summary><p>We assess the equipment, its condition and compatibility with your intended solution. Send any model details, photos or other information you have; reuse is confirmed during the assessment.</p></details><details><summary>Can you consider several systems in the same project?</summary><p>We can consider smart home systems, home monitoring and gate automation in the same project. Integration depends on compatibility and should be specified in the proposal.</p></details><details><summary>Is a visit always needed to prepare a quote?</summary><p>Photos, plans and a description of your goal help us start the assessment. Some work can be scoped from that information; other jobs need a visit to check the space, infrastructure and work required. We explain the conditions before visiting.</p></details><details><summary>Does my location have to be listed on the website?</summary><p>No. The map shows our usual service area, including places without their own page. The marked area is approximate. Visits are by appointment and service conditions are agreed before the work.</p></details><details><summary>Do you provide support after installation?</summary><p>We explain how to use the solution and help with questions after the work. If further work is needed, we discuss your request and the applicable conditions.</p></details></section>
<section aria-labelledby="home-company-title" className="company-intro home-company"><p className="eyebrow">Meet TecCasa</p><h2 id="home-company-title">A small business, with a direct point of contact.</h2><p>TecCasa Soluções works on gate automation, smart home, home monitoring and access projects. You speak directly with the person who assesses your needs, prepares the proposal and carries out the work. With a base on each side of the Tagus, we work close to our customers in Lisbon and the surrounding areas.</p><a href="/en/about" className="text-link">Meet TecCasa →</a></section>
<section id="contactos" className="section final dark home-final"><p className="eyebrow">TecCasa Soluções</p><h2>What shall we improve today?</h2><p>A new project, an idea for your home or something that needs to work again. Tell us what you have in mind and we will plan the next step.</p><div data-contact-actions="true" className="actions"><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20or%20some%20work%20with%20TecCasa.%0A%0ALocation%3A%0AWhat%20I%20would%20like%20to%20improve%20or%20resolve%3A%0APhotos%20or%20plans%20%28if%20available%29%3A" rel="noopener noreferrer" data-contact-button="whatsapp" className="action green" target="_blank">Discuss my project</a><a href="tel:+351922021980" data-contact-button="secondary" className="action outline">Call +351 922 021 980</a><a href="mailto:geral@tec-casa.pt" data-contact-button="secondary" className="action outline">geral@tec-casa.pt</a></div><p className="micro">Homeowners and residential buildings · Lisbon and surrounding areas · Visits by appointment</p></section>
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
.english-page .eyebrow{font-size:12px;font-weight:700;letter-spacing:.4px;line-height:1.6;color:#42617e;margin:0 0 17px}
.english-page .micro{font-size:12px;line-height:1.7;color:#66778a;margin:15px 0 0}
.english-page .actions{display:flex;align-items:stretch;gap:12px;flex-wrap:wrap;margin-top:26px}
.english-page .action{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;text-align:center;min-height:58px;padding:16px 22px;border:1px solid transparent;border-radius:16px;text-decoration:none;font:700 16px/1.4 Arial,sans-serif;max-width:100%;overflow-wrap:anywhere}
.english-page .action.green{background:#25d366;border-color:#25d366;color:#fff}
.english-page .action.outline{background:#fff;border-color:#c9d5e5;color:#08285c}
.english-page .action:hover{filter:brightness(.97)}
.english-page .section{padding:46px 0}
.english-page .section-intro{max-width:850px;font-size:18px;line-height:1.75;margin:0 0 28px}
.english-page .text-link{font-size:15px;font-weight:700;text-underline-offset:5px;display:inline-block}
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
@media(max-width:1100px){.english-page .actions .action{flex:1 1 170px}}
@media(max-width:600px){.english-page .main-card{width:100%;padding:16px 12px;border-radius:18px}
.english-page h1{font-size:35px;line-height:1.12;letter-spacing:-.6px;margin-bottom:22px}
.english-page h2{font-size:28px;letter-spacing:-.4px}
.english-page h3{font-size:21px}
.english-page .actions{flex-direction:column;margin-top:24px}
.english-page .actions .action{flex:0 1 auto;width:100%}
.english-page .action{font-size:16px;padding:16px 19px;min-height:58px}
.english-page .eyebrow{font-size:12px}
.english-page .micro{font-size:12px}
.english-page .section{padding:30px 4px}
.english-page .section-intro{font-size:17px;line-height:1.75;margin-bottom:24px}
.english-page .faq summary{font-size:17px}
.english-page .faq details p{margin-left:4px;font-size:16px}
.english-page .final{padding:33px 21px;margin:22px 0}
.english-page .final>p{font-size:17px}}
.english-page .home-hero{padding:48px 48px 44px;background:linear-gradient(135deg,#08285c,#0b3f88);color:#fff;border-radius:26px;box-shadow:0 18px 40px #0b2c5f24;margin-bottom:32px}
.english-page .home-hero h1{font-size:clamp(32px,3.8vw,44px);color:#fff;line-height:1.17;letter-spacing:-.5px;max-width:900px;margin:0 0 19px}
.english-page .home-hero>p{max-width:760px;color:#dbeafe;font-size:20px;line-height:1.6;margin:0}
.english-page .full-logo{display:block;width:300px;max-width:100%;height:auto;padding:15px;background:white;border-radius:18px;margin-bottom:29px}
.english-page .home-hero .actions{margin-top:28px}
.english-page .home-hero .action.outline{background:transparent;color:white;border-color:#fff}
.english-page .home-hero .action.green{background:#25d366;border-color:#25d366;color:#fff}
.english-page .home-config{display:grid;grid-template-columns:1.2fr 1fr;gap:36px;align-items:center;background:linear-gradient(135deg,#eef3fa,#fff);border:1px solid #d8e3f1;border-radius:24px;padding:38px;margin:0 0 26px}
.english-page .new-label{display:inline-block;padding:7px 14px;margin-bottom:16px;border-radius:999px;background:#dce8f8;color:#08285c;font-weight:700;font-size:13px}
.english-page .home-config h2{font-size:clamp(28px,3vw,38px);max-width:520px;line-height:1.2}
.english-page .home-config p{font-size:17px;line-height:1.7;margin-bottom:22px}
.english-page .home-config .micro{font-size:13px;margin:16px 0 0;color:#586679}
.english-page .home-config figure{margin:0;min-width:0}
.english-page .home-config figure img{display:block;width:100%;height:auto;border-radius:20px}
.english-page .home-config figcaption{font-size:11px;color:#66758a;margin-top:8px}
.english-page .service-families{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
.english-page .service-family{display:grid;grid-template-columns:108px minmax(0,1fr);gap:20px;padding:30px 26px;border:1px solid #dce5f0;border-radius:24px;background:#f0f5fb;min-width:0}
.english-page .service-family>img{width:108px;height:126px;object-fit:contain;align-self:start;margin-top:8px}
.english-page .service-family>div{display:flex;flex-direction:column;min-width:0}
.english-page .service-family h3{font-size:25px;margin-bottom:10px}
.english-page .service-family p{font-size:15px;line-height:1.7;color:#506177;margin:0 0 20px}
.english-page .service-family .service-claim{font-size:16px;font-weight:700;color:#23466c;margin-bottom:10px}
.english-page .service-links{display:flex;flex-wrap:wrap;gap:12px 20px;margin-top:auto;padding-top:4px}
.english-page .service-links a{font-size:13px;line-height:1.6;text-decoration:none}
.english-page .service-links a:hover{text-decoration:underline}
.english-page .electrical-note{display:flex;align-items:center;gap:20px;margin-top:18px;padding:24px 27px;border:1px solid #dce5f0;border-radius:20px;background:white}
.english-page .electrical-icon{display:grid;place-items:center;width:43px;height:43px;flex-shrink:0;border-radius:13px;color:#08285c;background:#e8eff8;font-size:28px}
.english-page .electrical-note h3{font-size:18px;margin:0 0 6px}
.english-page .electrical-note p{font-size:14px;line-height:1.7;margin:0;color:#596d84}
.english-page .electrical-note>a{flex-shrink:0;font-size:13px}
.english-page .project-process{display:grid;grid-template-columns:1fr 1fr;gap:50px;border-top:1px solid #dce5f0;margin-top:15px;padding-top:55px}
.english-page .project-process>div>p:not(.eyebrow){font-size:17px;line-height:1.8;max-width:500px}
.english-page .project-tags{display:flex;flex-wrap:wrap;gap:8px;margin:23px 0}
.english-page .project-tags span{padding:6px 10px;background:#eef3fa;border-radius:8px;color:#42617e;font-size:12px;font-weight:700}
.english-page .project-steps{padding:0;margin:8px 0 0;list-style:none;display:grid;gap:27px;align-content:center}
.english-page .project-steps>li{display:flex;gap:19px}
.english-page .project-steps b{display:grid;place-items:center;flex-shrink:0;width:42px;height:42px;background:#08285c;border-radius:50%;color:white;font-size:12px}
.english-page .project-steps h3{font-size:20px;margin:1px 0 10px}
.english-page .project-steps p{font-size:15px;line-height:1.75;margin:0}
.english-page .home-coverage{border-top:1px solid #dce5f0;margin-top:8px;padding-top:50px}
.english-page .coverage-heading{display:flex;align-items:center;justify-content:space-between;gap:36px;margin-bottom:26px}
.english-page .coverage-heading p:not(.eyebrow){font-size:17px;max-width:720px;line-height:1.75;margin:0}
.english-page .coverage-key{flex-shrink:0;position:relative;padding:17px 18px 17px 43px;background:#edf3fa;border-radius:14px;font-size:13px;color:#08285c;font-weight:700;line-height:1.7}
.english-page .coverage-key>span{position:absolute;left:18px;top:21px;width:13px;height:13px;border:2px solid #0b2c5f;border-radius:50%;background:#0b2c5f26}
.english-page .coverage-key small{font-weight:400;font-size:12px}
.english-page .map-caption{display:flex;justify-content:space-between;gap:25px;margin-top:13px}
.english-page .map-caption p{font-size:13px;line-height:1.7;color:#42617e;margin:0;max-width:780px}
.english-page .map-caption>span{font-size:11px;white-space:nowrap;color:#66778a}
.english-page .coverage-bottom{display:flex;align-items:center;justify-content:space-between;gap:25px;margin-top:23px}
.english-page .coverage-bottom p{font-size:13px;line-height:1.7;color:#66778a;max-width:690px;margin:0}
.english-page .coverage-bottom>a{font-size:13px;flex-shrink:0}
.english-page .home-faq{max-width:940px;margin:auto}
.english-page .home-faq>h2{max-width:730px}
.english-page .home-final{margin-top:35px}
.english-page .home-final>h2{font-size:42px}
.english-page .home-final .eyebrow{color:#c8d8ed}
.english-page .home-final .actions{justify-content:center}
.english-page .home-final .micro{font-size:12px}
.english-page .service-family a:focus-visible{outline:3px solid #d79a16;outline-offset:5px}
@media(max-width:1000px){.english-page .service-family{grid-template-columns:85px minmax(0,1fr);gap:16px;padding:26px 21px}
.english-page .service-family>img{width:85px;height:110px}
.english-page .service-family h3{font-size:23px}
.english-page .electrical-note{flex-wrap:wrap}
.english-page .electrical-note>div{flex:1;min-width:200px}
.english-page .electrical-note>a{margin-left:63px}
.english-page .project-process{gap:32px}
.english-page .coverage-heading{align-items:flex-start;flex-direction:column;gap:20px}
.english-page .coverage-key{padding-top:13px;padding-bottom:13px}
.english-page .coverage-key>span{top:18px}
.english-page .coverage-bottom{align-items:flex-start;flex-direction:column;gap:15px}}
@media(max-width:768px){.english-page .home-hero{padding:32px 26px;border-radius:23px}
.english-page .home-hero h1{font-size:34px}
.english-page .home-hero>p{font-size:18px}
.english-page .home-config{grid-template-columns:1fr;padding:28px 23px;gap:25px}
.english-page .home-config h2{font-size:30px;max-width:620px}
.english-page .home-config p{font-size:16px}
.english-page .home-config figure{max-width:650px}
.english-page .service-families{grid-template-columns:1fr;gap:16px}
.english-page .service-family{grid-template-columns:110px minmax(0,1fr);padding:27px 24px;gap:21px}
.english-page .service-family>img{width:110px;height:125px}
.english-page .project-process{grid-template-columns:1fr;gap:30px;padding-top:38px}
.english-page .project-process>div>p:not(.eyebrow){max-width:none}
.english-page .project-steps{gap:26px}
.english-page .home-coverage{padding-top:36px}
.english-page .home-final>h2{font-size:32px}
.english-page .map-caption{flex-direction:column;gap:9px}}
@media(max-width:480px){.english-page .home-hero{padding:29px 22px;margin-bottom:25px}
.english-page .full-logo{width:265px;padding:12px;margin-bottom:25px}
.english-page .home-hero h1{font-size:30px;line-height:1.2}
.english-page .home-hero>p{font-size:17px;line-height:1.7}
.english-page .home-hero .actions{margin-top:25px}
.english-page .home-config{padding:26px 22px}
.english-page .home-config h2{font-size:28px}
.english-page .service-family{grid-template-columns:76px minmax(0,1fr);padding:24px 19px;gap:15px}
.english-page .service-family>img{width:76px;height:100px;margin-top:3px}
.english-page .service-family h3{font-size:22px;line-height:1.3}
.english-page .service-family .service-claim{font-size:15px}
.english-page .service-family p{font-size:14px}
.english-page .service-links{gap:12px}
.english-page .service-links a{font-size:13px}
.english-page .electrical-note{padding:21px 19px;gap:13px}
.english-page .electrical-note>div{min-width:150px}
.english-page .electrical-note>a{margin-left:56px}
.english-page .electrical-note h3{font-size:17px}
.english-page .electrical-icon{width:40px;height:40px}
.english-page .project-process>div>p:not(.eyebrow){font-size:16px}
.english-page .project-process h2{font-size:27px}
.english-page .project-steps>li{gap:14px}
.english-page .project-steps b{width:36px;height:36px}
.english-page .project-steps h3{font-size:19px}
.english-page .project-steps p{font-size:15px}
.english-page .coverage-heading p:not(.eyebrow){font-size:16px}
.english-page .map-caption p{font-size:12px}
.english-page .coverage-bottom p{font-size:12px}
.english-page .home-final{padding:32px 22px}
.english-page .home-final .actions>a{font-size:14px}
.english-page .home-final .eyebrow{font-size:11px}}
@media(max-width:350px){.english-page .service-family{grid-template-columns:1fr}
.english-page .service-family>img{width:95px;height:90px;margin:0}
.english-page .electrical-note>a{margin-left:0}
.english-page .full-logo{width:100%}}
.english-page .home-company{padding:clamp(25px,4vw,44px);margin:30px 0 35px;background:#f1f5fa;border:1px solid #dce5f0;border-radius:24px}
.english-page .home-company .eyebrow{font-size:14px;margin-bottom:15px}
.english-page .home-company h2{font-size:clamp(27px,3.2vw,34px);line-height:1.25;margin-bottom:20px}
.english-page .home-company>p:not(.eyebrow){font-size:17px;line-height:1.85;max-width:940px;margin:0 0 20px}
.english-page .home-company>a{font-size:16px;display:inline-block;margin-top:5px}
.english-page .project-process>div>.text-link{display:none}
@media(max-width:600px){.english-page .home-company{padding:28px 23px;margin:24px 4px 30px;border-radius:22px}
.english-page .home-company .eyebrow{font-size:12px}
.english-page .home-company h2{font-size:27px}
.english-page .home-company>p:not(.eyebrow){font-size:16px;line-height:1.8}
.english-page .home-company>a{font-size:15px}}
.english-page.homepage{min-height:100vh;padding:110px 40px 40px;background:#f4f7fb;color:#405168;font:17px/1.75 Arial,sans-serif}
.english-page.homepage *{box-sizing:border-box}
.english-page .main-card{width:min(1200px,calc(100% - 40px));margin:auto;padding:50px;background:white;border-radius:22px;box-shadow:0 10px 30px #0b2c5f12}
.english-page .floating-whatsapp{position:fixed;bottom:25px;right:25px;z-index:900;padding:13px 18px;border-radius:999px;background:#25d366;color:#fff;text-decoration:none;font-size:14px;font-weight:700;box-shadow:0 4px 18px #0002}
@media(max-width:768px){.english-page.homepage{padding:95px 6px 10px}
.english-page .main-card{width:100%;padding:16px 12px;border-radius:18px}}
@media(max-width:600px){.english-page .floating-whatsapp{right:14px;bottom:14px;font-size:13px}}
`;
