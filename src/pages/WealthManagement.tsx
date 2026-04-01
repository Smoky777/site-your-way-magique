import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Gem, LineChart, FileText, Users } from "lucide-react";

const services = [
  { icon: Gem, title: "Estate Planning", desc: "Comprehensive succession planning and wealth transfer strategies for multi-generational families." },
  { icon: LineChart, title: "Portfolio Advisory", desc: "Personalized investment advice aligned with your risk tolerance, timeline, and financial objectives." },
  { icon: FileText, title: "Tax Optimization", desc: "Cross-border tax planning and structuring to maximize after-tax returns." },
  { icon: Users, title: "Family Office Services", desc: "Complete family office solutions including governance, philanthropy, and lifestyle management." },
];

const WealthManagement = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Wealth Management</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Preserving & Growing Your Legacy
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              Tailored wealth management solutions for ultra-high-net-worth individuals and family offices seeking holistic advisory and bespoke financial planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {services.map((s, i) => (
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

export default WealthManagement;
