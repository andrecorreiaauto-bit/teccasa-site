import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const localPages = JSON.parse(readFileSync(join(root, "lib/local-services.json"), "utf8"));
const labels = {
  "/": "Homepage", "/en": "Homepage EN", "/a-empresa": "A empresa", "/en/about": "About us",
  "/informacao-legal": "Informação legal", "/privacidade": "Política de privacidade", "/cookies": "Política de cookies", "/condicoes-servicos": "Condições dos serviços",
  "/en/legal": "Legal information", "/en/privacy": "Privacy policy", "/en/cookies": "Cookie policy", "/en/service-terms": "Service terms",
};
const groupOrder = ["Páginas principais", "Instalação por zona", "Reparação por zona", "Páginas de avarias", "Páginas de marcas", "Kits e instalação de material do cliente", "Páginas EN", "Informação legal e privacidade"];
const principal = new Set(["/", "/a-empresa", "/instalacao-automatismos-portoes", "/reparacao-portoes-lisboa", "/comandos-garagem", "/casas-inteligentes-lisboa", "/instalacao-camaras-lisboa"]);
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
  const title = labels[route] || local?.title || source.match(/<title>\s*([^<{]+?)\s*<\/title>/)?.[1]?.replace(/\s+/g, " ").replace(/\s*\|\s*TecCasa Soluções\s*$/, "");
  if (!title) throw new Error(`Page has no directory label: ${route}`);
  const indexable = !source.includes("LegalPage") && !/<meta[^>]+content=["'][^"']*noindex/.test(source);
  const group = !indexable ? groupOrder[7] : principal.has(route) ? groupOrder[0] : local ? groupOrder[local.kind === "installation" ? 1 : 2] : route.startsWith("/en") ? groupOrder[6] : route.startsWith("/automatismos-") ? groupOrder[4] : route.startsWith("/instalacao-kit-") ? groupOrder[5] : groupOrder[3];
  return { path: route, label: title, indexable, group };
}).sort((a, b) => a.path.localeCompare(b.path));
const paths = new Set(records.map(item => item.path));
if (paths.size !== records.length) throw new Error("Duplicate page route");
const groups = groupOrder.map(title => ({ title, items: records.filter(item => item.group === title).map(({ group, ...item }) => item) })).filter(group => group.items.length);
writeFileSync(join(root, "lib/page-catalog.json"), JSON.stringify({ groups }, null, 2) + "\n");
const xmlEscape = value => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const translations = [
  ["/", "/en"], ["/a-empresa", "/en/about"],
  ["/instalacao-automatismos-portoes", "/en/automatic-gate-installation-lisbon"],
  ["/reparacao-portoes-lisboa", "/en/electric-gate-repair-lisbon"],
  ["/comandos-garagem", "/en/garage-remote-controls-lisbon"],
  ["/instalacao-camaras-lisboa", "/en/security-cameras-lisbon"],
  ["/comando-garagem-nao-funciona", "/en/gate-remote-control-not-working"],
];
const base = "https://tec-casa.pt";
// Dates of actual content revisions, never the date a build happens to run.
const contentUpdated = {
  "/": "2026-10-30", "/en": "2026-10-30", "/a-empresa": "2026-10-30", "/en/about": "2026-10-30",
  "/instalacao-automatismos-portoes": "2026-10-30", "/reparacao-portoes-lisboa": "2026-10-30",
  "/casas-inteligentes-lisboa": "2026-10-30", "/comandos-garagem": "2026-10-30", "/instalacao-camaras-lisboa": "2026-10-30",
};
const urls = records.filter(page => page.indexable).map(page => {
  const pair = translations.find(pair => pair.includes(page.path));
  const alternate = pair ? `\n    <xhtml:link rel="alternate" hreflang="pt-PT" href="${base + pair[0]}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${base + pair[1]}" />` : "";
  const updated = localPages[page.path.slice(1)]?.updated || contentUpdated[page.path];
  return `  <url>\n    <loc>${xmlEscape(base + page.path)}</loc>${updated ? `\n    <lastmod>${updated}</lastmod>` : ""}${alternate}\n  </url>`;
});
writeFileSync(join(root, "public/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`);
console.log(`Navigation: ${records.length} pages; sitemap: ${urls.length} indexable URLs; excluded: ${records.filter(page => !page.indexable).length} legal pages.`);
