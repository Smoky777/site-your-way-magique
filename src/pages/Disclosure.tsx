import PageLayout from "@/components/PageLayout";

const Disclosure = () => {
  return (
    <PageLayout>
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl legal-body">

          <div className="mb-16 animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Legal Notice</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-[1.15]">Disclosure</h1>
            <div className="w-20 h-[2px] bg-accent mt-8" />
            <p className="text-muted-foreground mt-8 tracking-wide">Effective Date — February 2024</p>
          </div>

          <div className="mb-14 animate-on-scroll">
            <p className="text-base md:text-lg text-muted-foreground leading-[2] font-sans">
              The following disclosures are provided by Multi Investment Holding SA in accordance with applicable Swiss financial regulations and international best practices. This information is intended to help you understand the nature of our business, the risks associated with investing, and the regulatory framework within which we operate.
            </p>
          </div>

          <div className="space-y-14 animate-on-scroll">

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">About Multi Investment</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Multi Investment Holding SA is a family office and private investment firm incorporated under the laws of Switzerland, with its registered office at Chemin Rieu 12, 1208 Genève. Founded in 2024, we manage and advise on investments across multiple asset classes — including private equity, real estate, venture capital, and public markets — on behalf of the Aponte family and select institutional partners. Our investment philosophy combines long-term value creation with disciplined risk management, drawing on the Aponte family's multi-generational experience in building and operating global enterprises.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">Investment Risks</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">All investments carry inherent risks, including the potential loss of the entire principal amount invested. Past performance is not a reliable indicator of future results. The value of investments and the income derived from them may decrease as well as increase, and investors may not recover the original amount invested. The level of risk varies depending on the asset class, investment strategy, market conditions, and other factors. Specific risk factors include, but are not limited to:</p>
              <ul className="list-none space-y-3 text-base text-muted-foreground leading-[2] font-sans pl-0 mt-4">
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Market risk:</strong> the risk that the value of investments will decline due to adverse movements in financial markets, including equity, fixed income, commodity, and currency markets</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Liquidity risk:</strong> the risk of being unable to sell an investment at a fair price within a reasonable timeframe, particularly relevant to private equity, real estate, and venture capital investments</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Currency risk:</strong> the risk that fluctuations in exchange rates may adversely affect the value of international investments</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Credit & counterparty risk:</strong> the risk that a borrower, issuer, or counterparty may default on its financial obligations</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Concentration risk:</strong> the risk associated with a lack of diversification across asset classes, geographies, or sectors</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Regulatory & political risk:</strong> the risk that changes in laws, regulations, or political conditions may impact investment values or operational activities</span></li>
                <li className="flex gap-4"><span className="text-accent mt-1 shrink-0 font-serif">—</span><span><strong className="text-foreground font-medium">Interest rate risk:</strong> the risk that changes in interest rates may affect the value of fixed-income securities and other rate-sensitive investments</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">No Investment Advice</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">The content published on this website is provided for general informational purposes only. It does not constitute investment advice, financial guidance, or a recommendation or solicitation to purchase, sell, or hold any securities, financial instruments, or investment products. Nothing on this website should be interpreted as a specific investment recommendation or an opinion regarding the suitability of any particular investment strategy for any individual. All investment decisions should be made in consultation with qualified independent professional advisors — including financial, legal, and tax advisors — who can assess your specific financial situation, objectives, time horizon, and risk tolerance.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">Regulatory Status</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Multi Investment Holding SA is incorporated and operates under the laws of Switzerland. Our activities are conducted in full compliance with applicable Swiss financial regulations, including those administered by the Swiss Financial Market Supervisory Authority (FINMA), as well as relevant international standards and conventions. Multi Investment is not registered as an investment advisor, broker-dealer, or fund manager in any jurisdiction outside of Switzerland, unless specifically stated otherwise. The services described on this website are available only in jurisdictions where they may be lawfully offered.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">Confidentiality & Data Protection</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Multi Investment upholds the highest standards of confidentiality and discretion in all client and business matters. We operate in strict accordance with Swiss banking secrecy laws, the Swiss Federal Act on Data Protection (FADP), and applicable international data protection regulations, including the EU General Data Protection Regulation (GDPR) where relevant. All client information is treated as strictly confidential and is shared only with authorized parties in compliance with our legal and regulatory obligations. For further details on how we collect, process, and protect your personal data, please refer to our <a href="/privacy" className="text-accent hover:underline font-medium">Privacy Policy</a>.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">Forward-Looking Statements</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">This website may contain forward-looking statements that reflect Multi Investment's current expectations, estimates, projections, and assumptions regarding future events, market conditions, business strategies, and financial performance. These statements are inherently uncertain and are subject to known and unknown risks, uncertainties, and other factors — many of which are beyond our control — that may cause actual results, performance, or achievements to differ materially from those expressed or implied. Forward-looking statements speak only as of the date they are made, and Multi Investment undertakes no obligation to publicly update or revise any forward-looking statements, whether as a result of new information, future developments, or otherwise.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">Conflicts of Interest</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">Multi Investment and its affiliates, principals, directors, officers, and employees may from time to time hold positions in, or act as market makers, advisors, or service providers for, securities, asset classes, or companies discussed on this website. We maintain comprehensive policies and procedures designed to identify, manage, mitigate, and disclose potential conflicts of interest in accordance with Swiss financial regulations and international best practices. Our commitment to transparency and ethical conduct is central to the way we manage client relationships and investment activities.</p>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
              <h2 className="text-xl md:text-2xl font-serif text-foreground font-semibold tracking-tight">Contact</h2>
              <p className="text-base text-muted-foreground leading-[2] font-sans">For any questions regarding these disclosures, our regulatory status, or our approach to managing conflicts of interest, please contact:</p>
              <div className="pl-6 border-l-2 border-accent/30 text-base text-muted-foreground leading-[2] font-sans py-3 bg-muted/30 rounded-r-lg pr-6">
                <p className="font-semibold text-foreground text-lg font-serif">Multi Investment Holding SA</p>
                <p className="mt-1">Chemin Rieu 12</p>
                <p>1208 Genève, Switzerland</p>
                <p className="mt-2">Email: <a href="mailto:privacy@multiinvest.com" className="text-accent hover:underline font-medium">privacy@multiinvest.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Disclosure;
