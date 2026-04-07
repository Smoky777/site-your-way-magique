import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  { slug: "msc-hutchison-ports-deal", title: "MSC Set to Become World's Largest Terminal Operator in $22.8B Hutchison Ports Deal", excerpt: "CK Hutchison sells its 80% stake in Hutchison Ports to a Blackrock-TiL consortium, positioning MSC as the world's largest terminal operator in a landmark deal.", date: "March 2025", category: "Acquisition", url: "https://gcaptain.com/shipping-giant-msc-set-to-become-worlds-largest-terminal-operator-in-22-8b-hutchison-ports-deal/" },
  { slug: "msc-bollore-africa", title: "US$6.3Bn Deal: MSC Group Acquires Bolloré's Africa Division", excerpt: "MSC Group completes the acquisition of Bolloré's Africa logistics division for $6.3 billion, massively expanding its presence across the African continent.", date: "2024", category: "Finance", url: "https://www.rivieramm.com/news-content-hub/news-content-hub/msc-group-makes-us65bn-offer-to-buy-bolloreacutersquos-africa-division-69062" },
  { slug: "msc-wilson-sons-765m", title: "MSC Acquires Wilson Sons Stake in $765 Million Deal", excerpt: "MSC finalizes the acquisition of a 56.5% stake in Brazilian port operator Wilson Sons for R$4.35bn, launching a tender offer for the remaining shares.", date: "October 21, 2024", category: "Investment", url: "https://www.reuters.com/markets/deals/ocean-wilsons-sell-its-majority-stake-wilson-sons-765-deal-2024-10-21/" },
  { slug: "msc-financial-superiority", title: "Financial Superiority Gives MSC the Upper Hand vs Maersk", excerpt: "Analysis of how MSC's financial strength and aggressive investment strategy is intensifying competition with Maersk in the global shipping market.", date: "2024", category: "Finance", url: "https://shippingwatch.com/carriers/Container/article17849840.ece" },
  { slug: "msc-ukraine-logistics", title: "MSC Subsidiary Acquires Ukrainian Logistics Assets — Largest Deal Since the War", excerpt: "Medlog SA, MSC's logistics subsidiary, acquires Ukrainian logistics assets in the largest transaction since the start of the full-scale conflict.", date: "May 15, 2025", category: "Acquisition", url: "https://inventure.com.ua/en/news/ukraine/msc-subsidiary-acquires-ukrainian-logistics-assets-in-the-largest-deal-since-the-start-of-the-full-scale-war" },
  { slug: "msc-bangladesh-investment", title: "MSC Group Invests in Bangladesh Inland Terminal Infrastructure", excerpt: "MEDLOG, part of the MSC Group, invests in inland terminal infrastructure to boost trade connectivity for Bangladesh.", date: "November 26, 2025", category: "Investment", url: "https://www.msc.com/en/newsroom/news/2025/november/msc-group-to-boost-trade-connectivity-for-bangladesh-with-inland-terminal-investment" },
  { slug: "msc-sustainability-report-2024", title: "MSC Publishes its 2024 Sustainability Report", excerpt: "MSC's latest report provides an overview of progress on sustainability objectives across four key action areas.", date: "July 30, 2025", category: "ESG", url: "https://www.msc.com/en/newsroom/news/2025/july/msc-publishes-its-2024-sustainability-report" },
  { slug: "msc-standalone-network", title: "MSC Unveils Future Standalone East/West Network", excerpt: "From February 2025, MSC provides a unique East/West solution offering both Suez and Cape of Good Hope routing options.", date: "September 9, 2024", category: "Strategy", url: "https://www.msc.com/en/newsroom/news/2024/september/msc-unveils-future-standalone-east-west-network" },
  { slug: "msc-transatlantic-enhancement", title: "MSC Enhances Transatlantic Services with 9-Day Transit Time", excerpt: "Industry-leading 9-day Genoa to New York transit time, boosting trade between Europe and North America.", date: "May 2025", category: "Shipping", url: "https://www.msc.com/en/newsroom/news/2025/may/msc-enhances-two-transatlantic-services" },
];

const Blog = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Blog & Insights</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Market Intelligence
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              Expert analysis, market trends, and investment insights from our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <a href={article.url} target="_blank" rel="noopener noreferrer" key={article.slug} className={`animate-on-scroll delay-${(i % 4) + 1}`}>
                <Card className="bg-card border-border group cursor-pointer hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-full">{article.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                  <span className="text-muted-foreground text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read on MSC.com <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
