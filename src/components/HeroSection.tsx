import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main hero with video */}
      <div className="relative min-h-[90vh] flex items-center">
        {/* Video background */}
        <div className="absolute inset-0">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,6%)]/90 via-[hsl(220,25%,6%)]/65 to-[hsl(220,25%,6%)]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,6%)]/60 via-transparent to-[hsl(220,25%,6%)]/20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-xs tracking-wide">Now managing $3B+ in assets</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-white leading-[1.15] mb-6"
            >
              We help families build
              <br />
              <span className="text-gradient-gold">lasting wealth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-white/70 max-w-lg mb-10 leading-relaxed"
            >
              Multi Investment is a family-founded firm dedicated to private equity, real estate, and venture capital — with a human approach to global finance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-7 h-12 text-[15px]">
                  Learn About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-7 h-12 text-[15px] border border-white/20">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Trust bar */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Trusted by institutional investors across</p>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">🇨🇭 Switzerland</span>
            <span className="flex items-center gap-2">🇲🇨 Monaco</span>
            <span className="flex items-center gap-2">🇮🇹 Italy</span>
            <span className="flex items-center gap-2">🇫🇷 France</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
