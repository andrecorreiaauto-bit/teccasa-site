import Head from "next/head";
import { useRouter } from "next/router";
import CompanyIdentity from "../components/CompanyIdentity";
import CookieConsent from "../components/CookieConsent";
import { organization } from "../lib/company";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const english = pathname === "/en" || pathname.startsWith("/en/");
  return (
    <>
      <Head>
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
