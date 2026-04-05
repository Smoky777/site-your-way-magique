import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, Award, Globe, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";

const leadership = [
  { name: "Marco Aponte", role: "Chief Executive Officer", bio: "Leads the firm's vision, strategy, and overall operations. Background in international finance and family enterprise.", icon: Award },
  { name: "Elena Rossi", role: "Chief Operating Officer", bio: "Oversees day-to-day operations, process optimization, and organizational efficiency across all divisions.", icon: Globe },
  { name: "Philippe Durand", role: "Chief Financial Officer", bio: "Manages financial planning, reporting, and capital allocation. Former MD at a leading Swiss private bank.", icon: TrendingUp },
  { name: "Sofia Marchetti", role: "Chief Strategy Officer", bio: "Drives long-term strategic initiatives, market expansion, and corporate development across Europe.", icon: Globe },
  { name: "Thomas Weber", role: "Chief Investment Officer", bio: "Responsible for portfolio strategy, asset allocation, and investment thesis across all verticals.", icon: TrendingUp },
  { name: "Julien Moreau", role: "Chief Legal Officer", bio: "Directs all legal affairs, corporate governance, and regulatory matters across jurisdictions.", icon: Shield },
  { name: "Andreas Richter", role: "Chief Technology Officer", bio: "Leads technology infrastructure, digital innovation, and data-driven investment tools across the firm.", icon: Globe },
];

const specialists = [
  { name: "Luca Ferretti", role: "Portfolio Manager", bio: "Manages diversified portfolios, monitors performance, and executes investment decisions aligned with client objectives.", icon: TrendingUp },
  { name: "Claire Bernard", role: "Relationship Manager", bio: "Cultivates and maintains client relationships, ensuring personalized service and satisfaction for UHNW clients.", icon: Users },
  { name: "Antonio Greco", role: "Head of Real Estate", bio: "Leads the firm's flagship real estate division with 15+ years in European property development and acquisitions.", icon: Globe },
  { name: "David Keller", role: "Head of Venture Capital", bio: "Leads seed and early-stage investments in technology, fintech, and deep tech across Europe.", icon: TrendingUp },
  { name: "Nadia Laurent", role: "Compliance", bio: "Ensures regulatory compliance, risk management, and adherence to legal standards across all jurisdictions.", icon: Shield },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("");

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TeamCard = ({ member, index }: { member: typeof leadership[0]; index: number }) => {
  const Icon = member.icon;
  return (
    <motion.div variants={cardVariants}>
      <Card className="bg-card border-border group hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.02] group-hover:to-primary/[0.06] transition-all duration-500 pointer-events-none" />
        
        <CardContent className="p-7 relative z-10">
          <div className="flex items-start gap-5">
            {/* Avatar with initials */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center text-primary font-serif font-bold text-lg group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-105">
                {getInitials(member.name)}
              </div>
              {/* Small icon badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                <Icon className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{member.name}</h3>
              <p className="text-primary/80 text-sm font-medium mb-3 tracking-wide">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const stats = [
  { value: "12", label: "Team Members", icon: Users },
  { value: "3", label: "European Offices", icon: Globe },
  { value: "8+", label: "Nationalities", icon: Award },
  { value: "100+", label: "Years Combined Exp.", icon: TrendingUp },
];

const Team = () => {
  return (
    <PageLayout>
      {/* Hero with decorative line */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-primary" />
          <div className="absolute top-40 right-40 w-64 h-64 rounded-full border border-primary" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-primary to-primary/0" />
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Our Team</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              The People Behind<br />
              <span className="text-primary">Multi Investment</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              A curated team of finance, real estate, and technology professionals united by a shared commitment to excellence, integrity, and long-term value creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="py-10 px-6 text-center"
                >
                  <Icon className="h-5 w-5 text-primary/60 mx-auto mb-3" />
                  <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1.5">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center border border-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Executive Leadership</h2>
              <p className="text-muted-foreground text-sm mt-0.5">C-Suite & Strategic Direction</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-5"
          >
            {leadership.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Division Heads & Specialists */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center border border-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Division Heads & Specialists</h2>
              <p className="text-muted-foreground text-sm mt-0.5">Investment, Real Estate & Operations</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-5"
          >
            {specialists.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-card p-10 md:p-14 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Interested in Joining Our Team?
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              We're always looking for exceptional talent to strengthen our capabilities across Europe.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
