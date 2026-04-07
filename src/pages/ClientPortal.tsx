import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ShieldCheck, BarChart3, FileText, MessageSquare, Eye, ArrowRight, Fingerprint, Globe, Clock } from "lucide-react";
import { useState } from "react";

const ClientPortal = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageLayout>
      {/* Hero — dark navy with subtle pattern */}
      <section className="relative py-32 md:py-40 bg-primary text-primary-foreground overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Client Portal
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1]">
              Your Private
              <span className="block text-accent">Gateway</span>
            </h1>
            <div className="w-20 h-[2px] bg-accent mt-8" />
            <p className="text-primary-foreground/60 mt-8 text-lg leading-relaxed max-w-2xl">
              Securely monitor your portfolio, access detailed reports, and communicate with your dedicated advisor — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Login + Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Login Card — spans 2 cols */}
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="bg-card border border-border rounded-2xl shadow-xl shadow-foreground/5 overflow-hidden">
                {/* Card header */}
                <div className="bg-primary p-8 flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/15 backdrop-blur rounded-xl flex items-center justify-center border border-accent/20">
                    <Lock className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-primary-foreground">Sign In</h2>
                    <p className="text-sm text-primary-foreground/50">Secure access to your account</p>
                  </div>
                </div>

                {/* Form */}
                <div className="p-8 space-y-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border text-foreground h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="bg-background border-border text-foreground h-12 rounded-lg pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                      <input type="checkbox" className="rounded border-border accent-accent" />
                      Remember me
                    </label>
                    <button className="text-accent hover:underline font-medium">Forgot password?</button>
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:opacity-90 font-semibold tracking-wide h-12 rounded-lg group">
                    Sign In
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Footer */}
                <div className="px-8 pb-8">
                  <div className="pt-5 border-t border-border">
                    <p className="text-center text-xs text-muted-foreground leading-relaxed">
                      Need access? Contact your relationship manager or reach us at{" "}
                      <a href="mailto:office@multiinvest.com" className="text-accent hover:underline font-medium">
                        office@multiinvest.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features — spans 3 cols */}
            <div className="lg:col-span-3 animate-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Portal Features
              </p>
              <h3 className="text-3xl font-serif font-semibold text-foreground mb-4">
                Everything at Your Fingertips
              </h3>
              <p className="text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Our portal provides a comprehensive view of your wealth, with institutional-grade tools designed for clarity and ease of use.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: BarChart3,
                    title: "Portfolio Overview",
                    desc: "Real-time performance, asset allocation, and benchmark comparisons.",
                  },
                  {
                    icon: FileText,
                    title: "Reports & Statements",
                    desc: "Quarterly reports, tax documents, and transaction histories on demand.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Secure Messaging",
                    desc: "Encrypted communication with your dedicated relationship manager.",
                  },
                  {
                    icon: Globe,
                    title: "Multi-Currency View",
                    desc: "Track your investments across currencies with live FX conversion.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="group p-6 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1.5">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Security
            </p>
            <h3 className="text-3xl font-serif font-semibold mb-4">Bank-Grade Protection</h3>
            <p className="text-primary-foreground/50 leading-relaxed">
              Your data is protected by the highest standards of Swiss financial security and privacy regulations.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-on-scroll">
            {[
              {
                icon: ShieldCheck,
                title: "256-bit Encryption",
                desc: "Military-grade SSL encryption for all data in transit and at rest.",
              },
              {
                icon: Fingerprint,
                title: "Two-Factor Auth",
                desc: "Additional verification layer to ensure only you access your account.",
              },
              {
                icon: Clock,
                title: "Session Security",
                desc: "Automatic timeouts and activity monitoring for maximum protection.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-accent/20">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h4 className="font-semibold text-primary-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-primary-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 animate-on-scroll">
            <Button
              variant="outline"
              className="border-accent/30 text-accent hover:bg-accent/10 rounded-full px-8 h-11"
              onClick={() => window.location.href = '/contact'}
            >
              Request Access
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ClientPortal;