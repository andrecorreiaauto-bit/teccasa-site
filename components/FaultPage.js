import Head from "next/head";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ConfiguratorButton from "./ConfiguratorButton";
import { company } from "../lib/company";

export default function FaultPage({ page }) {
  const url = `${company.url}/${page.slug}`;
  const message = `${page.message}\n\nLocalidade:\nMarca/modelo (se souber):\n${page.messagePrompt}`;
  const whatsapp = `https://wa.me/351922021980?text=${encodeURIComponent(message)}`;
  const questions = [
    { question: page.question, answer: page.answer },
    { question: "Conseguem indicar o preço só com uma fotografia?", answer: "As fotografias e a descrição ajudam a enquadrar o pedido. Quando é necessário testar o equipamento ou confirmar a origem da falha, a avaliação no local permite definir a intervenção e o respetivo orçamento." },
    { question: "Prestam assistência nas duas margens do Tejo?", answer: "Sim. Prestamos assistência em Lisboa e arredores, na margem norte e na margem sul. Indique a localidade no primeiro contacto para confirmarmos a disponibilidade para a deslocação." },
    { question: "O que devo enviar se não souber a marca do automatismo?", answer: "Indique a localidade, descreva o comportamento do equipamento e envie, se puder, uma fotografia geral e outra do automatismo. Ajudamos a identificar a informação necessária para preparar a assistência." },
    { question: page.precautionQuestion || "Devo continuar a tentar acionar o portão?", answer: page.precaution || "Se o portão apresentar movimentos inesperados, esforço ou ruídos anormais, evite insistir no acionamento e mantenha pessoas e veículos afastados da zona de movimento. Não anule os dispositivos de segurança; peça uma avaliação." },
  ];
  const process = [
    ["Enquadramos o problema", "Recolhemos os sintomas, identificamos o equipamento e confirmamos a zona da intervenção."],
    [page.remote ? "Avaliamos o sistema" : "Avaliamos o conjunto", page.remote ? "Verificamos o comando, a receção do sinal e a resposta do automatismo para localizar a origem da falha." : "Verificamos o movimento do portão, o automatismo e os dispositivos de segurança para localizar a origem da falha."],
    ["Explicamos a solução", "Apresentamos o que precisa de ser afinado, reparado ou substituído e as condições da intervenção antes de avançar."],
    ["Confirmamos o funcionamento", page.remote ? "Depois da intervenção, verificamos a resposta aos comandos e o funcionamento do sistema de abertura." : "Depois da intervenção, verificamos os ciclos de abertura e fecho e o funcionamento dos dispositivos de segurança."],
  ];
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${url}#service`, name: page.title, description: page.description, url, serviceType: page.remote ? "Assistência a comandos e recetores de garagem" : "Diagnóstico e reparação de portões automáticos", provider: { "@id": `${company.url}/#organization` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: company.url + "/" },
      { "@type": "ListItem", position: 2, name: "Reparação de portões", item: company.url + "/reparacao-portoes" },
      { "@type": "ListItem", position: 3, name: page.h1, item: url },
    ] },
    { "@type": "FAQPage", mainEntity: questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };
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
      {page.slug === "comando-garagem-nao-funciona" && <><link rel="alternate" hrefLang="pt-PT" href={url} /><link rel="alternate" hrefLang="en" href={company.url + "/en/gate-remote-control-not-working"} /></>}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </Head>
    <div className="fault-page" lang="pt-PT">
      <SiteHeader alternateHref={page.remote ? "/en/gate-remote-control-not-working" : "/en/electric-gate-repair-lisbon"} />
      <main className="main-card" data-fault-page={page.slug}>
        <section className="p-hero" aria-labelledby="fault-title">
          <div><p className="p-eyebrow">Assistência a {page.remote ? "comandos e automatismos" : "portões automáticos"} · Lisboa e arredores</p>
            <h1 id="fault-title">{page.h1}</h1><p className="p-lead">{page.lead}</p><p className="p-value">{page.value}</p>
            <div data-contact-actions className="p-actions"><a data-contact-button="whatsapp" className="p-button p-green" href={whatsapp} target="_blank" rel="noopener noreferrer">Descrever a avaria no WhatsApp</a><a data-contact-button="secondary" className="p-button p-outline" href={`tel:${company.telephone}`}>Ligar 922 021 980</a></div>
            <p className="p-micro">Indique a localidade e, se souber, a marca ou o modelo do automatismo.</p>
          </div>
          <div className="p-hero-image"><img src={page.image} alt={page.imageAlt} width="1200" height="800" fetchPriority="high" /><p>{page.caption}</p></div>
        </section>
        <section id="causas" className="p-section"><h2>{page.causesHeading}</h2><p className="p-section-intro">{page.causesIntro}</p><div className="p-causes">{page.causes.map(cause => <article className="p-cause" key={cause.title}><img src={cause.image} alt={cause.title} width="600" height="400" loading="lazy" /><div><h3>{cause.title}</h3><p>{cause.text}</p></div></article>)}</div></section>
        <section id="pedir-assistencia" className="p-section p-contact-section">
          <div className="p-contact-intro"><p className="p-eyebrow">Começamos pelo seu caso</p><h2>{page.contactHeading}</h2><p>Envie o que conseguir reunir. Se não souber a marca ou o modelo, uma fotografia do {page.remote ? "comando e do " : ""}automatismo pode ajudar-nos a identificar o equipamento.</p><a className="p-button p-green" href={whatsapp} target="_blank" rel="noopener noreferrer">Enviar informação pelo WhatsApp</a><p className="p-micro">O primeiro contacto ajuda a preparar a assistência. A confirmação da avaria pode exigir avaliação no local.</p></div>
          <div className="p-info-list"><div><b>01</b><span><strong>Localidade</strong>Onde está instalado o portão.</span></div><div><b>02</b><span><strong>Comportamento</strong>{page.behavior}</span></div><div><b>03</b><span><strong>Equipamento</strong>Marca ou modelo, se os conhecer, ou uma fotografia do {page.remote ? "comando e do " : ""}automatismo.</span></div><div><b>04</b><span><strong>Fotografia ou vídeo, se já tiver</strong>Uma imagem geral do portão e o registo da falha podem ajudar a enquadrar o pedido.</span></div></div>
        </section>
        <section id="diagnostico" className="p-section"><h2>Como tratamos o pedido de assistência</h2><p className="p-section-intro">A avaliação serve para identificar a origem da falha e explicar a intervenção indicada para o seu {page.remote ? "equipamento" : "portão"}.</p><div className="p-process">{process.map(([title,text], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section className="p-section p-repair-section">
          <div><p className="p-eyebrow">Uma solução adequada ao equipamento</p><h2>{page.repairHeading}</h2>{page.repairParagraphs.map(text => <p key={text}>{text}</p>)}<a className="p-text-link" href={page.relatedService?.[1] || "/reparacao-portoes"}>{page.relatedService?.[0] || "Conhecer o serviço de reparação"} →</a></div>
          <aside className="p-config"><h3>{page.remote ? "Está também a avaliar uma substituição do motor?" : "Está a avaliar uma substituição?"}</h3><p>{page.remote ? "Se o pedido envolve uma nova motorização, indique as características do portão para receber por email até três soluções de automatização com preços indicativos." : "Indique as características do seu portão para receber por email até três soluções de automatização com preços indicativos."}</p><ConfiguratorButton /><p className="p-micro">Os valores dependem dos dados fornecidos e de validação técnica. Algumas situações exigem avaliação no local.</p></aside>
        </section>
        <section id="perguntas" className="p-section p-faq"><h2>Dúvidas sobre esta avaria</h2>{questions.map(({question,answer},index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}</section>
        <section className="p-section p-final"><h2>{page.finalHeading}</h2><p>Fale connosco e descreva a avaria. Ajudamos a identificar o equipamento e a preparar o próximo passo.</p><div data-contact-actions className="p-actions"><a data-contact-button="whatsapp" className="p-button p-green" href={whatsapp} target="_blank" rel="noopener noreferrer">Pedir assistência pelo WhatsApp</a><a data-contact-button="secondary" className="p-button p-outline" href={`tel:${company.telephone}`}>Ligar 922 021 980</a></div><p className="p-micro">Lisboa e arredores · Margem norte e margem sul</p></section>
        <p className="p-practical">Antes de pedir assistência, confirme a possibilidade de deslocação para a sua localidade. Consulte as <a href="/zonas-de-assistencia">zonas de assistência da TecCasa Soluções</a> e as <a href="/condicoes-servicos">condições dos serviços</a>.</p>
        <SiteFooter />
      </main>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Pedir assistência à TecCasa por WhatsApp" style={{position:"fixed"}}>WhatsApp</a>
    </div>
    <style jsx>{`.p-hero{display:grid;grid-template-columns:1.04fr 1fr;gap:44px;align-items:center;padding:46px 0 58px}.p-eyebrow{font-size:13px!important;letter-spacing:.3px;font-weight:700;color:#3a5877;margin:0 0 17px!important;line-height:1.6!important}.p-hero h1{font-size:clamp(36px,4.5vw,56px);line-height:1.06;font-weight:900;margin:0 0 23px;letter-spacing:-1.4px}.p-lead{font-size:19px;line-height:1.75;margin:0 0 18px}.p-value{font-size:17px;line-height:1.65;margin:0 0 25px;color:#3f5066}.p-actions{display:flex;gap:12px;flex-wrap:wrap;align-items:stretch}.p-button{display:inline-flex;justify-content:center;align-items:center;padding:16px 23px;border-radius:16px;text-decoration:none;font-weight:700;font-size:16px;line-height:1.4;text-align:center;min-height:54px}.p-green{background:#25d366;color:white;box-shadow:0 10px 25px #25d36625}.p-outline{background:white;color:#08285c;border:1px solid #c9d5e5}.p-blue{background:#08285c;color:white}.p-button:hover{filter:brightness(.98)}.p-micro{font-size:13px!important;line-height:1.7!important;color:#617086;margin:15px 0 0!important}.p-hero-image img{width:100%;height:auto;border-radius:28px;box-shadow:0 25px 60px #0b2c5f24;display:block}.p-hero-image p{font-size:13px;color:#617086;text-align:center;margin:15px 0 0}.p-section{padding:38px 0 50px}.p-section h2{font-size:35px;line-height:1.18;margin:0 0 18px;letter-spacing:-.7px}.p-section-intro{font-size:18px;line-height:1.75;max-width:850px;margin:0 0 28px}.p-causes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.p-cause{border-radius:24px;overflow:hidden;background:#eef3fa;box-shadow:0 12px 30px #0b2c5f10}.p-cause>img{width:100%;height:180px;object-fit:cover;display:block}.p-cause>div{padding:23px}.p-cause h3,.p-process h3{font-size:21px;line-height:1.3;margin:0 0 12px}.p-cause p,.p-process p{font-size:16px;line-height:1.7;margin:0}.p-contact-section{display:grid;grid-template-columns:1fr 1fr;gap:42px;padding:36px!important;border-radius:28px;background:#f1f6fc;margin:28px 0}.p-contact-intro>p:not(.p-eyebrow):not(.p-micro){font-size:17px;line-height:1.75;margin:0 0 25px}.p-info-list{display:grid;gap:19px;align-content:center}.p-info-list>div{display:flex;gap:15px;align-items:flex-start}.p-info-list b{flex-shrink:0;width:34px;height:34px;border-radius:50%;background:#e0eaf7;color:#08285c;display:grid;place-items:center;font-size:12px}.p-info-list span{font-size:16px;line-height:1.65;color:#526174}.p-info-list strong{display:block;color:#08285c;font-size:17px;margin-bottom:3px}.p-process{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.p-process article{background:#eef3fa;padding:25px 21px;border-radius:24px}.p-process article>span{display:grid;place-items:center;background:#08285c;color:#fff;font-weight:700;border-radius:50%;width:39px;height:39px;margin-bottom:18px}.p-repair-section{display:grid;grid-template-columns:1.1fr 1fr;gap:36px;align-items:start}.p-repair-section>div>p:not(.p-eyebrow){font-size:17px;line-height:1.8}.p-text-link{font-weight:700;font-size:16px;text-underline-offset:4px}.p-config{background:#eef3fa;border-radius:26px;padding:30px}.p-config h3{font-size:25px;line-height:1.2;margin:15px 0}.p-config>p{font-size:16px;line-height:1.7}.p-new{display:inline-block;background:#f7b545;color:#08285c;font-size:11px;font-weight:700;border-radius:999px;padding:6px 10px}.p-config-button{position:relative;overflow:hidden;width:100%;padding-right:65px}.p-config-button small{display:block;font-size:12px;font-weight:400;margin-top:4px}.p-ribbon{position:absolute;top:13px;right:-31px;width:110px;transform:rotate(45deg);background:#f7b545;color:#08285c;font-size:9px;line-height:19px}.p-faq details{border-bottom:1px solid #dce5f0;padding:19px 0}.p-faq summary{cursor:pointer;color:#08285c;font-size:18px;font-weight:700;line-height:1.6;list-style-position:outside;margin-left:20px;padding-left:5px}.p-faq details p{font-size:17px;line-height:1.75;max-width:900px;margin:14px 0 0 25px}.p-final{text-align:center;background:linear-gradient(180deg,#f5f8fc,#e8eef8);border-radius:30px;padding:43px 30px;margin:24px 0 30px}.p-final h2{max-width:820px;margin:0 auto 18px}.p-final>p{max-width:740px;font-size:19px;line-height:1.8;margin:0 auto 25px}.p-final .p-actions{justify-content:center}
 .fault-page{min-height:100vh;padding:110px 40px 40px;background:#f4f7fb;color:#444;font-family:Arial,sans-serif}
 .fault-page :global(*){box-sizing:border-box}.main-card{box-sizing:border-box;width:min(1200px,calc(100% - 40px));margin:auto;padding:50px;background:#fff;border-radius:20px;box-shadow:0 10px 30px #0000001a}
 :global(body){margin:0}h1,h2,h3{color:#08285c}a{color:#08285c;text-underline-offset:4px}a:focus-visible,summary:focus-visible{outline:3px solid #f7b545;outline-offset:4px}
 .p-config :global(.configurator-launch){margin-top:8px}.p-config .p-text-link{display:inline-block;margin:0 0 12px}.p-practical{margin:16px 0 26px;font-size:14px;line-height:1.8;color:#617086}.p-photo-note{font-size:13px;line-height:1.7;color:#617086;margin-top:20px}
 .floating-whatsapp{position:fixed;bottom:25px;right:25px;background:#25D366;color:white;padding:15px 18px;border-radius:999px;text-decoration:none;font-weight:700;box-shadow:0 4px 15px #0003;z-index:900;font-size:14px}
 @media(max-width:1050px){.p-hero{gap:28px}.p-actions .p-button{width:100%}.p-process{grid-template-columns:repeat(2,minmax(0,1fr))}.p-section h2{font-size:31px}}
 @media(max-width:768px){.fault-page{padding:95px 6px 10px}.main-card{width:100%;padding:12px;border-radius:16px}.p-hero{grid-template-columns:1fr;gap:26px;padding:22px 4px}.p-hero h1{font-size:35px;letter-spacing:-.6px;text-align:center}.p-hero .p-eyebrow{font-size:12px!important}.p-lead{font-size:17px}.p-hero-image img{max-height:400px;object-fit:cover}.p-causes{grid-template-columns:1fr;gap:18px}.p-cause{display:grid;grid-template-columns:110px 1fr;align-items:stretch;border-radius:20px}.p-cause>img{width:110px;height:100%;min-height:180px;object-fit:cover}.p-cause>div{padding:19px 17px}.p-cause h3{font-size:19px}.p-cause p{font-size:15px}.p-section{padding:28px 4px}.p-contact-section{grid-template-columns:1fr;gap:28px;padding:26px 20px!important;margin:20px 0}.p-process{grid-template-columns:1fr;gap:16px}.p-process article{padding:23px}.p-repair-section{grid-template-columns:1fr;gap:25px}.p-config{padding:24px}.p-section h2{font-size:28px;letter-spacing:-.4px}.p-faq summary{font-size:17px}.p-faq details p{font-size:16px;margin-left:4px}.p-final{padding:32px 20px}.p-button{width:100%;padding:15px 18px}.p-final>p{font-size:17px}.floating-whatsapp{bottom:14px;right:14px}}
 @media(prefers-reduced-motion:reduce){.p-button{transition:none}}
`}</style>
  </>;
}
