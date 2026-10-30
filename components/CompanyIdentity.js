import { company } from "../lib/company";

export default function CompanyIdentity({ english = false }) {
  return (
    <aside className="company-identity" aria-label={english ? "Company information" : "Identificação da empresa"}>
      <a href={english ? "/en/about" : "/a-empresa"}>{english ? "About us" : "A empresa"}</a>
      <p>
        {english ? "TecCasa Soluções is the trading name of" : "TecCasa Soluções é o nome comercial de"}{" "}
        <strong>{company.legalName}</strong>.
      </p>
      <p>NIPC: {company.taxId} · <a href={`mailto:${company.email}`}>{company.email}</a> · <a href={`tel:${company.telephone}`}>922 021 980</a></p>
      <style jsx>{`
        .company-identity { box-sizing: border-box; padding: 28px 24px 36px; background: #edf2f8; color: #34445a; text-align: center; font: 14px/1.7 Arial, sans-serif; }
        .company-identity p { max-width: 950px; margin: 10px auto 0; overflow-wrap: anywhere; }
        .company-identity a { color: #08285c; text-underline-offset: 4px; }
        .company-identity > a { font-weight: 700; font-size: 16px; }
      `}</style>
    </aside>
  );
}
