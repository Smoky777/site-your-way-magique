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

      {/* About — asymmetric editorial */}
      <section className="pt-32 pb-20 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Offset label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-16 ml-2 md:ml-8"
          >
            001 — Who We Are
          </motion.p>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-6 items-start">
            {/* Image — pushed left, not centered */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              className="lg:col-span-5 lg:-ml-4"
            >
              <div className="relative">
                <img
                  src={mscShip}
                  alt="MSC cargo ship sailing on the ocean"
                  className="w-full h-[320px] md:h-[480px] object-cover"
                  style={{ borderRadius: "2px 24px 24px 2px" }}
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                {/* Floating badge — overlapping the image edge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-8 right-6 md:right-10 bg-accent text-accent-foreground rounded-2xl px-6 py-4 shadow-xl"
                >
                  <p className="text-2xl font-serif font-bold leading-none">2024</p>
                  <p className="text-[10px] uppercase tracking-wider mt-1 opacity-70">Year Founded</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content — offset higher than image */}
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-3xl md:text-[2.8rem] font-serif font-bold text-primary-foreground leading-[1.1] mb-8"
              >
                A family-founded firm<br className="hidden md:block" />
                with a global vision
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-5 mb-12"
              >
                <p className="text-primary-foreground/55 leading-[1.8] text-[15px] max-w-lg">
                  Founded by the Aponte family — heirs to the MSC shipping legacy — Multi Investment brings a unique blend of entrepreneurial heritage and institutional rigour.
                </p>
                <p className="text-primary-foreground/55 leading-[1.8] text-[15px] max-w-lg">
                  We believe in long-term relationships, sustainable growth, and creating real impact through thoughtful capital deployment.
                </p>
              </motion.div>

              {/* Stats — irregular widths, not uniform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="flex items-end gap-12 mb-10"
              >
                <div>
                  <p className="text-4xl font-serif font-bold text-primary-foreground leading-none">3B+</p>
                  <p className="text-[10px] text-primary-foreground/35 uppercase tracking-[0.2em] mt-2">CHF AUM</p>
                </div>
                <div className="w-px h-12 bg-primary-foreground/15" />
                <div>
                  <p className="text-4xl font-serif font-bold text-primary-foreground leading-none">50+</p>
                  <p className="text-[10px] text-primary-foreground/35 uppercase tracking-[0.2em] mt-2">Projects</p>
                </div>
                <div className="w-px h-12 bg-primary-foreground/15 hidden md:block" />
                <div className="hidden md:block">
                  <p className="text-4xl font-serif font-bold text-primary-foreground leading-none">100+</p>
                  <p className="text-[10px] text-primary-foreground/35 uppercase tracking-[0.2em] mt-2">Partners</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/about" className="text-accent font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all group">
                  Read our full story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — staggered, not uniform grid */}
      <section className="pt-24 pb-32 relative">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/50 hidden lg:block" style={{ borderRadius: "40px 0 0 40px" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header — left aligned with large number */}
            <div className="flex items-start gap-6 mb-20">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-[5rem] md:text-[7rem] font-serif font-bold text-border leading-none -mt-4 select-none"
              >
                02
              </motion.span>
              <div className="pt-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-2"
                >
                  Our Services
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl md:text-[2.5rem] font-serif font-bold text-foreground leading-tight"
                >
                  How we create value
                </motion.h2>
              </div>
            </div>

            {/* Staggered service items — not a uniform grid */}
            <div className="space-y-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  style={{ marginLeft: i % 2 === 1 ? "auto" : undefined }}
                  className={`max-w-2xl ${i % 2 === 1 ? "lg:mr-0" : "lg:ml-0"}`}
                >
                  <Link to={s.path} className="group block">
                    <div className="flex items-center gap-6 py-7 px-6 md:px-8 border border-border rounded-2xl bg-card hover:bg-accent/5 hover:border-accent/30 transition-all duration-300">
                      <div className="w-14 h-14 rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                          {s.title}
                        </h3>
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

      {/* Values — editorial overlap style */}
      <section className="py-20 md:py-0 md:min-h-[85vh] bg-primary text-primary-foreground relative flex items-center overflow-hidden">
        {/* Large decorative text */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-serif font-bold text-primary-foreground/[0.02] select-none leading-none tracking-tighter pointer-events-none">
          VALUES
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Offset header */}
            <div className="md:ml-[8%] mb-16">
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
                Built on principle,<br />not trends
              </motion.h2>
            </div>

            {/* Values — asymmetric columns */}
            <div className="grid md:grid-cols-12 gap-y-10 md:gap-6">
              {[
                { title: "Integrity", desc: "Transparency and honesty are at the core of every client relationship.", emoji: "🤝", colClass: "md:col-span-4" },
                { title: "Sustainability", desc: "ESG principles woven into our process — responsible investing is smart investing.", emoji: "🌱", colClass: "md:col-span-4 md:mt-12" },
                { title: "Legacy", desc: "We think in generations, not quarters. Rooted in the Aponte family's long-term vision.", emoji: "🏛️", colClass: "md:col-span-3 md:col-start-10 md:-mt-4" },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={v.colClass}
                >
                  <div className="border-l-2 border-accent/40 pl-6 py-2">
                    <span className="text-3xl mb-4 block">{v.emoji}</span>
                    <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-3">{v.title}</h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — full bleed, editorial */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
            style={{ borderRadius: "4px 32px 32px 4px" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-72 md:h-[28rem] object-cover"
            >
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
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
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
