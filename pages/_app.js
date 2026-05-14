import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

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
    </>
  );
}
