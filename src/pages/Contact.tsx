import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import officeBuilding from "@/assets/office-building.jpg";

const Contact = () => {
  return (
    <PageLayout>
      {/* Hero — asymmetric, editorial */}
      <section className="pt-20 md:pt-28 pb-14 md:pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-primary-foreground/40 text-[10px] font-semibold tracking-[0.35em] uppercase mb-6"
              >
                Contact
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-[1.8rem] md:text-[2.8rem] font-serif font-bold text-primary-foreground leading-[1.05] mb-5"
              >
                Get in
                <span className="block text-primary-foreground/60 italic font-normal text-[0.85em]">Touch.</span>
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-accent/40 origin-left"
                style={{ width: "30%" }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 lg:col-start-8 lg:pb-2"
            >
              <p className="text-primary-foreground/45 text-[14.5px] leading-[1.85] max-w-sm">
                Interested in learning more about our investment solutions? Reach out to schedule a confidential consultation with our team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content — broken grid */}
      <section className="pt-16 md:pt-24 pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-6">

            {/* Info column — left, narrower */}
            <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">
              {/* Office photo */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden border border-border shadow-sm"
                style={{ borderRadius: "20px 3px 3px 20px" }}
              >
                <img
                  src={jetDeau}
                  alt="Jet d'Eau — Geneva's iconic water fountain on Lake Geneva"
                  className="w-full h-48 object-cover"
                />
                <div className="bg-card p-4 space-y-2">
                  <h3 className="font-serif font-semibold text-foreground text-[14px]">Multi Investment Holding SA</h3>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                    <p className="text-[13px] text-foreground">Chemin Rieu 12, 1208 Genève</p>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl overflow-hidden border border-border h-52 shadow-sm"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.123456!2d6.155!3d46.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDExJzUzLjAiTiA2wrAwOSczMC4wIkU!5e0!3m2!1sen!2sch!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Multi Investment — Geneva Office"
                />
              </motion.div>

              {/* Contact details — compact */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-card border border-border rounded-2xl p-5 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/[0.06] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-[13px] mb-0.5">Address</p>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">Chemin Rieu 12<br />1208 Genève, Switzerland</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/[0.06] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-[13px] mb-0.5">Email</p>
                    <a href="mailto:office@multiinvest.com" className="text-accent hover:underline text-[13px] font-medium">office@multiinvest.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/[0.06] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-[13px] mb-0.5">Office Hours</p>
                    <p className="text-muted-foreground text-[13px]">8:00 — 19:00 · Mon – Fri</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form column — right, wider, with offset */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2 lg:-mt-8"
            >
              <p className="text-muted-foreground text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">Send a Message</p>
              <h2 className="text-[1.4rem] md:text-[1.8rem] font-serif font-bold text-foreground leading-tight mb-8">
                Let's start a
                <span className="text-accent italic font-normal text-[0.8em] ml-2">conversation.</span>
              </h2>

              <div className="bg-card border border-border shadow-sm p-7 md:p-9 space-y-5" style={{ borderRadius: "3px 24px 24px 3px" }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] text-muted-foreground mb-1.5 block font-medium uppercase tracking-wider">First Name</label>
                    <Input placeholder="John" className="bg-background border-border text-foreground h-11 rounded-lg" />
                  </div>
                  <div>
                    <label className="text-[12px] text-muted-foreground mb-1.5 block font-medium uppercase tracking-wider">Last Name</label>
                    <Input placeholder="Doe" className="bg-background border-border text-foreground h-11 rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="text-[12px] text-muted-foreground mb-1.5 block font-medium uppercase tracking-wider">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" className="bg-background border-border text-foreground h-11 rounded-lg" />
                </div>
                <div>
                  <label className="text-[12px] text-muted-foreground mb-1.5 block font-medium uppercase tracking-wider">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    className="w-full h-32 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  />
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90 font-semibold tracking-wide h-11 rounded-full text-[13px]">
                  Send Message <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
