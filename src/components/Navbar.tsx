import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  { label: "Team", path: "/team" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-gold rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-lg">M</span>
          </div>
          <div>
            <span className="text-foreground font-serif text-xl font-semibold tracking-wide">Multi</span>
            <span className="text-primary font-serif text-xl font-semibold ml-1">Investment</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-xl py-2 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                          isActive(child.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
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
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path!) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <Link to="/client-portal" className="hidden md:block">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Client Portal
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-80">
              <SheetTitle className="text-foreground font-serif">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} className="flex flex-col">
                      <span className="px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">{link.label}</span>
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className="px-6 py-2.5 text-sm text-foreground hover:text-primary transition-colors"
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
                      className="px-4 py-2.5 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link to="/client-portal" onClick={() => setOpen(false)} className="mt-4 px-4">
                  <Button className="w-full bg-gradient-gold text-primary-foreground">Client Portal</Button>
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
