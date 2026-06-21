import { useEffect, useState } from "react";
import Head from "next/head";

export default function AutomaticGateInstallationLisbon() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20automatic%20gate%20installation%20in%20Lisbon.";

  const menuItems = [
    { label: "Home", href: "/en", active: true },
    { label: "Gate repair", href: "/en/electric-gate-repair-lisbon", active: true },
    { label: "Gate installation", href: "/en/automatic-gate-installation-lisbon", active: true },
    { label: "Garage remotes", href: "/en/garage-remote-controls-lisbon", active: true },
    { label: "Security cameras", href: "/en/security-cameras-lisbon", active: true },
  ];

  const gateTypes = [
    {
      title: "Sliding gates",
      text: "Motor installation for sliding gates, including checks on rail condition, rack alignment, gate weight and travel distance.",
    },
    {
      title: "Swing gates",
      text: "Automation for one-leaf or two-leaf gates, with motors selected according to space, opening angle and daily effort.",
    },
    {
      title: "Garage gates",
      text: "Selected garage door motor installations, with checks on rails, manual release, balance and safe movement.",
    },
    {
      title: "Motor replacement",
      text: "Replacement of old or unreliable gate motors with a more suitable solution for the gate and its real daily use.",
    },
  ];

  const installationSteps = [
    {
      icon: "🔎",
      title: "Gate assessment",
      text: "We check the type of gate, manual movement, weight, space, existing structure and possible installation limitations.",
    },
    {
      icon: "⚡",
      title: "Electrical conditions",
      text: "We verify the available power supply, cable routes and basic requirements for a safe and reliable installation.",
    },
    {
      icon: "🛡️",
      title: "Safety devices",
      text: "Photocells, control boards, limits and safety settings are considered as part of the installation, not as an afterthought.",
    },
    {
      icon: "💬",
      title: "Clear recommendation",
      text: "Before moving forward, we explain the most suitable approach and avoid recommending equipment that does not fit the gate.",
    },
  ];

  const brandLogos = [
    { name: "Nice", logo: "/nice-logo.png", style: { maxHeight: "70px", maxWidth: "95%", transform: "scale(1.45)" } },
    { name: "BFT", logo: "/bft-logo.png", style: { maxHeight: "62px", maxWidth: "90%", transform: "scale(1.35)" } },
    { name: "Motorline", logo: "/motorline-logo.png", style: { maxHeight: "58px", maxWidth: "98%", transform: "scale(1.25)" } },
    { name: "FAAC", logo: "/faac-logo.png", style: { maxHeight: "54px", maxWidth: "88%" } },
    { name: "CAME", logo: "/came-logo.png", style: { maxHeight: "52px", maxWidth: "88%" } },
    { name: "Hörmann", logo: "/hormann-logo.png", style: { maxHeight: "58px", maxWidth: "95%", transform: "scale(1.45)" } },
    { name: "Roger Technology", logo: "/roger-technology-logo.png", style: { maxHeight: "58px", maxWidth: "92%" } },
    { name: "DEA", logo: "/dea-logo.png", style: { maxHeight: "56px", maxWidth: "82%" } },
    { name: "Somfy", logo: "/somfy-logo.png", style: { maxHeight: "50px", maxWidth: "88%" } },
    { name: "Beninca", logo: "/beninca-logo.png", style: { maxHeight: "54px", maxWidth: "92%" } },
    { name: "V2", logo: "/v2-logo.png", style: { maxHeight: "70px", maxWidth: "95%", transform: "scale(2.05)" } },
    { name: "Ditec", logo: "/ditec-logo.png", style: { maxHeight: "60px", maxWidth: "82%", transform: "scale(1.32)" } },
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
        <title>Automatic Gate Installation in Lisbon | TecCasa Soluções</title>

        <meta
          name="description"
          content="Automatic gate installation and motor replacement in Lisbon. Sliding gates, swing gates and selected garage gates with safe setup and clear technical assessment."
        />

        <meta
          name="keywords"
          content="automatic gate installation Lisbon, electric gate installation Lisbon, gate motor installation, sliding gate motor, swing gate motor, garage door motor Lisbon, TecCasa Soluções"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Automatic Gate Installation in Lisbon | TecCasa Soluções" />
        <meta
          property="og:description"
          content="Installation and replacement of automatic gate motors in Lisbon and surrounding areas, with technical checks and safe setup."
        />
        <meta property="og:image" content="https://www.tec-casa.pt/preview.jpg" />
        <meta property="og:url" content="https://tec-casa.pt/en/automatic-gate-installation-lisbon" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://tec-casa.pt/en/automatic-gate-installation-lisbon" />
        <link rel="alternate" hrefLang="pt-PT" href="https://tec-casa.pt/instalacao-automatismos-portoes" />
        <link rel="alternate" hrefLang="en" href="https://tec-casa.pt/en/automatic-gate-installation-lisbon" />
        <link rel="alternate" hrefLang="x-default" href="https://tec-casa.pt/instalacao-automatismos-portoes" />
      </Head>

      <div className="page">
        <nav
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "1000",
            maxWidth: "1200px",
            width: "min(1200px, calc(100% - 40px))",
            margin: "0 auto 25px auto",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(11,44,95,0.08)",
            borderRadius: "28px",
            padding: "14px 20px",
            boxShadow: "0 10px 30px rgba(11,44,95,0.10)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => {
                window.location.href = "/en";
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "bold",
                color: "#08285c",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              <img src="/favicon.png" alt="TecCasa Soluções" style={{ width: "30px" }} />
              TecCasa Soluções
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              style={{
                background: "none",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
                color: "#08285c",
              }}
              className="menu-button"
              aria-label="Open menu"
            >
              ☰
            </button>

            <div
              className="desktop-menu"
              style={{
                display: "none",
                gap: "18px",
                alignItems: "center",
              }}
            >
              {menuItems
                .filter((item) => item.active)
                .map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    style={{
                      color: "#08285c",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {item.label}
                  </a>
                ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#25D366",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {menuOpen && (
            <div
              className="mobile-menu"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginTop: "22px",
                paddingTop: "18px",
                borderTop: "1px solid rgba(11,44,95,0.08)",
              }}
            >
              {menuItems
                .filter((item) => item.active)
                .map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: "#08285c",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                      padding: "10px 0",
                    }}
                  >
                    {item.label}
                  </a>
                ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "#25D366",
                  color: "white",
                  padding: "14px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "10px",
                  boxShadow: "0 10px 25px rgba(37,211,102,.22)",
                }}
              >
                WhatsApp
              </a>
            </div>
          )}
        </nav>

        <div className="main-card">
          <section
            className="hero-installation"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "50px",
              alignItems: "center",
              padding: "70px 0",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "#eef3fa",
                  color: "#08285c",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: "700",
                  boxShadow: "0 6px 16px rgba(11,44,95,0.08)",
                  marginBottom: "20px",
                }}
              >
                Gate motor installation in Lisbon
              </div>

              <h1
                style={{
                  fontSize: "clamp(40px,5vw,56px)",
                  lineHeight: "1.05",
                  marginBottom: "24px",
                  color: "#08285c",
                  fontWeight: "900",
                }}
              >
                Automatic gate installation in Lisbon
              </h1>

              <p
                style={{
                  fontSize: "21px",
                  lineHeight: "1.8",
                  color: "#444",
                  maxWidth: "700px",
                  marginBottom: "18px",
                }}
              >
                Installation and replacement of automatic gate motors for sliding gates, swing gates and selected garage gates.
                We check the gate, the site conditions and the safety requirements before recommending a solution.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#666",
                  maxWidth: "680px",
                  marginBottom: "22px",
                }}
              >
                For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese
                phone number, please contact us by WhatsApp message, email or social media.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#25D366",
                    color: "white",
                    padding: "17px 28px",
                    borderRadius: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "17px",
                    boxShadow: "0 10px 25px rgba(37,211,102,0.18)",
                  }}
                >
                  Request a quote
                </a>

                <a
                  href="#gate-types"
                  style={{
                    display: "inline-block",
                    background: "#08285c",
                    color: "white",
                    padding: "17px 28px",
                    borderRadius: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "17px",
                    boxShadow: "0 10px 25px rgba(8,40,92,0.18)",
                  }}
                >
                  See gate types
                </a>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="/instalacao-automatismos-portoes-hero.png"
                alt="Automatic gate installation"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "28px",
                  boxShadow: "0 25px 60px rgba(11,44,95,0.18)",
                  objectFit: "cover",
                }}
              />
            </div>
          </section>

          <section id="gate-types" style={{ padding: "20px 0 70px" }}>
            <h2
              style={{
                fontSize: "38px",
                color: "#08285c",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              What type of gate do you want to automate?
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.7",
                color: "#555",
                maxWidth: "820px",
                margin: "0 auto 42px auto",
                textAlign: "center",
              }}
            >
              We install gate automation for different residential gate types, always checking movement, electrical supply,
              safety and site conditions before installation.
            </p>

            <div
              className="gate-types-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                gap: "22px",
              }}
            >
              {gateTypes.map((item, index) => (
                <div
                  key={index}
                  className="info-card"
                  style={{
                    background: "#eef3fa",
                    borderRadius: "24px",
                    padding: "30px 26px",
                    boxShadow: "0 12px 28px rgba(11,44,95,0.08)",
                    border: "1px solid rgba(11,44,95,0.05)",
                  }}
                >
                  <h3
                    style={{
                      color: "#08285c",
                      fontSize: "23px",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#444",
                      lineHeight: "1.7",
                      margin: "0",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: "10px", padding: "10px 0 70px" }}>
            <h2
              style={{
                color: "#08285c",
                fontSize: "38px",
                marginBottom: "18px",
                textAlign: "center",
              }}
            >
              How we approach an installation
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "850px",
                margin: "0 auto 44px auto",
                color: "#555",
                fontSize: "19px",
                lineHeight: "1.7",
              }}
            >
              A good installation is not just about fitting a motor. The gate must move correctly, the power supply must be
              suitable and the safety devices must match the real conditions of use.
            </p>

            <div
              className="installation-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "24px",
              }}
            >
              {installationSteps.map((item, index) => (
                <div
                  key={index}
                  className="info-card"
                  style={{
                    background: "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)",
                    borderRadius: "24px",
                    padding: "34px 28px",
                    boxShadow: "0 12px 30px rgba(11,44,95,0.08)",
                    border: "1px solid rgba(11,44,95,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "42px",
                      marginBottom: "20px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      color: "#08285c",
                      fontSize: "24px",
                      marginBottom: "14px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.7",
                      margin: "0",
                      fontSize: "17px",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="assistencia-multimarca"
            style={{
              padding: "10px 0 70px",
            }}
          >
            <div
              style={{
                background: "#f5f8fc",
                borderRadius: "32px",
                padding: "48px 36px",
                boxShadow: "0 18px 40px rgba(11,44,95,0.07)",
                border: "1px solid rgba(11,44,95,0.06)",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "38px",
                  color: "#08285c",
                  marginBottom: "18px",
                }}
              >
                Common gate automation brands
              </h2>

              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.75",
                  color: "#555",
                  maxWidth: "850px",
                  margin: "0 auto 38px auto",
                }}
              >
                We work with common gate automation brands used in Portugal and select solutions according to the type of
                gate, daily use and installation conditions. TecCasa Soluções is an independent technical service.
              </p>

              <div
                className="marcas-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6,1fr)",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                {brandLogos.map((brand, index) => (
                  <div
                    key={index}
                    className="cartao-marca"
                    aria-label={brand.name}
                    title={brand.name}
                    style={{
                      background: "linear-gradient(180deg,#ffffff,#e6edf7)",
                      border: "1px solid rgba(11,44,95,0.08)",
                      borderRadius: "18px",
                      padding: "18px 12px",
                      textAlign: "center",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "112px",
                      transition: "transform .25s ease, box-shadow .25s ease, background .25s ease",
                      overflow: "visible",
                    }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        display: "block",
                        ...brand.style,
                      }}
                    />
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  color: "#666",
                  maxWidth: "780px",
                  margin: "0 auto",
                }}
              >
                If you want to automate a manual gate or replace an old motor, we can help you understand which solution is
                technically suitable before any installation decision is made.
              </p>
            </div>
          </section>

          <section style={{ padding: "10px 0 70px" }}>
            <div
              style={{
                background: "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)",
                borderRadius: "32px",
                padding: "50px 36px",
                boxShadow: "0 18px 40px rgba(11,44,95,0.08)",
                border: "1px solid rgba(11,44,95,0.06)",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "38px",
                  color: "#08285c",
                  marginBottom: "18px",
                }}
              >
                The right motor for the right gate
              </h2>

              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.75",
                  color: "#555",
                  maxWidth: "830px",
                  margin: "0 auto 34px auto",
                }}
              >
                Automatic gates need more than a motor with enough power. The structure, movement, use frequency and safety
                devices must all work together. That is why we focus on a complete technical assessment before installation.
              </p>

              <div
                className="selection-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
                  gap: "18px",
                  textAlign: "left",
                }}
              >
                {[
                  ["Gate condition", "The gate should move smoothly by hand before automation is installed."],
                  ["Daily use", "A home gate, condominium gate and holiday-home gate can require different motor choices."],
                  ["Safety setup", "Photocells, limits and control settings must be adapted to the real site."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    style={{
                      background: "#eef3fa",
                      borderRadius: "20px",
                      padding: "24px",
                      boxShadow: "0 10px 26px rgba(11,44,95,0.06)",
                    }}
                  >
                    <h3
                      style={{
                        marginTop: "0",
                        marginBottom: "10px",
                        color: "#08285c",
                        fontSize: "22px",
                      }}
                    >
                      {title}
                    </h3>

                    <p
                      style={{
                        margin: "0",
                        color: "#555",
                        lineHeight: "1.65",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "30px 0 20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "linear-gradient(180deg,#f5f8fc 0%,#e8eef8 100%)",
                borderRadius: "32px",
                padding: "55px 35px",
                boxShadow: "0 18px 40px rgba(11,44,95,0.08)",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  color: "#08285c",
                  marginBottom: "18px",
                }}
              >
                Want to automate your gate?
              </h2>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  color: "#555",
                  maxWidth: "820px",
                  margin: "0 auto 24px auto",
                }}
              >
                If you want to install a motor on a manual gate, replace an old automation system or understand which solution
                makes sense for your property in Lisbon, contact us and send photos of the gate if possible.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#666",
                  maxWidth: "760px",
                  margin: "0 auto 34px auto",
                }}
              >
                For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a Portuguese
                phone number, please contact us by WhatsApp message, email or social media.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#25D366",
                    color: "white",
                    padding: "17px 28px",
                    borderRadius: "16px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "17px",
                    boxShadow: "0 10px 25px rgba(37,211,102,.20)",
                  }}
                >
                  Request a quote
                </a>

                <a
                  href="tel:+351922021980"
                  style={{
                    background: "#08285c",
                    color: "white",
                    padding: "17px 28px",
                    borderRadius: "16px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "17px",
                    boxShadow: "0 10px 25px rgba(8,40,92,.18)",
                  }}
                >
                  Call +351 922 021 980
                </a>
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "18px 0 10px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "#f5f8fc",
                border: "1px solid rgba(11,44,95,0.08)",
                borderRadius: "22px",
                padding: "22px 24px",
                boxShadow: "0 10px 26px rgba(11,44,95,0.06)",
              }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "17px",
                  lineHeight: "1.7",
                  color: "#555",
                }}
              >
                Before requesting a visit, please check whether your property is within our service area.{" "}
                <a
                  href="/en#service-area"
                  style={{
                    color: "#08285c",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  View TecCasa Soluções service area
                </a>
                .
              </p>
            </div>
          </section>

          <footer
            style={{
              marginTop: "80px",
              padding: "45px 30px",
              textAlign: "center",
              color: "#555",
              borderRadius: "25px",
              background: "linear-gradient(180deg,#ffffff 0%,#ffffff 15%,#f5f7fb 35%,#dfe8f5 65%,#cfdcf0 100%)",
              boxShadow: "0 -10px 35px rgba(11,44,95,0.06)",
              border: "1px solid rgba(11,44,95,0.05)",
            }}
          >
            <img
              src="/favicon.png"
              alt="TecCasa Soluções"
              style={{
                width: "70px",
                marginBottom: "18px",
              }}
            />

            <h3
              style={{
                margin: "0 0 10px 0",
                color: "#08285c",
                fontSize: "24px",
              }}
            >
              TecCasa Soluções
            </h3>

            <p
              style={{
                margin: "0 0 25px 0",
                fontSize: "17px",
              }}
            >
              Automatic gates • Repairs • Smart solutions
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "25px",
                flexWrap: "wrap",
                marginBottom: "25px",
              }}
            >
              <span>Phone: 922 021 980</span>
              <span>Email: geral@tec-casa.pt</span>
              <span>Lisbon and surrounding areas</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                flexWrap: "wrap",
                marginBottom: "25px",
              }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "#25D366",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                WhatsApp
              </a>

              <a
                href="https://www.facebook.com/share/1CzrBzuXSY/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "#1877F2",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/teccasasolucoes?igsh=MXM4dGl1czEyMmx2NA=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Instagram
              </a>
            </div>

            <p
              style={{
                marginTop: "20px",
                fontSize: "14px",
                color: "#777",
              }}
            >
              © 2026 TecCasa Soluções. All rights reserved.
            </p>
          </footer>

          <style jsx global>{`
            html {
              scroll-behavior: smooth;
              overflow-x: hidden;
              width: 100%;
              max-width: 100%;
              margin: 0;
              padding: 0;
            }

            body {
              overflow-x: hidden;
              width: 100%;
              max-width: 100%;
              margin: 0;
              padding: 0;
            }

            #__next {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .page {
              font-family: Arial, sans-serif;
              padding: 110px 40px 40px 40px;
              background: #f4f7fb;
              min-height: 100vh;
            }

            .main-card {
              width: min(1200px, calc(100% - 40px));
              margin: auto;
              background: white;
              padding: 50px;
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
              box-sizing: border-box;
            }

            .menu-button {
              display: block;
            }

            .mobile-menu {
              display: none;
            }

            .info-card,
            .cartao-marca {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .info-card:hover,
            .cartao-marca:hover {
              transform: translateY(-7px);
              box-shadow: 0 18px 35px rgba(11, 44, 95, 0.13) !important;
            }

            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(25px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            h1,
            h2,
            footer,
            section {
              animation: fadeUp 0.8s ease;
            }

            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.06);
              }
              100% {
                transform: scale(1);
              }
            }


            @media (max-width: 768px) {
              html,
              body {
                width: 100% !important;
                max-width: 100% !important;
                overflow-x: hidden !important;
              }

              .page {
                width: 100% !important;
                max-width: 100% !important;
                padding: 95px 6px 10px 6px !important;
                box-sizing: border-box !important;
                overflow-x: hidden !important;
              }

              .main-card {
                width: 100% !important;
                max-width: 100% !important;
                padding: 12px !important;
                margin: 0 auto !important;
                border-radius: 16px !important;
                box-sizing: border-box !important;
                overflow-x: hidden !important;
              }

              nav {
                position: fixed !important;
                top: 10px !important;
                left: 8px !important;
                right: 8px !important;
                transform: none !important;
                width: calc(100% - 16px) !important;
                max-width: calc(100% - 16px) !important;
                box-sizing: border-box !important;
                margin: 0 !important;
                border-radius: 18px !important;
                z-index: 1000 !important;
                overflow: hidden !important;
              }

              nav img {
                width: 30px !important;
                max-width: 30px !important;
              }

              .desktop-menu {
                display: none !important;
              }

              .menu-button {
                display: block !important;
              }

              .mobile-menu {
                display: flex !important;
              }

              section {
                width: 100% !important;
                max-width: 100% !important;
                padding: 28px 0 !important;
                box-sizing: border-box !important;
                overflow: visible !important;
              }

              section > div {
                max-width: 100% !important;
                box-sizing: border-box !important;
              }

              .hero-installation {
                display: flex !important;
                flex-direction: column !important;
                gap: 26px !important;
                padding: 30px 0 34px 0 !important;
                text-align: center !important;
                overflow: visible !important;
              }

              .hero-installation > div {
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }

              .hero-installation h1 {
                font-size: 30px !important;
                line-height: 1.14 !important;
                text-align: center !important;
                margin: 0 auto 18px auto !important;
                max-width: 100% !important;
              }

              .hero-installation p {
                font-size: 16px !important;
                line-height: 1.6 !important;
                text-align: center !important;
                margin: 0 auto 22px auto !important;
                max-width: 100% !important;
              }

              .hero-installation a {
                display: block !important;
                width: 100% !important;
                max-width: none !important;
                margin: 0 auto !important;
                text-align: center !important;
                box-sizing: border-box !important;
                padding: 15px 18px !important;
                font-size: 16px !important;
              }

              .hero-installation img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                border-radius: 22px !important;
                margin: 0 auto !important;
                display: block !important;
              }

              .gate-types-grid,
              .installation-grid,
              .selection-grid {
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                width: 100% !important;
                max-width: 100% !important;
                justify-items: stretch !important;
                align-items: stretch !important;
                box-sizing: border-box !important;
              }

              .gate-types-grid > *,
              .installation-grid > *,
              .selection-grid > * {
                width: 100% !important;
                max-width: none !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                box-sizing: border-box !important;
              }

              h1 {
                font-size: 30px !important;
                line-height: 1.16 !important;
              }

              h2 {
                font-size: 27px !important;
                line-height: 1.2 !important;
                text-align: center !important;
              }

              h3 {
                font-size: 22px !important;
                line-height: 1.25 !important;
              }

              p {
                font-size: 16px !important;
                line-height: 1.6 !important;
              }

              img {
                max-width: 100% !important;
                height: auto !important;
              }

              footer {
                padding: 35px 18px !important;
              }

              a[href*="wa.me"][style*="fixed"] {
                right: 12px !important;
                bottom: 12px !important;
                padding: 12px 15px !important;
                font-size: 15px !important;
                max-width: calc(100vw - 24px) !important;
                box-sizing: border-box !important;
              }

              .assistencia-multimarca {
                padding: 40px 6px 55px 6px !important;
                scroll-margin-top: 130px !important;
              }

              .assistencia-multimarca .marcas-grid {
                display: grid !important;
                grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                gap: 14px !important;
                width: 100% !important;
                max-width: 100% !important;
                margin-top: 26px !important;
                margin-bottom: 20px !important;
                box-sizing: border-box !important;
              }

              .assistencia-multimarca .cartao-marca {
                height: 106px !important;
                min-height: 106px !important;
                padding: 10px 8px !important;
                border-radius: 16px !important;
                overflow: hidden !important;
                box-sizing: border-box !important;
              }

              .assistencia-multimarca .cartao-marca img {
                transform: none !important;
                width: auto !important;
                height: auto !important;
                object-fit: contain !important;
                display: block !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(1) img {
                max-height: 72px !important;
                max-width: 82% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(2) img {
                max-height: 64px !important;
                max-width: 86% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(3) img {
                max-height: 52px !important;
                max-width: 92% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(4) img,
              .assistencia-multimarca .cartao-marca:nth-child(5) img {
                max-height: 56px !important;
                max-width: 90% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(6) img {
                max-height: 48px !important;
                max-width: 92% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(7) img {
                max-height: 56px !important;
                max-width: 92% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(8) img {
                max-height: 68px !important;
                max-width: 82% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(9) img {
                max-height: 52px !important;
                max-width: 88% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(10) img {
                max-height: 56px !important;
                max-width: 92% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(11) img {
                max-height: 72px !important;
                max-width: 80% !important;
              }

              .assistencia-multimarca .cartao-marca:nth-child(12) img {
                max-height: 66px !important;
                max-width: 88% !important;
              }

            }

            @media (hover: none) and (pointer: coarse) {
              * {
                animation: none !important;
              }

              a[href*="wa.me"][style*="fixed"] {
                animation: none !important;
                transform: none !important;
              }
            }
          `}</style>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              bottom: "25px",
              right: "25px",
              background: "#25D366",
              color: "white",
              padding: "15px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              zIndex: "999",
              animation: "pulse 2.5s infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
