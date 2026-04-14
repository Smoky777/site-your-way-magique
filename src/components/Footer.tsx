import { Link } from "react-router-dom";
import { MapPin, Mail, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="h-px bg-accent/20" />

      <div className="container mx-auto px-6 md:px-8">
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="Multi Investment" className="h-12 w-auto" />
            </Link>
            <p className="text-primary-foreground/50 text-[13.5px] leading-relaxed max-w-[280px]">
              Global private equity and real estate investment firm. Founded in 2024 by the Aponte family.
            </p>
            <a 
              href="https://www.linkedin.com/company/multi-investment-sa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/30 font-medium mb-5">Services</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Asset Management", to: "/asset-management" },
                { label: "Wealth Management", to: "/wealth-management" },
                { label: "Investment Strategies", to: "/investment-strategies" },
                { label: "Real Estate", to: "/real-estate" },
                { label: "Our Approach", to: "/our-approach" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-primary-foreground/60 hover:text-primary-foreground text-[13px] transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/30 font-medium mb-5">Company</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Team", to: "/team" },
                { label: "Blog", to: "/blog" },
                { label: "Client Portal", to: "/client-portal" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-primary-foreground/60 hover:text-primary-foreground text-[13px] transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/30 font-medium mb-5">Contact</h4>
            <div className="space-y-3.5 text-[13px] text-primary-foreground/55">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-primary-foreground/60 mt-0.5 shrink-0" />
                <span>Chemin Rieu 12<br />1208 Genève</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="h-3.5 w-3.5 text-primary-foreground/60 mt-0.5 shrink-0" />
                <a href="mailto:office@multiinvest.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">office@multiinvest.com</a>
              </div>
              <div className="pt-2 mt-1 border-t border-primary-foreground/10">
                <p className="text-[11px] text-primary-foreground/35 leading-relaxed">
                  Registre: CH-660.0.567.024-5<br />
                  TVA: CHE-396.944.369
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/[0.07]" />

        {/* Bottom */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/40 text-[11px]">
            © {new Date().getFullYear()} Multi Investment Holding SA
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-primary-foreground/40">
            <Link to="/privacy" className="hover:text-primary-foreground/70 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary-foreground/70 transition-colors">Terms</Link>
            <Link to="/disclosure" className="hover:text-primary-foreground/70 transition-colors">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
