import PageLayout from "@/components/PageLayout";
import jetDeau from "@/assets/jet-deau-geneva.jpg";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, Landmark, ChevronRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  { icon: TrendingUp, title: "Asset Management", desc: "Diversified portfolio strategies across global markets.", path: "/asset-management" },
  { icon: Shield, title: "Wealth Management", desc: "Bespoke planning for UHNW individuals and family offices.", path: "/wealth-management" },
  { icon: Landmark, title: "Investment Strategies", desc: "Private Equity, Seed to Growth stage investments.", path: "/investment-strategies" },
  { icon: Building2, title: "Real Estate", desc: "Prime acquisitions across Europe's top locations.", path: "/real-estate" },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />

      {/* About section - editorial style */}
      <section className="py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-center">
            {/* Image stack */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 relative"
            >
              <img
                src={jetDeau}
                alt="Jet d'Eau — Geneva's iconic water fountain"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                loading="lazy"
                width={1024}
                height={640}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
               className="absolute -bottom-6 -right-6 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-5 shadow-lg backdrop-blur-sm"
              >
                <p className="text-2xl font-serif font-bold text-primary-foreground">2024</p>
                <p className="text-xs text-primary-foreground/60">Year Founded</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary-foreground/70 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              >
                Who We Are
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl md:text-[2.5rem] font-serif font-bold text-primary-foreground mb-6 leading-tight"
              >
                A family-founded firm
                <br />
                with a global vision
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="text-primary-foreground/60 leading-relaxed mb-5 text-[15px]"
              >
                Founded by the Aponte family — heirs to the MSC shipping legacy — Multi Investment brings a unique blend of entrepreneurial heritage and institutional rigour.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24 }}
                className="text-primary-foreground/60 leading-relaxed mb-8 text-[15px]"
              >
                We believe in long-term relationships, sustainable growth, and creating real impact through thoughtful capital deployment.
              </motion.p>

              {/* Mini stats row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.32 }}
                className="flex gap-10 mb-8 pb-8 border-b border-primary-foreground/20"
              >
                {[
                  { val: "CHF 3B+", label: "AUM" },
                  { val: "50+", label: "Projects" },
                  { val: "100+", label: "Partners" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-serif font-bold text-primary-foreground">{s.val}</p>
                    <p className="text-xs text-primary-foreground/50 uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/about" className="text-primary-foreground/80 font-medium text-sm inline-flex items-center gap-1.5 hover:gap-3 hover:text-primary-foreground transition-all group">
                  Read our full story <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - big cards with hover */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              >
                Our Services
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl md:text-[2.5rem] font-serif font-bold text-foreground leading-tight"
              >
                How we create value
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/asset-management" className="text-muted-foreground text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                View all services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={s.path}>
                  <Card className="bg-card border-border hover:border-primary/25 transition-all duration-300 group cursor-pointer h-full rounded-2xl overflow-hidden">
                    <CardContent className="p-8 flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                            {s.title}
                          </h3>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all -translate-x-2 group-hover:translate-x-0" />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-foreground/70 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              Our Values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-[2.5rem] font-serif font-bold text-primary-foreground"
            >
              What guides us
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Integrity", desc: "Transparency and honesty are at the core of every client relationship.", emoji: "🤝" },
              { title: "Sustainability", desc: "ESG principles woven into our process — responsible investing is smart investing.", emoji: "🌱" },
              { title: "Legacy", desc: "We think in generations, not quarters. Rooted in the Aponte family's long-term vision.", emoji: "🏛️" },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-2xl p-8 text-center hover:bg-primary-foreground/15 transition-all"
              >
                <span className="text-4xl mb-5 block">{v.emoji}</span>
                <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-3">{v.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with video */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-80 md:h-96 object-cover"
            >
              <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[hsl(150,15%,6%)]/70 flex items-center justify-center">
              <div className="text-center px-6 max-w-lg">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
                >
                  Ready to start a conversation?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-white/60 mb-8 text-[15px]"
                >
                  Let's discuss how we can help you achieve your financial goals.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Link to="/contact">
                    <button className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
                      Schedule a Consultation
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
