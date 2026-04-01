import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart, Shield } from "lucide-react";

const strategies = [
  { icon: TrendingUp, title: "Equity Portfolios", desc: "Concentrated equity strategies targeting high-growth sectors across developed and emerging markets." },
  { icon: BarChart3, title: "Fixed Income", desc: "Investment-grade and high-yield bond portfolios optimized for risk-adjusted returns." },
  { icon: PieChart, title: "Multi-Asset", desc: "Balanced allocation strategies combining equities, bonds, alternatives, and real assets." },
  { icon: Shield, title: "Capital Preservation", desc: "Conservative strategies designed to protect wealth while generating steady income." },
];

const AssetManagement = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Asset Management</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Disciplined Strategies for Sustainable Growth
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              Our asset management division employs rigorous research and disciplined portfolio construction to deliver consistent, risk-adjusted returns across market cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {strategies.map((s, i) => (
              <Card key={s.title} className={`animate-on-scroll delay-${i + 1} bg-card border-border`}>
                <CardContent className="p-8">
                  <s.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AssetManagement;
