import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for BandhanNova — how we collect, use, and protect your personal information.",
    alternates: { canonical: "https://policies.bandhannova.in/privacy" },
};

export default function PrivacyPolicy() {
    return (
        <div className="policy-container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "BandhanNova Privacy Policy",
                        "description": "How we handle your personal data at BandhanNova.",
                        "publisher": { "@type": "Organization", "name": "BandhanNova" }
                    })
                }}
            />
            {/* Header */}
            <div className="animate-in">
                <div className="policy-badge" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                    🔒 Privacy
                </div>
                <h1 className="policy-title">Privacy Policy</h1>
                <p className="policy-subtitle">
                    Your privacy is important to us. This policy explains how BandhanNova handles your personal data.
                </p>
                <p className="policy-date">Last updated: February 26, 2026</p>
            </div>

            {/* Introduction */}
            <div className="section animate-in-delay-1">
                <h2 className="section-title">1. Introduction</h2>
                <div className="section-body">
                    <p>
                        BandhanNova (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This
                        Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                        use our platform and services, including BandhanNova AI Hub, Chat, Blogs, Academy, Smartpedia,
                        Bani AI, and all associated products (collectively, &ldquo;Services&rdquo;).
                    </p>
                    <p>
                        By using our Services, you consent to the data practices described in this policy.
                    </p>
                </div>
            </div>

            {/* Information We Collect */}
            <div className="section">
                <h2 className="section-title">2. Information We Collect</h2>
                <div className="section-body">
                    <p>
                        <strong>2.1 Information You Provide:</strong>
                    </p>
                    <ul>
                        <li><strong>Account Data:</strong> Name, email address, and profile information when you create an account.</li>
                        <li><strong>Authentication Data:</strong> Login credentials (stored securely via Supabase).</li>
                        <li><strong>User Content:</strong> Messages, queries, feedback, and any content you create using our Services.</li>
                        <li><strong>Communications:</strong> Content of your communications when you contact our support team.</li>
                    </ul>

                    <p>
                        <strong>2.2 Information Collected Automatically:</strong>
                    </p>
                    <ul>
                        <li><strong>Usage Data:</strong> Pages visited, features used, interactions, and time spent on the platform.</li>
                        <li><strong>Device Information:</strong> Browser type, operating system, screen resolution, and device identifiers.</li>
                        <li><strong>IP Address:</strong> Your IP address is collected for security, rate limiting, and analytics purposes.</li>
                        <li><strong>Cookies:</strong> We use essential cookies for authentication and session management.</li>
                    </ul>

                    <p>
                        <strong>2.3 Third-Party Authentication:</strong>
                    </p>
                    <p>
                        When you sign in using Google, we may receive your name, email address, and profile picture
                        from Google. We do not access your Google password.
                    </p>
                </div>
            </div>

            {/* How We Use */}
            <div className="section">
                <h2 className="section-title">3. How We Use Your Information</h2>
                <div className="section-body">
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our Services.</li>
                        <li>Authenticate your identity and manage your account.</li>
                        <li>Process and respond to your requests, queries, and support tickets.</li>
                        <li>Personalize your experience across BandhanNova products.</li>
                        <li>Analyze usage patterns to improve our AI models and features.</li>
                        <li>Ensure the security and integrity of our platform.</li>
                        <li>Comply with legal obligations and enforce our Terms of Service.</li>
                        <li>Send important updates about our Services (you can opt out).</li>
                    </ul>
                    <div className="info-card" style={{ background: "#f0fdf4", borderColor: "rgba(22, 163, 74, 0.1)" }}>
                        <strong style={{ color: "#16a34a" }}>We Never Sell Your Data</strong>
                        <p style={{ color: "#15803d" }}>
                            BandhanNova does not and will never sell your personal information to third parties.
                        </p>
                    </div>
                </div>
            </div>

            {/* AI and Chat Data */}
            <div className="section">
                <h2 className="section-title">4. AI & Chat Data</h2>
                <div className="section-body">
                    <p>When you use our AI-powered services:</p>
                    <ul>
                        <li>Your queries and conversations may be processed by AI models to generate responses.</li>
                        <li>Chat conversations are stored securely and associated with your account.</li>
                        <li>
                            We may use aggregated and anonymized conversation data to improve our AI models, but we
                            will never use your individual conversations for training without your explicit consent.
                        </li>
                        <li>Guest chat data is temporary and may be deleted after your session.</li>
                    </ul>
                    <div className="info-card">
                        <strong>Your Conversations Are Private</strong>
                        <p>
                            We do not share your individual AI conversations with third parties, advertisers, or other users.
                        </p>
                    </div>
                </div>
            </div>

            {/* Data Sharing */}
            <div className="section">
                <h2 className="section-title">5. Data Sharing & Disclosure</h2>
                <div className="section-body">
                    <p>We may share your information only in the following circumstances:</p>
                    <ul>
                        <li>
                            <strong>Service Providers:</strong> With trusted third-party providers who assist in operating
                            our Services (hosting, analytics, authentication). These providers are bound by confidentiality
                            agreements.
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> When required by law, regulation, legal process, or
                            governmental request.
                        </li>
                        <li>
                            <strong>Safety:</strong> To protect the rights, property, or safety of BandhanNova, our users,
                            or the public.
                        </li>
                        <li>
                            <strong>With Your Consent:</strong> In any other cases, only with your explicit consent.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Data Security */}
            <div className="section">
                <h2 className="section-title">6. Data Security</h2>
                <div className="section-body">
                    <p>
                        We implement industry-standard security measures to protect your personal information, including:
                    </p>
                    <ul>
                        <li>Encryption of data in transit (TLS/SSL) and at rest.</li>
                        <li>Secure authentication via Supabase with row-level security policies.</li>
                        <li>Regular security audits and vulnerability assessments.</li>
                        <li>Access controls limiting who can view your data within our organization.</li>
                    </ul>
                    <p>
                        However, no method of electronic transmission or storage is 100% secure. While we strive to
                        protect your data, we cannot guarantee absolute security.
                    </p>
                </div>
            </div>

            {/* Data Retention */}
            <div className="section">
                <h2 className="section-title">7. Data Retention</h2>
                <div className="section-body">
                    <p>We retain your personal information for as long as:</p>
                    <ul>
                        <li>Your account remains active.</li>
                        <li>It is necessary to provide our Services.</li>
                        <li>Required by applicable law or regulatory obligations.</li>
                    </ul>
                    <p>
                        When you delete your account, we will delete or anonymize your personal data within 30 days,
                        unless retention is required by law.
                    </p>
                </div>
            </div>

            {/* Your Rights */}
            <div className="section">
                <h2 className="section-title">8. Your Rights</h2>
                <div className="section-body">
                    <p>Depending on your location, you may have the following rights:</p>
                    <ul>
                        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal data.</li>
                        <li><strong>Data Portability:</strong> Request a copy of your data in a portable format.</li>
                        <li><strong>Objection:</strong> Object to certain processing of your data.</li>
                        <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, contact us at{" "}
                        <a href="mailto:support@bandhannova.in">support@bandhannova.in</a>.
                    </p>
                </div>
            </div>

            {/* Children */}
            <div className="section">
                <h2 className="section-title">9. Children&apos;s Privacy</h2>
                <div className="section-body">
                    <p>
                        Our Services are not intended for children under 13 years of age. We do not knowingly collect
                        personal information from children under 13. If you are a parent or guardian and believe your child
                        has provided us with personal information, please contact us so we can take appropriate action.
                    </p>
                </div>
            </div>

            {/* Third-Party Links */}
            <div className="section">
                <h2 className="section-title">10. Third-Party Links</h2>
                <div className="section-body">
                    <p>
                        Our Services may contain links to third-party websites or services. We are not responsible for
                        the privacy practices of these third parties. We recommend reviewing their privacy policies
                        before providing any personal information.
                    </p>
                </div>
            </div>

            {/* Changes */}
            <div className="section">
                <h2 className="section-title">11. Changes to This Policy</h2>
                <div className="section-body">
                    <p>
                        We may update this Privacy Policy from time to time. When we make significant changes, we will
                        notify you by posting the updated policy on this page and updating the &ldquo;Last updated&rdquo; date.
                    </p>
                    <p>
                        We encourage you to periodically review this page for the latest information on our privacy
                        practices.
                    </p>
                </div>
            </div>

            {/* Contact */}
            <div className="section">
                <h2 className="section-title">12. Contact Us</h2>
                <div className="section-body">
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
                    <div className="info-card" style={{ marginTop: "16px", background: "#f0fdf4", borderColor: "rgba(22, 163, 74, 0.1)" }}>
                        <strong style={{ color: "#16a34a" }}>BandhanNova Privacy Team</strong>
                        <p style={{ color: "#15803d" }}>
                            Email: <a href="mailto:support@bandhannova.in" style={{ color: "#16a34a" }}>support@bandhannova.in</a>
                            <br />
                            Website: <a href="https://bandhannova.in" style={{ color: "#16a34a" }}>bandhannova.in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
