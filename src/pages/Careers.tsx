import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

const positions = [
  { title: "Chief Executive Officer", location: "Geneva", type: "Full-time", desc: "Lead the firm's vision, global strategy, and overall operations at the highest level." },
  { title: "Chief Operating Officer", location: "Geneva", type: "Full-time", desc: "Oversee day-to-day operations, process optimization, and organizational efficiency across all divisions." },
  { title: "Chief Financial Officer", location: "Geneva", type: "Full-time", desc: "Manage financial planning, reporting, capital allocation, and fiscal strategy for the firm." },
  { title: "Chief Strategy Officer", location: "Geneva", type: "Full-time", desc: "Drive long-term strategic initiatives, market expansion, and corporate development across Europe." },
  { title: "Chief Investment Officer", location: "Geneva", type: "Full-time", desc: "Define portfolio strategy, asset allocation, and investment thesis across all verticals." },
  { title: "Portfolio Manager", location: "Geneva", type: "Full-time", desc: "Manage diversified portfolios, monitor performance, and execute investment decisions aligned with client objectives." },
  { title: "Relationship Manager", location: "Monaco", type: "Full-time", desc: "Cultivate and maintain UHNW client relationships, ensuring personalized service and satisfaction." },
  { title: "Head of Real Estate", location: "Naples", type: "Full-time", desc: "Lead the real estate division, oversee acquisitions, development projects, and portfolio management." },
  { title: "Head of Venture Capital", location: "Geneva", type: "Full-time", desc: "Lead seed and early-stage investments in technology, fintech, and deep tech across Europe." },
  { title: "Compliance Officer", location: "Geneva", type: "Full-time", desc: "Ensure regulatory compliance, risk management, and adherence to legal standards across all jurisdictions." },
  { title: "Chief Legal Officer", location: "Geneva", type: "Full-time", desc: "Direct all legal affairs, corporate governance, and regulatory matters across jurisdictions." },
  { title: "Chief Technology Officer", location: "Geneva", type: "Full-time", desc: "Lead technology infrastructure, digital innovation, and data-driven investment tools." },
];

const Careers = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Careers</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Join Our Team
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              We're building a world-class investment firm and looking for exceptional talent to join us across our European offices.
            </p>
          </div>

          {/* Open Positions */}
          <div className="space-y-4 max-w-4xl mb-24">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 animate-on-scroll">Open Positions</h2>
            {positions.map((pos, i) => (
              <Card key={pos.title} className={`animate-on-scroll delay-${(i % 4) + 1} bg-card border-border hover:border-primary/50 transition-colors group cursor-pointer`}>
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{pos.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{pos.desc}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {pos.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {pos.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-2xl">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 animate-on-scroll">Submit Your Application</h2>
            <Card className="bg-card border-border animate-on-scroll">
              <CardContent className="p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">First Name</label>
                    <Input className="bg-secondary border-border" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Last Name</label>
                    <Input className="bg-secondary border-border" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <Input type="email" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Position of Interest</label>
                  <Input className="bg-secondary border-border" placeholder="e.g. Investment Analyst" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Cover Letter</label>
                  <textarea className="w-full h-32 rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
                </div>
                <Button className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90">
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
