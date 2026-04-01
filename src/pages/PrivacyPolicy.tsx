import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8 animate-on-scroll">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p className="animate-on-scroll">Last updated: January 2024</p>
            <div className="animate-on-scroll space-y-4">
              <h2 className="text-xl font-serif text-foreground font-semibold">1. Information We Collect</h2>
              <p>We collect personal information that you provide directly, including your name, email address, phone number, and any other information you choose to provide when contacting us or using our services.</p>

              <h2 className="text-xl font-serif text-foreground font-semibold">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>

              <h2 className="text-xl font-serif text-foreground font-semibold">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

              <h2 className="text-xl font-serif text-foreground font-semibold">4. Your Rights</h2>
              <p>Under applicable data protection laws, you have the right to access, correct, delete, or restrict the processing of your personal information.</p>

              <h2 className="text-xl font-serif text-foreground font-semibold">5. Contact</h2>
              <p>For privacy-related inquiries, please contact us at privacy@multi-investment.com or visit our offices in Geneva, Monaco, or Naples.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
