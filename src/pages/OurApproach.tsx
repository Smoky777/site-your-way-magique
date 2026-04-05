import PageLayout from "@/components/PageLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Target, Compass, TrendingUp, Eye, Heart, Gem, ArrowRight, Building2, Rocket, Wallet, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const principles = [
  { icon: Target, title: "Long-Term Value Creation", desc: "We invest with a generational perspective. Every decision is evaluated for its ability to create sustainable value over decades, not quarters.", number: "01" },
  { icon: Shield, title: "Capital Preservation First", desc: "Protecting capital is the foundation of our strategy. We prioritize downside protection and rigorous risk management across every asset class.", number: "02" },
  { icon: Compass, title: "Conviction-Driven Allocation", desc: "We concentrate our portfolio in high-conviction opportunities where we have deep expertise and a clear informational advantage.", number: "03" },
  { icon: Eye, title: "Disciplined Due Diligence", desc: "Every investment undergoes a thorough multi-phase evaluation — financial, operational, legal, and strategic — before commitment.", number: "04" },
  { icon: Heart, title: "Alignment of Interests", desc: "We invest our own capital alongside our partners. Our success is directly tied to theirs, ensuring full alignment at every level.", number: "05" },
  { icon: Gem, title: "Quality Over Quantity", desc: "We pursue fewer, better opportunities. A concentrated portfolio of exceptional assets outperforms a diversified collection of average ones.", number: "06" },
];

const pillars = [
  { title: "Real Estate", desc: "Core and value-add properties across the Mediterranean and Northern Europe.", icon: Building2, stats: "50+ projects" },
  { title: "Private Equity", desc: "Growth and buyout investments in established businesses with strong fundamentals.", icon: TrendingUp, stats: "CHF 1.2B deployed" },
  { title: "Venture Capital", desc: "Seed to Series A investments in technology, fintech, and deep tech.", icon: Rocket, stats: "30+ portfolio companies" },
  { title: "Wealth Advisory", desc: "Comprehensive planning for UHNW families including tax, governance, and succession.", icon: Wallet, stats: "100+ families served" },
];

const process = [
  { step: "Sourcing", desc: "We leverage our network and proprietary deal flow to identify exceptional opportunities before they reach the broader market." },
  { step: "Analysis", desc: "A rigorous multi-dimensional assessment covering financial performance, market dynamics, management quality, and strategic fit." },
  { step: "Execution", desc: "Precise structuring and negotiation, leveraging our legal and financial expertise to optimize terms and protect interests." },
  { step: "Stewardship", desc: "Active portfolio management with hands-on involvement, board participation, and strategic support to maximize value creation." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const OurApproach = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <PageLayout>
      {/* Hero with parallax */}
      <section ref={heroRef} className="relative pt-28 pb-36 overflow-hidden bg-[hsl(var(--navy))]">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Our Approach</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_95%)] mb-6 leading-[1.1]">
                  Investment Philosophy<br />
                  <span className="bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] bg-clip-text text-transparent">
                    Built on Conviction
                  </span>
                </h1>
                <p className="text-[hsl(220_10%_65%)] text-lg leading-relaxed max-w-xl">
                  We believe in the power of patience, discipline, and deep expertise. Our philosophy is rooted in the Aponte family's multi-generational approach to building enduring value.
                </p>
              </motion.div>

              {/* Key metrics in hero */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "CHF 3B+", label: "Assets Under Management" },
                    { val: "2024", label: "Year Founded" },
                    { val: "50+", label: "Real Estate Projects" },
                    { val: "3", label: "European Offices" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="rounded-xl border border-[hsl(0_0%_100%/0.08)] bg-[hsl(0_0%_100%/0.03)] backdrop-blur-sm p-6 text-center hover:border-primary/30 transition-colors group"
                    >
                      <p className="text-2xl md:text-3xl font-serif font-bold text-[hsl(0_0%_95%)] group-hover:text-primary transition-colors">{s.val}</p>
                      <p className="text-[hsl(220_10%_55%)] text-xs mt-1.5 uppercase tracking-wider">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quote - elevated design */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Large decorative quote mark */}
            <div className="absolute -top-6 -left-4 text-[120px] font-serif text-primary/[0.07] leading-none select-none pointer-events-none">"</div>
            
            <div className="relative bg-card border border-border rounded-2xl p-10 md:p-14">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed italic mb-6 text-center">
                "True wealth is not built in a day. It is the result of careful stewardship, unwavering discipline, and the courage to think in generations."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-primary" />
                <p className="text-primary font-medium text-sm tracking-wide">Multi Investment Founding Principle</p>
                <div className="w-8 h-px bg-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles - alternating layout */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-[300px] h-[300px] rounded-full bg-primary/[0.02] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Core Principles</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What Guides Every Decision</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Six foundational principles that define how we evaluate, execute, and manage investments.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} variants={cardVariants}>
                  <div className="relative bg-card border border-border rounded-xl p-7 h-full hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group overflow-hidden">
                    {/* Number watermark */}
                    <span className="absolute top-4 right-5 text-5xl font-serif font-bold text-primary/[0.05] group-hover:text-primary/[0.1] transition-colors select-none">
                      {p.number}
                    </span>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-5 border border-primary/10 group-hover:from-primary group-hover:to-primary group-hover:border-primary/50 transition-all duration-500">
                        <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-3">{p.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Investment Process - timeline style */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">From Opportunity to Value</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A disciplined four-stage process ensures every investment meets our rigorous standards.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-8">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex gap-6 md:gap-8 group"
                >
                  {/* Step indicator */}
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-400 z-10 relative">
                      <span className="text-lg md:text-xl font-serif font-bold text-primary group-hover:text-primary-foreground transition-colors">{i + 1}</span>
                    </div>
                  </div>

                  <div className="pb-8 pt-1 flex-1">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.step}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Pillars - cards with stats */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Investment Pillars</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Four Pillars of Excellence</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Our expertise spans four complementary verticals, each managed by dedicated specialists.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.title} variants={cardVariants}>
                  <div className="relative bg-card border border-border rounded-xl p-8 h-full hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group overflow-hidden">
                    {/* Subtle corner decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                        <circle cx="80" cy="20" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="80" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </svg>
                    </div>

                    <div className="flex items-start gap-5 relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center shrink-0 border border-primary/10 group-hover:from-primary group-hover:to-primary group-hover:border-primary transition-all duration-500">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-serif font-bold text-foreground">{pillar.title}</h3>
                          <span className="text-xs text-primary/60 font-semibold tracking-wider uppercase bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">{pillar.stats}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Why Multi Investment</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">What Sets Us Apart</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                As a family-founded firm, we combine institutional-grade capabilities with the agility and long-term vision that only a private, independent structure can provide.
              </p>

              <div className="space-y-5">
                {[
                  "Direct access to Aponte family deal flow and network",
                  "Co-investment model ensuring full alignment of interests",
                  "No external LP pressure — decisions driven by conviction, not fundraising cycles",
                  "Multi-generational perspective with permanent capital base",
                  "Boutique team of 13 senior professionals across 3 offices",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual stats block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="bg-[hsl(var(--navy))] p-8 relative">
                  <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }} />
                  <div className="relative z-10 text-center">
                    <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-2">Assets Under Management</p>
                    <p className="text-5xl md:text-6xl font-serif font-bold text-[hsl(0_0%_95%)]">CHF 3B+</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-border">
                  {[
                    { val: "Geneva", label: "HQ" },
                    { val: "Monaco", label: "Wealth" },
                    { val: "Naples", label: "Real Estate" },
                  ].map((o) => (
                    <div key={o.label} className="p-5 text-center">
                      <p className="text-base font-serif font-bold text-foreground">{o.val}</p>
                      <p className="text-muted-foreground text-xs mt-0.5 uppercase tracking-wider">{o.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[hsl(var(--navy))]" />
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }} />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(0_0%_95%)] mb-3">
                  Ready to Explore What's Possible?
                </h3>
                <p className="text-[hsl(220_10%_65%)] max-w-lg">
                  Whether you're looking to preserve wealth, invest in real estate, or explore venture capital, we'd love to start a conversation.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/25 shrink-0 group"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OurApproach;
