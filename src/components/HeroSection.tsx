import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroLogo from "@/assets/logo-hero.png";
import jetDeau from "@/assets/jet-deau-geneva.jpg";
import jetDeauVideo from "@/assets/jet-deau-video.mp4.asset.json";
import DecorativeVideo from "@/components/DecorativeVideo";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="relative min-h-screen flex items-center">
        {/* Video background */}
        <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
          <DecorativeVideo
            src={jetDeauVideo.url}
            poster={jetDeau}
            className="absolute inset-0"
          />
        </motion.div>

        {/* Overlays — simpler, less layered */}
        <div className="absolute inset-0 bg-primary/40" />

        <motion.div className="container mx-auto px-6 relative z-10" style={{ y: textY }}>
          <div className="flex flex-col items-center justify-center min-h-screen py-32 text-center">
            {/* Logo — cleaner entrance */}
            <motion.img
              src={heroLogo}
              alt="Multi Investment"
              className="h-24 md:h-32 lg:h-40 xl:h-48 mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/45 text-sm md:text-base tracking-[0.2em] uppercase mb-8"
            >
              Family Office · Private Equity · Real Estate
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white/40 text-[15px] md:text-base max-w-lg mx-auto mb-14 leading-relaxed"
            >
              A family-founded firm dedicated to building lasting wealth through private equity, real estate, and venture capital.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/about">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8 h-12 text-sm font-semibold">
                  Discover Our Vision <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/[0.06] rounded-full px-8 h-12 text-sm border border-white/[0.1]">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator — minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
