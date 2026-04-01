import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Warm light background */}
      <div className="absolute inset-0 bg-warm-section" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(ellipse at 50% 30%, hsl(43 50% 85% / 0.5) 0%, transparent 60%)"
      }} />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up">
            Private Equity & Real Estate
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-8">
            Building Legacy Through
            <span className="text-gradient-gold block mt-2">Strategic Investment</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Founded by the Aponte family, Multi Investment manages over $3 billion in assets across global real estate, private equity, and venture capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 px-8 rounded-full">
                Discover Our Vision <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/5 px-8 rounded-full">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
