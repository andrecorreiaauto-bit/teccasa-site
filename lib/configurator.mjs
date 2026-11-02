export const CONFIGURATOR_ORIGIN = "https://teccasa-configurador-portoes.andrecorreia-auto.chatgpt.site";
export const CONFIGURATOR_PATH = "/configurador-automatismos-portoes";
export const CONFIGURATOR_IS_NEW = true;
export const GATE_TYPES = { correr: "sliding", batente: "swing", seccionados: "sectional", basculantes: "tilt" };

export function configuratorUrl(type) {
  const url = new URL(CONFIGURATOR_ORIGIN);
  url.searchParams.set("embed", "1");
  if (Object.values(GATE_TYPES).includes(type)) url.searchParams.set("type", type);
  return url.href;
}

export function readConfiguratorMessage(event, frameWindow) {
  if (!frameWindow || event.source !== frameWindow || event.origin !== CONFIGURATOR_ORIGIN) return null;
  const data = event.data;
  if (!data || typeof data !== "object") return null;
  if (data.type === "teccasa:configurator:resize" && Number.isFinite(data.height) && data.height >= 200 && data.height <= 20000) return {type: "resize", value: Math.ceil(data.height)};
  if (data.type === "teccasa:configurator:scroll" && Number.isFinite(data.top) && data.top >= 0 && data.top <= 20000) return {type: "scroll", value: Math.floor(data.top)};
  return null;
}
