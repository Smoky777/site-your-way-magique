import PageLayout from "@/components/PageLayout";

const Disclosure = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Disclosure</h1>
            <div className="prose prose-sm text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Multi Investment Holding SA ("Multi Investment", "we", "us") is a family office and private investment firm based in Geneva, Switzerland. The information provided on this website is for general informational purposes only and does not constitute an offer, solicitation, or recommendation to buy or sell any securities or investment products.
              </p>
              <h2 className="text-xl font-serif font-semibold text-foreground mt-8">Investment Risks</h2>
              <p>
                All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. The value of investments and the income derived from them may go down as well as up. Investors may not receive back the full amount invested.
              </p>
              <h2 className="text-xl font-serif font-semibold text-foreground mt-8">No Investment Advice</h2>
              <p>
                The content on this website does not constitute investment, financial, legal, or tax advice. Any investment decisions should be made in consultation with qualified professional advisors who can take into account your specific circumstances, objectives, and risk tolerance.
              </p>
              <h2 className="text-xl font-serif font-semibold text-foreground mt-8">Regulatory Status</h2>
              <p>
                Multi Investment Holding SA is incorporated and regulated under the laws of Switzerland. Our activities are conducted in compliance with applicable Swiss financial regulations and international standards.
              </p>
              <h2 className="text-xl font-serif font-semibold text-foreground mt-8">Confidentiality</h2>
              <p>
                We are committed to maintaining the highest standards of confidentiality and data protection in accordance with Swiss law and applicable international regulations, including GDPR where applicable.
              </p>
              <h2 className="text-xl font-serif font-semibold text-foreground mt-8">Forward-Looking Statements</h2>
              <p>
                This website may contain forward-looking statements that reflect our current expectations regarding future events. These statements involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Disclosure;
