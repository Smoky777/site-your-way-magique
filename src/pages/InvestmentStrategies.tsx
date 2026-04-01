import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Briefcase, FileText, Zap } from "lucide-react";

const structures = [
  { icon: Briefcase, title: "Private Equity", desc: "Direct equity investments in established companies with strong growth potential and proven business models." },
  { icon: Rocket, title: "Seed & Early Stage", desc: "Venture capital investments from Seed Round through Series A/B in disruptive technology and innovation." },
  { icon: FileText, title: "Convertible Notes & SAFE", desc: "Flexible investment structures using Convertible Notes and SAFE agreements for early-stage companies." },
  { icon: Zap, title: "Straight Equity", desc: "Direct equity participation providing full ownership rights and alignment with company founders." },
];

const InvestmentStrategies = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Investment Strategies</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              From Seed to Scale
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              We invest across the entire company lifecycle — from seed-stage startups to mature enterprises — using flexible financial structures tailored to each opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {structures.map((s, i) => (
              <Card key={s.title} className={`animate-on-scroll delay-${i + 1} bg-card border-border`}>
                <CardContent className="p-8">
                  <s.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process */}
          <div className="mt-24 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 animate-on-scroll">Investment Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {["Sourcing", "Due Diligence", "Structuring", "Value Creation"].map((step, i) => (
                <div key={step} className={`animate-on-scroll delay-${i + 1}`}>
                  <div className="text-primary font-serif text-4xl font-bold mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <h4 className="text-foreground font-semibold mb-2">{step}</h4>
                  <p className="text-muted-foreground text-sm">
                    {i === 0 && "Proprietary deal flow through our global network and industry relationships."}
                    {i === 1 && "Rigorous analysis of financials, market position, team, and growth potential."}
                    {i === 2 && "Tailored deal structures optimizing risk-reward for all stakeholders."}
                    {i === 3 && "Active portfolio management driving operational and strategic improvements."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InvestmentStrategies;
