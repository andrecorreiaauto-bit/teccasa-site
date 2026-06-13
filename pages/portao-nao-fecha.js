import { useEffect, useState } from "react";
import Head from "next/head";
export default function PortaoNaoFecha() {
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
                                                  Portão Não Fecha? Reparação de Portões e Garagens | TecCasa Soluções
                                                  </title>
                                                  
                                                  <meta
                                                  name="description"
                                                  content="O portão automático ou portão de garagem não fecha? Diagnóstico de fotocélulas, obstáculos, centrais, motores, fins de curso e sistemas de segurança."
                                                  />
                                                  
                                                  <meta
                                                  name="keywords"
                                                  content="portão não fecha,
                                                  portão automático não fecha,
                                                  portão de garagem não fecha,
                                                  portão fecha e volta a abrir,
                                                  reparação portões,
                                                  assistência portões automáticos,
                                                  fotocélulas portão,
                                                  motor portão garagem,
                                                  automatismos,
                                                  TecCasa Soluções"
                                                  />
                                                  
                                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                                  
                                                  <meta property="og:title" content="Portão Não Fecha? | TecCasa Soluções" />
                                                  
                                                  <meta
                                                  property="og:description"
                                                  content="Assistência técnica para portões automáticos e portões de garagem que não fecham corretamente."
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
                                                  content="https://tec-casa.pt/portao-nao-fecha"
                                                  />
                                                  
                                                  <meta property="og:type" content="website" />
                                                  
                                                  <link rel="icon" href="/favicon.ico" />
                                                  
                                                  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                                                  
                                                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                                                  
                                                  <link rel="manifest" href="/site.webmanifest" />
                                                  
                                                  <link rel="canonical" href="https://tec-casa.pt/portao-nao-fecha" />
                                                  
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
                    
                    <h1 style={{
                    fontSize:"clamp(40px,5vw,56px)",
                    lineHeight:"1.05",
                    marginBottom:"24px",
                    color:"#08285c",
                    fontWeight:"900"
                    }}>
                    O portão não fecha?
                    </h1>
                    
                    <p style={{
                    fontSize:"21px",
                    lineHeight:"1.8",
                    color:"#444",
                    maxWidth:"700px",
                    marginBottom:"34px"
                    }}>
                    Quando um portão automático ou portão de garagem deixa de fechar corretamente,
                    o problema pode estar nos sensores de segurança, obstáculos no percurso,
                    programação, central eletrónica ou no próprio automatismo.
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
                    src="/portao-nao-fecha-hero.png"
                    alt="Portão automático não fecha"
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
                                    Porque é que o portão não fecha?
                                    </h2>
                                    
                                    <p style={{
                                    fontSize:"19px",
                                    lineHeight:"1.7",
                                    color:"#555",
                                    maxWidth:"780px",
                                    margin:"0 auto 45px auto",
                                    textAlign:"center"
                                    }}>
                                    Quando um portão automático deixa de fechar, a causa pode estar num sistema de segurança ativo,
                                    num obstáculo no percurso, numa afinação incorreta ou numa falha no automatismo.
                                    O diagnóstico correto evita trocar peças sem necessidade.
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
                                    image:"/fotocelulas-bloqueadas.png",
                                    title:"Fotocélulas bloqueadas",
                                    text:"Se as fotocélulas estiverem sujas, desalinhadas ou com falha, o portão pode impedir o fecho por segurança."
                                    },
                                    
                                    {
                                    image:"/portao-volta-abrir.png",
                                    title:"Fecha e volta a abrir",
                                    text:"Quando o portão começa a fechar e volta atrás, pode estar a detetar esforço, obstáculo ou erro na segurança."
                                    },
                                    
                                    {
                                    image:"/obstaculo-fecho-portao.png",
                                    title:"Obstáculo no percurso",
                                    text:"Pedras, folhas acumuladas, objetos pequenos ou deformações podem impedir o fecho completo do portão."
                                    },
                                    
                                    {
                                    image:"/fim-curso-fecho.png",
                                    title:"Fim de curso desajustado",
                                    text:"Se o fim de curso estiver mal regulado, o automatismo pode não reconhecer corretamente a posição de fecho."
                                    },
                                    
                                    {
                                    image:"/central-modo-seguranca.png",
                                    title:"Central em proteção",
                                    text:"Algumas centrais interrompem o fecho quando detetam erro elétrico, falha de sensores ou parâmetros incorretos."
                                    },
                                    
                                    {
                                    image:"/motor-esforco-fecho.png",
                                    title:"Motor com esforço",
                                    text:"Desgaste mecânico, falta de força ou desalinhamento podem fazer o motor parar antes de fechar totalmente."
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
                                                               O que pode verificar antes de chamar assistência?
                                                               </h2>
                                                               
                                                               <p style={{
                                                               fontSize:"18px",
                                                               lineHeight:"1.75",
                                                               color:"#555",
                                                               marginBottom:"24px"
                                                               }}>
                                                               Algumas situações simples podem impedir o fecho do portão. Antes de forçar o motor
                                                               ou tentar alterar a programação, vale a pena confirmar se existe algo visível a bloquear
                                                               o sistema.
                                                               </p>
                                                               
                                                               <ul style={{
                                                               listStyle:"none",
                                                               padding:"0",
                                                               margin:"0",
                                                               display:"grid",
                                                               gap:"14px"
                                                               }}>
                                                               
                                                               {[
                                                               "Verificar se há obstáculos junto ao portão ou à calha",
                                                               "Confirmar se as fotocélulas estão limpas e alinhadas",
                                                               "Testar se o portão reage ao comando e ao botão interior",
                                                               "Observar se o motor tenta fechar ou fica completamente parado",
                                                               "Evitar insistir várias vezes se o automatismo estiver a fazer esforço"
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
                                                               Se o portão começa a fechar e volta a abrir, se o motor faz força em excesso
                                                               ou se o movimento parece preso, insistir pode agravar a avaria e danificar
                                                               componentes do automatismo.
                                                               </p>
                                                               
                                                               <ul style={{
                                                               listStyle:"none",
                                                               padding:"0",
                                                               margin:"0",
                                                               display:"grid",
                                                               gap:"14px"
                                                               }}>
                                                               
                                                               {[
                                                               "O motor faz barulho mas o portão não se move",
                                                               "O portão fecha um pouco e volta imediatamente atrás",
                                                               "O movimento está mais lento ou irregular do que o normal",
                                                               "A central apresenta erro ou luzes fora do habitual",
                                                               "O portão está desalinhado ou bate antes de fechar"
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
                             Diagnóstico técnico antes de substituir peças
                             </h2>
                             
                             <p style={{
                             fontSize:"19px",
                             lineHeight:"1.75",
                             color:"#555",
                             maxWidth:"820px",
                             margin:"0 auto 42px auto",
                             textAlign:"center"
                             }}>
                             Um portão que não fecha pode ter uma causa simples ou uma avaria mais técnica.
                             Por isso, antes de trocar motores, comandos ou centrais, verificamos o funcionamento
                             do sistema de segurança, o esforço do portão e a resposta do automatismo.
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
                             title:"Verificação visual",
                             text:"Confirmamos obstáculos, desalinhamentos, calhas, dobradiças e sinais de esforço mecânico."
                             },
                             
                             {
                             number:"2",
                             title:"Teste das seguranças",
                             text:"Analisamos fotocélulas, ligações, resposta da central e eventuais bloqueios de segurança."
                             },
                             
                             {
                             number:"3",
                             title:"Avaliação do motor",
                             text:"Verificamos se o automatismo tem força suficiente e se o movimento está regular."
                             },
                             
                             {
                             number:"4",
                             title:"Afinação ou reparação",
                             text:"Sempre que possível, corrigimos a avaria sem substituir componentes desnecessariamente."
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
                                                  Assistência em portões de garagem e automatismos exteriores
                                                  </h2>
                                                  
                                                  <p style={{
                                                  fontSize:"19px",
                                                  lineHeight:"1.7",
                                                  color:"#555",
                                                  maxWidth:"780px",
                                                  margin:"0 auto 40px auto",
                                                  textAlign:"center"
                                                  }}>
                                                  Prestamos assistência a portões de garagem, portões de correr e portões de batente
                                                  que não fecham corretamente, trabalhando com várias marcas e diferentes tipos de automatismo.
                                                  </p>
                                                  
                                                  <div
                                                  className="marcas-grid"
                                                  style={{
                                                  display:"grid",
                                                  gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",
                                                  gap:"16px",
                                                  marginTop:"30px",
                                                  marginBottom:"60px"
                                                  }}
                                                  >
                                                  
                                                  {[
                                                  { nome:"Motorline", href:"/automatismos-motorline-portoes" },
                                                  { nome:"BFT", href:"/automatismos-bft-portoes" },
                                                  { nome:"Nice", href:"/automatismos-nice-portoes" },
                                                  { nome:"CAME", href:"/automatismos-came-portoes" },
                                                  { nome:"FAAC", href:"/automatismos-faac-portoes" },
                                                  { nome:"Ditec", href:"/automatismos-ditec-portoes" },
                                                  { nome:"Beninca", href:"/automatismos-beninca-portoes" },
                                                  { nome:"Somfy", href:"/automatismos-somfy-portoes" },
                                                  { nome:"Roger", href:"/automatismos-roger-technology-portoes" },
                                                  { nome:"Hörmann", href:"/automatismos-hormann-portoes" },
                                                  { nome:"V2", href:"/automatismos-v2-portoes" },
                                                  { nome:"outras marcas", href:null }
                                                  ].map((marca,index)=>(
                                                  
                                                  marca.href ? (
                                                  
                                                  <a
                                                  key={index}
                                                  href={marca.href}
                                                  className="cartao-marca"
                                                  style={{
                                                  background:"#eef3fa",
                                                  borderRadius:"18px",
                                                  padding:"18px 14px",
                                                  textAlign:"center",
                                                  fontWeight:"bold",
                                                  color:"#08285c",
                                                  boxShadow:"0 10px 24px rgba(11,44,95,0.07)",
                                                  border:"1px solid rgba(11,44,95,0.05)",
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
                                                  e.currentTarget.style.background="#f9fbff"
                                                  }}
                                                  onMouseLeave={(e)=>{
                                                  e.currentTarget.style.transform="translateY(0)"
                                                  e.currentTarget.style.boxShadow="0 10px 24px rgba(11,44,95,0.07)"
                                                  e.currentTarget.style.background="#eef3fa"
                                                  }}
                                                  >
                                                  {marca.nome}
                                                  </a>
                                                  
                                                  ) : (
                                                  
                                                  <div
                                                  key={index}
                                                  className="cartao-marca"
                                                  style={{
                                                  background:"#eef3fa",
                                                  borderRadius:"18px",
                                                  padding:"18px 14px",
                                                  textAlign:"center",
                                                  fontWeight:"bold",
                                                  color:"#08285c",
                                                  boxShadow:"0 10px 24px rgba(11,44,95,0.07)",
                                                  border:"1px solid rgba(11,44,95,0.05)",
                                                  display:"flex",
                                                  alignItems:"center",
                                                  justifyContent:"center",
                                                  minHeight:"58px"
                                                  }}
                                                  >
                                                  {marca.nome}
                                                  </div>
                                                  
                                                  )
                                                  
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
                                                                            O portão deixou de fechar corretamente?
                                                                            </h2>
                                                                            
                                                                            <p style={{
                                                                            fontSize:"20px",
                                                                            lineHeight:"1.8",
                                                                            color:"#555",
                                                                            maxWidth:"780px",
                                                                            margin:"0 auto 35px auto"
                                                                            }}>
                                                                            Se o portão não fecha, fecha só parcialmente ou volta a abrir sozinho,
                                                                            o ideal é fazer um diagnóstico antes de forçar o automatismo ou alterar a programação.
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
                                                         
                                                           div[style*="grid-template-columns"]:not(.marcas-grid) {
                                                           grid-template-columns: 1fr !important;
                                                           width: 100% !important;
                                                           max-width: 100% !important;
                                                           box-sizing: border-box !important;
                                                         }
                                                         
                                                         div[style*="grid-template-columns"]:not(.marcas-grid) > * {
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

                                                            /* Marcas em 2 colunas no mobile */

                                                            .marcas-grid {
                                                              display: grid !important;
                                                              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                                                              gap: 12px !important;
                                                              width: 100% !important;
                                                              max-width: 100% !important;
                                                              box-sizing: border-box !important;
                                                            }
                                                            
                                                            .marcas-grid > * {
                                                              width: 100% !important;
                                                              max-width: none !important;
                                                              margin-left: 0 !important;
                                                              margin-right: 0 !important;
                                                              box-sizing: border-box !important;
                                                            }
                                                            
                                                            .cartao-marca {
                                                              width: 100% !important;
                                                              min-height: 48px !important;
                                                              padding: 12px 8px !important;
                                                              font-size: 15px !important;
                                                              border-radius: 14px !important;
                                                              text-align: center !important;
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
