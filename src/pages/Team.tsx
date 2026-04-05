import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, Award, Globe, TrendingUp, Shield, Briefcase, ChevronRight, Building2, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const founders = [
  { name: "Marco Aponte", role: "Chief Executive Officer", abbr: "CEO", bio: "Leads the firm's vision, strategy, and overall operations. Background in international finance and family enterprise.", icon: Award },
  { name: "Diego Aponte", role: "Co-Founder", abbr: "Co-F", bio: "Co-founded Multi Investment with a vision to build a world-class family investment office rooted in the Aponte legacy.", icon: Sparkles },
];

const leadership = [
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
  { name: "Antonio Greco", role: "Head of Real Estate", abbr: "RE", bio: "Leads the firm's flagship real estate division with 15+ years in European property development and acquisitions.", icon: Building2 },
  { name: "David Keller", role: "Head of Venture Capital", abbr: "VC", bio: "Leads seed and early-stage investments in technology, fintech, and deep tech across Europe.", icon: TrendingUp },
  { name: "Nadia Laurent", role: "Compliance", abbr: "CO", bio: "Ensures regulatory compliance, risk management, and adherence to legal standards across all jurisdictions.", icon: Shield },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("");

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

type Member = typeof founders[0];

const FounderCard = ({ member }: { member: Member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = member.icon;

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="relative overflow-hidden border-primary/20 bg-card hover:border-primary/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-primary/10">
        {/* Gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[hsl(var(--gold-light))] to-primary" />

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <circle cx="80" cy="20" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="80" cy="20" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="80" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <CardContent className="relative z-10 p-8 md:p-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Large avatar */}
            <div className="relative shrink-0">
              <motion.div
                className="w-24 h-24 rounded-2xl flex items-center justify-center font-serif font-bold text-2xl border-2"
                animate={{
                  background: isHovered
                    ? "linear-gradient(135deg, hsl(43 45% 42%), hsl(43 45% 55%))"
                    : "linear-gradient(135deg, hsl(43 45% 42% / 0.08), hsl(43 45% 42% / 0.15))",
                  color: isHovered ? "hsl(0 0% 100%)" : "hsl(43 45% 42%)",
                  borderColor: isHovered ? "hsl(43 45% 42%)" : "hsl(43 45% 42% / 0.2)",
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                {getInitials(member.name)}
              </motion.div>
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold tracking-widest shadow-lg">
                {member.abbr}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Icon className="h-4 w-4 text-primary/60" />
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{member.role}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{member.name}</h3>
              <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent mb-4" />
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TeamCard = ({ member }: { member: Member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = member.icon;

  return (
    <motion.div variants={cardVariants} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="relative overflow-hidden border-border bg-card hover:border-primary/40 transition-all duration-500 h-full hover:shadow-xl hover:shadow-primary/5">
        {/* Animated accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <CardContent className="relative z-10 p-6">
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-serif font-bold text-base border"
                animate={{
                  background: isHovered
                    ? "linear-gradient(135deg, hsl(43 45% 42%), hsl(43 45% 52%))"
                    : "linear-gradient(135deg, hsl(43 45% 42% / 0.08), hsl(43 45% 42% / 0.15))",
                  color: isHovered ? "hsl(0 0% 100%)" : "hsl(43 45% 42%)",
                  borderColor: isHovered ? "hsl(43 45% 42% / 0.5)" : "hsl(43 45% 42% / 0.15)",
                }}
                transition={{ duration: 0.35 }}
              >
                {getInitials(member.name)}
              </motion.div>
              <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-secondary border border-border text-[9px] font-bold tracking-wider text-muted-foreground">
                {member.abbr}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-serif font-semibold text-foreground group-hover:text-primary">{member.name}</h3>
              <p className="text-primary/70 text-sm font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{member.bio}</p>
            </div>

            <motion.div
              className="shrink-0 mt-1"
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.25 }}
            >
              <Icon className="h-4 w-4 text-primary/40" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const stats = [
  { value: "13", label: "Team Members", icon: Users },
  { value: "3", label: "Offices", icon: Building2 },
  { value: "8+", label: "Nationalities", icon: Globe },
  { value: "100+", label: "Years Experience", icon: Award },
];

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-10"
  >
    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center border border-primary/10">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{title}</h2>
      <p className="text-muted-foreground text-sm mt-0.5">{subtitle}</p>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4 hidden md:block" />
  </motion.div>
);

const Team = () => {
  return (
    <PageLayout>
      {/* Dark hero */}
      <section className="relative pt-28 pb-32 overflow-hidden bg-[hsl(var(--navy))]">
        {/* Subtle animated dots */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        {/* Large radial glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Our Team</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_95%)] mb-6 leading-[1.1]">
                The Minds Behind<br />
                <span className="bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] bg-clip-text text-transparent">
                  Multi Investment
                </span>
              </h1>
              <p className="text-[hsl(220_10%_65%)] text-lg leading-relaxed max-w-xl">
                A curated team of finance, real estate, and technology professionals united by excellence, integrity, and long-term value creation.
              </p>
            </motion.div>

            {/* Right side: key figures */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="rounded-xl border border-[hsl(0_0%_100%/0.08)] bg-[hsl(0_0%_100%/0.03)] backdrop-blur-sm p-6 text-center hover:border-primary/30 transition-colors duration-300 group"
                  >
                    <Icon className="h-5 w-5 text-primary/50 mx-auto mb-2.5 group-hover:text-primary transition-colors" />
                    <p className="text-3xl font-serif font-bold text-[hsl(0_0%_95%)]">{stat.value}</p>
                    <p className="text-[hsl(220_10%_55%)] text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mobile stats */}
      <section className="relative -mt-10 z-10 mb-8 lg:hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <Icon className="h-4 w-4 text-primary/50 mx-auto mb-2" />
                  <p className="text-2xl font-serif font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <SectionHeader icon={Award} title="Founders" subtitle="Vision & Legacy" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {founders.map((m) => (
              <FounderCard key={m.name} member={m} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/15" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>

      {/* Executive Leadership */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <SectionHeader icon={Users} title="Executive Leadership" subtitle="C-Suite & Strategic Direction" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {leadership.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/15" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>

      {/* Division Heads & Specialists */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <SectionHeader icon={User} title="Division Heads & Specialists" subtitle="Investment, Real Estate & Operations" />
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
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-[hsl(var(--navy))]" />
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: "radial-gradient(hsl(43 45% 42%) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }} />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Careers</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(0_0%_95%)] mb-3">
                  Interested in Joining Our Team?
                </h3>
                <p className="text-[hsl(220_10%_65%)] max-w-lg">
                  We're always looking for exceptional talent to strengthen our capabilities across Europe.
                </p>
              </div>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/25 shrink-0 group"
              >
                View Open Positions
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
