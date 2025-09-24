import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import Features from "@/components/Features";
import BlockchainPayment from "@/components/BlockchainPayment";
import TransactionHistory from "@/components/TransactionHistory";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <BlockchainPayment />
          <TransactionHistory />
        </div>
      </section>
      <Dashboard />
      <Features />
    </main>
  );
};

export default Index;
