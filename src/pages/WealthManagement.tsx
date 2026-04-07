import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Gem, LineChart, FileText, Users, ArrowRight, Shield, Globe, TrendingUp, CheckCircle2, Briefcase, Lock, Heart, Building } from "lucide-react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroWealthImg from "@/assets/hero-wealth-hq.jpg";

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

const services = [
  { icon: Gem, title: "Estate Planning", desc: "Comprehensive succession planning and wealth transfer strategies for multi-generational families.", features: ["Trust structuring", "Succession roadmaps", "Cross-border planning"] },
  { icon: LineChart, title: "Portfolio Advisory", desc: "Personalized investment advice aligned with your risk tolerance, timeline, and financial objectives.", features: ["Risk profiling", "Asset allocation", "Quarterly reviews"] },
  { icon: FileText, title: "Tax Optimization", desc: "Cross-border tax planning and structuring to maximize after-tax returns.", features: ["International tax strategy", "Holding structures", "Regulatory compliance"] },
  { icon: Users, title: "Family Office Services", desc: "Complete family office solutions including governance, philanthropy, and lifestyle management.", features: ["Family governance", "Philanthropy advisory", "Concierge services"] },
  { icon: Shield, title: "Risk & Insurance", desc: "Bespoke risk management solutions including asset protection, liability coverage, and insurance structuring.", features: ["Asset protection", "Insurance advisory", "Liability planning"] },
  { icon: Heart, title: "Philanthropy Advisory", desc: "Strategic giving programs, foundation setup, and impact measurement for meaningful charitable engagement.", features: ["Foundation setup", "Impact measurement", "Donor-advised funds"] },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "In-depth understanding of your family's values, objectives, risk tolerance, and long-term vision.", icon: Users },
  { step: "02", title: "Strategy Design", desc: "Crafting a tailored wealth plan spanning investments, tax, estate, and philanthropy.", icon: FileText },
  { step: "03", title: "Implementation", desc: "Disciplined execution across asset classes, jurisdictions, and structures.", icon: TrendingUp },
  { step: "04", title: "Ongoing Stewardship", desc: "Continuous monitoring, reporting, and adaptation as your life evolves.", icon: Shield },
];

const advantages = [
  { icon: Lock, title: "Confidentiality", desc: "Swiss-grade discretion and data protection across all interactions." },
  { icon: Globe, title: "Global Reach", desc: "Access to international markets, structures, and opportunities from Geneva to Singapore." },
  { icon: Briefcase, title: "Independent Advice", desc: "No proprietary products — 100% open architecture aligned with your interests." },
  { icon: Building, title: "Institutional Infrastructure", desc: "Family office capabilities with the governance and risk controls of an institution." },
];

const WealthManagement = () => {
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
              src={heroWealthImg}
              alt="Wealth Management"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,6%)] via-[hsl(210,40%,6%)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,40%,6%)]/80 to-transparent" />

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
                <span className="text-white/70 text-xs tracking-wider uppercase">Private Wealth Advisory</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-white leading-[1.1] mb-7">
                Preserving &<br />growing your<br /><span className="italic">legacy</span>.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-white/55 max-w-md mb-10 leading-relaxed">
                Holistic wealth advisory for ultra-high-net-worth families — spanning investments, estate planning, tax, and philanthropy.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-7 h-12 text-sm font-semibold">
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/[0.06] rounded-full px-7 h-12 text-sm border border-white/[0.12]">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Floating stats */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-16">
              {[
                { val: "CHF 3B+", label: "Assets Under Advisory", icon: TrendingUp },
                { val: "10+", label: "Family Clients", icon: Users },
                { val: "USD 10M", label: "Minimum Engagement", icon: Lock },
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

      {/* Animated stats bar */}
      <section className="bg-card border-b border-border py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: 98, suffix: "%", label: "Client Retention" },
              { value: 3, prefix: "CHF ", suffix: "B+", label: "Assets Advised" },
              { value: 25, suffix: "+", label: "Years Combined Exp." },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} className="text-center">
                <p className="text-3xl font-serif font-bold text-foreground">
                  <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-primary-foreground/70 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Services</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">Comprehensive wealth solutions</motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              className="text-primary-foreground/60 text-sm mb-14 max-w-xl">Every aspect of your financial life, managed with institutional rigor and personal attention.</motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}>
                  <Card className="bg-primary-foreground/10 border-primary-foreground/15 h-full hover:bg-primary-foreground/15 transition-all duration-300 group">
                    <CardContent className="p-7">
                      <div className="w-11 h-11 rounded-xl bg-primary-foreground/15 flex items-center justify-center mb-5 group-hover:bg-primary-foreground/25 transition-colors">
                        <s.icon className="h-5 w-5 text-primary-foreground/80" />
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-2">{s.title}</h3>
                      <p className="text-primary-foreground/55 text-sm leading-relaxed mb-5">{s.desc}</p>
                      <div className="space-y-2">
                        {s.features.map((f) => (
                           <div key={f} className="flex items-center gap-2 text-xs text-primary-foreground/50">
                             <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground/40" />
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
                className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Process</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">A disciplined approach to your wealth</motion.h2>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                className="text-muted-foreground text-sm max-w-lg mx-auto">From discovery to ongoing stewardship — a structured methodology refined over decades.</motion.p>
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

      {/* The Multi Advantage */}
      <section className="py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="text-primary-foreground/70 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Why Multi Invest</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                  className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">Built around <span className="italic text-primary-foreground/80">you</span></motion.h2>
                <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                  className="text-primary-foreground/60 text-sm leading-relaxed mb-10">
                  We are not a bank. We don't sell products. Our only mission is to serve your family's financial well-being with complete independence, Swiss discretion, and institutional-grade infrastructure.
                </motion.p>

                <div className="space-y-5">
                  {advantages.map((a, i) => (
                    <motion.div key={a.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-primary-foreground/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/25 transition-colors">
                        <a.icon className="h-4 w-4 text-primary-foreground/80" />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-primary-foreground mb-0.5">{a.title}</h4>
                        <p className="text-primary-foreground/55 text-sm leading-relaxed">{a.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
                  alt="Personalized advisory"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl p-5 shadow-lg">
                  <p className="text-2xl font-serif font-bold text-foreground">98%</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Client retention rate</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-primary/10 border border-primary/20 rounded-xl px-4 py-2">
                  <p className="text-xs font-semibold text-primary">Open Architecture</p>
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
            <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&h=500&fit=crop" alt="Office" className="w-full h-72 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-[hsl(220,25%,6%)]/75 flex items-center justify-center">
              <div className="text-center px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to plan your legacy?</h2>
                <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">Schedule a confidential meeting with our wealth advisory team to discuss your family's unique needs.</p>
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8 h-12 text-sm font-semibold">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
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

export default WealthManagement;