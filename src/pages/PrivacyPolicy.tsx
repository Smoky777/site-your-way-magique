import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4 animate-on-scroll">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10 animate-on-scroll">Last updated: January 2024</p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground text-sm leading-relaxed animate-on-scroll">

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">1. Data Controller</h2>
              <p>The data controller responsible for the processing of your personal data is:</p>
              <p className="pl-4 border-l-2 border-primary/20">
                <strong className="text-foreground">Multi Investment Holding SA</strong><br />
                Chemin Rieu 12<br />
                1208 Genève, Switzerland<br />
                Email: <a href="mailto:privacy@multiinvest.com" className="text-primary hover:underline">privacy@multiinvest.com</a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">2. Information We Collect</h2>
              <p>We may collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">Identity data:</strong> name, title, date of birth</li>
                <li><strong className="text-foreground">Contact data:</strong> email address, phone number, postal address</li>
                <li><strong className="text-foreground">Professional data:</strong> employer, role, professional background</li>
                <li><strong className="text-foreground">Technical data:</strong> IP address, browser type, device information, cookies</li>
                <li><strong className="text-foreground">Communication data:</strong> correspondence and inquiries sent to us</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">3. How We Use Your Information</h2>
              <p>We process your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responding to inquiries and providing information about our services</li>
                <li>Managing client relationships and administering accounts</li>
                <li>Complying with legal and regulatory obligations (AML/KYC requirements)</li>
                <li>Improving our website and services through analytics</li>
                <li>Protecting our legitimate business interests and enforcing our rights</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">4. Legal Basis for Processing</h2>
              <p>We process your personal data based on one or more of the following legal grounds:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your explicit consent</li>
                <li>Performance of a contract or pre-contractual measures</li>
                <li>Compliance with a legal obligation</li>
                <li>Our legitimate interests, provided they are not overridden by your rights</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">5. Data Sharing & Third Parties</h2>
              <p>We do not sell your personal data. We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Professional advisors (legal, tax, audit) bound by confidentiality obligations</li>
                <li>Regulatory authorities as required by law</li>
                <li>IT service providers who process data on our behalf under strict contractual safeguards</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">6. International Data Transfers</h2>
              <p>Your data is primarily processed in Switzerland, which benefits from an adequacy decision by the European Commission. Where data is transferred outside of Switzerland or the EEA, we ensure appropriate safeguards are in place, including standard contractual clauses.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">7. Data Retention</h2>
              <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. Financial and regulatory records may be retained for a minimum of 10 years in accordance with Swiss law.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">8. Cookies & Analytics</h2>
              <p>Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand website usage patterns. You can manage your cookie preferences through your browser settings at any time.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">9. Your Rights</h2>
              <p>Under the Swiss Federal Act on Data Protection (FADP) and, where applicable, the EU General Data Protection Regulation (GDPR), you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal data and obtain a copy</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your data (subject to legal retention obligations)</li>
                <li>Restrict or object to certain processing activities</li>
                <li>Data portability in a structured, machine-readable format</li>
                <li>Withdraw consent at any time, without affecting prior processing</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">10. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction, in accordance with industry best practices and applicable regulations.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">11. Supervisory Authority</h2>
              <p>If you believe your data protection rights have been violated, you have the right to lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC) in Switzerland, or with your local supervisory authority if applicable.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">12. Contact</h2>
              <p>For any privacy-related inquiries or to exercise your rights, please contact us at:</p>
              <p className="pl-4 border-l-2 border-primary/20">
                <strong className="text-foreground">Privacy Office</strong><br />
                Multi Investment Holding SA<br />
                Chemin Rieu 12, 1208 Genève, Switzerland<br />
                Email: <a href="mailto:privacy@multiinvest.com" className="text-primary hover:underline">privacy@multiinvest.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
