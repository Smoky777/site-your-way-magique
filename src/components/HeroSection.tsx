import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Hero3DScene from "@/components/Hero3DScene";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(220,25%,8%)]">
      {/* 3D Scene */}
      <Hero3DScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 50%, transparent 30%, hsl(220 25% 8% / 0.7) 70%)"
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[hsl(43,50%,60%)] font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Private Equity & Real Estate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8"
          >
            Building Legacy Through
            <span className="block mt-2" style={{
              backgroundImage: "linear-gradient(135deg, hsl(43 55% 65%), hsl(43 45% 45%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Strategic Investment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-[hsl(220,10%,65%)] max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Founded by the Aponte family, Multi Investment manages over $3 billion in assets across global real estate, private equity, and venture capital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/about">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 px-8 rounded-full text-base">
                Discover Our Vision <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-[hsl(43,45%,42%)]/40 text-white hover:bg-[hsl(43,45%,42%)]/10 px-8 rounded-full text-base">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[hsl(43,45%,42%)]/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-[hsl(43,45%,42%)]/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
