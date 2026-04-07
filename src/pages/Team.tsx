import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, Award, Globe, TrendingUp, Shield, Briefcase, ChevronRight, Building2, Sparkles, Heart, Quote, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const founders = [
  { name: "Gianluigi Aponte", role: "Chairman", abbr: "CH", bio: "Founder of the MSC Group and visionary patriarch of the Aponte family. His entrepreneurial legacy spans over five decades of global maritime and logistics leadership.", quote: "Vision without action is merely a dream — action without vision just passes the time.", icon: Award },
  { name: "Diego Aponte", role: "Vice-Chairman & Co-Founder", abbr: "VC", bio: "Co-founded Multi Investment with a vision to build a world-class family investment office rooted in the Aponte legacy.", quote: "Our family's values are the foundation of every decision we make.", icon: Sparkles },
];

const leadership = [
  { name: "Simon Aponte-Vago", role: "Chief Operating Officer", abbr: "COO", bio: "Oversees day-to-day operations, process optimization, and organizational efficiency across all divisions.", icon: Globe },
  { name: "Philippe Durand", role: "Chief Financial Officer", abbr: "CFO", bio: "Manages financial planning, reporting, and capital allocation. Former MD at a leading Swiss private bank.", icon: TrendingUp },
  { name: "Boris Collardi", role: "Chief Strategy Officer", abbr: "CSO", bio: "Drives long-term strategic initiatives, market expansion, and corporate development across Europe.", icon: Briefcase },
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
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] } },
};

type Founder = typeof founders[0];
type Member = typeof leadership[0];

const FounderCard = ({ member, index }: { member: Founder; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Card className="relative overflow-hidden border-primary/15 bg-card hover:border-primary/40 transition-all duration-700 h-full hover:shadow-2xl hover:shadow-primary/8">
        {/* Warm gradient accent */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
        />

        <CardContent className="relative z-10 p-8 md:p-10">
          <div className="flex flex-col gap-6">
            {/* Top: Avatar + Info */}
            <div className="flex items-center gap-5">
              <motion.div
                className="w-20 h-20 rounded-full flex items-center justify-center font-serif font-bold text-xl border-2 shrink-0"
                animate={{
                  background: isHovered
                    ? "linear-gradient(135deg, hsl(43 45% 42%), hsl(43 45% 55%))"
                    : "linear-gradient(135deg, hsl(43 45% 42% / 0.1), hsl(43 45% 42% / 0.18))",
                  color: isHovered ? "hsl(0 0% 100%)" : "hsl(43 45% 42%)",
                  borderColor: isHovered ? "hsl(43 45% 42%)" : "hsl(43 45% 42% / 0.2)",
                }}
                transition={{ duration: 0.5 }}
              >
                {getInitials(member.name)}
              </motion.div>

              <div>
                <span className="text-primary/70 text-xs font-semibold tracking-[0.15em] uppercase">{member.abbr}</span>
                <h3 className="text-2xl font-serif font-bold text-foreground mt-0.5">{member.name}</h3>
                <p className="text-muted-foreground text-sm font-medium mt-0.5">{member.role}</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed">{member.bio}</p>

            {/* Personal quote — human touch */}
            <div className="relative bg-muted/50 rounded-xl p-5 border border-border/50">
              <Quote className="absolute top-3 left-3 h-4 w-4 text-primary/20" />
              <p className="text-foreground/80 text-sm italic leading-relaxed pl-6 font-serif">
                "{member.quote}"
              </p>
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
      <Card className="relative overflow-hidden border-border/80 bg-card hover:border-primary/30 transition-all duration-500 h-full hover:shadow-lg hover:shadow-primary/5 group">
        <CardContent className="relative z-10 p-6">
          <div className="flex flex-col items-center text-center gap-4">
            {/* Circular avatar */}
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg border-2"
              animate={{
                background: isHovered
                  ? "linear-gradient(135deg, hsl(43 45% 42%), hsl(43 45% 52%))"
                  : "linear-gradient(135deg, hsl(43 45% 42% / 0.08), hsl(43 45% 42% / 0.15))",
                color: isHovered ? "hsl(0 0% 100%)" : "hsl(43 45% 42%)",
                borderColor: isHovered ? "hsl(43 45% 42% / 0.6)" : "hsl(43 45% 42% / 0.15)",
              }}
              transition={{ duration: 0.4 }}
            >
              {getInitials(member.name)}
            </motion.div>

            <div>
              <h3 className="text-base font-serif font-bold text-foreground">{member.name}</h3>
              <p className="text-primary/80 text-sm font-medium mt-0.5">{member.role}</p>
            </div>

            <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const values = [
  { icon: Heart, title: "People First", desc: "We invest in relationships as much as in assets. Every partnership is built on trust." },
  { icon: Shield, title: "Integrity Always", desc: "Transparency and honesty guide every decision, from boardroom to portfolio." },
  { icon: Globe, title: "Global Perspective", desc: "Rooted in Geneva, connected worldwide. Diverse backgrounds fuel better thinking." },
  { icon: TrendingUp, title: "Long-Term Vision", desc: "We build for generations, not quarters. Patient capital creates lasting value." },
];

const Team = () => {
  return (
    <PageLayout>
      {/* Hero — warm, narrative feel */}
      <section className="relative pt-28 pb-36 overflow-hidden bg-[hsl(var(--navy))]">
        {/* Soft organic shapes instead of dots */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] rounded-full bg-[hsl(220_25%_35%)]/20 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-px bg-primary/40" />
                <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase font-medium">Our Team</p>
                <div className="w-10 h-px bg-primary/40" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_95%)] mb-8 leading-[1.15]">
                The People Who Make<br />
                <span className="bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] bg-clip-text text-transparent">
                  It All Possible
                </span>
              </h1>

              <p className="text-[hsl(220_10%_65%)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Behind every investment decision is a team of passionate individuals who believe that 
                finance, done right, can create a better future for families and communities.
              </p>
            </motion.div>

            {/* Human stats — more personal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            >
              {[
                { value: "13", label: "Team members" },
                { value: "8+", label: "Nationalities" },
                { value: "100+", label: "Years combined experience" },
              ].map((s, i) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-[hsl(0_0%_95%)]">{s.value}</p>
                  <p className="text-[hsl(220_10%_55%)] text-xs mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
              <div className="text-center flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary/60" />
                <div>
                  <p className="text-lg font-serif font-bold text-[hsl(0_0%_95%)] text-left">Geneva</p>
                  <p className="text-[hsl(220_10%_55%)] text-xs uppercase tracking-wider">Switzerland</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Smooth bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Our Culture intro — warm narrative */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              More Than a Team —<br />A Shared Purpose
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We come from different countries, different backgrounds, and different walks of life. 
              But we share something powerful: a belief that thoughtful investing can preserve and grow 
              what matters most to the families who trust us.
            </p>
          </motion.div>

          {/* Values grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={cardVariants} className="text-center group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Founders — personal, with quotes */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-foreground/70 text-xs font-semibold tracking-[0.2em] uppercase">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mt-2">Our Founders</h2>
            <p className="text-primary-foreground/60 mt-3 max-w-lg mx-auto">
              The vision behind Multi Investment — a family legacy built on trust, ambition, and a deep respect for long-term value.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {founders.map((m, i) => (
              <FounderCard key={m.name} member={m} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">C-Suite</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Executive Leadership</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Experienced leaders who bring diverse expertise and a shared commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {leadership.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Division Heads & Specialists */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-foreground/70 text-xs font-semibold tracking-[0.2em] uppercase">Specialists</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mt-2">Division Heads & Experts</h2>
            <p className="text-primary-foreground/60 mt-3 max-w-lg mx-auto">
              The hands-on experts who turn strategy into results across every asset class.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {specialists.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Human CTA — warm, inviting */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-[hsl(var(--navy))]" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px] pointer-events-none" />

            <div className="relative z-10 p-10 md:p-16 text-center">
              <Heart className="h-8 w-8 text-primary/60 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(0_0%_95%)] mb-4">
                We're Looking for People,<br />Not Just Résumés
              </h3>
              <p className="text-[hsl(220_10%_65%)] max-w-lg mx-auto mb-8 leading-relaxed">
                If you're passionate about finance, driven by purpose, and want to be part of something meaningful — we'd love to hear from you.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--gold-light))] text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/25 group"
              >
                Explore Careers
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
