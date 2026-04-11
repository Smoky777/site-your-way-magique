import PageLayout from "@/components/PageLayout";
import mscShip from "@/assets/msc-ship.jpg";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, Landmark, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: TrendingUp, title: "Asset Management", desc: "Diversified portfolio strategies across global markets.", path: "/asset-management" },
  { icon: Shield, title: "Wealth Management", desc: "Bespoke planning for UHNW individuals and family offices.", path: "/wealth-management" },
  { icon: Landmark, title: "Investment Strategies", desc: "Private Equity, Seed to Growth stage investments.", path: "/investment-strategies" },
  { icon: Building2, title: "Real Estate", desc: "Prime acquisitions across Europe's top locations.", path: "/real-estate" },
];

const MagneticLink = ({ children, to, className }: { children: React.ReactNode; to: string; className?: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        ref={ref}
        to={to}
        className={className}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
          y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
      >
        {children}
      </Link>
    </motion.div>
  );
};

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />

      {/* About — image RIGHT, text LEFT, uneven spacing */}
      <section className="pt-16 md:pt-32 pb-14 md:pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-14 md:mb-24 ml-2"
          >
            001 — Who We Are
          </motion.p>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-4 items-end">
            <div className="lg:col-span-5 lg:pb-6 order-2 lg:order-1">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-[1.7rem] md:text-[2.8rem] font-serif font-bold text-primary-foreground leading-[1.05] mb-5"
              >
                A family-founded firm
                <br className="hidden md:block" />
                <span className="text-primary-foreground/60 font-normal italic text-[0.85em]">with a global vision</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-primary-foreground/45 leading-[1.9] text-[14.5px] max-w-[26rem] mb-8"
              >
                Founded by the Aponte family — heirs to the MSC shipping legacy — Multi Investment brings a unique blend of entrepreneurial heritage and institutional rigour.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <MagneticLink to="/about" className="text-accent font-medium text-[13px] inline-flex items-center gap-2 hover:gap-3 transition-all group">
                  Read our full story <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </MagneticLink>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:-mt-16"
            >
              <div className="relative">
                <motion.img
                  src={mscShip}
                  alt="MSC cargo ship sailing on the ocean"
                  className="w-full h-[280px] md:h-[490px] object-cover"
                  style={{ borderRadius: "20px 3px 3px 20px" }}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-5 left-5 bg-accent text-accent-foreground rounded-xl px-5 py-3.5 shadow-xl"
                >
                  <p className="text-xl font-serif font-bold leading-none">2024</p>
                  <p className="text-[9px] uppercase tracking-wider mt-1 opacity-60">Year Founded</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats — asymmetric band with varied sizing */}
      <section className="bg-primary border-t border-primary-foreground/[0.06]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto flex flex-wrap items-baseline justify-between py-8 md:py-12 gap-8"
          >
            {[
              { val: "3B+", label: "CHF AUM", size: "text-4xl md:text-5xl" },
              { val: "50+", label: "Projects", size: "text-2xl md:text-3xl" },
              { val: "100+", label: "Partners", size: "text-3xl md:text-4xl" },
              { val: "Geneva", label: "Headquarters", size: "text-xl md:text-2xl" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center flex-1 min-w-[100px]"
              >
                <motion.p
                  className={`${s.size} font-serif font-bold text-primary-foreground leading-none`}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {s.val}
                </motion.p>
                <p className="text-[9px] text-primary-foreground/25 uppercase tracking-[0.22em] mt-2">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Thin accent divider — intentionally off-center */}
      <div className="bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
              className="h-px bg-accent/30 origin-left"
              style={{ width: "38%" }}
            />
          </div>
        </div>
      </div>

      {/* Services — large left column + stacked right */}
      <section className="pt-20 md:pt-32 pb-20 md:pb-28 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header — right-aligned */}
            <div className="flex justify-end mb-12 md:mb-20">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right max-w-lg"
              >
                <p className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">
                  Our Services
                </p>
                <h2 className="text-[1.6rem] md:text-[2.3rem] font-serif font-bold text-foreground leading-tight">
                  How we create
                  <span className="block text-accent italic font-normal text-[0.75em] mt-1">lasting value</span>
                </h2>
              </motion.div>
            </div>

            {/* Asymmetric layout */}
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
                  <div className="relative h-full min-h-[340px] lg:min-h-full border border-border rounded-3xl bg-card p-8 md:p-10 flex flex-col justify-end hover:border-accent/30 transition-all duration-500 overflow-hidden">
                    {(() => { const Icon = services[0].icon; return (
                      <motion.div
                        className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary transition-all duration-500"
                        whileHover={{ rotate: 8, scale: 1.15 }}
                      >
                        <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </motion.div>
                    ); })()}
                    <div className="absolute top-4 left-7 text-[5.5rem] font-serif font-bold text-border/40 leading-none select-none pointer-events-none">01</div>
                    <div className="relative mt-auto">
                      <h3 className="text-xl md:text-[1.7rem] font-serif font-bold text-foreground mb-2.5 group-hover:text-accent transition-colors leading-tight">
                        {services[0].title}
                      </h3>
                      <p className="text-muted-foreground text-[13px] mb-5 max-w-sm leading-relaxed">{services[0].desc}</p>
                      <span className="text-accent text-[13px] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <ArrowUpRight className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Remaining services — stacked, each slightly different */}
              {services.slice(1).map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                  className="lg:col-span-7"
                >
                  <Link to={s.path} className="group block">
                    <div className={`flex items-center gap-5 border border-border bg-card hover:bg-accent/5 hover:border-accent/30 transition-all duration-300 ${
                      i === 0 ? "py-7 px-7 md:px-9 rounded-2xl" : i === 1 ? "py-5 px-6 md:px-8 rounded-xl" : "py-6 px-6 md:px-8 rounded-2xl"
                    }`}>
                      <span className={`font-serif font-bold text-border/50 select-none shrink-0 ${
                        i === 0 ? "text-3xl w-12" : i === 1 ? "text-xl w-8" : "text-2xl w-10"
                      }`}>0{i + 2}</span>
                      <motion.div
                        className={`rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300 ${
                          i === 1 ? "w-10 h-10" : "w-12 h-12"
                        }`}
                        whileHover={{ rotate: -6 }}
                      >
                        <s.icon className={`text-primary group-hover:text-primary-foreground transition-colors duration-300 ${
                          i === 1 ? "h-4 w-4" : "h-5 w-5"
                        }`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-serif font-semibold text-foreground group-hover:text-accent transition-colors ${
                          i === 0 ? "text-lg" : i === 1 ? "text-base" : "text-[1.1rem]"
                        }`}>{s.title}</h3>
                        <p className={`text-muted-foreground mt-0.5 ${i === 1 ? "text-xs" : "text-sm"}`}>{s.desc}</p>
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

      {/* Values — dark, irregular layout */}
      <section className="pt-20 md:pt-28 pb-28 md:pb-40 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative — slightly rotated */}
        <motion.div
          className="absolute right-0 top-0 text-[12rem] md:text-[20rem] font-serif font-bold text-primary-foreground/[0.02] select-none leading-none tracking-tighter pointer-events-none"
          style={{ transform: "translate(15%, -10%) rotate(-4deg)" }}
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          III
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Left-aligned header this time */}
            <div className="mb-16 md:mb-24 max-w-md">
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
                className="text-[1.8rem] md:text-[2.5rem] font-serif font-bold text-primary-foreground leading-[1.1]"
              >
                Built on principle,
                <br />
                <span className="text-accent/80 text-[0.7em] font-normal">not trends.</span>
              </motion.h2>
            </div>

            {/* Irregular 3-col with different card styles */}
            <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-5">
              {[
                { title: "Integrity", desc: "Transparency and honesty are at the core of every client relationship.", emoji: "🤝", col: "md:col-span-3", offset: "", style: "border-l-2 border-accent/40 pl-6" },
                { title: "Sustainability", desc: "ESG principles woven into our process — responsible investing is smart investing.", emoji: "🌱", col: "md:col-span-5 md:col-start-5", offset: "md:mt-20", style: "bg-primary-foreground/[0.03] rounded-2xl p-6" },
                { title: "Legacy", desc: "We think in generations, not quarters. Rooted in the Aponte family's long-term vision.", emoji: "🏛️", col: "md:col-span-3 md:col-start-10", offset: "md:-mt-6", style: "border-l-2 border-primary-foreground/10 pl-6" },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.18 }}
                  className={`${v.col} ${v.offset}`}
                >
                  <motion.div
                    className={`${v.style} py-2`}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className={`mb-3 block ${i === 1 ? "text-4xl" : "text-2xl"}`}>{v.emoji}</span>
                    <h3 className={`font-serif font-semibold text-primary-foreground mb-2.5 ${
                      i === 0 ? "text-lg" : i === 1 ? "text-2xl" : "text-xl"
                    }`}>{v.title}</h3>
                    <p className={`text-primary-foreground/40 leading-relaxed ${i === 1 ? "text-[13px]" : "text-sm"}`}>{v.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote — shifted right, more intimate */}
      <section className="py-14 md:py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-6">
            <div className="lg:col-span-3" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 flex lg:justify-end"
            >
              <div className="w-12 h-px bg-accent/60" />
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 text-lg md:text-[1.35rem] font-serif text-foreground/70 italic leading-[1.75]"
            >
              "We believe in long-term relationships, sustainable growth, and creating real impact through thoughtful capital deployment."
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* CTA — full bleed, editorial */}
      <section className="pb-10 md:pb-14 pt-4">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
            style={{ borderRadius: "6px 28px 28px 6px" }}
          >
            <motion.video
              autoPlay muted loop playsInline
              className="w-full h-64 md:h-[26rem] object-cover"
              whileInView={{ scale: [1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </motion.video>
            <div className="absolute inset-0 bg-[hsl(150,15%,6%)]/75" />
            <div className="absolute inset-0 flex items-end p-7 md:p-12">
              <div className="max-w-sm">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[1.4rem] md:text-[1.9rem] font-serif font-bold text-white mb-2 leading-snug"
                >
                  Ready to start
                  <span className="block font-normal italic text-white/70 text-[0.8em]">a conversation?</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-white/40 mb-7 text-[13px] leading-relaxed"
                >
                  Let's discuss how we can help you achieve your financial goals.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <MagneticLink to="/contact" className="inline-block">
                    <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold text-[13px] hover:opacity-90 transition-opacity inline-flex items-center gap-2 cursor-pointer">
                      Schedule a Consultation <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </MagneticLink>
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
