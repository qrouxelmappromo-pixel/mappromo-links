export default function InviteListPage() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <div style={styles.badge}>MAP’promo</div>

        <h1 style={styles.title}>Invitation à rejoindre une liste</h1>
        <p style={styles.text}>
          Quelqu’un t’a invité à rejoindre une liste sur MAP’promo. Télécharge
          l’application pour accepter l’invitation.
        </p>

        <div style={styles.buttons}>
          <a
            href="https://apps.apple.com/"
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            Télécharger sur l’App Store
          </a>

          <a
            href="https://play.google.com/store"
            style={{ ...styles.button, ...styles.secondaryButton }}
          >
            Télécharger sur Google Play
          </a>
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    background:
      "linear-gradient(135deg, rgba(0,134,139,0.08), rgba(225,29,72,0.08))",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    width: "100%",
    maxWidth: "560px",
    background: "#ffffff",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    marginBottom: "16px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "#00868B",
    color: "#fff",
    fontWeight: 700,
    fontSize: "14px",
  },
  title: {
    margin: "0 0 12px",
    fontSize: "30px",
    lineHeight: 1.2,
    color: "#111827",
  },
  text: {
    margin: "0 0 24px",
    fontSize: "16px",
    lineHeight: 1.6,
    color: "#4B5563",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  button: {
    display: "inline-block",
    textDecoration: "none",
    padding: "14px 18px",
    borderRadius: "14px",
    fontWeight: 700,
    fontSize: "16px",
  },
  primaryButton: {
    background: "#00868B",
    color: "#fff",
  },
  secondaryButton: {
    background: "#E11D48",
    color: "#fff",
  },
};