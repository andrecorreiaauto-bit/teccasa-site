import FaultPage from "../components/FaultPage";
import pages from "../lib/fault-pages.json";

export default function PortaoFechaEVoltaAAbrir() {
  return <FaultPage page={pages["portao-fecha-e-volta-a-abrir"]} />;
}
