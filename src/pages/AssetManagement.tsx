import PageLayout from "@/components/PageLayout";
import mihBoardroom from "@/assets/mih-boardroom.png";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart, Shield, ArrowRight, CheckCircle2, Globe, Layers, Target, Briefcase, ArrowUpRight, Sparkles, Lock } from "lucide-react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart as RPieChart, Pie, Cell } from "recharts";

// Animated counter
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const performanceData = [
  { year: "2024 Q1", equity: 4.2, fixed: 1.8, multi: 3.1 },
  { year: "Q2", equity: 7.8, fixed: 3.2, multi: 5.4 },
  { year: "Q3", equity: 6.1, fixed: 4.1, multi: 5.8 },
  { year: "Q4", equity: 11.3, fixed: 5.0, multi: 8.2 },
  { year: "2025 Q1", equity: 14.5, fixed: 5.8, multi: 10.1 },
  { year: "Q2", equity: 12.8, fixed: 6.5, multi: 11.4 },
];

const allocationData = [
  { name: "Equities", value: 40, color: "hsl(43, 45%, 42%)" },
  { name: "Fixed Income", value: 25, color: "hsl(220, 25%, 50%)" },
  { name: "Real Estate", value: 20, color: "hsl(43, 35%, 60%)" },
  { name: "Alternatives", value: 15, color: "hsl(220, 15%, 35%)" },
];

const strategies = [
  { icon: TrendingUp, title: "Equity Portfolios", desc: "Concentrated equity strategies targeting high-growth sectors across developed and emerging markets.", returns: "12-18%", risk: "Medium-High", minInvestment: "USD 10M", highlight: "Our flagship strategy delivering above-benchmark returns since inception." },
  { icon: BarChart3, title: "Fixed Income", desc: "Investment-grade and high-yield bond portfolios optimized for risk-adjusted returns.", returns: "4-7%", risk: "Low-Medium", minInvestment: "USD 10M", highlight: "Capital preservation with consistent yield generation." },
  { icon: PieChart, title: "Multi-Asset", desc: "Balanced allocation strategies combining equities, bonds, alternatives, and real assets.", returns: "8-12%", risk: "Medium", minInvestment: "USD 10M", highlight: "All-weather portfolio designed for any market environment." },
  { icon: Shield, title: "Capital Preservation", desc: "Conservative strategies designed to protect wealth while generating steady income.", returns: "3-5%", risk: "Low", minInvestment: "USD 10M", highlight: "Ideal for wealth protection with inflation-beating returns." },
];

const processSteps = [
  { step: "01", title: "Research & Analysis", desc: "Deep fundamental and quantitative analysis across global markets, sectors, and asset classes.", icon: Target },
  { step: "02", title: "Portfolio Construction", desc: "Disciplined allocation based on risk budgeting, correlation analysis, and client objectives.", icon: Layers },
  { step: "03", title: "Risk Management", desc: "Continuous monitoring with dynamic hedging, stress testing, and drawdown controls.", icon: Shield },
  { step: "04", title: "Reporting & Review", desc: "Transparent quarterly reporting with performance attribution and strategy reassessment.", icon: BarChart3 },
];

const AssetManagement = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const [activeStrategy, setActiveStrategy] = useState(0);

  return (
    <PageLayout>
      {/* Hero with video + parallax */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative min-h-[85vh] flex items-end pb-24">
          <motion.div className="absolute inset-0" style={{ scale: heroScale, opacity: heroOpacity }}>
            <video
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&h=1080&fit=crop"
            >
              <source src="https://videos.pexels.com/video-files/6774917/6774917-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,6%)] via-[hsl(210,40%,6%)]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,40%,6%)]/80 to-transparent" />

          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6"
                >
                  <TrendingUp className="h-3.5 w-3.5 text-[hsl(43,50%,60%)]" />
                  <span className="text-white/60 text-xs tracking-wider uppercase">Asset Management</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  className="text-4xl md:text-5xl lg:text-[3.8rem] font-serif font-bold text-white leading-[1.08] mb-6"
                >
                  Disciplined strategies
                  <br />
                  for <span className="italic text-gradient-gold">sustainable</span>
                  <br />
                  growth.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-white/50 text-base max-w-md leading-relaxed"
                >
                  Rigorous research and portfolio construction delivering consistent, risk-adjusted returns across market cycles.
                </motion.p>
              </div>

              {/* Hero stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:grid grid-cols-2 gap-3"
              >
                {[
                  { val: "CHF 3B+", label: "Assets Under Management", icon: TrendingUp },
                  { val: "15+", label: "Investment Professionals", icon: Briefcase },
                  { val: "40+", label: "Markets Covered", icon: Globe },
                  { val: "USD 10M", label: "Minimum Ticket Size", icon: Lock },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.08, type: "spring", damping: 20 }}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.07] transition-colors"
                  >
                    <s.icon className="h-4 w-4 text-[hsl(43,50%,60%)] mb-3" />
                    <p className="text-xl font-serif font-bold text-white">{s.val}</p>
                    <p className="text-white/35 text-[11px] uppercase tracking-wider mt-0.5">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated stats bar */}
      <section className="bg-card border-b border-border py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: 14, suffix: ".5%", label: "Equity YTD Return" },
              { value: 3, prefix: "CHF ", suffix: "B+", label: "AUM" },
              { value: 98, suffix: "%", label: "Client Retention" },
              { value: 12, suffix: "+", label: "Yrs Avg Experience" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl font-serif font-bold text-foreground">
                  <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance + Allocation */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-3">
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-3">Performance Overview</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                  className="text-3xl font-serif font-bold text-foreground mb-3">Cumulative returns</motion.h2>
                <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                  className="text-muted-foreground text-sm mb-8 max-w-lg">Strategy performance since inception, showing our consistent delivery across varying market conditions.</motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-5 mb-5 text-xs">
                    <span className="flex items-center gap-2"><span className="w-2.5 h-0.5 rounded-full bg-primary" /> Equity</span>
                    <span className="flex items-center gap-2"><span className="w-2.5 h-0.5 rounded-full bg-muted-foreground" /> Fixed Income</span>
                    <span className="flex items-center gap-2"><span className="w-2.5 h-0.5 rounded-full" style={{ backgroundColor: "hsl(43, 35%, 60%)" }} /> Multi-Asset</span>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorEq" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(43, 45%, 42%)" stopOpacity={0.25} />
                          <stop offset="100%" stopColor="hsl(43, 45%, 42%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                      <Tooltip contentStyle={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(40,15%,88%)", borderRadius: "12px", fontSize: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }} formatter={(value: number) => [`${value}%`]} />
                      <Area type="monotone" dataKey="equity" stroke="hsl(43, 45%, 42%)" fill="url(#colorEq)" strokeWidth={2.5} dot={{ r: 3, fill: "hsl(43, 45%, 42%)" }} />
                      <Area type="monotone" dataKey="fixed" stroke="hsl(220, 10%, 60%)" fill="transparent" strokeWidth={1.5} strokeDasharray="5 5" />
                      <Area type="monotone" dataKey="multi" stroke="hsl(43, 35%, 60%)" fill="transparent" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                  <p className="text-[10px] text-muted-foreground mt-3 italic">*Illustrative data. Past performance does not guarantee future results.</p>
                </motion.div>
              </div>

              <div className="lg:col-span-2 space-y-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif font-semibold text-foreground mb-0.5">Model Allocation</h3>
                  <p className="text-[11px] text-muted-foreground mb-5">Multi-Asset Balanced Strategy</p>
                  <ResponsiveContainer width="100%" height={180}>
                    <RPieChart>
                      <Pie data={allocationData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value" animationDuration={1200}>
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </RPieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2.5 mt-3">
                    {allocationData.map((d) => (
                      <div key={d.name} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                          <span className="text-muted-foreground text-xs">{d.name}</span>
                        </span>
                        <span className="font-semibold text-foreground text-xs">{d.value}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Global Coverage</h3>
                      <p className="text-[11px] text-muted-foreground">40+ markets worldwide</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["North America", "Europe", "Asia-Pacific", "Emerging Markets", "Middle East"].map((r) => (
                      <span key={r} className="text-[10px] bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{r}</span>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
                  className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
                  <Sparkles className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-serif font-semibold text-foreground text-sm mb-1">ESG-Integrated</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">All strategies incorporate rigorous ESG scoring and sustainable investing principles.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Strategy Selector */}
      <section className="py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-primary-foreground/70 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Strategies</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">Choose your approach</motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              className="text-primary-foreground/60 mb-12 max-w-lg text-[15px]">Each strategy is carefully designed with distinct risk-return profiles to match your investment horizon.</motion.p>

            {/* Strategy tabs */}
            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 space-y-2">
                {strategies.map((s, i) => (
                  <motion.button
                    key={s.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setActiveStrategy(i)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                      activeStrategy === i
                        ? "bg-card border-primary/30 shadow-md"
                        : "bg-transparent border-border hover:bg-card/50 hover:border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        activeStrategy === i ? "bg-primary" : "bg-primary/10"
                      }`}>
                        <s.icon className={`h-4 w-4 transition-colors ${activeStrategy === i ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-sm transition-colors ${activeStrategy === i ? "text-foreground" : "text-muted-foreground"}`}>{s.title}</h4>
                        <p className="text-[11px] text-muted-foreground">Target: {s.returns}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="lg:col-span-8">
                <motion.div
                  key={activeStrategy}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="p-8 pb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        {(() => { const Icon = strategies[activeStrategy].icon; return <Icon className="h-5 w-5 text-primary-foreground" />; })()}
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-foreground">{strategies[activeStrategy].title}</h3>
                        <p className="text-xs text-foreground font-medium">{strategies[activeStrategy].highlight}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{strategies[activeStrategy].desc}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-muted/50 rounded-xl p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Target Return</p>
                        <p className="text-lg font-serif font-bold text-foreground">{strategies[activeStrategy].returns}</p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Risk Level</p>
                        <p className="text-lg font-serif font-bold text-foreground">{strategies[activeStrategy].risk}</p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Minimum</p>
                        <p className="text-lg font-serif font-bold text-foreground">{strategies[activeStrategy].minInvestment}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border px-8 py-4 bg-muted/20 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Interested in this strategy?</p>
                    <Link to="/contact" className="text-muted-foreground text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Request details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - horizontal timeline */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-3">Investment Process</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">How we manage your capital</motion.h2>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                className="text-muted-foreground max-w-lg mx-auto text-sm">A proven four-step approach combining decades of experience with cutting-edge analytics.</motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {processSteps.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card border border-border rounded-2xl p-7 h-full hover:shadow-md hover:border-primary/20 transition-all group">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-5xl font-serif font-bold text-primary/10 group-hover:text-primary/25 transition-colors">{p.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <p.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                    </div>
                    <h4 className="font-serif font-semibold text-foreground mb-2 text-[15px]">{p.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <ArrowRight className="h-4 w-4 text-border" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-28 bg-warm-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative">
              <img
                src={mihBoardroom}
                alt="Multi Investment Holding boardroom"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                loading="lazy"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-5 -right-5 bg-card border border-border rounded-xl p-5 shadow-lg"
              >
                <p className="text-xl font-serif font-bold text-foreground">98%</p>
                <p className="text-[11px] text-muted-foreground">Client Retention Rate</p>
              </motion.div>
            </motion.div>

            <div>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-3">The Multi Advantage</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Why invest with us</motion.h2>
              <div className="space-y-4">
                {[
                  "CHF 3B+ in assets under management",
                  "Dedicated team of 15+ investment professionals",
                  "Proprietary research and analytics platform",
                  "ESG-integrated across all strategies",
                  "Institutional-grade risk management framework",
                  "Transparent fee structure with aligned incentives",
                ].map((a, i) => (
                  <motion.div key={a} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-[15px]">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop" alt="Office" className="w-full h-72 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-[hsl(220,25%,6%)]/75 flex items-center justify-center">
              <div className="text-center px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to invest with confidence?</h2>
                <p className="text-white/55 mb-8 max-w-md mx-auto text-[15px]">Schedule a confidential consultation to discuss how our strategies align with your objectives.</p>
                <Link to="/contact">
                  <button className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Schedule a Consultation <ArrowRight className="h-4 w-4" />
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

export default AssetManagement;
