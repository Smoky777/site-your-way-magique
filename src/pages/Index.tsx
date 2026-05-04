import PageLayout from "@/components/PageLayout";
import mscShip from "@/assets/msc-ship.jpg";
import HeroSection from "@/components/HeroSection";
import DecorativeVideo from "@/components/DecorativeVideo";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, Landmark, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    icon: TrendingUp,
    title: "Asset Management",
    desc: "Diversified portfolio strategies across global public and private markets, calibrated to long-term family office mandates.",
    meta: "Multi-asset · Discretionary",
    path: "/asset-management",
  },
  {
    num: "02",
    icon: Shield,
    title: "Wealth Management",
    desc: "Bespoke planning and stewardship for ultra-high-net-worth individuals, families and single-family offices.",
    meta: "UHNW · Multi-generational",
    path: "/wealth-management",
  },
  {
    num: "03",
    icon: Landmark,
    title: "Investment Strategies",
    desc: "Direct private equity, seed-to-growth venture, convertible notes and SAFTs — sourced through proprietary networks.",
    meta: "Private Equity · Venture",
    path: "/investment-strategies",
  },
  {
    num: "04",
    icon: Building2,
    title: "Real Estate",
    desc: "Prime acquisitions, opportunistic development and core-plus mandates across Europe's most enduring locations.",
    meta: "Core+ · Opportunistic",
    path: "/real-estate",
  },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />

      {/* Institutional band — credibility ribbon */}
      <section className="bg-primary border-y border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { val: "CHF 3B+", label: "Under Management" },
              { val: "USD 10M", label: "Minimum Ticket" },
              { val: "50+", label: "Active Mandates" },
              { val: "1970", label: "Family Heritage" },
            ].map((s) => (
              <div key={s.label} className="text-center py-10 md:py-12 px-4 first:border-l-0">
                <p className="text-2xl md:text-[2rem] font-serif font-bold text-white leading-none lining-nums">
                  {s.val}
                </p>
                <p className="text-[10px] text-white/45 uppercase tracking-[0.22em] mt-3">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — editorial */}
      <section className="pt-24 md:pt-36 pb-20 md:pb-28 bg-primary text-primary-foreground overflow-hidden relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-6 items-end">
            <div className="lg:col-span-5 lg:pb-6 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent" />
                <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-medium">
                  The Firm
                </span>
              </div>
              <h2 className="text-[1.8rem] md:text-[2.8rem] font-serif font-bold text-white leading-[1.05] mb-7">
                A family-founded firm
                <br className="hidden md:block" />
                <span className="text-white/55 font-normal italic text-[0.82em]">
                  with a global vision.
                </span>
              </h2>
              <p className="text-white/60 leading-[1.95] text-[14.5px] max-w-[28rem] mb-6">
                Founded by the Aponte family — heirs to the MSC shipping legacy, a group
                generating over USD 80 billion in annual revenue — Multi Investment combines
                entrepreneurial heritage with the discipline of an institutional allocator.
              </p>
              <p className="text-white/45 leading-[1.95] text-[13.5px] max-w-[28rem] mb-9">
                From Geneva, we manage capital for a curated set of families, foundations
                and partners across more than fifty active mandates worldwide.
              </p>
              <Link
                to="/about"
                className="text-accent font-medium text-[12px] tracking-[0.18em] uppercase inline-flex items-center gap-2 hover:gap-3 transition-all group border-b border-accent/40 pb-1"
              >
                Read our full story{" "}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:-mt-20">
              <div className="relative">
                <img
                  src={mscShip}
                  alt="MSC cargo ship sailing on the ocean"
                  className="w-full h-[280px] md:h-[520px] object-cover"
                  style={{ borderRadius: "20px 4px 4px 20px" }}
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div className="absolute -bottom-6 left-6 bg-accent text-accent-foreground rounded-xl px-6 py-4 shadow-2xl">
                  <p className="text-2xl font-serif font-bold leading-none lining-nums">1970</p>
                  <p className="text-[9px] uppercase tracking-[0.22em] mt-1.5 opacity-70">
                    Aponte Family Heritage
                  </p>
                </div>
                <div className="absolute -top-5 right-5 bg-white/95 text-primary rounded-xl px-5 py-3 shadow-xl backdrop-blur-sm hidden md:block">
                  <p className="text-[10px] tracking-[0.2em] uppercase opacity-60">Parent Group</p>
                  <p className="text-sm font-serif font-bold mt-0.5">MSC · USD 80B+ revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — premium institutional cards with numbers + meta */}
      <section className="pt-28 md:pt-40 pb-24 md:pb-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header — split institutional */}
            <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-medium">
                    Capabilities
                  </span>
                </div>
                <h2 className="text-[1.8rem] md:text-[2.8rem] font-serif font-bold text-foreground leading-[1.05]">
                  Four disciplines,
                  <br />
                  <span className="italic font-normal text-foreground/60">one objective.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="text-muted-foreground text-[14px] leading-[1.85] border-l-2 border-accent/40 pl-5">
                  Each mandate is custom-built around the client's horizon, governance and
                  liquidity needs — from discretionary portfolios to direct deployment.
                </p>
              </div>
            </div>

            {/* Premium card grid — uniform institutional cards */}
            <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.title}
                    to={s.path}
                    className="group relative bg-card hover:bg-primary transition-colors duration-500 p-8 md:p-10 flex flex-col min-h-[280px]"
                  >
                    {/* Top row — number + icon */}
                    <div className="flex items-start justify-between mb-10">
                      <span className="text-[11px] font-medium tracking-[0.28em] text-muted-foreground group-hover:text-accent transition-colors lining-nums">
                        / {s.num}
                      </span>
                      <div className="w-11 h-11 rounded-full border border-border group-hover:border-accent/50 group-hover:bg-accent/10 flex items-center justify-center transition-all">
                        <Icon className="h-4 w-4 text-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </div>

                    {/* Title & desc — anchored bottom */}
                    <div className="mt-auto">
                      <h3 className="text-[1.4rem] md:text-[1.6rem] font-serif font-bold text-foreground group-hover:text-white transition-colors mb-3 leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-white/70 transition-colors text-[13.5px] leading-[1.7] mb-6 max-w-md">
                        {s.desc}
                      </p>

                      {/* Footer row — meta + arrow */}
                      <div className="flex items-center justify-between pt-5 border-t border-border group-hover:border-white/15 transition-colors">
                        <span className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground/80 group-hover:text-white/55 transition-colors">
                          {s.meta}
                        </span>
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground/[0.04] group-hover:bg-accent text-foreground group-hover:text-accent-foreground transition-all group-hover:rotate-0 -rotate-45">
                          <ArrowRight className="h-3.5 w-3.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values — dark, institutional with sticky sidebar */}
      <section className="pt-24 md:pt-36 pb-28 md:pb-44 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-medium">
                    Our Principles
                  </span>
                </div>
                <h2 className="text-[1.8rem] md:text-[2.6rem] font-serif font-bold text-white leading-[1.08] mb-7">
                  Built on principle,
                  <br />
                  <span className="italic font-normal text-white/55">not trends.</span>
                </h2>
                <p className="text-white/55 text-[13.5px] leading-[1.85] max-w-xs">
                  Three values that have guided the Aponte family across five decades of
                  building enduring enterprises.
                </p>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 space-y-5">
                {[
                  {
                    n: "I.",
                    title: "Integrity",
                    desc: "Transparency and honesty are at the core of every client relationship. We earn trust through action, not promises.",
                  },
                  {
                    n: "II.",
                    title: "Sustainability",
                    desc: "ESG principles woven into our process — responsible investing is smart investing. We measure impact alongside returns.",
                  },
                  {
                    n: "III.",
                    title: "Legacy",
                    desc: "We think in generations, not quarters. Rooted in the Aponte family's long-term vision of building enduring value.",
                  },
                ].map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="border-t border-white/10 pt-7 pb-1 grid grid-cols-12 gap-5"
                  >
                    <div className="col-span-2 md:col-span-1">
                      <span className="text-accent font-serif text-lg lining-nums">{v.n}</span>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-serif font-semibold text-white text-xl mb-3">
                        {v.title}
                      </h3>
                      <p className="text-white/55 text-[14px] leading-[1.8] max-w-lg">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote — editorial with attribution */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent text-[10px] tracking-[0.3em] uppercase font-medium mb-8 text-center">
              Investment Philosophy
            </p>
            <blockquote className="text-xl md:text-[1.7rem] font-serif text-foreground/80 italic leading-[1.55] text-center mb-8">
              "We believe in long-term relationships, sustainable growth, and creating real
              impact through thoughtful capital deployment."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-accent/50" />
              <span className="text-muted-foreground text-[11px] tracking-[0.25em] uppercase">
                Multi Investment Holding SA
              </span>
              <span className="h-px w-10 bg-accent/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — cinematic */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div
            className="max-w-7xl mx-auto relative overflow-hidden"
            style={{ borderRadius: "6px 28px 28px 6px" }}
          >
            <DecorativeVideo
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
              className="h-72 md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
            <div className="absolute inset-0 flex items-center p-8 md:p-16">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-medium">
                    Begin a Conversation
                  </span>
                </div>
                <h2 className="text-[1.6rem] md:text-[2.4rem] font-serif font-bold text-white mb-4 leading-[1.1]">
                  Capital deserves
                  <span className="block italic font-normal text-white/70">
                    a thoughtful steward.
                  </span>
                </h2>
                <p className="text-white/65 mb-8 text-[14px] md:text-[15px] leading-[1.75] max-w-md">
                  Our team is available for confidential introductions. We respond to every
                  enquiry personally within two business days.
                </p>
                <div className="flex flex-wrap items-center gap-5">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 bg-accent text-accent-foreground rounded-full pl-6 pr-2 py-2 font-semibold text-[13px] tracking-wide hover:bg-accent/90 transition-all"
                  >
                    Schedule a Consultation
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-foreground/10 group-hover:bg-accent-foreground/15 transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <Link
                    to="/our-approach"
                    className="text-white/85 hover:text-white text-[13px] font-medium tracking-wide inline-flex items-center gap-2 border-b border-white/30 hover:border-white pb-1 transition-colors"
                  >
                    Read our approach
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
