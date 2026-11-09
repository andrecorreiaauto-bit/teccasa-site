import EnglishPageLayout from "./PageLayout";
import ServiceCoverageNotice from "../ServiceCoverageNotice";
import CoverageMap from "../CoverageMap";
import ConfiguratorButton from "../ConfiguratorButton";
import BrandLogoGrid from "../BrandLogoGrid";
import { automationBrands } from "../../lib/brand-logos";
import { CONFIGURATOR_IS_NEW } from "../../lib/configurator.mjs";

const page = {
  "id": "remote-fault",
  "route": "/en/gate-remote-control-not-working",
  "ptRoute": "/comando-garagem-nao-funciona",
  "title": "Gate Remote Control Not Working? | TecCasa Soluções",
  "description": "Gate or garage remote control not working in Lisbon? Help with batteries, programming, RF receivers, compatible remotes and automatic gate diagnosis.",
  "message": "Hello, I would like help with a gate remote control that is not working.\n\nLocation:\nBrand/model (if known):\nWhat happens:",
  "wrapper": "page",
  "questions": []
};

export default function RemoteFault() {
  return <EnglishPageLayout page={page} styles={styles}>
<section style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(320px,1fr))", "gap": "50px", "alignItems": "center", "padding": "70px 0"}} className="hero-remote-fault"><div><div style={{"display": "inline-block", "background": "#eef3fa", "color": "#08285c", "padding": "8px 14px", "borderRadius": "999px", "fontSize": "14px", "fontWeight": "700", "boxShadow": "0 6px 16px rgba(11,44,95,0.08)", "marginBottom": "20px"}}>Remote control fault diagnosis</div><h1 style={{"fontSize": "clamp(40px,5vw,56px)", "lineHeight": "1.05", "marginBottom": "24px", "color": "#08285c", "fontWeight": "900"}}>Gate remote control not working?</h1><p style={{"fontSize": "21px", "lineHeight": "1.8", "color": "#444", "maxWidth": "700px", "marginBottom": "18px"}}>If your garage or automatic gate remote stopped working, the cause may be the remote, battery, receiver, programming, antenna or the gate automation system itself.</p><p style={{"fontSize": "17px", "lineHeight": "1.75", "color": "#555", "maxWidth": "700px", "marginBottom": "18px"}}>This page is useful if you manage a property in Portugal, need access for guests or family, or simply need to understand whether a new remote can be programmed.</p><p style={{"fontSize": "16px", "lineHeight": "1.7", "color": "#666", "maxWidth": "700px", "marginBottom": "30px"}}>For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.</p><div data-contact-actions="true" style={{"display": "flex", "gap": "14px", "flexWrap": "wrap"}}><a data-contact-button="whatsapp" href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20help%20with%20a%20gate%20remote%20control%20that%20is%20not%20working.%0A%0ALocation%3A%0ABrand%2Fmodel%20%28if%20known%29%3A%0AWhat%20happens%3A" target="_blank" rel="noopener noreferrer" style={{"display": "inline-block", "background": "#25D366", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "fontWeight": "bold", "textDecoration": "none", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(37,211,102,0.18)"}}>Send remote photo</a><a href="#common-problems" style={{"display": "inline-block", "background": "#08285c", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "fontWeight": "bold", "textDecoration": "none", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(8,40,92,0.18)"}}>See common causes</a></div></div><div style={{"display": "flex", "justifyContent": "center"}}><img src="/comando-garagem-falha.png" alt="Garage remote control not working" style={{"width": "100%", "maxWidth": "600px", "borderRadius": "28px", "boxShadow": "0 25px 60px rgba(11,44,95,0.18)", "objectFit": "cover"}} fetchPriority="high" /></div></section>
<section style={{"marginTop": "70px"}}><h2 style={{"color": "#08285c", "fontSize": "42px", "marginBottom": "18px", "textAlign": "center"}}>What we check before replacing a remote</h2><p style={{"textAlign": "center", "maxWidth": "850px", "margin": "0 auto 50px auto", "color": "#555", "fontSize": "20px", "lineHeight": "1.7"}}>A remote control fault is not always solved by buying another remote. The system must be checked for frequency, coding, receiver condition and possible gate automation faults.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "24px"}} className="diagnosis-grid"><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>📸</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Send a clear photo</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>A photo of the remote, the motor brand or the receiver/control board helps check compatibility before a visit.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>🔋</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Check simple causes</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>Battery, damaged buttons, corrosion, humidity and casing wear are common causes of remote failure.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>📡</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Check the receiver</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>If several remotes fail at the same time, the receiver, antenna, control board or power supply may be involved.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>🧭</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Choose the right solution</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>The next step may be programming, a compatible remote, a universal receiver or diagnosis of the gate automation.</p></div></div></section>
<section id="common-problems" style={{"padding": "70px 0 70px"}}><h2 style={{"fontSize": "38px", "color": "#08285c", "marginBottom": "16px", "textAlign": "center"}}>Common reasons a gate remote stops working</h2><p style={{"fontSize": "19px", "lineHeight": "1.7", "color": "#555", "maxWidth": "780px", "margin": "0 auto 45px auto", "textAlign": "center"}}>These are the most common situations. The visible problem may be the remote, but the origin can also be in the receiver, control board or safety system.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "22px"}} className="problems-grid"><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/pilha-comando.png" alt="The remote stopped responding" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>The remote stopped responding</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>This can be caused by a weak battery, internal wear, damaged buttons or lost programming.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/recetor-rf.png" alt="The RF receiver is not responding" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>The RF receiver is not responding</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>Sometimes the problem is not the remote. The gate receiver or its power supply may be the real cause.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/comando-intermitente.png" alt="It only works very close to the gate" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>It only works very close to the gate</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>Weak range is often related to the battery, antenna position, interference or receiver sensitivity.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/central-programacao.png" alt="The remote lost programming" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>The remote lost programming</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>Electrical faults, programming changes or control board work can remove stored remotes from memory.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/garagem-nao-abre.png" alt="The garage does not react" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>The garage does not react</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>The issue can be the remote, but also the control board, safety inputs, photocells or power supply.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/comando-universal.png" alt="A new remote will not pair" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>A new remote will not pair</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>Not every remote is directly compatible. Frequency, coding and receiver type must match the system.</p></div></div></div></section>
<section style={{"padding": "10px 0 70px"}}><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "32px", "padding": "50px 36px", "boxShadow": "0 18px 40px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.06)", "textAlign": "center"}}><h2 style={{"fontSize": "38px", "color": "#08285c", "marginBottom": "18px"}}>Compatible with many common gate systems</h2><p style={{"fontSize": "19px", "lineHeight": "1.75", "color": "#555", "maxWidth": "850px", "margin": "0 auto 34px auto"}}>We can help with remote control diagnosis and programming for several gate automation brands commonly used in Portugal. TecCasa Soluções is an independent technical service.</p><BrandLogoGrid brands={automationBrands} english /><p style={{"fontSize": "16px", "color": "#555", "margin": "24px 0 0"}}>Other brands: contact us to check your equipment.</p></div></section>
<section style={{"padding": "30px 0 20px", "textAlign": "center"}}><div style={{"background": "linear-gradient(180deg,#f5f8fc 0%,#e8eef8 100%)", "borderRadius": "32px", "padding": "55px 35px", "boxShadow": "0 18px 40px rgba(11,44,95,0.08)"}}><h2 style={{"fontSize": "42px", "color": "#08285c", "marginBottom": "18px"}}>Need help with a remote that stopped working?</h2><p style={{"fontSize": "20px", "lineHeight": "1.8", "color": "#555", "maxWidth": "820px", "margin": "0 auto 24px auto"}}>Send a WhatsApp message with a photo of the remote and, if possible, the gate motor or control board. This helps us understand whether programming, replacement or receiver diagnosis is needed.</p><p style={{"fontSize": "16px", "lineHeight": "1.7", "color": "#666", "maxWidth": "760px", "margin": "0 auto 34px auto"}}>For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.</p><div data-contact-actions="true" style={{"display": "flex", "justifyContent": "center", "gap": "16px", "flexWrap": "wrap"}}><a data-contact-button="whatsapp" href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20help%20with%20a%20gate%20remote%20control%20that%20is%20not%20working.%0A%0ALocation%3A%0ABrand%2Fmodel%20%28if%20known%29%3A%0AWhat%20happens%3A" target="_blank" rel="noopener noreferrer" style={{"background": "#25D366", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "textDecoration": "none", "fontWeight": "bold", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(37,211,102,.20)"}}>Send WhatsApp message</a><a data-contact-button="secondary" href="tel:+351922021980" style={{"background": "#08285c", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "textDecoration": "none", "fontWeight": "bold", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(8,40,92,.18)"}}>Call +351 922 021 980</a><ConfiguratorButton english /></div></div></section>
<ServiceCoverageNotice english />
<section style={{"padding": "18px 0 10px", "textAlign": "center"}}><div style={{"background": "#f5f8fc", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "22px", "padding": "22px 24px", "boxShadow": "0 10px 26px rgba(11,44,95,0.06)"}}><p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.7", "color": "#555"}}>Before requesting a visit, please check whether your property is within our service area. <a href="/en#service-area" style={{"color": "#08285c", "fontWeight": "bold", "textDecoration": "underline"}}>View TecCasa Soluções service area</a>.</p></div></section>
  </EnglishPageLayout>;
}

const styles = `
.english-page.page{
              font-family: Arial, sans-serif;
              padding: 110px 40px 40px 40px;
              background: #f4f7fb;
              min-height: 100vh;
            }
.english-page .main-card{
              width: min(1200px, calc(100% - 40px));
              margin: auto;
              background: white;
              padding: 50px;
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
              box-sizing: border-box;
            }
.english-page .info-card,.english-page .problem-card,.english-page .brand-card{
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
.english-page .info-card:hover,.english-page .problem-card:hover,.english-page .brand-card:hover{
              transform: translateY(-7px);
              box-shadow: 0 18px 35px rgba(11, 44, 95, 0.13) !important;
            }
.english-page h1,.english-page h2,.english-page footer,.english-page section{;
            }
@media (max-width: 768px){.english-page.page{
                width: 100% !important;
                max-width: 100% !important;
                padding: 95px 6px 10px 6px !important;
                box-sizing: border-box !important;
                overflow-x: hidden !important;
              }
.english-page .main-card{
                width: 100% !important;
                max-width: 100% !important;
                padding: 12px !important;
                margin: 0 auto !important;
                border-radius: 16px !important;
                box-sizing: border-box !important;
                overflow-x: hidden !important;
              }
.english-page section{
                width: 100% !important;
                max-width: 100% !important;
                padding: 28px 0 !important;
                box-sizing: border-box !important;
                overflow: visible !important;
              }
.english-page section > div{
                max-width: 100% !important;
                box-sizing: border-box !important;
              }
.english-page .hero-remote-fault{
                display: flex !important;
                flex-direction: column !important;
                gap: 26px !important;
                padding: 30px 0 34px 0 !important;
                text-align: center !important;
                overflow: visible !important;
              }
.english-page .hero-remote-fault > div{
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }
.english-page .hero-remote-fault h1{
                font-size: 30px !important;
                line-height: 1.14 !important;
                text-align: center !important;
                margin: 0 auto 18px auto !important;
                max-width: 100% !important;
              }
.english-page .hero-remote-fault p{
                font-size: 16px !important;
                line-height: 1.6 !important;
                text-align: center !important;
                margin: 0 auto 22px auto !important;
                max-width: 100% !important;
              }
.english-page .hero-remote-fault a{
                display: block !important;
                width: 100% !important;
                max-width: none !important;
                margin: 0 auto !important;
                text-align: center !important;
                box-sizing: border-box !important;
                padding: 15px 18px !important;
                font-size: 16px !important;
              }
.english-page .hero-remote-fault img{
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                border-radius: 22px !important;
                margin: 0 auto !important;
                display: block !important;
              }
.english-page .diagnosis-grid,.english-page .problems-grid,.english-page .brands-grid{
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                width: 100% !important;
                max-width: 100% !important;
                justify-items: stretch !important;
                align-items: stretch !important;
                box-sizing: border-box !important;
              }
.english-page .diagnosis-grid > *,.english-page .problems-grid > *,.english-page .brands-grid > *{
                width: 100% !important;
                max-width: none !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                box-sizing: border-box !important;
              }
.english-page h1{
                font-size: 30px !important;
                line-height: 1.16 !important;
              }
.english-page h2{
                font-size: 27px !important;
                line-height: 1.2 !important;
                text-align: center !important;
              }
.english-page h3{
                font-size: 22px !important;
                line-height: 1.25 !important;
              }
.english-page p{
                font-size: 16px !important;
                line-height: 1.6 !important;
              }
.english-page img{
                max-width: 100% !important;
                height: auto !important;
              }
.english-page footer{
                padding: 35px 18px !important;
              }
.english-page a[href*="wa.me"][style*="fixed"]{
                right: 12px !important;
                bottom: 12px !important;
                padding: 12px 15px !important;
                font-size: 15px !important;
                max-width: calc(100vw - 24px) !important;
                box-sizing: border-box !important;
              }}
@media (hover: none) and (pointer: coarse){.english-page *{;
              }
.english-page a[href*="wa.me"][style*="fixed"]{;
                transform: none !important;
              }}
`;
