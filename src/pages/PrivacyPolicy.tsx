import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl legal-body">

          {/* Header */}
          <div className="mb-16 animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Legal Notice</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-[1.15]">Privacy Policy</h1>
            <div className="w-20 h-[2px] bg-accent mt-8" />
            <p className="text-muted-foreground mt-8 tracking-wide">Effective Date — February 2024</p>
          </div>

          {/* Intro */}
          <div className="mb-14 animate-on-scroll">
            <p className="text-base md:text-lg text-muted-foreground leading-[2] font-sans">
              Multi Investment Holding SA is committed to protecting the privacy and personal data of its clients, partners, and website visitors. This Privacy Policy outlines the types of personal data we collect, how we use, store, and protect it, as well as your rights regarding your personal information. We process all data in strict compliance with the Swiss Federal Act on Data Protection (FADP), the EU General Data Protection Regulation (GDPR) where applicable, and other relevant international standards.
            </p>
          </div>

          <div className="space-y-14 animate-on-scroll">

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">1. Data Controller</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">The entity responsible for the collection and processing of your personal data within the meaning of applicable data protection legislation is:</p>
              <div className="pl-6 border-l-2 border-accent/30 text-base text-muted-foreground leading-[2] font-sans py-2">
                <p className="font-semibold text-foreground text-lg">Multi Investment Holding SA</p>
                <p>Chemin Rieu 12</p>
                <p>1208 Genève, Switzerland</p>
                <p className="mt-2">Email: <a href="mailto:privacy@multiinvest.com" className="text-accent hover:underline font-medium">privacy@multiinvest.com</a></p>
                <p className="text-sm mt-3 pt-3 border-t border-border/50">Registre du commerce: CH-660.0.567.024-5 · TVA: CHE-396.944.369</p>
              </div>
              <p className="text-base text-muted-foreground leading-[2] font-sans">If you have any questions about how we handle your personal data, or if you wish to exercise any of your rights as described below, please do not hesitate to contact our Privacy Office using the details provided above.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">2. Information We Collect</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">In the course of our business activities and through our website, we may collect the following categories of personal data, depending on the nature of your interaction with us:</p>
              <ul className="list-none space-y-3 text-base text-muted-foreground leading-[2] font-sans pl-0 mt-4">
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Identity & personal data:</strong> full name, title, nationality, date of birth, and identification documents as required for regulatory compliance (KYC/AML)</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Contact information:</strong> email address, telephone number, postal address, and preferred method of communication</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Professional & financial data:</strong> employer, professional title, investment experience, source of wealth, and financial situation where relevant to our services</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Technical & usage data:</strong> IP address, browser type and version, device identifiers, operating system, pages visited, time spent on pages, referral sources, and cookie data</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Communication records:</strong> all correspondence, inquiries, meeting notes, and records of interactions with our team</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">3. Purpose of Data Processing</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">We process your personal data strictly for legitimate, clearly defined purposes. These include:</p>
              <ul className="list-none space-y-3 text-base text-muted-foreground leading-[2] font-sans pl-0 mt-4">
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>Responding to inquiries, providing tailored information, and facilitating introductory conversations about our services and investment strategies</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>Establishing, managing, and administering client relationships, including due diligence, onboarding, and ongoing account management</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>Fulfilling our regulatory obligations under Swiss financial law, including Anti-Money Laundering (AML) and Know Your Customer (KYC) requirements</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>Enhancing the performance, usability, and security of our website through anonymized analytics and monitoring</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>Protecting our legitimate business interests, preventing fraud, and enforcing our contractual and legal rights</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>Sending periodic updates regarding our services, market insights, and relevant industry developments, where you have opted in to receive such communications</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">4. Legal Basis for Processing</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">All processing of personal data by Multi Investment is carried out on the basis of one or more of the following legal grounds, in accordance with the FADP and GDPR:</p>
              <ul className="list-none space-y-3 text-base text-muted-foreground leading-[2] font-sans pl-0 mt-4">
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Consent:</strong> where you have given explicit, informed, and freely given consent for a specific purpose</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Contractual necessity:</strong> processing required for the performance of a contract, or to take pre-contractual steps at your request</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Legal obligation:</strong> processing necessary to comply with Swiss or international legal and regulatory requirements</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Legitimate interest:</strong> processing necessary for our legitimate business purposes, provided that your fundamental rights and freedoms are not overridden</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">5. Data Sharing & Third Parties</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Multi Investment does not sell, rent, or trade your personal data to any third party. We may share your information only in the following limited circumstances, and always subject to appropriate safeguards:</p>
              <ul className="list-none space-y-3 text-base text-muted-foreground leading-[2] font-sans pl-0 mt-4">
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Professional advisors:</strong> external legal counsel, tax advisors, auditors, and compliance consultants, all bound by professional secrecy and confidentiality obligations</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Regulatory authorities:</strong> Swiss financial regulators (FINMA), tax authorities, and law enforcement, strictly as required by applicable law</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Service providers:</strong> carefully selected IT, hosting, and cybersecurity providers who process data exclusively on our behalf under binding data processing agreements</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Banking partners:</strong> custodian banks and financial institutions involved in the execution of transactions, subject to Swiss banking secrecy</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">6. International Data Transfers</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Your personal data is primarily stored and processed within Switzerland, a jurisdiction recognized by the European Commission as providing an adequate level of data protection. In circumstances where data may need to be transferred to a country outside of Switzerland or the European Economic Area (EEA), we ensure that appropriate safeguards are in place. These may include EU Standard Contractual Clauses (SCCs), binding corporate rules, or reliance on an adequacy decision, ensuring that your data receives a level of protection equivalent to that provided under Swiss and EU law.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">7. Data Retention</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable legal, regulatory, and contractual obligations. In general:</p>
              <ul className="list-none space-y-3 text-base text-muted-foreground leading-[2] font-sans pl-0 mt-4">
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>Client and financial records are retained for a minimum of <strong className="text-foreground font-medium">10 years</strong> following the end of the business relationship, in compliance with Swiss financial regulations</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>AML/KYC documentation is retained for the duration required by the Swiss Anti-Money Laundering Act (AMLA)</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>Website analytics and cookie data are retained for a maximum of <strong className="text-foreground font-medium">24 months</strong></span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span>General inquiry data is retained for <strong className="text-foreground font-medium">3 years</strong> unless a business relationship is established</span></li>
              </ul>
              <p className="text-base text-muted-foreground leading-[2] font-sans mt-3">Upon expiry of the applicable retention period, personal data is securely deleted or anonymized.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">8. Cookies & Website Analytics</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Our website uses cookies and similar technologies to ensure proper functionality, enhance user experience, and analyze usage patterns. We categorize cookies as follows:</p>
              <ul className="list-none space-y-3 text-base text-muted-foreground leading-[2] font-sans pl-0 mt-4">
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Strictly necessary cookies:</strong> required for the website to function correctly. These cannot be disabled.</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Analytics cookies:</strong> help us understand how visitors interact with our website, enabling us to improve its structure and content. These are only activated with your consent.</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Preference cookies:</strong> remember your settings and preferences for a more personalized experience.</span></li>
              </ul>
              <p className="text-base text-muted-foreground leading-[2] font-sans mt-3">You can manage your cookie preferences at any time through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">9. Your Rights</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Under the Swiss Federal Act on Data Protection (FADP) and, where applicable, the EU General Data Protection Regulation (GDPR), you are entitled to the following rights in relation to your personal data:</p>
              <ul className="list-none space-y-3 text-base text-muted-foreground leading-[2] font-sans pl-0 mt-4">
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Right of access:</strong> obtain confirmation of whether we process your personal data and request a copy of such data</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Right to rectification:</strong> request correction of inaccurate or incomplete personal data</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Right to erasure:</strong> request the deletion of your data, subject to applicable legal retention obligations</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Right to restriction:</strong> restrict certain processing activities under specific circumstances</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Right to data portability:</strong> receive your data in a structured, commonly used, and machine-readable format</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Right to object:</strong> object to processing based on legitimate interests or direct marketing purposes</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Right to withdraw consent:</strong> withdraw consent at any time, without affecting the lawfulness of processing carried out prior to withdrawal</span></li>
              </ul>
              <p className="text-base text-muted-foreground leading-[2] font-sans mt-3">To exercise any of these rights, please contact our Privacy Office at <a href="mailto:privacy@multiinvest.com" className="text-accent hover:underline font-medium">privacy@multiinvest.com</a>. We will respond to your request within 30 days.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">10. Data Security</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Multi Investment implements comprehensive technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, loss, or destruction. These measures include, but are not limited to, encryption of data in transit and at rest, access controls based on the principle of least privilege, regular security audits, employee training on data protection, and business continuity and disaster recovery procedures. Our security framework is regularly reviewed and updated to reflect evolving threats and industry best practices.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">11. Supervisory Authority</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">If you believe that your data protection rights have been infringed, you have the right to lodge a complaint with the competent supervisory authority. In Switzerland, the relevant authority is the Federal Data Protection and Information Commissioner (FDPIC). If you are located within the European Union, you may also contact your local data protection authority. We encourage you to contact us first so that we may address your concerns directly.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">12. Changes to This Policy</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Multi Investment reserves the right to update or amend this Privacy Policy at any time to reflect changes in our practices, legal requirements, or regulatory guidance. Any material changes will be communicated through our website. We encourage you to review this page periodically to stay informed about how we protect your data.</p>
            </div>

            {/* Contact block */}
            <div className="space-y-4 pt-6 border-t border-border">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">13. Contact</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">For any privacy-related inquiries, data access requests, or to exercise your rights under applicable data protection laws, please contact our Privacy Office:</p>
              <div className="pl-6 border-l-2 border-accent/30 text-base text-muted-foreground leading-[2] font-sans py-3 bg-muted/30 rounded-r-lg pr-6">
                <p className="font-semibold text-foreground text-lg font-serif">Privacy Office</p>
                <p className="mt-1">Multi Investment Holding SA</p>
                <p>Chemin Rieu 12</p>
                <p>1208 Genève, Switzerland</p>
                <p className="mt-2">Email: <a href="mailto:privacy@multiinvest.com" className="text-accent hover:underline font-medium">privacy@multiinvest.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
