import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const InvestmentHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="relative min-h-[90vh] flex items-center">
        {/* Background */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale, opacity: heroOpacity }}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Investment Strategies"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,15%,4%)] via-[hsl(150,15%,4%)]/70 to-[hsl(150,15%,4%)]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,15%,4%)]/80 to-transparent" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <motion.div className="container mx-auto px-6 relative z-10 py-32" style={{ y: textY }}>
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[hsl(43,50%,55%)] animate-pulse" />
              <span className="text-white/60 text-xs tracking-[0.15em] uppercase">Investment Strategies</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-8">
              From Seed<br />to <span className="text-gradient-gold italic">Scale</span>.
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="w-16 h-px bg-gradient-to-r from-[hsl(43,50%,55%)] to-transparent mb-8" />

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-white/50 max-w-lg mb-12 leading-relaxed font-light">
              We invest across the entire company lifecycle — from seed-stage startups to mature enterprises — using flexible structures tailored to each opportunity.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8 h-13 text-sm font-semibold shadow-lg shadow-[hsl(43,45%,42%)]/20">
                  Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/our-approach">
                <Button size="lg" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/[0.06] rounded-full px-8 h-13 text-sm border border-white/[0.1]">
                  Our Approach
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-4 mt-20 max-w-2xl">
            {[
              { val: "4", label: "Investment Structures", icon: Briefcase },
              { val: "Seed → Growth", label: "Full Lifecycle", icon: TrendingUp },
              { val: "Global", label: "Deal Sourcing", icon: Globe },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-500 group">
                <s.icon className="h-4 w-4 text-[hsl(43,50%,55%)] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-serif font-bold text-white">{s.val}</p>
                <p className="text-white/30 text-[11px] uppercase tracking-wider mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentHero;
