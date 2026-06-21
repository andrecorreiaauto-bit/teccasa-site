import { useEffect, useState } from "react";
import Head from "next/head";

export default function GateRemoteControlNotWorking() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/351922021980?text=Hello%2C%20my%20gate%20or%20garage%20remote%20control%20is%20not%20working.";

  const menuItems = [
    { label: "Home", href: "/en", active: true },
    { label: "Gate repair", href: "/en/electric-gate-repair-lisbon", active: true },
    { label: "Gate installation", href: "/en/automatic-gate-installation-lisbon", active: true },
    { label: "Garage remotes", href: "/en/garage-remote-controls-lisbon", active: true },
    { label: "Security cameras", href: "/en/security-cameras-lisbon", active: true },
  ];

  const commonProblems = [
    {
      image: "/pilha-comando.png",
      title: "The remote stopped responding",
      text: "This can be caused by a weak battery, internal wear, damaged buttons or lost programming.",
    },
    {
      image: "/recetor-rf.png",
      title: "The RF receiver is not responding",
      text: "Sometimes the problem is not the remote. The gate receiver or its power supply may be the real cause.",
    },
    {
      image: "/comando-intermitente.png",
      title: "It only works very close to the gate",
      text: "Weak range is often related to the battery, antenna position, interference or receiver sensitivity.",
    },
    {
      image: "/central-programacao.png",
      title: "The remote lost programming",
      text: "Electrical faults, programming changes or control board work can remove stored remotes from memory.",
    },
    {
      image: "/garagem-nao-abre.png",
      title: "The garage does not react",
      text: "The issue can be the remote, but also the control board, safety inputs, photocells or power supply.",
    },
    {
      image: "/comando-universal.png",
      title: "A new remote will not pair",
      text: "Not every remote is directly compatible. Frequency, coding and receiver type must match the system.",
    },
  ];

  const diagnosisSteps = [
    {
      icon: "📸",
      title: "Send a clear photo",
      text: "A photo of the remote, the motor brand or the receiver/control board helps check compatibility before a visit.",
    },
    {
      icon: "🔋",
      title: "Check simple causes",
      text: "Battery, damaged buttons, corrosion, humidity and casing wear are common causes of remote failure.",
    },
    {
      icon: "📡",
      title: "Check the receiver",
      text: "If several remotes fail at the same time, the receiver, antenna, control board or power supply may be involved.",
    },
    {
      icon: "🧭",
      title: "Choose the right solution",
      text: "The next step may be programming, a compatible remote, a universal receiver or diagnosis of the gate automation.",
    },
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
        <title>Gate Remote Control Not Working? | TecCasa Soluções</title>

        <meta
          name="description"
          content="Gate or garage remote control not working in Lisbon? Help with batteries, programming, RF receivers, compatible remotes and automatic gate diagnosis."
        />

        <meta
          name="keywords"
          content="gate remote control not working, garage remote not working Lisbon, gate remote programming Lisbon, RF receiver fault, remote control replacement Lisbon"
        />

        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Gate Remote Control Not Working? | TecCasa Soluções" />
        <meta
          property="og:description"
          content="Diagnosis and practical help for garage and automatic gate remote controls that stopped working."
        />
        <meta property="og:image" content="https://www.tec-casa.pt/preview.jpg" />
        <meta property="og:url" content="https://tec-casa.pt/en/gate-remote-control-not-working" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://tec-casa.pt/en/gate-remote-control-not-working" />
        <link rel="alternate" hrefLang="pt-PT" href="https://tec-casa.pt/comando-garagem-nao-funciona" />
        <link rel="alternate" hrefLang="en" href="https://tec-casa.pt/en/gate-remote-control-not-working" />
        <link rel="alternate" hrefLang="x-default" href="https://tec-casa.pt/comando-garagem-nao-funciona" />
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
            className="hero-remote-fault"
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
                Remote control fault diagnosis
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
                Gate remote control not working?
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
                If your garage or automatic gate remote stopped working, the cause may be the remote, battery, receiver,
                programming, antenna or the gate automation system itself.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.75",
                  color: "#555",
                  maxWidth: "700px",
                  marginBottom: "18px",
                }}
              >
                This page is useful if you manage a property in Portugal, need access for guests or family, or simply need
                to understand whether a new remote can be programmed.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#666",
                  maxWidth: "700px",
                  marginBottom: "30px",
                }}
              >
                For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a
                Portuguese phone number, please contact us by WhatsApp message, email or social media.
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
                  Send remote photo
                </a>

                <a
                  href="#common-problems"
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
                  See common causes
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
                src="/comando-garagem-falha.png"
                alt="Garage remote control not working"
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

          <section style={{ marginTop: "70px" }}>
            <h2
              style={{
                color: "#08285c",
                fontSize: "42px",
                marginBottom: "18px",
                textAlign: "center",
              }}
            >
              What we check before replacing a remote
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "850px",
                margin: "0 auto 50px auto",
                color: "#555",
                fontSize: "20px",
                lineHeight: "1.7",
              }}
            >
              A remote control fault is not always solved by buying another remote. The system must be checked for frequency,
              coding, receiver condition and possible gate automation faults.
            </p>

            <div
              className="diagnosis-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "24px",
              }}
            >
              {diagnosisSteps.map((item, index) => (
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
                      fontSize: "44px",
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

          <section id="common-problems" style={{ padding: "70px 0 70px" }}>
            <h2
              style={{
                fontSize: "38px",
                color: "#08285c",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              Common reasons a gate remote stops working
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.7",
                color: "#555",
                maxWidth: "780px",
                margin: "0 auto 45px auto",
                textAlign: "center",
              }}
            >
              These are the most common situations. The visible problem may be the remote, but the origin can also be in the
              receiver, control board or safety system.
            </p>

            <div
              className="problems-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "22px",
              }}
            >
              {commonProblems.map((item, index) => (
                <div
                  key={index}
                  className="problem-card"
                  style={{
                    background: "#eef3fa",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 12px 30px rgba(11,44,95,0.08)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "190px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{
                        color: "#08285c",
                        fontSize: "22px",
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
                </div>
              ))}
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
                Compatible with many common gate systems
              </h2>

              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.75",
                  color: "#555",
                  maxWidth: "850px",
                  margin: "0 auto 34px auto",
                }}
              >
                We can help with remote control diagnosis and programming for several gate automation brands commonly used
                in Portugal. TecCasa Soluções is an independent technical service.
              </p>

              <div
                className="brands-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                  gap: "16px",
                  marginTop: "30px",
                }}
              >
                {[
                  "Motorline",
                  "BFT",
                  "Nice",
                  "CAME",
                  "FAAC",
                  "Ditec",
                  "Beninca",
                  "Somfy",
                  "Roger Technology",
                  "Hörmann",
                  "V2",
                  "Other brands",
                ].map((brand, index) => (
                  <div
                    key={index}
                    className="brand-card"
                    style={{
                      background: "#eef3fa",
                      borderRadius: "18px",
                      padding: "18px 14px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#08285c",
                      boxShadow: "0 10px 24px rgba(11,44,95,0.07)",
                      border: "1px solid rgba(11,44,95,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "58px",
                    }}
                  >
                    {brand}
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
                Need help with a remote that stopped working?
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
                Send a WhatsApp message with a photo of the remote and, if possible, the gate motor or control board. This
                helps us understand whether programming, replacement or receiver diagnosis is needed.
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
                For safety reasons, phone calls are only answered from Portuguese numbers (+351). If you do not have a
                Portuguese phone number, please contact us by WhatsApp message, email or social media.
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
                  Send WhatsApp message
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
            .problem-card,
            .brand-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .info-card:hover,
            .problem-card:hover,
            .brand-card:hover {
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

              .hero-remote-fault {
                display: flex !important;
                flex-direction: column !important;
                gap: 26px !important;
                padding: 30px 0 34px 0 !important;
                text-align: center !important;
                overflow: visible !important;
              }

              .hero-remote-fault > div {
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }

              .hero-remote-fault h1 {
                font-size: 30px !important;
                line-height: 1.14 !important;
                text-align: center !important;
                margin: 0 auto 18px auto !important;
                max-width: 100% !important;
              }

              .hero-remote-fault p {
                font-size: 16px !important;
                line-height: 1.6 !important;
                text-align: center !important;
                margin: 0 auto 22px auto !important;
                max-width: 100% !important;
              }

              .hero-remote-fault a {
                display: block !important;
                width: 100% !important;
                max-width: none !important;
                margin: 0 auto !important;
                text-align: center !important;
                box-sizing: border-box !important;
                padding: 15px 18px !important;
                font-size: 16px !important;
              }

              .hero-remote-fault img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                border-radius: 22px !important;
                margin: 0 auto !important;
                display: block !important;
              }

              .diagnosis-grid,
              .problems-grid,
              .brands-grid {
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                width: 100% !important;
                max-width: 100% !important;
                justify-items: stretch !important;
                align-items: stretch !important;
                box-sizing: border-box !important;
              }

              .diagnosis-grid > *,
              .problems-grid > *,
              .brands-grid > * {
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
