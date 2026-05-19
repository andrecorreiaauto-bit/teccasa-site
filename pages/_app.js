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

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8YRYYNTV5"></script>

<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-N8YRYYNTV5');
    `,
  }}
/>

      </Head>

      <Component {...pageProps} />
    </>
  );
}
