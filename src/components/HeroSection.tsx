import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(ellipse at 30% 50%, hsl(43 52% 54% / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, hsl(220 30% 20% / 0.3) 0%, transparent 50%)"
      }} />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in-up">
            Private Equity & Real Estate
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-8" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Building Legacy Through
            <span className="text-gradient-gold block mt-2">Strategic Investment</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Founded by the Aponte family, Multi Investment manages over $3 billion in assets across global real estate, private equity, and venture capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Link to="/about">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 px-8 text-base">
                Discover Our Vision <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-base">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
