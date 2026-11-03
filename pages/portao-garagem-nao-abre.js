import FaultPage from "../components/FaultPage";
import pages from "../lib/fault-pages.json";

export default function PortaoGaragemNaoAbre() {
  return <FaultPage page={pages["portao-garagem-nao-abre"]} />;
}
