import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

type NavChild = { label: string; path: string; desc?: string };
type NavSection = { heading: string; items: NavChild[] };
type NavLink = {
  label: string;
  path?: string;
  children?: NavChild[];
  mega?: NavSection[];
};

const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  {
    label: "Wealth Management",
    path: "/wealth-management",
    mega: [
      {
        heading: "Services",
        items: [
          { label: "Overview", path: "/wealth-management", desc: "Personalized wealth solutions" },
          { label: "Investment Capabilities", path: "/investment-strategies", desc: "Advanced planning & advisory" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { label: "Our Team", path: "/team", desc: "Meet our experts" },
          { label: "About Us", path: "/about", desc: "Our story & values" },
        ],
      },
      {
        heading: "Get Started",
        items: [
          { label: "Contact Us", path: "/contact", desc: "Start your wealth journey" },
        ],
      },
    ],
  },
  {
    label: "Asset Management",
    path: "/asset-management",
    mega: [
      {
        heading: "Services",
        items: [
          { label: "Portfolio Management", path: "/asset-management", desc: "Diversified strategies" },
          { label: "Real Estate", path: "/real-estate", desc: "European property investments" },
        ],
      },
      {
        heading: "Strategies",
        items: [
          { label: "Private Equity", path: "/investment-strategies", desc: "Growth & buyout capital" },
          { label: "Venture Capital", path: "/investment-strategies", desc: "Seed to Series A" },
        ],
      },
    ],
  },
  {
    label: "Investment Approach",
    path: "/our-approach",
    mega: [
      {
        heading: "Framework",
        items: [
          { label: "Philosophy", path: "/our-approach#philosophy", desc: "What we believe in" },
          { label: "Strategy", path: "/our-approach#strategy", desc: "How we build value" },
          { label: "Our Instruments", path: "/our-approach#instruments", desc: "Flexible capital deployment" },
        ],
      },
      {
        heading: "Performance",
        items: [
          { label: "Risk Management", path: "/our-approach#risk", desc: "Protecting what matters" },
          { label: "Track Record", path: "/our-approach#track-record", desc: "Results that speak" },
        ],
      },
    ],
  },
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  const handleNavClick = (path: string) => {
    setActiveDropdown(null);
    setOpen(false);
    const [route, hash] = path.split("#");
    if (location.pathname === route && hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="Multi Investment" className="h-16" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.mega ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => link.path && handleNavClick(link.path)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-lg ${
                    link.path && isActive(link.path) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                </button>

                {/* Mega dropdown */}
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-card border border-border rounded-2xl shadow-2xl shadow-foreground/5 p-6 min-w-[420px]">
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-card border-l border-t border-border" />

                    <div className="relative z-10 flex gap-8">
                      {link.mega.map((section) => (
                        <div key={section.heading} className="min-w-[140px]">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
                            {section.heading}
                          </p>
                          <div className="space-y-1">
                            {section.items.map((item) => (
                              <button
                                key={item.path + item.label}
                                onClick={() => handleNavClick(item.path)}
                                className="block w-full text-left group py-2 px-2 -mx-2 rounded-lg hover:bg-muted/60 transition-colors"
                              >
                                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                  {item.label}
                                </span>
                                {item.desc && (
                                  <span className="block text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path!}
                className={`px-3 py-2 text-sm transition-colors rounded-lg ${
                  isActive(link.path!) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link to="/client-portal" className="hidden xl:block">
            <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-5">
              Client Portal
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" className="rounded-lg">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-80 overflow-y-auto">
              <SheetTitle className="text-foreground font-serif">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.mega ? (
                    <div key={link.label} className="flex flex-col mb-3">
                      {link.path ? (
                        <button
                          onClick={() => handleNavClick(link.path!)}
                          className="px-4 py-2 text-xs uppercase tracking-widest text-primary font-semibold text-left"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <span className="px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">{link.label}</span>
                      )}
                      {link.mega.flatMap((s) => s.items).map((child) => (
                        <button
                          key={child.path + child.label}
                          onClick={() => handleNavClick(child.path)}
                          className="px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-left"
                        >
                          {child.label}
                          {child.desc && (
                            <span className="block text-xs text-muted-foreground">{child.desc}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path!}
                      onClick={() => setOpen(false)}
                      className="px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link to="/client-portal" onClick={() => setOpen(false)} className="mt-4 px-4">
                  <Button className="w-full bg-gradient-gold text-primary-foreground rounded-full">Client Portal</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
