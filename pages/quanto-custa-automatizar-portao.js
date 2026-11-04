import ServiceCoverageNotice from "../components/ServiceCoverageNotice";
import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ConfiguratorButton from "../components/ConfiguratorButton";

const factors = [
  ["O portão e o seu movimento", "O tipo de abertura, as medidas e o peso ajudam a selecionar o equipamento. Confirmamos também se o portão se movimenta corretamente: calhas, rodas, dobradiças e equilíbrio fazem parte da avaliação."],
  ["A utilização no dia a dia", "Quantas vezes abre por dia? Há várias entradas e saídas seguidas? Um portão de moradia e um acesso de condomínio podem exigir gamas diferentes, mesmo com dimensões semelhantes."],
  ["O preenchimento e a exposição", "Um portão aberto ou gradeado comporta-se de forma diferente de uma folha fechada exposta ao vento. O material, o preenchimento e a localização entram no dimensionamento."],
  ["O espaço para montar", "O espaço junto ao portão condiciona a montagem. Nos portões de batente, por exemplo, contam o recuo das dobradiças, o espaço lateral e a abertura pretendida. Na garagem, verificamos as calhas e o espaço disponível."],
  ["A preparação do local", "A existência de alimentação elétrica e tubos para os cabos influencia os trabalhos necessários. Uma instalação preparada e outra que precisa de adaptações terão âmbitos diferentes no orçamento."],
  ["As proteções e a comodidade", "Fotocélulas, sinalização, comandos e formas de acesso são definidos conforme a instalação. Teclados, seletores de chave ou controlo pelo telemóvel podem completar a solução, conforme a compatibilidade e a necessidade."],
];

export default function AutomationBudget() {
  const url = "https://tec-casa.pt/quanto-custa-automatizar-portao";
  const description = "Saiba o que influencia o orçamento para automatizar um portão: dimensões, utilização, vento, montagem e segurança. Receba soluções com preços indicativos por email.";
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:"Início",item:"https://tec-casa.pt/"},
    {"@type":"ListItem",position:2,name:"Instalação de automatismos",item:"https://tec-casa.pt/instalacao-automatismos-portoes"},
    {"@type":"ListItem",position:3,name:"O que influencia o orçamento",item:url},
  ]};
  return <>
    <Head>
      <title>Quanto custa automatizar um portão? | TecCasa Soluções</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Quanto custa automatizar um portão? | TecCasa Soluções" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" /><meta property="og:url" content={url} />
      <meta property="og:image" content="https://tec-casa.pt/automatismos/tipos/instalacao-correr-v2-1440.webp" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb).replace(/</g,"\\u003c")}} />
    </Head>
    <div className="budget-page" lang="pt-PT">
      <SiteHeader alternateHref="/en/automatic-gate-installation-lisbon" />
      <main>
        <nav className="breadcrumbs" aria-label="Localização no site"><a href="/">Início</a><span aria-hidden="true"> / </span><a href="/instalacao-automatismos-portoes">Instalação de automatismos</a><span aria-hidden="true"> / </span><span>Orçamento</span></nav>
        <header className="hero">
          <p className="eyebrow">O orçamento começa no seu portão</p>
          <h1>Quanto custa automatizar um portão?</h1>
          <p>O valor depende do automatismo adequado ao seu portão e do trabalho necessário para o instalar. Dimensões, utilização e condições do local ajudam a definir uma solução ajustada ao que precisa.</p>
          <ConfiguratorButton featured />
          <p className="hero-note">Indique as características do seu portão e receba até três soluções com preços indicativos por email, sujeitas a validação técnica.</p>
        </header>
        <section className="intro" aria-labelledby="dimensioning-title">
          <h2 id="dimensioning-title">Cada portão pede uma solução à sua medida.</h2>
          <p>Dois portões com a mesma largura podem ter pesos, exposição ao vento e ritmos de utilização diferentes. Uma solução adequada precisa de responder a esse conjunto de condições.</p>
          <p>Ajudamos a dimensionar o equipamento e a perceber o que faz sentido incluir. Assim, pode comparar propostas pelo trabalho e pela solução que oferecem.</p>
        </section>
        <section aria-labelledby="factors-title">
          <h2 id="factors-title">O que influencia o orçamento?</h2>
          <div className="factors">{factors.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>
        <section className="comparison" aria-labelledby="compare-title">
          <h2 id="compare-title">O que deve comparar numa proposta?</h2>
          <p>Veja qual é o equipamento proposto, para que utilização foi selecionado e quais os trabalhos incluídos. Confirmar o âmbito ajuda a perceber o valor de cada solução.</p>
          <ul><li>Motor ou motores, central e acessórios incluídos.</li><li>Montagem, afinação e verificação do funcionamento.</li><li>Preparações ou adaptações necessárias e como serão orçamentadas.</li><li>Condições para reaproveitar acessórios existentes.</li><li>IVA, condições da proposta e acompanhamento após a intervenção.</li></ul>
          <p>Se pretende substituir um motor, avaliamos também os acessórios existentes. O reaproveitamento depende do seu estado e da compatibilidade com o novo automatismo.</p>
        </section>
        <section className="answers" aria-labelledby="answers-title">
          <h2 id="answers-title">Antes de pedir o orçamento</h2>
          <details><summary>Um motor para mais quilos é sempre a melhor escolha?</summary><p>A capacidade de peso é um dos critérios. Importa cruzá-la com as medidas, o movimento do portão, a frequência de utilização e as condições de montagem. A escolha deve responder ao conjunto das necessidades.</p></details>
          <details><summary>Posso saber um valor pelo configurador?</summary><p>Sim, quando os dados permitem identificar uma solução, recebe por email propostas com preços indicativos. O âmbito pode incluir fornecimento e montagem ou equipamento com montagem sob consulta, conforme as condições indicadas.</p></details>
          <details><summary>E se não souber o peso ou alguma medida?</summary><p>Pode indicar o que sabe e pedir ajuda. As fotografias podem apoiar a análise. Quando falta informação essencial ou é necessário avaliar as condições no local, confirmamos esses pontos consigo antes de fechar o orçamento.</p></details>
          <details><summary>A visita ao local é sempre necessária?</summary><p>Algumas situações podem ser avaliadas inicialmente com as características e fotografias do portão. Noutras, é necessário confirmar medidas, preparação elétrica, funcionamento mecânico ou espaço de montagem no local. O configurador é um primeiro passo para essa avaliação.</p></details>
        </section>
        <ServiceCoverageNotice />
        <section className="cta" aria-labelledby="budget-cta-title">
          <h2 id="budget-cta-title">Vamos perceber o que o seu portão precisa?</h2>
          <p>Comece pelo configurador. Se preferir falar connosco, pode explicar-nos a situação por WhatsApp.</p>
          <div data-contact-actions className="actions"><ConfiguratorButton featured /><a data-contact-button="whatsapp" className="contact" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer">Falar com a TecCasa</a></div>
        </section>
        <SiteFooter />
      </main>
      <a className="floating-whatsapp" href="https://wa.me/351922021980" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
    <style jsx>{`
      .budget-page { padding:110px 24px 36px; background:#f4f7fb; color:#34445a; font:17px/1.75 Arial,sans-serif; }
      main { max-width:1200px; margin:auto; } a { color:#08285c; text-underline-offset:4px; }
      .breadcrumbs { font-size:13px; margin-bottom:20px; } .hero { padding:42px; background:linear-gradient(120deg,#0b285b,#103f83); color:white; border-radius:26px; margin-bottom:28px; }
      .eyebrow { font-size:14px; font-weight:700; margin:0 0 12px; } h1 { font-size:clamp(32px,4vw,44px); line-height:1.15; margin:0 0 22px; max-width:850px; }
      .hero > p:not(.eyebrow) { max-width:870px; } .hero .hero-note { font-size:13px; line-height:1.65; margin:16px 0 0; }
      h2 { color:#08285c; font-size:clamp(25px,3vw,32px); line-height:1.25; margin:0 0 18px; } h3 { color:#08285c; font-size:21px; line-height:1.3; margin:0 0 12px; }
      p { margin:0 0 18px; } section { margin-bottom:32px; } .intro,.comparison,.answers,.cta { padding:34px 38px; border:1px solid #d8e3f1; border-radius:24px; background:white; }
      .factors { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; } article { padding:28px; border:1px solid #d8e3f1; border-radius:22px; background:#eaf0f8; } article p { font-size:16px; margin:0; }
      ul { padding-left:22px; } li { margin-bottom:8px; } details { border-top:1px solid #d8e3f1; padding:18px 0; } details:last-child { padding-bottom:0; }
      summary { cursor:pointer; color:#08285c; font-weight:700; } details p { margin:14px 0 0; } .cta { background:#eaf0f8; } .actions { display:flex; flex-wrap:wrap; gap:18px; align-items:center; }
      .contact { padding:16px 24px; border:1px solid #08285c; border-radius:16px; font-weight:700; text-decoration:none; } .floating-whatsapp { position:fixed; bottom:24px; right:24px; background:#25D366; color:white; padding:14px 22px; border-radius:50px; text-decoration:none; font-weight:700; box-shadow:0 5px 18px #0002; z-index:40; }
      a:focus-visible,summary:focus-visible { outline:3px solid #f7b545; outline-offset:5px; }
      @media(max-width:950px) { .factors { grid-template-columns:repeat(2,minmax(0,1fr)); } }
      @media(max-width:600px) { .budget-page { padding:100px 12px 24px; font-size:16px; } .hero,.intro,.comparison,.answers,.cta { padding:26px 22px; border-radius:22px; } .factors { grid-template-columns:1fr; } .contact { box-sizing:border-box; width:100%; text-align:center; } .floating-whatsapp { bottom:14px; right:14px; } }
    `}</style>
  </>;
}
