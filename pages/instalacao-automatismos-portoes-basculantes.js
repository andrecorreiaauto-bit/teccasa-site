import GateInstallationPage from "../components/GateInstallationPage";
import pages from "../lib/gate-installation-pages.json";

export default function Page() {
  return <GateInstallationPage page={pages["instalacao-automatismos-portoes-basculantes"]} />;
}
