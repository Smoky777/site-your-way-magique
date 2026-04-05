import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Anchor, TrendingUp, Globe, Shield, Users, Building2 } from "lucide-react";

const milestones = [
  { year: "1970", text: "Gianluigi Aponte fonde la Mediterranean Shipping Company (MSC) à Naples avec un seul navire cargo." },
  { year: "1988", text: "MSC devient l'un des plus grands armateurs mondiaux, avec une flotte en expansion rapide sur tous les continents." },
  { year: "2003", text: "Lancement de MSC Croisières, qui deviendra le troisième opérateur mondial de croisières de luxe." },
  { year: "2014", text: "Diego Aponte prend la direction opérationnelle de MSC en tant que Président, accélérant la croissance du groupe." },
  { year: "2022", text: "La fortune de la famille Aponte est estimée à plus de 30 milliards USD, faisant d'eux l'une des familles les plus riches d'Europe." },
  { year: "2024", text: "Création de Multi Investment à Genève — le family office dédié à la diversification et la gestion stratégique du patrimoine Aponte." },
];

const values = [
  { icon: Anchor, title: "Héritage Maritime", desc: "Bâtie sur cinq décennies de leadership dans le transport maritime mondial, notre culture d'entreprise reflète la discipline et l'ambition qui ont fait de MSC un géant industriel." },
  { icon: TrendingUp, title: "Vision Long Terme", desc: "Comme pour la construction de MSC, nous privilégions les investissements de long terme créateurs de valeur durable pour les générations futures." },
  { icon: Shield, title: "Préservation du Capital", desc: "La protection du patrimoine familial est au cœur de chaque décision — une approche prudente alliée à une exécution rigoureuse." },
  { icon: Globe, title: "Rayonnement Global", desc: "Présents à Genève, Monaco et Naples, nous opérons au carrefour de la finance européenne avec un réseau mondial d'opportunités." },
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm tracking-[0.3em] uppercase mb-3"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8"
            >
              L'Héritage d'un Empire Maritime
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Multi Investment est née de la vision de la famille Aponte — l'une des dynasties entrepreneuriales les plus puissantes d'Europe — pour structurer, diversifier et faire fructifier un patrimoine construit sur plus de cinquante ans d'excellence dans le transport maritime mondial.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gianluigi Aponte */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Anchor className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Gianluigi Aponte</h2>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Né en <span className="text-foreground font-semibold">1940 à Sant'Agnello</span>, sur la côte amalfitaine, Gianluigi Aponte a débuté sa carrière comme officier de marine avant de fonder la <span className="text-foreground font-semibold">Mediterranean Shipping Company (MSC)</span> en 1970 avec un seul navire cargo.
                </p>
                <p>
                  Grâce à une vision stratégique exceptionnelle et un sens aigu des opportunités de marché, il a transformé MSC en le <span className="text-primary font-semibold">premier armateur mondial de transport de conteneurs</span>, dépassant le danois Maersk en 2022. Le groupe MSC opère aujourd'hui une flotte de plus de <span className="text-foreground font-semibold">800 navires</span> desservant plus de 500 ports dans 155 pays.
                </p>
                <p>
                  Au-delà du fret maritime, Gianluigi Aponte a bâti un empire diversifié incluant <span className="text-foreground font-semibold">MSC Croisières</span> — troisième opérateur mondial — ainsi que des investissements majeurs dans la logistique, les terminaux portuaires et l'immobilier. La fortune familiale est aujourd'hui estimée à plus de <span className="text-primary font-semibold">30 milliards USD</span>, faisant des Aponte l'une des familles les plus riches d'Italie et d'Europe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diego Aponte */}
      <section className="py-16 pt-0">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Diego Aponte</h2>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Fils de Gianluigi, <span className="text-foreground font-semibold">Diego Aponte</span> a rejoint MSC dès les années 1990 et en est devenu le <span className="text-foreground font-semibold">Président</span> en 2014. Sous sa direction, le groupe a connu une accélération sans précédent, doublant sa capacité de transport et consolidant sa position de numéro un mondial.
                </p>
                <p>
                  Diego a piloté l'expansion digitale du groupe, modernisé la flotte avec des navires de nouvelle génération plus écologiques, et supervisé l'acquisition stratégique de terminaux portuaires sur tous les continents. Son leadership incarne la transition entre l'esprit fondateur et une gestion institutionnelle moderne.
                </p>
                <p>
                  C'est sous son impulsion que la famille a décidé de créer <span className="text-primary font-semibold">Multi Investment</span> en 2024 — une structure dédiée à la gestion et la diversification du patrimoine familial au-delà du transport maritime, investissant dans l'immobilier, le private equity et le venture capital.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-foreground mb-12"
            >
              Notre Histoire
            </motion.h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-6 pb-8 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-2" />
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-primary font-semibold text-sm">{m.year}</span>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center"
            >
              <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Notre Mission</h2>
              <p className="text-lg text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
                "Construire un patrimoine multigénérationnel à travers des investissements disciplinés, l'innovation et un engagement indéfectible envers l'excellence — guidés par les valeurs d'intégrité, de durabilité et d'héritage familial."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-foreground mb-10"
            >
              Nos Valeurs
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-serif text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
