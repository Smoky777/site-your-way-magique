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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/30 backdrop-blur-sm">
      <div
        className="bg-background border border-border rounded-2xl shadow-2xl mx-6 w-full max-w-lg p-8 text-center"
        style={{ animation: "fadeScale 0.35s ease-out" }}
      >
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Cookie Preferences</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          We use cookies to ensure the best experience on our website. By continuing, you agree to our{" "}
          <Link to="/privacy" className="text-accent hover:underline font-medium">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleDecline}
            className="text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg px-6 py-2.5 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-sm font-semibold bg-accent text-accent-foreground px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Accept All
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;