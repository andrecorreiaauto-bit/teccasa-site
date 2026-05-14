import { useEffect } from "react";
export default function Home() {
 useEffect(() => {
  if (typeof window === "undefined") return;

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

    const map = window.L.map("mapa-teccasa").setView(center, 9);
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
  return (
    <div style={{
      fontFamily:"Arial",
      padding:"40px",
      background:"#f4f7fb",
      minHeight:"100vh"
    }}>

<nav style={{
  position:"sticky",
  top:"20px",
  zIndex:"1000",
  maxWidth:"1000px",
  margin:"0 auto 25px auto",
  background:"rgba(255,255,255,0.92)",
  backdropFilter:"blur(10px)",
  border:"1px solid rgba(11,44,95,0.08)",
  borderRadius:"999px",
  padding:"12px 20px",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  flexWrap:"wrap",
  gap:"12px",
  boxShadow:"0 10px 30px rgba(11,44,95,0.10)"
}}>
  <div style={{
    display:"flex",
    alignItems:"center",
    gap:"10px",
    fontWeight:"bold",
    color:"#08285c"
  }}>
    <img src="/favicon.png" style={{width:"28px"}} />
    TecCasa Soluções
  </div>

  <div style={{
    display:"flex",
    gap:"18px",
    alignItems:"center",
    flexWrap:"wrap"
  }}>

    <a href="#servicos" style={{
      color:"#08285c",
      textDecoration:"none",
      fontWeight:"bold",
      transition:"0.3s"
    }}
    onMouseEnter={(e)=>{e.currentTarget.style.color="#0b63d1"}}
    onMouseLeave={(e)=>{e.currentTarget.style.color="#08285c"}}
    >
      Serviços
    </a>

    <a href="#zona" style={{
      color:"#08285c",
      textDecoration:"none",
      fontWeight:"bold",
      transition:"0.3s"
    }}
    onMouseEnter={(e)=>{e.currentTarget.style.color="#0b63d1"}}
    onMouseLeave={(e)=>{e.currentTarget.style.color="#08285c"}}
    >
      Zona
    </a>

    <a href="#contactos" style={{
      color:"#08285c",
      textDecoration:"none",
      fontWeight:"bold",
      transition:"0.3s"
    }}
    onMouseEnter={(e)=>{e.currentTarget.style.color="#0b63d1"}}
    onMouseLeave={(e)=>{e.currentTarget.style.color="#08285c"}}
    >
      Contactos
    </a>

    <a href="https://wa.me/351922021980" target="_blank" style={{
      background:"#25D366",
      color:"white",
      padding:"8px 14px",
      borderRadius:"999px",
      textDecoration:"none",
      fontWeight:"bold",
      transition:"0.3s"
    }}
    onMouseEnter={(e)=>{e.currentTarget.style.transform="scale(1.06)"}}
    onMouseLeave={(e)=>{e.currentTarget.style.transform="scale(1)"}}
    >
      WhatsApp
    </a>

  </div>
</nav>
      
      <div style={{
        maxWidth:"1000px",
        margin:"auto",
        background:"white",
        padding:"50px",
        borderRadius:"20px",
        boxShadow:"0 10px 30px rgba(0,0,0,0.1)"
      }}>
        
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
                        width:"min(300px,100%)",
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
        <div style={{
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
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

                                                                         <h2 style={{
                                                                      fontSize:"34px",
                                                                      color:"#08285c",
                                                                      textAlign:"center",
                                                                      marginBottom:"10px"
                                                                      }}>
                                                                      Marcas e sistemas compatíveis
                                                                      </h2>
                                                                      
                                                                      <p style={{
                                                                      fontSize:"18px",
                                                                      color:"#666",
                                                                      maxWidth:"750px",
                                                                      margin:"0 auto",
                                                                      lineHeight:"1.6"
                                                                      }}>
                                                                      Prestamos assistência, programação e diagnóstico em automatismos de várias marcas comuns no mercado.
                                                                      </p>

                                                                       <div style={{
                                                                       display:"grid",
                                                                       gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",
                                                                       gap:"16px",
                                                                       marginTop:"30px",
                                                                       marginBottom:"60px"
                                                                       }}>
                                                                       
                                                                       {[
                                                                       "Nice",
                                                                       "BFT",
                                                                       "Motorline",
                                                                       "FAAC",
                                                                       "CAME",
                                                                       "Hörmann",
                                                                       "Roger",
                                                                       "DEA",
                                                                       "Somfy",
                                                                       "Benincà",
                                                                       "V2",
                                                                       "DITEC"
                                                                       ].map((marca)=>(
                                                                       
                                                                       <div
                                                                       key={marca}
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
                                                                       boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
                                                                       }}
                                                                       >
                                                                       {marca}
                                                                       </div>
                                                                       
                                                                       ))}
                                                                       
                                                                       </div>

                    <div id="zona"></div>
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
                                      
                                        <div style={{
                                          display:"grid",
                                          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
                                          gap:"20px",
                                          marginTop:"20px"
                                        }}>
                                      
                                       <div
  style={{
    background:"#e6edf7",
    padding:"20px",
    borderRadius:"18px",
    transition:"0.3s",
    cursor:"pointer",
    boxShadow:"0 8px 25px rgba(0,0,0,0.05)"
  }}
  onClick={()=>{
    const ligar = window.confirm("Pretende ligar agora?\n\nOK = Ligar\nCancelar = Abrir WhatsApp");
    if (ligar) {
      window.location.href = "tel:922021980";
    } else {
      window.open("https://wa.me/351922021980", "_blank");
    }
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
                                                     
                                                     <div style={{
                                                     display:"grid",
                                                     gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
                                                     gap:"18px",
                                                     marginBottom:"50px"
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
Porque escolher a TecCasa?
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
                                 gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
                                 gap:"15px",
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
                           .cartao-servico {
                             transition: transform 0.3s ease, box-shadow 0.3s ease;
                           }
                         
                           .cartao-servico:hover {
                             transform: translateY(-8px);
                             box-shadow: 0 18px 35px rgba(0,0,0,0.14) !important;
                           }

                           @keyframes fadeUp {
                           from{
                           opacity:0;
                           transform:translateY(25px);
                           }
                           to{
                           opacity:1;
                           transform:translateY(0);
                           }
                           }
                           
                           h1,h2,.cartao-servico,footer,section{
                           animation:fadeUp .8s ease;
                           }

                           .cartao-vantagem{
                           transition:transform .3s ease, box-shadow .3s ease;
                           }

                           html {
                           scroll-behavior: smooth;
                           }
                           
                           .cartao-vantagem:hover{
                           transform:translateY(-8px);
                           box-shadow:0 18px 35px rgba(0,0,0,.12);
                           }

                            .cartao-marca{
                            transition:transform .3s ease, box-shadow .3s ease;
                            }
                            
                            .cartao-marca:hover{
                            transform:translateY(-7px);
                            box-shadow:0 18px 35px rgba(11,44,95,.14);
                            }

                           @keyframes pulse{
                           0%{
                           transform:scale(1);
                           }
                           
                           50%{
                           transform:scale(1.06);
                           }
                           
                           100%{
                           transform:scale(1);
                           }
                           }
                           @media (max-width: 768px) {
  body {
    overflow-x: hidden;
  }

  nav {
    position: static !important;
    border-radius: 22px !important;
  }

  nav > div {
    width: 100%;
    justify-content: center !important;
    text-align: center;
  }

  nav a {
    font-size: 14px;
  }

  div[style*="padding: 40px"] {
    padding: 15px !important;
  }

  div[style*="padding: 50px"] {
    padding: 24px !important;
  }

  section {
    padding: 28px 22px !important;
  }

  h1 {
    font-size: 30px !important;
  }

  h2 {
    font-size: 28px !important;
  }

  #mapa-teccasa {
    height: 320px !important;
  }

  footer {
    padding: 35px 18px !important;
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
  )
}
