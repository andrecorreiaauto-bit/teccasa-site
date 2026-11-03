import FaultPage from "../components/FaultPage";
import pages from "../lib/fault-pages.json";

export default function ComandoGaragemSoFuncionaPerto() {
  return <FaultPage page={pages["comando-garagem-so-funciona-perto"]} />;
}
