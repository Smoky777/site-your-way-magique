import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, Award, Globe, TrendingUp, Shield, Briefcase, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const leadership = [
  { name: "Marco Aponte", role: "Chief Executive Officer", abbr: "CEO", bio: "Leads the firm's vision, strategy, and overall operations. Background in international finance and family enterprise.", icon: Award },
  { name: "Elena Rossi", role: "Chief Operating Officer", abbr: "COO", bio: "Oversees day-to-day operations, process optimization, and organizational efficiency across all divisions.", icon: Globe },
  { name: "Philippe Durand", role: "Chief Financial Officer", abbr: "CFO", bio: "Manages financial planning, reporting, and capital allocation. Former MD at a leading Swiss private bank.", icon: TrendingUp },
  { name: "Sofia Marchetti", role: "Chief Strategy Officer", abbr: "CSO", bio: "Drives long-term strategic initiatives, market expansion, and corporate development across Europe.", icon: Briefcase },
  { name: "Thomas Weber", role: "Chief Investment Officer", abbr: "CIO", bio: "Responsible for portfolio strategy, asset allocation, and investment thesis across all verticals.", icon: TrendingUp },
  { name: "Julien Moreau", role: "Chief Legal Officer", abbr: "CLO", bio: "Directs all legal affairs, corporate governance, and regulatory matters across jurisdictions.", icon: Shield },
  { name: "Andreas Richter", role: "Chief Technology Officer", abbr: "CTO", bio: "Leads technology infrastructure, digital innovation, and data-driven investment tools across the firm.", icon: Globe },
];

const specialists = [
  { name: "Luca Ferretti", role: "Portfolio Manager", abbr: "PM", bio: "Manages diversified portfolios, monitors performance, and executes investment decisions aligned with client objectives.", icon: TrendingUp },
  { name: "Claire Bernard", role: "Relationship Manager", abbr: "RM", bio: "Cultivates and maintains client relationships, ensuring personalized service and satisfaction for UHNW clients.", icon: Users },
  { name: "Antonio Greco", role: "Head of Real Estate", abbr: "RE", bio: "Leads the firm's flagship real estate division with 15+ years in European property development and acquisitions.", icon: Globe },
  { name: "David Keller", role: "Head of Venture Capital", abbr: "VC", bio: "Leads seed and early-stage investments in technology, fintech, and deep tech across Europe.", icon: TrendingUp },
  { name: "Nadia Laurent", role: "Compliance", abbr: "CO", bio: "Ensures regulatory compliance, risk management, and adherence to legal standards across all jurisdictions.", icon: Shield },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("");

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

type Member = typeof leadership[0];

const TeamCard = ({ member, featured = false }: { member: Member; featured?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = member.icon;

  return (
    <motion.div variants={cardVariants} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className={`relative overflow-hidden border-border bg-card transition-all duration-500 h-full ${
        featured ? "hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10" : "hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
      }`}>
        {/* Animated top accent bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full border-2 border-primary" />
          <div className="absolute top-8 right-8 w-16 h-16 rounded-full border border-primary" />
        </div>

        <CardContent className={`relative z-10 ${featured ? "p-8" : "p-6"}`}>
          <div className="flex items-start gap-5">
            {/* Avatar */}
            <div className="relative shrink-0">
              <motion.div
                className={`${featured ? "w-20 h-20 text-xl" : "w-16 h-16 text-lg"} rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center text-primary font-serif font-bold`}
                animate={{
                  background: isHovered
                    ? "linear-gradient(135deg, hsl(43 45% 42%), hsl(43 45% 52%))"
                    : "linear-gradient(135deg, hsl(43 45% 42% / 0.1), hsl(43 45% 42% / 0.2))",
                  color: isHovered ? "hsl(0 0% 100%)" : "hsl(43 45% 42%)",
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                {getInitials(member.name)}
              </motion.div>

              {/* Role abbreviation badge */}
              <div className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded-md bg-secondary border border-border text-[10px] font-bold tracking-wider text-muted-foreground">
                {member.abbr}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`${featured ? "text-lg" : "text-base"} font-serif font-semibold text-foreground`}>{member.name}</h3>
                  <p className="text-primary/80 text-sm font-medium tracking-wide">{member.role}</p>
                </div>
                <motion.div
                  animate={{ x: isHovered ? 0 : -4, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-4 w-4 text-primary/50" />
                </motion.div>
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-primary/30 to-transparent my-3" />
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
      {/* Dark hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-[hsl(var(--navy))]">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(43 45% 42%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 45% 42%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Our Team</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_95%)] mb-6 leading-tight">
              The Minds Behind<br />
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] bg-clip-text text-transparent">
                Multi Investment
              </span>
            </h1>
            <p className="text-[hsl(220_10%_65%)] text-lg leading-relaxed max-w-2xl">
              A curated team of finance, real estate, and technology professionals united by a shared commitment to excellence, integrity, and long-term value creation.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10 mb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-primary/50 mx-auto mb-3 group-hover:text-primary transition-colors" />
                  <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1.5 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured: CEO */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <TeamCard member={leadership[0]} featured />
          </motion.div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center border border-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Executive Leadership</h2>
              <p className="text-muted-foreground text-sm mt-0.5">C-Suite & Strategic Direction</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4 hidden md:block" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {leadership.slice(1).map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/20" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>

      {/* Division Heads & Specialists */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center border border-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Division Heads & Specialists</h2>
              <p className="text-muted-foreground text-sm mt-0.5">Investment, Real Estate & Operations</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4 hidden md:block" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {specialists.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-border overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-[hsl(var(--navy))]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "linear-gradient(hsl(43 45% 42%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 45% 42%) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }} />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" />

            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(0_0%_95%)] mb-3">
                  Interested in Joining Our Team?
                </h3>
                <p className="text-[hsl(220_10%_65%)] max-w-lg">
                  We're always looking for exceptional talent to strengthen our capabilities across Europe.
                </p>
              </div>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] text-primary-foreground font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20 shrink-0 group"
              >
                View Open Positions
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
