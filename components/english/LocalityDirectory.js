import { useRef, useState } from "react";
import localServices from "../../lib/local-services.json";

const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const grouped = new Map();
for (const page of Object.values(localServices)) {
  if (!grouped.has(page.area)) grouped.set(page.area, { name: page.area });
  grouped.get(page.area)[page.kind === "installation" ? "installation" : "repair"] = "/" + page.slug;
}
const areas = [...grouped.values()].sort((a, b) => a.name.localeCompare(b.name, "pt"));

export default function LocalityDirectory() {
  const [search, setSearch] = useState("");
  const input = useRef(null);
  const query = normalize(search);
  const count = areas.filter(area => normalize(area.name).includes(query)).length;
  return <details id="locations-directory">
    <summary><span>View places with local pages (Portuguese)</span><span className="directory-count">{areas.length} places <b aria-hidden="true">+</b></span></summary>
    <div className="directory-body">
      <label htmlFor="locality-search">Search for a place in this list</label>
      <div className="directory-search"><input id="locality-search" type="search" placeholder="E.g. Almada, Loures, Montijo…" autoComplete="off" ref={input} value={search} onChange={event => setSearch(event.target.value)} /><button type="button" id="clear-search" hidden={!search} onClick={() => { setSearch(""); input.current?.focus(); }}>Clear</button></div>
      <p className="directory-status" id="directory-status" role="status">{query ? `${count} ${count === 1 ? "place" : "places"} found` : `${areas.length} places with local information`}</p>
      <div className="localities">{areas.map(area => <article className="locality" key={area.name} data-locality={area.name} hidden={!normalize(area.name).includes(query)}><h3>{area.name}</h3><div><a href={area.installation} hrefLang="pt-PT" aria-label={`Gate automation installation in ${area.name} — page in Portuguese`}>Installation <span aria-hidden="true">→</span><small className="pt-destination"> (Portuguese)</small></a><a href={area.repair} hrefLang="pt-PT" aria-label={`Gate automation repairs in ${area.name} — page in Portuguese`}>Repairs <span aria-hidden="true">→</span><small className="pt-destination"> (Portuguese)</small></a></div></article>)}</div>
      <div id="no-localities" className="no-localities" hidden={count !== 0}><h3>This place does not have its own page in this list.</h3><p>That does not mean it is outside our service area. Check the area marked on the map.</p><a className="text-link" href="#zona-habitual">Back to the map ↑</a></div>
    </div>
  </details>;
}
