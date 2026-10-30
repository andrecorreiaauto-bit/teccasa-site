export const company = {
  name: "TecCasa Soluções",
  legalName: "ANDRE CORREIA - AUTOMATISMOS E SOLUÇÕES INTELIGENTES UNIPESSOAL LDA",
  taxId: "519682742",
  url: "https://tec-casa.pt",
  telephone: "+351922021980",
  email: "geral@tec-casa.pt",
};

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${company.url}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: company.url,
  telephone: company.telephone,
  email: company.email,
  taxID: company.taxId,
  logo: `${company.url}/Logo.png`,
  areaServed: "Lisboa e arredores",
  sameAs: ["https://www.instagram.com/teccasasolucoes/"],
};
