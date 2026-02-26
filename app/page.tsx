import Link from "next/link";

export default function HomePage() {
  return (
    <div className="policy-container">
      {/* Hero */}
      <div className="animate-in" style={{ textAlign: "center", marginBottom: "56px" }}>
        <div className="policy-badge">📋 Legal</div>
        <h1 className="policy-title">Legal & Policies</h1>
        <p className="policy-subtitle" style={{ maxWidth: "480px", margin: "0 auto" }}>
          Transparency matters to us. Here you'll find all the legal information about how BandhanNova
          operates and protects your data.
        </p>
      </div>

      {/* Cards */}
      <div className="cards-grid">
        <Link href="/terms" className="policy-card animate-in-delay-1">
          <div className="card-icon" style={{ background: "#eef2ff", color: "#4f46e5" }}>
            📄
          </div>
          <h2 className="card-title">Terms of Service</h2>
          <p className="card-desc">
            The rules and guidelines that govern your use of BandhanNova products and services.
          </p>
          <span className="card-link">
            Read Terms <span>→</span>
          </span>
        </Link>

        <Link href="/privacy" className="policy-card animate-in-delay-2">
          <div className="card-icon" style={{ background: "#f0fdf4", color: "#16a34a" }}>
            🔒
          </div>
          <h2 className="card-title">Privacy Policy</h2>
          <p className="card-desc">
            How we collect, use, and protect your personal information across all BandhanNova services.
          </p>
          <span className="card-link">
            Read Policy <span>→</span>
          </span>
        </Link>

        <Link href="/faq" className="policy-card animate-in-delay-2">
          <div className="card-icon" style={{ background: "#fef3c7", color: "#d97706" }}>
            ❓
          </div>
          <h2 className="card-title">FAQs</h2>
          <p className="card-desc">
            Quick answers to common questions about your account, AI services, privacy, and more.
          </p>
          <span className="card-link">
            View FAQs <span>→</span>
          </span>
        </Link>
      </div>

      {/* Contact Card */}
      <div className="info-card animate-in-delay-2" style={{ marginTop: "48px", textAlign: "center" }}>
        <strong>Questions?</strong>
        <p>
          If you have any questions about our policies, reach out to us at{" "}
          <a href="mailto:support@bandhannova.in" style={{ color: "var(--accent)", fontWeight: 600 }}>
            support@bandhannova.in
          </a>
        </p>
      </div>
    </div>
  );
}
