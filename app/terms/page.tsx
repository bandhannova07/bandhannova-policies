import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for BandhanNova — rules and guidelines governing your use of our products and services.",
    alternates: { canonical: "https://policies.bandhannova.in/terms" },
};

export default function TermsOfService() {
    return (
        <div className="policy-container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "BandhanNova Terms of Service",
                        "description": "Rules and guidelines for using BandhanNova Services.",
                        "publisher": { "@type": "Organization", "name": "BandhanNova" }
                    })
                }}
            />
            {/* Header */}
            <div className="animate-in">
                <div className="policy-badge">📄 Legal Document</div>
                <h1 className="policy-title">Terms of Service</h1>
                <p className="policy-subtitle">
                    Please read these terms carefully before using any BandhanNova product or service.
                </p>
                <p className="policy-date">Last updated: February 26, 2026</p>
            </div>

            {/* Introduction */}
            <div className="section animate-in-delay-1">
                <h2 className="section-title">1. Introduction</h2>
                <div className="section-body">
                    <p>
                        Welcome to BandhanNova. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
                        the BandhanNova platform, including but not limited to BandhanNova AI Hub, BandhanNova Chat,
                        BandhanNova Blogs, BandhanNova Academy, BandhanNova Smartpedia, Bani AI, and all associated
                        products and services (collectively, &ldquo;Services&rdquo;).
                    </p>
                    <p>
                        By accessing or using our Services, you agree to be bound by these Terms. If you do not agree
                        with these Terms, please do not use our Services.
                    </p>
                </div>
            </div>

            {/* Eligibility */}
            <div className="section">
                <h2 className="section-title">2. Eligibility</h2>
                <div className="section-body">
                    <p>To use BandhanNova Services, you must:</p>
                    <ul>
                        <li>Be at least 13 years of age (or the minimum age required in your jurisdiction).</li>
                        <li>Have the legal capacity to enter into a binding agreement.</li>
                        <li>Not be barred from using our Services under applicable law.</li>
                    </ul>
                    <p>
                        If you are under 18, you must have parental or guardian consent to use our Services.
                    </p>
                </div>
            </div>

            {/* Account */}
            <div className="section">
                <h2 className="section-title">3. Account Registration</h2>
                <div className="section-body">
                    <p>
                        When you create a BandhanNova Account, you agree to provide accurate, current, and complete
                        information. You are responsible for maintaining the confidentiality of your account credentials
                        and for all activities that occur under your account.
                    </p>
                    <div className="info-card">
                        <strong>Important</strong>
                        One BandhanNova Account provides access to all our products. Keep your credentials safe —
                        you are responsible for all activity on your account.
                    </div>
                    <p>
                        You must notify us immediately at{" "}
                        <a href="mailto:support@bandhannova.in">support@bandhannova.in</a>{" "}
                        if you suspect any unauthorized access to your account.
                    </p>
                </div>
            </div>

            {/* Acceptable Use */}
            <div className="section">
                <h2 className="section-title">4. Acceptable Use</h2>
                <div className="section-body">
                    <p>When using our Services, you agree not to:</p>
                    <ul>
                        <li>Violate any applicable laws, regulations, or third-party rights.</li>
                        <li>Use the Services for any illegal, harmful, or fraudulent purpose.</li>
                        <li>Distribute malware, spam, or engage in phishing activities.</li>
                        <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts.</li>
                        <li>Reverse engineer, decompile, or disassemble any part of our Services.</li>
                        <li>Scrape, data mine, or extract data from our Services without express permission.</li>
                        <li>Harass, abuse, or threaten other users or BandhanNova staff.</li>
                        <li>Impersonate any person or entity or misrepresent your affiliation.</li>
                    </ul>
                </div>
            </div>

            {/* AI Services */}
            <div className="section">
                <h2 className="section-title">5. AI-Generated Content</h2>
                <div className="section-body">
                    <p>
                        Our AI-powered services (BandhanNova AI Hub, Bani AI, etc.) generate responses using artificial
                        intelligence models. By using these services, you acknowledge that:
                    </p>
                    <ul>
                        <li>AI-generated content may not always be accurate, complete, or up-to-date.</li>
                        <li>AI responses should not be used as a substitute for professional advice (medical, legal, financial, etc.).</li>
                        <li>You are responsible for verifying the accuracy of AI-generated content before relying on it.</li>
                        <li>We reserve the right to limit, modify, or discontinue AI features at any time.</li>
                    </ul>
                    <div className="info-card">
                        <strong>Disclaimer</strong>
                        BandhanNova AI can make mistakes. Always verify important information independently.
                    </div>
                </div>
            </div>

            {/* Intellectual Property */}
            <div className="section">
                <h2 className="section-title">6. Intellectual Property</h2>
                <div className="section-body">
                    <p>
                        All content, trademarks, logos, designs, code, and technology comprising our Services are owned
                        by BandhanNova or its licensors and are protected by intellectual property laws.
                    </p>
                    <p>
                        <strong>Your Content:</strong> You retain ownership of any content you create or upload to our
                        Services. By posting content, you grant BandhanNova a non-exclusive, worldwide, royalty-free
                        license to use, display, and distribute your content as necessary to provide our Services.
                    </p>
                    <p>
                        <strong>Our Content:</strong> You may not copy, modify, distribute, sell, or lease any part of
                        our Services without prior written consent.
                    </p>
                </div>
            </div>

            {/* Termination */}
            <div className="section">
                <h2 className="section-title">7. Termination</h2>
                <div className="section-body">
                    <p>
                        We may suspend or terminate your account and access to our Services at our sole discretion,
                        without prior notice, if:
                    </p>
                    <ul>
                        <li>You violate these Terms or any applicable laws.</li>
                        <li>Your account is used for unauthorized or suspicious activities.</li>
                        <li>Continued use of the Services poses a risk to other users or our systems.</li>
                    </ul>
                    <p>
                        You may delete your account at any time by contacting us at{" "}
                        <a href="mailto:support@bandhannova.in">support@bandhannova.in</a>.
                    </p>
                </div>
            </div>

            {/* Limitation of Liability */}
            <div className="section">
                <h2 className="section-title">8. Limitation of Liability</h2>
                <div className="section-body">
                    <p>
                        To the maximum extent permitted by law, BandhanNova and its affiliates shall not be liable for
                        any indirect, incidental, special, consequential, or punitive damages arising from your use of
                        our Services.
                    </p>
                    <p>
                        Our Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
                        either express or implied.
                    </p>
                </div>
            </div>

            {/* Modifications */}
            <div className="section">
                <h2 className="section-title">9. Changes to Terms</h2>
                <div className="section-body">
                    <p>
                        We may update these Terms from time to time. When we make significant changes, we will notify
                        you by posting the updated Terms on this page and updating the &ldquo;Last updated&rdquo; date.
                    </p>
                    <p>
                        Your continued use of our Services after any changes constitutes acceptance of the updated Terms.
                    </p>
                </div>
            </div>

            {/* Governing Law */}
            <div className="section">
                <h2 className="section-title">10. Governing Law</h2>
                <div className="section-body">
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                        arising from these Terms or your use of our Services shall be subject to the exclusive jurisdiction
                        of the courts in India.
                    </p>
                </div>
            </div>

            {/* Contact */}
            <div className="section">
                <h2 className="section-title">11. Contact Us</h2>
                <div className="section-body">
                    <p>If you have any questions or concerns about these Terms, please contact us:</p>
                    <div className="info-card" style={{ marginTop: "16px" }}>
                        <strong>BandhanNova Support</strong>
                        <p>
                            Email: <a href="mailto:support@bandhannova.in">support@bandhannova.in</a>
                            <br />
                            Website: <a href="https://bandhannova.in">bandhannova.in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
