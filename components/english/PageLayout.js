import Head from "next/head";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { company } from "../../lib/company";

export default function EnglishPageLayout({ page, styles, children }) {
  const url = company.url + page.route;
  const whatsapp = "https://wa.me/351922021980?text=" + encodeURIComponent(page.message);
  const graph = [{ "@type": "WebPage", "@id": url + "#webpage", url, name: page.title, description: page.description, inLanguage: "en", about: { "@id": company.url + "/#organization" } }];
  if (page.questions.length) graph.push({ "@type": "FAQPage", mainEntity: page.questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) });
  if (page.id === "areas") graph.push({ "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: company.url + "/en" }, { "@type": "ListItem", position: 2, name: "Service areas", item: url }] });
  return <>
    <Head>
      <title>{page.title}</title><meta name="description" content={page.description} /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={page.title} /><meta property="og:description" content={page.description} /><meta property="og:type" content="website" /><meta property="og:url" content={url} /><meta property="og:image" content={company.url + "/preview.jpg"} />
      <meta name="google-site-verification" content="_Dnes5RL-b6NjpXQVjaV6Nz7AlQFSU4PvvcSTWUKe44" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }} />
    </Head>
    <div className={`english-page ${page.wrapper}`} lang="en">
      <SiteHeader english alternateHref={page.ptRoute} />
      <main className="main-card" data-english-page={page.id}>
        {children}
        <SiteFooter english />
      </main>
      <a className="english-floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Talk to TecCasa on WhatsApp">WhatsApp</a>
      <style jsx global>{styles}</style>
      <style jsx global>{`
        body { margin:0; }
        .english-page { box-sizing:border-box; min-height:100vh; padding:110px 40px 40px; background:#f4f7fb; color:#405168; font:17px/1.75 Arial,sans-serif; }
        .english-page * { box-sizing:border-box; }
        .english-page .main-card { min-width:0; }
        .english-page [hidden] { display:none!important; }
        .english-page .pt-destination { font-size:10px; font-weight:400; white-space:normal; }
        .english-page .language-note { color:#61738a; font:13px/1.7 Arial,sans-serif; margin:0 0 16px; }
        .english-page .english-floating-whatsapp { position:fixed; bottom:25px; right:25px; z-index:900; display:inline-flex; align-items:center; justify-content:center; width:auto; min-height:48px; max-width:calc(100vw - 28px); padding:12px 18px; border-radius:999px; background:#25d366; color:white; text-decoration:none; font:700 14px/1.5 Arial,sans-serif; box-shadow:0 4px 18px #0002; }
        @media(max-width:768px) { .english-page { padding:95px 6px 12px; font-size:16px; } .english-page .main-card { width:100%; max-width:100%; } }
        @media(max-width:600px) { .english-page .english-floating-whatsapp { right:14px; bottom:14px; min-height:46px; padding:11px 16px; font-size:13px; } }
      `}</style>
    </div>
  </>;
}
