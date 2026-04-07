import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Multi Investment" className="h-12 w-auto" />
            </Link>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Global private equity and real estate investment firm. Founded in 2024 by the Aponte family.
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/asset-management" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Asset Management</Link>
              <Link to="/wealth-management" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Wealth Management</Link>
              <Link to="/investment-strategies" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Investment Strategies</Link>
              <Link to="/real-estate" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Real Estate</Link>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">About Us</Link>
              <Link to="/team" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Our Team</Link>
              <Link to="/blog" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Blog & Insights</Link>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/privacy" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Terms of Use</Link>
              <Link to="/disclosure" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">Disclosure</Link>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Office</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/50">
              <div>
                <p className="text-primary-foreground font-medium">Geneva</p>
                <p>Chemin Rieu 12, 1208 Genève, Switzerland</p>
              </div>
              <div>
                <p className="text-primary-foreground font-medium">Phone</p>
                <p>+41 22 000 0000</p>
              </div>
              <div className="pt-2 border-t border-primary-foreground/10 mt-1 space-y-1">
                <p>RC: CH-660.0.567.024-5</p>
                <p>TVA: CHE-396.944.369</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs">© {new Date().getFullYear()} Multi Investment. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">Terms of Use</Link>
            <Link to="/contact" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
