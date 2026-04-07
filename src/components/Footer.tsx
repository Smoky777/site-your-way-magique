import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const linkClass = "text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top accent line */}
      <div className="h-[2px] bg-accent/30" />

      <div className="container mx-auto px-6 md:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand — 3 cols */}
          <div className="lg:col-span-3">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="Multi Investment" className="h-12 w-auto" />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Global private equity and real estate investment firm. Founded in 2024 by the Aponte family.
            </p>
          </div>

          {/* Services — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-5">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/asset-management" className={linkClass}>Asset Management</Link>
              <Link to="/wealth-management" className={linkClass}>Wealth Management</Link>
              <Link to="/investment-strategies" className={linkClass}>Investment Strategies</Link>
              <Link to="/real-estate" className={linkClass}>Real Estate</Link>
              <Link to="/our-approach" className={linkClass}>Our Approach</Link>
            </div>
          </div>

          {/* Company — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-5">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className={linkClass}>About Us</Link>
              <Link to="/team" className={linkClass}>Our Team</Link>
              <Link to="/blog" className={linkClass}>Blog & Insights</Link>
              <Link to="/client-portal" className={linkClass}>Client Portal</Link>
              <Link to="/contact" className={linkClass}>Contact</Link>
            </div>
          </div>

          {/* Legal — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-5">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/privacy" className={linkClass}>Privacy Policy</Link>
              <Link to="/terms" className={linkClass}>Terms of Use</Link>
              <Link to="/disclosure" className={linkClass}>Disclosure</Link>
            </div>
          </div>

          {/* Office — 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-5">Head Office</h4>
            <div className="space-y-4 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>Chemin Rieu 12<br />1208 Genève, Switzerland</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>+41 22 000 0000</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <a href="mailto:office@multiinvest.com" className="text-accent hover:underline">office@multiinvest.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/70 text-xs">
            © {new Date().getFullYear()} Multi Investment Holding SA. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-primary-foreground/70">
            <span>RC: CH-660.0.567.024-5</span>
            <span className="hidden md:inline text-primary-foreground/15">|</span>
            <span>TVA: CHE-396.944.369</span>
            <span className="hidden md:inline text-primary-foreground/15">|</span>
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy</Link>
            <span className="hidden md:inline text-primary-foreground/15">|</span>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;