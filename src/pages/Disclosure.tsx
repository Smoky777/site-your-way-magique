import PageLayout from "@/components/PageLayout";

const Disclosure = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4 animate-on-scroll">Disclosure</h1>
          <p className="text-muted-foreground text-sm mb-10 animate-on-scroll">Last updated: January 2024</p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground text-sm leading-relaxed animate-on-scroll">

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">About Multi Investment</h2>
              <p>Multi Investment Holding SA ("Multi Investment") is a family office and private investment firm incorporated under the laws of Switzerland, with registered office at Chemin Rieu 12, 1208 Genève. We manage and advise on investments across multiple asset classes on behalf of the Aponte family and select institutional partners.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">Investment Risks</h2>
              <p>All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. The value of investments and the income derived from them may fluctuate, and investors may not receive back the full amount invested. Risk factors vary depending on asset class and may include, but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Market risk and volatility</li>
                <li>Liquidity risk, particularly in private equity and real estate</li>
                <li>Currency and exchange rate risk</li>
                <li>Credit and counterparty risk</li>
                <li>Regulatory and political risk</li>
                <li>Interest rate risk</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">No Investment Advice</h2>
              <p>The content on this website does not constitute investment, financial, legal, or tax advice, nor does it constitute an offer or solicitation to buy or sell any securities or investment products. Any investment decisions should be made in consultation with qualified professional advisors who can take into account your specific circumstances, objectives, and risk tolerance.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">Regulatory Status</h2>
              <p>Multi Investment Holding SA is incorporated and operates under the laws of Switzerland. Our activities are conducted in compliance with applicable Swiss financial regulations and international standards. We are not registered as an investment advisor or broker-dealer in any jurisdiction outside of Switzerland unless specifically stated otherwise.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">Confidentiality</h2>
              <p>We are committed to maintaining the highest standards of confidentiality and discretion in all client matters, in accordance with Swiss banking secrecy laws, the Swiss Federal Act on Data Protection (FADP), and applicable international regulations including GDPR where relevant.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">Forward-Looking Statements</h2>
              <p>This website may contain forward-looking statements that reflect our current expectations regarding future events, market conditions, and business prospects. These statements are subject to known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied. We undertake no obligation to update forward-looking statements.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">Conflicts of Interest</h2>
              <p>Multi Investment and its affiliates may hold positions in, or act as market makers for, securities or asset classes discussed on this website. We maintain robust policies and procedures to identify and manage potential conflicts of interest in accordance with applicable regulations.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-serif text-foreground font-semibold">Contact</h2>
              <p>For questions regarding these disclosures, please contact:</p>
              <p className="pl-4 border-l-2 border-primary/20">
                <strong className="text-foreground">Multi Investment Holding SA</strong><br />
                Chemin Rieu 12, 1208 Genève, Switzerland<br />
                Email: <a href="mailto:privacy@multiinvest.com" className="text-primary hover:underline">privacy@multiinvest.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Disclosure;
