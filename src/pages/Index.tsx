import PageLayout from "@/components/PageLayout";
import mscShip from "@/assets/msc-ship.jpg";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, Landmark, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: TrendingUp, title: "Asset Management", desc: "Diversified portfolio strategies across global markets.", path: "/asset-management" },
  { icon: Shield, title: "Wealth Management", desc: "Bespoke planning for UHNW individuals and family offices.", path: "/wealth-management" },
  { icon: Landmark, title: "Investment Strategies", desc: "Private Equity, Seed to Growth stage investments.", path: "/investment-strategies" },
  { icon: Building2, title: "Real Estate", desc: "Prime acquisitions across Europe's top locations.", path: "/real-estate" },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />

      {/* About — image RIGHT, text LEFT, tight top, generous bottom */}
      <section className="pt-20 md:pt-40 pb-12 md:pb-16 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-20 md:mb-28 ml-2"
          >
            001 — Who We Are
          </motion.p>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-4 items-end">
            {/* Text — left, bottom-aligned */}
            <div className="lg:col-span-5 lg:pb-8 order-2 lg:order-1">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-3xl md:text-[2.6rem] font-serif font-bold text-primary-foreground leading-[1.08] mb-7"
              >
                A family-founded firm
                <br className="hidden md:block" />
                with a global vision
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-primary-foreground/50 leading-[1.85] text-[15px] max-w-md mb-10"
              >
                Founded by the Aponte family — heirs to the MSC shipping legacy — Multi Investment brings a unique blend of entrepreneurial heritage and institutional rigour.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/about" className="text-accent font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all group">
                  Read our full story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Image — right, taller, bleeds upward */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:-mt-20"
            >
              <div className="relative">
                <img
                  src={mscShip}
                  alt="MSC cargo ship sailing on the ocean"
                  className="w-full h-[300px] md:h-[520px] object-cover"
                  style={{ borderRadius: "24px 2px 2px 24px" }}
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 left-6 bg-accent text-accent-foreground rounded-2xl px-6 py-4 shadow-xl"
                >
                  <p className="text-2xl font-serif font-bold leading-none">2024</p>
                  <p className="text-[10px] uppercase tracking-wider mt-1 opacity-70">Year Founded</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats — full-width band, no padding symmetry */}
      <section className="bg-primary border-t border-primary-foreground/[0.06]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto flex flex-wrap items-center justify-between py-10 md:py-14 gap-8"
          >
            {[
              { val: "3B+", label: "CHF AUM" },
              { val: "50+", label: "Projects" },
              { val: "100+", label: "Partners" },
              { val: "Geneva", label: "Headquarters" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center flex-1 min-w-[120px]"
              >
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground leading-none">{s.val}</p>
                <p className="text-[10px] text-primary-foreground/30 uppercase tracking-[0.2em] mt-2">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services — large left column + stacked right, NOT a uniform grid */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header — right-aligned, breaking convention */}
            <div className="flex justify-end mb-16 md:mb-24">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right max-w-lg"
              >
                <p className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">
                  Our Services
                </p>
                <h2 className="text-3xl md:text-[2.5rem] font-serif font-bold text-foreground leading-tight">
                  How we create value
                </h2>
              </motion.div>
            </div>

            {/* Asymmetric: featured card left + list right */}
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
              {/* Featured first service — large card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 lg:row-span-2"
              >
                <Link to={services[0].path} className="group block h-full">
                  <div className="relative h-full min-h-[320px] lg:min-h-full border border-border rounded-3xl bg-card p-8 md:p-10 flex flex-col justify-end hover:border-accent/30 transition-all duration-500 overflow-hidden">
                    {(() => { const Icon = services[0].icon; return (
                      <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                    ); })()}
                    <div className="absolute top-6 left-8 text-[6rem] font-serif font-bold text-border/50 leading-none select-none">01</div>
                    <div className="relative mt-auto">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {services[0].title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 max-w-sm">{services[0].desc}</p>
                      <span className="text-accent text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Remaining services — stacked on the right */}
              {services.slice(1).map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="lg:col-span-7"
                >
                  <Link to={s.path} className="group block">
                    <div className="flex items-center gap-5 py-6 px-6 md:px-8 border border-border rounded-2xl bg-card hover:bg-accent/5 hover:border-accent/30 transition-all duration-300">
                      <span className="text-2xl font-serif font-bold text-border/60 select-none w-10 shrink-0">0{i + 2}</span>
                      <div className="w-12 h-12 rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                        <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-accent group-hover:rotate-0 -rotate-45 transition-all duration-300 shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values — FULL WIDTH dark, text centered top, cards spread irregularly */}
      <section className="py-24 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Oversized decorative */}
        <div className="absolute right-0 top-0 text-[14rem] md:text-[22rem] font-serif font-bold text-primary-foreground/[0.015] select-none leading-none tracking-tighter pointer-events-none -translate-y-16 translate-x-12">
          III
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Centered header */}
            <div className="text-center mb-20 md:mb-28">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-4"
              >
                003 — What Guides Us
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-[2.8rem] font-serif font-bold text-primary-foreground leading-tight"
              >
                Built on principle,
                <br />
                not trends
              </motion.h2>
            </div>

            {/* Irregular 3-col: narrow / wide / medium, different vertical offsets */}
            <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-6">
              {[
                { title: "Integrity", desc: "Transparency and honesty are at the core of every client relationship.", emoji: "🤝", col: "md:col-span-3", offset: "" },
                { title: "Sustainability", desc: "ESG principles woven into our process — responsible investing is smart investing.", emoji: "🌱", col: "md:col-span-5 md:col-start-5", offset: "md:mt-16" },
                { title: "Legacy", desc: "We think in generations, not quarters. Rooted in the Aponte family's long-term vision.", emoji: "🏛️", col: "md:col-span-3 md:col-start-10", offset: "md:-mt-8" },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`${v.col} ${v.offset}`}
                >
                  <div className="border-l-2 border-accent/40 pl-6 py-2">
                    <span className="text-3xl mb-4 block">{v.emoji}</span>
                    <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-3">{v.title}</h3>
                    <p className="text-primary-foreground/45 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote — narrow asymmetric interlude */}
      <section className="py-16 md:py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="w-16 h-px bg-accent" />
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8 text-xl md:text-2xl font-serif text-foreground/80 italic leading-relaxed"
            >
              "We believe in long-term relationships, sustainable growth, and creating real impact through thoughtful capital deployment."
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* CTA — full bleed, editorial */}
      <section className="pb-8 md:pb-12 pt-2">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
            style={{ borderRadius: "4px 32px 32px 4px" }}
          >
            <video autoPlay muted loop playsInline className="w-full h-72 md:h-[28rem] object-cover">
              <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[hsl(150,15%,6%)]/75" />
            <div className="absolute inset-0 flex items-end p-8 md:p-14">
              <div className="max-w-md">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 leading-snug"
                >
                  Ready to start a conversation?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-white/50 mb-8 text-sm"
                >
                  Let's discuss how we can help you achieve your financial goals.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <Link to="/contact">
                    <button className="bg-accent text-accent-foreground px-7 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                      Schedule a Consultation <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
