import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart, Shield, ArrowRight, CheckCircle2, Globe, Layers, Target, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart as RPieChart, Pie, Cell } from "recharts";

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
  { name: "Fixed Income", value: 25, color: "hsl(220, 20%, 55%)" },
  { name: "Real Estate", value: 20, color: "hsl(43, 35%, 60%)" },
  { name: "Alternatives", value: 15, color: "hsl(220, 15%, 40%)" },
];

const strategies = [
  { icon: TrendingUp, title: "Equity Portfolios", desc: "Concentrated equity strategies targeting high-growth sectors across developed and emerging markets.", returns: "12-18%", risk: "Medium-High", minInvestment: "USD 10M" },
  { icon: BarChart3, title: "Fixed Income", desc: "Investment-grade and high-yield bond portfolios optimized for risk-adjusted returns.", returns: "4-7%", risk: "Low-Medium", minInvestment: "USD 10M" },
  { icon: PieChart, title: "Multi-Asset", desc: "Balanced allocation strategies combining equities, bonds, alternatives, and real assets.", returns: "8-12%", risk: "Medium", minInvestment: "USD 10M" },
  { icon: Shield, title: "Capital Preservation", desc: "Conservative strategies designed to protect wealth while generating steady income.", returns: "3-5%", risk: "Low", minInvestment: "USD 10M" },
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
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <PageLayout>
      {/* Hero with parallax */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative min-h-[75vh] flex items-end pb-20">
          <motion.div className="absolute inset-0" style={{ scale: heroScale, opacity: heroOpacity }}>
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop"
              alt="Financial markets"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,4%)] via-[hsl(220,25%,4%)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,4%)]/80 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6"
              >
                <TrendingUp className="h-3.5 w-3.5 text-primary" />
                <span className="text-white/70 text-xs tracking-wider uppercase">Asset Management</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-white leading-[1.1] mb-6"
              >
                Disciplined strategies for
                <span className="text-gradient-gold"> sustainable growth</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/55 text-lg max-w-xl leading-relaxed mb-8"
              >
                Rigorous research and disciplined portfolio construction delivering consistent, risk-adjusted returns across market cycles.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex gap-8"
              >
                {[
                  { val: "CHF 3B+", label: "AUM" },
                  { val: "15+", label: "Professionals" },
                  { val: "4", label: "Strategies" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-serif font-bold text-white">{s.val}</p>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance chart section */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                >
                  Performance Overview
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl font-serif font-bold text-foreground mb-8"
                >
                  Cumulative returns by strategy
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="flex gap-6 mb-4 text-xs">
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary" /> Equity</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-muted-foreground" /> Fixed Income</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(43, 35%, 60%)" }} /> Multi-Asset</span>
                  </div>
                  <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(43, 45%, 42%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(43, 45%, 42%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                      <Tooltip
                        contentStyle={{ background: "hsl(0, 0%, 100%)", border: "1px solid hsl(40, 15%, 88%)", borderRadius: "12px", fontSize: "12px" }}
                        formatter={(value: number) => [`${value}%`]}
                      />
                      <Area type="monotone" dataKey="equity" stroke="hsl(43, 45%, 42%)" fill="url(#colorEquity)" strokeWidth={2.5} />
                      <Area type="monotone" dataKey="fixed" stroke="hsl(220, 10%, 55%)" fill="transparent" strokeWidth={1.5} strokeDasharray="4 4" />
                      <Area type="monotone" dataKey="multi" stroke="hsl(43, 35%, 60%)" fill="transparent" strokeWidth={1.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                  <p className="text-[10px] text-muted-foreground mt-3 italic">*Illustrative data. Past performance does not guarantee future results.</p>
                </motion.div>
              </div>

              {/* Allocation pie */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <h3 className="font-serif font-semibold text-foreground mb-1">Model Allocation</h3>
                  <p className="text-xs text-muted-foreground mb-6">Multi-Asset Strategy</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <RPieChart>
                      <Pie data={allocationData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value">
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </RPieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2.5 mt-4">
                    {allocationData.map((d) => (
                      <div key={d.name} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                          <span className="text-muted-foreground">{d.name}</span>
                        </span>
                        <span className="font-medium text-foreground">{d.value}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-card border border-border rounded-2xl p-6 mt-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-serif font-semibold text-foreground">Global Coverage</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Access to 40+ markets across North America, Europe, Asia-Pacific, and Emerging Markets.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies detail */}
      <section className="py-28 bg-warm-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              Our Strategies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
            >
              Tailored to your objectives
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-muted-foreground mb-12 max-w-xl"
            >
              Each strategy is carefully designed with distinct risk-return profiles to match your investment horizon and goals.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-5">
              {strategies.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <Card className="bg-card border-border hover:border-primary/25 hover:shadow-lg transition-all duration-300 group h-full rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-7 pb-5">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                            <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                          </div>
                          <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                      </div>
                      <div className="border-t border-border bg-muted/30 px-7 py-4 flex items-center justify-between text-xs">
                        <div>
                          <span className="text-muted-foreground">Target: </span>
                          <span className="text-foreground font-semibold">{s.returns}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Risk: </span>
                          <span className="text-foreground font-semibold">{s.risk}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Min: </span>
                          <span className="text-foreground font-semibold">{s.minInvestment}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              >
                Investment Process
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground"
              >
                How we manage your capital
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card border border-border rounded-2xl p-7 h-full hover:shadow-md transition-shadow group">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-4xl font-serif font-bold text-primary/15 group-hover:text-primary/30 transition-colors">{p.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <p.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                    </div>
                    <h4 className="font-serif font-semibold text-foreground mb-2">{p.title}</h4>
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

      {/* Why us + image */}
      <section className="py-28 bg-warm-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Analytics"
                className="rounded-2xl shadow-xl w-full h-[380px] object-cover"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-5 -right-5 bg-card border border-border rounded-xl p-5 shadow-lg"
              >
                <Briefcase className="h-5 w-5 text-primary mb-2" />
                <p className="text-lg font-serif font-bold text-foreground">12+ Years</p>
                <p className="text-xs text-muted-foreground">Avg. Team Experience</p>
              </motion.div>
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              >
                The Multi Advantage
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8"
              >
                Why invest with us
              </motion.h2>
              <div className="space-y-4">
                {[
                  "CHF 3B+ in assets under management",
                  "Dedicated team of 15+ investment professionals",
                  "Proprietary research and analytics platform",
                  "ESG-integrated across all strategies",
                  "Institutional-grade risk management",
                  "Transparent fee structure with aligned incentives",
                ].map((a, i) => (
                  <motion.div
                    key={a}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 relative z-10">
              Ready to invest with confidence?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto relative z-10">
              Schedule a confidential consultation to discuss how our strategies align with your financial objectives.
            </p>
            <Link to="/contact" className="relative z-10">
              <button className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Schedule a Consultation <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AssetManagement;
