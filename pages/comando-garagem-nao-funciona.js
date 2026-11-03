import FaultPage from "../components/FaultPage";
import pages from "../lib/fault-pages.json";

export default function ComandoGaragemNaoFunciona() {
  return <FaultPage page={pages["comando-garagem-nao-funciona"]} />;
}
