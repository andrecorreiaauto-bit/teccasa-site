import EnglishPageLayout from "./PageLayout";
import ServiceCoverageNotice from "../ServiceCoverageNotice";
import CoverageMap from "../CoverageMap";
import ConfiguratorButton from "../ConfiguratorButton";
import BrandLogoGrid from "../BrandLogoGrid";
import { automationBrands } from "../../lib/brand-logos";
import { CONFIGURATOR_IS_NEW } from "../../lib/configurator.mjs";

const page = {
  "id": "remotes",
  "route": "/en/garage-remote-controls-lisbon",
  "ptRoute": "/comandos-garagem",
  "title": "Garage Remote Controls in Lisbon | TecCasa Soluções",
  "description": "Garage and automatic gate remote control help in Lisbon. Programming, replacement, compatibility checks and receiver solutions for residential properties.",
  "message": "Hello, I would like help with a gate or garage remote control.\n\nLocation:\nRemote and receiver brand/model (if known):\nWhat I need or what happens:",
  "wrapper": "page",
  "questions": [],
  "pair": true
};

export default function Remotes() {
  return <EnglishPageLayout page={page} styles={styles}>
<section style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(320px,1fr))", "gap": "50px", "alignItems": "center", "padding": "70px 0"}} className="hero-remotes"><div><div style={{"display": "inline-block", "background": "#eef3fa", "color": "#08285c", "padding": "8px 14px", "borderRadius": "999px", "fontSize": "14px", "fontWeight": "700", "boxShadow": "0 6px 16px rgba(11,44,95,0.08)", "marginBottom": "20px"}}>Remote controls for gates and garages</div><h1 style={{"fontSize": "clamp(42px,5vw,58px)", "lineHeight": "1.05", "marginBottom": "26px", "color": "#08285c", "fontWeight": "900"}}>Garage and gate remote control help in Lisbon</h1><p style={{"fontSize": "22px", "lineHeight": "1.8", "color": "#444", "maxWidth": "720px", "marginBottom": "18px"}}>Programming, replacement and troubleshooting for automatic gate and garage remote controls. Useful for residents, holiday homes, family access, guests and property managers in the Lisbon area.</p><p style={{"fontSize": "17px", "lineHeight": "1.75", "color": "#555", "maxWidth": "700px", "marginBottom": "18px"}}>Send a photo of the remote, the motor brand or the control board when possible. It helps us check whether programming, replacement or a compatible receiver is the right approach.</p><p style={{"fontSize": "16px", "lineHeight": "1.7", "color": "#666", "maxWidth": "700px", "marginBottom": "30px"}}>For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.</p><div data-contact-actions="true" style={{"display": "flex", "gap": "14px", "flexWrap": "wrap"}}><a data-contact-button="whatsapp" href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20help%20with%20a%20gate%20or%20garage%20remote%20control.%0A%0ALocation%3A%0ARemote%20and%20receiver%20brand%2Fmodel%20%28if%20known%29%3A%0AWhat%20I%20need%20or%20what%20happens%3A" rel="noopener noreferrer" style={{"display": "inline-block", "background": "#25D366", "color": "white", "padding": "18px 30px", "borderRadius": "16px", "fontWeight": "bold", "textDecoration": "none", "fontSize": "18px", "boxShadow": "0 10px 25px rgba(37,211,102,0.18)"}} target="_blank">Send remote photo</a><a href="#common-problems" style={{"display": "inline-block", "background": "#08285c", "color": "white", "padding": "18px 30px", "borderRadius": "16px", "fontWeight": "bold", "textDecoration": "none", "fontSize": "18px", "boxShadow": "0 10px 25px rgba(8,40,92,0.18)"}}>See common issues</a></div></div><div style={{"display": "flex", "justifyContent": "center"}}><img src="/comando-portao.png" alt="Garage and automatic gate remote controls" style={{"width": "100%", "maxWidth": "620px", "borderRadius": "32px", "boxShadow": "0 25px 60px rgba(11,44,95,0.18)", "objectFit": "cover"}} fetchPriority="high" /></div></section>
<section style={{"marginTop": "70px"}}><h2 style={{"color": "#08285c", "fontSize": "42px", "marginBottom": "18px", "textAlign": "center"}}>Practical remote control support</h2><p style={{"textAlign": "center", "maxWidth": "850px", "margin": "0 auto 50px auto", "color": "#555", "fontSize": "20px", "lineHeight": "1.7"}}>Remote control issues are not always solved by copying a new remote. The problem can be the battery, the remote, the receiver, the antenna, the control board or the automation system itself.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "24px"}} className="support-grid"><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>📸</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Send a photo first</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>A photo of the remote, the brand label or the motor/control board helps us understand compatibility before a visit.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>🔑</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Extra remotes</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>Useful for owners, family members, guests, tenants, neighbours or property managers who need reliable access.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>📡</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Receiver options</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>When remotes are discontinued or the signal is poor, a compatible receiver can often recover the system.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>🧭</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Practical guidance</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>We explain whether the best next step is battery check, programming, replacement or receiver installation.</p></div></div></section>
<section id="common-problems" style={{"padding": "70px 20px 70px", "maxWidth": "1100px", "margin": "0 auto"}}><h2 style={{"fontSize": "34px", "color": "#08285c", "marginBottom": "12px", "textAlign": "center"}}>Common remote control issues</h2><p style={{"fontSize": "18px", "color": "#555", "maxWidth": "760px", "margin": "0 auto 35px", "textAlign": "center", "lineHeight": "1.6"}}>These are frequent problems with garage and automatic gate remotes. The remote is sometimes the cause, but the receiver or control board can also be involved.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "20px"}} className="problems-grid"><div style={{"background": "#e6edf7", "borderRadius": "22px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/comando-sem-resposta.png" alt="Remote not responding" style={{"width": "100%", "height": "180px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "21px", "marginBottom": "12px"}}>Remote not responding</h3><p style={{"color": "#333", "lineHeight": "1.6", "margin": "0"}}>If the LED does not light up or the gate does not react, the issue may be the battery, the remote itself or the receiver.</p></div></div><div style={{"background": "#e6edf7", "borderRadius": "22px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/alcance-fraco-comando.png" alt="Very short range" style={{"width": "100%", "height": "180px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "21px", "marginBottom": "12px"}}>Very short range</h3><p style={{"color": "#333", "lineHeight": "1.6", "margin": "0"}}>If it only works very close to the gate, the problem may be interference, antenna position or receiver sensitivity.</p></div></div><div style={{"background": "#e6edf7", "borderRadius": "22px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/comando-desprogramado.png" alt="Remote lost programming" style={{"width": "100%", "height": "180px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "21px", "marginBottom": "12px"}}>Remote lost programming</h3><p style={{"color": "#333", "lineHeight": "1.6", "margin": "0"}}>Some systems can lose programming after electrical faults, control board changes or incorrect configuration.</p></div></div><div style={{"background": "#e6edf7", "borderRadius": "22px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/comando-danificado.png" alt="Damaged remote" style={{"width": "100%", "height": "180px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "21px", "marginBottom": "12px"}}>Damaged remote</h3><p style={{"color": "#333", "lineHeight": "1.6", "margin": "0"}}>Worn buttons, humidity, drops or internal contact damage can prevent the remote from working correctly.</p></div></div><div style={{"background": "#e6edf7", "borderRadius": "22px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/portao-nao-responde.png" alt="Gate does not respond" style={{"width": "100%", "height": "180px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "21px", "marginBottom": "12px"}}>Gate does not respond</h3><p style={{"color": "#333", "lineHeight": "1.6", "margin": "0"}}>The fault may be in the remote, but also in the control board, power supply, photocells or safety inputs.</p></div></div><div style={{"background": "#e6edf7", "borderRadius": "22px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="problem-card"><img src="/sistema-antigo-comandos.png" alt="Old remote system" style={{"width": "100%", "height": "180px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "21px", "marginBottom": "12px"}}>Old remote system</h3><p style={{"color": "#333", "lineHeight": "1.6", "margin": "0"}}>When original remotes are no longer available, a compatible receiver or universal remote solution may be possible.</p></div></div></div></section>
<section style={{"padding": "10px 0 70px"}}><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "32px", "padding": "50px 36px", "boxShadow": "0 18px 40px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.06)", "textAlign": "center"}}><h2 style={{"fontSize": "38px", "color": "#08285c", "marginBottom": "18px"}}>Brand-specific and universal solutions</h2><p style={{"fontSize": "19px", "lineHeight": "1.75", "color": "#555", "maxWidth": "850px", "margin": "0 auto 34px auto"}}>Some systems need a compatible remote from the same brand family. Older or discontinued systems may be recovered with a universal receiver, avoiding the need to replace the full gate automation system.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(320px,1fr))", "gap": "24px", "textAlign": "left"}} className="solution-grid"><div style={{"background": "#eef3fa", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="info-card"><div style={{"fontSize": "46px", "marginBottom": "20px"}}>🔒</div><h3 style={{"color": "#08285c", "fontSize": "28px", "marginBottom": "16px"}}>Compatible remotes</h3><p style={{"color": "#555", "lineHeight": "1.7", "fontSize": "17px", "marginBottom": "20px"}}>Original or compatible remote controls may be used depending on the system, frequency and coding method.</p><div style={{"display": "flex", "flexWrap": "wrap", "gap": "10px"}}><div style={{"background": "#e9f0f9", "padding": "10px 14px", "borderRadius": "999px", "fontWeight": "bold", "color": "#08285c", "fontSize": "14px"}}>Nice</div><div style={{"background": "#e9f0f9", "padding": "10px 14px", "borderRadius": "999px", "fontWeight": "bold", "color": "#08285c", "fontSize": "14px"}}>BFT</div><div style={{"background": "#e9f0f9", "padding": "10px 14px", "borderRadius": "999px", "fontWeight": "bold", "color": "#08285c", "fontSize": "14px"}}>FAAC</div><div style={{"background": "#e9f0f9", "padding": "10px 14px", "borderRadius": "999px", "fontWeight": "bold", "color": "#08285c", "fontSize": "14px"}}>Motorline</div><div style={{"background": "#e9f0f9", "padding": "10px 14px", "borderRadius": "999px", "fontWeight": "bold", "color": "#08285c", "fontSize": "14px"}}>CAME</div><div style={{"background": "#e9f0f9", "padding": "10px 14px", "borderRadius": "999px", "fontWeight": "bold", "color": "#08285c", "fontSize": "14px"}}>Hörmann</div><div style={{"padding": "10px 14px", "fontSize": "14px", "color": "#555"}}>and many others</div></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="info-card"><div style={{"fontSize": "46px", "marginBottom": "20px"}}>📡</div><h3 style={{"color": "#08285c", "fontSize": "28px", "marginBottom": "16px"}}>Universal receivers</h3><p style={{"color": "#555", "lineHeight": "1.7", "fontSize": "17px", "marginBottom": "20px"}}>Universal receivers can help recover old systems, replace discontinued remotes or improve access reliability without changing the full automation.</p><div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "marginTop": "15px"}}><div style={{"display": "flex", "alignItems": "center", "gap": "10px", "color": "#08285c", "fontWeight": "bold"}}><span>✔</span><span>Universal RF receivers</span></div><div style={{"display": "flex", "alignItems": "center", "gap": "10px", "color": "#08285c", "fontWeight": "bold"}}><span>✔</span><span>Multi-brand compatibility</span></div><div style={{"display": "flex", "alignItems": "center", "gap": "10px", "color": "#08285c", "fontWeight": "bold"}}><span>✔</span><span>Old system recovery</span></div><div style={{"display": "flex", "alignItems": "center", "gap": "10px", "color": "#08285c", "fontWeight": "bold"}}><span>✔</span><span>Extra remotes for property access</span></div><div style={{"display": "flex", "alignItems": "center", "gap": "10px", "color": "#08285c", "fontWeight": "bold"}}><span>✔</span><span>Better range and stability</span></div></div></div></div></div></section>
<section style={{"padding": "30px 0 20px", "textAlign": "center"}}><div style={{"background": "linear-gradient(180deg,#f5f8fc 0%,#e8eef8 100%)", "borderRadius": "32px", "padding": "55px 35px", "boxShadow": "0 18px 40px rgba(11,44,95,0.08)"}}><h2 style={{"fontSize": "42px", "color": "#08285c", "marginBottom": "18px"}}>Need an extra or replacement remote?</h2><p style={{"fontSize": "20px", "lineHeight": "1.8", "color": "#555", "maxWidth": "820px", "margin": "0 auto 24px auto"}}>Send us a WhatsApp message with a photo of your remote, motor or control board. If you are abroad or coordinating access for a property in Portugal, message is usually the best first step.</p><p style={{"fontSize": "16px", "lineHeight": "1.7", "color": "#666", "maxWidth": "760px", "margin": "0 auto 34px auto"}}>For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.</p><div data-contact-actions="true" style={{"display": "flex", "justifyContent": "center", "gap": "16px", "flexWrap": "wrap"}}><a data-contact-button="whatsapp" href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20help%20with%20a%20gate%20or%20garage%20remote%20control.%0A%0ALocation%3A%0ARemote%20and%20receiver%20brand%2Fmodel%20%28if%20known%29%3A%0AWhat%20I%20need%20or%20what%20happens%3A" rel="noopener noreferrer" style={{"background": "#25D366", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "textDecoration": "none", "fontWeight": "bold", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(37,211,102,.20)"}} target="_blank">Send WhatsApp message</a><a data-contact-button="secondary" href="tel:+351922021980" style={{"background": "#08285c", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "textDecoration": "none", "fontWeight": "bold", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(8,40,92,.18)"}}>Call +351 922 021 980</a><ConfiguratorButton english /></div></div></section>
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
.english-page .info-card,.english-page .problem-card{
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
.english-page .info-card:hover,.english-page .problem-card:hover{
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
.english-page .hero-remotes{
                display: flex !important;
                flex-direction: column !important;
                gap: 26px !important;
                padding: 30px 0 34px 0 !important;
                text-align: center !important;
                overflow: visible !important;
              }
.english-page .hero-remotes > div{
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }
.english-page .hero-remotes h1{
                font-size: 30px !important;
                line-height: 1.14 !important;
                text-align: center !important;
                margin: 0 auto 18px auto !important;
                max-width: 100% !important;
              }
.english-page .hero-remotes p{
                font-size: 16px !important;
                line-height: 1.6 !important;
                text-align: center !important;
                margin: 0 auto 22px auto !important;
                max-width: 100% !important;
              }
.english-page .hero-remotes a{
                display: block !important;
                width: 100% !important;
                max-width: none !important;
                margin: 0 auto !important;
                text-align: center !important;
                box-sizing: border-box !important;
                padding: 15px 18px !important;
                font-size: 16px !important;
              }
.english-page .hero-remotes img{
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                border-radius: 22px !important;
                margin: 0 auto !important;
                display: block !important;
              }
.english-page .support-grid,.english-page .problems-grid,.english-page .solution-grid{
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                width: 100% !important;
                max-width: 100% !important;
                justify-items: stretch !important;
                align-items: stretch !important;
                box-sizing: border-box !important;
              }
.english-page .support-grid > *,.english-page .problems-grid > *,.english-page .solution-grid > *{
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
