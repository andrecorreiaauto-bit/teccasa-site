export default function Home() {
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
        
    <img
  src="/Logo.png"
  style={{
    width:"300px",
    marginBottom:"20px"
  }}
/>

<p style={{
  fontSize:"22px",
  color:"#555",
  fontWeight:"bold"
}}>
Automatismos • Reparações • Soluções Inteligentes
</p>

        <hr/>

        <h2>Serviços</h2>

        <div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"15px",
marginTop:"20px"
}}>

<div style={{padding:"20px",background:"#f5f7fb",borderRadius:"15px"}}>
<h3>⚙️ Automatismos</h3>
<p>Instalação e substituição de motores para portões.</p>
</div>

<div style={{padding:"20px",background:"#f5f7fb",borderRadius:"15px"}}>
<h3>🔧 Diagnóstico</h3>
<p>Deteção de avarias e reparações técnicas.</p>
</div>

<div style={{padding:"20px",background:"#f5f7fb",borderRadius:"15px"}}>
<h3>📡 Comandos</h3>
<p>Comandos, recetores, programação e clonagem.</p>
</div>

<div style={{padding:"20px",background:"#f5f7fb",borderRadius:"15px"}}>
<h3>🏠 Domótica</h3>
<p>Soluções smart home para tornar a casa mais prática e eficiente.</p>
</div>

<div style={{padding:"20px",background:"#f5f7fb",borderRadius:"15px"}}>
<h3>🎥 Vigilância</h3>
<p>Câmaras, segurança doméstica e controlo remoto simples.</p>
</div>

<div style={{padding:"20px",background:"#f5f7fb",borderRadius:"15px"}}>
<h3>💡 Soluções técnicas</h3>
<p>Fotocélulas, pequenas intervenções elétricas e melhorias.</p>
</div>

</div>

        <h2>Precisa de ajuda?</h2>

        <p>
          Envie fotografia do motor ou explique a avaria.
        </p>

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
   display:"inline-block"
 }}
>
Pedir ajuda
</a>

      </div>

    </div>
  )
}
