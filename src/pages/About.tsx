import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">About Us</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 animate-on-scroll">
              A Legacy of Excellence
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg animate-on-scroll">
                Founded in <span className="text-foreground font-semibold">2023</span> by the Aponte family, Multi Investment carries forward a tradition of entrepreneurial vision rooted in the legacy of <span className="text-foreground font-semibold">Gianluigi Aponte</span>, founder of the Mediterranean Shipping Company (MSC) — one of the world's largest shipping and logistics conglomerates.
              </p>

              <p className="animate-on-scroll">
                With over <span className="text-primary font-semibold">$3 billion in assets under management</span>, Multi Investment is a global private investment firm focused on creating lasting value through strategic capital deployment across real estate, private equity, and venture capital.
              </p>

              <div className="animate-on-scroll bg-card border border-border rounded-lg p-8 my-12">
                <h3 className="text-foreground font-serif text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg italic">
                  "To build generational wealth through disciplined investment, innovation, and an unwavering commitment to excellence — guided by the values of integrity, sustainability, and family legacy."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div className="animate-on-scroll delay-1">
                  <h3 className="text-foreground font-serif text-xl font-semibold mb-4">Heritage</h3>
                  <p>
                    The Aponte family has built one of Italy's most successful business empires spanning shipping, hospitality, and now private investment. Multi Investment represents the next chapter — applying the same vision and discipline to global capital markets.
                  </p>
                </div>
                <div className="animate-on-scroll delay-2">
                  <h3 className="text-foreground font-serif text-xl font-semibold mb-4">Global Presence</h3>
                  <p>
                    Headquartered in Geneva with offices in Monaco and Naples, we operate at the crossroads of European finance, providing our clients with unparalleled access to investment opportunities across the continent and beyond.
                  </p>
                </div>
                <div className="animate-on-scroll delay-3">
                  <h3 className="text-foreground font-serif text-xl font-semibold mb-4">ESG Commitment</h3>
                  <p>
                    Sustainability is not an afterthought — it's woven into our investment thesis. Every opportunity is evaluated through rigorous Environmental, Social, and Governance criteria to ensure lasting positive impact.
                  </p>
                </div>
                <div className="animate-on-scroll delay-4">
                  <h3 className="text-foreground font-serif text-xl font-semibold mb-4">Innovation Focus</h3>
                  <p>
                    From seed-stage startups to transformative real estate developments, we seek investments that drive innovation and create value for communities, partners, and stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
