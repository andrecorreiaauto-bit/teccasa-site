import { company } from "../lib/company";

export default function CompanyIdentity({ english = false }) {
  return (
    <aside className="company-identity" aria-label={english ? "Company information" : "Identificação da empresa"}>
      <a href={english ? "/en/about" : "/a-empresa"}>{english ? "About us" : "A empresa"}</a>
      <p>
        {english ? "TecCasa Soluções is the trading name of" : "TecCasa Soluções é o nome comercial de"}{" "}
        <strong>{company.legalName}</strong>.
      </p>
      <p>NIPC: {company.taxId} · <a href={`mailto:${company.email}`}>{company.email}</a> · <a href={`tel:${company.telephone}`}>922 021 980</a> ({english ? "Portuguese mobile network call" : "Chamada para a rede móvel nacional"})</p>
      <div className="complaints-access">
        <a href="https://livroreclamacoes.pt/inicio/qrcode_operator?economicoperator=43126374" target="_blank" rel="noopener noreferrer">{english ? "Electronic Complaints Book" : "Livro de Reclamações Eletrónico"}</a>
      </div>
      <div className="policy-links">
        <a href={english ? "/en/legal" : "/informacao-legal"}>{english ? "Legal information" : "Informação legal"}</a>
        <a href={english ? "/en/service-terms" : "/condicoes-servicos"}>{english ? "Service terms" : "Condições dos serviços"}</a>
        <a href={english ? "/en/privacy" : "/privacidade"}>{english ? "Privacy" : "Privacidade"}</a>
        <a href={english ? "/en/cookies" : "/cookies"}>Cookies</a>
        <button type="button" onClick={() => window.dispatchEvent(new Event("teccasa:cookie-preferences"))}>{english ? "Cookie preferences" : "Preferências de cookies"}</button>
      </div>
      <style jsx>{`
        .company-identity { box-sizing: border-box; padding: 28px 24px 36px; background: #edf2f8; color: #34445a; text-align: center; font: 14px/1.7 Arial, sans-serif; }
        .company-identity p { max-width: 950px; margin: 10px auto 0; overflow-wrap: anywhere; }
        .company-identity a { color: #08285c; text-underline-offset: 4px; }
        .company-identity > a { font-weight: 700; font-size: 16px; }
        .complaints-access { margin-top: 18px; }
        .complaints-access a { display: inline-block; box-sizing: border-box; max-width: 100%; padding: 9px 18px; border: 1px solid #9b1616; border-radius: 10px; background: #fff; color: #8c0808; font-size: 15px; font-weight: 700; text-decoration: none; }
        .policy-links { display: flex; justify-content: center; gap: 12px 20px; flex-wrap: wrap; margin-top: 18px; font-size: 13px; }
        button { background: none; border: none; padding: 0; font: inherit; color: #08285c; text-decoration: underline; text-underline-offset: 4px; cursor: pointer; }
        a:focus-visible, button:focus-visible { outline: 3px solid #f7b545; outline-offset: 4px; }
      `}</style>
    </aside>
  );
}
