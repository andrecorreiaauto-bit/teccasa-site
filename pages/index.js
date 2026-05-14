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

<h1 style={{
  color:"#0b2c5f",
  fontSize:"48px"
}}>
TecCasa Soluções
</h1>

        <p style={{
          fontSize:"22px",
          color:"#555"
        }}>
          Automatismos • Reparações • Soluções Técnicas
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

        <button style={{
          background:"#0b2c5f",
          color:"white",
          border:"none",
          padding:"15px 25px",
          borderRadius:"12px",
          fontSize:"18px",
          cursor:"pointer"
        }}>
          Pedir orçamento
        </button>

      </div>

    </div>
  )
}
