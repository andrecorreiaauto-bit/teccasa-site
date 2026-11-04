import { useEffect, useRef, useState } from "react";

const CENTER = [38.84002, -9.10069];

export default function CoverageMap() {
  const container = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let disposed = false;
    let map;
    let script;
    const start = () => {
      if (disposed || !container.current) return;
      const L = window.L;
      map = L.map(container.current, { zoomControl: false }).setView(CENTER, window.innerWidth < 768 ? 8 : 9);
      L.control.zoom({ zoomInTitle: "Ampliar mapa", zoomOutTitle: "Reduzir mapa" }).addTo(map);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      L.circle(CENTER, { radius: 45000, color: "#0b2c5f", fillColor: "#0b2c5f", fillOpacity: 0.15 }).addTo(map);
      setStatus("ready");
    };

    if (!document.querySelector('link[href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]')) {
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(css);
    }
    if (window.L) start();
    else {
      script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = start;
      script.onerror = () => { if (!disposed) setStatus("error"); };
      document.body.appendChild(script);
    }
    return () => {
      disposed = true;
      if (map) map.remove();
      if (script) { script.onload = null; script.onerror = null; script.remove(); }
    };
  }, []);

  return <div className="coverage-map" data-coverage-map>
    <div ref={container} id="mapa-teccasa" className="map-canvas" role="region" aria-label="Mapa da zona habitual de atuação da TecCasa, num raio aproximado de 45 km" />
    {status !== "ready" && <p className="map-status" role="status">{status === "error" ? <>Não foi possível carregar o mapa. <a href="/zonas-de-assistencia">Consulte as zonas de assistência.</a></> : "A carregar o mapa da zona de atuação…"}</p>}
    <noscript><p>Ative o JavaScript para consultar o mapa ou veja as <a href="/zonas-de-assistencia">zonas de assistência</a>.</p></noscript>
    <style jsx>{`
      .coverage-map { position:relative; border:1px solid #cfdeec; border-radius:20px; overflow:hidden; background:#e8f0f7; isolation:isolate; }
      .map-canvas { width:100%; height:400px; z-index:0; }
      .map-status { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; gap:6px; flex-wrap:wrap; margin:0; padding:24px; color:#42617e; background:#e8f0f7; text-align:center; font:15px/1.7 Arial,sans-serif; }
      a { color:#08285c; text-underline-offset:4px; }
      @media(max-width:767px) { .map-canvas { height:280px; } }
    `}</style>
  </div>;
}
