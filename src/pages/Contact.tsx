import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-20 animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Contact</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-[1.15]">
              Get in Touch
            </h1>
            <div className="w-20 h-[2px] bg-accent mt-8" />
            <p className="text-muted-foreground mt-8 text-lg leading-relaxed max-w-2xl">
              Interested in learning more about our investment solutions? Reach out to schedule a confidential consultation with our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">Send Us a Message</h2>
              <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-8 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block font-medium">First Name</label>
                      <Input placeholder="John" className="bg-background border-border text-foreground" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Last Name</label>
                      <Input placeholder="Doe" className="bg-background border-border text-foreground" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Email</label>
                    <Input type="email" placeholder="john.doe@example.com" className="bg-background border-border text-foreground" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Phone</label>
                    <Input type="tel" placeholder="+41 22 000 0000" className="bg-background border-border text-foreground" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-medium">Message</label>
                    <textarea
                      placeholder="How can we help you?"
                      className="w-full h-36 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                    />
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:opacity-90 font-semibold tracking-wide">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="animate-on-scroll rounded-lg overflow-hidden border border-border h-64 shadow-sm">
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
              <Card className="animate-on-scroll bg-card border-border shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-foreground font-serif font-semibold text-xl mb-6">Geneva Office</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p>Chemin Rieu 12</p>
                        <p>1208 Genève, Switzerland</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p>+41 22 000 0000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href="mailto:office@multiinvest.com" className="text-accent hover:underline font-medium">office@multiinvest.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Heures de Bureau</p>
                        <p>8:00 — 19:00</p>
                        <p>Du lundi au vendredi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
