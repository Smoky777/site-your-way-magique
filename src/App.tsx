import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AssetManagement from "./pages/AssetManagement";
import WealthManagement from "./pages/WealthManagement";
import InvestmentStrategies from "./pages/InvestmentStrategies";
import RealEstate from "./pages/RealEstate";
import About from "./pages/About";
import Team from "./pages/Team";
import ClientPortal from "./pages/ClientPortal";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import OurApproach from "./pages/OurApproach";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/asset-management" element={<AssetManagement />} />
          <Route path="/wealth-management" element={<WealthManagement />} />
          <Route path="/investment-strategies" element={<InvestmentStrategies />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
