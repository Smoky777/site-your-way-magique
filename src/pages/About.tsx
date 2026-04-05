import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import {
  Anchor, TrendingUp, Globe, Shield, Users, Ship, Landmark,
  Crown, BarChart3, Building, Briefcase, Target, Award, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import gianluigiPhoto from "@/assets/gianluigi-aponte.jpg";

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
  { icon: Anchor, title: "Maritime Heritage", desc: "Five decades of building the world's largest shipping empire have instilled a culture of discipline, operational excellence, and bold ambition that permeates everything we do." },
  { icon: TrendingUp, title: "Generational Thinking", desc: "We invest with a 50-year horizon. Just as MSC was built ship by ship, we construct portfolios designed to compound value across generations — never sacrificing long-term returns for short-term gains." },
  { icon: Shield, title: "Capital Preservation", desc: "The primary mandate is to protect and grow the family legacy. Every allocation is stress-tested against downside scenarios, with institutional-grade risk management at every level." },
  { icon: Globe, title: "Global Network", desc: "With roots in Naples, headquarters in Geneva, and presence in Monaco, we sit at the intersection of European finance and global opportunity — backed by a network spanning 155 countries." },
  { icon: Target, title: "Strategic Conviction", desc: "We don't follow trends — we identify structural shifts before the market. From logistics to proptech, our investments reflect deep sector expertise and contrarian thinking." },
  { icon: Award, title: "Operational Excellence", desc: "Inherited from MSC's legendary efficiency, we bring hands-on value creation to every portfolio company — not just capital, but operational expertise and global distribution channels." },
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
      {/* Hero */}
      <section className="py-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm tracking-[0.3em] uppercase mb-4"
            >
              About Multi Investment
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 leading-[1.15]"
            >
              From a Single Ship to a{" "}
              <span className="text-gradient-gold">Global Empire</span>
              <br className="hidden md:block" />
              — Now Investing the Legacy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
            >
              Multi Investment is the family office of the Aponte dynasty — founders of the Mediterranean Shipping Company (MSC), the world's largest container shipping line. Established in Geneva in 2024, we deploy a multi-billion-dollar fortune built over five decades of relentless entrepreneurship into the next generation of world-class investments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Family Office</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Est. 2024</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Geneva, Switzerland</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">CHF 3B+ AUM</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyFigures.map((fig, i) => (
              <motion.div
                key={fig.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-center p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <p className="text-xl md:text-2xl font-serif font-bold text-foreground mb-1">{fig.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{fig.label}</p>
                <p className="text-[10px] text-muted-foreground/60">{fig.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Aponte Dynasty - Full Width Banner */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">The Founders</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                The Aponte Dynasty
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                One of Europe's most formidable business families — builders, visionaries, and now stewards of a fortune that spans continents.
              </p>
            </motion.div>

            {/* Gianluigi Aponte */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl overflow-hidden mb-6"
            >
              {/* Photo + Header */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-72 lg:w-80 shrink-0">
                  <img
                    src={gianluigiPhoto}
                    alt="Gianluigi Aponte, Founder of MSC Group"
                    className="w-full h-64 md:h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 md:p-10 flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Ship className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Gianluigi Aponte</h2>
                      <p className="text-primary text-sm font-medium">Founder & Chairman, MSC Group</p>
                      <p className="text-muted-foreground text-xs mt-1">Born 1940, Sant'Agnello, Italy</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-lg font-serif font-bold text-foreground">$30B+</p>
                  <p className="text-xs text-muted-foreground">Personal Fortune (Forbes)</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-lg font-serif font-bold text-foreground">$80B</p>
                  <p className="text-xs text-muted-foreground">Peak Annual Revenue (MSC)</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-lg font-serif font-bold text-foreground">#1</p>
                  <p className="text-xs text-muted-foreground">World's Largest Shipping Line</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Gianluigi Aponte's story is one of the most remarkable entrepreneurial journeys of the 20th century. Born into a modest family on Italy's Amalfi Coast, he trained as a <span className="text-foreground font-semibold">maritime captain</span> before making a fateful decision in 1970: to charter a single cargo vessel and launch the <span className="text-foreground font-semibold">Mediterranean Shipping Company (MSC)</span> from a small office in Naples.
                </p>
                <p>
                  What followed was five decades of relentless expansion. Aponte possessed an extraordinary ability to <span className="text-primary font-semibold">anticipate market cycles</span> — buying ships at distressed prices during downturns when competitors pulled back, and aggressively scaling capacity during booms. This countercyclical strategy, combined with a refusal to go public or take on outside investors, allowed MSC to grow faster and more freely than any rival.
                </p>
                <p>
                  By the 2000s, MSC had become a <span className="text-foreground font-semibold">global logistics colossus</span>: the world's second-largest container shipping company, a top-three cruise operator via MSC Cruises, and a major port terminal operator through Terminal Investment Limited (TiL). In <span className="text-primary font-semibold">January 2022</span>, MSC officially overtook Denmark's A.P. Møller-Maersk to become the world's #1 container shipping line — a position it has held ever since.
                </p>
                <p>
                  Today, Gianluigi Aponte's empire spans <span className="text-foreground font-semibold">800+ vessels, 500+ ports, 155 countries</span>, with peak annual revenues exceeding <span className="text-primary font-semibold">USD 80 billion</span>. The family fortune — entirely privately held — is estimated at over <span className="text-foreground font-semibold">$30 billion</span>, making the Apontes one of the wealthiest families in Italy, Switzerland, and all of Europe. A once-in-a-generation testament to the power of vision, patience, and family-driven capitalism.
                </p>
              </div>
            </motion.div>

            {/* Diego Aponte */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Diego Aponte</h2>
                  <p className="text-primary text-sm font-medium">President, MSC Group & Founder of Multi Investment</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">Diego Aponte</span> is the eldest son of Gianluigi Aponte and the operational architect behind MSC's modern-day dominance. He joined the family business in the early 1990s, working across every division before being appointed <span className="text-foreground font-semibold">President of the MSC Group in 2014</span>.
                </p>
                <p>
                  Under Diego's leadership, MSC underwent a <span className="text-primary font-semibold">radical transformation</span>. He doubled the company's shipping capacity in under a decade, invested billions in next-generation LNG-powered vessels, spearheaded MSC's digital transformation with AI-driven supply chain platforms, and expanded the terminal portfolio to control strategic chokepoints across Asia, Europe, and the Americas.
                </p>
                <p>
                  Diego also drove the explosive growth of <span className="text-foreground font-semibold">MSC Cruises</span>, overseeing an order book of over €30 billion in new ships that transformed the division into a challenger brand against Royal Caribbean and Carnival. His vision: to make MSC not just the biggest, but the most modern, sustainable, and technologically advanced shipping company on the planet.
                </p>
                <p>
                  In 2024, recognizing that a fortune of this magnitude requires dedicated, institutional-grade stewardship, Diego personally spearheaded the creation of <span className="text-primary font-semibold">Multi Investment</span> — a Geneva-based family office designed to strategically diversify the Aponte wealth beyond maritime into <span className="text-foreground font-semibold">prime real estate, private equity, venture capital, and alternative investments</span>. His mandate: preserve the legacy, multiply the fortune, and build a platform that will serve the family for the next 100 years.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Multi Investment Exists */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">The Thesis</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Why Multi Investment Exists
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-10"
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Aponte family built one of the greatest private fortunes in European history through a single, concentrated bet: global shipping. While that bet has paid off spectacularly — yielding a fortune north of <span className="text-primary font-semibold">$30 billion</span> — it also created a concentration risk that grows with each passing year.
                </p>
                <p>
                  <span className="text-foreground font-semibold">Multi Investment was created in 2024</span> with a clear mandate: to systematically deploy capital outside of maritime into a diversified portfolio of world-class assets. From <span className="text-foreground font-semibold">trophy real estate in London, Geneva, and Monaco</span> to <span className="text-foreground font-semibold">growth equity in European mid-market champions</span> and <span className="text-foreground font-semibold">venture capital backing the next generation of disruptors</span> — we are building a permanent portfolio designed to endure across market cycles and generations.
                </p>
                <p>
                  Unlike traditional family offices, Multi Investment benefits from an unparalleled competitive advantage: the <span className="text-primary font-semibold">global infrastructure, relationships, and deal flow</span> of the MSC network. With a presence in 155 countries, we see opportunities before the market does — and we have the capital, patience, and conviction to act decisively.
                </p>
              </div>
            </motion.div>

            {/* Investment Areas Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {investmentAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-serif text-base font-semibold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Milestones</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                From One Ship to a Global Empire
              </h2>
            </motion.div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-5 pb-8 last:pb-0 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <m.icon className="h-4 w-4 text-primary" />
                    </div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2 pt-1.5">
                    <span className="text-primary font-serif font-bold text-lg">{m.year}</span>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-10 md:p-14 text-center"
            >
              <Landmark className="h-10 w-10 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed max-w-3xl mx-auto mb-8">
                "To build and preserve multigenerational wealth through disciplined capital deployment, strategic diversification, and an unwavering commitment to excellence — guided by the values of integrity, sustainability, and the enduring legacy of the Aponte family."
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">Wealth Preservation</span>
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">Strategic Diversification</span>
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">Generational Legacy</span>
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">Institutional Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                What Drives Us
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-serif text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">
                Ready to Learn More?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Discover how Multi Investment can help you access institutional-grade opportunities backed by one of Europe's most powerful business families.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-colors"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
