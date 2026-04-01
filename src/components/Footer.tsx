import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-gold rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-sm">M</span>
              </div>
              <span className="text-foreground font-serif text-lg font-semibold">Multi Investment</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Global private equity and real estate investment firm. Founded in 2023 by the Aponte family.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <Link to="/asset-management" className="text-muted-foreground hover:text-primary text-sm transition-colors">Asset Management</Link>
              <Link to="/wealth-management" className="text-muted-foreground hover:text-primary text-sm transition-colors">Wealth Management</Link>
              <Link to="/investment-strategies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Investment Strategies</Link>
              <Link to="/real-estate" className="text-muted-foreground hover:text-primary text-sm transition-colors">Real Estate</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link>
              <Link to="/team" className="text-muted-foreground hover:text-primary text-sm transition-colors">Our Team</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog & Insights</Link>
              <Link to="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-4">Offices</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div>
                <p className="text-foreground font-medium">Geneva</p>
                <p>Rue du Rhône, 1204 Geneva</p>
              </div>
              <div>
                <p className="text-foreground font-medium">Monaco</p>
                <p>Boulevard des Moulins, MC 98000</p>
              </div>
              <div>
                <p className="text-foreground font-medium">Naples</p>
                <p>Via Partenope, 80121 Naples</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Multi Investment. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-xs transition-colors">Terms of Use</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
