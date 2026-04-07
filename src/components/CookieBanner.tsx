import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "multi-invest-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-foreground/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
          {/* Icon + Text */}
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <Cookie className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-1">We Value Your Privacy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
                <Link to="/privacy" className="text-accent hover:underline font-medium">
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="border-border text-muted-foreground hover:text-foreground rounded-full px-5 flex-1 md:flex-none"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-accent text-accent-foreground hover:opacity-90 rounded-full px-5 font-semibold flex-1 md:flex-none"
            >
              Accept All
            </Button>
          </div>

          {/* Close */}
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 md:static text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;