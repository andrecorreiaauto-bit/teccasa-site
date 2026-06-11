import { useEffect, useState } from "react";
import Head from "next/head";
export default function AutomatismosBenincaPortoes() {
 const [menuOpen, setMenuOpen] = useState(false);
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
                                                  Automatismos Beninca para Portões | Instalação e Assistência | TecCasa Soluções
                                                  </title>
                                                  
                                                  <meta
                                                  name="description"
                                                  content="Instalação, programação, substituição e assistência técnica a automatismos Beninca para portões de correr, batente e garagem. Diagnóstico de motores, comandos, centrais e segurança."
                                                  />
                                                  
                                                  <meta
                                                  name="keywords"
                                                  content="automatismos Beninca,
                                                  portões Beninca,
                                                  instalação Beninca portões,
                                                  reparação Beninca portões,
                                                  assistência Beninca,
                                                  motor Beninca portão,
                                                  comandos Beninca,
                                                  central Beninca,
                                                  fotocélulas Beninca,
                                                  motor portão Beninca,
                                                  TecCasa Soluções"
                                                  />
                                                  
                                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                                  
                                                  <meta property="og:title" content="Automatismos Beninca para Portões | TecCasa Soluções" />
                                                  
                                                  <meta
                                                  property="og:description"
                                                  content="Instalação, programação e assistência técnica a automatismos Beninca para portões automáticos residenciais, acessos exteriores e pequenos condomínios."
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
                                                  content="https://tec-casa.pt/automatismos-beninca-portoes"
                                                  />
                                                  
                                                  <meta property="og:type" content="website" />
                                                  
                                                  <link rel="icon" href="/favicon.ico" />
                                                  
                                                  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                                                  
                                                  <link rel="manifest" href="/site.webmanifest" />
                                                  
                                                  <link rel="canonical" href="https://tec-casa.pt/automatismos-beninca-portoes" />
                                                  
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
    window.location.href = "/";
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

                    <section
                    className="hero-reparacao"
                    style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
                    gap:"50px",
                    alignItems:"center",
                    padding:"70px 0"
                    }}
                    >
                    
                    <div>
                    
                    <div style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"12px",
                    marginBottom:"20px",
                    flexWrap:"wrap"
                    }}>
                    <span style={{
                    display:"inline-block",
                    background:"#eef3fa",
                    color:"#08285c",
                    padding:"8px 14px",
                    borderRadius:"999px",
                    fontSize:"14px",
                    fontWeight:"700",
                    boxShadow:"0 6px 16px rgba(11,44,95,0.08)"
                    }}>
                    Automatismos para portões
                    </span>
                    
                    <img
                    src="/beninca-logo.png"
                    alt="Beninca"
                    style={{
                    height:"94px",
                    width:"auto",
                    objectFit:"contain",
                    display:"block"
                    }}
                    />
                    </div>
                    
                    <h1 style={{
                    fontSize:"clamp(40px,5vw,56px)",
                    lineHeight:"1.05",
                    marginBottom:"24px",
                    color:"#08285c",
                    fontWeight:"900"
                    }}>
                    Automatismos Beninca para portões
                    </h1>
                    
                    <p style={{
                    fontSize:"21px",
                    lineHeight:"1.8",
                    color:"#444",
                    maxWidth:"700px",
                    marginBottom:"18px"
                    }}>
                    Instalação, programação e assistência técnica a automatismos Beninca
                    para portões de correr, portões de batente e portões de garagem.
                    Apoio em motores, comandos, centrais eletrónicas, fotocélulas
                    e sistemas de segurança.
                    </p>
                    
                    <p style={{
                    fontSize:"16px",
                    lineHeight:"1.7",
                    color:"#666",
                    maxWidth:"650px",
                    marginBottom:"34px"
                    }}>
                    Serviço técnico independente para automatismos Beninca.
                    </p>
                    
                    <div style={{
                    display:"flex",
                    gap:"14px",
                    flexWrap:"wrap"
                    }}>
                    
                    <a
                    href="https://wa.me/351922021980"
                    target="_blank"
                    style={{
                    display:"inline-block",
                    background:"#25D366",
                    color:"white",
                    padding:"17px 28px",
                    borderRadius:"16px",
                    fontWeight:"bold",
                    textDecoration:"none",
                    fontSize:"17px",
                    boxShadow:"0 10px 25px rgba(37,211,102,0.18)"
                    }}
                    >
                    Pedir assistência
                    </a>
                    
                    <a
                    href="#servicos"
                    style={{
                    display:"inline-block",
                    background:"#08285c",
                    color:"white",
                    padding:"17px 28px",
                    borderRadius:"16px",
                    fontWeight:"bold",
                    textDecoration:"none",
                    fontSize:"17px",
                    boxShadow:"0 10px 25px rgba(8,40,92,0.18)"
                    }}
                    >
                    Ver serviços
                    </a>
                    
                    </div>
                    
                    </div>
                    
                    <div style={{
                    display:"flex",
                    justifyContent:"center"
                    }}>
                    
                    <img
                    src="/automatismos-beninca-portoes-hero.png"
                    alt="Instalação e assistência a automatismos Beninca para portões"
                    style={{
                    width:"100%",
                    maxWidth:"600px",
                    borderRadius:"28px",
                    boxShadow:"0 25px 60px rgba(11,44,95,0.18)",
                    objectFit:"cover"
                    }}
                    />
                    
                    </div>
                    
                    </section>
                      
                                           <section
                                           id="servicos"
                                           style={{
                                           padding:"20px 0 70px"
                                           }}
                                           >
                                           
                                           <h2 style={{
                                           fontSize:"38px",
                                           color:"#08285c",
                                           marginBottom:"16px",
                                           textAlign:"center"
                                           }}>
                                           Serviços em automatismos DEA
                                           </h2>
                                           
                                           <p style={{
                                           fontSize:"19px",
                                           lineHeight:"1.7",
                                           color:"#555",
                                           maxWidth:"820px",
                                           margin:"0 auto 42px auto",
                                           textAlign:"center"
                                           }}>
                                           A TecCasa Soluções presta instalação, programação e assistência técnica a automatismos DEA,
                                           com foco em portões residenciais, portões de correr, portões de batente, comandos,
                                           centrais eletrónicas e funcionamento seguro do sistema.
                                           </p>
                                           
                                           <div
                                           className="problemas-grid"
                                           style={{
                                           display:"grid",
                                           gridTemplateColumns:"repeat(4,1fr)",
                                           gap:"22px"
                                           }}
                                           >
                                           
                                           {[
                                           {
                                           title:"Instalação de motores DEA",
                                           text:"Montagem de automatismos DEA em portões de correr, batente e garagem, com verificação prévia das condições do portão."
                                           },
                                           
                                           {
                                           title:"Programação e afinação",
                                           text:"Configuração de comandos, tempos, força, fecho automático, abertura pedonal e parâmetros de segurança."
                                           },
                                           
                                           {
                                           title:"Diagnóstico de avarias",
                                           text:"Análise de falhas em motores, centrais, comandos, fotocélulas, condensadores, cablagem e funcionamento geral."
                                           },
                                           
                                           {
                                           title:"Substituição de equipamento",
                                           text:"Troca de motores antigos, centrais danificadas ou automatismos desadequados ao peso e utilização do portão."
                                           }
                                           
                                           ].map((item,index)=>(
                                           
                                           <div
                                           key={index}
                                           style={{
                                           background:"#eef3fa",
                                           borderRadius:"24px",
                                           padding:"28px 24px",
                                           boxShadow:"0 12px 28px rgba(11,44,95,0.08)",
                                           border:"1px solid rgba(11,44,95,0.05)"
                                           }}
                                           >
                                           
                                           <h3 style={{
                                           color:"#08285c",
                                           fontSize:"22px",
                                           marginBottom:"12px"
                                           }}>
                                           {item.title}
                                           </h3>
                                           
                                           <p style={{
                                           color:"#444",
                                           lineHeight:"1.7",
                                           margin:"0"
                                           }}>
                                           {item.text}
                                           </p>
                                           
                                           </div>
                                           
                                           ))}
                                           
                                           </div>
                                           
                                           </section>
                                            
                                                              <section
                                                              id="avarias"
                                                              style={{
                                                              padding:"10px 0 70px"
                                                              }}
                                                              >
                                                              
                                                              <div style={{
                                                              background:"linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)",
                                                              borderRadius:"32px",
                                                              padding:"50px 36px",
                                                              boxShadow:"0 18px 40px rgba(11,44,95,0.08)",
                                                              border:"1px solid rgba(11,44,95,0.06)"
                                                              }}
                                                              >
                                                              
                                                              <h2 style={{
                                                              fontSize:"38px",
                                                              color:"#08285c",
                                                              marginBottom:"18px",
                                                              textAlign:"center"
                                                              }}>
                                                              Problemas comuns em automatismos DEA
                                                              </h2>
                                                              
                                                              <p style={{
                                                              fontSize:"19px",
                                                              lineHeight:"1.75",
                                                              color:"#555",
                                                              maxWidth:"850px",
                                                              margin:"0 auto 36px auto",
                                                              textAlign:"center"
                                                              }}>
                                                              Se o seu portão com automatismo DEA deixou de funcionar corretamente,
                                                              clique no sintoma mais parecido ou peça assistência diretamente.
                                                              </p>
                                                              
                                                              <div
                                                              style={{
                                                              display:"grid",
                                                              gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
                                                              columnGap:"18px",
                                                              rowGap:"24px",
                                                              alignItems:"stretch"
                                                              }}
                                                              >
                                                              
                                                              {[
                                                              {
                                                              title:"O portão não fecha",
                                                              href:"/portao-nao-fecha",
                                                              text:"Quando o portão abre, mas não fecha ou fica bloqueado antes de terminar o percurso."
                                                              },
                                                              
                                                              {
                                                              title:"O portão fecha e volta a abrir",
                                                              href:"/portao-fecha-e-volta-a-abrir",
                                                              text:"Quando o automatismo inverte o movimento durante o fecho."
                                                              },
                                                              
                                                              {
                                                              title:"Portão abre só uma folha",
                                                              href:"/portao-abre-so-uma-folha",
                                                              text:"Em portões de batente com duas folhas, quando apenas uma folha responde."
                                                              },
                                                              
                                                              {
                                                              title:"Motor do portão sem força",
                                                              href:"/motor-portao-sem-forca",
                                                              text:"Quando o motor perde força, trabalha em esforço ou o portão se move lentamente."
                                                              },
                                                              
                                                              {
                                                              title:"Motor faz barulho mas não abre",
                                                              href:"/motor-portao-faz-barulho-mas-nao-abre",
                                                              text:"Quando o motor trabalha, mas o portão não se movimenta corretamente."
                                                              },
                                                              
                                                              {
                                                              title:"Comando da garagem não funciona",
                                                              href:"/comando-garagem-nao-funciona",
                                                              text:"Quando o comando não abre o portão, perdeu programação ou deixou de comunicar."
                                                              }
                                                              
                                                              ].map((item,index)=>(
                                                              
                                                              <a
                                                              key={index}
                                                              href={item.href}
                                                              style={{
                                                              display:"flex",
                                                              flexDirection:"column",
                                                              justifyContent:"space-between",
                                                              minHeight:"190px",
                                                              background:"#eef3fa",
                                                              borderRadius:"22px",
                                                              padding:"24px 24px",
                                                              textDecoration:"none",
                                                              boxShadow:"0 10px 24px rgba(11,44,95,0.07)",
                                                              border:"1px solid rgba(11,44,95,0.05)",
                                                              transition:"transform .25s ease, box-shadow .25s ease, background .25s ease",
                                                              boxSizing:"border-box",
                                                              overflow:"hidden"
                                                              }}
                                                              onMouseEnter={(e)=>{
                                                              e.currentTarget.style.transform="translateY(-5px)"
                                                              e.currentTarget.style.boxShadow="0 16px 32px rgba(11,44,95,0.12)"
                                                              e.currentTarget.style.background="#f5f8fc"
                                                              }}
                                                              onMouseLeave={(e)=>{
                                                              e.currentTarget.style.transform="translateY(0)"
                                                              e.currentTarget.style.boxShadow="0 10px 24px rgba(11,44,95,0.07)"
                                                              e.currentTarget.style.background="#eef3fa"
                                                              }}
                                                              >
                                                              
                                                              <div>
                                                              
                                                              <h3 style={{
                                                              color:"#08285c",
                                                              fontSize:"21px",
                                                              lineHeight:"1.25",
                                                              margin:"0 0 12px 0"
                                                              }}>
                                                              {item.title}
                                                              </h3>
                                                              
                                                              <p style={{
                                                              color:"#444",
                                                              lineHeight:"1.65",
                                                              margin:"0",
                                                              fontSize:"16px"
                                                              }}>
                                                              {item.text}
                                                              </p>
                                                              
                                                              </div>
                                                              
                                                              <span style={{
                                                              display:"inline-block",
                                                              color:"#08285c",
                                                              fontWeight:"bold",
                                                              fontSize:"15px",
                                                              textDecoration:"underline",
                                                              marginTop:"22px"
                                                              }}>
                                                              Saber mais
                                                              </span>
                                                              
                                                              </a>
                                                              
                                                              ))}
                                                              
                                                              </div>
                                                              
                                                              </div>
                                                              
                                                              </section>

                                                                                         <section
                                                                                         style={{
                                                                                         padding:"30px 0 20px",
                                                                                         textAlign:"center"
                                                                                         }}
                                                                                         >
                                                                                         
                                                                                         <div style={{
                                                                                         background:"linear-gradient(180deg,#f5f8fc 0%,#e8eef8 100%)",
                                                                                         borderRadius:"32px",
                                                                                         padding:"55px 35px",
                                                                                         boxShadow:"0 18px 40px rgba(11,44,95,0.08)"
                                                                                         }}
                                                                                         >
                                                                                         
                                                                                         <h2 style={{
                                                                                         fontSize:"42px",
                                                                                         color:"#08285c",
                                                                                         marginBottom:"18px"
                                                                                         }}>
                                                                                         Precisa de ajuda com um automatismo DEA?
                                                                                         </h2>
                                                                                         
                                                                                         <p style={{
                                                                                         fontSize:"20px",
                                                                                         lineHeight:"1.8",
                                                                                         color:"#555",
                                                                                         maxWidth:"800px",
                                                                                         margin:"0 auto 35px auto"
                                                                                         }}>
                                                                                         Se tem um motor DEA instalado, precisa de programar comandos,
                                                                                         corrigir uma avaria, substituir equipamento antigo ou instalar um novo automatismo,
                                                                                         fale connosco para avaliarmos a situação.
                                                                                         </p>
                                                                                         
                                                                                         <div style={{
                                                                                         display:"flex",
                                                                                         justifyContent:"center",
                                                                                         gap:"16px",
                                                                                         flexWrap:"wrap"
                                                                                         }}>
                                                                                         
                                                                                         <a
                                                                                         href="https://wa.me/351922021980"
                                                                                         target="_blank"
                                                                                         style={{
                                                                                         background:"#25D366",
                                                                                         color:"white",
                                                                                         padding:"17px 28px",
                                                                                         borderRadius:"16px",
                                                                                         textDecoration:"none",
                                                                                         fontWeight:"bold",
                                                                                         fontSize:"17px",
                                                                                         boxShadow:"0 10px 25px rgba(37,211,102,.20)"
                                                                                         }}
                                                                                         >
                                                                                         Pedir assistência
                                                                                         </a>
                                                                                         
                                                                                         <a
                                                                                         href="tel:922021980"
                                                                                         style={{
                                                                                         background:"#08285c",
                                                                                         color:"white",
                                                                                         padding:"17px 28px",
                                                                                         borderRadius:"16px",
                                                                                         textDecoration:"none",
                                                                                         fontWeight:"bold",
                                                                                         fontSize:"17px",
                                                                                         boxShadow:"0 10px 25px rgba(8,40,92,.18)"
                                                                                         }}
                                                                                         >
                                                                                         Ligar agora
                                                                                         </a>
                                                                                         
                                                                                         </div>
                                                                                         
                                                                                         </div>
                                                                                         
                                                                                         </section>
                                    
                        {/* NOVA PÁGINA AQUI */}

                                                           <section
                                                           style={{
                                                           padding:"18px 0 10px",
                                                           textAlign:"center"
                                                           }}
                                                           >
                                                           
                                                           <div style={{
                                                           background:"#f5f8fc",
                                                           border:"1px solid rgba(11,44,95,0.08)",
                                                           borderRadius:"22px",
                                                           padding:"22px 24px",
                                                           boxShadow:"0 10px 26px rgba(11,44,95,0.06)"
                                                           }}
                                                           >
                                                           
                                                           <p style={{
                                                           margin:"0",
                                                           fontSize:"17px",
                                                           lineHeight:"1.7",
                                                           color:"#555"
                                                           }}>
                                                           Antes de pedir assistência, confirme se a sua zona está dentro da nossa área de atuação.{" "}
                                                           <a
                                                           href="/#zona-atuacao"
                                                           style={{
                                                           color:"#08285c",
                                                           fontWeight:"bold",
                                                           textDecoration:"underline"
                                                           }}
                                                           >
                                                           Ver zona de atuação da TecCasa Soluções
                                                           </a>.
                                                           </p>
                                                           
                                                           </div>
                                                           
                                                           </section>

                                                                                      <section
                                                                                      style={{
                                                                                      padding:"10px 0 5px",
                                                                                      textAlign:"center"
                                                                                      }}
                                                                                      >
                                                                                      
                                                                                      <div style={{
                                                                                      background:"#ffffff",
                                                                                      border:"1px solid rgba(11,44,95,0.08)",
                                                                                      borderRadius:"20px",
                                                                                      padding:"18px 22px",
                                                                                      boxShadow:"0 8px 22px rgba(11,44,95,0.04)"
                                                                                      }}
                                                                                      >
                                                                                      
                                                                                      <p style={{
                                                                                      margin:"0",
                                                                                      fontSize:"14px",
                                                                                      lineHeight:"1.7",
                                                                                      color:"#666"
                                                                                      }}>
                                                                                      Serviço técnico independente. A TecCasa Soluções presta instalação, programação e assistência a automatismos DEA.
                                                                                      </p>
                                                                                      
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

                                                           html,
                                                           body {
                                                             width: 100% !important;
                                                             max-width: 100% !important;
                                                             overflow-x: hidden !important;
                                                           }
                                                         
                                                           .page {
                                                             width: 100% !important;
                                                             max-width: 100% !important;
                                                             padding: 95px 6px 10px 6px !important;
                                                             box-sizing: border-box !important;
                                                             overflow-x: hidden !important;
                                                           }
                                                         
                                                           .main-card {
                                                             width: 100% !important;
                                                             max-width: 100% !important;
                                                             padding: 12px !important;
                                                             margin: 0 auto !important;
                                                             border-radius: 16px !important;
                                                             box-sizing: border-box !important;
                                                             overflow-x: hidden !important;
                                                           }
                                                         
                                                           nav {
                                                             position: fixed !important;
                                                             top: 10px !important;
                                                             left: 8px !important;
                                                             right: 8px !important;
                                                             transform: none !important;
                                                             width: calc(100% - 16px) !important;
                                                             max-width: calc(100% - 16px) !important;
                                                             box-sizing: border-box !important;
                                                             margin: 0 !important;
                                                             border-radius: 18px !important;
                                                             z-index: 1000 !important;
                                                             overflow: hidden !important;
                                                           }
                                                         
                                                           nav img {
                                                             width: 30px !important;
                                                             max-width: 30px !important;
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
                                                         
                                                           section {
                                                             width: 100% !important;
                                                             max-width: 100% !important;
                                                             padding: 28px 0 !important;
                                                             box-sizing: border-box !important;
                                                             overflow: visible !important;
                                                           }
                                                         
                                                           section > div {
                                                             max-width: 100% !important;
                                                             box-sizing: border-box !important;
                                                           }
                                                         
                                                           section > div[style*="border-radius:32px"],
                                                           section > div[style*="border-radius: 32px"],
                                                           section > div[style*="borderRadius"] {
                                                             padding-left: 18px !important;
                                                             padding-right: 18px !important;
                                                           }
                                                         
                                                           .hero-reparacao {
                                                             display: flex !important;
                                                             flex-direction: column !important;
                                                             gap: 26px !important;
                                                             padding: 30px 0 34px 0 !important;
                                                             text-align: center !important;
                                                             overflow: visible !important;
                                                           }
                                                         
                                                           .hero-reparacao > div {
                                                             width: 100% !important;
                                                             max-width: 100% !important;
                                                             box-sizing: border-box !important;
                                                           }
                                                         
                                                           .hero-reparacao > div:first-child > div:first-child {
                                                             justify-content: center !important;
                                                           }
                                                         
                                                           .hero-reparacao h1 {
                                                             font-size: 30px !important;
                                                             line-height: 1.14 !important;
                                                             text-align: center !important;
                                                             margin: 0 auto 18px auto !important;
                                                             max-width: 100% !important;
                                                           }
                                                         
                                                           .hero-reparacao p {
                                                             font-size: 16px !important;
                                                             line-height: 1.6 !important;
                                                             text-align: center !important;
                                                             margin: 0 auto 22px auto !important;
                                                             max-width: 100% !important;
                                                           }
                                                         
                                                           .hero-reparacao a {
                                                             display: block !important;
                                                             width: 100% !important;
                                                             max-width: none !important;
                                                             margin: 0 auto !important;
                                                             text-align: center !important;
                                                             box-sizing: border-box !important;
                                                             padding: 15px 18px !important;
                                                             font-size: 16px !important;
                                                           }
                                                         
                                                           .hero-reparacao img {
                                                             width: 100% !important;
                                                             max-width: 100% !important;
                                                             height: auto !important;
                                                             border-radius: 22px !important;
                                                             margin: 0 auto !important;
                                                             display: block !important;
                                                           }
                                                         
                                                           .hero-reparacao img[src*="-logo"] {
                                                             width: auto !important;
                                                             max-width: 120px !important;
                                                             height: auto !important;
                                                             box-shadow: none !important;
                                                             border-radius: 0 !important;
                                                           }
                                                         
                                                           .problemas-grid,
                                                           .servicos-grid,
                                                           .marcas-grid,
                                                           .contact-grid,
                                                           .compromisso-grid {
                                                             display: grid !important;
                                                             grid-template-columns: 1fr !important;
                                                             gap: 20px !important;
                                                             width: 100% !important;
                                                             max-width: 100% !important;
                                                             justify-items: stretch !important;
                                                             align-items: stretch !important;
                                                             box-sizing: border-box !important;
                                                           }
                                                         
                                                           .problemas-grid > *,
                                                           .servicos-grid > *,
                                                           .marcas-grid > *,
                                                           .contact-grid > *,
                                                           .compromisso-grid > * {
                                                             width: 100% !important;
                                                             max-width: none !important;
                                                             margin-left: 0 !important;
                                                             margin-right: 0 !important;
                                                             box-sizing: border-box !important;
                                                           }
                                                         
                                                           div[style*="grid-template-columns"] {
                                                             grid-template-columns: 1fr !important;
                                                             width: 100% !important;
                                                             max-width: 100% !important;
                                                             box-sizing: border-box !important;
                                                           }
                                                         
                                                           div[style*="grid-template-columns"] > * {
                                                             width: 100% !important;
                                                             max-width: none !important;
                                                             box-sizing: border-box !important;
                                                           }
                                                         
                                                           h1 {
                                                             font-size: 30px !important;
                                                             line-height: 1.16 !important;
                                                           }
                                                         
                                                           h2 {
                                                             font-size: 27px !important;
                                                             line-height: 1.2 !important;
                                                           }
                                                         
                                                           h3 {
                                                             font-size: 22px !important;
                                                             line-height: 1.25 !important;
                                                           }
                                                         
                                                           p {
                                                             font-size: 16px !important;
                                                             line-height: 1.6 !important;
                                                           }
                                                         
                                                           li {
                                                             font-size: 16px !important;
                                                             line-height: 1.55 !important;
                                                           }
                                                         
                                                           li span {
                                                             font-size: 16px !important;
                                                             line-height: 1.55 !important;
                                                           }
                                                         
                                                           img {
                                                             max-width: 100% !important;
                                                             height: auto !important;
                                                           }
                                                         
                                                           footer {
                                                             padding: 35px 18px !important;
                                                           }
                                                         
                                                           #mapa-teccasa {
                                                             height: 300px !important;
                                                           }
                                                         
                                                           a[href="https://wa.me/351922021980"][style*="fixed"] {
                                                             right: 12px !important;
                                                             bottom: 12px !important;
                                                             padding: 12px 15px !important;
                                                             font-size: 15px !important;
                                                             max-width: calc(100vw - 24px) !important;
                                                             box-sizing: border-box !important;
                                                           }
                                                         
                                                           @media (hover: none) and (pointer: coarse) {
                                                             * {
                                                               animation: none !important;
                                                             }
                                                         
                                                             a[href="https://wa.me/351922021980"][style*="fixed"] {
                                                               animation: none !important;
                                                               transform: none !important;
                                                             }
                                                           }

                                                           /* Alinhamento mobile mais consistente */

                                                            h1,
                                                            h2 {
                                                              text-align: center !important;
                                                            }
                                                            
                                                            section > p {
                                                              text-align: center !important;
                                                              margin-left: auto !important;
                                                              margin-right: auto !important;
                                                            }
                                                            
                                                            .hero-reparacao p {
                                                              text-align: center !important;
                                                            }
                                                            
                                                            .problemas-grid h3,
                                                            .servicos-grid h3,
                                                            .marcas-grid h3,
                                                            .contact-grid h3,
                                                            .compromisso-grid h3,
                                                            div[style*="grid-template-columns"] h3 {
                                                              text-align: left !important;
                                                            }
                                                            
                                                            .problemas-grid p,
                                                            .servicos-grid p,
                                                            .marcas-grid p,
                                                            .contact-grid p,
                                                            .compromisso-grid p,
                                                            div[style*="grid-template-columns"] p {
                                                              text-align: left !important;
                                                            }
                                                            
                                                            li,
                                                            li span {
                                                              text-align: left !important;
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
