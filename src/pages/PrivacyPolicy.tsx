import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-12 animate-on-scroll">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-accent mb-4">Legal</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">Privacy Policy</h1>
            <div className="w-16 h-[2px] bg-accent mt-6" />
            <p className="text-muted-foreground text-sm mt-6 font-sans tracking-wide">Effective Date — January 2024</p>
          </div>

          <div className="space-y-10 animate-on-scroll">

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">1. Data Controller</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">The data controller responsible for the processing of your personal data is:</p>
              <div className="pl-5 border-l border-accent/40 text-sm text-muted-foreground leading-[1.8] font-sans">
                <p className="font-semibold text-foreground">Multi Investment Holding SA</p>
                <p>Chemin Rieu 12</p>
                <p>1208 Genève, Switzerland</p>
                <p>Email: <a href="mailto:privacy@multiinvest.com" className="text-accent hover:underline">privacy@multiinvest.com</a></p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">2. Information We Collect</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">We may collect the following categories of personal data:</p>
              <ul className="list-none space-y-2 text-sm text-muted-foreground leading-[1.8] font-sans pl-0">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span><strong className="text-foreground font-medium">Identity data:</strong> name, title, date of birth</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span><strong className="text-foreground font-medium">Contact data:</strong> email address, phone number, postal address</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span><strong className="text-foreground font-medium">Professional data:</strong> employer, role, professional background</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span><strong className="text-foreground font-medium">Technical data:</strong> IP address, browser type, device information, cookies</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span><strong className="text-foreground font-medium">Communication data:</strong> correspondence and inquiries sent to us</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">3. How We Use Your Information</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">We process your personal data for the following purposes:</p>
              <ul className="list-none space-y-2 text-sm text-muted-foreground leading-[1.8] font-sans pl-0">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Responding to inquiries and providing information about our services</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Managing client relationships and administering accounts</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Complying with legal and regulatory obligations (AML/KYC requirements)</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Improving our website and services through analytics</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Protecting our legitimate business interests and enforcing our rights</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">4. Legal Basis for Processing</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">We process your personal data based on one or more of the following legal grounds:</p>
              <ul className="list-none space-y-2 text-sm text-muted-foreground leading-[1.8] font-sans pl-0">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Your explicit consent</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Performance of a contract or pre-contractual measures</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Compliance with a legal obligation</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Our legitimate interests, provided they are not overridden by your rights</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">5. Data Sharing & Third Parties</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">We do not sell your personal data. We may share your data with:</p>
              <ul className="list-none space-y-2 text-sm text-muted-foreground leading-[1.8] font-sans pl-0">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Professional advisors (legal, tax, audit) bound by confidentiality obligations</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Regulatory authorities as required by law</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>IT service providers who process data on our behalf under strict contractual safeguards</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">6. International Data Transfers</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">Your data is primarily processed in Switzerland, which benefits from an adequacy decision by the European Commission. Where data is transferred outside of Switzerland or the EEA, we ensure appropriate safeguards are in place, including standard contractual clauses.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">7. Data Retention</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. Financial and regulatory records may be retained for a minimum of 10 years in accordance with Swiss law.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">8. Cookies & Analytics</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand website usage patterns. You can manage your cookie preferences through your browser settings at any time.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">9. Your Rights</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">Under the Swiss Federal Act on Data Protection (FADP) and, where applicable, the EU General Data Protection Regulation (GDPR), you have the right to:</p>
              <ul className="list-none space-y-2 text-sm text-muted-foreground leading-[1.8] font-sans pl-0">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Access your personal data and obtain a copy</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Rectify inaccurate or incomplete data</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Request deletion of your data (subject to legal retention obligations)</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Restrict or object to certain processing activities</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Data portability in a structured, machine-readable format</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Withdraw consent at any time, without affecting prior processing</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">10. Data Security</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction, in accordance with industry best practices and applicable regulations.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">11. Supervisory Authority</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">If you believe your data protection rights have been violated, you have the right to lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC) in Switzerland, or with your local supervisory authority if applicable.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">12. Contact</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">For any privacy-related inquiries or to exercise your rights, please contact us at:</p>
              <div className="pl-5 border-l border-accent/40 text-sm text-muted-foreground leading-[1.8] font-sans">
                <p className="font-semibold text-foreground">Privacy Office</p>
                <p>Multi Investment Holding SA</p>
                <p>Chemin Rieu 12, 1208 Genève, Switzerland</p>
                <p>Email: <a href="mailto:privacy@multiinvest.com" className="text-accent hover:underline">privacy@multiinvest.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
