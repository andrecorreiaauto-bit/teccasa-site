import EnglishPageLayout from "./PageLayout";
import ServiceCoverageNotice from "../ServiceCoverageNotice";
import CoverageMap from "../CoverageMap";
import ConfiguratorButton from "../ConfiguratorButton";
import BrandLogoGrid from "../BrandLogoGrid";
import { automationBrands } from "../../lib/brand-logos";
import { CONFIGURATOR_IS_NEW } from "../../lib/configurator.mjs";

const page = {
  "id": "garage-fault",
  "route": "/en/garage-door-motor-repair",
  "ptRoute": "/reparacao-portoes",
  "title": "Garage Door Motor Repair in Lisbon | TecCasa Soluções",
  "description": "Garage door motor repair in Lisbon for residential and holiday properties. Diagnosis for motors, remotes, receivers, control boards and door movement issues.",
  "message": "Hello, I would like help with a garage door motor.\n\nLocation:\nBrand/model (if known):\nWhat happens:",
  "wrapper": "page",
  "questions": []
};

export default function GarageMotorFault() {
  return <EnglishPageLayout page={page} styles={styles}>
<section style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(320px,1fr))", "gap": "50px", "alignItems": "center", "padding": "70px 0"}} className="hero-garage-motor"><div><div style={{"display": "inline-block", "background": "#eef3fa", "color": "#08285c", "padding": "8px 14px", "borderRadius": "999px", "fontSize": "14px", "fontWeight": "700", "boxShadow": "0 6px 16px rgba(11,44,95,0.08)", "marginBottom": "20px"}}>Residential garage door motor diagnosis</div><h1 style={{"fontSize": "clamp(40px,5vw,56px)", "lineHeight": "1.05", "marginBottom": "24px", "color": "#08285c", "fontWeight": "900"}}>Garage door motor repair in Lisbon</h1><p style={{"fontSize": "21px", "lineHeight": "1.8", "color": "#444", "maxWidth": "710px", "marginBottom": "18px"}}>Diagnosis and repair support for residential garage door motors, including motors that do not respond, make noise without moving, stop halfway or only work intermittently.</p><p style={{"fontSize": "17px", "lineHeight": "1.75", "color": "#555", "maxWidth": "700px", "marginBottom": "18px"}}>Useful for homeowners, holiday properties and residential garages in the Lisbon area where reliable garage access matters. Send a short video of the door and motor whenever possible.</p><p style={{"fontSize": "16px", "lineHeight": "1.7", "color": "#666", "maxWidth": "700px", "marginBottom": "30px"}}>For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.</p><div data-contact-actions="true" style={{"display": "flex", "gap": "14px", "flexWrap": "wrap"}}><a data-contact-button="whatsapp" href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20help%20with%20a%20garage%20door%20motor.%0A%0ALocation%3A%0ABrand%2Fmodel%20%28if%20known%29%3A%0AWhat%20happens%3A" target="_blank" rel="noopener noreferrer" style={{"display": "inline-block", "background": "#25D366", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "fontWeight": "bold", "textDecoration": "none", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(37,211,102,0.18)"}}>Send garage video</a><a href="#common-faults" style={{"display": "inline-block", "background": "#08285c", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "fontWeight": "bold", "textDecoration": "none", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(8,40,92,0.18)"}}>See common faults</a></div></div><div style={{"display": "flex", "justifyContent": "center"}}><img src="/garagem-nao-abre.png" alt="Garage door motor repair" style={{"width": "100%", "maxWidth": "600px", "borderRadius": "28px", "boxShadow": "0 25px 60px rgba(11,44,95,0.18)", "objectFit": "cover"}} fetchPriority="high" /></div></section>
<section style={{"marginTop": "70px"}}><h2 style={{"color": "#08285c", "fontSize": "42px", "marginBottom": "18px", "textAlign": "center"}}>Before replacing the motor, check the door</h2><p style={{"textAlign": "center", "maxWidth": "860px", "margin": "0 auto 50px auto", "color": "#555", "fontSize": "20px", "lineHeight": "1.7"}}>A garage motor can fail because of electrical issues, programming or worn parts, but it can also struggle because the garage door itself is heavy, blocked or unbalanced.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "24px"}} className="diagnosis-grid"><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>📸</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Send a short video</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>A short video of the motor, rail and door movement helps identify whether the issue is electrical, mechanical or programming-related.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>🔎</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Check the symptom</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>We look at what the motor does: no response, noise without movement, stopping halfway, reversing or only working sometimes.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>⚙️</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Assess the garage door</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>A motor fault can be caused by a heavy, unbalanced or blocked garage door. The door movement must be checked before replacing parts.</p></div><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "24px", "padding": "34px 28px", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.05)"}} className="info-card"><div style={{"fontSize": "44px", "marginBottom": "20px"}}>💬</div><h3 style={{"color": "#08285c", "fontSize": "24px", "marginBottom": "14px"}}>Clear repair path</h3><p style={{"color": "#555", "lineHeight": "1.7", "margin": "0", "fontSize": "17px"}}>You get a practical explanation before adjustment, repair, receiver work or motor replacement is recommended.</p></div></div></section>
<section id="common-faults" style={{"padding": "70px 0 70px"}}><h2 style={{"fontSize": "38px", "color": "#08285c", "marginBottom": "16px", "textAlign": "center"}}>Common garage door motor faults</h2><p style={{"fontSize": "19px", "lineHeight": "1.7", "color": "#555", "maxWidth": "780px", "margin": "0 auto 45px auto", "textAlign": "center"}}>These symptoms help narrow down the problem. The motor, remote, receiver, control board and door movement may all need to be considered.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "22px"}} className="faults-grid"><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="fault-card"><img src="/garagem-nao-abre.png" alt="Garage door does not open" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>Garage door does not open</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>The issue may be the motor, power supply, remote control, receiver, control board or the garage door mechanism.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="fault-card"><img src="/motor-portao.png" alt="Motor makes noise but does not move" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>Motor makes noise but does not move</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>This can point to a mechanical blockage, worn transmission, release problem or a motor working against too much resistance.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="fault-card"><img src="/central-programacao.png" alt="Motor stops halfway" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>Motor stops halfway</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>Travel limits, force settings, safety inputs or programming can cause the garage door to stop before completing the movement.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="fault-card"><img src="/portao-nao-responde.png" alt="Motor does not respond" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>Motor does not respond</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>If the remote works but the motor does not react, the fault may be in the receiver, board, power supply or safety circuit.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="fault-card"><img src="/comando-intermitente.png" alt="Works only sometimes" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>Works only sometimes</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>Intermittent faults may be related to remote signal, receiver range, wiring, humidity or control board instability.</p></div></div><div style={{"background": "#eef3fa", "borderRadius": "24px", "overflow": "hidden", "boxShadow": "0 12px 30px rgba(11,44,95,0.08)"}} className="fault-card"><img src="/sistema-antigo-comandos.png" alt="Old garage motor" style={{"width": "100%", "height": "190px", "objectFit": "cover", "display": "block"}} loading="lazy" /><div style={{"padding": "24px"}}><h3 style={{"color": "#08285c", "fontSize": "22px", "marginBottom": "12px"}}>Old garage motor</h3><p style={{"color": "#444", "lineHeight": "1.7", "margin": "0"}}>Older systems may need diagnosis, compatible receiver work or replacement if spare parts and remotes are no longer practical.</p></div></div></div></section>
<section style={{"padding": "10px 0 70px"}} className="brand-support"><div style={{"background": "#f5f8fc", "borderRadius": "32px", "padding": "48px 36px", "boxShadow": "0 18px 40px rgba(11,44,95,0.07)", "border": "1px solid rgba(11,44,95,0.06)", "textAlign": "center"}}><h2 style={{"fontSize": "38px", "color": "#08285c", "marginBottom": "18px"}}>Common garage and gate automation brands</h2><p style={{"fontSize": "19px", "lineHeight": "1.75", "color": "#555", "maxWidth": "850px", "margin": "0 auto 38px auto"}}>Garage door motors and automatic gate systems use different remotes, receivers, control boards and safety settings. We can help identify the system and understand whether repair, adjustment or replacement makes sense.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(6,1fr)", "gap": "16px", "marginBottom": "32px"}} className="marcas-grid"><div aria-label="Nice" title="Nice" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/nice-logo.png" alt="Nice" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "70px", "maxWidth": "95%", "transform": "scale(1.45)"}} loading="lazy" /></div><div aria-label="BFT" title="BFT" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/bft-logo.png" alt="BFT" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "62px", "maxWidth": "90%", "transform": "scale(1.35)"}} loading="lazy" /></div><div aria-label="Motorline" title="Motorline" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/motorline-logo.png" alt="Motorline" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "58px", "maxWidth": "98%", "transform": "scale(1.25)"}} loading="lazy" /></div><div aria-label="FAAC" title="FAAC" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/faac-logo.png" alt="FAAC" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "54px", "maxWidth": "88%"}} loading="lazy" /></div><div aria-label="CAME" title="CAME" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/came-logo.png" alt="CAME" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "52px", "maxWidth": "88%"}} loading="lazy" /></div><div aria-label="Hörmann" title="Hörmann" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/hormann-logo.png" alt="Hörmann" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "58px", "maxWidth": "95%", "transform": "scale(1.45)"}} loading="lazy" /></div><div aria-label="Roger Technology" title="Roger Technology" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/roger-technology-logo.png" alt="Roger Technology" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "58px", "maxWidth": "92%"}} loading="lazy" /></div><div aria-label="DEA" title="DEA" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/dea-logo.png" alt="DEA" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "56px", "maxWidth": "82%"}} loading="lazy" /></div><div aria-label="Somfy" title="Somfy" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/somfy-logo.png" alt="Somfy" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "50px", "maxWidth": "88%"}} loading="lazy" /></div><div aria-label="Beninca" title="Beninca" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/beninca-logo.png" alt="Beninca" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "54px", "maxWidth": "92%"}} loading="lazy" /></div><div aria-label="V2" title="V2" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/v2-logo.png" alt="V2" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "70px", "maxWidth": "95%", "transform": "scale(2.05)"}} loading="lazy" /></div><div aria-label="Ditec" title="Ditec" style={{"background": "linear-gradient(180deg,#ffffff,#e6edf7)", "border": "1px solid rgba(11,44,95,0.08)", "borderRadius": "18px", "padding": "18px 12px", "textAlign": "center", "boxShadow": "0 8px 20px rgba(0,0,0,0.05)", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "112px", "transition": "transform .25s ease, box-shadow .25s ease, background .25s ease", "overflow": "visible"}} className="cartao-marca"><img src="/ditec-logo.png" alt="Ditec" style={{"width": "auto", "height": "auto", "objectFit": "contain", "display": "block", "maxHeight": "60px", "maxWidth": "82%", "transform": "scale(1.32)"}} loading="lazy" /></div></div><p style={{"fontSize": "17px", "lineHeight": "1.7", "color": "#666", "maxWidth": "780px", "margin": "0 auto"}}>TecCasa Soluções is an independent technical service and does not represent these brands officially.</p></div></section>
<section style={{"padding": "10px 0 70px"}}><div style={{"background": "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)", "borderRadius": "32px", "padding": "50px 36px", "boxShadow": "0 18px 40px rgba(11,44,95,0.08)", "border": "1px solid rgba(11,44,95,0.06)", "textAlign": "center"}}><h2 style={{"fontSize": "38px", "color": "#08285c", "marginBottom": "18px"}}>Useful when garage access matters</h2><p style={{"fontSize": "19px", "lineHeight": "1.75", "color": "#555", "maxWidth": "850px", "margin": "0 auto 34px auto"}}>A faulty garage door motor can block parking, storage or property access. Clear video and photos make it easier to decide whether the next step is remote support, diagnosis, adjustment or replacement.</p><div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "18px", "textAlign": "left"}} className="cases-grid"><div style={{"background": "#eef3fa", "borderRadius": "20px", "padding": "24px", "boxShadow": "0 10px 26px rgba(11,44,95,0.06)"}} className="info-card"><h3 style={{"marginTop": "0", "marginBottom": "10px", "color": "#08285c", "fontSize": "22px"}}>Holiday homes</h3><p style={{"margin": "0", "color": "#555", "lineHeight": "1.65"}}>Useful when the garage door fails while guests, family or a property manager need access.</p></div><div style={{"background": "#eef3fa", "borderRadius": "20px", "padding": "24px", "boxShadow": "0 10px 26px rgba(11,44,95,0.06)"}} className="info-card"><h3 style={{"marginTop": "0", "marginBottom": "10px", "color": "#08285c", "fontSize": "22px"}}>Residential garages</h3><p style={{"margin": "0", "color": "#555", "lineHeight": "1.65"}}>Support for private homes and small residential garages with sectional or up-and-over doors.</p></div><div style={{"background": "#eef3fa", "borderRadius": "20px", "padding": "24px", "boxShadow": "0 10px 26px rgba(11,44,95,0.06)"}} className="info-card"><h3 style={{"marginTop": "0", "marginBottom": "10px", "color": "#08285c", "fontSize": "22px"}}>Access problems</h3><p style={{"margin": "0", "color": "#555", "lineHeight": "1.65"}}>When the garage is the main storage or parking access, a clear diagnosis helps avoid unnecessary delays.</p></div></div></div></section>
<section style={{"padding": "30px 0 20px", "textAlign": "center"}}><div style={{"background": "linear-gradient(180deg,#f5f8fc 0%,#e8eef8 100%)", "borderRadius": "32px", "padding": "55px 35px", "boxShadow": "0 18px 40px rgba(11,44,95,0.08)"}}><h2 style={{"fontSize": "42px", "color": "#08285c", "marginBottom": "18px"}}>Need help with a garage door motor?</h2><p style={{"fontSize": "20px", "lineHeight": "1.8", "color": "#555", "maxWidth": "820px", "margin": "0 auto 24px auto"}}>Send a WhatsApp message with a short video of the garage door trying to open or close. Include the motor, rail and any lights or sounds if possible.</p><p style={{"fontSize": "16px", "lineHeight": "1.7", "color": "#666", "maxWidth": "760px", "margin": "0 auto 34px auto"}}>For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.</p><div data-contact-actions="true" style={{"display": "flex", "justifyContent": "center", "gap": "16px", "flexWrap": "wrap"}}><a data-contact-button="whatsapp" href="https://wa.me/351922021980?text=Hello%2C%20I%20would%20like%20help%20with%20a%20garage%20door%20motor.%0A%0ALocation%3A%0ABrand%2Fmodel%20%28if%20known%29%3A%0AWhat%20happens%3A" target="_blank" rel="noopener noreferrer" style={{"background": "#25D366", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "textDecoration": "none", "fontWeight": "bold", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(37,211,102,.20)"}}>Send WhatsApp message</a><a data-contact-button="secondary" href="tel:+351922021980" style={{"background": "#08285c", "color": "white", "padding": "17px 28px", "borderRadius": "16px", "textDecoration": "none", "fontWeight": "bold", "fontSize": "17px", "boxShadow": "0 10px 25px rgba(8,40,92,.18)"}}>Call +351 922 021 980</a><ConfiguratorButton english /></div></div></section>
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
.english-page .info-card,.english-page .fault-card,.english-page .cartao-marca{
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
.english-page .info-card:hover,.english-page .fault-card:hover,.english-page .cartao-marca:hover{
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
.english-page .hero-garage-motor{
                display: flex !important;
                flex-direction: column !important;
                gap: 26px !important;
                padding: 30px 0 34px 0 !important;
                text-align: center !important;
                overflow: visible !important;
              }
.english-page .hero-garage-motor > div{
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }
.english-page .hero-garage-motor h1{
                font-size: 30px !important;
                line-height: 1.14 !important;
                text-align: center !important;
                margin: 0 auto 18px auto !important;
                max-width: 100% !important;
              }
.english-page .hero-garage-motor p{
                font-size: 16px !important;
                line-height: 1.6 !important;
                text-align: center !important;
                margin: 0 auto 22px auto !important;
                max-width: 100% !important;
              }
.english-page .hero-garage-motor a{
                display: block !important;
                width: 100% !important;
                max-width: none !important;
                margin: 0 auto !important;
                text-align: center !important;
                box-sizing: border-box !important;
                padding: 15px 18px !important;
                font-size: 16px !important;
              }
.english-page .hero-garage-motor img{
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                border-radius: 22px !important;
                margin: 0 auto !important;
                display: block !important;
              }
.english-page .diagnosis-grid,.english-page .faults-grid,.english-page .cases-grid{
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                width: 100% !important;
                max-width: 100% !important;
                justify-items: stretch !important;
                align-items: stretch !important;
                box-sizing: border-box !important;
              }
.english-page .diagnosis-grid > *,.english-page .faults-grid > *,.english-page .cases-grid > *{
                width: 100% !important;
                max-width: none !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                box-sizing: border-box !important;
              }
.english-page .brand-support{
                padding: 40px 6px 55px 6px !important;
                scroll-margin-top: 130px !important;
              }
.english-page .brand-support .marcas-grid{
                display: grid !important;
                grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                gap: 14px !important;
                width: 100% !important;
                max-width: 100% !important;
                margin-top: 26px !important;
                margin-bottom: 20px !important;
                box-sizing: border-box !important;
              }
.english-page .brand-support .cartao-marca{
                height: 106px !important;
                min-height: 106px !important;
                padding: 10px 8px !important;
                border-radius: 16px !important;
                overflow: hidden !important;
                box-sizing: border-box !important;
              }
.english-page .brand-support .cartao-marca img{
                transform: none !important;
                width: auto !important;
                height: auto !important;
                object-fit: contain !important;
                display: block !important;
              }
.english-page .brand-support .cartao-marca:nth-child(1) img{
                max-height: 72px !important;
                max-width: 82% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(2) img{
                max-height: 64px !important;
                max-width: 86% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(3) img{
                max-height: 52px !important;
                max-width: 92% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(4) img,.english-page .brand-support .cartao-marca:nth-child(5) img{
                max-height: 56px !important;
                max-width: 90% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(6) img{
                max-height: 48px !important;
                max-width: 92% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(7) img{
                max-height: 56px !important;
                max-width: 92% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(8) img{
                max-height: 68px !important;
                max-width: 82% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(9) img{
                max-height: 52px !important;
                max-width: 88% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(10) img{
                max-height: 56px !important;
                max-width: 92% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(11) img{
                max-height: 72px !important;
                max-width: 80% !important;
              }
.english-page .brand-support .cartao-marca:nth-child(12) img{
                max-height: 66px !important;
                max-width: 88% !important;
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
