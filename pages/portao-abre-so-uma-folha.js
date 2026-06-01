import { useEffect, useState } from "react";
import Head from "next/head";
export default function PortaoAbreSoUmaFolha() {
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
                                                  Portão Abre Só Uma Folha? Reparação de Portões de Batente | TecCasa Soluções
                                                  </title>
                                                  
                                                  <meta
                                                  name="description"
                                                  content="O portão automático abre só uma folha? Diagnóstico de motores de batente, centrais, condensadores, cablagem, braços articulados e programação."
                                                  />
                                                  
                                                  <meta
                                                  name="keywords"
                                                  content="portão abre só uma folha,
                                                  portão automático abre só de um lado,
                                                  portão de batente avariado,
                                                  portão duas folhas não abre,
                                                  motor portão batente,
                                                  reparação portões automáticos,
                                                  automatismos portões,
                                                  assistência portões de batente,
                                                  TecCasa Soluções"
                                                  />
                                                  
                                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                                  
                                                  <meta property="og:title" content="Portão Abre Só Uma Folha? | TecCasa Soluções" />
                                                  
                                                  <meta
                                                  property="og:description"
                                                  content="Assistência técnica para portões automáticos de duas folhas que abrem apenas de um lado."
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
                                                  content="https://tec-casa.pt/portao-abre-so-uma-folha"
                                                  />
                                                  
                                                  <meta property="og:type" content="website" />
                                                  
                                                  <link rel="icon" href="/favicon.ico" />
                                                  
                                                  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                                                  
                                                  <link rel="manifest" href="/site.webmanifest" />
                                                  
                                                  <link rel="canonical" href="https://tec-casa.pt/portao-abre-so-uma-folha" />
                                                  
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
                    O portão abre só uma folha?
                    </h1>
                    
                    <p style={{
                    fontSize:"21px",
                    lineHeight:"1.8",
                    color:"#444",
                    maxWidth:"700px",
                    marginBottom:"34px"
                    }}>
                    Quando um portão automático de duas folhas abre apenas de um lado,
                    a avaria pode estar num dos motores, na central eletrónica, na cablagem,
                    no condensador ou na programação dos tempos de abertura.
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
                    src="/portao-abre-so-uma-folha-hero.png"
                    alt="Portão automático abre só uma folha"
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
                                    Porque é que só abre uma folha do portão?
                                    </h2>
                                    
                                    <p style={{
                                    fontSize:"19px",
                                    lineHeight:"1.7",
                                    color:"#555",
                                    maxWidth:"800px",
                                    margin:"0 auto 45px auto",
                                    textAlign:"center"
                                    }}>
                                    Num portão automático de batente com duas folhas, cada lado pode depender de motor,
                                    cablagem, condensador, afinação mecânica e programação próprios. Quando apenas uma folha
                                    abre, é importante perceber se a falha está no automatismo ou no movimento físico do portão.
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
                                    image:"/motor-batente-parado.png",
                                    title:"Motor de uma folha parado",
                                    text:"Um dos motores pode deixar de responder por falha interna, alimentação incorreta ou desgaste do automatismo."
                                    },
                                    
                                    {
                                    image:"/condensador-portao-batente.png",
                                    title:"Condensador com falha",
                                    text:"Em alguns motores, o condensador degradado pode fazer com que uma folha perca força ou nem chegue a arrancar."
                                    },
                                    
                                    {
                                    image:"/cablagem-motor-portao.png",
                                    title:"Problema na cablagem",
                                    text:"Fios partidos, ligações oxidadas ou caixas de derivação com humidade podem interromper o funcionamento de um lado."
                                    },
                                    
                                    {
                                    image:"/central-duas-folhas.png",
                                    title:"Central não aciona uma saída",
                                    text:"A central eletrónica pode estar a comandar apenas um motor devido a avaria, configuração incorreta ou erro de programação."
                                    },
                                    
                                    {
                                    image:"/braco-batente-preso.png",
                                    title:"Braço ou dobradiça preso",
                                    text:"Se a folha estiver presa, desalinhada ou com dobradiças em esforço, o motor pode não conseguir iniciar o movimento."
                                    },
                                    
                                    {
                                    image:"/programacao-duas-folhas.png",
                                    title:"Tempos mal programados",
                                    text:"Alterações na programação podem afetar o atraso entre folhas, o tempo de trabalho ou a força aplicada em cada motor."
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
                                                               Quando pode ser problema mecânico?
                                                               </h2>
                                                               
                                                               <p style={{
                                                               fontSize:"18px",
                                                               lineHeight:"1.75",
                                                               color:"#555",
                                                               marginBottom:"24px"
                                                               }}>
                                                               Se uma das folhas do portão estiver presa, desalinhada ou a fazer mais esforço do que o normal,
                                                               o motor pode não conseguir iniciar o movimento ou pode parar por proteção.
                                                               </p>
                                                               
                                                               <ul style={{
                                                               listStyle:"none",
                                                               padding:"0",
                                                               margin:"0",
                                                               display:"grid",
                                                               gap:"14px"
                                                               }}>
                                                               
                                                               {[
                                                               "Uma folha parece mais pesada do que a outra",
                                                               "O portão bate no chão ou no batente",
                                                               "A dobradiça está presa, solta ou desalinhada",
                                                               "O braço do motor está em esforço",
                                                               "A folha não se move bem mesmo em modo manual"
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
                                                               Quando pode ser problema elétrico?
                                                               </h2>
                                                               
                                                               <p style={{
                                                               fontSize:"18px",
                                                               lineHeight:"1.75",
                                                               color:"#555",
                                                               marginBottom:"24px"
                                                               }}>
                                                               Quando uma folha não dá qualquer sinal, não arranca ou deixou de responder de repente,
                                                               a falha pode estar no motor, na central, na cablagem ou na programação do automatismo.
                                                               </p>
                                                               
                                                               <ul style={{
                                                               listStyle:"none",
                                                               padding:"0",
                                                               margin:"0",
                                                               display:"grid",
                                                               gap:"14px"
                                                               }}>
                                                               
                                                               {[
                                                               "Um dos motores não faz qualquer ruído",
                                                               "A central só aciona uma das folhas",
                                                               "Há sinais de humidade em caixas ou ligações",
                                                               "O problema começou após mexer na programação",
                                                               "Uma folha abre normalmente e a outra fica parada"
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
                             Diagnóstico em portões de duas folhas
                             </h2>
                             
                             <p style={{
                             fontSize:"19px",
                             lineHeight:"1.75",
                             color:"#555",
                             maxWidth:"840px",
                             margin:"0 auto 42px auto",
                             textAlign:"center"
                             }}>
                             Quando apenas uma folha do portão abre, é importante testar cada lado separadamente.
                             O objetivo é perceber se a avaria está no motor, na central, na cablagem,
                             na programação ou no próprio movimento mecânico da folha.
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
                             title:"Teste em modo manual",
                             text:"Verificamos se cada folha se movimenta livremente sem o esforço do motor."
                             },
                             
                             {
                             number:"2",
                             title:"Verificação dos motores",
                             text:"Confirmamos se ambos os motores recebem ordem de abertura e se algum deles perdeu força."
                             },
                             
                             {
                             number:"3",
                             title:"Análise da central",
                             text:"Testamos as saídas da central, a programação de duas folhas e os tempos de abertura."
                             },
                             
                             {
                             number:"4",
                             title:"Cablagem e ligações",
                             text:"Procuramos falhas em fios, caixas de derivação, ligações oxidadas ou sinais de humidade."
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
                                                  Assistência em portões automáticos de batente
                                                  </h2>
                                                  
                                                  <p style={{
                                                  fontSize:"19px",
                                                  lineHeight:"1.7",
                                                  color:"#555",
                                                  maxWidth:"820px",
                                                  margin:"0 auto 42px auto",
                                                  textAlign:"center"
                                                  }}>
                                                  Prestamos assistência a portões residenciais de duas folhas, com motores de batente,
                                                  braços articulados, motores enterrados e centrais eletrónicas configuradas para abertura total ou pedonal.
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
                                                  title:"Motores de batente",
                                                  text:"Diagnóstico de motores instalados em pilares ou folhas do portão, com abertura interior ou exterior."
                                                  },
                                                  
                                                  {
                                                  title:"Braços articulados",
                                                  text:"Verificação de folgas, esforço mecânico, curso de abertura e funcionamento individual de cada braço."
                                                  },
                                                  
                                                  {
                                                  title:"Centrais de duas folhas",
                                                  text:"Análise da programação, tempos de atraso, força aplicada e comandos de abertura total ou parcial."
                                                  },
                                                  
                                                  {
                                                  title:"Instalações residenciais",
                                                  text:"Assistência em portões de moradias, entradas particulares e acessos exteriores com automatismos multimarca."
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
                                                  "Roger",
                                                  "Somfy",
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
                                                                            Uma das folhas do portão deixou de abrir?
                                                                            </h2>
                                                                            
                                                                            <p style={{
                                                                            fontSize:"20px",
                                                                            lineHeight:"1.8",
                                                                            color:"#555",
                                                                            maxWidth:"800px",
                                                                            margin:"0 auto 35px auto"
                                                                            }}>
                                                                            Se o portão abre apenas de um lado, não force manualmente o automatismo.
                                                                            A falha pode estar no motor, na central, na cablagem, na afinação mecânica ou na programação das duas folhas.
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
