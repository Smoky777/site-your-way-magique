import { motion } from "framer-motion";
import { Search, Target, Settings, BarChart3 } from "lucide-react";

const processSteps = [
  { step: "01", title: "Sourcing", desc: "Proprietary deal flow through our global network, industry relationships, and deep sector expertise.", icon: Search },
  { step: "02", title: "Due Diligence", desc: "Rigorous analysis of financials, market position, team capabilities, and long-term growth potential.", icon: Target },
  { step: "03", title: "Structuring", desc: "Tailored deal structures optimizing risk-reward profiles for all stakeholders involved.", icon: Settings },
  { step: "04", title: "Value Creation", desc: "Active portfolio management driving operational excellence and strategic improvements.", icon: BarChart3 },
];

const InvestmentProcess = () => (
  <section className="py-32 bg-gradient-to-b from-muted/40 to-background relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute left-0 top-1/2 w-72 h-72 bg-primary/3 rounded-full blur-3xl -translate-x-1/2" />

    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Process</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">
            From deal flow to <span className="text-gradient-gold italic">value creation</span>
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.16, duration: 0.6 }}
            className="w-16 h-px bg-primary/30 mx-auto mb-5" />
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
            className="text-muted-foreground text-sm max-w-lg mx-auto">
            A rigorous, repeatable methodology refined across dozens of investments and multiple market cycles.
          </motion.p>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-border" />
          <motion.div className="hidden lg:block absolute top-16 left-[12%] h-px bg-primary/40"
            initial={{ width: 0 }} whileInView={{ width: "76%" }} viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative group text-center lg:text-left">
                {/* Circle node */}
                <div className="hidden lg:flex w-8 h-8 rounded-full bg-background border-2 border-primary/20 group-hover:border-primary/60 items-center justify-center mx-auto lg:mx-0 mb-8 transition-colors duration-300 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
                </div>

                <span className="text-4xl font-serif font-bold text-primary/10 group-hover:text-primary/25 transition-colors duration-500">{step.step}</span>
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center my-4 mx-auto lg:mx-0 group-hover:bg-primary/15 transition-colors">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentProcess;
