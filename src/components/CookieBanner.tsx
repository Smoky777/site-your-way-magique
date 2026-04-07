import { useState, useEffect } from "react";
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
      <div
        className="mx-5 w-full max-w-[420px] bg-background rounded-xl overflow-hidden shadow-2xl"
        style={{ animation: "cookieFade 0.3s ease-out" }}
      >
        {/* Gold accent bar */}
        <div className="h-1 bg-accent" />

        <div className="px-7 pt-7 pb-6">
          {/* Title */}
          <p className="font-serif text-lg text-foreground mb-2.5">
            We use cookies
          </p>

          {/* Body */}
          <p className="text-[13.5px] leading-[1.65] text-muted-foreground mb-7" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
            Cookies help us understand how you use our site so we can improve your experience. We respect your choice.{" "}
            <Link to="/privacy" className="text-accent underline underline-offset-2 decoration-accent/40 hover:decoration-accent">
              Privacy Policy
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex gap-2.5">
            <button
              onClick={handleDecline}
              className="flex-1 py-2.5 text-[13px] font-medium text-muted-foreground rounded-lg border border-border hover:border-foreground/20 hover:text-foreground transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 py-2.5 text-[13px] font-semibold text-accent-foreground bg-accent rounded-lg hover:brightness-105 transition-all"
            >
              Accept cookies
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cookieFade {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;