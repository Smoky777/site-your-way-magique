import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  { name: "Marco Aponte", role: "Chief Executive Officer", bio: "Leads the firm's vision, strategy, and overall operations. Background in international finance and family enterprise.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { name: "Elena Rossi", role: "Chief Operating Officer", bio: "Oversees day-to-day operations, process optimization, and organizational efficiency across all divisions.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
  { name: "Philippe Durand", role: "Chief Financial Officer", bio: "Manages financial planning, reporting, and capital allocation. Former MD at a leading Swiss private bank.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Sofia Marchetti", role: "Chief Strategy Officer", bio: "Drives long-term strategic initiatives, market expansion, and corporate development across Europe.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" },
  { name: "Thomas Weber", role: "Chief Investment Officer", bio: "Responsible for portfolio strategy, asset allocation, and investment thesis across all verticals.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face" },
  { name: "Luca Ferretti", role: "Portfolio Manager", bio: "Manages diversified portfolios, monitors performance, and executes investment decisions aligned with client objectives.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
  { name: "Claire Bernard", role: "Relationship Manager", bio: "Cultivates and maintains client relationships, ensuring personalized service and satisfaction for UHNW clients.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
  { name: "Antonio Greco", role: "Head of Real Estate", bio: "Leads the firm's flagship real estate division with 15+ years in European property development and acquisitions.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" },
  { name: "David Keller", role: "Head of Venture Capital", bio: "Leads seed and early-stage investments in technology, fintech, and deep tech across Europe.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face" },
  { name: "Nadia Laurent", role: "Compliance", bio: "Ensures regulatory compliance, risk management, and adherence to legal standards across all jurisdictions.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face" },
  { name: "Julien Moreau", role: "Chief Legal Officer", bio: "Directs all legal affairs, corporate governance, and regulatory matters across jurisdictions.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face" },
  { name: "Andreas Richter", role: "Chief Technology Officer", bio: "Leads technology infrastructure, digital innovation, and data-driven investment tools across the firm.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face" },
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
