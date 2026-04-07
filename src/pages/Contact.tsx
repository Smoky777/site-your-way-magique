import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  { city: "Geneva", address: "Rue du Rhône 14, 1204 Geneva, Switzerland", phone: "+41 22 000 0000", lat: 46.2044, lng: 6.1432 },
];

const Contact = () => {
  return (
    <PageLayout>
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
             <p className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Contact</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 animate-on-scroll">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/60 text-lg leading-relaxed animate-on-scroll">
              Interested in learning more about our services? Reach out to schedule a confidential consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="bg-primary-foreground/10 border-primary-foreground/15 animate-on-scroll">
              <CardContent className="p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-primary-foreground/60 mb-1.5 block">First Name</label>
                    <Input className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30" />
                  </div>
                  <div>
                    <label className="text-sm text-primary-foreground/60 mb-1.5 block">Last Name</label>
                    <Input className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-primary-foreground/60 mb-1.5 block">Email</label>
                  <Input type="email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30" />
                </div>
                <div>
                  <label className="text-sm text-primary-foreground/60 mb-1.5 block">Phone</label>
                  <Input type="tel" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30" />
                </div>
                <div>
                  <label className="text-sm text-primary-foreground/60 mb-1.5 block">Message</label>
                  <textarea className="w-full h-32 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
                </div>
                <Button className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Offices + Map */}
            <div className="space-y-6">
              {/* Interactive Map Placeholder */}
              <div className="animate-on-scroll rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5765944.706037954!2d5.5!3d45.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEyJzE1LjgiTiA2wrAwOCczNS41IkU!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  loading="lazy"
                  title="Office Locations"
                />
              </div>

              {offices.map((office, i) => (
                <Card key={office.city} className={`animate-on-scroll delay-${i + 1} bg-primary-foreground/10 border-primary-foreground/15`}>
                  <CardContent className="p-6">
                    <h3 className="text-primary-foreground font-serif font-semibold text-lg mb-3">{office.city}</h3>
                    <div className="space-y-2 text-sm text-primary-foreground/60">
                      <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-foreground/50" />{office.address}</div>
                      <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-foreground/50" />{office.phone}</div>
                      <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-foreground/50" />info@multi-investment.com</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
