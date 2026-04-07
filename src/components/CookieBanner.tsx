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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/25 backdrop-blur-sm">
      <div
        className="bg-background border border-border rounded-2xl shadow-2xl mx-6 w-full max-w-md px-8 py-10 text-center"
        style={{ animation: "fadeScale 0.35s ease-out", fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        <p style={{ fontSize: "22px", fontWeight: 600, color: "hsl(var(--foreground))", marginBottom: "12px", letterSpacing: "-0.01em" }}>
          Cookies
        </p>
        <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "hsl(var(--muted-foreground))", marginBottom: "28px" }}>
          We use cookies to make your visit smoother and more relevant. You can read more in our{" "}
          <Link to="/privacy" style={{ color: "hsl(var(--accent))", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleDecline}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "14px",
              padding: "10px 24px",
              borderRadius: "8px",
              border: "1px solid hsl(var(--border))",
              background: "transparent",
              color: "hsl(var(--muted-foreground))",
              cursor: "pointer",
            }}
          >
            No thanks
          </button>
          <button
            onClick={handleAccept}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "14px",
              fontWeight: 600,
              padding: "10px 28px",
              borderRadius: "8px",
              border: "none",
              background: "hsl(var(--accent))",
              color: "hsl(var(--accent-foreground))",
              cursor: "pointer",
            }}
          >
            That's fine
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;