import PageLayout from "@/components/PageLayout";

const TermsOfUse = () => {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-12 animate-on-scroll">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-accent mb-4">Legal</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">Terms of Use</h1>
            <div className="w-16 h-[2px] bg-accent mt-6" />
            <p className="text-muted-foreground text-sm mt-6 font-sans tracking-wide">Effective Date — January 2024</p>
          </div>

          <div className="space-y-10 animate-on-scroll">

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">1. General</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">These Terms of Use govern your access to and use of the website operated by Multi Investment Holding SA ("Multi Investment", "we", "us"), a company incorporated under the laws of Switzerland, with registered office at Chemin Rieu 12, 1208 Genève, Switzerland. By accessing this website, you agree to be bound by these terms.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">2. No Offer or Solicitation</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">Nothing on this website constitutes an offer, solicitation, or recommendation to buy or sell any investment products or securities. The information provided is for general informational purposes only and is not intended to be, nor should it be construed as, investment, legal, tax, or financial advice.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">3. Eligibility & Access Restrictions</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">The information on this website is not intended for distribution to, or use by, any person or entity in any jurisdiction where such distribution or use would be contrary to applicable law or regulation. Users are responsible for ensuring compliance with the laws of their respective jurisdictions.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">4. Accuracy of Information</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">While we endeavor to keep the information on this website accurate and up-to-date, Multi Investment makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information. We reserve the right to modify content at any time without prior notice.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">5. Intellectual Property</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">All content on this website — including but not limited to text, graphics, logos, images, design elements, and software — is the exclusive property of Multi Investment Holding SA or its licensors, and is protected by Swiss and international intellectual property laws. No content may be reproduced, distributed, or transmitted without our prior written consent.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">6. Third-Party Links</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">This website may contain links to third-party websites for your convenience. Multi Investment does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites. Access to such sites is at your own risk.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">7. Limitation of Liability</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">To the fullest extent permitted by law, Multi Investment Holding SA, its directors, officers, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your access to or use of this website, including but not limited to loss of profits, data, or other intangible losses.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">8. Indemnification</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">You agree to indemnify and hold harmless Multi Investment Holding SA and its affiliates from any claims, damages, losses, or expenses arising from your use of this website or your violation of these Terms of Use.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">9. Modifications</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">Multi Investment reserves the right to amend these Terms of Use at any time. Continued use of the website following any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">10. Governing Law & Jurisdiction</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">These Terms of Use shall be governed by and construed in accordance with the laws of Switzerland. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Geneva, Switzerland.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">11. Contact</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">For questions regarding these Terms of Use, please contact:</p>
              <div className="pl-5 border-l border-accent/40 text-sm text-muted-foreground leading-[1.8] font-sans">
                <p className="font-semibold text-foreground">Multi Investment Holding SA</p>
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

export default TermsOfUse;
