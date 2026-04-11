import PageLayout from "@/components/PageLayout";
import mihBoardroom from "@/assets/mih-boardroom.png";
import { TrendingUp, BarChart3, PieChart, Shield, ArrowRight, CheckCircle2, Globe, Layers, Target, Briefcase, ArrowUpRight, Sparkles, Lock } from "lucide-react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart as RPieChart, Pie, Cell } from "recharts";

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
  { icon: TrendingUp, title: "Equity Portfolios", desc: "Concentrated equity strategies targeting high-growth sectors.", returns: "12-18%", risk: "Medium-High", minInvestment: "USD 10M", highlight: "Flagship strategy." },
  { icon: BarChart3, title: "Fixed Income", desc: "Investment-grade and high-yield bond portfolios.", returns: "4-7%", risk: "Low-Medium", minInvestment: "USD 10M", highlight: "Capital preservation." },
  { icon: PieChart, title: "Multi-Asset", desc: "Balanced allocation across equities, bonds, and alternatives.", returns: "8-12%", risk: "Medium", minInvestment: "USD 10M", highlight: "All-weather portfolio." },
  { icon: Shield, title: "Capital Preservation", desc: "Conservative strategies for steady income.", returns: "3-5%", risk: "Low", minInvestment: "USD 10M", highlight: "Wealth protection." },
];

const processSteps = [
  { step: "01", title: "Research & Analysis", desc: "Deep fundamental and quantitative analysis across global markets.", icon: Target },
  { step: "02", title: "Portfolio Construction", desc: "Disciplined allocation based on risk budgeting and client objectives.", icon: Layers },
  { step: "03", title: "Risk Management", desc: "Continuous monitoring with dynamic hedging and stress testing.", icon: Shield },
  { step: "04", title: "Reporting & Review", desc: "Transparent quarterly reporting with performance attribution.", icon: BarChart3 },
];

const AssetManagement = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const [activeStrategy, setActiveStrategy] = useState(0);

  return (
    <PageLayout>
      {/* Hero — asymmetric split */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative min-h-[85vh] flex items-end pb-24">
          <motion.div className="absolute inset-0" style={{ scale: heroScale, opacity: heroOpacity }}>
            <video autoPlay muted loop playsInline className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&h=1080&fit=crop">
              <source src="https://videos.pexels.com/video-files/6774917/6774917-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,50%,5%)] via-[hsl(222,50%,5%)]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,50%,5%)]/80 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
                  <TrendingUp className="h-3.5 w-3.5 text-[hsl(43,50%,60%)]" />
                  <span className="text-white/60 text-[11px] tracking-wider uppercase">Asset Management</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
                  className="text-[2.2rem] md:text-[3.5rem] font-serif font-bold text-white leading-[1.05] mb-5">
                  Disciplined strategies
                  <br />for <span className="italic text-gradient-gold font-normal text-[0.85em]">sustainable growth.</span>
                </motion.h1>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                className="lg:col-span-4 lg:col-start-9 lg:pb-2">
                <p className="text-white/45 text-[14px] leading-[1.85] max-w-sm mb-6">
                  Rigorous research and portfolio construction delivering consistent, risk-adjusted returns across market cycles.
                </p>
                <div className="hidden lg:grid grid-cols-2 gap-2">
                  {[
                    { val: "CHF 3B+", label: "AUM" },
                    { val: "40+", label: "Markets" },
                  ].map((s, i) => (
                    <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3.5">
                      <p className="text-lg font-serif font-bold text-white">{s.val}</p>
                      <p className="text-white/30 text-[9px] uppercase tracking-wider mt-0.5">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar — varied */}
      <section className="bg-card border-b border-border py-8 md:py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-baseline justify-between gap-8">
            {[
              { value: 14, suffix: ".5%", label: "Equity YTD", size: "text-3xl md:text-4xl" },
              { value: 3, prefix: "CHF ", suffix: "B+", label: "AUM", size: "text-2xl md:text-3xl" },
              { value: 98, suffix: "%", label: "Retention", size: "text-xl md:text-2xl" },
              { value: 12, suffix: "+", label: "Yrs Avg Exp.", size: "text-2xl md:text-3xl" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} className={`text-center flex-1 min-w-[80px] ${i === 2 ? "mt-2" : ""}`}>
                <motion.p className={`${s.size} font-serif font-bold text-foreground`} whileHover={{ scale: 1.06 }} transition={{ type: "spring", stiffness: 400 }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </motion.p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance + Allocation — asymmetric */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Performance Overview</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="text-[1.5rem] md:text-[2.1rem] font-serif font-bold text-foreground mb-3 leading-tight">
                Cumulative
                <span className="text-accent italic font-normal text-[0.75em] ml-2">returns.</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                className="text-muted-foreground text-[13px] mb-8 max-w-md">Strategy performance since inception, showing consistent delivery across varying conditions.</motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex gap-5 mb-5 text-[11px]">
                  <span className="flex items-center gap-2"><span className="w-2.5 h-0.5 rounded-full bg-primary" /> Equity</span>
                  <span className="flex items-center gap-2"><span className="w-2.5 h-0.5 rounded-full bg-muted-foreground" /> Fixed Income</span>
                  <span className="flex items-center gap-2"><span className="w-2.5 h-0.5 rounded-full" style={{ backgroundColor: "hsl(43, 35%, 60%)" }} /> Multi-Asset</span>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorEq" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(43, 45%, 42%)" stopOpacity={0.25} />
                        <stop offset="100%" stopColor="hsl(43, 45%, 42%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <Tooltip contentStyle={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(40,15%,88%)", borderRadius: "12px", fontSize: "12px" }} formatter={(value: number) => [`${value}%`]} />
                    <Area type="monotone" dataKey="equity" stroke="hsl(43, 45%, 42%)" fill="url(#colorEq)" strokeWidth={2.5} dot={{ r: 3, fill: "hsl(43, 45%, 42%)" }} />
                    <Area type="monotone" dataKey="fixed" stroke="hsl(220, 10%, 60%)" fill="transparent" strokeWidth={1.5} strokeDasharray="5 5" />
                    <Area type="monotone" dataKey="multi" stroke="hsl(43, 35%, 60%)" fill="transparent" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="text-[10px] text-muted-foreground mt-3 italic">*Illustrative data. Past performance does not guarantee future results.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 space-y-4 lg:mt-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                <h3 className="font-serif font-semibold text-foreground text-[14px] mb-0.5">Model Allocation</h3>
                <p className="text-[10px] text-muted-foreground mb-4">Multi-Asset Balanced</p>
                <ResponsiveContainer width="100%" height={160}>
                  <RPieChart>
                    <Pie data={allocationData} cx="50%" cy="50%" innerRadius={45} outerRadius={72} paddingAngle={3} dataKey="value" animationDuration={1200}>
                      {allocationData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                    </Pie>
                  </RPieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-2">
                  {allocationData.map((d) => (
                    <div key={d.name} className="flex items-center justify-between text-[12px]">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                        <span className="text-muted-foreground">{d.name}</span>
                      </span>
                      <span className="font-semibold text-foreground">{d.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="bg-primary/[0.04] border border-primary/10 rounded-xl p-5">
                <Sparkles className="h-4 w-4 text-accent mb-2" />
                <h3 className="font-serif font-semibold text-foreground text-[13px] mb-1">ESG-Integrated</h3>
                <p className="text-muted-foreground text-[12px] leading-relaxed">All strategies incorporate rigorous ESG scoring.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Selector — asymmetric */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-end mb-14 md:mb-20">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="text-right max-w-md">
                <p className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Our Strategies</p>
                <h2 className="text-[1.5rem] md:text-[2.2rem] font-serif font-bold text-primary-foreground leading-tight">
                  Choose your
                  <span className="block text-accent/80 italic font-normal text-[0.7em] mt-1">approach.</span>
                </h2>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-12 gap-5">
              <div className="lg:col-span-4 space-y-2">
                {strategies.map((s, i) => (
                  <motion.button
                    key={s.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setActiveStrategy(i)}
                    className={`w-full text-left p-4 border transition-all duration-300 ${
                      activeStrategy === i
                        ? "bg-card border-accent/30 shadow-md rounded-xl"
                        : "bg-transparent border-primary-foreground/10 hover:bg-card/30 rounded-lg"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        activeStrategy === i ? "bg-primary" : "bg-primary-foreground/10"
                      }`}>
                        <s.icon className={`h-4 w-4 transition-colors ${activeStrategy === i ? "text-primary-foreground" : "text-primary-foreground/60"}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-[13px] transition-colors ${activeStrategy === i ? "text-foreground" : "text-primary-foreground/60"}`}>{s.title}</h4>
                        <p className="text-[10px] text-muted-foreground">Target: {s.returns}</p>
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
                  <div className="p-7 pb-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                        {(() => { const Icon = strategies[activeStrategy].icon; return <Icon className="h-5 w-5 text-primary-foreground" />; })()}
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-foreground">{strategies[activeStrategy].title}</h3>
                        <p className="text-[11px] text-foreground/70">{strategies[activeStrategy].highlight}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-[14px] leading-relaxed mb-5">{strategies[activeStrategy].desc}</p>

                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { label: "Target Return", val: strategies[activeStrategy].returns },
                        { label: "Risk Level", val: strategies[activeStrategy].risk },
                        { label: "Minimum", val: strategies[activeStrategy].minInvestment },
                      ].map((item) => (
                        <div key={item.label} className="bg-muted/50 rounded-lg p-3 text-center">
                          <p className="text-[10px] text-muted-foreground mb-0.5">{item.label}</p>
                          <p className="text-[14px] font-serif font-bold text-foreground">{item.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border px-7 py-3.5 bg-muted/20 flex items-center justify-between">
                    <p className="text-[11px] text-muted-foreground">Interested?</p>
                    <Link to="/contact" className="text-accent text-[13px] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Request details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process — irregular grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-md mb-14 md:mb-20">
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Investment Process</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-[1.5rem] md:text-[2.1rem] font-serif font-bold text-foreground leading-tight">
                How we manage
                <span className="block text-muted-foreground/60 italic font-normal text-[0.75em] mt-1">your capital.</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-12 gap-4">
              {processSteps.map((p, i) => {
                const cols = ["md:col-span-5", "md:col-span-4", "md:col-span-3", "md:col-span-6 md:col-start-4"];
                const offsets = ["", "md:mt-12", "md:-mt-4", "md:mt-8"];
                return (
                  <motion.div key={p.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }} className={`${cols[i]} ${offsets[i]}`}>
                    <motion.div
                      className={`bg-card border border-border h-full hover:shadow-md hover:border-accent/30 transition-all group ${
                        i === 0 ? "rounded-2xl p-7" : i === 1 ? "rounded-xl p-5" : i === 2 ? "rounded-2xl p-6" : "rounded-3xl p-8"
                      }`}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-serif font-bold text-border/40 group-hover:text-accent/30 transition-colors ${
                          i === 0 ? "text-5xl" : i === 1 ? "text-3xl" : i === 2 ? "text-4xl" : "text-5xl"
                        }`}>{p.step}</span>
                        <motion.div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary transition-colors" whileHover={{ rotate: 8 }}>
                          <p.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                        </motion.div>
                      </div>
                      <h4 className={`font-serif font-semibold text-foreground mb-1.5 ${i === 3 ? "text-lg" : "text-[15px]"}`}>{p.title}</h4>
                      <p className="text-muted-foreground text-[13px] leading-relaxed">{p.desc}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why us — image left, text right */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-5">
              <div className="relative">
                <motion.img
                  src={mihBoardroom}
                  alt="Multi Investment Holding boardroom"
                  className="w-full h-[340px] md:h-[400px] object-cover shadow-xl"
                  loading="lazy"
                  style={{ borderRadius: "20px 3px 3px 20px" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-4 right-5 bg-card border border-border rounded-xl px-4 py-3 shadow-lg"
                >
                  <p className="text-lg font-serif font-bold text-foreground">98%</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Retention</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-6 lg:col-start-7">
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">The Multi Advantage</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-[1.5rem] md:text-[2.1rem] font-serif font-bold text-foreground leading-tight mb-6">
                Why invest
                <span className="text-accent italic font-normal text-[0.75em] ml-2">with us.</span>
              </motion.h2>
              <div className="space-y-3">
                {[
                  "CHF 3B+ in assets under management",
                  "Dedicated team of 15+ investment professionals",
                  "Proprietary research and analytics platform",
                  "ESG-integrated across all strategies",
                  "Institutional-grade risk management",
                  "Transparent fee structure",
                ].map((a, i) => (
                  <motion.div key={a} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground text-[14px]">{a}</span>
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
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop" alt="Office" className="w-full h-56 md:h-72 object-cover" />
            <div className="absolute inset-0 bg-[hsl(220,25%,6%)]/75" />
            <div className="absolute inset-0 flex items-end p-7 md:p-12">
              <div className="max-w-sm">
                <h2 className="text-[1.3rem] md:text-[1.7rem] font-serif font-bold text-white mb-2 leading-snug">
                  Ready to invest
                  <span className="block font-normal italic text-white/70 text-[0.8em]">with confidence?</span>
                </h2>
                <p className="text-white/40 mb-6 text-[13px]">Schedule a confidential consultation to discuss how our strategies align with your objectives.</p>
                <Link to="/contact">
                  <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold text-[13px] hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Schedule a Consultation <ArrowRight className="h-3.5 w-3.5" />
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
