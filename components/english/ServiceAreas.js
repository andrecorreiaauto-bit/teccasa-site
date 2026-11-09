import EnglishPageLayout from "./PageLayout";
import ServiceCoverageNotice from "../ServiceCoverageNotice";
import CoverageMap from "../CoverageMap";
import ConfiguratorButton from "../ConfiguratorButton";
import BrandLogoGrid from "../BrandLogoGrid";
import { automationBrands } from "../../lib/brand-logos";
import { CONFIGURATOR_IS_NEW } from "../../lib/configurator.mjs";
import LocalityDirectory from "./LocalityDirectory";

const page = {
  "id": "areas",
  "route": "/en/service-areas",
  "ptRoute": "/zonas-de-assistencia",
  "title": "Service Areas | TecCasa Soluções",
  "description": "View TecCasa’s usual service area in Lisbon and surrounding areas, on both sides of the Tagus. Gate automation, smart home, monitoring and access, by appointment.",
  "message": "Hello, I would like to discuss a project or visit with TecCasa.\n\nLocation:\nService required:\nWhat I need to install, improve or repair:",
  "wrapper": "areas-page",
  "questions": []
};

export default function ServiceAreas() {
  return <EnglishPageLayout page={page} styles={styles}>
<nav aria-label="Breadcrumb" className="breadcrumbs"><a href="/en">Home</a><span aria-hidden="true"> / </span><span>Service areas</span></nav>
<section aria-labelledby="areas-title" className="area-hero"><p className="eyebrow">Service areas</p><h1 id="areas-title">Close to you, on both sides of the Tagus.</h1><p>Design, installation and support for gate automation, smart home systems, home monitoring and access. We work in Lisbon and surrounding areas, with a base on each side of the Tagus.</p><a href="#zona-habitual" className="hero-anchor">See our service area <span aria-hidden="true">↓</span></a></section>
<section id="zona-habitual" aria-labelledby="map-title" className="area-map-section"><div className="map-heading"><div><p className="eyebrow">Close to you</p><h2 id="map-title">See our usual service area.</h2><p>The marked area is a guide to our coverage, with an approximate 45 km radius. It includes places beyond those with their own page on this website.</p></div><div className="coverage-key"><span aria-hidden="true"></span>Usual service area<small>Approximate 45 km radius</small></div></div><CoverageMap english /><div className="map-caption"><p>Enlarge the map for a closer look at your area.</p><span>Map: <a href="https://www.openstreetmap.org/copyright" rel="noopener noreferrer" target="_blank">© OpenStreetMap</a></span></div><div className="coverage-answer"><div aria-hidden="true" className="coverage-answer-icon">✓</div><div><h3>Is your location within the marked area?</h3><p>You can send your request even if the place name is not listed below. Availability and service conditions are agreed with you.</p></div></div><p className="boundary-note"><strong>Near the boundary or outside the area?</strong> Include your location and the service required so we can assess whether a visit is possible.</p></section>
<section aria-labelledby="services-title" className="section local-services"><div className="section-heading"><p className="eyebrow">In your area</p><h2 id="services-title">Support for what you need.</h2><p>Our service area covers the different areas of TecCasa's work. Each project is assessed according to the space, equipment and work required.</p></div><div className="service-options"><a href="/en/automatic-gate-installation-lisbon"><span aria-hidden="true">01</span><strong>Gate automation</strong><small>Installation and replacement</small><b aria-hidden="true">→</b></a><a href="/en/smart-home-lisbon"><span aria-hidden="true">02</span><strong>Smart home</strong><small>A more practical home</small><b aria-hidden="true">→</b></a><a href="/en/security-cameras-lisbon"><span aria-hidden="true">03</span><strong>Home monitoring</strong><small>Keep an eye on your home</small><b aria-hidden="true">→</b></a><a href="/en/garage-remote-controls-lisbon"><span aria-hidden="true">04</span><strong>Remotes and access</strong><small>Remote controls, receivers and video intercoms</small><b aria-hidden="true">→</b></a></div><p className="service-footnote">Need to resolve a fault? <a href="/en/electric-gate-repair-lisbon">Explore gate automation repairs →</a></p></section>
<section aria-labelledby="visit-title" className="visit-section"><div><p className="eyebrow">Visits by appointment</p><h2 id="visit-title">Before the visit,<br />we agree the details.</h2><p>We start with the information you send, so we can scope the request and prepare the next step.</p></div><ol className="visit-steps"><li><b>01</b><div><h3>Share your location and needs.</h3><p>Tell us what you want to install, improve or repair. Photos and equipment details help with the assessment.</p></div></li><li><b>02</b><div><h3>We clarify what is needed.</h3><p>We confirm any missing information, whether a visit is required and the conditions for the visit and assessment.</p></div></li><li><b>03</b><div><h3>We arrange an appointment with you.</h3><p>Availability and the proposed work are agreed before the visit.</p></div></li></ol></section>
<section aria-labelledby="directory-title" className="section local-directory"><p className="eyebrow">Local service information</p><h2 id="directory-title">Want to know more about services in your area?</h2><p>Some places have dedicated gate automation installation and repair pages. These local pages are currently in Portuguese; our service coverage is the area shown on the map.</p><LocalityDirectory /></section>
<section id="contactos" aria-labelledby="contact-title" className="area-final dark"><p className="eyebrow">TecCasa Soluções</p><h2 id="contact-title">Shall we plan your project or visit?</h2><p>Tell us what you need and where you are. We will gather the information to define the next step with you.</p><div data-contact-actions="true" className="actions"><a href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20or%20visit%20with%20TecCasa.%0A%0ALocation%3A%0AService%20required%3A%0AWhat%20I%20need%20to%20install%2C%20improve%20or%20repair%3A" rel="noopener noreferrer" data-contact-button="whatsapp" className="action green" target="_blank">Talk to TecCasa</a><a href="tel:+351922021980" data-contact-button="secondary" className="action outline">Call +351 922 021 980</a><a href="mailto:geral@tec-casa.pt" data-contact-button="secondary" className="action outline">geral@tec-casa.pt</a></div><p className="micro">Homeowners and residential buildings · Lisbon and surrounding areas · Visits by appointment</p></section>
  </EnglishPageLayout>;
}

const styles = `
.english-page a{color:#08285c;text-underline-offset:4px}
.english-page h1,.english-page h2,.english-page h3{color:#08285c}
.english-page h1{font-size:clamp(36px,4.2vw,54px);line-height:1.08;letter-spacing:-1.2px;margin:0 0 25px;font-weight:800}
.english-page h2{font-size:34px;line-height:1.22;letter-spacing:-.5px;margin:0 0 20px}
.english-page h3{font-size:21px;line-height:1.35;margin:0 0 13px}
.english-page p{margin:0 0 18px}
.english-page a:focus-visible,.english-page button:focus-visible,.english-page summary:focus-visible{outline:3px solid #f7b545;outline-offset:5px}
.english-page a{-webkit-tap-highlight-color:transparent}
.english-page [hidden]{display:none!important}
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
.english-page .text-link{font-size:15px;font-weight:700;text-underline-offset:5px;display:inline-block}
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
.english-page .section{padding:30px 4px}}
.english-page .main-card{padding:38px 44px 44px}
.english-page .breadcrumbs{font-size:13px;margin:0 0 23px}
.english-page .area-hero{padding:43px 44px;background:linear-gradient(125deg,#0b285b,#103f83);border-radius:26px;color:white}
.english-page .area-hero .eyebrow{color:#c7d9ef}
.english-page .area-hero h1{color:white;font-size:clamp(32px,3.7vw,45px);max-width:750px;line-height:1.15;letter-spacing:-.6px;margin-bottom:23px}
.english-page .area-hero>p:not(.eyebrow){font-size:18px;line-height:1.75;max-width:850px;color:#e0eafa;margin:0}
.english-page .hero-anchor{display:inline-flex;align-items:center;gap:18px;color:#fff;font-size:14px;font-weight:700;margin-top:25px;text-decoration:none;border-bottom:1px solid #91b0d6;padding-bottom:3px}
.english-page .hero-anchor span{font-size:20px}
.english-page .area-map-section{padding-top:44px}
.english-page .map-heading{display:flex;align-items:center;justify-content:space-between;gap:30px;margin-bottom:26px}
.english-page .map-heading>div:first-child{max-width:690px}
.english-page .map-heading h2{font-size:32px;margin-bottom:17px}
.english-page .map-heading p:not(.eyebrow){font-size:16px;line-height:1.8;margin:0}
.english-page .coverage-key{position:relative;flex-shrink:0;padding:15px 17px 15px 40px;border-radius:15px;background:#eef3fa;font-size:12px;color:#08285c;font-weight:700;line-height:1.8}
.english-page .coverage-key>span{position:absolute;top:22px;left:17px;border:2px solid #0b2c5f;width:12px;height:12px;border-radius:50%;background:#0b2c5f26}
.english-page .coverage-key small{font-size:12px;font-weight:400;display:block}
.english-page .map-caption{display:flex;justify-content:space-between;gap:15px;margin:11px 0 23px;color:#66778a;font-size:11px}
.english-page .map-caption p{font-size:12px;margin:0}
.english-page .map-caption>span{white-space:nowrap}
.english-page .coverage-answer{display:flex;align-items:flex-start;gap:18px;padding:25px 27px;background:#edf4fb;border-radius:18px;border:1px solid #d9e5f1}
.english-page .coverage-answer-icon{display:grid;place-items:center;flex-shrink:0;width:32px;height:32px;border-radius:50%;color:white;background:#123f7a;font-weight:700}
.english-page .coverage-answer h3{font-size:19px;margin:1px 0 10px}
.english-page .coverage-answer p{font-size:15px;line-height:1.8;margin:0;max-width:870px}
.english-page .boundary-note{font-size:13px;line-height:1.85;margin:17px 3px 0;color:#61738a}
.english-page .boundary-note strong{color:#405168}
.english-page .section-heading{max-width:800px}
.english-page .section-heading>p:not(.eyebrow),.english-page .local-directory>p:not(.eyebrow){font-size:16px;line-height:1.85;max-width:850px}
.english-page .service-options{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px;margin-top:25px}
.english-page .service-options>a{position:relative;display:flex;align-items:flex-start;flex-direction:column;padding:23px 20px 26px;border:1px solid #dce5f0;border-radius:19px;text-decoration:none;background:#f1f5fa;min-width:0}
.english-page .service-options a>span{font-size:11px;font-weight:700;color:#6c809a;margin-bottom:17px}
.english-page .service-options strong{font-size:18px;line-height:1.4;max-width:160px}
.english-page .service-options small{font-size:12px;line-height:1.6;color:#61738a;margin-top:9px;margin-bottom:12px;max-width:160px}
.english-page .service-options b{position:absolute;right:17px;bottom:17px;font-size:20px;line-height:1}
.english-page .service-options>a:hover{background:#e9f0f8}
.english-page .service-footnote{font-size:13px;margin:20px 0 0;line-height:1.8}
.english-page .service-footnote a{font-weight:700}
.english-page .visit-section{display:grid;grid-template-columns:1fr 1.15fr;gap:46px;border-top:1px solid #dce5f0;border-bottom:1px solid #dce5f0;padding:38px 0}
.english-page .visit-section>div>p:not(.eyebrow){font-size:16px;line-height:1.85;max-width:420px}
.english-page .visit-steps{list-style:none;padding:0;margin:6px 0 0;display:grid;gap:23px}
.english-page .visit-steps li{display:flex;gap:17px}
.english-page .visit-steps b{display:grid;place-items:center;flex-shrink:0;width:34px;height:34px;border-radius:50%;background:#08285c;color:white;font-size:11px}
.english-page .visit-steps h3{font-size:17px;margin:2px 0 8px}
.english-page .visit-steps p{font-size:14px;line-height:1.8;margin:0}
.english-page .local-directory{padding-bottom:20px}
.english-page .local-directory details{margin-top:25px;border:1px solid #d8e3f1;border-radius:18px;overflow:hidden;background:#fff}
.english-page .local-directory summary{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:21px 25px;color:#08285c;cursor:pointer;list-style:none;background:#eef3fa;font-size:16px;font-weight:700}
.english-page .local-directory summary::-webkit-details-marker{display:none}
.english-page .directory-count{display:flex;align-items:center;gap:18px;white-space:nowrap;color:#61738a;font-size:12px;font-weight:400}
.english-page .directory-count b{display:block;color:#08285c;font-size:23px;font-weight:400;transition:transform .2s}
.english-page .local-directory details[open] summary b{transform:rotate(45deg)}
.english-page .directory-body{padding:23px}
.english-page .directory-body label{display:block;color:#08285c;font-size:14px;font-weight:700;margin-bottom:10px}
.english-page .directory-search{display:flex;align-items:center;gap:14px}
.english-page .directory-search input{border:1px solid #c5d4e5;border-radius:11px;padding:13px 15px;font:16px Arial,sans-serif;width:min(100%,490px);min-width:0;background:#fff;color:#08285c}
.english-page .directory-search button{border:0;background:#edf3fa;color:#08285c;font-size:13px;font-weight:700;border-radius:9px;padding:13px;cursor:pointer}
.english-page .directory-status{font-size:12px;color:#61738a;margin:12px 0 18px}
.english-page .localities{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.english-page .locality{padding:20px;border:1px solid #dce5f0;border-radius:14px;min-width:0}
.english-page .locality h3{font-size:17px;margin-bottom:13px}
.english-page .locality>div{display:flex;gap:19px;flex-wrap:wrap}
.english-page .locality a{font-size:13px;font-weight:700}
.english-page .no-localities{padding:20px;background:#f2f6fb;border-radius:13px}
.english-page .no-localities h3{font-size:18px}
.english-page .no-localities p{font-size:14px}
.english-page .no-localities a{font-size:14px}
.english-page .area-final{margin-top:24px;padding:40px;border-radius:25px;text-align:center}
.english-page .area-final h2{font-size:34px}
.english-page .area-final>p{max-width:750px;margin:0 auto 20px;font-size:17px;line-height:1.8}
.english-page .area-final .eyebrow{font-size:12px;color:#c8d8ed}
.english-page .area-final .actions{justify-content:center}
.english-page .area-final .micro{font-size:12px;margin:22px 0 0}
.english-page a{overflow-wrap:anywhere}
.english-page section[id]{scroll-margin-top:170px}
@media(max-width:1000px){.english-page .service-options{grid-template-columns:repeat(2,minmax(0,1fr))}
.english-page .service-options strong,.english-page .service-options small{max-width:none}
.english-page .map-heading{align-items:flex-start;flex-direction:column;gap:20px}
.english-page .coverage-key{align-self:flex-start}
.english-page .visit-section{gap:28px}
.english-page .localities{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:768px){.english-page .main-card{padding:26px}
.english-page .visit-section{grid-template-columns:1fr;gap:20px}
.english-page .visit-section>div>p:not(.eyebrow){max-width:none}
.english-page .area-hero{padding:32px}
.english-page .map-heading h2{font-size:29px}
.english-page .area-final .actions{flex-direction:column}
.english-page .area-final .action{width:100%;flex:none}
.english-page .local-directory summary{align-items:flex-start}
.english-page .directory-count{gap:10px}}
@media(max-width:600px){.english-page .main-card{padding:18px 13px}
.english-page .breadcrumbs{font-size:12px;margin:5px 4px 19px}
.english-page .area-hero{padding:29px 24px;border-radius:22px}
.english-page .area-hero h1{font-size:34px;line-height:1.15}
.english-page .area-hero>p:not(.eyebrow){font-size:16px;line-height:1.8}
.english-page .hero-anchor{font-size:13px;margin-top:22px}
.english-page .area-map-section{padding:32px 3px 0}
.english-page .map-heading h2{font-size:28px}
.english-page .map-heading p:not(.eyebrow){font-size:16px}
.english-page .map-heading{gap:18px;margin-bottom:21px}
.english-page .coverage-key{padding:10px 14px 10px 37px}
.english-page .coverage-key>span{top:18px;left:15px}
.english-page .map-caption{font-size:10px;gap:10px;align-items:baseline;flex-wrap:wrap}
.english-page .map-caption p{font-size:11px}
.english-page .coverage-answer{padding:21px 18px;gap:12px}
.english-page .coverage-answer-icon{width:25px;height:25px;font-size:13px}
.english-page .coverage-answer h3{font-size:17px;line-height:1.4;margin-top:0}
.english-page .coverage-answer p{font-size:14px}
.english-page .boundary-note{font-size:12px}
.english-page .service-options{gap:11px}
.english-page .service-options>a{padding:20px 16px 25px;border-radius:16px}
.english-page .service-options strong{font-size:17px}
.english-page .service-options small{font-size:12px}
.english-page .service-options a>span{margin-bottom:13px}
.english-page .service-footnote{font-size:12px}
.english-page .section-heading>p:not(.eyebrow),.english-page .local-directory>p:not(.eyebrow){font-size:16px}
.english-page .visit-section{margin:0 3px;padding:30px 0}
.english-page .visit-section h2{font-size:28px}
.english-page .visit-steps{gap:23px}
.english-page .visit-steps li{gap:12px}
.english-page .visit-steps b{width:29px;height:29px;font-size:10px}
.english-page .visit-steps h3{font-size:17px}
.english-page .visit-steps p{font-size:14px}
.english-page .local-directory summary{font-size:15px;line-height:1.5;padding:18px;gap:12px}
.english-page .directory-count{font-size:11px;gap:9px;flex-direction:column;align-items:flex-end}
.english-page .directory-body{padding:18px 14px}
.english-page .directory-search{gap:7px}
.english-page .directory-search input{padding:13px 10px;font-size:16px}
.english-page .directory-search button{font-size:11px;padding:13px 8px}
.english-page .localities{grid-template-columns:1fr}
.english-page .locality{padding:18px}
.english-page .locality>div{gap:25px}
.english-page .locality a{font-size:14px}
.english-page .area-final{padding:30px 23px;border-radius:22px}
.english-page .area-final h2{font-size:29px}
.english-page .area-final>p{font-size:16px}
.english-page .area-final .action{font-size:14px}
.english-page .area-final .micro{font-size:11px}
.english-page .area-final .eyebrow{font-size:11px}}
@media(max-width:350px){.english-page .area-hero{padding:26px 20px}
.english-page .area-hero h1{font-size:30px}
.english-page .service-options{grid-template-columns:1fr}
.english-page .directory-count{font-size:10px}
.english-page .coverage-answer{gap:10px;padding:18px 14px}}
.english-page.areas-page{min-height:100vh;background:#f4f7fb;padding:110px 40px 40px;color:#405168;font:17px/1.75 Arial,sans-serif}
.english-page.areas-page *{box-sizing:border-box}
.english-page .main-card{width:min(1200px,calc(100% - 40px));margin:auto;padding:38px 44px 44px;border-radius:22px;background:#fff;box-shadow:0 10px 30px #0b2c5f12}
.english-page .floating-whatsapp{position:fixed;right:25px;bottom:25px;z-index:900;display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 18px;border-radius:999px;background:#25d366;color:#fff;text-decoration:none;font-size:14px;font-weight:700;box-shadow:0 4px 18px #0002}
.english-page section[id]{scroll-margin-top:110px}
@media(max-width:768px){.english-page.areas-page{padding:95px 6px 12px}
.english-page .main-card{width:100%;padding:26px}}
@media(max-width:600px){.english-page.areas-page{padding-top:92px}
.english-page .main-card{padding:18px 13px;border-radius:18px}
.english-page .floating-whatsapp{right:14px;bottom:14px;min-height:46px;font-size:13px;padding:11px 16px}
.english-page section[id]{scroll-margin-top:95px}}
@media(prefers-reduced-motion:reduce){.english-page .directory-count b{transition:none}}
`;
