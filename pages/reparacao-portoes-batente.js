import GateInstallationPage from "../components/GateInstallationPage";
import pages from "../lib/gate-repair-pages.json";

export default function Page() {
  return <GateInstallationPage page={pages["reparacao-portoes-batente"]} repair />;
}
