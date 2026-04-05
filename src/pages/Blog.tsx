import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  { slug: "msc-sustainability-report-2024", title: "MSC Publishes its 2024 Sustainability Report", excerpt: "MSC's latest report provides an overview of progress on sustainability objectives across four key action areas, from enabling logistics to decarbonization.", date: "July 30, 2025", category: "Sustainability", url: "https://www.msc.com/en/newsroom/news/2025/july/msc-publishes-its-2024-sustainability-report" },
  { slug: "msc-ireefer-launch", title: "MSC Launches iReefer: The Most Advanced Container Monitoring System", excerpt: "MSC introduces iReefer, allowing customers to track and monitor reefer cargo in real-time with cutting-edge container technology.", date: "February 3, 2025", category: "Innovation", url: "https://www.msc.com/en/newsroom/press-releases/2025/february/msc-launches-ireefer" },
  { slug: "msc-standalone-network", title: "MSC Unveils Future Standalone East/West Network", excerpt: "From February 2025, MSC will provide a unique East/West solution offering both Suez and Cape of Good Hope routing options.", date: "September 9, 2024", category: "Network", url: "https://www.msc.com/en/newsroom/news/2024/september/msc-unveils-future-standalone-east-west-network" },
  { slug: "msc-bangladesh-investment", title: "MSC Group to Boost Trade Connectivity for Bangladesh", excerpt: "MEDLOG, part of the MSC Group, invests in inland terminal infrastructure to strengthen trade connectivity in Bangladesh.", date: "November 26, 2025", category: "Investment", url: "https://www.msc.com/en/newsroom/news/2025/november/msc-group-to-boost-trade-connectivity-for-bangladesh-with-inland-terminal-investment" },
  { slug: "msc-transatlantic-enhancement", title: "MSC Enhances Transatlantic Services with 9-Day Transit Time", excerpt: "Industry-leading 9-day Genoa to New York transit time on enhanced transatlantic services, boosting trade between Europe and North America.", date: "2025", category: "Shipping", url: "https://www.msc.com/en/newsroom/news/2025/may/msc-enhances-two-transatlantic-services" },
  { slug: "msc-alpaca-service", title: "MSC Launches Alpaca Service: Far East to South America West Coast", excerpt: "New fast service connecting the Far East to the West Coast of South America, expanding MSC's global East-West network.", date: "July 31, 2025", category: "New Service", url: "https://www.msc.com/en/newsroom/news/2025/july/msc-launches-fast-new-alpaca-service-for-trade-far-east-to-south-america-west-coast" },
];

const Blog = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 animate-on-scroll">Blog & Insights</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-on-scroll">
              Market Intelligence
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll">
              Expert analysis, market trends, and investment insights from our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Card key={article.slug} className={`animate-on-scroll delay-${(i % 4) + 1} bg-card border-border group cursor-pointer hover:border-primary/50 transition-colors`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-full">{article.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
