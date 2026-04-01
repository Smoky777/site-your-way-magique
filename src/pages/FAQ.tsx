import PageLayout from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is Multi Investment?", a: "Multi Investment is a global private investment firm founded in 2024 by the Aponte family. We manage over CHF 3 billion in assets across real estate, private equity, and venture capital." },
  { q: "What is the minimum investment?", a: "Our minimum ticket size is USD 10 million across all strategies. Please contact your relationship manager for specific details." },
  { q: "How do I become a client?", a: "You can reach out through our Contact page or request a consultation. Our team will guide you through the onboarding process, including KYC and suitability assessments." },
  { q: "What geographies do you invest in?", a: "Our primary focus is Europe, with a strong emphasis on Switzerland, Italy, France, and Monaco. We also selectively invest in opportunities globally." },
  { q: "Do you offer ESG-integrated investments?", a: "Yes. ESG criteria are integrated into our investment process across all strategies. We believe sustainable investing enhances long-term risk-adjusted returns." },
  { q: "What types of real estate do you invest in?", a: "We focus on luxury residential, Class-A commercial offices, mixed-use developments, and boutique hospitality projects across prime European locations." },
  { q: "How can I access the Client Portal?", a: "Existing clients receive login credentials from their relationship manager. If you've lost access, please contact our client services team." },
  { q: "Do you invest in startups?", a: "Yes. Through our venture capital arm, we invest from Seed Round through Series B in technology, fintech, and deep tech companies across Europe." },
  { q: "What structures do you use for investments?", a: "We use a range of structures including Private Equity, Straight Equity, Convertible Notes, and SAFE Notes — tailored to each opportunity." },
  { q: "Where are your offices located?", a: "We have offices in Geneva (headquarters), Monaco, and Naples." },
];

const FAQ = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="max-w-3xl animate-on-scroll">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground hover:text-primary text-left font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
