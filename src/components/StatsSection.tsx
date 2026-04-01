import { TrendingUp, Building, Globe, Users } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "$3B+", label: "Assets Under Management" },
  { icon: Building, value: "50+", label: "Real Estate Projects" },
  { icon: Globe, value: "3", label: "Global Offices" },
  { icon: Users, value: "100+", label: "Institutional Partners" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`animate-on-scroll delay-${i + 1} text-center`}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
