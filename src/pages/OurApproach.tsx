import PageLayout from "@/components/PageLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Target, Compass, TrendingUp, Eye, Heart, Gem, ArrowRight, ArrowDown, Building2, Rocket, Wallet, CheckCircle2, BarChart3, Globe, Scale, Users, Gauge, Lock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const SectionLabel = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-8 h-px bg-primary/50" />
    <p className="text-muted-foreground text-xs tracking-[0.35em] uppercase font-medium">{label}</p>
    <div className="w-8 h-px bg-primary/50" />
  </div>
);

const navSections = [
  { id: "philosophy", label: "Philosophy", icon: Compass },
  { id: "strategy", label: "Strategy", icon: Target },
  { id: "instruments", label: "Instruments", icon: BarChart3 },
  { id: "risk", label: "Risk Management", icon: Shield },
  { id: "track-record", label: "Track Record", icon: TrendingUp },
];

const OurApproach = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-28 pb-44 overflow-hidden bg-[hsl(var(--navy))]">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-primary" />
                  <p className="text-muted-foreground text-xs tracking-[0.35em] uppercase font-medium">Our Approach</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_95%)] mb-7 leading-[1.08]">
                  Philosophy, Strategy
                  <br />
                   <span className="text-[hsl(0_0%_95%)] italic">
                    & Instruments
                   </span>
                </h1>
                <p className="text-[hsl(220_10%_62%)] text-lg leading-relaxed max-w-xl mb-10">
                  Discover how our investment philosophy, strategic framework, and flexible instruments work together to create lasting value across generations.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] text-primary-foreground font-semibold text-sm hover:shadow-xl hover:shadow-primary/20 transition-shadow"
                    >
                      Start a Conversation <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "CHF 3B+", label: "Assets Under Management", accent: true },
                    { val: "2024", label: "Year Founded", accent: false },
                    { val: "50+", label: "Real Estate Projects", accent: false },
                    { val: "Geneva", label: "Headquarters", accent: false },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`relative rounded-2xl border backdrop-blur-sm p-7 text-center group overflow-hidden transition-all duration-500 ${
                        s.accent
                          ? "border-primary/30 bg-primary/[0.06] hover:border-primary/50"
                          : "border-[hsl(0_0%_100%/0.08)] bg-[hsl(0_0%_100%/0.03)] hover:border-primary/30"
                      }`}
                    >
                      {s.accent && (
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                      )}
                      <p className="text-3xl font-serif font-bold text-[hsl(0_0%_95%)] group-hover:text-primary transition-colors">{s.val}</p>
                      <p className="text-[hsl(220_10%_50%)] text-[10px] mt-2 uppercase tracking-[0.15em]">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Navigation arrows at the bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-12 left-0 right-0 z-20"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {navSections.map((nav, i) => {
                const Icon = nav.icon;
                return (
                  <motion.button
                    key={nav.id}
                    onClick={() => scrollTo(nav.id)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full border border-[hsl(0_0%_100%/0.12)] bg-[hsl(0_0%_100%/0.05)] backdrop-blur-md hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                    <span className="text-[hsl(0_0%_85%)] text-xs font-medium tracking-wide group-hover:text-primary transition-colors">{nav.label}</span>
                    <ChevronDown className="h-3 w-3 text-[hsl(0_0%_50%)] group-hover:text-primary transition-colors" />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ========== SECTION 1: PHILOSOPHY ========== */}
      <section id="philosophy" className="py-28 scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionLabel label="Philosophy" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">What We Believe In</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Our philosophy is rooted in the Aponte family's multi-generational approach to wealth. We believe that patience, conviction, and integrity are the true drivers of lasting value.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto mb-20"
          >
            <div className="absolute -top-8 -left-6 text-[140px] font-serif text-primary/[0.06] leading-none select-none pointer-events-none">"</div>
            <div className="relative bg-card border border-border rounded-3xl p-10 md:p-14">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic mb-6 text-center">
                "True wealth is not built in a day. It is the result of careful stewardship, unwavering discipline, and the courage to think in generations."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-px bg-primary/50" />
                <p className="text-foreground font-medium text-xs tracking-[0.2em] uppercase">Founding Principle</p>
                <div className="w-10 h-px bg-primary/50" />
              </div>
            </div>
          </motion.div>

          {/* Philosophy pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              { icon: Target, title: "Long-Term Value Creation", desc: "We invest with a generational perspective. Every decision is evaluated for its ability to create sustainable value over decades, not quarters.", number: "01" },
              { icon: Shield, title: "Capital Preservation First", desc: "Protecting capital is the foundation of our strategy. We prioritize downside protection and rigorous risk management.", number: "02" },
              { icon: Compass, title: "Conviction-Driven Allocation", desc: "We concentrate in high-conviction opportunities where we have deep expertise and a clear informational advantage.", number: "03" },
              { icon: Eye, title: "Disciplined Due Diligence", desc: "Every investment undergoes thorough multi-phase evaluation — financial, operational, legal, and strategic.", number: "04" },
              { icon: Heart, title: "Alignment of Interests", desc: "We invest our own capital alongside our partners. Our success is directly tied to theirs.", number: "05" },
              { icon: Gem, title: "Quality Over Quantity", desc: "We pursue fewer, better opportunities. A concentrated portfolio of exceptional assets outperforms a diversified collection of average ones.", number: "06" },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} variants={cardVariants}>
                  <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/[0.06] transition-all duration-500 group overflow-hidden hover:-translate-y-1">
                    <span className="absolute top-5 right-6 text-6xl font-serif font-bold text-primary/[0.04] group-hover:text-primary/[0.1] transition-colors duration-500 select-none">
                      {p.number}
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/0 group-hover:via-primary/60 group-hover:to-primary/0 transition-all duration-700" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 border border-primary/10 group-hover:from-primary group-hover:to-primary group-hover:border-primary/50 transition-all duration-500">
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

      {/* ========== SECTION 2: STRATEGY ========== */}
      <section id="strategy" className="py-28 bg-secondary/30 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <SectionLabel label="Strategy" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">How We Build Value</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our strategy combines a disciplined investment process with four complementary pillars of expertise — creating a diversified yet focused portfolio built for resilience and growth.
            </p>
          </motion.div>

          {/* Process timeline */}
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-serif font-bold text-foreground text-center mb-12"
            >
              Our Investment Process
            </motion.h3>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute top-[2.25rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="grid grid-cols-4 gap-6">
                  {[
                    { step: "Sourcing", desc: "We leverage our network and proprietary deal flow to identify exceptional opportunities before they reach the broader market." },
                    { step: "Analysis", desc: "A rigorous multi-dimensional assessment covering financial performance, market dynamics, management quality, and strategic fit." },
                    { step: "Execution", desc: "Precise structuring and negotiation, leveraging our legal and financial expertise to optimize terms and protect interests." },
                    { step: "Stewardship", desc: "Active portfolio management with hands-on involvement, board participation, and strategic support to maximize value." },
                  ].map((p, i) => (
                    <motion.div
                      key={p.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      className="relative group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center mb-7 relative z-10 group-hover:border-primary group-hover:bg-primary transition-all duration-500 shadow-lg shadow-background">
                          <span className="text-xl font-serif font-bold text-primary group-hover:text-primary-foreground transition-colors">{i + 1}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{p.step}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:hidden relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
              <div className="space-y-8">
                {[
                  { step: "Sourcing", desc: "Proprietary deal flow and network-driven opportunity identification." },
                  { step: "Analysis", desc: "Multi-dimensional assessment of financials, market, and management." },
                  { step: "Execution", desc: "Precise structuring and negotiation to optimize terms." },
                  { step: "Stewardship", desc: "Active management with board participation and strategic support." },
                ].map((p, i) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-card border-2 border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all z-10 relative">
                        <span className="text-lg font-serif font-bold text-primary group-hover:text-primary-foreground transition-colors">{i + 1}</span>
                      </div>
                    </div>
                    <div className="pb-6 pt-1 flex-1">
                      <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.step}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Pillars */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-serif font-bold text-foreground text-center mb-12"
          >
            Four Strategic Pillars
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { title: "Real Estate", desc: "Core and value-add properties across the Mediterranean and Northern Europe.", icon: Building2, stats: "50+ projects" },
              { title: "Private Equity", desc: "Growth and buyout investments in established businesses with strong fundamentals.", icon: TrendingUp, stats: "CHF 1.2B deployed" },
              { title: "Venture Capital", desc: "Seed to Series A investments in technology, fintech, and deep tech.", icon: Rocket, stats: "30+ companies" },
              { title: "Wealth Advisory", desc: "Comprehensive planning for UHNW families including tax, governance, and succession.", icon: Wallet, stats: "100+ families" },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.title} variants={cardVariants}>
                  <div className="relative bg-card border border-border rounded-2xl p-9 h-full hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/[0.06] transition-all duration-500 group overflow-hidden hover:-translate-y-1">
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/0 group-hover:via-primary/50 group-hover:to-primary/0 transition-all duration-700" />
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 border border-primary/10 group-hover:from-primary group-hover:to-primary group-hover:border-primary transition-all duration-500">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-serif font-bold text-foreground">{pillar.title}</h3>
                          <span className="text-[10px] text-primary/70 font-bold tracking-[0.1em] uppercase bg-primary/5 px-3 py-1 rounded-full border border-primary/10">{pillar.stats}</span>
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

      {/* ========== SECTION 3: OUR INSTRUMENTS ========== */}
      <section id="instruments" className="py-28 relative overflow-hidden bg-[hsl(var(--navy))] scroll-mt-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <SectionLabel label="Our Instruments" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[hsl(0_0%_95%)] mb-5">Flexible Capital Deployment</h2>
            <p className="text-[hsl(220_10%_58%)] max-w-2xl mx-auto leading-relaxed">
              We deploy capital through a range of structures tailored to each opportunity's stage, risk profile, and strategic objectives.
            </p>
          </motion.div>

          {/* Instrument categories */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            {["Equity", "Debt", "Hybrid", "Digital Assets"].map((cat) => (
              <span key={cat} className="text-[11px] text-[hsl(220_10%_60%)] font-semibold tracking-[0.15em] uppercase bg-[hsl(0_0%_100%/0.04)] border border-[hsl(0_0%_100%/0.08)] px-4 py-2 rounded-full">
                {cat}
              </span>
            ))}
          </motion.div>

          {/* Featured: Private Equity */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="relative rounded-2xl border border-primary/20 bg-primary/[0.04] backdrop-blur-sm p-9 md:p-12 hover:border-primary/40 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-[hsl(var(--gold-light))] to-primary" />
              <div className="absolute -top-4 -right-4 text-[8rem] font-serif font-bold text-primary/[0.03] group-hover:text-primary/[0.06] transition-colors select-none leading-none">PE</div>
              
              <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] text-primary font-bold tracking-[0.15em] uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">Core Strategy</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(0_0%_95%)] mb-4 group-hover:text-primary transition-colors">Private Equity</h3>
                  <p className="text-[hsl(220_10%_58%)] leading-relaxed max-w-2xl">
                    Direct equity investments in established companies through buyouts, growth capital, and co-investments. We take active board positions and work alongside management to drive operational improvements and long-term value creation.
                  </p>
                </div>
                <div className="hidden md:flex flex-col items-center gap-2 text-center px-8 py-4 border-l border-[hsl(0_0%_100%/0.08)]">
                  <p className="text-4xl font-serif font-bold text-primary">CHF 1.2B+</p>
                  <p className="text-[hsl(220_10%_48%)] text-[10px] uppercase tracking-[0.15em]">Deployed Capital</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other structures - 2x2 grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-5"
          >
            {[
              { title: "Straight Equity", abbr: "SE", desc: "Direct share purchases providing permanent capital with full ownership rights, maximum upside participation, and voting power.", tag: "Direct Ownership", detail: "Full control & upside" },
              { title: "Convertible Note", abbr: "CN", desc: "Debt instruments converting into equity at a future round, typically at a discounted valuation. Downside protection with equity upside.", tag: "Hybrid Instrument", detail: "Debt → Equity conversion" },
              { title: "SAFE Note", abbr: "SAFE", desc: "Simple Agreement for Future Equity — a streamlined instrument granting rights to future shares upon a triggering event.", tag: "Early-Stage", detail: "Y Combinator standard" },
              { title: "SAFT", abbr: "SAFT", desc: "Simple Agreement for Future Tokens — designed for blockchain and Web3 investments, providing rights to tokens upon network launch.", tag: "Digital Assets", detail: "Token-based rights" },
            ].map((s) => (
              <motion.div key={s.title} variants={cardVariants}>
                <div className="relative rounded-2xl border border-[hsl(0_0%_100%/0.07)] bg-[hsl(0_0%_100%/0.02)] backdrop-blur-sm p-8 h-full hover:border-primary/40 transition-all duration-500 group overflow-hidden hover:bg-[hsl(0_0%_100%/0.04)]">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/0 group-hover:via-primary/50 group-hover:to-primary/0 transition-all duration-700" />
                  <div className="absolute top-4 right-6 text-5xl font-serif font-bold text-primary/[0.04] group-hover:text-primary/[0.1] transition-colors duration-500 select-none">{s.abbr}</div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-2.5 mb-5">
                      <span className="text-[10px] text-primary/90 font-bold tracking-[0.12em] uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/15">{s.tag}</span>
                      <span className="text-[10px] text-[hsl(220_10%_48%)] tracking-wider">• {s.detail}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[hsl(0_0%_95%)] mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-[hsl(220_10%_56%)] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== SECTION 4: RISK MANAGEMENT ========== */}
      <section id="risk" className="py-28 scroll-mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <SectionLabel label="Risk Management" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Protecting What Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Risk management isn't just a department — it's embedded in every layer of our decision-making. We believe that the best returns come from understanding and managing risk, not ignoring it.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Risk framework */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-5"
            >
              {[
                { icon: Gauge, title: "Portfolio Stress Testing", desc: "We regularly stress-test portfolios against adverse market scenarios — recession, interest rate shocks, geopolitical events — to ensure resilience under pressure." },
                { icon: Scale, title: "Diversification by Design", desc: "Strategic allocation across asset classes, geographies, and vintages minimizes concentration risk while preserving conviction in our best ideas." },
                { icon: Lock, title: "Counterparty & Liquidity Risk", desc: "Every partnership and structure is evaluated for counterparty reliability, exit optionality, and liquidity constraints before commitment." },
                { icon: Eye, title: "Continuous Monitoring", desc: "Real-time dashboards and quarterly reviews track key risk indicators across the entire portfolio, enabling proactive adjustments." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={cardVariants}>
                    <div className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-500 group">
                      <div className="flex items-start gap-5">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 border border-primary/10 group-hover:from-primary group-hover:to-primary transition-all duration-500">
                          <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                        </div>
                        <div>
                          <h3 className="text-base font-serif font-bold text-foreground mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Risk stats card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-28"
            >
              <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-xl">
                <div className="bg-[hsl(var(--navy))] p-10 relative">
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }} />
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="relative z-10 text-center">
                    <Shield className="h-8 w-8 text-primary/60 mx-auto mb-4" />
                    <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase font-medium mb-2">Risk Framework</p>
                    <p className="text-2xl font-serif font-bold text-[hsl(0_0%_95%)]">Multi-Layer Protection</p>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    { label: "Max Single Position", value: "15%", desc: "of total portfolio" },
                    { label: "Geographic Spread", value: "12+", desc: "countries covered" },
                    { label: "Stress Test Frequency", value: "Quarterly", desc: "scenario analysis" },
                    { label: "Liquidity Reserve", value: "20%", desc: "always available" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">{stat.label}</p>
                        <p className="text-muted-foreground text-xs">{stat.desc}</p>
                      </div>
                      <p className="text-xl font-serif font-bold text-primary">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: TRACK RECORD ========== */}
      <section id="track-record" className="py-28 bg-secondary/30 relative overflow-hidden scroll-mt-24">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <SectionLabel label="Track Record" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Results That Speak</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our performance reflects the discipline of our process and the conviction behind our investments. Here's a snapshot of what we've achieved.
            </p>
          </motion.div>

          {/* Key metrics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
          >
            {[
              { value: "CHF 3B+", label: "Assets Under Management", accent: true },
              { value: "18.2%", label: "Avg. Net IRR (PE)", accent: false },
              { value: "2.4x", label: "Avg. Equity Multiple", accent: false },
              { value: "0", label: "Capital Losses to Date", accent: true },
            ].map((m, i) => (
              <motion.div key={m.label} variants={cardVariants}>
                <div className={`relative rounded-2xl border p-8 text-center h-full transition-all duration-500 group hover:-translate-y-1 overflow-hidden ${
                  m.accent
                    ? "border-primary/20 bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[0.06]"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-lg"
                }`}>
                  {m.accent && <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />}
                  <p className="text-3xl md:text-4xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">{m.value}</p>
                  <p className="text-muted-foreground text-xs mt-2 uppercase tracking-wider">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Milestones */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-serif font-bold text-foreground text-center mb-12"
          >
            Key Milestones
          </motion.h3>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
              {[
                { year: "2024", event: "Multi Investment founded in Geneva by the Aponte family", side: "left" },
                { year: "2024", event: "First CHF 500M deployed across Real Estate and Private Equity", side: "right" },
                { year: "2025", event: "Venture Capital division launched — 15 seed investments in first year", side: "left" },
                { year: "2025", event: "AUM surpasses CHF 2B — Wealth Advisory division established", side: "right" },
                { year: "2026", event: "CHF 3B+ AUM milestone — expanding into Northern European markets", side: "left" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 mb-10 ${
                    m.side === "right" ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-md z-10" />
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${m.side === "left" ? "md:pr-12" : "md:pl-12"}`}>
                    <span className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">{m.year}</span>
                    <p className="text-foreground text-sm leading-relaxed mt-1">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-primary/50" />
                <p className="text-muted-foreground text-xs tracking-[0.35em] uppercase font-medium">Why Multi Investment</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">What Sets Us Apart</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                As a family-founded firm, we combine institutional-grade capabilities with the agility and long-term vision that only a private, independent structure can provide.
              </p>

              <div className="space-y-5">
                {[
                  "Direct access to Aponte family deal flow and network",
                  "Co-investment model ensuring full alignment of interests",
                  "No external LP pressure — decisions driven by conviction",
                  "Multi-generational perspective with permanent capital base",
                  "Boutique team of senior professionals based in Geneva",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-2xl shadow-primary/[0.04]">
                <div className="bg-[hsl(var(--navy))] p-10 md:p-12 relative">
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }} />
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="relative z-10 text-center">
                    <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase font-medium mb-3">Assets Under Management</p>
                    <p className="text-5xl md:text-6xl font-serif font-bold text-[hsl(0_0%_95%)]">CHF 3B+</p>
                  </div>
                </div>
                <div className="p-8 flex items-center justify-center gap-8">
                  {[
                    { val: "50+", label: "Projects" },
                    { val: "2024", label: "Founded" },
                    { val: "Geneva", label: "HQ" },
                  ].map((o) => (
                    <div key={o.label} className="text-center">
                      <p className="text-lg font-serif font-bold text-foreground">{o.val}</p>
                      <p className="text-muted-foreground text-[10px] mt-1 uppercase tracking-[0.15em]">{o.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[hsl(var(--navy))]" />
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }} />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[140px] pointer-events-none" />

            <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-[hsl(0_0%_95%)] mb-4 leading-tight">
                  Ready to Explore<br className="hidden md:block" /> What's Possible?
                </h3>
                <p className="text-[hsl(220_10%_60%)] max-w-lg leading-relaxed">
                  Whether you're looking to preserve wealth, invest in real estate, or explore venture capital, we'd love to start a conversation.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-primary/30 shrink-0 group"
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
