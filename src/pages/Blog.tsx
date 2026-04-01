import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  { slug: "european-real-estate-outlook-2024", title: "European Real Estate Outlook: Opportunities in a Shifting Market", excerpt: "As interest rates stabilize, we explore key opportunities emerging across European property markets — from Mediterranean luxury to Northern European commercial.", date: "March 15, 2024", category: "Real Estate" },
  { slug: "private-equity-trends", title: "Private Equity Trends: The Rise of Impact-Driven Capital", excerpt: "ESG-integrated private equity is reshaping the industry. Here's how institutional investors are aligning returns with purpose.", date: "February 28, 2024", category: "Private Equity" },
  { slug: "venture-capital-europe", title: "European Venture Capital: Why Early-Stage is Booming", excerpt: "From deep tech in Switzerland to fintech in London, Europe's startup ecosystem is attracting record seed-stage investment.", date: "February 10, 2024", category: "Venture Capital" },
  { slug: "wealth-preservation-strategies", title: "Wealth Preservation Across Generations", excerpt: "Key strategies for UHNW families to protect and grow wealth through succession planning, trust structures, and diversified allocation.", date: "January 22, 2024", category: "Wealth Management" },
  { slug: "sustainable-investing-2024", title: "Sustainable Investing: Beyond the Buzzword", excerpt: "How rigorous ESG analysis can enhance risk-adjusted returns while driving real environmental and social impact.", date: "January 5, 2024", category: "ESG" },
  { slug: "mediterranean-hospitality", title: "The Mediterranean Hospitality Boom", excerpt: "Luxury hospitality developments along the Mediterranean coast are attracting significant institutional interest. We analyze the trends.", date: "December 18, 2023", category: "Real Estate" },
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
