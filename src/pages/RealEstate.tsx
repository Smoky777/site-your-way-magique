import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, ArrowUpRight } from "lucide-react";

const properties = [
  { name: "Villa Posillipo", location: "Naples, Italy", type: "Luxury Residential", size: "1,200 m²", status: "Completed", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" },
  { name: "Palazzo Monaco", location: "Monte Carlo", type: "Mixed-Use", size: "3,500 m²", status: "Under Development", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" },
  { name: "Geneva Lakeside", location: "Geneva, Switzerland", type: "Commercial Office", size: "5,000 m²", status: "Completed", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" },
  { name: "Côte d'Azur Resort", location: "Nice, France", type: "Hospitality", size: "8,000 m²", status: "Under Development", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop" },
  { name: "Milano Centro", location: "Milan, Italy", type: "Luxury Residential", size: "2,800 m²", status: "Completed", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop" },
  { name: "Zurich Business Hub", location: "Zurich, Switzerland", type: "Commercial", size: "6,200 m²", status: "Acquisition", image: "https://images.unsplash.com/photo-1464938050520-ef2571e0e6e6?w=600&h=400&fit=crop" },
];

const RealEstate = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Real Estate</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Prime European Properties
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              Our flagship division focuses on acquiring, developing, and managing premium real estate assets across Europe's most prestigious locations.
            </p>
          </div>

          {/* Property Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p, i) => (
              <Card key={p.name} className={`animate-on-scroll delay-${(i % 4) + 1} bg-card border-border overflow-hidden group cursor-pointer`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs text-primary font-medium">{p.status}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {p.name} <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{p.type}</span>
                    <span>{p.size}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Focus areas */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential", desc: "Luxury villas and apartments in prime European locations." },
              { title: "Commercial", desc: "Class-A office spaces and mixed-use developments." },
              { title: "Hospitality", desc: "Boutique hotels and resort developments across the Mediterranean." },
            ].map((area, i) => (
              <div key={area.title} className={`animate-on-scroll delay-${i + 1}`}>
                <Building2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RealEstate;
