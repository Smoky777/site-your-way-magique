import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
