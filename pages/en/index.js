import { useEffect, useState, useRef } from "react";
import Head from "next/head";
export default function Home() {
 const [logoClicks, setLogoClicks] = useState(0);
 const [showSeoPanel, setShowSeoPanel] = useState(false);
 const [pinInput, setPinInput] = useState("");
 const [menuOpen, setMenuOpen] = useState(false);
 const logoTimer = useRef(null);
 const menuItems = [
  { label:"Home", href:"/en", active:true },

  { label:"Gate Repair", href:"/en/automatic-gate-repair-lisbon", active:true },

  { label:"Gate Installation", href:"/en/automatic-gate-installation-lisbon", active:true },

  { label:"Garage Remotes", href:"/en/garage-remote-controls-lisbon", active:true },

  { label:"Security Cameras", href:"/en/security-cameras-lisbon", active:true },
]
 useEffect(() => {
  if (typeof window === "undefined") return;

  const mapContainer = document.getElementById("mapa-teccasa");

  if (!mapContainer) return;

  const leafletCss = document.createElement("link");
  leafletCss.rel = "stylesheet";
  leafletCss.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
  document.head.appendChild(leafletCss);

  const leafletScript = document.createElement("script");
  leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

  leafletScript.onload = () => {
    const center = [38.84002, -9.10069];

    if (window.teccasaMap) {
      window.teccasaMap.remove();
    }

    const zoom = window.innerWidth < 768 ? 8 : 9;
    const map = window.L.map("mapa-teccasa").setView(center, zoom);
    window.teccasaMap = map;

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    window.L.circle(center, {
      radius: 45000,
      color: "#0b2c5f",
      fillColor: "#0b2c5f",
      fillOpacity: 0.15
    }).addTo(map);
  };

  document.body.appendChild(leafletScript);
}, []);
 
 useEffect(() => {
  if (!menuOpen) return;

  const fecharMenu = () => {
    setMenuOpen(false);
  };

  document.addEventListener("click", fecharMenu);

  return () => {
    document.removeEventListener("click", fecharMenu);
  };
}, [menuOpen]);
  return (
                                                  <>
                                                  <Head>

                                                  <title>
                                                  TecCasa Soluções | Automatic Gates, Repairs and Smart Home in Lisbon
                                                  </title>
                                                  
                                                  <meta
                                                  name="description"
                                                  content="Automatic gate repair, gate automation, garage remotes, smart home solutions and domestic security cameras in Lisbon and surrounding areas."
                                                  />
                                                  
                                                  <meta
                                                  name="keywords"
                                                  content="automatic gates Lisbon,
                                                  automatic gate repair Lisbon,
                                                  gate automation Lisbon,
                                                  garage remotes Lisbon,
                                                  smart home Lisbon,
                                                  security cameras Lisbon,
                                                  electric gate repair,
                                                  TecCasa Soluções"
                                                  />
                                                  
                                                  <meta name="robots" content="noindex, nofollow" />
                                                  
                                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                                  
                                                  <meta property="og:title" content="TecCasa Soluções | Automatic Gates in Lisbon" />
                                                  
                                                  <meta
                                                  property="og:description"
                                                  content="Automatic gate repair, gate automation, garage remotes and smart home solutions in Lisbon and surrounding areas."
                                                  />
                                                  
                                                  <meta 
                                                  name="google-site-verification" 
                                                  content="_Dnes5RL-b6NjpXQVjaV6Nz7AlQFSU4PvvcSTWUKe44" 
                                                  />
                                                  
                                                  <meta
                                                  property="og:image"
                                                  content="https://www.tec-casa.pt/preview.jpg"
                                                  />
                                                  
                                                  <meta
                                                  property="og:url"
                                                  content="https://tec-casa.pt/en"
                                                  />
                                                  
                                                  <meta property="og:type" content="website" />
                                                  
                                                  <link rel="icon" href="/favicon.ico" />
                                                  
                                                  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                                                  
                                                  <link rel="manifest" href="/site.webmanifest" />
                                                  
                                                  <link rel="canonical" href="https://tec-casa.pt/en" />
                                                  
                                                  </Head>
    <div className="page">

<nav style={{
  position:"fixed",
  top:"20px",
  left:"50%",
  transform:"translateX(-50%)",
  zIndex:"1000",
  maxWidth:"1200px",
  width:"min(1200px, calc(100% - 40px))",
  margin:"0 auto 25px auto",
  background:"rgba(255,255,255,0.92)",
  backdropFilter:"blur(10px)",
  border:"1px solid rgba(11,44,95,0.08)",
  borderRadius:"28px",
  padding:"14px 20px",
  boxShadow:"0 10px 30px rgba(11,44,95,0.10)"
}}>

  <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  }}>

    <div
    onClick={() => {
      window.location.href = "/en";
    }}
    style={{
    display:"flex",
    alignItems:"center",
    gap:"10px",
    fontWeight:"bold",
    color:"#08285c",
    fontSize:"20px",
    cursor:"pointer"
    }}
    >
      <img src="/favicon.png" style={{width:"30px"}} />
      TecCasa Soluções
    </div>

    <button
  onClick={(e)=>{
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  }}
      style={{
        background:"none",
        border:"none",
        fontSize:"30px",
        cursor:"pointer",
        color:"#08285c"
       
      }}
      className="menu-button"
    >
      ☰
    </button>

    <div className="desktop-menu" style={{
      display:"none",
      gap:"18px",
      alignItems:"center"
    }}>

     {menuItems
     .filter(item => item.active)
     .map((item,index)=>(
     
     <a
     key={index}
     href={item.href}
     style={{
       color:"#08285c",
       textDecoration:"none",
       fontWeight:"bold",
       fontSize:"16px"
     }}
     >
       {item.label}
     </a>
     
     ))}

      <a
      href="https://wa.me/351922021980"
      target="_blank"
      style={{
        background:"#25D366",
        color:"white",
        padding:"10px 16px",
        borderRadius:"999px",
        textDecoration:"none",
        fontWeight:"bold"
      }}
      >
        WhatsApp
      </a>

    </div>

  </div>

  {menuOpen && (

  <div
    className="mobile-menu"
    onClick={(e)=>e.stopPropagation()}
    style={{
      display:"flex",
      flexDirection:"column",
      gap:"14px",
      marginTop:"22px",
      paddingTop:"18px",
      borderTop:"1px solid rgba(11,44,95,0.08)"
    }}
  >

    {menuItems
    .filter(item => item.active)
    .map((item,index)=>(

    <a
    key={index}
    href={item.href}
    onClick={() => setMenuOpen(false)}
    style={{
      color:"#08285c",
      textDecoration:"none",
      fontWeight:"bold",
      fontSize:"17px",
      padding:"10px 0"
    }}
    >
      {item.label}
    </a>

    ))}

    <a
    href="https://wa.me/351922021980"
    target="_blank"
    onClick={() => setMenuOpen(false)}
    style={{
      background:"#25D366",
      color:"white",
      padding:"14px",
      borderRadius:"14px",
      textDecoration:"none",
      fontWeight:"bold",
      textAlign:"center",
      marginTop:"10px",
      boxShadow:"0 10px 25px rgba(37,211,102,.22)"
    }}
    >
      WhatsApp
    </a>

  </div>

)}
</nav>
      
      <div className="main-card">
        
    <section style={{
    background:"linear-gradient(135deg, #08285c, #0b3f88)",
    color:"white",
    padding:"50px",
    borderRadius:"25px",
    marginBottom:"45px",
    boxShadow:"0 18px 40px rgba(0,0,0,0.18)"
    }}>
    
      <img
      src="/Logo.png"
      style={{
      width:"300px",
      background:"white",
      padding:"15px",
      borderRadius:"18px",
      marginBottom:"30px"
      }}
      />
    
      <h1 style={{
      fontSize:"clamp(30px,6vw,42px)",
      margin:"0 0 15px 0",
      lineHeight:"1.15"
      }}>
      Automatic gates, repairs and smart home support in Lisbon.
      </h1>
    
      <p style={{
      fontSize:"clamp(16px,3vw,20px)",
      color:"#dbeafe",
      maxWidth:"780px",
      lineHeight:"1.5"
      }}>
      TecCasa Soluções provides automatic gate repair, gate automation, garage remote support, smart home solutions and domestic security camera installation in Lisbon and surrounding areas.
      </p>
    
      <div style={{
      display:"flex",
      gap:"15px",
      flexWrap:"wrap",
      marginTop:"30px"
      }}>
    
        <a
        href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20a%20service%20in%20Lisbon."
        target="_blank"
        style={{
        background:"white",
        color:"#08285c",
        padding:"15px 24px",
        borderRadius:"12px",
        textDecoration:"none",
        fontWeight:"bold"
        }}
        >
        Send WhatsApp message
        </a>
    
        <a
        href="tel:+351922021980"
        style={{
        background:"transparent",
        color:"white",
        padding:"15px 24px",
        borderRadius:"12px",
        textDecoration:"none",
        fontWeight:"bold",
        border:"2px solid white"
        }}
        >
        Call now
        </a>
    
      </div>
    
      <p style={{
      fontSize:"14px",
      lineHeight:"1.6",
      color:"#dbeafe",
      maxWidth:"720px",
      margin:"18px 0 0 0"
      }}>
      For safety reasons, phone calls are only answered from Portuguese numbers (+351). 
      If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.
      </p>
    
    </section>

                                                 <div id="servicos"></div>
                         
                                                 <div style={{
                                                 textAlign:"center",
                                                 marginBottom:"30px"
                                               }}>
                                                 <h2 style={{
                                                 fontSize:"34px",
                                                 color:"#08285c",
                                                 marginBottom:"10px"
                                                 }}>
                                                 TecCasa Services
                                                 </h2>
                                               
                                                 <p style={{
                                                 fontSize:"18px",
                                                 color:"#666",
                                                 maxWidth:"720px",
                                                 margin:"0 auto"
                                                 }}>
                                                 Technical support for automatic gates, garage remotes, smart home solutions and domestic security systems.
                                                 </p>
                                               </div>
  <div
className="servicos-grid"
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
gap:"22px",
marginTop:"25px"
}}>

  {[
    {
      href:"/en/automatic-gate-installation-lisbon",
      image:"/portao.png",
      title:"Automatic gate installation",
      text:"Installation and replacement of gate motors for sliding gates, swing gates and selected garage doors."
    },
    {
      href:"/en/automatic-gate-repair-lisbon",
      image:"/diagnostico.png",
      title:"Gate repair and diagnosis",
      text:"Diagnosis of faults, motors, control boards, photocells, remotes and safety devices."
    },
    {
      href:"/en/garage-remote-controls-lisbon",
      image:"/comandos.png",
      title:"Garage remotes",
      text:"Remote controls, receivers, programming, replacement and signal troubleshooting."
    },
    {
      href:"/en/security-cameras-lisbon",
      image:"/vigilancia.png",
      title:"Domestic security cameras",
      text:"Installation of home cameras and simple remote monitoring solutions for holiday homes and residential properties."
    }
  ].map((item,index)=>(

    <a
    key={index}
    href={item.href}
    className="cartao-servico"
    style={{
    background:"#e6edf7",
    borderRadius:"18px",
    overflow:"hidden",
    boxShadow:"0 8px 20px rgba(0,0,0,0.06)",
    textDecoration:"none",
    color:"inherit",
    display:"block"
    }}
    >

      <img src={item.image} style={{
      width:"100%",
      height:"190px",
      objectFit:"cover"
      }}/>

      <div style={{padding:"20px"}}>
        <h3 style={{
        color:"#08285c",
        marginTop:"0"
        }}>
        {item.title}
        </h3>

        <p style={{
        color:"#444",
        lineHeight:"1.6",
        margin:"0"
        }}>
        {item.text}
        </p>
      </div>

    </a>

  ))}

</div>

                                                                         <section
                                                                         className="assistencia-multimarca"
                                                                         style={{
                                                                         padding:"45px 0 70px",
                                                                         textAlign:"center"
                                                                         }}
                                                                         >
                                                                         
                                                                         <h2 style={{
                                                                         fontSize:"34px",
                                                                         color:"#08285c",
                                                                         textAlign:"center",
                                                                         marginBottom:"10px"
                                                                         }}>
                                                                         Multi-brand gate automation support
                                                                         </h2>
                                                                         
                                                                         <p style={{
                                                                         fontSize:"18px",
                                                                         color:"#666",
                                                                         maxWidth:"760px",
                                                                         textAlign:"center",
                                                                         margin:"0 auto",
                                                                         lineHeight:"1.6"
                                                                         }}>
                                                                         We provide diagnosis, programming and technical support for several common gate automation brands used in Portugal.
                                                                         </p>
                                                                         
                                                                         <div
                                                                         className="marcas-grid"
                                                                         style={{
                                                                         display:"grid",
                                                                         gridTemplateColumns:"repeat(6,1fr)",
                                                                         gap:"16px",
                                                                         marginTop:"30px",
                                                                         marginBottom:"10px"
                                                                         }}
                                                                         >
                                                                         
                                                                         {[
                                                                         { nome:"Nice", href:"/automatismos-nice-portoes", logo:"/nice-logo.png", style:{maxHeight:"70px", maxWidth:"95%", transform:"scale(1.45)"} },
                                                                         { nome:"BFT", href:"/automatismos-bft-portoes", logo:"/bft-logo.png", style:{maxHeight:"62px", maxWidth:"90%", transform:"scale(1.35)"} },
                                                                         { nome:"Motorline", href:"/automatismos-motorline-portoes", logo:"/motorline-logo.png", style:{maxHeight:"58px", maxWidth:"98%", transform:"scale(1.25)"} },
                                                                         { nome:"FAAC", href:"/automatismos-faac-portoes", logo:"/faac-logo.png", style:{maxHeight:"54px", maxWidth:"88%"} },
                                                                         { nome:"CAME", href:"/automatismos-came-portoes", logo:"/came-logo.png", style:{maxHeight:"52px", maxWidth:"88%"} },
                                                                         { nome:"Hörmann", href:"/automatismos-hormann-portoes", logo:"/hormann-logo.png", style:{maxHeight:"58px", maxWidth:"95%", transform:"scale(1.45)"} },
                                                                         
                                                                         { nome:"Roger Technology", href:"/automatismos-roger-technology-portoes", logo:"/roger-technology-logo.png", style:{maxHeight:"58px", maxWidth:"92%"} },
                                                                         { nome:"DEA", href:"/automatismos-dea-portoes", logo:"/dea-logo.png", style:{maxHeight:"56px", maxWidth:"82%"} },
                                                                         { nome:"Somfy", href:"/automatismos-somfy-portoes", logo:"/somfy-logo.png", style:{maxHeight:"50px", maxWidth:"88%"} },
                                                                         { nome:"Beninca", href:"/automatismos-beninca-portoes", logo:"/beninca-logo.png", style:{maxHeight:"54px", maxWidth:"92%"} },
                                                                         { nome:"V2", href:"/automatismos-v2-portoes", logo:"/v2-logo.png", style:{maxHeight:"70px", maxWidth:"95%", transform:"scale(2.05)"} },
                                                                         { nome:"Ditec", href:"/automatismos-ditec-portoes", logo:"/ditec-logo.png", style:{maxHeight:"62px", maxWidth:"95%", transform:"scale(1.45)"} }
                                                                         ].map((marca,index)=>(
                                                                         
                                                                         <a
                                                                         key={index}
                                                                         href={marca.href}
                                                                         className="cartao-marca"
                                                                         aria-label={marca.nome}
                                                                         title={marca.nome}
                                                                         style={{
                                                                         background:"linear-gradient(180deg,#ffffff,#e6edf7)",
                                                                         border:"1px solid rgba(11,44,95,0.08)",
                                                                         borderRadius:"18px",
                                                                         padding:"18px 12px",
                                                                         textAlign:"center",
                                                                         boxShadow:"0 8px 20px rgba(0,0,0,0.05)",
                                                                         textDecoration:"none",
                                                                         display:"flex",
                                                                         alignItems:"center",
                                                                         justifyContent:"center",
                                                                         minHeight:"112px",
                                                                         transition:"transform .25s ease, box-shadow .25s ease, background .25s ease",
                                                                         overflow:"visible"
                                                                         }}
                                                                         onMouseEnter={(e)=>{
                                                                         e.currentTarget.style.transform="translateY(-4px)"
                                                                         e.currentTarget.style.boxShadow="0 16px 32px rgba(11,44,95,0.12)"
                                                                         }}
                                                                         onMouseLeave={(e)=>{
                                                                         e.currentTarget.style.transform="translateY(0)"
                                                                         e.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,0.05)"
                                                                         }}
                                                                         >
                                                                         
                                                                         <img
                                                                         src={marca.logo}
                                                                         alt={marca.nome}
                                                                         style={{
                                                                         width:"auto",
                                                                         height:"auto",
                                                                         objectFit:"contain",
                                                                         display:"block",
                                                                         ...marca.style
                                                                         }}
                                                                         />
                                                                         
                                                                         </a>
                                                                         
                                                                         ))}
                                                                         
                                                                         </div>
                                                                         
                                                                         </section>

                    <div id="zona-atuacao"></div>
                    <div style={{
                    textAlign:"center",
                    marginTop:"60px",
                    marginBottom:"25px"
                  }}>
                    <h2 style={{
                      fontSize:"34px",
                      color:"#08285c",
                      marginBottom:"10px"
                    }}>
                      Service area
                    </h2>
                  
                    <p style={{
                    fontSize:"18px",
                    color:"#666",
                    maxWidth:"720px",
                    margin:"0 auto",
                    lineHeight:"1.5"
                    }}>
                    Local support in Lisbon and surrounding areas, within an approximate 45 km service radius.
                    </p>
                  </div>

                                      <div
                                        id="mapa-teccasa"
                                        style={{
                                          height:"400px",
                                          width:"100%",
                                          borderRadius:"18px",
                                          overflow:"hidden",
                                          marginTop:"20px",
                                          marginBottom:"40px"
                                        }}
                                      ></div>
                      <div style={{
                textAlign:"center",
                marginTop:"70px",
                marginBottom:"30px"
              }}>
                <h2 style={{
                  fontSize:"34px",
                  color:"#08285c",
                  marginBottom:"10px"
                }}>
                  Need help?
                </h2>
              
                <p style={{
                fontSize:"18px",
                color:"#666",
                maxWidth:"720px",
                margin:"0 auto",
                lineHeight:"1.6"
                }}>
                Send a short message, photos or a video. We try to understand the problem before recommending a repair or replacement.
                </p>
              </div>

                                        <div id="contactos"></div>
                                        <section style={{marginTop:"50px"}}>
                                        <div style={{
                   textAlign:"center",
                   marginBottom:"30px"
                 }}>
                   <h2 style={{
                     fontSize:"34px",
                     color:"#08285c",
                     marginBottom:"10px"
                   }}>
                     Contact
                   </h2>
                 
                   <p style={{
                   fontSize:"18px",
                   color:"#666",
                   maxWidth:"720px",
                   margin:"0 auto",
                   lineHeight:"1.6"
                   }}>
                   Contact us by phone, WhatsApp message, email or social media.
                   </p>
                 </div>
                                      
<div
className="contact-grid"
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"20px",
marginTop:"20px"
}}
>

    <div
    className="contact-card"
    style={{
    background:"#e6edf7",
    padding:"20px",
    borderRadius:"18px",
    transition:"0.3s",
    cursor:"pointer",
    boxShadow:"0 8px 25px rgba(0,0,0,0.05)"
  }}
  onClick={()=>{
  document.getElementById("popup-contacto").style.display="flex"
}}
  onMouseEnter={(e)=>{
    e.currentTarget.style.transform="translateY(-8px)"
    e.currentTarget.style.boxShadow="0 20px 40px rgba(11,44,95,0.15)"
  }}
  onMouseLeave={(e)=>{
    e.currentTarget.style.transform="translateY(0px)"
    e.currentTarget.style.boxShadow="0 8px 25px rgba(0,0,0,0.05)"
  }}
>
  <h3>📞 Phone / WhatsApp</h3>

<p style={{color:"#0a3a7a", fontWeight:"bold"}}>+351 922 021 980</p>

<p style={{color:"#25D366", fontWeight:"bold"}}>
Call or send a WhatsApp message
</p>

<p style={{
fontSize:"14px",
lineHeight:"1.5",
color:"#6b7280",
marginTop:"12px"
}}>
Phone calls are only answered from Portuguese numbers (+351).
</p>
</div>

<div
  className="contact-card"
  style={{
    background:"#e6edf7",
    padding:"20px",
    borderRadius:"18px",
    transition:"0.3s",
    cursor:"pointer",
    boxShadow:"0 8px 25px rgba(0,0,0,0.05)"
  }}
  onClick={()=>{
    window.location.href = "mailto:geral@tec-casa.pt";
  }}
  onMouseEnter={(e)=>{
    e.currentTarget.style.transform="translateY(-8px)"
    e.currentTarget.style.boxShadow="0 20px 40px rgba(11,44,95,0.15)"
  }}
  onMouseLeave={(e)=>{
    e.currentTarget.style.transform="translateY(0px)"
    e.currentTarget.style.boxShadow="0 8px 25px rgba(0,0,0,0.05)"
  }}
>
  <h3>✉️ Email</h3>
  <p style={{color:"#0a3a7a", fontWeight:"bold"}}>geral@tec-casa.pt</p>
  <p>Send email</p>
</div>

<div
  className="contact-card"
  style={{
    background:"#e6edf7",
    padding:"20px",
    borderRadius:"18px",
    transition:"0.3s",
    boxShadow:"0 8px 25px rgba(0,0,0,0.05)"
  }}
  onMouseEnter={(e)=>{
    e.currentTarget.style.transform="translateY(-8px)"
    e.currentTarget.style.boxShadow="0 20px 40px rgba(11,44,95,0.15)"
  }}
  onMouseLeave={(e)=>{
    e.currentTarget.style.transform="translateY(0px)"
    e.currentTarget.style.boxShadow="0 8px 25px rgba(0,0,0,0.05)"
  }}
>
  <h3>🌐 Social media</h3>

  <div style={{
    display:"flex",
    gap:"15px",
    marginTop:"20px"
  }}>
    <a
      href="https://www.facebook.com/share/1CzrBzuXSY/"
      target="_blank"
      style={{
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        background:"#1877F2",
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        textDecoration:"none",
        fontWeight:"bold",
        fontSize:"24px"
      }}
    >
     <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
  <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56v1.9h2.77l-.44 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z"/>
</svg>
    </a>

    <a
  href="https://www.instagram.com/teccasasolucoes?igsh=MXM4dGl1czEyMmx2NA=="
  target="_blank"
  style={{
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    background:"linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
    color:"white",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textDecoration:"none"
  }}
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
</a>
  </div>
</div>
       </div>
</section>

<div style={{
background:"#e6edf7",
padding:"35px",
borderRadius:"25px",
boxShadow:"0 20px 45px rgba(11,63,136,0.22)",
marginTop:"40px"
}}>
                                               
          <div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
gap:"30px",
flexWrap:"wrap"
}}>

<div style={{flex:"1"}}>
<p style={{
fontSize:"18px",
lineHeight:"1.7",
margin:"0"
}}>
Describe what you need or send photos/videos so we can understand the situation in the simplest and fastest way.
</p>
</div>

<a
href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20a%20service%20in%20Lisbon."
target="_blank"
style={{
background:"#0b2c5f",
color:"white",
padding:"15px 25px",
borderRadius:"12px",
fontSize:"18px",
textDecoration:"none",
boxShadow:"0 8px 20px rgba(11,44,95,0.25)",
transition:"0.3s",
display:"inline-block"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-3px) scale(1.03)"
e.currentTarget.style.boxShadow="0 14px 30px rgba(11,44,95,0.35)"
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0px) scale(1)"
e.currentTarget.style.boxShadow="0 8px 20px rgba(11,44,95,0.25)"
}}

>
Send message
</a>
</div>
 </div>

                                                      <div style={{
                                                     textAlign:"center",
                                                     marginTop:"70px",
                                                     marginBottom:"30px"
                                                     }}>
                                                     <h2 style={{
                                                     fontSize:"34px",
                                                     color:"#08285c",
                                                     marginBottom:"10px"
                                                     }}>
                                                     TecCasa commitment
                                                     </h2>
                                                     
                                                     <p style={{
                                                     fontSize:"18px",
                                                     color:"#666"
                                                     }}>
                                                     How we work matters as much as the technical solution.
                                                     </p>
                                                     </div>
                                                     
                                                     <div
                                                     className="compromisso-grid"
                                                     style={{
                                                       display:"grid",
                                                       gridTemplateColumns:"repeat(3,1fr)",
                                                       gap:"20px",
                                                     marginTop:"20px"
                                                     }}>
                                                     
                                                     {[
                                                     ["🛠️","Diagnosis before replacement"],
                                                     ["💬","Clear estimates"],
                                                     ["📸","Photo-based support"],
                                                     ["🏠","Homes and condominiums"],
                                                     ["📍","Lisbon and surrounding areas"],
                                                     ["⚡","Local response"]
                                                     ].map(([icon,text])=>(
                                                     
                                                     <div
                                                     key={text}
                                                     style={{
                                                     background:"#f5f7fb",
                                                     padding:"22px",
                                                     borderRadius:"18px",
                                                     textAlign:"center",
                                                     boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
                                                     }}
                                                     >
                                                     
                                                     <div style={{
                                                     fontSize:"30px",
                                                     marginBottom:"10px"
                                                     }}>
                                                     {icon}
                                                     </div>
                                                     
                                                     <div style={{
                                                     fontWeight:"bold"
                                                     }}>
                                                     {text}
                                                     </div>
                                                     
                                                     </div>
                                                     
                                                     ))}
                                                    </div>
 
                                 <section style={{marginTop:"50px"}}>
                                 
                                 <div style={{
textAlign:"center",
marginTop:"70px",
marginBottom:"30px"
}}>
<h2 style={{
fontSize:"34px",
color:"#08285c",
marginBottom:"10px"
}}>
Why choose TecCasa?
</h2>

<p style={{
fontSize:"18px",
color:"#666",
maxWidth:"700px",
margin:"0 auto",
lineHeight:"1.6"
}}>
Technical support focused on diagnosis, clear communication and local assistance.
</p>
</div>
                                 
                                 <div style={{
                                 display:"grid",
                                 gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
                                 gap:"20px",
                                 marginTop:"20px"
                               }}>
                                 
                                 <div
                                 className="cartao-vantagem"
                                 style={{
                                 background:"#e6edf7",
                                 padding:"20px",
                                 borderRadius:"18px",
                                 transition:"0.3s",
                                 boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
                                 }}
                                 >
                                 <h3>🛠️ Diagnosis</h3>
                                 <p>
                                 We look for the cause of the problem before suggesting replacements.
                                 </p>
                                 </div>
                                 
                                 <div
                                 className="cartao-vantagem"
                                 style={{
                                 background:"#e6edf7",
                                 padding:"20px",
                                 borderRadius:"18px",
                                 transition:"0.3s",
                                 boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
                                 }}
                                 >
                                 <h3>📱 Fast contact</h3>
                                 <p>
                                 Simple support through WhatsApp message, email and direct contact.
                                 </p>
                                 </div>
                                 
                                 <div
                                 className="cartao-vantagem"
                                 style={{
                                 background:"#e6edf7",
                                 padding:"20px",
                                 borderRadius:"18px",
                                 transition:"0.3s",
                                 boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
                                 }}
                                 >
                                 <h3>🏠 Homes and condominiums</h3>
                                 <p>
                                 Solutions adapted to houses, garages and residential buildings.
                                 </p>
                                 </div>
                                 
                                 <div
                                 className="cartao-vantagem"
                                 style={{
                                 background:"#e6edf7",
                                 padding:"20px",
                                 borderRadius:"18px",
                                 transition:"0.3s",
                                 boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
                                 }}
                                 >
                                 <h3>🤝 Transparency</h3>
                                 <p>
                                 Clear explanation before any intervention or replacement.
                                 </p>
                                 </div>

                                                                 <div
                                                                 id="popup-contacto"
                                                                 style={{
                                                                 position:"fixed",
                                                                 top:"0",
                                                                 left:"0",
                                                                 width:"100%",
                                                                 height:"100%",
                                                                 background:"rgba(0,0,0,0.45)",
                                                                 display:"none",
                                                                 alignItems:"center",
                                                                 justifyContent:"center",
                                                                 zIndex:"9999"
                                                                 }}
                                                                 onClick={(e)=>{
                                                                 if(e.target.id==="popup-contacto"){
                                                                 e.currentTarget.style.display="none"
                                                                 }
                                                                 }}
                                                                 >
                                                                 
                                                                 <div
                                                                 style={{
                                                                 background:"white",
                                                                 padding:"30px",
                                                                 borderRadius:"22px",
                                                                 width:"90%",
                                                                 maxWidth:"360px",
                                                                 textAlign:"center",
                                                                 boxShadow:"0 20px 50px rgba(0,0,0,0.25)"
                                                                 }}
                                                                 >
                                                                 
                                                                 <h2 style={{
                                                                 marginTop:"0",
                                                                 color:"#08285c"
                                                                 }}>
                                                                 Choose an option
                                                                 </h2>
                                                                 
                                                                 <p style={{
                                                                 color:"#555",
                                                                 marginBottom:"25px"
                                                                 }}>
                                                                 How would you like to contact us?
                                                                 </p>
                                                                 
                                                                 <div style={{
                                                                 display:"flex",
                                                                 flexDirection:"column",
                                                                 gap:"15px"
                                                                 }}>
                                                                 
                                                                 <a
                                                                 href="tel:922021980"
                                                                 style={{
                                                                 background:"#08285c",
                                                                 color:"white",
                                                                 padding:"14px",
                                                                 borderRadius:"12px",
                                                                 textDecoration:"none",
                                                                 fontWeight:"bold"
                                                                 }}
                                                                 >
                                                                 📞 Call
                                                                 </a>
                                                                 
                                                                 <a
                                                                 href="https://wa.me/351922021980"
                                                                 target="_blank"
                                                                 style={{
                                                                 background:"#25D366",
                                                                 color:"white",
                                                                 padding:"14px",
                                                                 borderRadius:"12px",
                                                                 textDecoration:"none",
                                                                 fontWeight:"bold"
                                                                 }}
                                                                 >
                                                                 💬 WhatsApp message
                                                                 </a>
                                                                 
                                                                 <button
                                                                 onClick={()=>{
                                                                 document.getElementById("popup-contacto").style.display="none"
                                                                 }}
                                                                 style={{
                                                                 background:"#f1f5f9",
                                                                 border:"none",
                                                                 padding:"12px",
                                                                 borderRadius:"12px",
                                                                 cursor:"pointer",
                                                                 fontWeight:"bold"
                                                                 }}
                                                                 >
                                                                 Close
                                                                 </button>
                                                                  <p style={{
                                                                  fontSize:"14px",
                                                                  lineHeight:"1.5",
                                                                  color:"#6b7280",
                                                                  marginBottom:"20px"
                                                                  }}>
                                                                  Phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese number, please use WhatsApp message, email or social media.
                                                                  </p>
                                                                 
                                                                 </div>
                                                                 </div>
                                                                 </div>
                                 </div>
                                 
                                 </section>

                                                                  
 
  <footer style={{
marginTop:"80px",
padding:"45px 30px",
textAlign:"center",
color:"#555",
borderRadius:"25px",
background:"linear-gradient(180deg,#ffffff 0%,#ffffff 15%,#f5f7fb 35%,#dfe8f5 65%,#cfdcf0 100%)",
boxShadow:"0 -10px 35px rgba(11,44,95,0.06)",
border:"1px solid rgba(11,44,95,0.05)"
}}>

  <img
    src="/favicon.png"
    style={{
      width:"70px",
      marginBottom:"18px"
    }}
  />

  <h3 style={{
    margin:"0 0 10px 0",
    color:"#08285c",
    fontSize:"24px"
  }}>
    TecCasa Soluções
  </h3>

  <p style={{
    margin:"0 0 25px 0",
    fontSize:"17px"
  }}>
    Automatic gates • Repairs • Smart solutions
  </p>

  <div style={{
    display:"flex",
    justifyContent:"center",
    gap:"25px",
    flexWrap:"wrap",
    marginBottom:"25px"
  }}>
    <span>📞 922 021 980</span>
    <span>✉️ geral@tec-casa.pt</span>
    <span>📍 Lisbon and surrounding areas</span>
  </div>

  <div style={{
    display:"flex",
    justifyContent:"center",
    gap:"15px",
    flexWrap:"wrap",
    marginBottom:"25px"
  }}>

    <a href="https://wa.me/351922021980" target="_blank" style={{
      padding:"10px 18px",
      borderRadius:"999px",
      background:"#25D366",
      color:"white",
      textDecoration:"none",
      fontWeight:"bold"
    }}>
      WhatsApp
    </a>

    <a href="https://www.facebook.com/share/1CzrBzuXSY/" target="_blank" style={{
      padding:"10px 18px",
      borderRadius:"999px",
      background:"#1877F2",
      color:"white",
      textDecoration:"none",
      fontWeight:"bold"
    }}>
      Facebook
    </a>

    <a href="https://www.instagram.com/teccasasolucoes?igsh=MXM4dGl1czEyMmx2NA==" target="_blank" style={{
      padding:"10px 18px",
      borderRadius:"999px",
      background:"linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
      color:"white",
      textDecoration:"none",
      fontWeight:"bold"
    }}>
      Instagram
    </a>

  </div>

  <p style={{
    marginTop:"20px",
    fontSize:"14px",
    color:"#777"
  }}>
    © 2026 TecCasa Soluções. All rights reserved.
  </p>

</footer>
                                                                               <style jsx global>{`
                                                          html {
                                                          scroll-behavior: smooth;
                                                          overflow-x: hidden;
                                                          width: 100%;
                                                          max-width: 100%;
                                                          margin: 0;
                                                          padding: 0;
                                                        }
                                                        
                                                        body {
                                                          overflow-x: hidden;
                                                          width: 100%;
                                                          max-width: 100%;
                                                          margin: 0;
                                                          padding: 0;
                                                        }
                                                        
                                                        #__next {
                                                          width: 100%;
                                                          max-width: 100%;
                                                          overflow-x: hidden;
                                                        }
                                                        
                                                          .page {
                                                          font-family: Arial, sans-serif;
                                                          padding: 110px 40px 40px 40px;
                                                          background: #f4f7fb;
                                                          min-height: 100vh;
                                                          }
                                                        
                                                          .main-card {
                                                            width: min(1200px, calc(100% - 40px));
                                                            margin: auto;
                                                            background: white;
                                                            padding: 50px;
                                                            border-radius: 20px;
                                                            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                                                            box-sizing: border-box;
                                                          }
                                                        
                                                          .menu-button {
                                                            display: block;
                                                          }
                                                        
                                                          .mobile-menu {
                                                            display: none;
                                                          }
                                                        
                                                          .cartao-servico,
                                                          .cartao-vantagem,
                                                          .cartao-marca {
                                                            transition: transform .3s ease, box-shadow .3s ease;
                                                          }
                                                        
                                                          .cartao-servico:hover {
                                                            transform: translateY(-8px);
                                                            box-shadow: 0 18px 35px rgba(0,0,0,.14) !important;
                                                          }
                                                        
                                                          .cartao-vantagem:hover {
                                                            transform: translateY(-8px);
                                                            box-shadow: 0 18px 35px rgba(0,0,0,.12);
                                                          }
                                                        
                                                          .cartao-marca:hover {
                                                            transform: translateY(-7px);
                                                            box-shadow: 0 18px 35px rgba(11,44,95,.14);
                                                          }
                                                        
                                                          @keyframes fadeUp {
                                                            from {
                                                              opacity: 0;
                                                              transform: translateY(25px);
                                                            }
                                                            to {
                                                              opacity: 1;
                                                              transform: translateY(0);
                                                            }
                                                          }
                                                        
                                                          h1, h2, .cartao-servico, footer, section {
                                                            animation: fadeUp .8s ease;
                                                          }
                                                        
                                                          @keyframes pulse {
                                                            0% { transform: scale(1); }
                                                            50% { transform: scale(1.06); }
                                                            100% { transform: scale(1); }
                                                          }
                                                        
                                                          @media (max-width: 768px) {
                                                            .page {
                                                              padding: 95px 10px 10px 10px !important;
                                                            }
                                                        
                                                            .main-card {
                                                              width: 100% !important;
                                                              max-width: 100% !important;
                                                              padding: 18px !important;
                                                              border-radius: 16px !important;
                                                              overflow: hidden !important;
                                                            }
                                                        
                                                            nav {
                                                            position: fixed !important;
                                                            top: 10px !important;
                                                            left: 10px !important;
                                                            right: 10px !important;
                                                            transform: none !important;
                                                            width: auto !important;
                                                            max-width: none !important;
                                                            box-sizing: border-box !important;
                                                            margin: 0 !important;
                                                            border-radius: 18px !important;
                                                            }
                                                        
                                                            .desktop-menu {
                                                              display: none !important;
                                                            }
                                                        
                                                            .menu-button {
                                                              display: block !important;
                                                            }
                                                        
                                                            .mobile-menu {
                                                              display: flex !important;
                                                            }
                                                        
                                                            .servicos-grid {
                                                              grid-template-columns: 1fr !important;
                                                            }
                                                        
                                                            .marcas-grid {
                                                              display: grid !important;
                                                              grid-template-columns: repeat(2, 1fr) !important;
                                                              gap: 12px !important;
                                                            }
                                                        
                                                            .compromisso-grid {
                                                              grid-template-columns: 1fr !important;
                                                            }
                                                        
                                                            .problemas-grid {
                                                              grid-template-columns: 1fr !important;
                                                            }
                                                        
                                                            .contact-grid {
                                                              grid-template-columns: minmax(260px, 320px) !important;
                                                              justify-content: center !important;
                                                            }
                                                        
                                                            .contact-card {
                                                              width: 100% !important;
                                                              max-width: 300px !important;
                                                              margin-left: auto !important;
                                                              margin-right: auto !important;
                                                              box-sizing: border-box !important;
                                                              text-align: center !important;
                                                            }
                                                        
                                                            .contact-card > div {
                                                              justify-content: center !important;
                                                            }
                                                        
                                                            .cartao-marca {
                                                              width: 100% !important;
                                                              min-height: 48px !important;
                                                              padding: 12px 8px !important;
                                                              font-size: 15px !important;
                                                              border-radius: 14px !important;
                                                              box-sizing: border-box !important;
                                                            }
                                                        
                                                            section {
                                                              padding: 24px 18px !important;
                                                              box-sizing: border-box !important;
                                                            }
                                                        
                                                            section img[src="/Logo.png"] {
                                                              width: 85% !important;
                                                              max-width: 260px !important;
                                                              display: block !important;
                                                              margin: 0 auto 25px auto !important;
                                                            }
                                                        
                                                            h1 {
                                                              font-size: 28px !important;
                                                            }
                                                        
                                                            h2 {
                                                              font-size: 26px !important;
                                                            }
                                                        
                                                            p {
                                                              font-size: 16px !important;
                                                            }
                                                        
                                                            img {
                                                              max-width: 100%;
                                                            }
                                                        
                                                            #mapa-teccasa {
                                                              height: 300px !important;
                                                            }
                                                        
                                                            footer {
                                                              padding: 35px 18px !important;
                                                            }
                                                            section:first-of-type {
                                                            padding: 28px 18px !important;
                                                            margin-bottom: 32px !important;
                                                            border-radius: 22px !important;
                                                            text-align: center !important;
                                                          }
                                                          
                                                          section:first-of-type h1 {
                                                            font-size: 27px !important;
                                                            line-height: 1.18 !important;
                                                            margin-bottom: 14px !important;
                                                          }
                                                          
                                                          section:first-of-type p {
                                                            font-size: 16px !important;
                                                            line-height: 1.55 !important;
                                                          }
                                                          
                                                          section:first-of-type div {
                                                            justify-content: center !important;
                                                          }
                                                          
                                                          section:first-of-type a {
                                                            width: 100% !important;
                                                            max-width: 260px !important;
                                                            text-align: center !important;
                                                            box-sizing: border-box !important;
                                                          }

                                                          /* Ajuste específico da Assistência Multimarca na homepage */

                                                         .assistencia-multimarca {
                                                           padding: 70px 6px 55px 6px !important;
                                                           scroll-margin-top: 130px !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .marcas-grid {
                                                           display: grid !important;
                                                           grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                                                           gap: 14px !important;
                                                           width: 100% !important;
                                                           max-width: 100% !important;
                                                           margin-top: 26px !important;
                                                           margin-bottom: 20px !important;
                                                           box-sizing: border-box !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca {
                                                           height: 106px !important;
                                                           min-height: 106px !important;
                                                           padding: 10px 8px !important;
                                                           border-radius: 16px !important;
                                                           overflow: hidden !important;
                                                           box-sizing: border-box !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca img {
                                                           transform: none !important;
                                                           width: auto !important;
                                                           height: auto !important;
                                                           object-fit: contain !important;
                                                           display: block !important;
                                                         }
                                                         
                                                         /* Ajustes individuais dos logos no mobile */
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(1) img {
                                                           max-height: 72px !important;
                                                           max-width: 82% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(2) img {
                                                           max-height: 64px !important;
                                                           max-width: 86% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(3) img {
                                                           max-height: 52px !important;
                                                           max-width: 92% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(4) img {
                                                           max-height: 56px !important;
                                                           max-width: 90% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(5) img {
                                                           max-height: 56px !important;
                                                           max-width: 90% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(6) img {
                                                           max-height: 48px !important;
                                                           max-width: 92% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(7) img {
                                                           max-height: 56px !important;
                                                           max-width: 92% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(8) img {
                                                           max-height: 68px !important;
                                                           max-width: 82% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(9) img {
                                                           max-height: 52px !important;
                                                           max-width: 88% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(10) img {
                                                           max-height: 56px !important;
                                                           max-width: 92% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(11) img {
                                                           max-height: 72px !important;
                                                           max-width: 80% !important;
                                                         }
                                                         
                                                         .assistencia-multimarca .cartao-marca:nth-child(12) img {
                                                           max-height: 66px !important;
                                                           max-width: 88% !important;
                                                         }
                                                          }
                                                        `}</style>
                         

 <a
href="https://wa.me/351922021980"
target="_blank"
style={{
position:"fixed",
bottom:"25px",
right:"25px",
background:"#25D366",
color:"white",
padding:"15px 18px",
borderRadius:"999px",
textDecoration:"none",
fontWeight:"bold",
boxShadow:"0 4px 15px rgba(0,0,0,0.2)",
zIndex:"999",
animation:"pulse 2.5s infinite"
}}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="scale(1.08)"
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="scale(1)"
}}
>
WhatsApp
</a>
 
      </div>

    </div>
</>
  )
}
