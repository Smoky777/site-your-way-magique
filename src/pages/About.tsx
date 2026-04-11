import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import {
  Anchor, TrendingUp, Globe, Shield, Users, Ship, Landmark,
  Crown, BarChart3, Building, Briefcase, Target, Award, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import gianluigiPhoto from "@/assets/gianluigi-aponte.jpg";
import diegoPhoto from "@/assets/diego-aponte.jpg";

const milestones = [
  { year: "1940", text: "Gianluigi Aponte is born in Sant'Agnello, on Italy's stunning Amalfi Coast — a region steeped in maritime tradition.", icon: Anchor },
  { year: "1970", text: "With a single chartered cargo vessel, Aponte founds the Mediterranean Shipping Company (MSC) in Naples, laying the foundation of what would become a global empire.", icon: Ship },
  { year: "1980s", text: "MSC expands aggressively across Atlantic and Mediterranean trade routes, building a fleet and establishing a presence in every major port city.", icon: Globe },
  { year: "1995", text: "MSC Cruises is launched as a bold diversification play. It will grow to become the world's third-largest cruise line with a fleet of ultra-luxury vessels.", icon: Crown },
  { year: "2003", text: "Terminal Investment Limited (TiL) is created to manage port terminal operations worldwide, adding vertical integration to MSC's logistics dominance.", icon: Building },
  { year: "2014", text: "Diego Aponte, son of the founder, assumes the role of President of MSC Group — ushering in an era of digital transformation and exponential growth.", icon: Users },
  { year: "2022", text: "MSC officially surpasses Maersk to become the world's largest container shipping company. The Aponte family fortune exceeds USD 30 billion.", icon: BarChart3 },
  { year: "2024", text: "The Aponte family establishes Multi Investment in Geneva — a dedicated, institutional-grade family office to deploy capital across real estate, private equity, venture capital, and alternative assets.", icon: Landmark },
];

const values = [
  { icon: Anchor, title: "Maritime Heritage", desc: "Five decades of building the world's largest shipping empire have instilled a culture of discipline, operational excellence, and bold ambition." },
  { icon: TrendingUp, title: "Generational Thinking", desc: "We invest with a 50-year horizon. Just as MSC was built ship by ship, we construct portfolios designed to compound value across generations." },
  { icon: Shield, title: "Capital Preservation", desc: "The primary mandate is to protect and grow the family legacy. Every allocation is stress-tested against downside scenarios." },
  { icon: Globe, title: "Global Network", desc: "With roots in Naples, headquarters in Geneva, and presence in Monaco — backed by a network spanning 155 countries." },
  { icon: Target, title: "Strategic Conviction", desc: "We don't follow trends — we identify structural shifts before the market. Our investments reflect deep sector expertise." },
  { icon: Award, title: "Operational Excellence", desc: "Inherited from MSC's legendary efficiency, we bring hands-on value creation to every portfolio company." },
];

const keyFigures = [
  { value: "CHF 3B+", label: "Assets Under Management", sub: "Across all strategies" },
  { value: "54+", label: "Years of Legacy", sub: "Since MSC's founding" },
  { value: "800+", label: "Vessels in MSC Fleet", sub: "World's largest fleet" },
  { value: "155", label: "Countries Served", sub: "Global footprint" },
  { value: "$30B+", label: "Family Net Worth", sub: "Forbes estimate" },
  { value: "500+", label: "Ports Worldwide", sub: "MSC network reach" },
];

const investmentAreas = [
  { icon: Building, title: "Real Estate", desc: "Prime commercial and residential assets across European gateway cities" },
  { icon: Briefcase, title: "Private Equity", desc: "Control and growth equity positions in mid-market companies" },
  { icon: TrendingUp, title: "Venture Capital", desc: "Early-stage investments from Seed to Series B in high-conviction sectors" },
  { icon: BarChart3, title: "Public Markets", desc: "Diversified global equity and fixed income portfolios" },
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero — asymmetric, editorial */}
      <section className="pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-6"
              >
                About Multi Investment
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[2rem] md:text-[3.2rem] lg:text-[3.8rem] font-serif font-bold text-foreground leading-[1.05] mb-6"
              >
                From a Single Ship
                <br />
                to a <span className="text-gradient-gold italic">Global Empire</span>
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-accent/40 origin-left mb-6"
                style={{ width: "40%" }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 lg:pb-3"
            >
              <p className="text-muted-foreground text-[15px] leading-[1.85] max-w-md">
                Multi Investment is the family office of the Aponte dynasty — founders of the Mediterranean Shipping Company (MSC), the world's largest container shipping line. Established in Geneva in 2024.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Family Office", "Est. 2024", "Geneva", "CHF 3B+"].map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="px-3 py-1.5 rounded-full bg-primary/[0.06] text-muted-foreground text-[11px] font-medium"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Figures — varied sizes, not uniform */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-baseline justify-between gap-6">
            {keyFigures.map((fig, i) => {
              const sizes = ["text-3xl md:text-4xl", "text-xl md:text-2xl", "text-2xl md:text-3xl", "text-lg md:text-xl", "text-2xl md:text-3xl", "text-xl md:text-2xl"];
              return (
                <motion.div
                  key={fig.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`text-center flex-1 min-w-[100px] ${i === 1 ? "mt-4" : i === 3 ? "mt-2" : ""}`}
                >
                  <motion.p
                    className={`${sizes[i]} font-serif font-bold text-foreground leading-none`}
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {fig.value}
                  </motion.p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] mt-1.5">{fig.label}</p>
                  <p className="text-[8px] text-muted-foreground/50 mt-0.5">{fig.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Aponte Dynasty — editorial layout */}
      <section className="pt-16 md:pt-24 pb-20 md:pb-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Left-aligned header */}
            <div className="max-w-md mb-14 md:mb-20">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
              >
                The Founders
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[1.7rem] md:text-[2.4rem] font-serif font-bold text-primary-foreground leading-[1.1]"
              >
                The Aponte
                <span className="block text-accent/80 italic font-normal text-[0.7em] mt-1">Dynasty.</span>
              </motion.h2>
            </div>

            {/* Gianluigi — image left, text right, asymmetric */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-6 mb-8"
            >
              <div className="lg:col-span-4">
                <img
                  src={gianluigiPhoto}
                  alt="Gianluigi Aponte, Founder of MSC Group"
                  className="w-full h-[300px] md:h-[420px] object-cover object-top"
                  style={{ borderRadius: "20px 3px 3px 20px" }}
                />
              </div>
              <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Ship className="h-5 w-5 text-primary-foreground/70" />
                  </div>
                  <div>
                    <h2 className="text-[1.5rem] md:text-[2rem] font-serif font-bold text-primary-foreground leading-tight">Gianluigi Aponte</h2>
                    <p className="text-primary-foreground/50 text-[13px] font-medium">Founder & Chairman, MSC Group</p>
                  </div>
                </div>
                <div className="flex gap-3 mb-6">
                  {[{ v: "$30B+", l: "Fortune" }, { v: "$80B", l: "Peak Revenue" }, { v: "#1", l: "Shipping" }].map((s) => (
                    <div key={s.l} className="bg-primary-foreground/[0.06] rounded-lg px-3.5 py-2.5 text-center flex-1">
                      <p className="text-sm font-serif font-bold text-primary-foreground">{s.v}</p>
                      <p className="text-[8px] text-primary-foreground/40 uppercase tracking-wider">{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 text-primary-foreground/70 text-[13.5px] leading-[1.8]">
                  <p>Born into a modest family on Italy's Amalfi Coast, he trained as a <span className="text-primary-foreground font-semibold">maritime captain</span> before launching MSC from a small office in Naples in 1970.</p>
                  <p>His countercyclical strategy — buying ships at distressed prices during downturns — allowed MSC to grow faster than any rival. Today, his empire spans <span className="text-primary-foreground font-semibold">800+ vessels, 500+ ports, 155 countries</span>.</p>
                </div>
              </div>
            </motion.div>

            {/* Diego — reversed: text left, image right */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5 text-primary-foreground/70" />
                  </div>
                  <div>
                    <h2 className="text-[1.3rem] md:text-[1.8rem] font-serif font-bold text-primary-foreground leading-tight">Diego Aponte</h2>
                    <p className="text-primary-foreground/50 text-[13px] font-medium">President, MSC Group & Founder of Multi Investment</p>
                  </div>
                </div>
                <div className="space-y-3 text-primary-foreground/70 text-[13.5px] leading-[1.8]">
                  <p>Diego joined the family business in the early 1990s and was appointed <span className="text-primary-foreground font-semibold">President in 2014</span>. He doubled capacity in under a decade and drove MSC Cruises' €30B+ order book.</p>
                  <p>In 2024, Diego personally spearheaded <span className="text-primary-foreground font-semibold">Multi Investment</span> — a Geneva-based family office to diversify the Aponte wealth into real estate, private equity, and venture capital.</p>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
                <img
                  src={diegoPhoto}
                  alt="Diego Aponte, President of MSC Group"
                  className="w-full h-[280px] md:h-[380px] object-cover object-top"
                  style={{ borderRadius: "3px 20px 20px 3px" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What MSC Does — asymmetric grid */}
      <section className="pt-20 md:pt-28 pb-14 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Right-aligned header */}
            <div className="flex justify-end mb-14 md:mb-20">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right max-w-md"
              >
                <p className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">L'Empire MSC</p>
                <h2 className="text-[1.5rem] md:text-[2.2rem] font-serif font-bold text-foreground leading-tight">
                  What is <span className="text-gradient-gold">MSC Group</span>?
                </h2>
              </motion.div>
            </div>

            {/* Bento-style: 1 large + 3 smaller */}
            <div className="grid md:grid-cols-12 gap-4">
              {[
                { icon: Ship, title: "MSC Cargo", desc: "World's #1 container shipping line. 800+ vessels, 500+ ports, 155 countries.", stats: [{ v: "#1", l: "Rank" }, { v: "800+", l: "Vessels" }], span: "md:col-span-7 md:row-span-2" },
                { icon: Crown, title: "MSC Cruises", desc: "World's 3rd largest cruise operator. €30B+ order book.", stats: [{ v: "#3", l: "Rank" }, { v: "22", l: "Ships" }], span: "md:col-span-5" },
                { icon: Building, title: "TiL — Terminals", desc: "70+ port terminals across 5 continents.", stats: [{ v: "70+", l: "Terminals" }], span: "md:col-span-5" },
              ].map((div, i) => (
                <motion.div
                  key={div.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${div.span} bg-card border border-border hover:border-accent/30 transition-all duration-300 group ${
                    i === 0 ? "rounded-3xl p-8 md:p-10" : "rounded-2xl p-6 md:p-7"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300 ${
                        i === 0 ? "w-12 h-12" : "w-10 h-10"
                      }`}
                      whileHover={{ rotate: 6 }}
                    >
                      <div.icon className={`text-primary group-hover:text-primary-foreground transition-colors ${i === 0 ? "h-5 w-5" : "h-4 w-4"}`} />
                    </motion.div>
                    <h3 className={`text-foreground font-serif font-semibold ${i === 0 ? "text-xl" : "text-base"}`}>{div.title}</h3>
                  </div>
                  <p className={`text-muted-foreground leading-relaxed mb-5 ${i === 0 ? "text-sm max-w-md" : "text-[13px]"}`}>{div.desc}</p>
                  <div className="flex gap-2">
                    {div.stats.map((s) => (
                      <div key={s.l} className="bg-muted/50 rounded-lg px-3 py-2 text-center">
                        <p className={`font-serif font-bold text-foreground ${i === 0 ? "text-lg" : "text-sm"}`}>{s.v}</p>
                        <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Revenue highlight — off-center */}
            <div className="grid md:grid-cols-12 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 md:col-start-3 bg-card border border-accent/20 rounded-2xl p-7 md:p-8"
              >
                <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] mb-2">Combined Group Revenue (Peak)</p>
                <p className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold">$80+ Billion</p>
                <p className="text-muted-foreground text-[13px] mt-2 max-w-lg">
                  Making MSC Group one of the largest privately held companies in the world — entirely family-owned.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Multi Investment Exists — editorial pull */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <p className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">The Thesis</p>
                <h2 className="text-[1.5rem] md:text-[2rem] font-serif font-bold text-foreground leading-tight mb-4">
                  Why Multi Investment
                  <span className="block text-accent italic font-normal text-[0.7em] mt-1">Exists.</span>
                </h2>
                <div className="w-10 h-px bg-accent/40 mt-4" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:col-start-6"
            >
              <div className="space-y-5 text-muted-foreground text-[14.5px] leading-[1.85]">
                <p>The Aponte family built one of the greatest private fortunes in European history through a single, concentrated bet: global shipping. While that bet has paid off spectacularly — yielding a fortune north of <span className="text-foreground font-semibold">$30 billion</span> — it also created a concentration risk that grows with each passing year.</p>
                <p><span className="text-foreground font-semibold">Multi Investment was created in 2024</span> with a clear mandate: to systematically deploy capital outside of maritime into a diversified portfolio of world-class assets.</p>
                <p>Unlike traditional family offices, Multi Investment benefits from the <span className="text-foreground font-semibold">global infrastructure, relationships, and deal flow</span> of the MSC network. With a presence in 155 countries, we see opportunities before the market does.</p>
              </div>

              {/* Investment Areas — irregular */}
              <div className="grid grid-cols-2 gap-3 mt-10">
                {investmentAreas.map((area, i) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className={`border border-border bg-card p-4 group hover:border-accent/30 transition-all ${
                      i === 0 ? "rounded-2xl" : i === 1 ? "rounded-xl" : i === 2 ? "rounded-xl" : "rounded-2xl"
                    }`}
                  >
                    <area.icon className="h-4 w-4 text-muted-foreground/60 mb-2 group-hover:text-accent transition-colors" />
                    <h3 className={`text-foreground font-serif font-semibold mb-1 ${i === 0 ? "text-[15px]" : "text-[13px]"}`}>{area.title}</h3>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">{area.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 md:mb-20 max-w-lg">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
              >
                Milestones
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[1.6rem] md:text-[2.3rem] font-serif font-bold text-foreground leading-tight"
              >
                From One Ship to a
                <span className="block text-muted-foreground/60 italic font-normal text-[0.75em] mt-1">Global Empire</span>
              </motion.h2>
            </div>

            {/* Desktop: alternating timeline */}
            <div className="hidden md:block relative">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent origin-top"
              />

              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.06 }}
                    className={`relative flex items-center mb-10 last:mb-0 ${isLeft ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`w-[44%] ${isLeft ? "pr-10 text-right" : "pl-10 text-left"}`}>
                      <motion.div
                        className={`bg-card border border-border p-5 hover:border-accent/30 hover:shadow-md transition-all duration-300 group cursor-default ${
                          i % 3 === 0 ? "rounded-2xl" : i % 3 === 1 ? "rounded-xl" : "rounded-2xl"
                        }`}
                        whileHover={{ y: -3 }}
                      >
                        <div className={`flex items-center gap-2.5 mb-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                          <div className={`flex items-center gap-2.5 ${isLeft ? "flex-row-reverse" : ""}`}>
                            <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                              <m.icon className="h-3.5 w-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <span className={`text-foreground font-serif font-bold ${
                              i === 0 ? "text-xl" : i === milestones.length - 1 ? "text-2xl" : "text-lg"
                            }`}>{m.year}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-[13px] leading-relaxed">{m.text}</p>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 + 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-3 border-background shadow-[0_0_10px_hsl(var(--accent)/0.3)] z-10"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4 pb-7 last:pb-0 group relative"
                >
                  <div className="flex flex-col items-center z-10">
                    <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <m.icon className="h-3.5 w-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 flex-1 group-hover:border-accent/30 transition-all">
                    <span className="text-foreground font-serif font-bold text-lg">{m.year}</span>
                    <p className="text-muted-foreground mt-1 text-[13px] leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values — irregular columns */}
      <section className="pt-16 md:pt-20 pb-20 md:pb-28 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute left-0 bottom-0 text-[10rem] md:text-[16rem] font-serif font-bold text-primary-foreground/[0.015] select-none leading-none pointer-events-none"
          style={{ transform: "translate(-10%, 20%) rotate(3deg)" }}
        >
          VI
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Right-aligned header */}
            <div className="flex justify-end mb-14 md:mb-20">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right max-w-sm"
              >
                <p className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Our Philosophy</p>
                <h2 className="text-[1.5rem] md:text-[2.2rem] font-serif font-bold text-primary-foreground leading-tight">What Drives Us</h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-5">
              {values.map((v, i) => {
                const cols = ["md:col-span-4", "md:col-span-5 md:col-start-6", "md:col-span-3 md:col-start-10", "md:col-span-5", "md:col-span-4 md:col-start-7", "md:col-span-3 md:col-start-11"];
                const offsets = ["", "md:mt-12", "md:-mt-4", "md:mt-6", "md:-mt-8", "md:mt-10"];
                const styles = [
                  "border-l-2 border-accent/40 pl-5",
                  "bg-primary-foreground/[0.03] rounded-2xl p-5",
                  "border-l-2 border-primary-foreground/10 pl-5",
                  "bg-primary-foreground/[0.03] rounded-xl p-5",
                  "border-l-2 border-accent/30 pl-5",
                  "border-l-2 border-primary-foreground/10 pl-5",
                ];
                const titleSizes = ["text-xl", "text-lg", "text-base", "text-lg", "text-xl", "text-base"];

                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`${cols[i]} ${offsets[i]}`}
                  >
                    <motion.div className={`${styles[i]} py-2`} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <v.icon className="h-4 w-4 text-accent/60 mb-3" />
                      <h3 className={`font-serif font-semibold text-primary-foreground mb-2 ${titleSizes[i]}`}>{v.title}</h3>
                      <p className="text-primary-foreground/40 text-[13px] leading-relaxed">{v.desc}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission — asymmetric pull quote */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-6">
            <div className="lg:col-span-3">
              <Landmark className="h-8 w-8 text-accent/60 mb-3" />
              <h2 className="text-lg font-serif font-bold text-foreground">Our Mission</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 hidden lg:flex justify-center"
            >
              <div className="w-px h-20 bg-accent/30" />
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 text-[15px] md:text-lg font-serif text-foreground/70 italic leading-[1.8]"
            >
              "To build and preserve multigenerational wealth through disciplined capital deployment, strategic diversification, and an unwavering commitment to excellence — guided by the values of integrity, sustainability, and the enduring legacy of the Aponte family."
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-10 md:pb-16 pt-4">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <h2 className="text-[1.5rem] md:text-[2rem] font-serif font-bold text-foreground leading-tight mb-3">
                Ready to
                <span className="block text-accent italic font-normal text-[0.8em]">Learn More?</span>
              </h2>
              <p className="text-muted-foreground text-[14px] leading-relaxed max-w-md mb-6">
                Discover how Multi Investment can help you access institutional-grade opportunities backed by one of Europe's most powerful business families.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5 lg:col-start-8 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-[13px] hover:opacity-90 transition-opacity"
              >
                Contact Us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-[13px] hover:bg-muted transition-colors"
              >
                Meet Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
