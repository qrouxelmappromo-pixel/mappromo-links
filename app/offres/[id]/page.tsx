type Props = {
  params: Promise<{ id: string }>;
};

export default async function OfferPage({ params }: Props) {
  const { id } = await params;

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>Offre MAP’promo</div>
        <h1 style={styles.title}>Cette offre est disponible dans l’application</h1>
        <p style={styles.text}>Référence offre : #{id}</p>

        <div style={styles.actions}>
          <a style={styles.primary} href="https://apps.apple.com/">
            Télécharger sur l’App Store
          </a>
          <a style={styles.secondary} href="https://play.google.com/store">
            Télécharger sur Google Play
          </a>
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    background: "#f7f7f8",
    color: "#111827",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: 640,
    background: "white",
    borderRadius: 24,
    padding: 32,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  badge: {
    display: "inline-block",
    marginBottom: 12,
    padding: "6px 12px",
    borderRadius: 999,
    background: "#e6fffb",
    color: "#00868B",
    fontWeight: 700,
  },
  title: { margin: 0, fontSize: 34, lineHeight: 1.1 },
  text: { marginTop: 16, fontSize: 17, lineHeight: 1.6, color: "#4b5563" },
  actions: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 },
  primary: {
    background: "#00868B",
    color: "white",
    padding: "14px 18px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 700,
  },
  secondary: {
    background: "#E11D48",
    color: "white",
    padding: "14px 18px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 700,
  },
};