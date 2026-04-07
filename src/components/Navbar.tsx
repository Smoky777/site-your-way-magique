import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    children: [
      { label: "Asset Management", path: "/asset-management" },
      { label: "Wealth Management", path: "/wealth-management" },
      { label: "Investment Strategies", path: "/investment-strategies" },
      { label: "Real Estate", path: "/real-estate" },
    ],
  },
  { label: "About", path: "/about" },
  {
    label: "Our Approach",
    path: "/our-approach",
    children: [
      { label: "Philosophy", path: "/our-approach#philosophy" },
      { label: "Strategy", path: "/our-approach#strategy" },
      { label: "Our Instruments", path: "/our-approach#instruments" },
      { label: "Risk Management", path: "/our-approach#risk" },
      { label: "Track Record", path: "/our-approach#track-record" },
    ],
  },
  { label: "Team", path: "/team" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/60">
      <div className="container mx-auto px-6 h-18 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-gold rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-base">M</span>
          </div>
          <div>
            <span className="text-foreground font-serif text-lg font-semibold tracking-wide">Multi</span>
            <span className="text-primary font-serif text-lg font-semibold ml-1">Investment</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50">
                  {link.label}
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-52 bg-card border border-border rounded-xl shadow-lg py-2 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 text-sm transition-colors hover:bg-muted rounded-lg mx-1 ${
                          isActive(child.path) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path!}
                className={`px-3.5 py-2 text-sm transition-colors rounded-lg ${
                  isActive(link.path!) ? "text-primary font-medium bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/client-portal" className="hidden md:block">
            <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-5">
              Client Portal
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-lg">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-80">
              <SheetTitle className="text-foreground font-serif">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} className="flex flex-col mb-2">
                      <span className="px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">{link.label}</span>
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className="px-6 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
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
