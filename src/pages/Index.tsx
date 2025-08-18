import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Dashboard />
      <Features />
    </div>
  );
};

export default Index;
