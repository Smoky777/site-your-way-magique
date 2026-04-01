import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: TrendingUp,
    title: "Asset Management",
    desc: "Diversified portfolio strategies across global markets with a focus on long-term capital appreciation.",
    path: "/asset-management",
  },
  {
    icon: Shield,
    title: "Wealth Management",
    desc: "Bespoke wealth planning for UHNW individuals and family offices with holistic advisory.",
    path: "/wealth-management",
  },
  {
    icon: Landmark,
    title: "Investment Strategies",
    desc: "Private Equity, Seed to Growth stage investments using innovative financial structures.",
    path: "/investment-strategies",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Prime real estate acquisitions across Europe — residential, commercial, and hospitality.",
    path: "/real-estate",
  },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />

      {/* Services */}
      <section className="py-24 bg-warm-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.2em] uppercase mb-3"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground"
            >
              Our Core Services
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={s.path}>
                  <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full rounded-2xl">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                        <s.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary text-sm tracking-[0.2em] uppercase mb-3"
              >
                Our Philosophy
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6"
              >
                Investing with Purpose & Impact
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                At Multi Investment, we believe that sustainable growth comes from aligning financial returns with positive societal impact.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed"
              >
                From supporting innovative startups at seed stage to developing premier real estate across Europe, we build lasting value for our investors and communities.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  {[
                    { title: "ESG First", desc: "Environmental, Social & Governance criteria integrated into all decisions" },
                    { title: "Long-Term Value", desc: "Patient capital approach focused on generational wealth creation" },
                    { title: "Family Legacy", desc: "Backed by the Aponte family's global business heritage" },
                  ].map((item, i) => (
                    <div key={item.title} className={i > 0 ? "border-t border-border pt-6" : ""}>
                      <p className="text-primary font-serif text-xl font-bold">{item.title}</p>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm-section">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6"
          >
            Ready to Explore Opportunities?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto mb-8"
          >
            Connect with our team to discuss how Multi Investment can help achieve your financial goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact">
              <button className="bg-gradient-gold text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Schedule a Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
