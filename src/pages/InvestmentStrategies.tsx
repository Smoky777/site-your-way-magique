import PageLayout from "@/components/PageLayout";
import InvestmentHero from "@/components/investment/InvestmentHero";
import InvestmentStructures from "@/components/investment/InvestmentStructures";
import InvestmentProcess from "@/components/investment/InvestmentProcess";
import InvestmentPhilosophy from "@/components/investment/InvestmentPhilosophy";
import InvestmentCTA from "@/components/investment/InvestmentCTA";

const InvestmentStrategies = () => {
  return (
    <PageLayout>
      <InvestmentHero />
      <InvestmentStructures />
      <InvestmentProcess />
      <InvestmentPhilosophy />
      <InvestmentCTA />
    </PageLayout>
  );
};

export default InvestmentStrategies;
