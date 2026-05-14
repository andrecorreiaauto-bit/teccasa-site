import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>
          TecCasa Soluções | Automatismos, Domótica e Vigilância
        </title>

        <meta
          name="description"
          content="Instalação, reparação e assistência técnica em automatismos, domótica, smart home e vigilância doméstica."
        />

        <link
          rel="icon"
          href="/favicon.png"
        />

      </Head>

      <Component {...pageProps} />
    </>
  );
}
