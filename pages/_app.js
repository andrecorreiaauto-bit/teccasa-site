import "../styles/contact-actions.css";
import "../styles/remotes.css";
import "../styles/video-intercom.css";
import "../styles/equipment-service.css";
import Head from "next/head";
import { useRouter } from "next/router";
import CompanyIdentity from "../components/CompanyIdentity";
import CookieConsent from "../components/CookieConsent";
import languagePairs from "../lib/language-pairs.json";
import { company, organization } from "../lib/company";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const english = pathname === "/en" || pathname.startsWith("/en/");
  const languagePair = languagePairs.find(routes => routes.includes(pathname));
  return (
    <>
      <Head>
        {languagePair && <>
          <link key="alternate-pt" rel="alternate" hrefLang="pt-PT" href={company.url + languagePair[0]} />
          <link key="alternate-en" rel="alternate" hrefLang="en" href={company.url + languagePair[1]} />
          <link key="alternate-default" rel="alternate" hrefLang="x-default" href={company.url + languagePair[0]} />
        </>}
        <script key="company-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />

        <title>
        TecCasa Soluções | Portões Automáticos, Domótica e Vigilância
        </title>

        <meta
        name="description"
        content="Instalação, reparação e assistência técnica em portões automáticos, domótica, smart home, vigilância e soluções técnicas."
        />

        <link
          rel="icon"
          href="/favicon.png"
        />

      </Head>

      <Component {...pageProps} />
      <CompanyIdentity english={english} />
      <CookieConsent english={english} />
    </>
  );
}
