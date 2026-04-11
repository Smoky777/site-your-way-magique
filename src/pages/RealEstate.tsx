import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Globe, Landmark, Hotel, Home, BarChart3, Shield, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const focusAreas = [
  { icon: Home, title: "Luxury Residential", desc: "Prestigious villas and premium apartments in Europe's most coveted addresses — from Mediterranean coastlines to Alpine retreats.", features: ["Prime locations", "Bespoke interiors", "Concierge services"] },
  { icon: Landmark, title: "Commercial & Office", desc: "Class-A office spaces and mixed-use developments in major European financial centers.", features: ["Grade-A assets", "Long-term leases", "Strategic locations"] },
  { icon: Hotel, title: "Hospitality & Resort", desc: "Boutique hotels and resort developments across the Mediterranean.", features: ["Boutique hotels", "Resort developments", "Lifestyle assets"] },
];

const approach = [
  { icon: Shield, title: "Capital Preservation", desc: "Conservative underwriting with robust downside protection on every acquisition." },
  { icon: TrendingUp, title: "Value-Add Strategy", desc: "Active asset management to unlock hidden value through repositioning and renovation." },
  { icon: Globe, title: "Pan-European Reach", desc: "Deep local networks across Italy, Switzerland, France, Monaco, and beyond." },
  { icon: BarChart3, title: "Institutional Rigour", desc: "Institutional-grade due diligence, governance, and reporting standards." },
];

const RealEstate = () => {
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
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop" alt="Luxury European real estate" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,50%,5%)] via-[hsl(222,50%,5%)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,50%,5%)]/80 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/60 text-[11px] tracking-wider uppercase">Real Estate Division</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-[2.2rem] md:text-[3.5rem] font-serif font-bold text-white leading-[1.05] mb-5">
                  Prime European
                  <br />
                  <span className="text-gradient-gold italic font-normal text-[0.85em]">Properties.</span>
                </motion.h1>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="lg:col-span-4 lg:col-start-9 lg:pb-2">
                <p className="text-white/45 text-[14px] leading-[1.85] max-w-sm mb-6">
                  Acquiring, developing, and managing premium real estate assets across Europe's most prestigious locations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-6 h-11 text-[13px] font-semibold">
                      Explore <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas — asymmetric: 1 large + 2 stacked */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-md mb-14 md:mb-20">
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Asset Classes</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-[1.6rem] md:text-[2.3rem] font-serif font-bold text-primary-foreground leading-tight">
                Three pillars of
                <span className="block text-accent/80 italic font-normal text-[0.7em] mt-1">real estate excellence.</span>
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-5">
              {/* Featured first */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="lg:col-span-5 lg:row-span-2">
                <div className="bg-primary-foreground/[0.06] border border-primary-foreground/10 rounded-3xl p-8 h-full flex flex-col justify-end group hover:bg-primary-foreground/[0.1] transition-all">
                  <motion.div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-5" whileHover={{ rotate: 8 }}>
                    {(() => { const Icon = focusAreas[0].icon; return <Icon className="h-5 w-5 text-primary-foreground/70" />; })()}
                  </motion.div>
                  <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-2">{focusAreas[0].title}</h3>
                  <p className="text-primary-foreground/50 text-[13px] leading-relaxed mb-5">{focusAreas[0].desc}</p>
                  <div className="space-y-1.5">
                    {focusAreas[0].features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-[11px] text-primary-foreground/40">
                        <CheckCircle2 className="h-3 w-3" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Stacked */}
              {focusAreas.slice(1).map((area, i) => (
                <motion.div key={area.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }} className="lg:col-span-7">
                  <div className={`bg-primary-foreground/[0.04] border border-primary-foreground/10 hover:bg-primary-foreground/[0.08] transition-all group ${
                    i === 0 ? "rounded-2xl p-6" : "rounded-xl p-5"
                  }`}>
                    <div className="flex items-start gap-4">
                      <motion.div className={`rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0 ${i === 0 ? "w-11 h-11" : "w-9 h-9"}`} whileHover={{ rotate: -6 }}>
                        <area.icon className={`text-primary-foreground/70 ${i === 0 ? "h-5 w-5" : "h-4 w-4"}`} />
                      </motion.div>
                      <div>
                        <h3 className={`font-serif font-semibold text-primary-foreground mb-1 ${i === 0 ? "text-lg" : "text-base"}`}>{area.title}</h3>
                        <p className="text-primary-foreground/45 text-[13px] leading-relaxed mb-3">{area.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {area.features.map((f) => (
                            <span key={f} className="text-[10px] text-primary-foreground/35 bg-primary-foreground/[0.06] px-2 py-0.5 rounded-full">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach — text left, image right with offset */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Our Approach</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-[1.5rem] md:text-[2.1rem] font-serif font-bold text-foreground leading-tight mb-6">
                Discipline meets
                <span className="block text-accent italic font-normal text-[0.75em] mt-1">vision.</span>
              </motion.h2>

              <div className="space-y-4">
                {approach.map((a, i) => (
                  <motion.div key={a.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="flex gap-3 group">
                    <motion.div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary transition-all" whileHover={{ rotate: 6 }}>
                      <a.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                    <div>
                      <h4 className={`font-serif font-semibold text-foreground mb-0.5 ${i === 0 ? "text-[15px]" : "text-[14px]"}`}>{a.title}</h4>
                      <p className="text-muted-foreground text-[13px] leading-relaxed">{a.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-6 lg:col-start-7 lg:-mt-10">
              <div className="relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                  alt="Luxury property interior"
                  className="w-full h-[350px] md:h-[420px] object-cover shadow-xl"
                  style={{ borderRadius: "3px 24px 24px 3px" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 left-5 bg-card border border-border rounded-xl px-4 py-3 shadow-lg"
                >
                  <p className="text-lg font-serif font-bold text-foreground">Pan-European</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider">5 Countries</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA — editorial */}
      <section className="pb-10 md:pb-16 pt-4">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-7xl mx-auto relative overflow-hidden" style={{ borderRadius: "6px 28px 28px 6px" }}>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=500&fit=crop" alt="Real estate" className="w-full h-56 md:h-72 object-cover" />
            <div className="absolute inset-0 bg-[hsl(222,50%,5%)]/75" />
            <div className="absolute inset-0 flex items-end p-7 md:p-12">
              <div className="max-w-sm">
                <h2 className="text-[1.3rem] md:text-[1.7rem] font-serif font-bold text-white mb-2 leading-snug">
                  Invest in prime
                  <span className="block font-normal italic text-white/70 text-[0.8em]">European real estate.</span>
                </h2>
                <p className="text-white/40 mb-6 text-[13px]">Whether exploring co-investment opportunities or seeking bespoke property solutions.</p>
                <Link to="/contact">
                  <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold text-[13px] hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Start a Conversation <ArrowRight className="h-3.5 w-3.5" />
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

export default RealEstate;
