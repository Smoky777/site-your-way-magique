import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroLogo from "@/assets/logo-hero.png";
import jetDeau from "@/assets/jet-deau-geneva.jpg";
import DecorativeVideo from "@/components/DecorativeVideo";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary">
      <div className="relative min-h-screen flex flex-col">
        {/* Video background — fixed framing, no pan/scale */}
        <div className="absolute inset-0">
          <DecorativeVideo
            src="/videos/jet-deau-video.mp4"
            poster={jetDeau}
            className="absolute inset-0"
            videoClassName="object-[50%_70%] lg:object-[50%_72%]"
          />
        </div>

        {/* Cinematic readability — gradient bottom + soft vignette + thin top wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--primary)/0.35)_100%)]" />

        {/* Top utility bar — institutional eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 border-b border-white/10"
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between py-3 text-white/70 text-[10px] tracking-[0.28em] uppercase">
              <span className="hidden md:inline">Geneva · Switzerland</span>
              <span className="hidden md:inline lining-nums">Est. 2024 — Aponte Family Office</span>
              <span className="md:hidden mx-auto">Aponte Family Office · Geneva</span>
            </div>
          </div>
        </motion.div>

        {/* Main hero content */}
        <motion.div
          className="container mx-auto px-6 relative z-10 flex-1 flex items-center"
          style={{ y: textY }}
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center w-full py-20 md:py-28">
            {/* Left — editorial heading */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="h-px w-10 bg-accent" />
                <span className="text-accent text-[10px] tracking-[0.32em] uppercase font-medium">
                  Multi Investment Holding SA
                </span>
              </motion.div>

              <motion.img
                src={heroLogo}
                alt="Multi Investment"
                className="h-16 md:h-20 lg:h-24 mb-10 drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
              />

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="font-serif font-bold text-white leading-[0.98] tracking-tight text-[2.4rem] md:text-[4.2rem] lg:text-[5.4rem] mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
              >
                Capital that endures
                <br />
                <span className="italic font-normal text-white/85">across generations.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="text-white/80 text-[15px] md:text-[17px] max-w-xl leading-[1.75] mb-10 drop-shadow-md"
              >
                A Geneva-based family office founded by the Aponte family — heirs to the
                MSC shipping legacy. We deploy private equity, real estate and venture capital
                with the patience of a builder and the rigour of an institution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.15 }}
                className="flex flex-wrap items-center gap-5"
              >
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 bg-accent text-accent-foreground rounded-full pl-6 pr-2 py-2 font-semibold text-[13px] tracking-wide hover:bg-accent/90 transition-all"
                >
                  Discover Our Vision
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-foreground/10 group-hover:bg-accent-foreground/15 transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="text-white/85 hover:text-white text-[13px] font-medium tracking-wide inline-flex items-center gap-2 border-b border-white/30 hover:border-white pb-1 transition-colors"
                >
                  Request an introduction
                </Link>
              </motion.div>
            </div>

            {/* Right — institutional credentials block */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.1 }}
              className="lg:col-span-4 lg:justify-self-end w-full max-w-sm"
            >
              <div className="backdrop-blur-md bg-white/[0.06] border border-white/15 rounded-2xl p-7 shadow-2xl">
                <p className="text-accent text-[10px] tracking-[0.3em] uppercase font-medium mb-5">
                  At a Glance
                </p>
                <dl className="divide-y divide-white/10">
                  {[
                    { k: "Assets Under Management", v: "CHF 3B+" },
                    { k: "Minimum Ticket", v: "USD 10M" },
                    { k: "Active Mandates", v: "50+" },
                    { k: "Headquarters", v: "Geneva" },
                  ].map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between py-3 first:pt-0 last:pb-0">
                      <dt className="text-white/60 text-[11px] tracking-[0.18em] uppercase">{row.k}</dt>
                      <dd className="text-white font-serif font-semibold text-base lining-nums">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.aside>
          </div>
        </motion.div>

        {/* Bottom marquee — institutional credibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="relative z-10 border-t border-white/10 bg-primary/40 backdrop-blur-sm"
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between gap-6 py-4 overflow-hidden">
              <span className="text-white/55 text-[10px] tracking-[0.3em] uppercase shrink-0">
                Discretionary mandates
              </span>
              <span className="hidden md:inline text-white/30 text-[10px] tracking-[0.3em]">·</span>
              <span className="hidden md:inline text-white/55 text-[10px] tracking-[0.3em] uppercase shrink-0">
                Private equity · Real estate · Venture
              </span>
              <span className="hidden lg:inline text-white/30 text-[10px] tracking-[0.3em]">·</span>
              <span className="hidden lg:inline text-white/55 text-[10px] tracking-[0.3em] uppercase shrink-0">
                Multi-jurisdiction · CHF · USD · EUR
              </span>
              <span className="ml-auto text-white/55 text-[10px] tracking-[0.3em] uppercase shrink-0 lining-nums">
                Scroll ↓
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
