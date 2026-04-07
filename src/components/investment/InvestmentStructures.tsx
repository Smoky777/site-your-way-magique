import { motion } from "framer-motion";
import { Briefcase, Rocket, FileText, Zap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const structures = [
  {
    icon: Briefcase,
    title: "Private Equity",
    desc: "Direct equity investments in established companies with strong growth potential and proven business models.",
    features: ["Majority & minority stakes", "Buy & build strategies", "Operational value creation"],
    tag: "Growth Capital",
    accent: "from-[hsl(43,50%,55%)] to-[hsl(43,45%,38%)]",
  },
  {
    icon: Rocket,
    title: "Seed & Early Stage",
    desc: "Venture capital investments from Seed Round through Series A/B in disruptive technology and innovation.",
    features: ["Pre-seed to Series B", "Tech & deep-tech focus", "Founder-first approach"],
    tag: "Venture Capital",
    accent: "from-[hsl(200,60%,50%)] to-[hsl(220,50%,40%)]",
  },
  {
    icon: FileText,
    title: "Convertible Notes & SAFE",
    desc: "Flexible investment structures using Convertible Notes and SAFE agreements for early-stage companies.",
    features: ["Valuation cap flexibility", "Discount mechanisms", "Pro-rata rights"],
    tag: "Flexible Structures",
    accent: "from-[hsl(160,40%,45%)] to-[hsl(180,35%,35%)]",
  },
  {
    icon: Zap,
    title: "Straight Equity",
    desc: "Direct equity participation providing full ownership rights and alignment with company founders.",
    features: ["Full voting rights", "Board representation", "Founder alignment"],
    tag: "Direct Ownership",
    accent: "from-[hsl(280,40%,50%)] to-[hsl(260,35%,40%)]",
  },
];

const InvestmentStructures = () => (
  <section className="py-32 relative overflow-hidden">
    {/* Subtle background accent */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-32">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">How We Invest</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5 leading-tight">
              Flexible structures,<br /><span className="text-gradient-gold italic">disciplined</span> execution
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              className="w-12 h-px bg-primary/30 mb-5" />
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
              className="text-muted-foreground text-sm leading-relaxed">
              Each investment is structured to align risk, return, and governance with the unique needs of the opportunity.
            </motion.p>
          </div>

          {/* Right cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {structures.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <Card className="bg-card border-border h-full hover:shadow-xl transition-all duration-500 group hover:border-primary/20 hover:-translate-y-1">
                  <CardContent className="p-7">
                    {/* Top gradient line */}
                    <div className={`w-full h-0.5 bg-gradient-to-r ${s.accent} rounded-full mb-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300 group-hover:scale-105">
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-primary/70 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">{s.tag}</span>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2.5">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                    <div className="space-y-2.5">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary/50 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentStructures;
