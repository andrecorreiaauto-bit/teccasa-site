import ServiceCoverageNotice from "./ServiceCoverageNotice";
import Head from "next/head";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ConfiguratorButton from "./ConfiguratorButton";
import symptoms from "../lib/brand-assistance-symptoms.json";
import { company } from "../lib/company";

export default function BrandAssistancePage({ page }) {
  const url = `${company.url}/${page.slug}`;
  const whatsapp = `https://wa.me/351922021980?text=${encodeURIComponent(page.message)}`;
  const sectionId = name => `${page.slug}-${name}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${url}#service`, name: page.title, description: page.description, url, serviceType: `Instalação e assistência a automatismos ${page.brand}`, provider: { "@id": `${company.url}/#organization` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: company.url + "/" },
      { "@type": "ListItem", position: 2, name: "Reparação de portões", item: company.url + "/reparacao-portoes" },
      { "@type": "ListItem", position: 3, name: page.h1, item: url },
    ] },
    { "@type": "FAQPage", mainEntity: page.questions.map(({question,answer}) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };
  const process = [
    ["Identificar o equipamento", `Modelo ${page.brand}, central, recetor e acessórios existentes, incluindo alterações anteriores.`],
    ["Avaliar o funcionamento", "Sintomas, movimento do portão, transmissão e dispositivos de segurança."],
    ["Explicar a solução", "O que pode ser afinado, reparado ou substituído, com as condições esclarecidas antes de avançar."],
    ["Verificar após a intervenção", "Ciclos de abertura e fecho e funcionamento dos dispositivos de segurança."],
  ];
  // Explicit buttons retain the shared contact measurement and visual rules.
  const actions = (label, email = false) => <div data-contact-actions className="d-actions">
    <a data-contact-button="whatsapp" className="d-button d-green" href={whatsapp} target="_blank" rel="noopener noreferrer">{label}</a>
    <a data-contact-button="secondary" className="d-button d-outline" href={`tel:${company.telephone}`}>Ligar 922 021 980</a>
    {email && <a data-contact-button="secondary" className="d-button d-outline" href={`mailto:${company.email}`}>{company.email}</a>}
  </div>;
  return <>
    <Head>
      <title>{`${page.title} | TecCasa Soluções`}</title>
      <meta name="description" content={page.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${page.title} | TecCasa Soluções`} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={company.url + page.image} />
      <meta property="og:image:alt" content={page.imageAlt} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, "\\u003c")}} />
    </Head>
    <div className="brand-assistance-page" lang="pt-PT">
      <SiteHeader alternateHref="/en/electric-gate-repair-lisbon" />
      <main className="main-card" data-brand-assistance={page.slug}>
        <section className="d-hero" aria-labelledby="brand-title">
          <div><p className="d-eyebrow">Instalação e assistência · Lisboa e arredores</p>
            <div className="d-brand"><img src={page.logo} alt={page.brand} width="160" height="70" /><span>Automatismos para portões</span></div>
            <h1 id="brand-title">{page.h1}</h1><p className="d-lead">{page.lead}</p><p className="d-value">{page.value}</p>
            {actions(`Pedir assistência ${page.brand}`)}
            <p className="d-micro">Indique a localidade e descreva o que acontece. Se não souber o modelo, nós ajudamos.</p>
            <p className="d-independent">Serviço técnico independente para automatismos {page.brand}.</p>
          </div>
          <figure><img className="d-hero-photo" src={page.image} alt={page.imageAlt} width="1200" height="800" fetchPriority="high" /><figcaption>Portões de correr, de batente e portas de garagem.</figcaption></figure>
        </section>
        <div role="navigation" className="d-shortcuts" aria-label="O que precisa"><a href={`#${sectionId("avarias")}`}>Tenho uma avaria <span aria-hidden="true">↓</span></a><a href={`#${sectionId("comandos")}`}>Preciso de comandos <span aria-hidden="true">↓</span></a><a href={`#${sectionId("instalacao")}`}>Quero instalar ou substituir <span aria-hidden="true">↓</span></a></div>
        <section className="d-section" id={sectionId("avarias")}><p className="d-eyebrow">Começamos pelo que está a acontecer</p><h2>Reconhece algum destes sintomas?</h2><p className="d-intro">A mesma falha pode ter várias origens. O diagnóstico considera o automatismo {page.brand}, os acessórios e o movimento do próprio portão.</p><div className="d-symptoms">{symptoms.map(s => <a className="d-symptom" href={s.href} key={s.href}><h3>{s.title}</h3><p>{s.text}</p><span>Conhecer esta avaria →</span></a>)}</div></section>
        <section className="d-section d-diagnosis"><div><p className="d-eyebrow">Reparar com uma avaliação do conjunto</p><h2>Antes de trocar peças, perceber a origem da falha.</h2><p>{page.diagnosis}</p><a className="d-text-link" href="/reparacao-portoes">Como funciona o serviço de reparação →</a></div><ol className="d-steps">{process.map(([title,text],i) => <li key={title}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
        <section className="d-section d-request" id={sectionId("contacto")}><div><p className="d-eyebrow">Não precisa de saber a referência</p><h2>Mostre-nos o seu automatismo {page.brand}.</h2><p>Uma descrição simples e algumas fotografias ajudam a preparar a assistência. Envie o que conseguir reunir, sem desmontar o equipamento.</p>{actions("Descrever o problema",true)}<p className="d-micro">O primeiro contacto ajuda a enquadrar o pedido. A confirmação da avaria pode exigir avaliação no local.</p></div><div className="d-info"><div><strong>Localidade</strong><p>Onde está instalado o portão.</p></div><div><strong>Comportamento</strong><p>O que acontece, quando começou e se a falha é constante ou intermitente.</p></div><div><strong>Fotografias</strong><p>Vista geral do portão e do automatismo. Se já tiver uma imagem da etiqueta, pode enviá-la também.</p></div><div><strong>Equipamento existente</strong><p>Modelo, se o souber, e informação sobre comandos ou componentes substituídos.</p></div></div></section>
        <section className="d-section d-two-col" id={sectionId("comandos")}><div><p className="d-eyebrow">Comandos, recetores e acessórios</p><h2>É preciso identificar o sistema que está instalado.</h2><p>{page.remoteText}</p><p>Avaliamos também falhas de resposta, perda de alcance e a necessidade de gerir os comandos de um acesso partilhado.</p><a className="d-text-link" href="/comandos-garagem">Conhecer o serviço de comandos e recetores →</a></div><aside className="d-note"><h3>Para começar, envie</h3><ul><li>Fotografias da frente e do verso do comando.</li><li>A marca ou referência do recetor, se já a conhecer.</li><li>Se a falha afeta um comando ou todos.</li></ul><p>Não precisa de abrir a central nem de desmontar o recetor.</p></aside></section>
        <section className="d-section d-two-col" id={sectionId("instalacao")}><div><p className="d-eyebrow">Nova instalação ou substituição</p><h2>Uma solução adequada ao portão e à utilização.</h2><p>{page.installationText}</p><p>A disponibilidade e a compatibilidade dos componentes são confirmadas na proposta. O aproveitamento de acessórios existentes depende da avaliação técnica.</p><a className="d-text-link" href="/instalacao-automatismos-portoes">Conhecer o serviço de instalação →</a></div><aside className="d-config"><h3>Está a avaliar uma nova motorização?</h3><p>O configurador ajuda a enquadrar o pedido e a receber por email até três soluções com preços indicativos. As opções podem incluir diferentes marcas, conforme os dados do portão.</p><ConfiguratorButton /><p className="d-micro">Os valores e a solução dependem dos dados fornecidos e de validação técnica. Algumas situações exigem avaliação no local.</p></aside></section>
        <section className="d-section d-faq"><h2>Dúvidas sobre automatismos {page.brand}</h2>{page.questions.map(({question,answer},i) => <details key={question} open={i===0}><summary>{question}</summary><p>{answer}</p></details>)}</section>
        <ServiceCoverageNotice />
        <section className="d-section d-final"><p className="d-eyebrow">Vamos começar pelo seu caso</p><h2>Precisa de ajuda com um automatismo {page.brand}?</h2><p>Indique a localidade, conte-nos o que acontece e envie as fotografias que já tiver. Ajudamos a preparar o próximo passo.</p>{actions("Falar com a TecCasa")}<p className="d-micro">Lisboa e arredores · Margem norte e margem sul · Deslocações por marcação</p></section>
        <p className="d-practical"><a href="/condicoes-servicos">Condições dos serviços</a>. A TecCasa presta serviço técnico independente; as marcas e os logótipos pertencem aos respetivos titulares.</p>
        <SiteFooter />
      </main>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Pedir assistência a automatismos ${page.brand} por WhatsApp`} style={{position:"fixed"}}>WhatsApp</a>
    </div>
    <style jsx>{`.brand-assistance-page{font:17px/1.75 Arial,sans-serif;color:#405168}.brand-assistance-page h1,.brand-assistance-page h2,.brand-assistance-page h3{color:#08285c}.brand-assistance-page h1{font-size:clamp(36px,4.3vw,54px);line-height:1.08;letter-spacing:-1.2px;margin:22px 0}.brand-assistance-page h2{font-size:34px;line-height:1.2;letter-spacing:-.5px;margin:0 0 18px}.brand-assistance-page h3{font-size:21px;line-height:1.35;margin:0 0 12px}.brand-assistance-page p{margin:0 0 18px}.brand-assistance-page a{color:#08285c}.brand-assistance-page section[id]{scroll-margin-top:180px}.d-eyebrow{font-size:12px;letter-spacing:.4px;font-weight:700;color:#42617e;margin-bottom:16px!important}.d-hero{display:grid;grid-template-columns:1.05fr 1fr;gap:42px;align-items:center;padding:26px 0 40px}.d-brand{display:flex;align-items:center;gap:18px}.d-brand img{width:108px;height:52px;object-fit:contain}.d-brand span{font-size:13px;line-height:1.5;color:#66778a;max-width:140px}.d-lead{font-size:19px;line-height:1.75}.d-value{font-size:17px}.d-hero figure{margin:0;min-width:0}.d-hero-photo{width:100%;height:auto;display:block;border-radius:28px;box-shadow:0 20px 50px #08285c20}.d-hero figcaption{font-size:12px;color:#66778a;text-align:center;margin-top:12px}:global(.d-actions){display:flex;flex-wrap:wrap;align-items:stretch;gap:12px}:global(.d-button){display:inline-flex;align-items:center;justify-content:center;min-height:58px;text-align:center;text-decoration:none;border-radius:16px;padding:16px 21px;font-size:16px;line-height:1.4;font-weight:700}:global(.d-green){background:#25d366;color:white!important;border:1px solid #25d366}:global(.d-outline){background:#fff;border:1px solid #c9d5e5;color:#08285c}.d-micro{font-size:12px;line-height:1.7;color:#66778a;margin:14px 0 0!important}.d-independent{font-size:13px;color:#536980;margin-top:18px!important}.d-shortcuts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;border-top:1px solid #dce5f0;padding-top:24px;margin:0 0 16px}.d-shortcuts a{display:flex;justify-content:space-between;align-items:center;gap:15px;padding:18px;background:#eef3fa;border-radius:15px;text-decoration:none;font-weight:700;font-size:15px;line-height:1.5}.d-shortcuts span{font-size:19px}.d-section{padding:46px 0}.d-intro{max-width:820px}.d-symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:28px}.d-symptom{display:flex;flex-direction:column;background:#f0f5fb;border:1px solid #dce5f0;border-radius:22px;padding:24px;text-decoration:none}.d-symptom p{font-size:15px;line-height:1.75;color:#4e6075}.d-symptom span{font-size:13px;font-weight:700;margin-top:auto}.d-diagnosis{display:grid;grid-template-columns:1fr 1.12fr;gap:44px;align-items:start}.d-steps{padding:0;margin:0;list-style:none;display:grid;gap:20px}.d-steps li{display:flex;gap:17px}.d-steps b{display:grid;place-items:center;flex-shrink:0;width:40px;height:40px;border-radius:50%;background:#08285c;color:white;font-size:12px}.d-steps h3{font-size:18px!important;margin:2px 0 6px!important}.d-steps p{font-size:15px;line-height:1.7}.d-text-link{font-weight:700;text-underline-offset:5px;font-size:15px}.d-request{display:grid;grid-template-columns:1.1fr 1fr;gap:36px;background:#edf3fa;padding:34px;border-radius:26px;margin:20px 0}.d-request h2{font-size:31px!important}.d-request :global(.d-actions){gap:10px}.d-request :global(.d-button){font-size:14px;padding:14px 18px}.d-info{display:grid;gap:16px;align-content:center}.d-info>div{border-bottom:1px solid #d2dfed;padding-bottom:12px}.d-info>div:last-child{border:0;padding-bottom:0}.d-info strong{color:#08285c;font-size:16px}.d-info p{font-size:14px;margin:4px 0 0!important}.d-two-col{display:grid;grid-template-columns:1.1fr 1fr;gap:36px;align-items:start}.d-note,.d-config{padding:30px;background:#eef3fa;border-radius:24px}.d-note ul{padding-left:20px;font-size:16px}.d-note li{margin-bottom:10px}.d-note p{font-size:13px;color:#66778a}.d-config>p{font-size:16px}.d-faq details{padding:20px 0;border-bottom:1px solid #dce5f0}.d-faq summary{font-size:17px;font-weight:700;color:#08285c;cursor:pointer;margin-left:20px;padding-left:5px;line-height:1.65}.d-faq details p{font-size:16px;margin:14px 0 0 25px!important}.d-final{background:#0b2c5f;color:#fff;text-align:center;border-radius:28px;padding:40px 28px;margin:24px 0}.d-final h2{color:#fff!important}.d-final>p{max-width:760px;margin-left:auto!important;margin-right:auto!important}.d-final .d-eyebrow,.d-final .d-micro{color:#d1dff0}.d-final :global(.d-actions){justify-content:center}.d-practical{font-size:13px;line-height:1.8;color:#66778a;padding:10px 0 28px}@media(max-width:1050px){.d-hero{gap:28px}:global(.d-actions) :global(.d-button){flex:1 1 180px}.d-request{grid-template-columns:1fr;gap:24px}.d-info{grid-template-columns:1fr 1fr;gap:20px}.d-symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:768px){.d-hero{grid-template-columns:1fr;padding:20px 4px 30px;gap:24px}.d-brand{justify-content:center}.d-hero .d-eyebrow{text-align:center}.d-hero h1{text-align:center;font-size:35px!important;letter-spacing:-.6px!important}.d-lead{font-size:17px}.d-hero-photo{border-radius:22px;max-height:370px;object-fit:cover}.d-shortcuts{grid-template-columns:1fr;gap:10px}.d-shortcuts a{padding:15px 18px}.d-section{padding:30px 4px}.brand-assistance-page h2{font-size:28px}.d-symptoms{grid-template-columns:1fr;gap:14px}.d-symptom{padding:22px}.d-diagnosis,.d-two-col{grid-template-columns:1fr;gap:25px}.d-request{padding:26px 20px}.d-request h2{font-size:28px!important}.d-info{grid-template-columns:1fr;gap:14px}.d-note,.d-config{padding:25px 22px}:global(.d-actions){flex-direction:column}:global(.d-actions) :global(.d-button){width:100%;flex:0 1 auto}.d-faq details p{margin-left:4px!important}.d-final{padding:32px 20px}.d-practical{padding:10px 4px 20px}}
.brand-assistance-page{min-height:100vh;padding:110px 40px 40px;background:#f4f7fb;color:#405168;font:17px/1.75 Arial,sans-serif}
.brand-assistance-page :global(*){box-sizing:border-box}.main-card{width:min(1200px,calc(100% - 40px));margin:auto;padding:50px;background:white;border-radius:20px;box-shadow:0 10px 30px #0000001a}
:global(body){margin:0}.d-config :global(.configurator-launch){width:100%;margin-top:4px;text-align:left}:global(.d-button):focus-visible,.d-shortcuts a:focus-visible,.d-symptom:focus-visible,.d-text-link:focus-visible,.d-faq summary:focus-visible{outline:3px solid #f7b545;outline-offset:5px}
.brand-assistance-page .floating-whatsapp{position:fixed;bottom:25px;right:25px;background:#25d366;color:white;padding:15px 18px;border-radius:999px;text-decoration:none;font-weight:700;box-shadow:0 4px 15px #0003;z-index:900;font-size:14px}
@media(max-width:768px){.brand-assistance-page{padding:95px 6px 10px}.main-card{width:100%;padding:12px;border-radius:16px}.d-hero{padding:22px 4px 30px}.d-request{padding:26px 20px}.d-final{padding:32px 20px}.floating-whatsapp{bottom:14px;right:14px}}
`}</style>
  </>;
}
