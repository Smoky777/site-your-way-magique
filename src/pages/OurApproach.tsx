import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Shield, Target, Compass, TrendingUp, Eye, Heart, Gem, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    icon: Target,
    title: "Long-Term Value Creation",
    desc: "We invest with a generational perspective. Every decision is evaluated for its ability to create sustainable value over decades, not quarters.",
  },
  {
    icon: Shield,
    title: "Capital Preservation First",
    desc: "Protecting capital is the foundation of our strategy. We prioritize downside protection and rigorous risk management across every asset class.",
  },
  {
    icon: Compass,
    title: "Conviction-Driven Allocation",
    desc: "We concentrate our portfolio in high-conviction opportunities where we have deep expertise and a clear informational advantage.",
  },
  {
    icon: Eye,
    title: "Disciplined Due Diligence",
    desc: "Every investment undergoes a thorough multi-phase evaluation — financial, operational, legal, and strategic — before commitment.",
  },
  {
    icon: Heart,
    title: "Alignment of Interests",
    desc: "We invest our own capital alongside our partners. Our success is directly tied to theirs, ensuring full alignment at every level.",
  },
  {
    icon: Gem,
    title: "Quality Over Quantity",
    desc: "We pursue fewer, better opportunities. A concentrated portfolio of exceptional assets outperforms a diversified collection of average ones.",
  },
];

const pillars = [
  { value: "Real Estate", desc: "Core and value-add properties across the Mediterranean and Northern Europe." },
  { value: "Private Equity", desc: "Growth and buyout investments in established businesses with strong fundamentals." },
  { value: "Venture Capital", desc: "Seed to Series A investments in technology, fintech, and deep tech." },
  { value: "Wealth Advisory", desc: "Comprehensive planning for UHNW families including tax, governance, and succession." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const OurApproach = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-28 pb-32 overflow-hidden bg-[hsl(var(--navy))]">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
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
            <p className="text-[hsl(220_10%_65%)] text-lg leading-relaxed max-w-2xl">
              We believe in the power of patience, discipline, and deep expertise. Our philosophy is rooted in the Aponte family's multi-generational approach to building enduring value.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quote */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed italic mb-6">
              "True wealth is not built in a day. It is the result of careful stewardship, unwavering discipline, and the courage to think in generations."
            </blockquote>
            <p className="text-primary font-medium">— Multi Investment Founding Principle</p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
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
                  <div className="bg-card border border-border rounded-xl p-7 h-full hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-primary transition-all duration-400 border border-primary/10 group-hover:border-primary/50">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-400" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Investment Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">Investment Pillars</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Four Pillars of Excellence</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our expertise spans four complementary verticals, each managed by dedicated specialists with deep domain knowledge. This focused approach allows us to identify opportunities that generalist firms overlook.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity group"
              >
                Discuss Your Goals
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {pillars.map((pillar, i) => (
                <motion.div key={pillar.value} variants={cardVariants}>
                  <div className="flex items-start gap-5 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:border-primary transition-all">
                      <TrendingUp className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-semibold text-foreground mb-1">{pillar.value}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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

            <div className="relative z-10 p-10 md:p-16 text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(0_0%_95%)] mb-4">
                Ready to Explore What's Possible?
              </h3>
              <p className="text-[hsl(220_10%_65%)] max-w-lg mx-auto mb-8">
                Whether you're looking to preserve wealth, invest in real estate, or explore venture capital, we'd love to start a conversation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/25 group"
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
