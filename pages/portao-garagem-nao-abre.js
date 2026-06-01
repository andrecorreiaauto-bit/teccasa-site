import { useEffect, useState } from "react";
import Head from "next/head";
export default function PortaoGaragemNaoAbre() {
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
                                                  Portão de Garagem Não Abre? Assistência Técnica | TecCasa Soluções
                                                  </title>
                                                  
                                                  <meta
                                                  name="description"
                                                  content="O portão de garagem não abre? Diagnóstico de motores de teto, portões seccionados, basculantes, comandos, calhas, desbloqueio manual, fotocélulas e automatismos."
                                                  />
                                                  
                                                  <meta
                                                  name="keywords"
                                                  content="portão de garagem não abre,
                                                  portão garagem automático não abre,
                                                  motor garagem não abre,
                                                  portão seccionado não abre,
                                                  portão basculante não abre,
                                                  motor de teto garagem,
                                                  reparação portão garagem,
                                                  assistência portões garagem,
                                                  automatismos garagem,
                                                  TecCasa Soluções"
                                                  />
                                                  
                                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                                  
                                                  <meta property="og:title" content="Portão de Garagem Não Abre? | TecCasa Soluções" />
                                                  
                                                  <meta
                                                  property="og:description"
                                                  content="Assistência técnica para portões de garagem automáticos que deixaram de abrir, incluindo motores de teto, portões seccionados e basculantes."
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
                                                  content="https://tec-casa.pt/portao-garagem-nao-abre"
                                                  />
                                                  
                                                  <meta property="og:type" content="website" />
                                                  
                                                  <link rel="icon" href="/favicon.ico" />
                                                  
                                                  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                                                  
                                                  <link rel="manifest" href="/site.webmanifest" />
                                                  
                                                  <link rel="canonical" href="https://tec-casa.pt/portao-garagem-nao-abre" />
                                                  
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
                    
                    <h1 style={{
                    fontSize:"clamp(40px,5vw,56px)",
                    lineHeight:"1.05",
                    marginBottom:"24px",
                    color:"#08285c",
                    fontWeight:"900"
                    }}>
                    O portão da garagem não abre?
                    </h1>
                    
                    <p style={{
                    fontSize:"21px",
                    lineHeight:"1.8",
                    color:"#444",
                    maxWidth:"700px",
                    marginBottom:"34px"
                    }}>
                    Quando o portão de garagem deixa de abrir, o problema pode estar no comando,
                    no motor de teto, nas calhas, no desbloqueio manual, nas fotocélulas,
                    na central eletrónica ou no esforço mecânico do portão.
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
                    href="#causas"
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
                    Ver possíveis causas
                    </a>
                    
                    </div>
                    
                    </div>
                    
                    <div style={{
                    display:"flex",
                    justifyContent:"center"
                    }}>
                    
                    <img
                    src="/portao-garagem-nao-abre-hero.png"
                    alt="Portão de garagem não abre"
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
                                           id="causas"
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
                                           Porque é que o portão da garagem não abre?
                                           </h2>
                                           
                                           <p style={{
                                           fontSize:"19px",
                                           lineHeight:"1.7",
                                           color:"#555",
                                           maxWidth:"820px",
                                           margin:"0 auto 45px auto",
                                           textAlign:"center"
                                           }}>
                                           Quando um portão de garagem automático deixa de abrir, a origem pode estar no comando,
                                           no motor de teto, nas calhas, no sistema de desbloqueio, nas molas, nas fotocélulas
                                           ou na própria central eletrónica do automatismo.
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
                                           image:"/motor-teto-garagem.png",
                                           title:"Motor de teto sem resposta",
                                           text:"O motor pode não receber sinal, estar sem alimentação ou ter uma avaria interna que impede a abertura."
                                           },
                                           
                                           {
                                           image:"/calhas-portao-garagem.png",
                                           title:"Calhas ou guias presas",
                                           text:"Nos portões seccionados ou basculantes, calhas desalinhadas ou com resistência podem bloquear o movimento."
                                           },
                                           
                                           {
                                           image:"/comando-garagem-falha-sinal.png",
                                           title:"Comando sem sinal",
                                           text:"O problema pode estar no comando, na pilha, no recetor RF ou na programação do automatismo."
                                           },
                                           
                                           {
                                           image:"/desbloqueio-garagem.png",
                                           title:"Desbloqueio manual mal encaixado",
                                           text:"Se o sistema de desbloqueio estiver acionado ou mal reposto, o motor pode trabalhar sem mover o portão."
                                           },
                                           
                                           {
                                           image:"/molas-portao-garagem.png",
                                           title:"Molas ou equilíbrio do portão",
                                           text:"Um portão de garagem pesado ou desequilibrado pode impedir o motor de conseguir iniciar a abertura."
                                           },
                                           
                                           {
                                           image:"/central-garagem-avaria.png",
                                           title:"Falha na central eletrónica",
                                           text:"A central pode estar em erro, com ligação defeituosa ou com parâmetros que impedem a abertura correta."
                                           }
                                           
                                           ].map((item,index)=>(
                                           
                                           <div
                                           key={index}
                                           style={{
                                           background:"#eef3fa",
                                           borderRadius:"24px",
                                           overflow:"hidden",
                                           boxShadow:"0 12px 30px rgba(11,44,95,0.08)"
                                           }}
                                           >
                                           
                                           <img
                                           src={item.image}
                                           alt={item.title}
                                           style={{
                                           width:"100%",
                                           height:"190px",
                                           objectFit:"cover",
                                           display:"block"
                                           }}
                                           />
                                           
                                           <div style={{
                                           padding:"24px"
                                           }}>
                                           
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
                                           
                                           </div>
                                           
                                           ))}
                                           
                                           </div>
                                           
                                           </section>

                                                              <section
                                                              style={{
                                                              padding:"10px 0 70px"
                                                              }}
                                                              >
                                                              
                                                              <div style={{
                                                              display:"grid",
                                                              gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
                                                              gap:"28px",
                                                              alignItems:"stretch"
                                                              }}>
                                                              
                                                              <div style={{
                                                              background:"#f5f8fc",
                                                              borderRadius:"28px",
                                                              padding:"34px",
                                                              boxShadow:"0 14px 35px rgba(11,44,95,0.07)",
                                                              border:"1px solid rgba(11,44,95,0.06)"
                                                              }}>
                                                              
                                                              <h2 style={{
                                                              fontSize:"34px",
                                                              color:"#08285c",
                                                              marginBottom:"18px"
                                                              }}>
                                                              O que pode verificar primeiro?
                                                              </h2>
                                                              
                                                              <p style={{
                                                              fontSize:"18px",
                                                              lineHeight:"1.75",
                                                              color:"#555",
                                                              marginBottom:"24px"
                                                              }}>
                                                              Quando o portão da garagem não abre, existem algumas verificações simples que podem ajudar
                                                              a perceber se o problema está no comando, na alimentação elétrica ou no próprio movimento do portão.
                                                              </p>
                                                              
                                                              <ul style={{
                                                              listStyle:"none",
                                                              padding:"0",
                                                              margin:"0",
                                                              display:"grid",
                                                              gap:"14px"
                                                              }}>
                                                              
                                                              {[
                                                              "Confirmar se o comando tem pilha e se o LED acende normalmente",
                                                              "Testar o botão de parede ou outro comando, se existir",
                                                              "Verificar se o motor de teto tem alimentação elétrica",
                                                              "Observar se o portão tenta mexer ou fica completamente parado",
                                                              "Confirmar se o desbloqueio manual ficou bem encaixado"
                                                              ].map((item,index)=>(
                                                              
                                                              <li
                                                              key={index}
                                                              style={{
                                                              display:"flex",
                                                              gap:"12px",
                                                              alignItems:"flex-start",
                                                              fontSize:"17px",
                                                              lineHeight:"1.6",
                                                              color:"#444"
                                                              }}
                                                              >
                                                              <span style={{
                                                              color:"#25D366",
                                                              fontWeight:"bold",
                                                              fontSize:"20px",
                                                              lineHeight:"1.4"
                                                              }}>
                                                              ✓
                                                              </span>
                                                              <span>{item}</span>
                                                              </li>
                                                              
                                                              ))}
                                                              
                                                              </ul>
                                                              
                                                              </div>
                                                              
                                                              <div style={{
                                                              background:"#eef3fa",
                                                              borderRadius:"28px",
                                                              padding:"34px",
                                                              boxShadow:"0 14px 35px rgba(11,44,95,0.08)",
                                                              border:"1px solid rgba(11,44,95,0.06)"
                                                              }}>
                                                              
                                                              <h2 style={{
                                                              fontSize:"34px",
                                                              color:"#08285c",
                                                              marginBottom:"18px"
                                                              }}>
                                                              Quando não deve insistir?
                                                              </h2>
                                                              
                                                              <p style={{
                                                              fontSize:"18px",
                                                              lineHeight:"1.75",
                                                              color:"#555",
                                                              marginBottom:"24px"
                                                              }}>
                                                              Se o motor tenta abrir mas o portão não se move, insistir várias vezes pode forçar
                                                              o automatismo, danificar a transmissão ou agravar uma avaria mecânica nas calhas,
                                                              molas ou sistema de abertura.
                                                              </p>
                                                              
                                                              <ul style={{
                                                              listStyle:"none",
                                                              padding:"0",
                                                              margin:"0",
                                                              display:"grid",
                                                              gap:"14px"
                                                              }}>
                                                              
                                                              {[
                                                              "O motor faz barulho mas o portão não sobe",
                                                              "O portão sobe apenas alguns centímetros e pára",
                                                              "O movimento está torto, preso ou irregular",
                                                              "O portão parece pesado em modo manual",
                                                              "As calhas, roldanas ou molas parecem fora do sítio"
                                                              ].map((item,index)=>(
                                                              
                                                              <li
                                                              key={index}
                                                              style={{
                                                              display:"flex",
                                                              gap:"12px",
                                                              alignItems:"flex-start",
                                                              fontSize:"17px",
                                                              lineHeight:"1.6",
                                                              color:"#444"
                                                              }}
                                                              >
                                                              <span style={{
                                                              color:"#d97706",
                                                              fontWeight:"bold",
                                                              fontSize:"20px",
                                                              lineHeight:"1.4"
                                                              }}>
                                                              !
                                                              </span>
                                                              <span>{item}</span>
                                                              </li>
                                                              
                                                              ))}
                                                              
                                                              </ul>
                                                              
                                                              </div>
                                                              
                                                              </div>
                                                              
                                                              </section>
                                                               
                                                                                         <section
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
                                                                                         Diagnóstico técnico em portões de garagem
                                                                                         </h2>
                                                                                         
                                                                                         <p style={{
                                                                                         fontSize:"19px",
                                                                                         lineHeight:"1.75",
                                                                                         color:"#555",
                                                                                         maxWidth:"860px",
                                                                                         margin:"0 auto 42px auto",
                                                                                         textAlign:"center"
                                                                                         }}>
                                                                                         Quando um portão de garagem não abre, é importante analisar o sistema completo:
                                                                                         motor de teto, comando, calhas, desbloqueio manual, transmissão, equilíbrio do portão
                                                                                         e resposta da central eletrónica. Assim evitamos trocar peças sem confirmar a origem da avaria.
                                                                                         </p>
                                                                                         
                                                                                         <div style={{
                                                                                         display:"grid",
                                                                                         gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",
                                                                                         gap:"22px"
                                                                                         }}
                                                                                         >
                                                                                         
                                                                                         {[
                                                                                         {
                                                                                         number:"1",
                                                                                         title:"Teste do comando e botão",
                                                                                         text:"Verificamos se o comando, o botão de parede ou o recetor estão a enviar ordem ao automatismo."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         number:"2",
                                                                                         title:"Análise do motor de teto",
                                                                                         text:"Confirmamos se o motor recebe alimentação, tenta arrancar e transmite movimento corretamente."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         number:"3",
                                                                                         title:"Verificação das calhas",
                                                                                         text:"Analisamos calhas, roldanas, guias e pontos de atrito que possam impedir o portão de subir."
                                                                                         },
                                                                                         
                                                                                         {
                                                                                         number:"4",
                                                                                         title:"Avaliação do esforço",
                                                                                         text:"Testamos se o portão está equilibrado, pesado ou preso, principalmente em sistemas seccionados e basculantes."
                                                                                         }
                                                                                         
                                                                                         ].map((item,index)=>(
                                                                                         
                                                                                         <div
                                                                                         key={index}
                                                                                         style={{
                                                                                         background:"#eef3fa",
                                                                                         borderRadius:"24px",
                                                                                         padding:"28px 24px",
                                                                                         boxShadow:"0 12px 28px rgba(11,44,95,0.07)"
                                                                                         }}
                                                                                         >
                                                                                         
                                                                                         <div style={{
                                                                                         width:"42px",
                                                                                         height:"42px",
                                                                                         borderRadius:"50%",
                                                                                         background:"#08285c",
                                                                                         color:"white",
                                                                                         display:"flex",
                                                                                         alignItems:"center",
                                                                                         justifyContent:"center",
                                                                                         fontWeight:"bold",
                                                                                         fontSize:"18px",
                                                                                         marginBottom:"18px"
                                                                                         }}>
                                                                                         {item.number}
                                                                                         </div>
                                                                                         
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
                                                      Assistência em portões de garagem automáticos
                                                      </h2>
                                                      
                                                      <p style={{
                                                      fontSize:"19px",
                                                      lineHeight:"1.7",
                                                      color:"#555",
                                                      maxWidth:"840px",
                                                      margin:"0 auto 42px auto",
                                                      textAlign:"center"
                                                      }}>
                                                      Prestamos assistência a portões de garagem residenciais que deixaram de abrir,
                                                      incluindo sistemas com motor de teto, portões seccionados, portões basculantes,
                                                      calhas, comandos, recetores e automatismos multimarca.
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
                                                      title:"Portões seccionados",
                                                      text:"Verificação de calhas, roldanas, painéis, equilíbrio do portão e funcionamento do motor de teto."
                                                      },
                                                      
                                                      {
                                                      title:"Portões basculantes",
                                                      text:"Diagnóstico de esforço mecânico, braços, molas, desbloqueio manual e movimento de abertura."
                                                      },
                                                      
                                                      {
                                                      title:"Motores de teto",
                                                      text:"Análise da transmissão, alimentação elétrica, comando, recetor, corrente ou correia de acionamento."
                                                      },
                                                      
                                                      {
                                                      title:"Sistemas residenciais",
                                                      text:"Assistência em garagens de moradias, condomínios pequenos e acessos automáticos de uso diário."
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
                                                      "CAME",
                                                      "FAAC",
                                                      "DEA",
                                                      "Beninca",
                                                      "Somfy",
                                                      "Roger",
                                                      "V2",
                                                      "LiftMaster",
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
                        O portão da garagem deixou de abrir?
                        </h2>
                        
                        <p style={{
                        fontSize:"20px",
                        lineHeight:"1.8",
                        color:"#555",
                        maxWidth:"820px",
                        margin:"0 auto 35px auto"
                        }}>
                        Se o portão de garagem não abre, não force o motor nem tente levantar o portão sem perceber a causa.
                        O problema pode estar no comando, no motor de teto, nas calhas, no desbloqueio manual,
                        nas molas ou no esforço mecânico do sistema.
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
