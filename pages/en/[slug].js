import Head from "next/head";

export default function EnglishPageUnderConstruction() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#08285c"/>
          <stop offset="100%" stop-color="#0b3f88"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#bg)"/>
      <rect x="150" y="150" width="1300" height="700" rx="46" fill="#ffffff" opacity="0.96"/>
      <circle cx="800" cy="355" r="92" fill="#eef3fa"/>
      <path d="M730 365h140v54H730z" fill="#08285c"/>
      <path d="M752 315h96l34 50H718z" fill="#0b3f88"/>
      <circle cx="770" cy="442" r="16" fill="#25D366"/>
      <circle cx="830" cy="442" r="16" fill="#25D366"/>
      <text x="800" y="560" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="800" fill="#08285c">PAGE UNDER CONSTRUCTION</text>
      <text x="800" y="635" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#4b5563">This English page is being prepared.</text>
      <text x="800" y="705" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#08285c">TecCasa Soluções</text>
    </svg>
  `;

  return (
    <>
      <Head>
        <title>Page under construction | TecCasa Soluções</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="construction-page">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          alt="Page under construction"
        />
      </main>

      <style jsx global>{`
        html,
        body,
        #__next {
          width: 100%;
          min-height: 100%;
          margin: 0;
          padding: 0;
          background: #f4f7fb;
        }

        .construction-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          box-sizing: border-box;
          background: #f4f7fb;
        }

        .construction-page img {
          width: min(100%, 1100px);
          height: auto;
          display: block;
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(11,44,95,0.16);
        }

        @media (max-width: 768px) {
          .construction-page {
            padding: 12px;
          }

          .construction-page img {
            border-radius: 16px;
          }
        }
      `}</style>
    </>
  );
}
