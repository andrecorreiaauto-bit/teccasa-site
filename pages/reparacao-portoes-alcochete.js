import { useEffect, useState } from "react";
import Head from "next/head";
export default function ReparacaoPortoes() {
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
  return (
                                                  <>
                                                  <Head>
                                                  
                                                  <title>
                                                  Reparação de Portões Automáticos em Alcochete | TecCasa Soluções
                                                  </title>
                                                  
                                                  <meta
                                                  name="description"
                                                  content="Reparação de portões automáticos em Alcochete. Assistência técnica a motores, automatismos, comandos e portões residenciais."
                                                  />
                                                  
                                                  <meta
                                                  name="keywords"
                                                  content="automatismos alcochete,
                                                   reparação portões,
                                                   portões garagem,
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

    <div style={{
      display:"flex",
      alignItems:"center",
      gap:"10px",
      fontWeight:"bold",
      color:"#08285c",
      fontSize:"20px"
    }}>
      <img src="/favicon.png" style={{width:"30px"}} />
      TecCasa Soluções
    </div>

    <button
      onClick={()=>setMenuOpen(!menuOpen)}
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
            }}>
            
            <div>
            
            <h1 style={{
            fontSize:"clamp(42px,5vw,58px)",
            lineHeight:"1.05",
            marginBottom:"26px",
            color:"#08285c",
            fontWeight:"900"
            }}>
            Reparação de Portões Automáticos em Alcochete
            </h1>
            
            <p style={{
            fontSize:"22px",
            lineHeight:"1.8",
            color:"#444",
            maxWidth:"700px",
            marginBottom:"35px"
            }}>
            Assistência técnica multimarca para portões automáticos em Alcochete, São Francisco, Samouco e zonas próximas. Diagnóstico claro antes de recomendar substituições.
            </p>
            
            <a
            href="#problemas"
            style={{
            display:"inline-block",
            background:"#08285c",
            color:"white",
            padding:"18px 30px",
            borderRadius:"16px",
            fontWeight:"bold",
            textDecoration:"none",
            fontSize:"18px",
            boxShadow:"0 10px 25px rgba(8,40,92,0.18)",
            transition:"0.3s"
            }}
            onMouseEnter={(e)=>{
            e.currentTarget.style.transform="translateY(-4px)"
            }}
            onMouseLeave={(e)=>{
            e.currentTarget.style.transform="translateY(0)"
            }}
            >
            Ver problemas comuns
            </a>
            
            </div>
            
            <div style={{
            display:"flex",
            justifyContent:"center"
            }}>
            
            <img
            src="/hero-reparacao-portoes.png"
            alt="Reparação de portões automáticos"
            style={{
            width:"100%",
            maxWidth:"620px",
            borderRadius:"32px",
            boxShadow:"0 25px 60px rgba(11,44,95,0.18)",
            objectFit:"cover"
            }}
            />
            
            </div>

</section>

    <section style={{
                                                          marginTop:"70px"
                                                        }}>
                                                        
                                                        <h2 style={{
                                                          color:"#08285c",
                                                          fontSize:"42px",
                                                          marginBottom:"18px",
                                                          textAlign:"center"
                                                        }}>
                                                          Como funciona a assistência técnica
                                                        </h2>
                                                        
                                                        <p style={{
                                                          textAlign:"center",
                                                          maxWidth:"850px",
                                                          margin:"0 auto 50px auto",
                                                          color:"#555",
                                                          fontSize:"20px",
                                                          lineHeight:"1.7"
                                                        }}>
                                                          Cada avaria é analisada de forma técnica e estruturada, evitando substituições desnecessárias e procurando identificar a verdadeira origem do problema.
                                                        </p>
                                                        
                                                        <div className="compromisso-grid" style={{
                                                          display:"grid",
                                                          gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
                                                          gap:"24px"
                                                        }}>
                                                        
                                                          {[
                                                            {
                                                              icon:"🔎",
                                                              title:"Análise do sintoma",
                                                              text:"Verificação do comportamento do portão, ruídos, falhas intermitentes e histórico da avaria."
                                                            },
                                                        
                                                            {
                                                              icon:"⚡",
                                                              title:"Verificação elétrica",
                                                              text:"Teste de alimentação, fotocélulas, recetores, comandos e centrais eletrónicas."
                                                            },
                                                        
                                                            {
                                                              icon:"⚙️",
                                                              title:"Diagnóstico técnico",
                                                              text:"Avaliação do motor, esforço, programação, fins de curso e sistemas de segurança."
                                                            },
                                                        
                                                            {
                                                              icon:"💬",
                                                              title:"Explicação clara",
                                                              text:"A origem da avaria é explicada antes de recomendar reparações ou substituições."
                                                            }
                                                        
                                                          ].map((item,index)=>(
                                                        
                                                            <div
                                                              key={index}
                                                              className="cartao-vantagem"
                                                              style={{
                                                                background:"linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)",
                                                                borderRadius:"24px",
                                                                padding:"34px 28px",
                                                                boxShadow:"0 12px 30px rgba(11,44,95,0.08)",
                                                                border:"1px solid rgba(11,44,95,0.05)"
                                                              }}
                                                            >
                                                        
                                                              <div style={{
                                                                fontSize:"44px",
                                                                marginBottom:"20px"
                                                              }}>
                                                                {item.icon}
                                                              </div>
                                                        
                                                              <h3 style={{
                                                                color:"#08285c",
                                                                fontSize:"24px",
                                                                marginBottom:"14px"
                                                              }}>
                                                                {item.title}
                                                              </h3>
                                                        
                                                              <p style={{
                                                                color:"#555",
                                                                lineHeight:"1.7",
                                                                margin:"0",
                                                                fontSize:"17px"
                                                              }}>
                                                                {item.text}
                                                              </p>
                                                        
                                                            </div>
                                                        
                                                          ))}
                                                        
                                                        </div>
                                                        
                                                        </section>
 <section id="problemas" style={{
  padding:"40px 20px 70px",
  maxWidth:"1100px",
  margin:"0 auto"
}}>
  <h2 style={{
    fontSize:"34px",
    color:"#08285c",
    marginBottom:"12px",
    textAlign:"center"
  }}>
    Problemas comuns em portões automáticos
  </h2>

  <p style={{
    fontSize:"18px",
    color:"#555",
    maxWidth:"760px",
    margin:"0 auto 35px",
    textAlign:"center",
    lineHeight:"1.6"
  }}>
    Estes são alguns dos sintomas mais frequentes. Antes de substituir peças,
    procuramos perceber a origem da avaria.
  </p>

  <div
    className="problemas-grid"
    style={{
      display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
      gap:"20px"
    }}
  >

   {[
  {
    image:"/portao-abre-ate-meio.png",
    title:"Portão abre até meio",
    text:"Pode estar relacionado com esforço, programação, fim de curso ou obstáculos no percurso."
  },
  {
    image:"/comando-portao.png",
    title:"Comando não funciona",
    text:"Pode ser pilha, comando desprogramado, recetor RF ou problema na central."
  },
  {
    image:"/fotocelulas-erro.png",
    title:"Fotocélulas em erro",
    text:"Fotocélulas desalinhadas, sujas, sem alimentação ou com cabos danificados."
  },
  {
    image:"/motor-portao.png",
    title:"Motor sem força",
    text:"Pode indicar desgaste mecânico, esforço excessivo ou parametrização incorreta."
  },
  {
    image:"/central-eletronica.png",
    title:"Central bloqueada",
    text:"Erros de programação, entradas de segurança ativas ou configuração alterada."
  },
  {
    image:"/portao-inverte-fecho.png",
    title:"Fecha e volta a abrir",
    text:"Normalmente associado a segurança, obstáculos, fotocélulas ou esforço mal calibrado."
  }
].map((item,index)=>(

  <div key={index} style={{
    background:"#e6edf7",
    borderRadius:"22px",
    overflow:"hidden",
    boxShadow:"0 12px 30px rgba(11,44,95,0.08)"
  }}>

    <img
      src={item.image}
      alt={item.title}
      style={{
        width:"100%",
        height:"180px",
        objectFit:"cover",
        display:"block"
      }}
    />

    <div style={{
      padding:"24px"
    }}>
      <h3 style={{
        color:"#08285c",
        fontSize:"21px",
        marginBottom:"12px"
      }}>
        {item.title}
      </h3>

      <p style={{
        color:"#333",
        lineHeight:"1.6",
        margin:"0"
      }}>
        {item.text}
      </p>
    </div>

  </div>

))}

  </div>
</section>

                                                <section style={{
                                                padding:"70px 20px",
                                                maxWidth:"1100px",
                                                margin:"0 auto"
                                              }}>
                                                <h1 style={{
                                                  fontSize:"42px",
                                                  color:"#08285c",
                                                  marginBottom:"18px"
                                                }}>
                                                  Reparação de Portões Automáticos em Alcochete
                                                </h1>
                                              
                                                <p style={{
                                                  fontSize:"20px",
                                                  lineHeight:"1.7",
                                                  color:"#444",
                                                  maxWidth:"850px"
                                                }}>
                                                  Prestamos assistência técnica em Alcochete, São Francisco, 
                                                  Samouco e zonas próximas, com reparação de automatismos, motores, 
                                                  comandos e portões automáticos residenciais. 
                                                  Diagnóstico claro antes de recomendar substituições.
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
                                                      background:"#25D366",
                                                      color:"white",
                                                      padding:"15px 24px",
                                                      borderRadius:"14px",
                                                      textDecoration:"none",
                                                      fontWeight:"bold"
                                                    }}
                                                  >
                                                    Pedir diagnóstico por WhatsApp
                                                  </a>
                                              
                                                  <a
                                                    href="tel:922021980"
                                                    style={{
                                                      background:"#08285c",
                                                      color:"white",
                                                      padding:"15px 24px",
                                                      borderRadius:"14px",
                                                      textDecoration:"none",
                                                      fontWeight:"bold"
                                                    }}
                                                  >
                                                    Ligar agora
                                                  </a>
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
