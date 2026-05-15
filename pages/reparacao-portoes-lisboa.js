import { useEffect } from "react";
import Head from "next/head";
export default function ReparacaoPortoes() {
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
  position:"sticky",
  top:"20px",
  zIndex:"1000",
  maxWidth:"1200px",
  width:"min(1200px, calc(100% - 40px))",
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

                                             <section style={{
                                              padding:"80px 20px",
                                              maxWidth:"1100px",
                                              margin:"0 auto"
                                              }}>
                                              
                                              <h1 style={{
                                              fontSize:"42px",
                                              color:"#0b2c6b"
                                              }}>
                                              Reparação de Portões Automáticos em Lisboa
                                              </h1>
                                              
                                              <p style={{
                                              fontSize:"20px",
                                              marginTop:"20px",
                                              lineHeight:"1.7"
                                              }}>
                                              Assistência técnica multimarca para portões automáticos,
                                              comandos, fotocélulas e centrais eletrónicas.
                                              </p>
                                              
                                              </section>

      <section style={{
      maxWidth:"1100px",
      margin:"60px auto",
      padding:"0 20px"
      }}>
      
      <h2 style={{
      fontSize:"36px",
      color:"#0b2c6b",
      marginBottom:"30px"
      }}>
      Problemas comuns
      </h2>
      
      <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
      gap:"20px"
      }}>
      
      {[
      "Portão abre até meio",
      "Comando deixou de funcionar",
      "Fotocélulas em erro",
      "Motor sem força",
      "Central bloqueada",
      "Portão não fecha"
      ].map((item,index)=>(
      
      <div key={index} style={{
      background:"#f4f7fb",
      padding:"25px",
      borderRadius:"18px",
      boxShadow:"0 4px 12px rgba(0,0,0,0.05)"
      }}>
      
      <h3>{item}</h3>
      
      </div>
      
      ))}
      
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

                           .page{
                           font-family: Arial;
                           padding:40px;
                           background:#f4f7fb;
                           min-height:100vh;
                         }

                           html{
                           scroll-behavior:smooth;
                           }

                         .main-card{
                         width:min(1200px, calc(100% - 40px));
                         margin:auto;
                         background:white;
                         padding:50px;
                         border-radius:20px;
                         box-shadow:0 10px 30px rgba(0,0,0,0.1);
                       }
                         
                         @media (max-width:768px){
                           .page{
                             padding:10px;
                             /* Corrigir cartões dos contactos no telemóvel */
                             #contactos + section,
                             #contactos {
                               text-align:center;
                             }

                             .servicos-grid{
                               grid-template-columns:1fr !important;
                             }
                             
                             .marcas-grid{
                               grid-template-columns:repeat(2,1fr) !important;
                             }

                            .compromisso-grid{
                             grid-template-columns:1fr !important;
                           }

                             section img[src="/Logo.png"]{
                             width:85% !important;
                             max-width:260px !important;
                             display:block !important;
                             margin:0 auto 25px auto !important;
                           }

                             /* Navbar fixa no mobile */
                             nav {
                               position: sticky !important;
                               top: 10px !important;
                             }
                           
                             /* Marcas em 2 colunas no mobile */
                             .marcas-grid {
                               display: grid !important;
                               grid-template-columns: repeat(2, 1fr) !important;
                               gap: 12px !important;
                             }
                           
                             .cartao-marca {
                               width: 100% !important;
                               min-height: 48px !important;
                               padding: 12px 8px !important;
                               font-size: 15px !important;
                               box-sizing: border-box !important;
                             }
                           
                             /* Forçar grelhas a ficarem centradas */
                             div[style*="grid-template-columns"] {
                               justify-items:center;
                             }
                           .contact-card{
                             text-align:center;
                           }
                         
                           .contact-card h3{
                             justify-content:center;
                           }
                         
                           .contact-card > div{
                             justify-content:center;
                           }
                         }
                             /* Cartões de contactos ocupam a largura certa */
                             div[style*="minmax(260px,1fr)"] > div {
                               width:100%;
                               box-sizing:border-box;
                             }
                           
                             /* Marcas em 2 colunas no mobile */
                             .cartao-marca {
                               padding:14px 8px !important;
                               font-size:15px !important;
                               border-radius:14px !important;
                             }
                           
                             /* Grelha das marcas mais compacta */
                             .cartao-marca {
                               min-height:auto !important;
                             }

                             .contact-card{
                             width:100% !important;
                             max-width:300px !important;
                             margin-left:auto !important;
                             margin-right:auto !important;
                             box-sizing:border-box !important;
                           }

                             .contact-grid{
                             grid-template-columns: minmax(260px,320px) !important;
                             justify-content: center !important;
                           }
                           
                           #contactos + section div[style*="grid"]{
                             justify-items:center !important;
                           }
                           
                             /* Logo do hero centrado */
                             section img[src="/Logo.png"] {
                               display:block;
                               margin-left:auto !important;
                               margin-right:auto !important;
                             }
                           }
                         
                           .main-card{
                             padding:18px;
                             border-radius:16px;
                           }
                         
                           nav{
                             top:0 !important;
                             margin-bottom:15px !important;
                             border-radius:18px !important;
                           }
                         
                           nav > div:first-child{
                             justify-content:center;
                             width:100%;
                           }
                         
                           nav > div:last-child{
                             justify-content:center;
                             width:100%;
                             gap:10px !important;
                           }
                         
                           nav a{
                             font-size:13px;
                           }
                         
                           section{
                             padding:24px 18px !important;
                           }
                         
                           h1{
                             font-size:28px !important;
                           }
                         
                           h2{
                             font-size:26px !important;
                           }
                         
                           p{
                             font-size:16px !important;
                           }
                         
                           img{
                             max-width:100%;
                           }
                         
                           #mapa-teccasa{
                             height:300px !important;
                           }
                         }
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
</>
  )
}
