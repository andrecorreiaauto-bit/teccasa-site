import { useEffect, useState } from "react";
import Head from "next/head";
export default function AutomatismosMotorlinePortoes() {
 const [menuOpen, setMenuOpen] = useState(false);
 const menuItems = [
  { label:"Início", href:"/", active:true },
  { label:"Reparação de Portões", href:"/reparacao-portoes-lisboa", active:true },

  { label:"Comandos", href:"/comandos-garagem", active:true },

  { label:"Domótica", href:"/casas-inteligentes-lisboa", active:true },

  { label:"Vigilância", href:"/instalacao-camaras-lisboa", active:true },
  ]
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
                                                  Automatismos Motorline para Portões | Instalação e Assistência | TecCasa Soluções
                                                  </title>
                                                  
                                                  <meta
                                                  name="description"
                                                  content="Instalação, programação, substituição e assistência técnica a automatismos Motorline para portões de correr, batente e garagem. Diagnóstico de motores, centrais, comandos e fotocélulas."
                                                  />
                                                  
                                                  <meta
                                                  name="keywords"
                                                  content="automatismos Motorline,
                                                  portões Motorline,
                                                  instalação Motorline portões,
                                                  reparação Motorline portões,
                                                  assistência Motorline,
                                                  motor Motorline portão,
                                                  comandos Motorline,
                                                  central Motorline,
                                                  fotocélulas Motorline,
                                                  motor portão Motorline,
                                                  TecCasa Soluções"
                                                  />
                                                  
                                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                                  
                                                  <meta property="og:title" content="Automatismos Motorline para Portões | TecCasa Soluções" />
                                                  
                                                  <meta
                                                  property="og:description"
                                                  content="Instalação, programação e assistência técnica a automatismos Motorline para portões automáticos residenciais."
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
                                                  content="https://tec-casa.pt/automatismos-motorline-portoes"
                                                  />
                                                  
                                                  <meta property="og:type" content="website" />
                                                  
                                                  <link rel="icon" href="/favicon.ico" />
                                                  
                                                  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                                                  
                                                  <link rel="manifest" href="/site.webmanifest" />
                                                  
                                                  <link rel="canonical" href="https://tec-casa.pt/automatismos-motorline-portoes" />
                                                  
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
    
    setTimeout(() => {
    setLogoClicks(0);
    }, 1800);
    
    if(next >= 5){
    
    const pin = prompt("Introduz o PIN");
    
    if(pin === "2026"){
    setShowSeoPanel(true);
    }
    
    return 0;
    }
    
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
                    src="/motorline-logo.png"
                    alt="Motorline"
                    style={{
                    height:"28px",
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
                    Automatismos Motorline para portões
                    </h1>
                    
                    <p style={{
                    fontSize:"21px",
                    lineHeight:"1.8",
                    color:"#444",
                    maxWidth:"700px",
                    marginBottom:"18px"
                    }}>
                    Instalação, programação e assistência técnica a automatismos Motorline
                    para portões de correr, portões de batente e portões de garagem.
                    Diagnóstico de motores, centrais eletrónicas, comandos, fotocélulas
                    e sistemas de segurança.
                    </p>
                    
                    <p style={{
                    fontSize:"16px",
                    lineHeight:"1.7",
                    color:"#666",
                    maxWidth:"650px",
                    marginBottom:"34px"
                    }}>
                    Serviço técnico independente para automatismos Motorline.
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
                    src="/automatismos-motorline-portoes-hero.png"
                    alt="Instalação e assistência a automatismos Motorline para portões"
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
                                           Serviços em automatismos Motorline
                                           </h2>
                                           
                                           <p style={{
                                           fontSize:"19px",
                                           lineHeight:"1.7",
                                           color:"#555",
                                           maxWidth:"830px",
                                           margin:"0 auto 45px auto",
                                           textAlign:"center"
                                           }}>
                                           A TecCasa Soluções presta apoio técnico em sistemas Motorline para portões automáticos,
                                           desde a instalação inicial até à programação, substituição, afinação e diagnóstico de avarias.
                                           </p>
                                           
                                           <div
                                           className="problemas-grid"
                                           style={{
                                           display:"grid",
                                           gridTemplateColumns:"repeat(3,1fr)",
                                           gap:"22px"
                                           }}
                                           >
                                           
                                           {[
                                           {
                                           title:"Instalação de automatismos",
                                           text:"Montagem de motores Motorline em portões de correr, portões de batente e portões de garagem, de acordo com as condições do local."
                                           },
                                           
                                           {
                                           title:"Substituição de motores",
                                           text:"Troca de automatismos antigos ou avariados por soluções adequadas ao peso, uso e tipo de portão."
                                           },
                                           
                                           {
                                           title:"Programação de comandos",
                                           text:"Configuração de comandos, recetores e sistemas de abertura para utilização diária simples e segura."
                                           },
                                           
                                           {
                                           title:"Centrais eletrónicas",
                                           text:"Diagnóstico e parametrização de centrais Motorline, incluindo tempos, força, abrandamento e modos de funcionamento."
                                           },
                                           
                                           {
                                           title:"Fotocélulas e segurança",
                                           text:"Instalação, verificação e afinação de fotocélulas, sistemas de segurança e proteção durante abertura e fecho."
                                           },
                                           
                                           {
                                           title:"Afinação do portão",
                                           text:"Ajuste de curso, força, paragens, atraso entre folhas e comportamento geral do automatismo."
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
                                                              style={{
                                                              padding:"10px 0 70px"
                                                              }}
                                                              >
                                                              
                                                              <h2 style={{
                                                              fontSize:"38px",
                                                              color:"#08285c",
                                                              marginBottom:"18px",
                                                              textAlign:"center"
                                                              }}>
                                                              Automatismos Motorline para diferentes tipos de portão
                                                              </h2>
                                                              
                                                              <p style={{
                                                              fontSize:"19px",
                                                              lineHeight:"1.7",
                                                              color:"#555",
                                                              maxWidth:"830px",
                                                              margin:"0 auto 42px auto",
                                                              textAlign:"center"
                                                              }}>
                                                              Os automatismos Motorline podem ser aplicados em diferentes tipos de portão,
                                                              desde que o equipamento seja adequado ao peso, dimensões, frequência de utilização
                                                              e condições mecânicas da instalação.
                                                              </p>
                                                              
                                                              <div
                                                              style={{
                                                              display:"grid",
                                                              gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
                                                              gap:"22px"
                                                              }}
                                                              >
                                                              
                                                              {[
                                                              {
                                                              title:"Portões de correr",
                                                              text:"Instalação e assistência a motores Motorline para portões de correr, incluindo cremalheira, fins de curso, comandos, fotocélulas e afinação de força."
                                                              },
                                                              
                                                              {
                                                              title:"Portões de batente",
                                                              text:"Montagem, programação e diagnóstico de automatismos Motorline para portões de duas folhas, com afinação de tempos, atraso entre folhas e abertura pedonal."
                                                              },
                                                              
                                                              {
                                                              title:"Portões de garagem",
                                                              text:"Assistência a motores Motorline para portões seccionados ou basculantes, com verificação de calhas, desbloqueio manual, comandos e força de abertura."
                                                              },
                                                              
                                                              {
                                                              title:"Substituição de sistemas antigos",
                                                              text:"Avaliação de automatismos antigos ou avariados e substituição por soluções compatíveis com o tipo de portão e utilização diária."
                                                              }
                                                              
                                                              ].map((item,index)=>(
                                                              
                                                              <div
                                                              key={index}
                                                              style={{
                                                              background:"#f5f8fc",
                                                              borderRadius:"24px",
                                                              padding:"30px 26px",
                                                              boxShadow:"0 12px 28px rgba(11,44,95,0.07)",
                                                              border:"1px solid rgba(11,44,95,0.06)"
                                                              }}
                                                              >
                                                              
                                                              <h3 style={{
                                                              color:"#08285c",
                                                              fontSize:"23px",
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

                                                                                         <div
                                                                                         style={{
                                                                                         display:"grid",
                                                                                         gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
                                                                                         gap:"16px"
                                                                                         }}
                                                                                         >
                                                                                         
                                                                                         {[
                                                                                         {
                                                                                         title:"O portão não fecha",
                                                                                         href:"/portao-nao-fecha",
                                                                                         text:"Quando o portão fica aberto, não completa o fecho ou parece bloquear por segurança."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         title:"O portão fecha e volta a abrir",
                                                                                         href:"/portao-fecha-e-volta-a-abrir",
                                                                                         text:"Quando o automatismo inicia o fecho mas inverte o movimento."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         title:"O portão abre só uma folha",
                                                                                         href:"/portao-abre-so-uma-folha",
                                                                                         text:"Situação comum em portões de batente com dois motores."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         title:"O portão abre apenas até meio",
                                                                                         href:"/portao-abre-ate-meio",
                                                                                         text:"Quando o portão interrompe o percurso antes de abrir totalmente."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         title:"Motor faz barulho mas não abre",
                                                                                         href:"/motor-portao-faz-barulho-mas-nao-abre",
                                                                                         text:"Quando o motor trabalha, mas o portão não se movimenta."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         title:"Motor do portão sem força",
                                                                                         href:"/motor-portao-sem-forca",
                                                                                         text:"Quando o motor abre devagar, pára a meio ou precisa de ajuda."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         title:"Portão de garagem não abre",
                                                                                         href:"/portao-garagem-nao-abre",
                                                                                         text:"Para motores de teto, portões seccionados, basculantes e sistemas de garagem."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         title:"Comando da garagem não funciona",
                                                                                         href:"/comando-garagem-nao-funciona",
                                                                                         text:"Quando o comando deixou de abrir o portão ou perdeu programação."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         title:"Comando só funciona perto",
                                                                                         href:"/comando-garagem-so-funciona-perto",
                                                                                         text:"Quando o comando tem pouco alcance ou falha o sinal RF."
                                                                                         }
                                                                                         
                                                                                         ].map((item,index)=>(
                                                                                         
                                                                                         <a
                                                                                         key={index}
                                                                                         href={item.href}
                                                                                         style={{
                                                                                         display:"flex",
                                                                                         flexDirection:"column",
                                                                                         height:"100%",
                                                                                         background:"#eef3fa",
                                                                                         borderRadius:"22px",
                                                                                         padding:"22px 22px",
                                                                                         textDecoration:"none",
                                                                                         boxShadow:"0 10px 24px rgba(11,44,95,0.07)",
                                                                                         border:"1px solid rgba(11,44,95,0.05)",
                                                                                         transition:"transform .25s ease, box-shadow .25s ease"
                                                                                         }}
                                                                                         onMouseEnter={(e)=>{
                                                                                         e.currentTarget.style.transform="translateY(-5px)"
                                                                                         e.currentTarget.style.boxShadow="0 16px 32px rgba(11,44,95,0.12)"
                                                                                         }}
                                                                                         onMouseLeave={(e)=>{
                                                                                         e.currentTarget.style.transform="translateY(0)"
                                                                                         e.currentTarget.style.boxShadow="0 10px 24px rgba(11,44,95,0.07)"
                                                                                         }}
                                                                                         >
                                                                                         
                                                                                         <h3 style={{
                                                                                         color:"#08285c",
                                                                                         fontSize:"21px",
                                                                                         margin:"0 0 10px 0"
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
                                                                                         
                                                                                         <span style={{
                                                                                         color:"#08285c",
                                                                                         fontWeight:"bold",
                                                                                         fontSize:"15px",
                                                                                         textDecoration:"underline",
                                                                                         marginTop:"auto",
                                                                                         paddingTop:"14px"
                                                                                         }}>
                                                                                         Saber mais
                                                                                         </span>
                                                                                         
                                                                                         </a>
                                                                                         
                                                                                         ))}
                                                                                         
                                                                                         </div>

                                                      <section
                                                      style={{
                                                      padding:"10px 0 70px"
                                                      }}
                                                      >
                                                      
                                                      <h2 style={{
                                                      fontSize:"38px",
                                                      color:"#08285c",
                                                      marginBottom:"18px",
                                                      textAlign:"center"
                                                      }}>
                                                      Verificação do motor, esforço e movimento do portão
                                                      </h2>
                                                      
                                                      <p style={{
                                                      fontSize:"19px",
                                                      lineHeight:"1.7",
                                                      color:"#555",
                                                      maxWidth:"840px",
                                                      margin:"0 auto 42px auto",
                                                      textAlign:"center"
                                                      }}>
                                                      Prestamos assistência a motores de portões automáticos que perderam força,
                                                      abrem devagar, param a meio ou precisam de ajuda para movimentar o portão.
                                                      O diagnóstico pode envolver o motor, a central, o condensador e o próprio esforço mecânico da instalação.
                                                      </p>
                                                      
                                                      <div
                                                      style={{
                                                      display:"grid",
                                                      gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",
                                                      gap:"22px",
                                                      marginBottom:"36px"
                                                      }}
                                                      >
                                                      
                                                      {[
                                                      {
                                                      title:"Portões de correr",
                                                      text:"Verificação de rodas, calha, cremalheira, pinhão, peso do portão e força de arranque do motor."
                                                      },
                                                      
                                                      {
                                                      title:"Portões de batente",
                                                      text:"Análise de braços, dobradiças, condensadores, afinação de força e esforço individual de cada folha."
                                                      },
                                                      
                                                      {
                                                      title:"Portões de garagem",
                                                      text:"Diagnóstico de motores de teto, calhas, molas, equilíbrio do portão e sistemas seccionados ou basculantes."
                                                      },
                                                      
                                                      {
                                                      title:"Afinação e componentes",
                                                      text:"Teste de condensador, força da central, abrandamento, alimentação elétrica e sinais de desgaste do automatismo."
                                                      }
                                                      
                                                      ].map((item,index)=>(
                                                      
                                                      <div
                                                      key={index}
                                                      style={{
                                                      background:"#eef3fa",
                                                      borderRadius:"24px",
                                                      padding:"28px 24px",
                                                      boxShadow:"0 12px 28px rgba(11,44,95,0.07)",
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
                                                      
                                                      <div
                                                      className="marcas-grid"
                                                      style={{
                                                      display:"grid",
                                                      gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",
                                                      gap:"16px"
                                                      }}
                                                      >
                                                      
                                                      {[
                                                      "Motorline",
                                                      "BFT",
                                                      "Nice",
                                                      "Ditec",
                                                      "Roger",
                                                      "CAME",
                                                      "FAAC",
                                                      "DEA",
                                                      "Beninca",
                                                      "Somfy",
                                                      "V2",
                                                      "outras marcas"
                                                      ].map((marca,index)=>(
                                                      
                                                      <div
                                                      key={index}
                                                      className="cartao-marca"
                                                      style={{
                                                      background:"#f5f8fc",
                                                      padding:"18px 14px",
                                                      borderRadius:"18px",
                                                      textAlign:"center",
                                                      fontWeight:"bold",
                                                      color:"#08285c",
                                                      boxShadow:"0 10px 24px rgba(11,44,95,0.07)"
                                                      }}
                                                      >
                                                      {marca}
                                                      </div>
                                                      
                                                      ))}
                                                      
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
                        O motor do portão perdeu força?
                        </h2>
                        
                        <p style={{
                        fontSize:"20px",
                        lineHeight:"1.8",
                        color:"#555",
                        maxWidth:"820px",
                        margin:"0 auto 35px auto"
                        }}>
                        Se o portão abre devagar, pára a meio ou só se movimenta quando é ajudado manualmente,
                        não force o automatismo. A causa pode estar no condensador, no esforço mecânico,
                        na afinação da central ou no desgaste do próprio motor.
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
                                                          }
                                                        
                                                          body {
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

                                                        .hero-reparacao{
                                                        display:flex !important;
                                                        flex-direction:column !important;
                                                        gap:24px !important;
                                                        padding:28px 0 10px 0 !important;
                                                        text-align:center !important;
                                                        overflow:hidden !important;
                                                      }
                                                      
                                                      .hero-reparacao > div{
                                                        width:100% !important;
                                                        max-width:100% !important;
                                                        box-sizing:border-box !important;
                                                      }
                                                      
                                                      .hero-reparacao h1{
                                                        font-size:31px !important;
                                                        line-height:1.12 !important;
                                                        text-align:center !important;
                                                        margin:0 auto 18px auto !important;
                                                        max-width:330px !important;
                                                      }
                                                      
                                                      .hero-reparacao p{
                                                        font-size:17px !important;
                                                        line-height:1.55 !important;
                                                        text-align:center !important;
                                                        margin:0 auto 26px auto !important;
                                                        max-width:330px !important;
                                                      }
                                                      
                                                      .hero-reparacao a{
                                                        display:block !important;
                                                        width:100% !important;
                                                        max-width:300px !important;
                                                        margin:0 auto !important;
                                                        text-align:center !important;
                                                        box-sizing:border-box !important;
                                                        padding:15px 18px !important;
                                                        font-size:16px !important;
                                                      }
                                                      
                                                      .hero-reparacao img{
                                                        width:100% !important;
                                                        max-width:330px !important;
                                                        border-radius:22px !important;
                                                        margin:0 auto !important;
                                                        display:block !important;
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
