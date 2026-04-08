import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import officeBuilding from "@/assets/office-building.jpg";
import jetDeau from "@/assets/jet-deau-geneva.jpg";

const infoStyle: React.CSSProperties = { fontFamily: "Georgia, 'Times New Roman', serif" };

const Contact = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-28 md:py-36 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Contact</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-[1.15]">
              Get in Touch
            </h1>
            <div className="w-20 h-[2px] bg-accent mt-8" />
            <p className="text-primary-foreground/60 mt-8 text-lg leading-relaxed max-w-2xl">
              Interested in learning more about our investment solutions? Reach out to schedule a confidential consultation with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Form */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">Send Us a Message</h2>
              <div className="bg-card border border-border rounded-xl shadow-sm p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">First Name</label>
                    <Input placeholder="John" className="bg-background border-border text-foreground h-11" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Last Name</label>
                    <Input placeholder="Doe" className="bg-background border-border text-foreground h-11" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" className="bg-background border-border text-foreground h-11" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Phone</label>
                  <Input type="tel" placeholder="+41 22 000 0000" className="bg-background border-border text-foreground h-11" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    className="w-full h-36 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  />
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90 font-semibold tracking-wide h-11">
                  Send Message
                </Button>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Office photo */}
              <div className="animate-on-scroll rounded-xl overflow-hidden border border-border shadow-sm">
                <img
                  src={officeBuilding}
                  alt="Multi Investment — Geneva Office Building"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-card p-5 space-y-2">
                  <h3 className="font-serif font-semibold text-foreground text-base mb-3">Multi Investment Holding SA</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">Chemin Rieu 12, 1208 Genève, Switzerland</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">Monday – Friday : 8:00 – 19:00</p>
                  </div>
                </div>
              </div>
              {/* Jet d'Eau */}
              <div className="animate-on-scroll rounded-xl overflow-hidden border border-border shadow-sm">
                <img
                  src={jetDeau}
                  alt="Jet d'Eau — Geneva's iconic water fountain on Lake Geneva"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={1024}
                  height={640}
                />
              </div>

              {/* Map */}
              <div className="animate-on-scroll rounded-xl overflow-hidden border border-border h-64 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.123456!2d6.155!3d46.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDExJzUzLjAiTiA2wrAwOSczMC4wIkU!5e0!3m2!1sen!2sch!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Multi Investment — Geneva Office"
                />
              </div>

              {/* Office Card */}
              <div className="animate-on-scroll bg-card border border-border rounded-xl shadow-sm p-8" style={infoStyle}>
                <h3 className="text-foreground font-serif font-semibold text-xl mb-7">Geneva Office</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">Address</p>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">
                        Chemin Rieu 12<br />
                        1208 Genève, Switzerland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">Phone</p>
                      <p className="text-muted-foreground text-[14px] tracking-wide" style={{ fontVariantNumeric: "tabular-nums" }}>
                        +41 22 000 00 00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">Email</p>
                      <a href="mailto:office@multiinvest.com" className="text-accent hover:underline text-[14px] font-medium">
                        office@multiinvest.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">Office Hours</p>
                      <p className="text-muted-foreground text-[14px]" style={{ fontVariantNumeric: "tabular-nums" }}>
                        8:00 — 19:00
                      </p>
                      <p className="text-muted-foreground text-[14px]">Monday to Friday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;