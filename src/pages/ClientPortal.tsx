import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ShieldCheck, BarChart3, FileText } from "lucide-react";

const ClientPortal = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-28 md:py-36 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Client Portal
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-[1.15]">
              Your Private Access
            </h1>
            <div className="w-20 h-[2px] bg-accent mt-8" />
            <p className="text-primary-foreground/70 mt-8 text-lg leading-relaxed max-w-2xl">
              Securely access your portfolio performance, reports, and account details — anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Login + Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Login Card */}
            <div className="animate-on-scroll">
              <div className="bg-card border border-border rounded-2xl shadow-lg p-10 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <Lock className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-foreground">Sign In</h2>
                    <p className="text-sm text-muted-foreground">Access your portfolio</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Email Address</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background border-border text-foreground h-11" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Password</label>
                    <Input type="password" placeholder="••••••••" className="bg-background border-border text-foreground h-11" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      Remember me
                    </label>
                    <button className="text-accent hover:underline font-medium">Forgot password?</button>
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:opacity-90 font-semibold tracking-wide h-11">
                    Sign In
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-center text-xs text-muted-foreground leading-relaxed">
                    Don't have an account? Contact your relationship manager<br />
                    or reach us at{" "}
                    <a href="mailto:office@multiinvest.com" className="text-accent hover:underline font-medium">
                      office@multiinvest.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6 animate-on-scroll">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">What You Can Access</h3>

              {[
                {
                  icon: BarChart3,
                  title: "Portfolio Overview",
                  desc: "Real-time performance tracking across all your investments, with detailed asset allocation breakdowns.",
                },
                {
                  icon: FileText,
                  title: "Reports & Statements",
                  desc: "Download quarterly reports, tax documents, and transaction histories at your convenience.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Messaging",
                  desc: "Communicate directly with your dedicated advisor through our encrypted channel.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 animate-on-scroll">
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-accent shrink-0" />
              <div>
                <h3 className="font-serif font-semibold text-lg">Bank-Grade Security</h3>
                <p className="text-primary-foreground/60 text-sm">256-bit SSL encryption · Two-factor authentication · Swiss data protection standards</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-accent/40 text-accent hover:bg-accent/10 rounded-full px-6"
              onClick={() => window.location.href = '/contact'}
            >
              Request Access
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ClientPortal;