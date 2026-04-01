import PageLayout from "@/components/PageLayout";

const TermsOfUse = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8 animate-on-scroll">Terms of Use</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p className="animate-on-scroll">Last updated: January 2024</p>
            <div className="animate-on-scroll space-y-4">
              <h2 className="text-xl font-serif text-foreground font-semibold">1. Acceptance of Terms</h2>
              <p>By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>

              <h2 className="text-xl font-serif text-foreground font-semibold">2. Disclaimer</h2>
              <p>The information on this website is for general informational purposes only and does not constitute investment advice, an offer, or solicitation of an offer to buy or sell securities.</p>

              <h2 className="text-xl font-serif text-foreground font-semibold">3. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Multi Investment and is protected by applicable intellectual property laws.</p>

              <h2 className="text-xl font-serif text-foreground font-semibold">4. Limitation of Liability</h2>
              <p>Multi Investment shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use this website.</p>

              <h2 className="text-xl font-serif text-foreground font-semibold">5. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of Switzerland.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsOfUse;
