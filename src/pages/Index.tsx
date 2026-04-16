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

      {/* About — editorial, no numbered label */}
      <section className="pt-24 md:pt-44 pb-16 md:pb-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-4 items-end">
            <div className="lg:col-span-5 lg:pb-6 order-2 lg:order-1">
              <h2 className="text-[1.6rem] md:text-[2.6rem] font-serif font-bold text-primary-foreground leading-[1.08] mb-5">
                A family-founded firm
                <br className="hidden md:block" />
                <span className="text-primary-foreground/55 font-normal italic text-[0.82em]">with a global vision</span>
              </h2>
              <p className="text-primary-foreground/40 leading-[1.95] text-[14.5px] max-w-[26rem] mb-9">
                Founded by the Aponte family — heirs to the MSC shipping legacy — Multi Investment brings a unique blend of entrepreneurial heritage and institutional rigour.
              </p>
              <Link to="/about" className="text-accent font-medium text-[13px] inline-flex items-center gap-2 hover:gap-3 transition-all group">
                Read our full story <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:-mt-20">
              <div className="relative">
                <img
                  src={mscShip}
                  alt="MSC cargo ship sailing on the ocean"
                  className="w-full h-[280px] md:h-[490px] object-cover"
                  style={{ borderRadius: "20px 4px 4px 20px" }}
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div className="absolute -bottom-5 left-5 bg-accent text-accent-foreground rounded-xl px-5 py-3.5 shadow-xl">
                  <p className="text-xl font-serif font-bold leading-none">2024</p>
                  <p className="text-[9px] uppercase tracking-wider mt-1 opacity-60">Year Founded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — tighter, no hover effects, less "dashboard" */}
      <section className="bg-primary border-t border-primary-foreground/[0.05]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 py-10 md:py-14 gap-y-8">
            {[
              { val: "3B+", label: "CHF Under Management" },
              { val: "50+", label: "Active Projects" },
              { val: "100+", label: "Global Partners" },
              { val: "Geneva", label: "Headquarters" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground leading-none">{s.val}</p>
                <p className="text-[10px] text-primary-foreground/30 uppercase tracking-[0.15em] mt-2.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — different approach: no numbers, mixed card sizes, organic feel */}
      <section className="pt-28 md:pt-40 pb-24 md:pb-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header — left this time, simpler */}
            <div className="mb-16 md:mb-24 max-w-lg">
              <p className="text-muted-foreground/60 text-[11px] font-medium tracking-[0.3em] uppercase mb-4">What We Do</p>
              <h2 className="text-[1.5rem] md:text-[2.2rem] font-serif font-bold text-foreground leading-tight">
                Four disciplines,<br />
                one objective.
              </h2>
            </div>

            {/* 2x2 grid with first card spanning full width on mobile, varied on desktop */}
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
              {/* Featured — wider */}
              <Link to={services[0].path} className="group lg:col-span-7">
                <div className="relative border border-border bg-card hover:border-accent/25 transition-colors duration-300 p-8 md:p-10 min-h-[220px] flex flex-col justify-end" style={{ borderRadius: "22px 4px 4px 22px" }}>
                  {(() => { const Icon = services[0].icon; return (
                    <div className="absolute top-7 right-7 w-12 h-12 rounded-2xl bg-primary/[0.05] flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  ); })()}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{services[0].title}</h3>
                  <p className="text-muted-foreground text-[13px] mb-4 max-w-md">{services[0].desc}</p>
                  <span className="text-accent text-[12px] font-medium inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>

              {/* Second — narrower */}
              <Link to={services[1].path} className="group lg:col-span-5">
                <div className="border border-border bg-card hover:border-accent/25 transition-colors duration-300 p-7 md:p-8 min-h-[220px] flex flex-col justify-end rounded-2xl">
                  {(() => { const Icon = services[1].icon; return (
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.05] flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  ); })()}
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">{services[1].title}</h3>
                  <p className="text-muted-foreground text-[13px]">{services[1].desc}</p>
                </div>
              </Link>

              {/* Third — narrow */}
              <Link to={services[2].path} className="group lg:col-span-5">
                <div className="border border-border bg-card hover:border-accent/25 transition-colors duration-300 p-7 md:p-8 min-h-[200px] flex flex-col justify-end rounded-2xl">
                  {(() => { const Icon = services[2].icon; return (
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.05] flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  ); })()}
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">{services[2].title}</h3>
                  <p className="text-muted-foreground text-[13px]">{services[2].desc}</p>
                </div>
              </Link>

              {/* Fourth — wider, different shape */}
              <Link to={services[3].path} className="group lg:col-span-7">
                <div className="relative border border-border bg-card hover:border-accent/25 transition-colors duration-300 p-8 md:p-10 min-h-[200px] flex flex-col justify-end" style={{ borderRadius: "4px 22px 22px 4px" }}>
                  {(() => { const Icon = services[3].icon; return (
                    <div className="absolute top-7 right-7 w-12 h-12 rounded-2xl bg-primary/[0.05] flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  ); })()}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{services[3].title}</h3>
                  <p className="text-muted-foreground text-[13px] mb-4 max-w-md">{services[3].desc}</p>
                  <span className="text-accent text-[12px] font-medium inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values — dark, genuinely different layout: horizontal scroll-like cards on desktop */}
      <section className="pt-24 md:pt-36 pb-28 md:pb-44 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-start">
              {/* Left — sticky header */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <p className="text-primary-foreground/35 text-[11px] font-medium tracking-[0.25em] uppercase mb-4">Our Principles</p>
                <h2 className="text-[1.7rem] md:text-[2.3rem] font-serif font-bold text-primary-foreground leading-[1.1] mb-6">
                  Built on principle,
                  <br />
                  <span className="text-accent/70 text-[0.72em] font-normal">not trends.</span>
                </h2>
                <div className="h-px bg-primary-foreground/10 w-16 mb-6" />
                <p className="text-primary-foreground/35 text-[13px] leading-relaxed max-w-xs">
                  Three values that have guided the Aponte family across five decades of building.
                </p>
              </div>

              {/* Right — stacked cards with varied styles */}
              <div className="lg:col-span-7 lg:col-start-6 space-y-5">
                {[
                  { title: "Integrity", desc: "Transparency and honesty are at the core of every client relationship. We earn trust through action, not promises.", style: "border-l-2 border-accent/50 pl-7 py-4" },
                  { title: "Sustainability", desc: "ESG principles woven into our process — responsible investing is smart investing. We measure impact alongside returns.", style: "bg-primary-foreground/[0.04] rounded-2xl p-7" },
                  { title: "Legacy", desc: "We think in generations, not quarters. Rooted in the Aponte family's long-term vision of building enduring value.", style: "border-l-2 border-primary-foreground/15 pl-7 py-4" },
                ].map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                  >
                    <div className={v.style}>
                      <h3 className={`font-serif font-semibold text-primary-foreground mb-2.5 ${
                        i === 1 ? "text-xl" : "text-lg"
                      }`}>{v.title}</h3>
                      <p className="text-primary-foreground/40 text-[13.5px] leading-relaxed max-w-lg">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote — simple, editorial */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex gap-6 items-start">
            <div className="w-10 h-px bg-accent/50 mt-4 shrink-0 hidden md:block" />
            <blockquote className="text-lg md:text-[1.35rem] font-serif text-foreground/65 italic leading-[1.8]">
              "We believe in long-term relationships, sustainable growth, and creating real impact through thoughtful capital deployment."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA — image background, simple */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto relative overflow-hidden" style={{ borderRadius: "6px 24px 24px 6px" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              // @ts-ignore - iOS Safari needs this
              webkit-playsinline="true"
              preload="auto"
              disablePictureInPicture
              controls={false}
              className="w-full h-56 md:h-72 object-cover pointer-events-none"
            >
              <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[hsl(150,15%,6%)]/75" />
            <div className="absolute inset-0 flex items-end p-7 md:p-12">
              <div className="max-w-sm">
                <h2 className="text-[1.3rem] md:text-[1.8rem] font-serif font-bold text-white mb-2 leading-snug">
                  Ready to start
                  <span className="block font-normal italic text-white/60 text-[0.82em]">a conversation?</span>
                </h2>
                <p className="text-white/35 mb-6 text-[13px]">Let's discuss how we can help you achieve your financial goals.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold text-[13px] hover:opacity-90 transition-opacity">
                  Schedule a Consultation <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
