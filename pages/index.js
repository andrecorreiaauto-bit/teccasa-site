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

        <ul style={{lineHeight:"2"}}>
          <li>Instalação de automatismos para portões</li>
          <li>Diagnóstico e reparação</li>
          <li>Comandos e recetores</li>
          <li>Fotocélulas e centrais</li>
          <li>Pequenas soluções elétricas</li>
        </ul>

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
