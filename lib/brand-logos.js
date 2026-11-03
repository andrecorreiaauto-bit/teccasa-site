export const automationBrands = [
  { name: "Nice", logo: "/nice-logo.png", slug: "nice", scale: 1.45 },
  { name: "BFT", logo: "/bft-logo.png", slug: "bft", scale: 1.35 },
  { name: "Motorline", logo: "/motorline-logo.png", slug: "motorline", scale: 1.25 },
  { name: "FAAC", logo: "/faac-logo.png", slug: "faac" },
  { name: "CAME", logo: "/came-logo.png", slug: "came" },
  { name: "Hörmann", logo: "/hormann-logo.png", slug: "hormann", scale: 1.45 },
  { name: "Roger Technology", logo: "/roger-technology-logo.png", slug: "roger-technology" },
  { name: "DEA", logo: "/dea-logo.png", slug: "dea" },
  { name: "Somfy", logo: "/somfy-logo.png", slug: "somfy" },
  { name: "Beninca", logo: "/beninca-logo.png", slug: "beninca" },
  { name: "V2", logo: "/v2-logo.png", slug: "v2", scale: 2.05 },
  { name: "Ditec", logo: "/ditec-logo.png", slug: "ditec", scale: 1.4 },
  { name: "Erreka", logo: "/marcas/erreka-logo.png", slug: "erreka" },
  { name: "Pujol", logo: "/marcas/pujol-logo.webp", slug: "pujol", scale: 1.35 },
].map(brand => ({ ...brand, href: `/automatismos-${brand.slug}-portoes` }));

export const kitBrands = [
  { name: "Casanoov", logo: "/casanoov-logo.png", href: "/instalacao-kit-portao-casanoov" },
  { name: "Vevor", logo: "/vevor-logo.png", href: "/instalacao-kit-portao-vevor" },
  { name: "Avidsen", logo: "/avidsen-logo.jpg", href: "/instalacao-kit-portao-avidsen" },
  { name: "Dimoel", logo: "/dimoel-logo.png", href: "/instalacao-kit-portao-dimoel" },
  { name: "SCS Sentinel", logo: "/scs-sentinel-logo.png", href: "/instalacao-kit-portao-scs-sentinel" },
];
