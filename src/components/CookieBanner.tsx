import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "multi-invest-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
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
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm z-[100]">
      <div
        className="bg-primary text-primary-foreground rounded-xl shadow-2xl p-5"
        style={{ animation: "slideUp 0.4s ease-out" }}
      >
        <p className="text-sm leading-relaxed text-primary-foreground/80 mb-4">
          This site uses cookies to improve your experience.{" "}
          <Link to="/privacy" className="underline text-accent hover:text-accent/80">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="ml-auto text-sm font-semibold bg-accent text-accent-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Accept
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;