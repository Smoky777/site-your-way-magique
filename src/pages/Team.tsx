import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users } from "lucide-react";

const leadership = [
  { name: "Marco Aponte", role: "Chief Executive Officer", bio: "Leads the firm's vision, strategy, and overall operations. Background in international finance and family enterprise." },
  { name: "Elena Rossi", role: "Chief Operating Officer", bio: "Oversees day-to-day operations, process optimization, and organizational efficiency across all divisions." },
  { name: "Philippe Durand", role: "Chief Financial Officer", bio: "Manages financial planning, reporting, and capital allocation. Former MD at a leading Swiss private bank." },
  { name: "Sofia Marchetti", role: "Chief Strategy Officer", bio: "Drives long-term strategic initiatives, market expansion, and corporate development across Europe." },
  { name: "Thomas Weber", role: "Chief Investment Officer", bio: "Responsible for portfolio strategy, asset allocation, and investment thesis across all verticals." },
  { name: "Julien Moreau", role: "Chief Legal Officer", bio: "Directs all legal affairs, corporate governance, and regulatory matters across jurisdictions." },
  { name: "Andreas Richter", role: "Chief Technology Officer", bio: "Leads technology infrastructure, digital innovation, and data-driven investment tools across the firm." },
];

const specialists = [
  { name: "Luca Ferretti", role: "Portfolio Manager", bio: "Manages diversified portfolios, monitors performance, and executes investment decisions aligned with client objectives." },
  { name: "Claire Bernard", role: "Relationship Manager", bio: "Cultivates and maintains client relationships, ensuring personalized service and satisfaction for UHNW clients." },
  { name: "Antonio Greco", role: "Head of Real Estate", bio: "Leads the firm's flagship real estate division with 15+ years in European property development and acquisitions." },
  { name: "David Keller", role: "Head of Venture Capital", bio: "Leads seed and early-stage investments in technology, fintech, and deep tech across Europe." },
  { name: "Nadia Laurent", role: "Compliance", bio: "Ensures regulatory compliance, risk management, and adherence to legal standards across all jurisdictions." },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("");

const TeamCard = ({ member, index }: { member: { name: string; role: string; bio: string }; index: number }) => (
  <Card
    className={`animate-on-scroll delay-${(index % 4) + 1} bg-card border-border group hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5`}
  >
    <CardContent className="p-6 flex gap-5">
      <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-serif font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {getInitials(member.name)}
      </div>
      <div className="min-w-0">
        <h3 className="text-base font-serif font-semibold text-foreground">{member.name}</h3>
        <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
      </div>
    </CardContent>
  </Card>
);

const Team = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Our Team</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Leadership
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              Our team combines decades of experience in finance, real estate, and venture capital with a shared commitment to excellence and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-on-scroll">
              <p className="text-3xl font-serif font-bold text-primary">12</p>
              <p className="text-muted-foreground text-sm mt-1">Team Members</p>
            </div>
            <div className="animate-on-scroll delay-1">
              <p className="text-3xl font-serif font-bold text-primary">3</p>
              <p className="text-muted-foreground text-sm mt-1">Offices</p>
            </div>
            <div className="animate-on-scroll delay-2">
              <p className="text-3xl font-serif font-bold text-primary">8+</p>
              <p className="text-muted-foreground text-sm mt-1">Nationalities</p>
            </div>
            <div className="animate-on-scroll delay-3">
              <p className="text-3xl font-serif font-bold text-primary">100+</p>
              <p className="text-muted-foreground text-sm mt-1">Years Combined Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 animate-on-scroll">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-foreground">Executive Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {leadership.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Division Heads & Specialists */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 animate-on-scroll">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-foreground">Division Heads & Specialists</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {specialists.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
