import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, Landmark, ChevronRight } from "lucide-react";
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

      {/* About intro */}
      <section className="py-24 bg-warm-section">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Team meeting"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary text-sm font-semibold tracking-wide uppercase mb-3"
              >
                Who We Are
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5 leading-tight"
              >
                A family-founded firm with a global vision
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                Founded in 2023 by the Aponte family — heirs to the MSC shipping legacy — Multi Investment brings a unique blend of entrepreneurial heritage and institutional rigour to every opportunity.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                We believe in long-term relationships, sustainable growth, and creating real impact through thoughtful capital deployment.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.32 }}
              >
                <Link to="/about" className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read our story <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-semibold tracking-wide uppercase mb-3"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground"
            >
              How we create value
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link to={s.path}>
                  <Card className="bg-card border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-pointer h-full rounded-2xl">
                    <CardContent className="p-7">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.desc}</p>
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

      {/* Values / Philosophy */}
      <section className="py-24 bg-warm-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-semibold tracking-wide uppercase mb-3"
            >
              Our Values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground"
            >
              What guides us every day
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Integrity", desc: "Transparency and honesty are at the core of every client relationship and business decision we make.", emoji: "🤝" },
              { title: "Sustainability", desc: "ESG principles are woven into our investment process — because responsible investing is smart investing.", emoji: "🌱" },
              { title: "Family Legacy", desc: "We think in generations, not quarters. Our approach is rooted in the Aponte family's long-term vision.", emoji: "🏛️" },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <span className="text-4xl mb-4 block">{v.emoji}</span>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with image */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=500&fit=crop"
              alt="Office"
              className="w-full h-72 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-[hsl(220,25%,8%)]/75 flex items-center justify-center">
              <div className="text-center px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Ready to start a conversation?
                </h2>
                <p className="text-white/70 max-w-md mx-auto mb-8">
                  Let's discuss how Multi Investment can help you achieve your financial goals.
                </p>
                <Link to="/contact">
                  <button className="bg-gradient-gold text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
