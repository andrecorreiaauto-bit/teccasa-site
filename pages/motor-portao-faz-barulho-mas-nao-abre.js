import FaultPage from "../components/FaultPage";
import pages from "../lib/fault-pages.json";

export default function MotorPortaoFazBarulhoMasNaoAbre() {
  return <FaultPage page={pages["motor-portao-faz-barulho-mas-nao-abre"]} />;
}
