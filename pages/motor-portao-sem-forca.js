import FaultPage from "../components/FaultPage";
import pages from "../lib/fault-pages.json";

export default function MotorPortaoSemForca() {
  return <FaultPage page={pages["motor-portao-sem-forca"]} />;
}
