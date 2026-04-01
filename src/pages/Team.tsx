import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  { name: "Marco Aponte", role: "Managing Director", bio: "Oversees global investment strategy and firm operations. Background in international finance and family enterprise.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { name: "Elena Rossi", role: "Head of Real Estate", bio: "Leads the firm's flagship real estate division with 15+ years in European property development and acquisitions.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
  { name: "Philippe Durand", role: "Chief Investment Officer", bio: "Responsible for portfolio strategy and asset allocation. Former MD at a leading Swiss private bank.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Sofia Marchetti", role: "Head of Wealth Management", bio: "Advises UHNW clients on comprehensive wealth planning, tax optimization, and family governance.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" },
  { name: "Thomas Weber", role: "Head of Venture Capital", bio: "Leads seed and early-stage investments in technology, fintech, and deep tech across Europe.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face" },
  { name: "Claire Bernard", role: "General Counsel", bio: "Manages legal affairs, compliance, and regulatory matters across all jurisdictions.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

const Team = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Our Team</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Leadership
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              Our team combines decades of experience in finance, real estate, and venture capital with a shared commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((m, i) => (
              <Card key={m.name} className={`animate-on-scroll delay-${(i % 4) + 1} bg-card border-border overflow-hidden group`}>
                <div className="h-64 overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-foreground">{m.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{m.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
