import { useEffect, useState } from "react";
import Head from "next/head";

export default function AutomaticGateRepairLisbon() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Gate repair", href: "/en/electric-gate-repair-lisbon" },
    { label: "Gate installation", href: "/en/automatic-gate-installation-lisbon" },
    { label: "Garage remotes", href: "/en/garage-remote-controls-lisbon" },
    { label: "Security cameras", href: "/en/security-cameras-lisbon" }
  ];

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = () => {
      setMenuOpen(false);
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  return (
    <>
      <Head>
        <title>Garage Remote Controls in Lisbon | TecCasa Soluções</title>
      
        <meta
          name="description"
          content="Garage and gate remote control programming, replacement and signal troubleshooting in Lisbon and surrounding areas."
        />
      
        <meta
          name="keywords"
          content="garage remote controls Lisbon, gate remote control Lisbon, garage remote not working Lisbon, gate remote programming Lisbon, garage remote replacement Lisbon, remote receiver troubleshooting Lisbon, TecCasa Soluções"
        />
      
        <meta name="robots" content="noindex, nofollow" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
        <meta
          property="og:title"
          content="Garage Remote Controls in Lisbon | TecCasa Soluções"
        />
      
        <meta
          property="og:description"
          content="Programming, replacement and troubleshooting of garage and gate remote controls in Lisbon and surrounding areas."
        />
      
        <meta 
          name="google-site-verification" 
          content="_Dnes5RL-b6NjpXQVjaV6Nz7AlQFSU4PvvcSTWUKe44" 
        />
      
        <meta property="og:image" content="https://www.tec-casa.pt/preview.jpg" />
        <meta property="og:url" content="https://tec-casa.pt/en/garage-remote-controls-lisbon" />
        <meta property="og:type" content="website" />
      
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://tec-casa.pt/en/garage-remote-controls-lisbon" />
      </Head>

      <div className="page">
        <nav className="top-nav">
          <div className="nav-inner">
            <a href="/en" className="brand">
              <img src="/favicon.png" alt="TecCasa Soluções" />
              TecCasa Soluções
            </a>

            <button
              onClick={(event) => {
                event.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className="menu-button"
              aria-label="Open menu"
            >
              ☰
            </button>

            <div className="desktop-menu">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20an%20automatic%20gate%20in%20Lisbon."
                target="_blank"
                className="whatsapp-link"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {menuOpen && (
            <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20an%20automatic%20gate%20in%20Lisbon."
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="mobile-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          )}
        </nav>

        <main className="main-card">
          <section className="hero-reparacao">
            <div>
              <div className="eyebrow">Garage and gate remote controls in Lisbon</div>
          
              <h1>Garage remote programming, replacement and troubleshooting</h1>
          
              <p className="lead">
                TecCasa Soluções helps with garage and gate remote controls, including
                programming, replacement, receiver checks and signal troubleshooting in
                Lisbon and surrounding areas.
              </p>
          
              <p className="support">
                If your remote does not work, only works very close to the gate, lost
                programming or needs replacement, send photos of the remote and the gate
                automation system by WhatsApp message.
              </p>
          
              <div className="button-row">
                <a
                  href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20a%20garage%20or%20gate%20remote%20control%20in%20Lisbon."
                  target="_blank"
                  className="primary-button"
                >
                  Send WhatsApp message
                </a>
          
                <a href="tel:+351922021980" className="secondary-button">
                  Call 922 021 980
                </a>
              </div>
          
              <p style={{
              fontSize:"14px",
              lineHeight:"1.6",
              color:"#6b7280",
              maxWidth:"680px",
              margin:"16px 0 0 0"
              }}>
              For safety reasons, phone calls are only answered from Portuguese numbers (+351). 
              If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.
              </p>
            </div>
          
            <div className="hero-image-wrap">
              <img
                src="/comandos.png"
                alt="Garage and gate remote controls in Lisbon"
              />
            </div>
          </section>

          <section id="services" className="section-block">
            <h2>Remote control services</h2>
          
            <p className="section-intro">
              We help with common garage and gate remote control issues, from programming and replacement to receiver and signal checks.
            </p>
          
            <div className="problemas-grid">
              {[
                {
                  title: "Remote programming",
                  text: "Programming compatible garage or gate remotes, depending on the automation system and receiver."
                },
                {
                  title: "Remote replacement",
                  text: "Replacement of damaged, lost or unreliable remotes with compatible solutions where possible."
                },
                {
                  title: "Receiver checks",
                  text: "Checking the radio receiver, antenna, wiring and control board input when remotes stop working."
                },
                {
                  title: "Weak signal diagnosis",
                  text: "Troubleshooting remotes that only work very close to the gate or garage door."
                },
                {
                  title: "Battery and button issues",
                  text: "Basic checks for weak batteries, damaged buttons, worn casing or intermittent remote operation."
                },
                {
                  title: "Multiple remotes setup",
                  text: "Programming and testing more than one remote for homes, garages or small residential buildings."
                }
              ].map((item) => (
                <article key={item.title} className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="common-problems" className="section-block">
            <h2>Common remote control problems</h2>
          
            <p className="section-intro">
              Remote control faults can come from the remote itself, the battery, the receiver, the antenna, interference or the gate control board.
            </p>
          
            <div className="problem-image-grid">
              {[
                {
                  image: "/comandos.png",
                  title: "Remote does not work",
                  text: "The cause may be battery, lost programming, damaged remote, receiver issue or control board input."
                },
                {
                  image: "/comando-portao.png",
                  title: "Only works nearby",
                  text: "Usually related to weak battery, antenna position, receiver sensitivity or radio interference."
                },
                {
                  image: "/central-eletronica.png",
                  title: "Receiver or control board",
                  text: "If the remote sends signal but nothing happens, the receiver or control board may need checking."
                },
                {
                  image: "/diagnostico.png",
                  title: "Intermittent operation",
                  text: "A remote that works sometimes and fails other times may have worn buttons, poor contact or signal issues."
                },
                {
                  image: "/portao.png",
                  title: "Gate does not respond",
                  text: "Sometimes the problem is not the remote, but the gate automation, safety inputs or power supply."
                },
                {
                  image: "/motor-portao.png",
                  title: "Remote copied but not working",
                  text: "Some systems use rolling code or brand-specific programming and cannot be copied like a simple fixed-code remote."
                }
              ].map((item) => (
                <article key={item.title} className="problem-image-card">
                  <img src={item.image} alt={item.title} />
          
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="highlight-block">
            <h2>Send photos of the remote before booking a visit</h2>
          
            <p>
              Many remote control problems can be assessed faster if you send photos of the remote, the motor/control board area and a short description of what happens when you press the button.
            </p>
          
            <div className="steps-grid">
              {[
                {
                  title: "Send remote photos",
                  text: "Show the front and back of the remote, any visible brand or model, and the button layout."
                },
                {
                  title: "Show the automation system",
                  text: "If possible, send a photo of the gate motor, garage motor or receiver/control board area."
                },
                {
                  title: "We guide the next step",
                  text: "We can tell you whether it looks like programming, replacement, receiver diagnosis or a full automation check."
                }
              ].map((item) => (
                <article key={item.title} className="step-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          
            <div className="button-row centered">
              <a
                href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20a%20garage%20or%20gate%20remote%20control.%20I%20can%20send%20photos."
                target="_blank"
                className="primary-button"
              >
                Send photos by WhatsApp
              </a>
            </div>
          </section>

          <section id="service-area" className="section-block compact">
            <h2>Service area</h2>
          
            <p className="section-intro">
              Garage and gate remote control support in Lisbon and surrounding areas, within the usual TecCasa service radius.
            </p>
          
            <div className="area-card">
              <p>
                Send your location by WhatsApp and we will confirm whether it is inside our normal service area before scheduling a visit.{" "}
                <a href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20a%20garage%20or%20gate%20remote%20control.%20Can%20you%20confirm%20if%20you%20cover%20my%20area%3F" target="_blank">
                  Confirm service area
                </a>.
              </p>
            </div>
          </section>
          <section id="contact" className="final-cta">
            <h2>Need help with a garage or gate remote?</h2>
          
            <p>
              Send photos of the remote control, the gate or garage motor and a short description of the problem. We will help identify whether it is likely to be programming, replacement, receiver diagnosis or another automation issue.
            </p>
          
            <div className="button-row centered">
              <a
                href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20a%20garage%20or%20gate%20remote%20control%20in%20Lisbon."
                target="_blank"
                className="primary-button"
              >
                Send WhatsApp message
              </a>
          
              <a href="tel:+351922021980" className="secondary-button">
                Call now
              </a>
            </div>
          
            <p style={{
            fontSize:"14px",
            lineHeight:"1.6",
            color:"#6b7280",
            maxWidth:"680px",
            margin:"16px auto 0 auto",
            textAlign:"center"
            }}>
            For safety reasons, phone calls are only answered from Portuguese numbers (+351). 
            If you do not have a Portuguese phone number, please contact us by WhatsApp message, email or social media.
            </p>
          </section>

          <footer>
            <img src="/favicon.png" alt="TecCasa Soluções" />

            <h3>TecCasa Soluções</h3>

            <p>Gate automation - Repairs - Smart solutions</p>

            <div className="footer-links">
              <span>Phone: 922 021 980</span>
              <span>Email: geral@tec-casa.pt</span>
              <span>Lisbon and surrounding areas</span>
            </div>

            <div className="social-links">
              <a href="https://wa.me/351922021980" target="_blank" className="footer-whatsapp">
                WhatsApp
              </a>

              <a href="https://www.facebook.com/share/1CzrBzuXSY/" target="_blank" className="footer-facebook">
                Facebook
              </a>

              <a href="https://www.instagram.com/teccasasolucoes?igsh=MXM4dGl1czEyMmx2NA==" target="_blank" className="footer-instagram">
                Instagram
              </a>
            </div>

            <p className="copyright">Copyright 2026 TecCasa Soluções. All rights reserved.</p>
          </footer>
        </main>

        <a
          href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20a%20garage%20or%20gate%20remote%20control%20in%20Lisbon."
          target="_blank"
          className="floating-whatsapp"
        >
          WhatsApp
        </a>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }

        body {
          overflow-x: hidden;
          margin: 0;
        }

        .page {
          font-family: Arial, sans-serif;
          padding: 110px 40px 40px 40px;
          background: #f4f7fb;
          min-height: 100vh;
        }

        .top-nav {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          max-width: 1200px;
          width: min(1200px, calc(100% - 40px));
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(11,44,95,0.08);
          border-radius: 28px;
          padding: 14px 20px;
          box-shadow: 0 10px 30px rgba(11,44,95,0.10);
          box-sizing: border-box;
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          color: #08285c;
          font-size: 20px;
          text-decoration: none;
          white-space: nowrap;
        }

        .brand img {
          width: 30px;
          height: 30px;
        }

        .desktop-menu {
          display: none;
          gap: 18px;
          align-items: center;
        }

        .desktop-menu a {
          color: #08285c;
          text-decoration: none;
          font-weight: bold;
          font-size: 15px;
        }

        .whatsapp-link,
        .mobile-whatsapp,
        .footer-whatsapp {
          background: #25D366 !important;
          color: white !important;
        }

        .whatsapp-link {
          padding: 10px 16px;
          border-radius: 999px;
        }

        .menu-button {
          display: block;
          background: none;
          border: none;
          color: #08285c;
          font-size: 30px;
          font-weight: bold;
          cursor: pointer;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(11,44,95,0.08);
        }

        .mobile-menu a {
          color: #08285c;
          text-decoration: none;
          font-weight: bold;
          font-size: 17px;
          padding: 10px 0;
        }

        .main-card {
          width: min(1200px, calc(100% - 40px));
          margin: auto;
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          box-sizing: border-box;
        }

        .hero-reparacao {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
          gap: 50px;
          align-items: center;
          padding: 70px 0;
        }

        .eyebrow {
          display: inline-block;
          background: #eef3fa;
          color: #08285c;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 6px 16px rgba(11,44,95,0.08);
          margin-bottom: 20px;
        }

        h1 {
          font-size: clamp(40px,5vw,56px);
          line-height: 1.05;
          margin: 0 0 24px 0;
          color: #08285c;
          font-weight: 900;
        }

        h2 {
          font-size: 38px;
          color: #08285c;
          margin: 0 0 16px 0;
          text-align: center;
        }

        h3 {
          color: #08285c;
          font-size: 22px;
          margin: 0 0 12px 0;
        }

        .lead {
          font-size: 21px;
          line-height: 1.8;
          color: #444;
          max-width: 700px;
          margin: 0 0 18px 0;
        }

        .support,
        .section-intro,
        .highlight-block p,
        .final-cta p {
          font-size: 17px;
          line-height: 1.7;
          color: #555;
        }

        .support {
          max-width: 680px;
          margin: 0 0 34px 0;
        }

        .button-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .button-row.centered {
          justify-content: center;
        }

        .primary-button,
        .secondary-button {
          display: inline-block;
          color: white;
          padding: 17px 28px;
          border-radius: 16px;
          font-weight: bold;
          text-decoration: none;
          font-size: 17px;
        }

        .primary-button {
          background: #25D366;
          box-shadow: 0 10px 25px rgba(37,211,102,0.18);
        }

        .secondary-button {
          background: #08285c;
          box-shadow: 0 10px 25px rgba(8,40,92,0.18);
        }

        .hero-image-wrap {
          display: flex;
          justify-content: center;
        }

        .hero-image-wrap img {
          width: 100%;
          max-width: 600px;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(11,44,95,0.18);
          object-fit: cover;
        }

        .section-block {
          padding: 20px 0 70px;
        }

        .section-block.compact {
          padding-bottom: 40px;
        }

        .section-intro {
          max-width: 850px;
          margin: 0 auto 45px auto;
          text-align: center;
        }

        .problemas-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
        }

        .info-card,
        .step-card {
          background: #eef3fa;
          border-radius: 24px;
          padding: 28px 24px;
          box-shadow: 0 12px 28px rgba(11,44,95,0.08);
          border: 1px solid rgba(11,44,95,0.05);
        }

        .info-card p,
        .step-card p {
          color: #444;
          line-height: 1.7;
          margin: 0;
        }

        .problem-image-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
        }

        .problem-image-card {
          background: #e6edf7;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(11,44,95,0.08);
          border: 1px solid rgba(11,44,95,0.05);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .problem-image-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 35px rgba(11,44,95,.14);
        }

        .problem-image-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }

        .problem-image-card div {
          padding: 24px;
        }

        .problem-image-card p {
          color: #333;
          line-height: 1.6;
          margin: 0;
        }

        .highlight-block,
        .final-cta {
          background: linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%);
          border-radius: 32px;
          padding: 50px 36px;
          box-shadow: 0 18px 40px rgba(11,44,95,0.08);
          border: 1px solid rgba(11,44,95,0.06);
          margin-bottom: 70px;
          text-align: center;
        }

        .highlight-block p,
        .final-cta p {
          max-width: 850px;
          margin: 0 auto 34px auto;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
          margin-bottom: 38px;
          text-align: left;
        }

        .area-card {
          background: #f5f8fc;
          border: 1px solid rgba(11,44,95,0.08);
          border-radius: 22px;
          padding: 22px 24px;
          box-shadow: 0 10px 26px rgba(11,44,95,0.06);
          text-align: center;
        }

        .area-card p {
          margin: 0;
          font-size: 17px;
          line-height: 1.7;
          color: #555;
        }

        .area-card a {
          color: #08285c;
          font-weight: bold;
          text-decoration: underline;
        }

        .final-cta {
          margin: 0;
        }

        footer {
          margin-top: 80px;
          padding: 45px 30px;
          text-align: center;
          color: #555;
          border-radius: 25px;
          background: linear-gradient(180deg,#ffffff 0%,#ffffff 15%,#f5f7fb 35%,#dfe8f5 65%,#cfdcf0 100%);
          box-shadow: 0 -10px 35px rgba(11,44,95,0.06);
          border: 1px solid rgba(11,44,95,0.05);
        }

        footer img {
          width: 70px;
          margin-bottom: 18px;
        }

        footer h3 {
          margin: 0 0 10px 0;
          font-size: 24px;
        }

        .footer-links,
        .social-links {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .social-links a {
          padding: 10px 18px;
          border-radius: 999px;
          color: white;
          text-decoration: none;
          font-weight: bold;
        }

        .footer-facebook {
          background: #1877F2;
        }

        .footer-instagram {
          background: linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5);
        }

        .copyright {
          margin-top: 20px;
          font-size: 14px;
          color: #777;
        }

        .floating-whatsapp {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background: #25D366;
          color: white;
          padding: 15px 18px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          z-index: 999;
          animation: pulse 2.5s infinite;
        }

        .info-card,
        .step-card,
        .primary-button,
        .secondary-button {
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .info-card:hover,
        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 35px rgba(11,44,95,.14);
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-2px);
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        .mobile-whatsapp {
          padding: 14px !important;
          border-radius: 14px;
          text-align: center;
          margin-top: 10px;
          box-shadow: 0 10px 25px rgba(37,211,102,.22);
        }

        @media (max-width: 768px) {
          .page {
            padding: 95px 10px 10px 10px !important;
          }

          .top-nav {
            top: 10px !important;
            left: 10px !important;
            right: 10px !important;
            transform: none !important;
            width: auto !important;
            max-width: none !important;
            margin: 0 !important;
            border-radius: 18px !important;
          }

          .brand {
            font-size: 18px;
          }

          .main-card {
            width: 100% !important;
            max-width: 100% !important;
            padding: 18px !important;
            border-radius: 16px !important;
            overflow: hidden !important;
          }

          .hero-reparacao {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            padding: 28px 0 10px 0 !important;
            text-align: center !important;
            overflow: hidden !important;
          }

          .hero-reparacao > div {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          .hero-reparacao h1 {
            font-size: 31px !important;
            line-height: 1.12 !important;
            text-align: center !important;
            margin: 0 auto 18px auto !important;
            max-width: 330px !important;
          }

          .hero-reparacao p {
            font-size: 17px !important;
            line-height: 1.55 !important;
            text-align: center !important;
            margin: 0 auto 22px auto !important;
            max-width: 330px !important;
          }

          .button-row {
            justify-content: center;
          }

          .hero-reparacao a,
          .button-row a {
            display: block !important;
            width: 100% !important;
            max-width: 300px !important;
            margin: 0 auto !important;
            text-align: center !important;
            box-sizing: border-box !important;
            padding: 15px 18px !important;
            font-size: 16px !important;
          }

          .hero-image-wrap img {
            width: 100% !important;
            max-width: 330px !important;
            border-radius: 22px !important;
            margin: 0 auto !important;
            display: block !important;
          }

          section {
            padding: 24px 18px !important;
            box-sizing: border-box !important;
          }

          h1 {
            font-size: 28px !important;
          }

          h2 {
            font-size: 26px !important;
          }

          p {
            font-size: 16px !important;
          }

          .problemas-grid,
          .steps-grid,
          .problem-image-grid {
            grid-template-columns: 1fr !important;
          }

          .highlight-block,
          .final-cta {
            border-radius: 22px !important;
            padding: 32px 18px !important;
            margin-bottom: 32px !important;
          }

          .floating-whatsapp {
            right: 14px;
            bottom: 14px;
            padding: 13px 16px;
          }

          footer {
            padding: 35px 18px !important;
          }
        }
      `}</style>
    </>
  );
}
