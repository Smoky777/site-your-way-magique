import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart, Shield, ArrowRight, CheckCircle2, Target, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const strategies = [
  { icon: TrendingUp, title: "Equity Portfolios", desc: "Concentrated equity strategies targeting high-growth sectors across developed and emerging markets.", returns: "12-18% target", risk: "Medium-High" },
  { icon: BarChart3, title: "Fixed Income", desc: "Investment-grade and high-yield bond portfolios optimized for risk-adjusted returns.", returns: "4-7% target", risk: "Low-Medium" },
  { icon: PieChart, title: "Multi-Asset", desc: "Balanced allocation strategies combining equities, bonds, alternatives, and real assets.", returns: "8-12% target", risk: "Medium" },
  { icon: Shield, title: "Capital Preservation", desc: "Conservative strategies designed to protect wealth while generating steady income.", returns: "3-5% target", risk: "Low" },
];

const process = [
  { step: "01", title: "Research & Analysis", desc: "Deep fundamental and quantitative analysis across global markets and asset classes." },
  { step: "02", title: "Portfolio Construction", desc: "Disciplined allocation based on risk budgeting, correlation analysis, and client objectives." },
  { step: "03", title: "Risk Management", desc: "Continuous monitoring with dynamic hedging, stress testing, and drawdown controls." },
  { step: "04", title: "Reporting & Review", desc: "Transparent quarterly reporting with performance attribution and strategy reassessment." },
];

const advantages = [
  "CHF 3B+ in assets under management",
  "Dedicated team of 15+ investment professionals",
  "Proprietary research and analytics platform",
  "ESG-integrated across all strategies",
  "Institutional-grade risk management",
  "Transparent fee structure with aligned incentives",
];

const AssetManagement = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative py-32 md:py-40">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=800&fit=crop"
              alt="Trading floor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,4%)]/90 via-[hsl(220,25%,4%)]/75 to-[hsl(220,25%,4%)]/50" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            >
              Asset Management
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 max-w-3xl"
            >
              Disciplined Strategies for
              <span className="text-gradient-gold"> Sustainable Growth</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg max-w-xl leading-relaxed"
            >
              Rigorous research and disciplined portfolio construction to deliver consistent, risk-adjusted returns across market cycles.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key stats bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "CHF 3B+", label: "AUM" },
              { val: "15+", label: "Investment Professionals" },
              { val: "4", label: "Core Strategies" },
              { val: "12+", label: "Years Avg. Experience" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-2xl font-serif font-bold text-foreground">{s.val}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              Investment Strategies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12"
            >
              Tailored to your objectives
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-5">
              {strategies.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <Card className="bg-card border-border hover:border-primary/25 transition-all duration-300 group h-full rounded-2xl">
                    <CardContent className="p-7">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                          <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{s.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                          <div className="flex gap-4 text-xs">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{s.returns}</span>
                            <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full">Risk: {s.risk}</span>
                          </div>
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
      <section className="py-28 bg-warm-section">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                >
                  Our Process
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6"
                >
                  How we manage your capital
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  Our investment process is built on decades of collective experience, combining fundamental analysis with quantitative tools to identify opportunities and manage risk effectively.
                </motion.p>
              </div>

              <div className="space-y-6">
                {process.map((p, i) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className="text-3xl font-serif font-bold text-primary/20 group-hover:text-primary transition-colors shrink-0 w-12">
                      {p.step}
                    </div>
                    <div className="border-l border-border pl-5 pb-2">
                      <h4 className="font-semibold text-foreground mb-1">{p.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              >
                Why Multi Investment
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8"
              >
                The Multi Advantage
              </motion.h2>
              <div className="space-y-4">
                {advantages.map((a, i) => (
                  <motion.div
                    key={a}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop"
                alt="Analytics dashboard"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-section">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-foreground mb-4"
          >
            Interested in our strategies?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            Schedule a consultation to discuss how our asset management solutions can serve your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact">
              <button className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AssetManagement;
