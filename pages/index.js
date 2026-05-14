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
                        width:"300px",
                        background:"white",
                        padding:"15px",
                        borderRadius:"18px",
                        marginBottom:"30px"
                      }}
                    />
                  
                    <h1 style={{
                      fontSize:"42px",
                      margin:"0 0 15px 0",
                      lineHeight:"1.15"
                    }}>
                      Soluções técnicas para a sua casa, garagem ou condomínio.
                    </h1>
                  
                    <p style={{
                      fontSize:"20px",
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
    background:"#f5f7fb",
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
    background:"#f5f7fb",
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
    background:"#f5f7fb",
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
    background:"#f5f7fb",
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
    background:"#f5f7fb",
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
    background:"#f5f7fb",
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
    background:"#f5f7fb",
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
    background:"#f5f7fb",
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
    background:"#f5f7fb",
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
    background:"linear-gradient(135deg,#feda75,#d62976,#962fbf,#4f5bd)",
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
background:"#f5f7fb",
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
e.currentTarget.style.transform="translateY(-4px)"
e.currentTarget.style.boxShadow="0 14px 30px rgba(11,44,95,0.35)"
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0px)"
e.currentTarget.style.boxShadow="0 8px 20px rgba(11,44,95,0.25)"
}}

>
Pedir ajuda
</a>

</div>
 </div>

                                 <section style={{marginTop:"50px"}}>
                                 
                                 <h2>Porque escolher a TecCasa?</h2>
                                 
                                 <div style={{
                                 display:"grid",
                                 gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
                                 gap:"15px",
                                 marginTop:"20px"
                                 }}>
                                 
                                 <div style={{
                                 background:"#f5f7fb",
                                 padding:"20px",
                                 borderRadius:"15px"
                                 }}>
                                 <h3>🛠️ Diagnóstico</h3>
                                 <p>
                                 Analisamos a causa antes de sugerir substituições.
                                 </p>
                                 </div>
                                 
                                 <div style={{
                                 background:"#f5f7fb",
                                 padding:"20px",
                                 borderRadius:"15px"
                                 }}>
                                 <h3>📱 Resposta rápida</h3>
                                 <p>
                                 Apoio simples através de WhatsApp e contacto direto.
                                 </p>
                                 </div>
                                 
                                 <div style={{
                                 background:"#f5f7fb",
                                 padding:"20px",
                                 borderRadius:"15px"
                                 }}>
                                 <h3>🏠 Habitação e condomínios</h3>
                                 <p>
                                 Soluções adaptadas a casas, garagens e edifícios.
                                 </p>
                                 </div>
                                 
                                 <div style={{
                                 background:"#f5f7fb",
                                 padding:"20px",
                                 borderRadius:"15px"
                                 }}>
                                 <h3>🤝 Transparência</h3>
                                 <p>
                                 Explicação clara antes de qualquer intervenção.
                                 </p>
                                 </div>
                                 
                                 </div>
                                 
                                 </section>
 
  <footer
  style={{
    marginTop:"70px",
    padding:"35px",
    borderTop:"1px solid #ddd",
    textAlign:"center",
    color:"#666"
  }}
>

<img
  src="/logo.png"
  style={{
    width:"120px",
    marginBottom:"15px"
  }}
/>

<h3
style={{
marginBottom:"10px",
color:"#0a3a7a"
}}
>
TecCasa Soluções
</h3>

<p>
Automatismos • Reparações • Soluções Inteligentes
</p>

<p>
📞 922 021 980
</p>

<p>
✉️ geral@tec-casa.pt
</p>

<p>
📍 Lisboa e arredores
</p>

<div
style={{
marginTop:"20px"
}}
>

<a
href="https://wa.me/351922021980"
target="_blank"
style={{
margin:"10px"
}}
>
WhatsApp
</a>

<a
href="https://www.facebook.com/share/1CzrBzuXSY/"
target="_blank"
style={{
margin:"10px"
}}
>
Facebook
</a>

<a
href="https://www.instagram.com/teccasasolucoes?igsh=MXM4dGl1czEyMmx2NA=="
target="_blank"
style={{
margin:"10px"
}}
>
Instagram
</a>

</div>

<p
style={{
marginTop:"25px",
fontSize:"14px"
}}
>
© 2026 TecCasa Soluções
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
zIndex:"999"
}}
>
WhatsApp
</a>
 
      </div>

    </div>
  )
}
