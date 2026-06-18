import { useEffect, useState } from "react";
import Head from "next/head";

export default function SecurityCamerasLisbon() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Gate repair", href: "/en/electric-gate-repair-lisbon", active: true },
    { label: "Gate installation", href: "/en/automatic-gate-installation-lisbon", active: true },
    { label: "Garage remotes", href: "/en/garage-remote-controls-lisbon", active: true },
    { label: "Security cameras", href: "/en/security-cameras-lisbon", active: true },
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
        <title>Security Camera Installation in Lisbon | TecCasa Soluções</title>

        <meta
          name="description"
          content="Domestic security camera installation in Lisbon for homes, apartments, garages and holiday properties. Simple remote monitoring solutions for residential use."
        />

        <meta
          name="keywords"
          content="security camera installation Lisbon, home security cameras Lisbon, domestic cameras Lisbon, holiday home monitoring Lisbon, smart cameras Lisbon, home monitoring Lisbon, residential security cameras, TecCasa Soluções"
        />

        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Security Camera Installation in Lisbon | TecCasa Soluções"
        />

        <meta
          property="og:description"
          content="Simple domestic security camera installation and remote monitoring for homes and holiday properties in Lisbon and surrounding areas."
        />

        <meta
          name="google-site-verification"
          content="_Dnes5RL-b6NjpXQVjaV6Nz7AlQFSU4PvvcSTWUKe44"
        />

        <meta property="og:image" content="https://www.tec-casa.pt/preview.jpg" />
        <meta property="og:url" content="https://tec-casa.pt/en/security-cameras-lisbon" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://tec-casa.pt/en/security-cameras-lisbon" />
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
              <img src="/favicon.png" style={{ width: "30px" }} alt="TecCasa Soluções" />
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
                href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20security%20camera%20installation%20in%20Lisbon."
                target="_blank"
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
                href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20security%20camera%20installation%20in%20Lisbon."
                target="_blank"
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
            className="hero-reparacao"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "50px",
              alignItems: "center",
              padding: "70px 0",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(42px,5vw,58px)",
                  lineHeight: "1.05",
                  marginBottom: "26px",
                  color: "#08285c",
                  fontWeight: "900",
                }}
              >
                Smart Security Cameras for Homes
              </h1>

              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.8",
                  color: "#444",
                  maxWidth: "700px",
                  marginBottom: "28px",
                }}
              >
                Monitor entrances, gates, garages, outdoor areas or holiday properties
                directly from your phone, with simple remote access and useful alerts.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#applications"
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
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  See applications
                </a>

                <a
                  href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20security%20camera%20installation%20in%20Lisbon."
                  target="_blank"
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
                    transition: "0.3s",
                  }}
                >
                  Send WhatsApp message
                </a>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#6b7280",
                  maxWidth: "680px",
                  margin: "16px 0 0 0",
                }}
              >
                For safety reasons, phone calls are only answered from Portuguese
                numbers (+351). If you do not have a Portuguese phone number, please
                contact us by WhatsApp message, email or social media.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="/hero-vigilancia.png"
                alt="Smart security cameras for homes"
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

          <section
            id="applications"
            className="vigilancia-aplicacoes"
            style={{
              padding: "40px 20px 70px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                color: "#08285c",
                marginBottom: "18px",
                textAlign: "center",
              }}
            >
              Where you can use them
            </h2>

            <p
              style={{
                fontSize: "20px",
                color: "#555",
                maxWidth: "850px",
                margin: "0 auto 45px auto",
                textAlign: "center",
                lineHeight: "1.7",
              }}
            >
              Simple domestic camera solutions for homes, entrances, garages,
              outdoor areas and second homes, with access from your phone.
            </p>

            <div
              className="problemas-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "24px",
              }}
            >
              {[
                {
                  image: "/camera-entrada-casa.png",
                  title: "Home entrance",
                  text: "Monitor movement near the front door and receive useful alerts on your phone.",
                },
                {
                  image: "/camera-portao-garagem.png",
                  title: "Gate and garage",
                  text: "Check who arrives, monitor access and complement automatic gate control.",
                },
                {
                  image: "/camera-exterior-casa.png",
                  title: "Outdoor areas",
                  text: "Monitor gardens, access points, patios and the surrounding areas of the property.",
                },
                {
                  image: "/camera-pets.png",
                  title: "Pets at home",
                  text: "See what is happening at home and check on your pets while you are away.",
                },
                {
                  image: "/camera-segunda-casa.png",
                  title: "Holiday home",
                  text: "Keep an eye on a holiday home, garage or secondary property when you are not in Portugal.",
                },
                {
                  image: "/app-vigilancia.png",
                  title: "Remote access",
                  text: "View multiple cameras from your phone, receive notifications and check the property remotely.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#e6edf7",
                    borderRadius: "26px",
                    overflow: "hidden",
                    boxShadow: "0 14px 35px rgba(11,44,95,0.08)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "260px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div style={{ padding: "28px" }}>
                    <h3
                      style={{
                        color: "#08285c",
                        fontSize: "28px",
                        marginBottom: "14px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: "#444",
                        lineHeight: "1.7",
                        fontSize: "17px",
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

          <section
            className="vigilancia-wow-section"
            style={{
              padding: "40px 20px 90px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              className="vigilancia-wow"
              style={{
                background: "#08285c",
                borderRadius: "38px",
                padding: "70px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                gap: "50px",
                alignItems: "center",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(8,40,92,0.18)",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "clamp(38px,4vw,54px)",
                    lineHeight: "1.05",
                    color: "white",
                    marginBottom: "28px",
                    fontWeight: "900",
                  }}
                >
                  Monitor everything remotely
                </h2>

                <p
                  style={{
                    fontSize: "22px",
                    lineHeight: "1.8",
                    color: "rgba(255,255,255,0.88)",
                  }}
                >
                  Keep an eye on entrances, gates, outdoor areas and second homes
                  directly from your phone, wherever you are.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/vigilancia-remota.png"
                  alt="Remote home camera monitoring"
                  style={{
                    width: "100%",
                    maxWidth: "560px",
                    borderRadius: "28px",
                    display: "block",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
                  }}
                />
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "20px 20px 90px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                color: "#08285c",
                marginBottom: "18px",
                textAlign: "center",
              }}
            >
              Compatible apps and brands
            </h2>

            <p
              style={{
                fontSize: "20px",
                color: "#555",
                maxWidth: "850px",
                margin: "0 auto 50px auto",
                textAlign: "center",
                lineHeight: "1.7",
              }}
            >
              Simple and intuitive camera solutions with remote access through
              well-known apps that are easy to use day to day.
            </p>

            <div
              className="logos-vigilancia"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "24px",
              }}
            >
              {[
                { logo: "/tapo.png", name: "TP-Link Tapo" },
                { logo: "/ezviz.png", name: "EZVIZ" },
                { logo: "/imou.png", name: "Imou" },
                { logo: "/reolink.png", name: "Reolink" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#fff",
                    borderRadius: "26px",
                    padding: "35px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 30px rgba(11,44,95,0.08)",
                    border: "1px solid rgba(11,44,95,0.06)",
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{
                      height: "68px",
                      width: "auto",
                      objectFit: "contain",
                      marginBottom: "26px",
                    }}
                  />

                  <h3
                    style={{
                      color: "#08285c",
                      fontSize: "24px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              padding: "20px 20px 80px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                color: "#08285c",
                marginBottom: "18px",
                textAlign: "center",
              }}
            >
              Useful everyday features
            </h2>

            <p
              style={{
                fontSize: "20px",
                color: "#555",
                maxWidth: "850px",
                margin: "0 auto 45px auto",
                textAlign: "center",
                lineHeight: "1.7",
              }}
            >
              Practical features for simple home monitoring through your phone,
              without complex professional surveillance projects.
            </p>

            <div
              className="funcionalidades-vigilancia"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "20px",
              }}
            >
              {[
                { icon: "📱", title: "Mobile alerts" },
                { icon: "🌙", title: "Night vision" },
                { icon: "🚶", title: "Motion detection" },
                { icon: "🎙️", title: "Two-way audio" },
                { icon: "💾", title: "Local or cloud recording" },
                { icon: "🌍", title: "Remote access" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "linear-gradient(180deg,#ffffff 0%,#f4f8fd 100%)",
                    borderRadius: "24px",
                    padding: "30px 20px",
                    textAlign: "center",
                    boxShadow: "0 12px 30px rgba(11,44,95,0.08)",
                    border: "1px solid rgba(11,44,95,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "40px",
                      marginBottom: "16px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      color: "#08285c",
                      fontSize: "22px",
                      margin: "0",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              padding: "10px 20px 60px",
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "#f5f8fc",
                border: "1px solid rgba(11,44,95,0.08)",
                borderRadius: "22px",
                padding: "24px 26px",
                boxShadow: "0 10px 26px rgba(11,44,95,0.06)",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  color: "#08285c",
                  margin: "0 0 14px 0",
                }}
              >
                Service area
              </h2>

              <p
                style={{
                  margin: "0",
                  fontSize: "17px",
                  lineHeight: "1.7",
                  color: "#555",
                }}
              >
                Domestic security camera installation in Lisbon and surrounding
                areas, within the usual TecCasa service radius. Send your location
                by WhatsApp and we will confirm coverage before scheduling a visit.
              </p>
            </div>
          </section>

          <section
            style={{
              padding: "20px 20px 70px",
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "linear-gradient(180deg,#ffffff 0%,#f5f8fc 100%)",
                borderRadius: "32px",
                padding: "46px 34px",
                boxShadow: "0 18px 40px rgba(11,44,95,0.08)",
                border: "1px solid rgba(11,44,95,0.06)",
              }}
            >
              <h2
                style={{
                  fontSize: "38px",
                  color: "#08285c",
                  marginBottom: "18px",
                }}
              >
                Need cameras for a home or holiday property?
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#555",
                  maxWidth: "780px",
                  margin: "0 auto 30px auto",
                }}
              >
                Send photos of the areas you want to monitor and a short description
                of what you need. We will help assess whether a simple domestic
                camera installation is suitable.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20security%20camera%20installation%20in%20Lisbon."
                  target="_blank"
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
                  Send WhatsApp message
                </a>

                <a
                  href="tel:+351922021980"
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
                  Call now
                </a>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#6b7280",
                  maxWidth: "680px",
                  margin: "16px auto 0 auto",
                  textAlign: "center",
                }}
              >
                For safety reasons, phone calls are only answered from Portuguese
                numbers (+351). If you do not have a Portuguese phone number, please
                contact us by WhatsApp message, email or social media.
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
              background:
                "linear-gradient(180deg,#ffffff 0%,#ffffff 15%,#f5f7fb 35%,#dfe8f5 65%,#cfdcf0 100%)",
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
                href="https://wa.me/351922021980"
                target="_blank"
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
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
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
              Copyright 2026 TecCasa Soluções. All rights reserved.
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
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              box-sizing: border-box;
            }

            .menu-button {
              display: block;
            }

            .mobile-menu {
              display: none;
            }

            .cartao-servico,
            .cartao-vantagem,
            .cartao-marca {
              transition: transform .3s ease, box-shadow .3s ease;
            }

            .cartao-servico:hover {
              transform: translateY(-8px);
              box-shadow: 0 18px 35px rgba(0,0,0,.14) !important;
            }

            .cartao-vantagem:hover {
              transform: translateY(-8px);
              box-shadow: 0 18px 35px rgba(0,0,0,.12);
            }

            .cartao-marca:hover {
              transform: translateY(-7px);
              box-shadow: 0 18px 35px rgba(11,44,95,.14);
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

            h1, h2, .cartao-servico, footer, section {
              animation: fadeUp .8s ease;
            }

            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.06); }
              100% { transform: scale(1); }
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

              section > div[style*="border-radius:32px"],
              section > div[style*="border-radius: 32px"],
              section > div[style*="borderRadius"] {
                padding-left: 18px !important;
                padding-right: 18px !important;
              }

              .hero-reparacao {
                display: flex !important;
                flex-direction: column !important;
                gap: 26px !important;
                padding: 30px 0 34px 0 !important;
                text-align: center !important;
                overflow: visible !important;
              }

              .hero-reparacao > div {
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }

              .hero-reparacao > div:first-child > div:first-child {
                justify-content: center !important;
              }

              .hero-reparacao h1 {
                font-size: 30px !important;
                line-height: 1.14 !important;
                text-align: center !important;
                margin: 0 auto 18px auto !important;
                max-width: 100% !important;
              }

              .hero-reparacao p {
                font-size: 16px !important;
                line-height: 1.6 !important;
                text-align: center !important;
                margin: 0 auto 22px auto !important;
                max-width: 100% !important;
              }

              .hero-reparacao a {
                display: block !important;
                width: 100% !important;
                max-width: none !important;
                margin: 0 auto !important;
                text-align: center !important;
                box-sizing: border-box !important;
                padding: 15px 18px !important;
                font-size: 16px !important;
              }

              .hero-reparacao img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                border-radius: 22px !important;
                margin: 0 auto !important;
                display: block !important;
              }

              .problemas-grid,
              .servicos-grid,
              .marcas-grid,
              .contact-grid,
              .compromisso-grid,
              .logos-vigilancia,
              .funcionalidades-vigilancia {
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                width: 100% !important;
                max-width: 100% !important;
                justify-items: stretch !important;
                align-items: stretch !important;
                box-sizing: border-box !important;
              }

              .problemas-grid > *,
              .servicos-grid > *,
              .marcas-grid > *,
              .contact-grid > *,
              .compromisso-grid > *,
              .logos-vigilancia > *,
              .funcionalidades-vigilancia > * {
                width: 100% !important;
                max-width: none !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                box-sizing: border-box !important;
              }

              div[style*="grid-template-columns"]:not(.marcas-grid) {
                grid-template-columns: 1fr !important;
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
              }

              div[style*="grid-template-columns"]:not(.marcas-grid) > * {
                width: 100% !important;
                max-width: none !important;
                box-sizing: border-box !important;
              }

              h1 {
                font-size: 30px !important;
                line-height: 1.16 !important;
              }

              h2 {
                font-size: 27px !important;
                line-height: 1.2 !important;
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

              h1,
              h2 {
                text-align: center !important;
              }

              section > p {
                text-align: center !important;
                margin-left: auto !important;
                margin-right: auto !important;
              }

              .hero-reparacao p {
                text-align: center !important;
              }

              .problemas-grid h3,
              .servicos-grid h3,
              .marcas-grid h3,
              .contact-grid h3,
              .compromisso-grid h3,
              div[style*="grid-template-columns"] h3 {
                text-align: left !important;
              }

              .problemas-grid p,
              .servicos-grid p,
              .marcas-grid p,
              .contact-grid p,
              .compromisso-grid p,
              div[style*="grid-template-columns"] p {
                text-align: left !important;
              }

              .funcionalidades-vigilancia h3 {
                text-align: center !important;
              }
            }
          `}</style>

          <a
            href="https://wa.me/351922021980?text=Hello%2C%20I%20need%20help%20with%20security%20camera%20installation%20in%20Lisbon."
            target="_blank"
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
