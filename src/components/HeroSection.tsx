import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="relative min-h-screen flex items-center">
        {/* Video background with parallax */}
        <motion.div className="absolute inset-0" style={{ scale: videoScale, opacity: videoOpacity }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          >
            <source src="https://videos.pexels.com/video-files/2325093/2325093-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,4%)]/95 via-[hsl(220,25%,4%)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,4%)] via-transparent to-[hsl(220,25%,4%)]/30" />

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <motion.div className="container mx-auto px-6 relative z-10" style={{ y: textY }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.08] rounded-full px-5 py-2 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70 text-xs tracking-wider uppercase">Managing CHF 3B+ in assets</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-white leading-[1.1] mb-7"
              >
                We help families
                <br />
                build <span className="text-gradient-gold italic">lasting</span>
                <br />
                wealth.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-white/55 max-w-md mb-10 leading-relaxed"
              >
                A family-founded firm dedicated to private equity, real estate, and venture capital — with a human approach to global finance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/about">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-7 h-12 text-sm font-semibold">
                    Discover Our Vision <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/[0.06] rounded-full px-7 h-12 text-sm border border-white/[0.12]">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right - floating stat cards */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px]">
                {[
                  { value: "CHF 3B+", label: "AUM", delay: 0.3, x: 0, y: 0 },
                  { value: "50+", label: "Real Estate Projects", delay: 0.45, x: 140, y: 120 },
                  { value: "2024", label: "Founded", delay: 0.6, x: 20, y: 260 },
                ].map((card) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: card.delay, type: "spring", damping: 20 }}
                    className="absolute bg-white/[0.06] border border-white/[0.1] rounded-2xl p-6 min-w-[200px]"
                    style={{ left: card.x, top: card.y }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <p className="text-3xl font-serif font-bold text-white mb-1">{card.value}</p>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{card.label}</p>
                  </motion.div>
                ))}

                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(43,45%,42%)]/10 rounded-full blur-[80px]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Trust bar */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-6">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Trusted across</p>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <span>🇨🇭 Switzerland</span>
            <span>🇲🇨 Monaco</span>
            <span>🇮🇹 Italy</span>
            <span>🇫🇷 France</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
