import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Asset Management",
    desc: "Diversified portfolio strategies across global markets with a focus on long-term capital appreciation.",
    path: "/asset-management",
  },
  {
    icon: Shield,
    title: "Wealth Management",
    desc: "Bespoke wealth planning for UHNW individuals and family offices with holistic advisory.",
    path: "/wealth-management",
  },
  {
    icon: Landmark,
    title: "Investment Strategies",
    desc: "Private Equity, Seed to Growth stage investments using innovative financial structures.",
    path: "/investment-strategies",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Prime real estate acquisitions across Europe — residential, commercial, and hospitality.",
    path: "/real-estate",
  },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground animate-on-scroll">
              Our Core Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <Link to={s.path} key={s.title}>
                <Card className={`animate-on-scroll delay-${i + 1} bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full`}>
                  <CardContent className="p-8">
                    <s.icon className="h-10 w-10 text-primary mb-5" />
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / ESG */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Our Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
                Investing with Purpose & Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 animate-on-scroll">
                At Multi Investment, we believe that sustainable growth comes from aligning financial returns with positive societal impact. Our ESG-integrated approach guides every investment decision.
              </p>
              <p className="text-muted-foreground leading-relaxed animate-on-scroll">
                From supporting innovative startups at seed stage to developing premier real estate across Europe, we build lasting value for our investors and communities.
              </p>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-secondary rounded-lg p-8 border border-border">
                <div className="space-y-6">
                  <div>
                    <p className="text-primary font-serif text-2xl font-bold">ESG First</p>
                    <p className="text-muted-foreground text-sm mt-1">Environmental, Social & Governance criteria integrated into all decisions</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-primary font-serif text-2xl font-bold">Long-Term Value</p>
                    <p className="text-muted-foreground text-sm mt-1">Patient capital approach focused on generational wealth creation</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-primary font-serif text-2xl font-bold">Family Legacy</p>
                    <p className="text-muted-foreground text-sm mt-1">Backed by the Aponte family's global business heritage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
            Ready to Explore Opportunities?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-on-scroll">
            Connect with our team to discuss how Multi Investment can help achieve your financial goals.
          </p>
          <Link to="/contact" className="animate-on-scroll inline-block">
            <button className="bg-gradient-gold text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
