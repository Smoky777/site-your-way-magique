import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Briefcase, FileText, Zap, ArrowRight, TrendingUp, Search, Settings, BarChart3, CheckCircle2, Target, Shield, Globe, Users } from "lucide-react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const structures = [
  {
    icon: Briefcase,
    title: "Private Equity",
    desc: "Direct equity investments in established companies with strong growth potential and proven business models.",
    features: ["Majority & minority stakes", "Buy & build strategies", "Operational value creation"],
    tag: "Growth Capital",
  },
  {
    icon: Rocket,
    title: "Seed & Early Stage",
    desc: "Venture capital investments from Seed Round through Series A/B in disruptive technology and innovation.",
    features: ["Pre-seed to Series B", "Tech & deep-tech focus", "Founder-first approach"],
    tag: "Venture Capital",
  },
  {
    icon: FileText,
    title: "Convertible Notes & SAFE",
    desc: "Flexible investment structures using Convertible Notes and SAFE agreements for early-stage companies.",
    features: ["Valuation cap flexibility", "Discount mechanisms", "Pro-rata rights"],
    tag: "Flexible Structures",
  },
  {
    icon: Zap,
    title: "Straight Equity",
    desc: "Direct equity participation providing full ownership rights and alignment with company founders.",
    features: ["Full voting rights", "Board representation", "Founder alignment"],
    tag: "Direct Ownership",
  },
];

const processSteps = [
  { step: "01", title: "Sourcing", desc: "Proprietary deal flow through our global network, industry relationships, and deep sector expertise.", icon: Search },
  { step: "02", title: "Due Diligence", desc: "Rigorous analysis of financials, market position, team capabilities, and long-term growth potential.", icon: Target },
  { step: "03", title: "Structuring", desc: "Tailored deal structures optimizing risk-reward profiles for all stakeholders involved.", icon: Settings },
  { step: "04", title: "Value Creation", desc: "Active portfolio management driving operational excellence and strategic improvements.", icon: BarChart3 },
];

const principles = [
  { icon: Shield, title: "Capital Preservation", desc: "Downside protection is paramount — we structure every deal with robust risk mitigation." },
  { icon: Globe, title: "Global Perspective", desc: "Cross-border expertise spanning Europe, Middle East, and emerging markets." },
  { icon: Users, title: "Founder Partnership", desc: "We invest alongside founders, not above them — true alignment of interests." },
  { icon: TrendingUp, title: "Long-Term Vision", desc: "Patient capital with a generational outlook — we build value, not quick exits." },
];

const InvestmentStrategies = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <PageLayout>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative min-h-[85vh] flex items-end pb-24">
          <motion.div className="absolute inset-0" style={{ scale: heroScale, opacity: heroOpacity }}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
              alt="Investment Strategies"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,4%)] via-[hsl(220,25%,4%)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,4%)]/80 to-transparent" />

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.08] rounded-full px-5 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70 text-xs tracking-wider uppercase">Investment Strategies</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-white leading-[1.1] mb-7">
                From Seed<br />to <span className="text-gradient-gold italic">Scale</span>.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-white/55 max-w-md mb-10 leading-relaxed">
                We invest across the entire company lifecycle — from seed-stage startups to mature enterprises — using flexible structures tailored to each opportunity.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-7 h-12 text-sm font-semibold">
                    Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/[0.06] rounded-full px-7 h-12 text-sm border border-white/[0.12]">
                    Our Approach
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Floating stats */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-16">
              {[
                { val: "4", label: "Investment Structures", icon: Briefcase },
                { val: "Seed → Growth", label: "Full Lifecycle", icon: TrendingUp },
                { val: "Global", label: "Deal Sourcing", icon: Globe },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08, type: "spring", damping: 20 }}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.07] transition-colors">
                  <s.icon className="h-4 w-4 text-[hsl(43,50%,60%)] mb-3" />
                  <p className="text-xl font-serif font-bold text-white">{s.val}</p>
                  <p className="text-white/35 text-[11px] uppercase tracking-wider mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Structures */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">How We Invest</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Flexible structures, disciplined execution</motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              className="text-muted-foreground text-sm mb-14 max-w-xl">Each investment is structured to align risk, return, and governance with the unique needs of the opportunity.</motion.p>

            <div className="grid md:grid-cols-2 gap-5">
              {structures.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}>
                  <Card className="bg-card border-border h-full hover:shadow-lg transition-all duration-300 group hover:border-primary/20">
                    <CardContent className="p-7">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          <s.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-primary/70 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">{s.tag}</span>
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                      <div className="space-y-2">
                        {s.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary/60" />
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
      </section>

      {/* Process timeline */}
      <section className="py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Process</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">From deal flow to value creation</motion.h2>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                className="text-muted-foreground text-sm max-w-lg mx-auto">A rigorous, repeatable methodology refined across dozens of investments and multiple market cycles.</motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group">
                  <div className="bg-card border border-border rounded-2xl p-7 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-3xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{step.step}</span>
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Principles */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Philosophy</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                  className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Conviction-driven, <span className="text-gradient-gold italic">patient</span> capital</motion.h2>
                <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                  className="text-muted-foreground text-sm leading-relaxed mb-10">
                  We take concentrated positions in businesses we deeply understand. Our edge is patience, operational expertise, and a network that opens doors others can't reach.
                </motion.p>

                <div className="space-y-5">
                  {principles.map((a, i) => (
                    <motion.div key={a.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                        <a.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-foreground mb-0.5">{a.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="relative">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="Investment analysis"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl p-5 shadow-lg">
                  <p className="text-2xl font-serif font-bold text-foreground">4</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Investment structures</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-primary/10 border border-primary/20 rounded-xl px-4 py-2">
                  <p className="text-xs font-semibold text-primary">Seed to Growth</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=500&fit=crop" alt="Partnership" className="w-full h-72 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-[hsl(220,25%,6%)]/75 flex items-center justify-center">
              <div className="text-center px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Let's build together</h2>
                <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">Whether you're a founder seeking capital or an investor exploring co-investment opportunities, we'd love to connect.</p>
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8 h-12 text-sm font-semibold">
                    Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InvestmentStrategies;
