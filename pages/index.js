import { useEffect, useState, useRef } from "react";
import Head from "next/head";
export default function Home() {
 const [logoClicks, setLogoClicks] = useState(0);
 const [showSeoPanel, setShowSeoPanel] = useState(false);
 const [pinInput, setPinInput] = useState("");
 const [menuOpen, setMenuOpen] = useState(false);
 const logoTimer = useRef(null);
 const menuItems = [
  { label:"Início", href:"/", active:true },

  { label:"Instalação de Automatismos", href:"/instalacao-automatismos-portoes", active:true },

  { label:"Reparação de Portões", href:"/reparacao-portoes-lisboa", active:true },

  { label:"Comandos", href:"/comandos-garagem", active:true },

  { label:"Domótica", href:"/casas-inteligentes-lisboa", active:true },

  { label:"Vigilância", href:"/instalacao-camaras-lisboa", active:true },
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
                                                  TecCasa Soluções | Portões Automáticos, Automatismos e Domótica em Lisboa
                                                  </title>
                                                  
                                                  <meta
                                                  name="description"
                                                  content="Automatismos, portões automáticos, comandos, domótica, vigilância e assistência técnica em Lisboa e arredores."
                                                  />
                                                  
                                                  <meta
                                                  name="keywords"
                                                  content="automatismos lisboa,
                                                   reparação portões,
                                                   comandos garagem,
                                                   motorline,
                                                   bft,
                                                   came,
                                                   nice,
                                                   domótica lisboa,
                                                   assistência técnica portões
                                                   automatismos, 
                                                   portões automáticos, 
                                                   domótica, 
                                                   vigilância, 
                                                   reparações, 
                                                   TecCasa"
                                                  />
                                                  
                                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                                  
                                                  <meta property="og:title" content="TecCasa Soluções" />
                                                  
                                                  <meta
                                                  property="og:description"
                                                  content="Automatismos, reparações, domótica e soluções inteligentes."
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
                                                  content="https://tec-casa.pt"
                                                  />
                                                  
                                                  <meta property="og:type" content="website" />
                                                  
                                                        <link rel="icon" href="/favicon.ico" />

                                                        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                                                        
                                                        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                                                        
                                                        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                                                        
                                                        <link rel="manifest" href="/site.webmanifest" />

                                                  <link rel="canonical" href="https://tec-casa.pt" />
                                                  
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
        
        setLogoClicks(prev => {
        
        const next = prev + 1;
        
        if (logoTimer.current) {
        clearTimeout(logoTimer.current);
        }
        
        if(next >= 5){
        
        const pin = prompt("Introduz o PIN");
        
        if(pin === "2026"){
        setShowSeoPanel(true);
        }
        
        return 0;
        }
        
        logoTimer.current = setTimeout(() => {
        setLogoClicks(0);
        window.location.reload();
        }, 1800);
        
        return next;
    
    });
    
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
                      Soluções técnicas para a sua casa, garagem ou condomínio.
                    </h1>
                  
                    <p style={{
                      fontSize:"clamp(16px,3vw,20px)",
                      color:"#dbeafe",
                      maxWidth:"750px",
                      lineHeight:"1.5"
                    }}>
                      Automatismos, reparações, domótica e vigilância com apoio próximo, diagnóstico claro e soluções inteligentes.
                    </p>
                  
                    <div style={{
                      display:"flex",
                      gap:"15px",
                      flexWrap:"wrap",
                      marginTop:"30px"
                    }}>
                  
                      <a
                        href="https://wa.me/351922021980"
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
                        Pedir ajuda
                      </a>
                  
                      <a
                        href="tel:922021980"
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
                        Ligar agora
                      </a>
                  
                    </div>
                  
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
                                                   Serviços TecCasa
                                                 </h2>
                                               
                                                 <p style={{
                                                   fontSize:"18px",
                                                   color:"#666",
                                                   maxWidth:"700px",
                                                   margin:"0 auto"
                                                 }}>
                                                   Soluções técnicas para automatizar, reparar e tornar a sua casa mais segura e inteligente.
                                                 </p>
                                               </div>
  <div
  className="servicos-grid"
  style={{
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",
  gap:"22px",
  marginTop:"25px"
}}>

  <div
  className="cartao-servico"
  style={{
    background:"#e6edf7",
    borderRadius:"18px",
    overflow:"hidden",
    boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
  }}>
    <img src="/portao.png" style={{
      width:"100%",
      height:"190px",
      objectFit:"cover"
    }}/>
    <div style={{padding:"20px"}}>
      <h3>⚙️ Automatismos</h3>
      <p>Instalação e substituição de motores para portões.</p>
    </div>
  </div>

  <div
  className="cartao-servico"
  style={{
    background:"#e6edf7",
    borderRadius:"18px",
    overflow:"hidden",
    boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
  }}>
    <img src="/diagnostico.png" style={{
      width:"100%",
      height:"190px",
      objectFit:"cover"
    }}/>
    <div style={{padding:"20px"}}>
      <h3>🔧 Diagnóstico</h3>
      <p>Deteção de avarias e reparações técnicas.</p>
    </div>
  </div>

  <div
  className="cartao-servico"
  style={{
    background:"#e6edf7",
    borderRadius:"18px",
    overflow:"hidden",
    boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
  }}>
    <img src="/comandos.png" style={{
      width:"100%",
      height:"190px",
      objectFit:"cover"
    }}/>
    <div style={{padding:"20px"}}>
      <h3>📡 Comandos</h3>
      <p>Comandos, recetores, programação e clonagem.</p>
    </div>
  </div>

  <div
  className="cartao-servico"
  style={{
    background:"#e6edf7",
    borderRadius:"18px",
    overflow:"hidden",
    boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
  }}>
    <img src="/domotica.png" style={{
      width:"100%",
      height:"190px",
      objectFit:"cover"
    }}/>
    <div style={{padding:"20px"}}>
      <h3>🏠 Domótica</h3>
      <p>Soluções smart home para tornar a casa mais prática e eficiente.</p>
    </div>
  </div>

  <div
  className="cartao-servico"
  style={{
    background:"#e6edf7",
    borderRadius:"18px",
    overflow:"hidden",
    boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
  }}>
    <img src="/vigilancia.png" style={{
      width:"100%",
      height:"190px",
      objectFit:"cover"
    }}/>
    <div style={{padding:"20px"}}>
      <h3>🎥 Vigilância</h3>
      <p>Câmaras, segurança doméstica e controlo remoto simples.</p>
    </div>
  </div>

  <div
  className="cartao-servico"
  style={{
    background:"#e6edf7",
    borderRadius:"18px",
    overflow:"hidden",
    boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
  }}>
    <img src="/solucoes.png" style={{
      width:"100%",
      height:"190px",
      objectFit:"cover"
    }}/>
    <div style={{padding:"20px"}}>
      <h3>💡 Soluções técnicas</h3>
      <p>Fotocélulas, pequenas intervenções elétricas e melhorias.</p>
    </div>
  </div>

</div>

                                                                         <section
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
                                                                         Assistência Multimarca
                                                                         </h2>
                                                                         
                                                                         <p style={{
                                                                         fontSize:"18px",
                                                                         color:"#666",
                                                                         maxWidth:"750px",
                                                                         textAlign:"center",
                                                                         margin:"0 auto",
                                                                         lineHeight:"1.6"
                                                                         }}>
                                                                         Prestamos assistência, programação e diagnóstico em automatismos de várias marcas comuns no mercado.
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
                                                                         { nome:"Nice", href:"/automatismos-nice-portoes" },
                                                                         { nome:"BFT", href:"/automatismos-bft-portoes" },
                                                                         { nome:"Motorline", href:"/automatismos-motorline-portoes" },
                                                                         { nome:"FAAC", href:"/automatismos-faac-portoes" },
                                                                         { nome:"CAME", href:"/automatismos-came-portoes" },
                                                                         { nome:"Hörmann", href:"/automatismos-hormann-portoes" },
                                                                         { nome:"Roger Technology", href:"/automatismos-roger-technology-portoes" },
                                                                         { nome:"DEA", href:"/automatismos-dea-portoes" },
                                                                         { nome:"Somfy", href:"/automatismos-somfy-portoes" },
                                                                         { nome:"Beninca", href:"/automatismos-beninca-portoes" },
                                                                         { nome:"V2", href:"/automatismos-v2-portoes" },
                                                                         { nome:"Ditec", href:"/automatismos-ditec-portoes" }
                                                                         ].map((marca,index)=>(
                                                                         
                                                                         <a
                                                                         key={index}
                                                                         href={marca.href}
                                                                         className="cartao-marca"
                                                                         style={{
                                                                         background:"linear-gradient(180deg,#ffffff,#e6edf7)",
                                                                         border:"1px solid rgba(11,44,95,0.08)",
                                                                         borderRadius:"18px",
                                                                         padding:"22px 10px",
                                                                         textAlign:"center",
                                                                         fontWeight:"bold",
                                                                         fontSize:"18px",
                                                                         color:"#08285c",
                                                                         boxShadow:"0 8px 20px rgba(0,0,0,0.05)",
                                                                         textDecoration:"none",
                                                                         display:"flex",
                                                                         alignItems:"center",
                                                                         justifyContent:"center",
                                                                         minHeight:"58px",
                                                                         transition:"transform .25s ease, box-shadow .25s ease, background .25s ease"
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
                                                                         {marca.nome}
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
                      Zona de atuação
                    </h2>
                  
                    <p style={{
                      fontSize:"18px",
                      color:"#666",
                      maxWidth:"700px",
                      margin:"0 auto",
                      lineHeight:"1.5"
                    }}>
                      Assistência local com cobertura aproximada num raio de 45 km para garantir resposta próxima e apoio rápido.
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
                  Precisa de ajuda?
                </h2>
              
                <p style={{
                  fontSize:"18px",
                  color:"#666",
                  maxWidth:"700px",
                  margin:"0 auto",
                  lineHeight:"1.6"
                }}>
                  Explique a situação ou envie fotografias. Procuramos perceber o problema antes de recomendar qualquer solução.
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
                     Contactos
                   </h2>
                 
                   <p style={{
                     fontSize:"18px",
                     color:"#666",
                     maxWidth:"700px",
                     margin:"0 auto",
                     lineHeight:"1.6"
                   }}>
                     Fale connosco por telefone, WhatsApp, email ou redes sociais.
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
  <h3>📞 Telefone / WhatsApp</h3>
  <p style={{color:"#0a3a7a", fontWeight:"bold"}}>922 021 980</p>
  <p style={{color:"#25D366", fontWeight:"bold"}}>Ligar ou enviar mensagem</p>
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
  <p>Enviar email</p>
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
  <h3>🌐 Redes sociais</h3>

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
Descreva a necessidade ou envie fotografias para o ajudarmos da forma mais simples e rápida.
</p>
</div>

<a
href="https://wa.me/351922021980"
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
Pedir ajuda
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
                                                     Compromisso TecCasa
                                                     </h2>
                                                     
                                                     <p style={{
                                                     fontSize:"18px",
                                                     color:"#666"
                                                     }}>
                                                     A forma como trabalhamos é tão importante como a solução.
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
                                                     ["🛠️","Diagnóstico antes da troca"],
                                                     ["💬","Orçamentos claros"],
                                                     ["📸","Apoio por fotografia"],
                                                     ["🏠","Casas e condomínios"],
                                                     ["📍","Lisboa e arredores"],
                                                     ["⚡","Resposta próxima"]
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
Porquê escolher a TecCasa?
</h2>

<p style={{
fontSize:"18px",
color:"#666",
maxWidth:"700px",
margin:"0 auto",
lineHeight:"1.6"
}}>
Soluções técnicas com foco em diagnóstico, transparência e apoio próximo.
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
                                 <h3>🛠️ Diagnóstico</h3>
                                 <p>
                                 Analisamos a causa antes de sugerir substituições.
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
                                 <h3>📱 Resposta rápida</h3>
                                 <p>
                                 Apoio simples através de WhatsApp e contacto direto.
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
                                 <h3>🏠 Habitação e condomínios</h3>
                                 <p>
                                 Soluções adaptadas a casas, garagens e edifícios.
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
                                 <h3>🤝 Transparência</h3>
                                 <p>
                                 Explicação clara antes de qualquer intervenção.
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
                                                                 Escolha uma opção
                                                                 </h2>
                                                                 
                                                                 <p style={{
                                                                 color:"#555",
                                                                 marginBottom:"25px"
                                                                 }}>
                                                                 Como pretende entrar em contacto?
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
                                                                 📞 Ligar
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
                                                                 💬 Mensagem WhatsApp
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
                                                                 Fechar
                                                                 </button>
                                                                 
                                                                 </div>
                                                                 </div>
                                                                 </div>
                                 </div>
                                 
                                 </section>

                                                                  {showSeoPanel && (

                                                                  <div style={{
                                                                  background:"#08285c",
                                                                  padding:"35px",
                                                                  borderRadius:"28px",
                                                                  marginTop:"50px",
                                                                  marginBottom:"40px",
                                                                  color:"white"
                                                                  }}>
                                                                  
                                                                  <h2 style={{
                                                                  marginTop:"0",
                                                                  fontSize:"34px",
                                                                  marginBottom:"10px"
                                                                  }}>
                                                                  Painel SEO
                                                                  </h2>
                                                                  
                                                                  <p style={{
                                                                  color:"rgba(255,255,255,0.75)",
                                                                  marginBottom:"30px"
                                                                  }}>
                                                                  Acesso rápido às páginas e ferramentas da TecCasa.
                                                                  </p>
                                                                  
                                                                  {[
                                                                  {
                                                                  title:"SEO local",
                                                                  items:[
                                                                  ["Lisboa","/reparacao-portoes-lisboa"],
                                                                  ["Alcochete","/reparacao-portoes-alcochete"],
                                                                  ["Montijo","/reparacao-portoes-montijo"],
                                                                  ["Vila Franca de Xira","/reparacao-portoes-vila-franca-de-xira"],
                                                                  ["Póvoa de Santa Iria","/reparacao-portoes-povoa-santa-iria"]
                                                                  ]
                                                                  },
                                                                  {
                                                                  title:"Páginas de avarias",
                                                                  items:[
                                                                  ["Comando garagem não funciona","/comando-garagem-nao-funciona"],
                                                                  ["Comando só funciona perto","/comando-garagem-so-funciona-perto"],
                                                                  ["Portão abre até meio","/portao-abre-ate-meio"],
                                                                  ["Portão não fecha","/portao-nao-fecha"],
                                                                  ["Portão abre só uma folha","/portao-abre-so-uma-folha"],
                                                                  ["Portão fecha e volta a abrir","/portao-fecha-e-volta-a-abrir"],
                                                                  ["Motor faz barulho mas não abre","/motor-portao-faz-barulho-mas-nao-abre"],
                                                                  ["Motor portão sem força","/motor-portao-sem-forca"],
                                                                  ["Portão garagem não abre","/portao-garagem-nao-abre"]
                                                                  ]
                                                                  },
                                                                  {
                                                                  title:"Instalação",
                                                                  items:[
                                                                  ["Instalação de automatismos","/instalacao-automatismos-portoes"],
                                                                  ["Instalação kit portão automático","/instalacao-kit-portao-automatico"]
                                                                  ]
                                                                  },
                                                                  {
                                                                  title:"Páginas de marcas",
                                                                  items:[
                                                                  ["Motorline","/automatismos-motorline-portoes"],
                                                                  ["BFT","/automatismos-bft-portoes"],
                                                                  ["Nice","/automatismos-nice-portoes"],
                                                                  ["FAAC","/automatismos-faac-portoes"],
                                                                  ["Ditec","/automatismos-ditec-portoes"],
                                                                  ["Roger Technology","/automatismos-roger-technology-portoes"],
                                                                  ["CAME","/automatismos-came-portoes"],
                                                                  ["Hörmann","/automatismos-hormann-portoes"],
                                                                  ["DEA","/automatismos-dea-portoes"],
                                                                  ["Benincà","/automatismos-beninca-portoes"],
                                                                  ["Somfy","/automatismos-somfy-portoes"],
                                                                  ["V2","/automatismos-v2-portoes"]
                                                                  ]
                                                                  },
                                                                  {
                                                                  title:"Páginas principais",
                                                                  items:[
                                                                  ["Homepage","/"],
                                                                  ["Comandos garagem","/comandos-garagem"],
                                                                  ["Casas inteligentes","/casas-inteligentes-lisboa"],
                                                                  ["Instalação câmaras","/instalacao-camaras-lisboa"]
                                                                  ]
                                                                  },
                                                                  {
                                                                  title:"Ferramentas análise e gestão",
                                                                  items:[
                                                                  ["Google Analytics","https://analytics.google.com"],
                                                                  ["Google Search Console","https://search.google.com/search-console"],
                                                                  ["Vercel","https://vercel.com"],
                                                                  ["Google Business Profile","https://business.google.com"]
                                                                  ]
                                                                  }
                                                                  ].map((section,index)=>(
                                                                  
                                                                  <div key={index} style={{
                                                                  marginTop:"28px"
                                                                  }}>
                                                                  
                                                                  <h3 style={{
                                                                  fontSize:"22px",
                                                                  marginBottom:"14px",
                                                                  color:"white"
                                                                  }}>
                                                                  {section.title}
                                                                  </h3>
                                                                  
                                                                  <div style={{
                                                                  display:"grid",
                                                                  gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
                                                                  gap:"14px"
                                                                  }}>
                                                                  
                                                                  {section.items.map((item,itemIndex)=>(
                                                                  
                                                                  <a
                                                                  key={itemIndex}
                                                                  href={item[1]}
                                                                  target={item[1].startsWith("http") ? "_blank" : "_self"}
                                                                  style={{
                                                                  background:"rgba(255,255,255,0.08)",
                                                                  padding:"16px",
                                                                  borderRadius:"16px",
                                                                  color:"white",
                                                                  textDecoration:"none",
                                                                  fontWeight:"bold",
                                                                  border:"1px solid rgba(255,255,255,0.08)"
                                                                  }}
                                                                  >
                                                                  {item[0]}
                                                                  </a>
                                                                  
                                                                  ))}
                                                                  
                                                                  </div>
                                                                  
                                                                  </div>
                                                                  
                                                                  ))}
                                                                  
                                                                  </div>
                                                                  
                                                                  )}
 
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
    Automatismos • Reparações • Soluções Inteligentes
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
    <span>📍 Lisboa e arredores</span>
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
    © 2026 TecCasa Soluções. Todos os direitos reservados.
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
