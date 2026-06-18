import { useEffect, useState } from "react";
import Head from "next/head";

export default function ElectricGateRepairLisbon() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20an%20automatic%20gate%20repair%20in%20Lisbon.";

  const menuItems = [
    { label: "Home", href: "/en", active: true },
    { label: "Gate repair", href: "/en/electric-gate-repair-lisbon", active: true },
    { label: "Gate installation", href: "/en/automatic-gate-installation-lisbon", active: true },
    { label: "Garage remotes", href: "/en/garage-remote-controls-lisbon", active: true },
    { label: "Security cameras", href: "/en/security-cameras-lisbon", active: true },
  ];

  const supportSteps = [
    {
      icon: "📲",
      title: "Send photos or video",
      text: "If you are not at the property, send a short video of the gate fault, the motor area and any lights or error behaviour.",
    },
    {
      icon: "🔎",
      title: "Initial fault reading",
      text: "We look at the symptoms first: slow movement, partial opening, remote failure, photocell issues or the gate reversing.",
    },
    {
      icon: "⚙️",
      title: "On-site diagnosis",
      text: "When needed, we check the motor, control board, photocells, receiver, safety inputs and the mechanical movement of the gate.",
    },
    {
      icon: "💬",
      title: "Clear next step",
      text: "You get a practical explanation before repair, adjustment or replacement is recommended.",
    },
  ];

  const commonProblems = [
    {
      image: "/portao-abre-ate-meio.png",
      title: "Gate opens only halfway",
      text: "Can be related to force settings, mechanical resistance, limit programming or something blocking the movement.",
    },
    {
      image: "/comando-portao.png",
      title: "Remote control not working",
      text: "May be caused by a weak battery, lost programming, receiver fault, antenna issue or control board problem.",
    },
    {
      image: "/fotocelulas-erro.png",
      title: "Photocell fault",
      text: "Misalignment, dirt, wiring damage or lack of power can stop the gate from closing correctly.",
    },
    {
      image: "/motor-portao.png",
      title: "Gate motor has no strength",
      text: "Often connected to gate resistance, worn parts, incorrect settings or a motor working under excessive load.",
    },
    {
      image: "/central-eletronica.png",
      title: "Control board issue",
      text: "Programming changes, active safety inputs or electrical faults can block normal automatic operation.",
    },
    {
      image: "/portao-inverte-fecho.png",
      title: "Gate closes then opens again",
      text: "Usually related to photocells, obstacles, safety inputs or force sensitivity that needs adjustment.",
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
        <title>Electric Gate Repair in Lisbon | TecCasa Soluções</title>

        <meta
          name="description"
          content="Electric and automatic gate repair in Lisbon for homes, holiday properties and residential buildings. Send photos or video for initial guidance by WhatsApp."
        />

        <meta
          name="keywords"
          content="electric gate repair Lisbon, automatic gate repair Lisbon, gate motor repair Lisbon, gate remote not working, photocell fault, holiday home gate repair Lisbon"
        />

        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Electric Gate Repair in Lisbon | TecCasa Soluções" />
        <meta
          property="og:description"
          content="Automatic gate diagnosis and repair in Lisbon, with clear communication by WhatsApp, email or social media."
        />
        <meta property="og:image" content="https://www.tec-casa.pt/preview.jpg" />
        <meta property="og:url" content="https://tec-casa.pt/en/electric-gate-repair-lisbon" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://tec-casa.pt/en/electric-gate-repair-lisbon" />
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
            className="hero-repair"
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
                Support for foreign homeowners in Portugal
              </div>

              <h1
                style={{
                  fontSize: "clamp(42px,5vw,58px)",
                  lineHeight: "1.05",
                  marginBottom: "26px",
                  color: "#08285c",
                  fontWeight: "900",
                }}
              >
                Automatic gate repair for homes and holiday properties in Lisbon
              </h1>

              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.8",
                  color: "#444",
                  maxWidth: "720px",
                  marginBottom: "18px",
                }}
              >
                If you own, manage or regularly use a property in the Lisbon area and the automatic gate is not working
                properly, TecCasa Soluções can help with clear diagnosis, practical communication and residential gate repair.
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
                Send photos or a short video by WhatsApp. This helps us understand whether the issue may be related to the
                remote control, photocells, motor, control board, wiring or the gate movement itself.
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
                    padding: "18px 30px",
                    borderRadius: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "18px",
                    boxShadow: "0 10px 25px rgba(37,211,102,0.18)",
                  }}
                >
                  Send photos or video
                </a>

                <a
                  href="#common-problems"
                  style={{
                    display: "inline-block",
                    background: "#08285c",
                    color: "white",
                    padding: "18px 30px",
                    borderRadius: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "18px",
                    boxShadow: "0 10px 25px rgba(8,40,92,0.18)",
                  }}
                >
                  See common faults
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
                src="/hero-reparacao-portoes.png"
                alt="Automatic gate repair at a residential property"
                style={{
                  width: "100%",
                  maxWidth: "620px",
                  borderRadius: "32px",
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
              Repair support that starts with clear information
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
              Automatic gate faults are easier to handle when the first information is clear. This is especially useful
              when you are abroad, managing a holiday home or coordinating access through a property manager.
            </p>

            <div
              className="support-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "24px",
              }}
            >
              {supportSteps.map((item, index) => (
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

          <section
            id="common-problems"
            style={{
              padding: "70px 20px 70px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                color: "#08285c",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              Common automatic gate faults
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#555",
                maxWidth: "760px",
                margin: "0 auto 35px",
                textAlign: "center",
                lineHeight: "1.6",
              }}
            >
              These are frequent symptoms in residential automatic gates. The visible symptom is not always the real cause,
              so diagnosis comes before replacing parts.
            </p>

            <div
              className="problems-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "20px",
              }}
            >
              {commonProblems.map((item, index) => (
                <div
                  key={index}
                  className="problem-card"
                  style={{
                    background: "#e6edf7",
                    borderRadius: "22px",
                    overflow: "hidden",
                    boxShadow: "0 12px 30px rgba(11,44,95,0.08)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{
                        color: "#08285c",
                        fontSize: "21px",
                        marginBottom: "12px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: "#333",
                        lineHeight: "1.6",
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
                Useful when you are not always in Portugal
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
                Many gate problems happen when someone else is using the property: family, guests, tenants, neighbours or a
                property manager. Clear photos, short videos and simple access coordination help us understand the issue and
                avoid unnecessary visits where possible.
              </p>

              <div
                className="remote-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
                  gap: "18px",
                  textAlign: "left",
                }}
              >
                {[
                  ["Holiday homes", "Good for owners who need gate issues handled while they are away."],
                  ["Residential buildings", "Useful for shared gates where access reliability affects several people."],
                  ["Clear decisions", "We explain whether the fault points to adjustment, repair or replacement."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="info-card"
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
                Need help with an automatic gate in Lisbon?
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
                Send a WhatsApp message with photos or a short video of the gate, motor and fault behaviour. We will guide
                you on the most sensible next step.
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
            .problem-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .info-card:hover,
            .problem-card:hover {
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

              .hero-repair {
                display: flex !important;
                flex-direction: column !important;
                gap: 26px !important;
                padding: 30px 0 34px 0 !important;
                text-align: center !important;
                overflow: visible !important;
              }

              .hero-repair > div {
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }

              .hero-repair h1 {
                font-size: 30px !important;
                line-height: 1.14 !important;
                text-align: center !important;
                margin: 0 auto 18px auto !important;
                max-width: 100% !important;
              }

              .hero-repair p {
                font-size: 16px !important;
                line-height: 1.6 !important;
                text-align: center !important;
                margin: 0 auto 22px auto !important;
                max-width: 100% !important;
              }

              .hero-repair a {
                display: block !important;
                width: 100% !important;
                max-width: none !important;
                margin: 0 auto !important;
                text-align: center !important;
                box-sizing: border-box !important;
                padding: 15px 18px !important;
                font-size: 16px !important;
              }

              .hero-repair img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                border-radius: 22px !important;
                margin: 0 auto !important;
                display: block !important;
              }

              .support-grid,
              .problems-grid,
              .remote-grid {
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                width: 100% !important;
                max-width: 100% !important;
                justify-items: stretch !important;
                align-items: stretch !important;
                box-sizing: border-box !important;
              }

              .support-grid > *,
              .problems-grid > *,
              .remote-grid > * {
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
