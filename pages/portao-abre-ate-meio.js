import FaultPage from "../components/FaultPage";
import pages from "../lib/fault-pages.json";

export default function PortaoAbreAteMeio() {
  return <FaultPage page={pages["portao-abre-ate-meio"]} />;
}
