type Props = {
  params: { id: string };
  searchParams?: {
    offerId?: string;
  };
};

export default function CommercantPage({ params, searchParams }: Props) {
  const { id } = params;
  const offerId = searchParams?.offerId;

  const title = offerId
    ? "Découvre cette offre sur MAP’promo"
    : "Découvre ce commerçant sur MAP’promo";

  const text = offerId
    ? "Une offre t’a été partagée depuis un commerçant partenaire. Ouvre MAP’promo pour la consulter."
    : "Un commerçant partenaire t’a été partagé. Ouvre MAP’promo pour découvrir ses offres et ses infos utiles.";

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>MAP’promo</div>

        <h1 style={styles.title}>{title}</h1>
        <p style={styles.text}>{text}</p>

        <div style={styles.infoBox}>
          <p style={styles.infoLine}>
            <strong>Commerçant :</strong> #{id}
          </p>
          {offerId ? (
            <p style={styles.infoLine}>
              <strong>Offre liée :</strong> #{offerId}
            </p>
          ) : null}
        </div>

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
  title: {
    margin: 0,
    fontSize: 34,
    lineHeight: 1.1,
  },
  text: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.6,
    color: "#4b5563",
  },
  infoBox: {
    marginTop: 20,
    padding: 16,
    borderRadius: 16,
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
  },
  infoLine: {
    margin: "0 0 8px 0",
    fontSize: 15,
    color: "#111827",
  },
  actions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 24,
  },
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