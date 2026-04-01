import { TrendingUp, Building, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: TrendingUp, value: "CHF 3B+", label: "Assets Under Management" },
  { icon: Building, value: "50+", label: "Real Estate Projects" },
  { icon: Globe, value: "3", label: "Global Offices" },
  { icon: Users, value: "100+", label: "Institutional Partners" },
];

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-serif font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
