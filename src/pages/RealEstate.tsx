import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Globe, Landmark, Hotel, Home, BarChart3, Shield, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const focusAreas = [
  {
    icon: Home,
    title: "Luxury Residential",
    desc: "Prestigious villas and premium apartments in Europe's most coveted addresses — from Mediterranean coastlines to Alpine retreats.",
    features: ["Prime locations", "Bespoke interiors", "Concierge services"],
  },
  {
    icon: Landmark,
    title: "Commercial & Office",
    desc: "Class-A office spaces and mixed-use developments in major European financial centers with long-term institutional tenants.",
    features: ["Grade-A assets", "Long-term leases", "Strategic locations"],
  },
  {
    icon: Hotel,
    title: "Hospitality & Resort",
    desc: "Boutique hotels and resort developments across the Mediterranean, combining lifestyle appeal with strong yield potential.",
    features: ["Boutique hotels", "Resort developments", "Lifestyle assets"],
  },
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
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
              alt="Luxury European real estate"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,4%)] via-[hsl(220,25%,4%)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,4%)]/80 to-transparent" />

          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.08] rounded-full px-5 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70 text-xs tracking-wider uppercase">Real Estate Division</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-white leading-[1.1] mb-7">
                Prime European<br /><span className="text-gradient-gold italic">Properties</span>.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-white/55 max-w-md mb-10 leading-relaxed">
                Acquiring, developing, and managing premium real estate assets across Europe's most prestigious locations — from the Mediterranean to the Alps.
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

          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Asset Classes</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Three pillars of real estate excellence</motion.h2>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                className="text-muted-foreground text-sm max-w-lg mx-auto">Each asset class is managed with deep sector expertise, local knowledge, and institutional-grade governance.</motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {focusAreas.map((area, i) => (
                <motion.div key={area.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}>
                  <Card className="bg-card border-border h-full hover:shadow-lg transition-all duration-300 group hover:border-primary/20">
                    <CardContent className="p-7">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                        <area.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{area.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{area.desc}</p>
                      <div className="space-y-2">
                        {area.features.map((f) => (
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

      {/* Investment Approach */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Approach</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                  className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Discipline meets <span className="text-gradient-gold italic">vision</span></motion.h2>
                <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                  className="text-muted-foreground text-sm leading-relaxed mb-10">
                  We combine institutional rigour with entrepreneurial agility — identifying prime assets, executing with precision, and managing for long-term value creation.
                </motion.p>

                <div className="space-y-5">
                  {approach.map((a, i) => (
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
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                  alt="Luxury property interior"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl p-5 shadow-lg">
                  <p className="text-2xl font-serif font-bold text-foreground"><AnimatedCounter value={26} suffix="k" /></p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">m² managed</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-primary/10 border border-primary/20 rounded-xl px-4 py-2">
                  <p className="text-xs font-semibold text-primary">5 Countries</p>
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
            className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-navy py-16 md:py-20">
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }} />
            <div className="relative flex items-center justify-center">
              <div className="text-center px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Invest in prime European real estate</h2>
                <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">Whether you're exploring co-investment opportunities or seeking bespoke property solutions, we'd love to hear from you.</p>
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

export default RealEstate;