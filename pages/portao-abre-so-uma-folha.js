import FaultPage from "../components/FaultPage";
import pages from "../lib/fault-pages.json";

export default function PortaoAbreSoUmaFolha() {
  return <FaultPage page={pages["portao-abre-so-uma-folha"]} />;
}
