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
  { icon: Gem, title: "Estate Planning", desc: "Comprehensive succession planning and wealth transfer strategies.", features: ["Trust structuring", "Succession roadmaps", "Cross-border planning"] },
  { icon: LineChart, title: "Portfolio Advisory", desc: "Personalized investment advice aligned with your objectives.", features: ["Risk profiling", "Asset allocation", "Quarterly reviews"] },
  { icon: FileText, title: "Tax Optimization", desc: "Cross-border tax planning to maximize after-tax returns.", features: ["International tax strategy", "Holding structures", "Regulatory compliance"] },
  { icon: Users, title: "Family Office Services", desc: "Complete family office solutions including governance.", features: ["Family governance", "Philanthropy advisory", "Concierge services"] },
  { icon: Shield, title: "Risk & Insurance", desc: "Bespoke risk management and asset protection.", features: ["Asset protection", "Insurance advisory", "Liability planning"] },
  { icon: Heart, title: "Philanthropy Advisory", desc: "Strategic giving programs and impact measurement.", features: ["Foundation setup", "Impact measurement", "Donor-advised funds"] },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "In-depth understanding of your family's values, objectives, and vision.", icon: Users },
  { step: "02", title: "Strategy Design", desc: "Crafting a tailored wealth plan spanning investments, tax, estate.", icon: FileText },
  { step: "03", title: "Implementation", desc: "Disciplined execution across asset classes and jurisdictions.", icon: TrendingUp },
  { step: "04", title: "Ongoing Stewardship", desc: "Continuous monitoring, reporting, and adaptation.", icon: Shield },
];

const advantages = [
  { icon: Lock, title: "Confidentiality", desc: "Swiss-grade discretion and data protection." },
  { icon: Globe, title: "Global Reach", desc: "Access to international markets from Geneva to Singapore." },
  { icon: Briefcase, title: "Independent Advice", desc: "No proprietary products — 100% open architecture." },
  { icon: Building, title: "Institutional Infrastructure", desc: "Family office capabilities with institutional governance." },
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
            <img src={heroWealthImg} alt="Wealth Management" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,50%,5%)] via-[hsl(222,50%,5%)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,50%,5%)]/80 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/60 text-[11px] tracking-wider uppercase">Private Wealth Advisory</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-[2.2rem] md:text-[3.5rem] font-serif font-bold text-white leading-[1.05] mb-5">
                  Preserving &
                  <br />growing your
                  <span className="block italic text-white/70 font-normal text-[0.8em] mt-1">legacy.</span>
                </motion.h1>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="lg:col-span-4 lg:col-start-9 lg:pb-3">
                <p className="text-white/45 text-[14px] leading-[1.85] max-w-sm mb-6">
                  Holistic wealth advisory for ultra-high-net-worth families — spanning investments, estate planning, tax, and philanthropy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-6 h-11 text-[13px] font-semibold">
                      Schedule Consultation <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — varied sizes */}
      <section className="bg-card border-b border-border py-8 md:py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-baseline justify-between gap-8">
            {[
              { value: 98, suffix: "%", label: "Client Retention", size: "text-3xl md:text-4xl" },
              { value: 3, prefix: "CHF ", suffix: "B+", label: "Assets Advised", size: "text-2xl md:text-3xl" },
              { value: 25, suffix: "+", label: "Years Combined Exp.", size: "text-xl md:text-2xl" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className={`text-center flex-1 min-w-[100px] ${i === 1 ? "mt-2" : ""}`}>
                <motion.p className={`${s.size} font-serif font-bold text-foreground`} whileHover={{ scale: 1.06 }} transition={{ type: "spring", stiffness: 400 }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </motion.p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — bento style, not uniform grid */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Right-aligned header */}
            <div className="flex justify-end mb-14 md:mb-20">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="text-right max-w-md">
                <p className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Our Services</p>
                <h2 className="text-[1.5rem] md:text-[2.2rem] font-serif font-bold text-primary-foreground leading-tight">
                  Comprehensive wealth
                  <span className="block text-accent/80 italic font-normal text-[0.7em] mt-1">solutions.</span>
                </h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-12 gap-4">
              {services.map((s, i) => {
                const spans = ["md:col-span-5", "md:col-span-7", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-6 md:col-start-4"];
                const radii = ["rounded-3xl", "rounded-2xl", "rounded-xl", "rounded-2xl", "rounded-xl", "rounded-2xl"];
                const paddings = ["p-7", "p-6", "p-5", "p-6", "p-5", "p-6"];
                return (
                  <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }} className={spans[i]}>
                    <motion.div
                      className={`bg-primary-foreground/[0.05] border border-primary-foreground/10 ${radii[i]} ${paddings[i]} h-full hover:bg-primary-foreground/[0.1] transition-all group`}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors" whileHover={{ rotate: 6 }}>
                        <s.icon className="h-4 w-4 text-primary-foreground/70" />
                      </motion.div>
                      <h3 className={`font-serif font-semibold text-primary-foreground mb-1.5 ${i === 0 ? "text-lg" : i < 3 ? "text-base" : "text-[15px]"}`}>{s.title}</h3>
                      <p className="text-primary-foreground/45 text-[13px] leading-relaxed mb-4">{s.desc}</p>
                      <div className="space-y-1.5">
                        {s.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-[11px] text-primary-foreground/35">
                            <CheckCircle2 className="h-3 w-3" /><span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process — asymmetric timeline */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-md mb-14 md:mb-20">
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Our Process</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-[1.5rem] md:text-[2.1rem] font-serif font-bold text-foreground leading-tight">
                A disciplined approach
                <span className="block text-muted-foreground/60 italic font-normal text-[0.75em] mt-1">to your wealth.</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-12 gap-4">
              {processSteps.map((step, i) => {
                const cols = ["md:col-span-4", "md:col-span-5", "md:col-span-3", "md:col-span-6 md:col-start-4"];
                const offsets = ["", "md:mt-10", "md:-mt-4", "md:mt-6"];
                return (
                  <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }} className={`${cols[i]} ${offsets[i]}`}>
                    <motion.div
                      className={`bg-card border border-border h-full hover:shadow-md hover:border-accent/30 transition-all group ${
                        i === 0 ? "rounded-2xl p-7" : i === 1 ? "rounded-3xl p-8" : i === 2 ? "rounded-xl p-5" : "rounded-2xl p-7"
                      }`}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-serif font-bold text-border/50 group-hover:text-accent/40 transition-colors ${
                          i === 1 ? "text-5xl" : i === 2 ? "text-3xl" : "text-4xl"
                        }`}>{step.step}</span>
                        <motion.div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary transition-colors" whileHover={{ rotate: 8 }}>
                          <step.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                        </motion.div>
                      </div>
                      <h4 className={`font-serif font-semibold text-foreground mb-1.5 ${i === 1 ? "text-lg" : "text-[15px]"}`}>{step.title}</h4>
                      <p className="text-muted-foreground text-[13px] leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Multi — image left (reversed from before), text right */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-5">
              <div className="relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
                  alt="Personalized advisory"
                  className="w-full h-[340px] md:h-[400px] object-cover shadow-xl"
                  style={{ borderRadius: "20px 3px 3px 20px" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 right-5 bg-card border border-border rounded-xl px-4 py-3 shadow-lg"
                >
                  <p className="text-lg font-serif font-bold text-foreground">98%</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Retention</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-6 lg:col-start-7">
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Why Multi Invest</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-[1.5rem] md:text-[2.1rem] font-serif font-bold text-primary-foreground leading-tight mb-6">
                Built around
                <span className="italic font-normal text-primary-foreground/60 text-[0.85em] ml-2">you.</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="text-primary-foreground/45 text-[13.5px] leading-[1.8] mb-8 max-w-md">
                We are not a bank. We don't sell products. Our only mission is to serve your family's financial well-being with complete independence.
              </motion.p>

              <div className="space-y-4">
                {advantages.map((a, i) => (
                  <motion.div key={a.title} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }} className="flex gap-3 group">
                    <motion.div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/20 transition-colors" whileHover={{ rotate: -6 }}>
                      <a.icon className="h-4 w-4 text-primary-foreground/70" />
                    </motion.div>
                    <div>
                      <h4 className={`font-serif font-semibold text-primary-foreground mb-0.5 ${i === 0 ? "text-[15px]" : "text-[14px]"}`}>{a.title}</h4>
                      <p className="text-primary-foreground/40 text-[13px] leading-relaxed">{a.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-10 md:pb-16 pt-8">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-7xl mx-auto relative overflow-hidden" style={{ borderRadius: "6px 28px 28px 6px" }}>
            <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&h=500&fit=crop" alt="Office" className="w-full h-56 md:h-72 object-cover" />
            <div className="absolute inset-0 bg-[hsl(220,25%,6%)]/75" />
            <div className="absolute inset-0 flex items-end p-7 md:p-12">
              <div className="max-w-sm">
                <h2 className="text-[1.3rem] md:text-[1.7rem] font-serif font-bold text-white mb-2 leading-snug">
                  Ready to plan
                  <span className="block font-normal italic text-white/70 text-[0.8em]">your legacy?</span>
                </h2>
                <p className="text-white/40 mb-6 text-[13px]">Schedule a confidential meeting with our wealth advisory team.</p>
                <Link to="/contact">
                  <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold text-[13px] hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Get in Touch <ArrowRight className="h-3.5 w-3.5" />
                  </button>
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
