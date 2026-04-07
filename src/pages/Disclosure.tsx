import PageLayout from "@/components/PageLayout";

const Disclosure = () => {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-12 animate-on-scroll">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-accent mb-4">Legal</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">Disclosure</h1>
            <div className="w-16 h-[2px] bg-accent mt-6" />
            <p className="text-muted-foreground text-sm mt-6 font-sans tracking-wide">Effective Date — January 2024</p>
          </div>

          <div className="space-y-10 animate-on-scroll">

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">About Multi Investment</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">Multi Investment Holding SA ("Multi Investment") is a family office and private investment firm incorporated under the laws of Switzerland, with registered office at Chemin Rieu 12, 1208 Genève. We manage and advise on investments across multiple asset classes on behalf of the Aponte family and select institutional partners.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">Investment Risks</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. The value of investments and the income derived from them may fluctuate, and investors may not receive back the full amount invested. Risk factors include, but are not limited to:</p>
              <ul className="list-none space-y-2 text-sm text-muted-foreground leading-[1.8] font-sans pl-0">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Market risk and volatility</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Liquidity risk, particularly in private equity and real estate</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Currency and exchange rate risk</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Credit and counterparty risk</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Regulatory and political risk</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Interest rate risk</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">No Investment Advice</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">The content on this website does not constitute investment, financial, legal, or tax advice, nor does it constitute an offer or solicitation to buy or sell any securities or investment products. Any investment decisions should be made in consultation with qualified professional advisors who can take into account your specific circumstances, objectives, and risk tolerance.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">Regulatory Status</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">Multi Investment Holding SA is incorporated and operates under the laws of Switzerland. Our activities are conducted in compliance with applicable Swiss financial regulations and international standards. We are not registered as an investment advisor or broker-dealer in any jurisdiction outside of Switzerland unless specifically stated otherwise.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">Confidentiality</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">We are committed to maintaining the highest standards of confidentiality and discretion in all client matters, in accordance with Swiss banking secrecy laws, the Swiss Federal Act on Data Protection (FADP), and applicable international regulations including GDPR where relevant.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">Forward-Looking Statements</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">This website may contain forward-looking statements that reflect our current expectations regarding future events, market conditions, and business prospects. These statements are subject to known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied. We undertake no obligation to update forward-looking statements.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">Conflicts of Interest</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">Multi Investment and its affiliates may hold positions in, or act as market makers for, securities or asset classes discussed on this website. We maintain robust policies and procedures to identify and manage potential conflicts of interest in accordance with applicable regulations.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif text-foreground font-semibold tracking-tight">Contact</h2>
              <p className="text-sm text-muted-foreground leading-[1.8] font-sans">For questions regarding these disclosures, please contact:</p>
              <div className="pl-5 border-l border-accent/40 text-sm text-muted-foreground leading-[1.8] font-sans">
                <p className="font-semibold text-foreground">Multi Investment Holding SA</p>
                <p>Chemin Rieu 12, 1208 Genève, Switzerland</p>
                <p>Email: <a href="mailto:privacy@multiinvest.com" className="text-accent hover:underline">privacy@multiinvest.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Disclosure;
