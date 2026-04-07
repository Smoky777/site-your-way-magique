import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Globe, Users, TrendingUp } from "lucide-react";
import { useRef } from "react";

const principles = [
  { icon: Shield, title: "Capital Preservation", desc: "Downside protection is paramount — we structure every deal with robust risk mitigation." },
  { icon: Globe, title: "Global Perspective", desc: "Cross-border expertise spanning Europe, Middle East, and emerging markets." },
  { icon: Users, title: "Founder Partnership", desc: "We invest alongside founders, not above them — true alignment of interests." },
  { icon: TrendingUp, title: "Long-Term Vision", desc: "Patient capital with a generational outlook — we build value, not quick exits." },
];

const InvestmentPhilosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left content */}
            <div>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Philosophy</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 leading-tight">
                Conviction-driven,<br /><span className="text-gradient-gold italic">patient</span> capital
              </motion.h2>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.5 }}
                className="w-12 h-px bg-primary/30 mb-6 origin-left" />
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
                className="text-muted-foreground text-sm leading-relaxed mb-12">
                We take concentrated positions in businesses we deeply understand. Our edge is patience, operational expertise, and a network that opens doors others can't reach.
              </motion.p>

              <div className="space-y-6">
                {principles.map((a, i) => (
                  <motion.div key={a.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-4 group cursor-default">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                      <a.icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-1">{a.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right image with parallax */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  style={{ y: imgY }}
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=700&fit=crop"
                  alt="Investment analysis"
                  className="w-full h-[480px] object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,8%)]/40 to-transparent" />
              </div>

              {/* Floating cards */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-xl backdrop-blur-sm">
                <p className="text-3xl font-serif font-bold text-foreground">4</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Investment structures</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-primary/10 border border-primary/20 rounded-xl px-5 py-2.5 backdrop-blur-sm">
                <p className="text-xs font-semibold text-primary">Seed to Growth</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
