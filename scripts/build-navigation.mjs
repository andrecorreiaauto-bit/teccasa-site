import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const localPages = JSON.parse(readFileSync(join(root, "lib/local-services.json"), "utf8"));
const gatePages = JSON.parse(readFileSync(join(root, "lib/gate-installation-pages.json"), "utf8"));
const repairPages = JSON.parse(readFileSync(join(root, "lib/gate-repair-pages.json"), "utf8"));
const brandPages = JSON.parse(readFileSync(join(root, "lib/independent-brand-pages.json"), "utf8"));
const assistanceBrands = JSON.parse(readFileSync(join(root, "lib/brand-assistance-pages.json"), "utf8"));
const faultPages = JSON.parse(readFileSync(join(root, "lib/fault-pages.json"), "utf8"));
const equipmentPages = JSON.parse(readFileSync(join(root, "lib/equipment-service-pages.json"), "utf8"));
const translations = JSON.parse(readFileSync(join(root, "lib/language-pairs.json"), "utf8"));
const labels = {
  "/videoporteiros-lisboa": "Videoporteiros em Lisboa — instalação e assistência",
  "/en/video-intercom-installation-lisbon": "Video Intercom Installation and Service in Lisbon",
  "/en/automatic-gate-installation-lisbon": "Gate Automation Installation in Lisbon",
  "/en/electric-gate-repair-lisbon": "Gate Automation and Automatic Gate Repairs in Lisbon",
  "/en/smart-home-lisbon": "Smart Home Design and Installation in Lisbon",
  "/en/security-cameras-lisbon": "Home Security Camera Installation in Lisbon",
  "/en/garage-remote-controls-lisbon": "Gate and Garage Remotes and Receivers",
  "/en/service-areas": "Service Areas",
  "/en/garage-door-motor-repair": "Garage Door Motor Repair in Lisbon",
  "/en/gate-remote-control-not-working": "Gate Remote Control Not Working?",

  "/instalacao-automatismos-portoes": "Instalação de Automatismos para Portões",
  "/reparacao-portoes": "Reparação de automatismos e portões automáticos",
  "/comandos-garagem": "Comandos e recetores para portões e garagens",
  "/quanto-custa-automatizar-portao": "Quanto custa automatizar um portão?",
  "/configurador-automatismos-portoes": "Configurador de automatismos", "/": "Homepage", "/en": "Homepage EN", "/a-empresa": "A empresa", "/en/about": "About us",
  "/informacao-legal": "Informação legal", "/privacidade": "Política de privacidade", "/cookies": "Política de cookies", "/condicoes-servicos": "Condições dos serviços",
  "/en/legal": "Legal information", "/en/privacy": "Privacy policy", "/en/cookies": "Cookie policy", "/en/service-terms": "Service terms",
};
const groupOrder = ["Páginas principais", "Instalação por tipo de portão", "Instalação por zona", "Reparação por zona", "Páginas de avarias", "Páginas de marcas", "Kits e instalação de material do cliente", "Páginas EN", "Informação legal e privacidade", "Reparação por tipo de portão"];
const principal = new Set(["/videoporteiros-lisboa", "/quanto-custa-automatizar-portao", "/configurador-automatismos-portoes", "/zonas-de-assistencia", "/", "/a-empresa", "/instalacao-automatismos-portoes", "/reparacao-portoes", "/comandos-garagem", "/casas-inteligentes-lisboa", "/instalacao-camaras-lisboa"]);
const files = [];
function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const full = join(directory, entry.name);
    if (entry.isDirectory() && entry.name !== "api") walk(full);
    else if (/\.(js|jsx|tsx)$/.test(entry.name) && !entry.name.startsWith("_") && !entry.name.includes("[")) files.push(full);
  }
}
walk(join(root, "pages"));
const records = files.map(file => {
  const source = readFileSync(file, "utf8");
  const route = "/" + relative(join(root, "pages"), file).replace(/\\/g, "/").replace(/\.(js|jsx|tsx)$/, "").replace(/(^|\/)index$/, "").replace(/\/$/, "");
  const local = localPages[route.slice(1)];
  const gate = gatePages[route.slice(1)];
  const repair = repairPages[route.slice(1)];
  const brand = brandPages[route.slice(1)];
  const fault = faultPages[route.slice(1)];
  const assistanceBrand = assistanceBrands[route.slice(1)];
  const title = labels[route] || equipmentPages[route.slice(1)]?.label || local?.title || gate?.title || repair?.title || brand?.title || fault?.title || assistanceBrand?.title || source.match(/<title>\s*([^<{]+?)\s*<\/title>/)?.[1]?.replace(/\s+/g, " ").replace(/\s*\|\s*TecCasa Soluções\s*$/, "");
  if (!title) throw new Error(`Page has no directory label: ${route}`);
  const indexable = !source.includes("LegalPage") && !/<meta[^>]+content=["'][^"']*noindex/.test(source);
  const group = !indexable ? groupOrder[8] : principal.has(route) ? groupOrder[0] : gate ? groupOrder[1] : repair ? groupOrder[9] : local ? groupOrder[local.kind === "installation" ? 2 : 3] : route.startsWith("/en") ? groupOrder[7] : route.startsWith("/automatismos-") ? groupOrder[5] : route.startsWith("/instalacao-kit-") ? groupOrder[6] : groupOrder[4];
  return { path: route, label: title, indexable, group };
}).sort((a, b) => a.path.localeCompare(b.path));
const paths = new Set(records.map(item => item.path));
if (paths.size !== records.length) throw new Error("Duplicate page route");
const groups = [groupOrder[0], groupOrder[1], groupOrder[9], ...groupOrder.slice(2,9)].map(title => ({ title, items: records.filter(item => item.group === title).map(({ group, ...item }) => item) })).filter(group => group.items.length);
writeFileSync(join(root, "lib/page-catalog.json"), JSON.stringify({ groups }, null, 2) + "\n");
const xmlEscape = value => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
for (const pair of translations) {
  if (pair.some(path => !paths.has(path))) throw new Error(`Missing language route: ${pair.join(" / ")}`);
}
const base = "https://tec-casa.pt";
// Dates of actual content revisions, never the date a build happens to run.
const contentUpdated = {
  "/videoporteiros-lisboa": "2026-11-11",
  "/en/video-intercom-installation-lisbon": "2026-11-11",
  "/en": "2026-11-11",
  "/en/automatic-gate-installation-lisbon": "2026-11-04",
  "/en/electric-gate-repair-lisbon": "2026-11-04",
  "/en/smart-home-lisbon": "2026-11-04",
  "/en/security-cameras-lisbon": "2026-11-04",
  "/en/garage-remote-controls-lisbon": "2026-11-11",
  "/en/service-areas": "2026-11-04",
  "/en/garage-door-motor-repair": "2026-11-04",
  "/en/gate-remote-control-not-working": "2026-11-04",
  "/instalacao-kit-portao-vevor": "2026-11-04",
  "/instalacao-kit-portao-scs-sentinel": "2026-11-09",
  "/instalacao-kit-portao-olx": "2026-11-04",
  "/instalacao-kit-portao-leroy-merlin": "2026-11-04",
  "/instalacao-kit-portao-dimoel": "2026-11-04",
  "/instalacao-kit-portao-casanoov": "2026-11-04",
  "/instalacao-kit-portao-brico-depot": "2026-11-04",
  "/instalacao-kit-portao-avidsen": "2026-11-09",
  "/instalacao-kit-portao-automatico": "2026-11-04",
  "/instalacao-kit-portao-amazon": "2026-11-04",
  "/automatismos-v2-portoes": "2026-11-04",
  "/automatismos-somfy-portoes": "2026-11-04",
  "/automatismos-roger-technology-portoes": "2026-11-04",
  "/automatismos-nice-portoes": "2026-11-04",
  "/automatismos-motorline-portoes": "2026-11-04",
  "/automatismos-hormann-portoes": "2026-11-04",
  "/automatismos-faac-portoes": "2026-11-04",
  "/automatismos-ditec-portoes": "2026-11-04",
  "/automatismos-came-portoes": "2026-11-04",
  "/automatismos-bft-portoes": "2026-11-04",
  "/quanto-custa-automatizar-portao": "2026-11-04",
  "/configurador-automatismos-portoes": "2026-11-02",
  "/": "2026-11-11",
  "/a-empresa": "2026-10-30",
  "/en/about": "2026-10-30",
  "/zonas-de-assistencia": "2026-11-04",
  "/instalacao-automatismos-portoes": "2026-11-04",
  "/reparacao-portoes": "2026-11-04",
  "/casas-inteligentes-lisboa": "2026-11-04",
  "/comandos-garagem": "2026-11-11",
  "/instalacao-camaras-lisboa": "2026-11-04"
};
const urls = records.filter(page => page.indexable).map(page => {
  const pair = translations.find(pair => pair.includes(page.path));
  const alternate = pair ? `\n    <xhtml:link rel="alternate" hreflang="pt-PT" href="${base + pair[0]}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${base + pair[1]}" />` : "";
  const updated = localPages[page.path.slice(1)]?.updated || gatePages[page.path.slice(1)]?.updated || repairPages[page.path.slice(1)]?.updated || brandPages[page.path.slice(1)]?.updated || faultPages[page.path.slice(1)]?.updated || assistanceBrands[page.path.slice(1)]?.updated || contentUpdated[page.path];
  return `  <url>\n    <loc>${xmlEscape(base + page.path)}</loc>${updated ? `\n    <lastmod>${updated}</lastmod>` : ""}${alternate}\n  </url>`;
});
writeFileSync(join(root, "public/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`);
console.log(`Navigation: ${records.length} pages; sitemap: ${urls.length} indexable URLs; excluded: ${records.filter(page => !page.indexable).length} legal pages.`);
