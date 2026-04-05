import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Anchor, TrendingUp, Globe, Shield, Users, Building2, Ship, Landmark } from "lucide-react";

const milestones = [
  { year: "1970", text: "Gianluigi Aponte founds the Mediterranean Shipping Company (MSC) in Naples with a single chartered cargo vessel." },
  { year: "1980s", text: "MSC expands rapidly across Atlantic and Mediterranean trade routes, establishing a global network of shipping lines." },
  { year: "2003", text: "Launch of MSC Cruises, which grows to become the world's third-largest cruise operator with a fleet of luxury liners." },
  { year: "2014", text: "Diego Aponte assumes the role of President of MSC Group, driving an era of unprecedented expansion and modernization." },
  { year: "2022", text: "MSC surpasses Maersk to become the world's largest container shipping line. The Aponte family fortune surpasses USD 30 billion." },
  { year: "2024", text: "The Aponte family establishes Multi Investment in Geneva — a dedicated family office for strategic wealth diversification and capital deployment." },
];

const values = [
  { icon: Anchor, title: "Maritime Heritage", desc: "Built on five decades of leadership in global shipping, our corporate culture reflects the discipline, resilience, and ambition that transformed MSC into an industrial titan." },
  { icon: TrendingUp, title: "Long-Term Vision", desc: "Just as MSC was built ship by ship over half a century, we pursue investments that compound value across generations — never chasing short-term gains." },
  { icon: Shield, title: "Capital Preservation", desc: "Protecting the family's legacy is at the heart of every decision. We pair conservative risk management with rigorous due diligence and institutional-grade execution." },
  { icon: Globe, title: "Global Reach", desc: "Headquartered in Geneva with offices in Monaco and Naples, we operate at the crossroads of European finance with a worldwide network of opportunities and partners." },
];

const keyFigures = [
  { value: "CHF 3B+", label: "Assets Under Management" },
  { value: "1970", label: "MSC Founded" },
  { value: "800+", label: "Vessels in MSC Fleet" },
  { value: "155", label: "Countries Served" },
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm tracking-[0.3em] uppercase mb-3"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 leading-tight"
            >
              The Legacy Behind <br className="hidden md:block" />
              <span className="text-primary">Multi Investment</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
            >
              Multi Investment was born from the vision of the Aponte family — one of Europe's most powerful entrepreneurial dynasties — to structure, diversify, and grow a fortune built over five decades of excellence in global maritime trade.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Figures Bar */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFigures.map((fig, i) => (
              <motion.div
                key={fig.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <p className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-1">{fig.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{fig.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gianluigi Aponte */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Ship className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Gianluigi Aponte</h2>
                  <p className="text-primary text-sm font-medium">Founder of MSC Group</p>
                </div>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Born in <span className="text-foreground font-semibold">1940 in Sant'Agnello</span>, on Italy's Amalfi Coast, Gianluigi Aponte began his career as a maritime officer before founding the <span className="text-foreground font-semibold">Mediterranean Shipping Company (MSC)</span> in 1970 with a single chartered cargo vessel. What started as a modest shipping operation in the Bay of Naples would become the world's largest container shipping line.
                </p>
                <p>
                  Through exceptional strategic vision and an acute sense of market opportunity, Aponte built MSC into a <span className="text-primary font-semibold">global logistics powerhouse</span> — surpassing Denmark's Maersk in 2022 to claim the top position in container shipping. Today, MSC operates a fleet of over <span className="text-foreground font-semibold">800 vessels</span> serving more than 500 ports across 155 countries, with annual revenues exceeding USD 80 billion at peak.
                </p>
                <p>
                  Beyond freight, Gianluigi Aponte diversified into <span className="text-foreground font-semibold">MSC Cruises</span> — now the world's third-largest cruise operator — as well as port terminals (Terminal Investment Limited), logistics infrastructure, and luxury hospitality. The Aponte family fortune is estimated at over <span className="text-primary font-semibold">USD 30 billion</span>, making them one of the wealthiest families in Italy and Europe — a testament to half a century of disciplined, family-driven empire building.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diego Aponte */}
      <section className="py-16 pt-0">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Diego Aponte</h2>
                  <p className="text-primary text-sm font-medium">President of MSC Group</p>
                </div>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">Diego Aponte</span>, son of the founder, joined MSC in the early 1990s and rose to become <span className="text-foreground font-semibold">President of the MSC Group</span> in 2014. Under his leadership, the company entered a phase of unprecedented growth — doubling its shipping capacity, investing billions in next-generation eco-friendly vessels, and expanding its terminal portfolio across every major trade corridor.
                </p>
                <p>
                  Diego has been the driving force behind MSC's digital transformation, overseeing the adoption of advanced logistics technologies, AI-driven supply chain optimization, and sustainable shipping practices aligned with the International Maritime Organization's decarbonization targets.
                </p>
                <p>
                  Recognizing that a fortune of this magnitude requires dedicated, institutional-grade management, Diego spearheaded the creation of <span className="text-primary font-semibold">Multi Investment in 2024</span> — a Geneva-based family office designed to strategically diversify the Aponte family's wealth beyond maritime into <span className="text-foreground font-semibold">real estate, private equity, and venture capital</span>, ensuring the preservation and growth of the family legacy for generations to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Journey</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                From One Ship to a Global Empire
              </h2>
            </motion.div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-6 pb-8 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-2" />
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-primary font-serif font-bold text-lg">{m.year}</span>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-10 md:p-12 text-center"
            >
              <Landmark className="h-8 w-8 text-primary mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-5">Our Mission</h2>
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
                "To build and preserve multigenerational wealth through disciplined capital deployment, strategic diversification, and an unwavering commitment to excellence — guided by the values of integrity, sustainability, and the enduring legacy of the Aponte family."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Our Values
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-serif text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
