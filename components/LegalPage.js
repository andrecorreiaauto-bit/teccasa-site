import Head from "next/head";
import SiteHeader from "./SiteHeader";
import { company } from "../lib/company";
import { CONSENT_DAYS } from "../lib/consent.mjs";
import serviceTerms from "../lib/service-terms.json";

const routes = { legal: ["/informacao-legal", "/en/legal"], privacy: ["/privacidade", "/en/privacy"], cookies: ["/cookies", "/en/cookies"], terms: ["/condicoes-servicos", "/en/service-terms"] };

export default function LegalPage({ type, english = false }) {
  const pair = routes[type];
  const path = pair[english ? 1 : 0];
  const title = type === "legal" ? (english ? "Legal information" : "Informação legal") : type === "privacy" ? (english ? "Privacy policy" : "Política de privacidade") : type === "terms" ? (english ? "Service terms" : "Condições dos serviços") : (english ? "Cookie policy" : "Política de cookies");
  const preferences = () => window.dispatchEvent(new Event("teccasa:cookie-preferences"));
  return <>
    <Head>
      <title>{`${title} | TecCasa Soluções`}</title>
      <meta name="description" content={`${title} — TecCasa Soluções.`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href={company.url + path} />
      <link rel="alternate" hrefLang="pt-PT" href={company.url + pair[0]} />
      <link rel="alternate" hrefLang="en" href={company.url + pair[1]} />
    </Head>
    <div className="legal-page" lang={english ? "en" : "pt-PT"}>
      <SiteHeader english={english} alternateHref={pair[english ? 0 : 1]} />
      <main>
        <h1>{title}</h1>
        <p className="date">{english ? "Updated: 30 October 2026" : "Atualizado em 30 de outubro de 2026"}</p>
        {type === "terms" && <>
          <p>{english ? "These common terms accompany the quote for each job. The scope, price, payment stages and applicable contracting arrangements are provided before acceptance. Browsing this website does not place an order." : "Estas condições comuns acompanham o orçamento de cada intervenção. O trabalho, o preço, os pagamentos e o regime de contratação aplicável são comunicados antes da aceitação. A consulta deste site não constitui uma adjudicação."}</p>
          <p><a href={english ? "/en/legal" : "/informacao-legal"}>{english ? "Company identification and consumer dispute resolution" : "Identificação da empresa e resolução de litígios de consumo"}</a> · <a href={english ? "/en/privacy" : "/privacidade"}>{english ? "Privacy policy" : "Política de privacidade"}</a></p>
          {serviceTerms.sections.map((section, index) => <section key={index}>
            <h2>{section.title[english ? "en" : "pt"]}</h2>
            {section.paragraphs[english ? "en" : "pt"].map((paragraph, n) => <p key={n}>{paragraph}</p>)}
          </section>)}
          <h2>{english ? "Optional withdrawal form" : "Modelo facultativo de livre resolução"}</h2>
          <p>{english ? "Complete and send this only if you wish to withdraw from a contract carrying that right. You can also send another unequivocal statement." : "Preencha e envie apenas se pretender resolver um contrato em que exista este direito. Pode também enviar outra declaração inequívoca."}</p>
          <p>{english ? "To:" : "À entidade:"} {company.legalName}<br />Rua da União Eléctrica 212, 2890-335 São Francisco, Portugal<br /><a href={`mailto:${company.email}`}>{company.email}</a></p>
          <p>{english ? "I hereby give notice that I withdraw from my contract for the following goods or services:" : "Comunico que pretendo resolver o contrato relativo aos seguintes bens ou serviços:"}<br />________________________________________</p>
          <p>{english ? "Quote or contract number:" : "Número do orçamento ou contrato:"} ____________________<br />{english ? "Ordered on or received on:" : "Data da contratação ou receção dos bens:"} ____________________<br />{english ? "Consumer’s name:" : "Nome do consumidor:"} ____________________<br />{english ? "Consumer’s address:" : "Morada do consumidor:"} ____________________<br />{english ? "Date:" : "Data:"} ____________________<br />{english ? "Signature only if sent on paper:" : "Assinatura apenas se enviado em papel:"} ____________________</p>
        </>}
        {type === "legal" && <>
          <h2>{english ? "Website operator" : "Entidade responsável pelo site"}</h2>
          <dl>
            <dt>{english ? "Trading name" : "Nome comercial"}</dt><dd>{company.name}</dd>
            <dt>{english ? "Legal name" : "Denominação social"}</dt><dd>{company.legalName}</dd>
            <dt>{english ? "Registration number / NIPC" : "Matrícula / NIPC"}</dt><dd>{company.taxId}</dd>
            <dt>{english ? "Commercial registry" : "Conservatória do registo comercial"}</dt><dd>Conservatória do Registo Comercial R.N.P.C.</dd>
            <dt>{english ? "Registered office" : "Sede"}</dt><dd>Rua da União Eléctrica 212, 2890-335 São Francisco, Portugal</dd>
            <dt>{english ? "Share capital" : "Capital social"}</dt><dd>2.000,00 €</dd>
            <dt>{english ? "Contact" : "Contactos"}</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a> · <a href={`tel:${company.telephone}`}>922 021 980</a> ({english ? "Portuguese mobile network call" : "chamada para a rede móvel nacional"})</dd>
          </dl>
          <h2>{english ? "Consumer dispute resolution" : "Resolução alternativa de litígios de consumo"}</h2>
          <p>{english ? "For consumer disputes concerning contracts concluded and performed in the Lisbon Metropolitan Area, consumers may contact the Centro de Arbitragem de Conflitos de Consumo de Lisboa, subject to that centre's jurisdiction and applicable rules." : "Em caso de litígio de consumo relativo a contratos celebrados e executados na Área Metropolitana de Lisboa, o consumidor pode recorrer ao Centro de Arbitragem de Conflitos de Consumo de Lisboa, nos termos da competência e das regras aplicáveis a este centro."}</p>
          <p><a href="https://www.centroarbitragemlisboa.pt/" target="_blank" rel="noopener noreferrer">Centro de Arbitragem de Conflitos de Consumo de Lisboa</a></p>
          <p>{english ? "For contracts outside that area, consult the competent entity through the Direção-Geral do Consumidor. This information does not state that TecCasa has voluntarily joined an arbitration centre." : "Para contratos fora dessa área, consulte a entidade competente através da Direção-Geral do Consumidor. Esta informação não constitui uma declaração de adesão voluntária da TecCasa a um centro de arbitragem."} <a href="https://www.consumidor.gov.pt/" target="_blank" rel="noopener noreferrer">Direção-Geral do Consumidor</a>.</p>
          <h2>{english ? "Website information" : "Informação disponibilizada"}</h2>
          <p>{english ? "Service information on this website is general. The scope, price and conditions of each job are specified in the relevant quote or contract. This does not restrict consumers' statutory rights." : "As informações sobre serviços neste site têm caráter geral. O âmbito, preço e condições de cada intervenção são definidos no respetivo orçamento ou contrato, sem prejuízo dos direitos legais do consumidor."}</p>
        </>}
        {type === "cookies" && <>
          <h2>{english ? "Your choice" : "A sua escolha"}</h2>
          <p>{english ? "Analytics is disabled until you accept it. Rejecting analytics does not prevent you from browsing the website or contacting TecCasa. You can change or withdraw permission using Cookie preferences in the footer." : "A análise está desativada até ser aceite. Recusar a análise não impede a navegação no site nem o contacto com a TecCasa. Pode alterar ou retirar a autorização em Preferências de cookies, no rodapé."}</p>
          <button type="button" onClick={preferences}>{english ? "Manage cookie preferences" : "Gerir preferências de cookies"}</button>
          <h2>{english ? "What is stored" : "O que é guardado"}</h2>
          <div className="table-wrap"><table><thead><tr><th>{english ? "Item" : "Elemento"}</th><th>{english ? "Purpose" : "Finalidade"}</th><th>{english ? "Duration" : "Duração"}</th><th>{english ? "Permission" : "Autorização"}</th></tr></thead><tbody>
            <tr><td>teccasa_cookie_consent_v1</td><td>{english ? "Browser local storage: saves your choice, its date and the notice version. It is not an advertising identifier." : "Armazenamento local do navegador: guarda a escolha, a data e a versão do aviso. Não é um identificador publicitário."}</td><td>{english ? `Up to ${CONSENT_DAYS} days` : `Até ${CONSENT_DAYS} dias`}</td><td>{english ? "Necessary to remember your choice" : "Necessário para recordar a escolha"}</td></tr>
            <tr><td>_ga / _ga_*</td><td>{english ? "Google Analytics: distinguish visits and sessions and measure website usage." : "Google Analytics: distinguir visitas e sessões e medir a utilização do site."}</td><td>{english ? `Configured maximum: ${CONSENT_DAYS} days; browsers may shorten this.` : `Máximo configurado: ${CONSENT_DAYS} dias; o navegador pode reduzir este prazo.`}</td><td>{english ? "Only after acceptance" : "Só após aceitação"}</td></tr>
          </tbody></table></div>
          <h2>{english ? "Analytics and third parties" : "Análise e terceiros"}</h2>
          <p>{english ? "If you accept, Google Analytics receives technical and usage information, including the pages visited, session information and browser characteristics. This site's configuration disables Google advertising signals and advertising personalisation, and omits query strings from the page addresses sent in page-view events." : "Se aceitar, o Google Analytics recebe informação técnica e de utilização, incluindo páginas visitadas, informação de sessão e características do navegador. A configuração deste site desativa os sinais publicitários Google e a personalização de anúncios, e exclui os parâmetros de pesquisa dos endereços enviados nos eventos de visualização de página."}</p>
          <p>{english ? "Google tags are blocked before permission and after refusal. Withdrawing permission stops collection, removes Analytics cookies accessible to this website and reloads the page. It does not automatically delete information already collected lawfully." : "As etiquetas Google ficam bloqueadas antes da autorização e após a recusa. Retirar a autorização interrompe a recolha, elimina os cookies Analytics acessíveis a este site e recarrega a página. Não apaga automaticamente informação já recolhida licitamente."}</p>
          <p>{english ? "External services opened through links, such as WhatsApp, Facebook or Instagram, have their own privacy and cookie settings. Map resources from OpenStreetMap and the unpkg content network receive technical connection information when the map loads." : "Os serviços externos abertos através de ligações, como WhatsApp, Facebook ou Instagram, têm as suas próprias regras de privacidade e cookies. Os recursos do mapa OpenStreetMap e da rede de conteúdos unpkg recebem informação técnica da ligação quando o mapa é carregado."}</p>
          <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">{english ? "Google privacy policy" : "Política de privacidade da Google"}</a> · <a href={english ? "/en/privacy" : "/privacidade"}>{english ? "TecCasa privacy policy" : "Política de privacidade TecCasa"}</a></p>
        </>}
        {type === "privacy" && <>
          <h2>{english ? "Data controller" : "Responsável pelo tratamento"}</h2>
          <p>{company.name} — {company.legalName}, NIPC {company.taxId}. {english ? "Contact for privacy matters:" : "Contacto para assuntos de privacidade:"} <a href={`mailto:${company.email}`}>{company.email}</a>. <a href={english ? "/en/legal" : "/informacao-legal"}>{english ? "Company identification and registered office" : "Identificação da sociedade e sede"}</a>.</p>
          <h2>{english ? "Contacts and quotes" : "Contactos e pedidos de orçamento"}</h2>
          <p>{english ? "When you contact us by email, telephone or WhatsApp, we use the information you provide, such as your name, contact details, installation address, equipment details and photos, to reply, assess your request, prepare a quote and provide the agreed service. The legal basis is taking steps at your request before a contract and performing a contract. Accounting and tax records are processed to meet legal obligations." : "Quando nos contacta por email, telefone ou WhatsApp, utilizamos a informação que fornece, como nome, contactos, local da intervenção, características do equipamento e fotografias, para responder, avaliar o pedido, preparar um orçamento e prestar o serviço acordado. O fundamento é a realização de diligências a seu pedido antes de um contrato e a execução do contrato. Os registos contabilísticos e fiscais são tratados para cumprir obrigações legais."}</p>
          <p>{english ? "Enquiries and photos are stored in the email and WhatsApp accounts used by TecCasa and on the computer used to handle requests. Internal access to these enquiries and photos is restricted to the company's manager. Service providers may process data as described below." : "Os pedidos e fotografias são guardados nas contas de email e WhatsApp utilizadas pela TecCasa e no computador utilizado para tratar os pedidos. O acesso interno a estes pedidos e fotografias está reservado ao gerente da sociedade. Os fornecedores de serviços podem tratar dados nos termos descritos abaixo."}</p>
          <p>{english ? "Please send only information necessary to assess the equipment and avoid including unrelated people or documents in photos." : "Envie apenas a informação necessária à avaliação do equipamento e evite incluir pessoas ou documentos sem relação com o pedido nas fotografias."}</p>
          <h2>{english ? "Website operation and analytics" : "Funcionamento do site e análise"}</h2>
          <p>{english ? "Technical connection data, including IP address and request details, is processed by the website's hosting and content providers for delivery, security and fault diagnosis. The basis is our legitimate interest in operating and protecting the website. Optional Google Analytics processing is based on your consent. It helps us evaluate page usage and improve the website. Advertising permission is not requested through this banner." : "Os dados técnicos de ligação, incluindo o endereço IP e dados dos pedidos, são tratados pelos fornecedores de alojamento e conteúdos para disponibilizar o site, assegurar a segurança e diagnosticar falhas. O fundamento é o interesse legítimo no funcionamento e proteção do site. O tratamento opcional através do Google Analytics baseia-se no seu consentimento e ajuda-nos a avaliar a utilização das páginas e melhorar o site. Este aviso não solicita autorização para publicidade."}</p>
          <h2>{english ? "Providers and data transfers" : "Fornecedores e transferências de dados"}</h2>
          <p>{english ? "Providers may process data as necessary to provide hosting (Vercel), analytics (Google), email, communications and administrative support. Map resources are delivered by OpenStreetMap and unpkg. External communications platforms apply their own terms. Some providers operate internationally; international transfers are subject to the applicable legal framework, including adequacy decisions or standard contractual clauses where required." : "Os fornecedores podem tratar dados na medida necessária à prestação de alojamento (Vercel), análise (Google), correio eletrónico, comunicações e apoio administrativo. Os recursos dos mapas são disponibilizados pelo OpenStreetMap e unpkg. As plataformas externas de comunicação aplicam as suas próprias condições. Alguns fornecedores operam internacionalmente; as transferências internacionais estão sujeitas ao regime legal aplicável, incluindo decisões de adequação ou cláusulas contratuais-tipo quando necessárias."}</p>
          <h2>{english ? "Retention" : "Conservação"}</h2>
          <p>{english ? "Enquiries and quote information are kept while needed to handle the request, follow up the service and establish or defend rights. Records subject to legal retention duties are kept for the applicable statutory period." : "Os pedidos e os elementos de orçamento são conservados enquanto forem necessários para tratar o pedido, acompanhar o serviço e exercer ou defender direitos. Os registos sujeitos a conservação obrigatória são mantidos pelo prazo legal aplicável."}</p>
          <p>{english ? "Google Analytics user-level and event-level data is configured to be retained for up to 14 months to compare website performance across annual periods and evaluate improvements. New activity does not reset the user-data retention period. This setting does not apply to standard aggregated reports. Browser consent choices and Analytics cookies are configured for up to 180 days; cookie lifetime is separate from the retention of data already collected. See the cookie policy for details." : "Os dados do Google Analytics ao nível do utilizador e do evento são configurados para conservação até 14 meses, para comparar o desempenho do site entre períodos anuais e avaliar melhorias. A nova atividade não repõe o prazo de conservação dos dados do utilizador. Esta definição não se aplica aos relatórios agregados padrão. As escolhas no navegador e os cookies Analytics são configurados para um máximo de 180 dias; a duração dos cookies é distinta da conservação dos dados já recolhidos. Consulte a política de cookies para mais informação."}</p>
          <h2>{english ? "Your rights" : "Os seus direitos"}</h2>
          <p>{english ? "Under the applicable conditions, you may request access, correction, erasure, restriction, portability or object to processing. You may withdraw analytics consent at any time through Cookie preferences. To exercise your rights, contact us by email; we may need to verify your identity. You may also complain to the Portuguese supervisory authority, CNPD." : "Nas condições legalmente aplicáveis, pode solicitar acesso, retificação, apagamento, limitação, portabilidade ou opor-se ao tratamento. Pode retirar o consentimento para análise a qualquer momento em Preferências de cookies. Para exercer os direitos, contacte-nos por email; poderá ser necessário confirmar a sua identidade. Pode também apresentar reclamação à autoridade de controlo portuguesa, a CNPD."} <a href="https://www.cnpd.pt/" target="_blank" rel="noopener noreferrer">CNPD</a>.</p>
          <p><a href={english ? "/en/cookies" : "/cookies"}>{english ? "Cookie policy" : "Política de cookies"}</a> · <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google</a></p>
        </>}
      </main>
    </div>
    <style jsx>{`
      .legal-page { background: #f4f7fb; padding: 110px 24px 40px; font: 16px/1.75 Arial, sans-serif; color: #34445a; }
      main { max-width: 1000px; margin: auto; background: white; border: 1px solid #dce5f0; border-radius: 22px; padding: clamp(24px, 5vw, 48px); overflow-wrap: anywhere; }
      h1 { color: #08285c; font-size: clamp(27px, 4vw, 36px); line-height: 1.2; margin-top: 0; }
      h2 { color: #08285c; font-size: 21px; margin: 28px 0 10px; line-height: 1.3; }
      .date { color: #586679; font-size: 14px; }
      a { color: #08285c; text-underline-offset: 3px; }
      dt { font-weight: bold; margin-top: 14px; }
      dd { margin: 0; }
      .table-wrap { overflow-x: auto; }
      table { width: 100%; border-collapse: collapse; font-size: 14px; }
      th, td { border: 1px solid #dce5f0; padding: 12px; text-align: left; vertical-align: top; }
      th { background: #f1f5fa; }
      button { background: #f1f5fa; color: #08285c; border: 1px solid #08285c; border-radius: 10px; padding: 12px 18px; font: bold 15px Arial, sans-serif; cursor: pointer; }
      a:focus-visible, button:focus-visible { outline: 3px solid #f7b545; outline-offset: 4px; }
      @media(max-width: 768px) { .legal-page { padding: 95px 12px 24px; } }
    `}</style>
  </>;
}
