import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroLogo from "@/assets/logo-hero.png";

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
          <div className="flex flex-col items-center justify-center min-h-screen py-32 text-center">
            {/* Centered company name with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
              className="mb-6"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"
              />
              <motion.img
                src={heroLogo}
                alt="Multi Investment"
                className="h-28 md:h-36 lg:h-44 xl:h-52 mx-auto"
                initial={{ opacity: 0, scale: 0.3, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-10"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-white/50 text-sm md:text-base tracking-[0.25em] uppercase mb-10"
            >
              Family Office · Private Equity · Real Estate
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            >
              A family-founded firm dedicated to building lasting wealth through private equity, real estate, and venture capital.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex items-center gap-8 md:gap-14 mb-14"
            >
              {[
                { value: "CHF 3B+", label: "AUM" },
                { value: "50+", label: "Projects" },
                { value: "Geneva", label: "HQ" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-serif font-bold text-white">{stat.value}</p>
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/about">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8 h-12 text-sm font-semibold">
                  Discover Our Vision <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/[0.06] rounded-full px-8 h-12 text-sm border border-white/[0.12]">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
