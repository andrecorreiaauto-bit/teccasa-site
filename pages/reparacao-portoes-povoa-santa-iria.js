import LocalServicePage from "../components/LocalServicePage";
import pages from "../lib/local-services.json";

export default function LocalPage(props) { return <LocalServicePage {...props} />; }

export function getStaticProps() {
  return { props: { page: pages["reparacao-portoes-povoa-santa-iria"] } };
}
