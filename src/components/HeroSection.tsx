import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/blockchain-mess-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0px,_transparent_50%)] opacity-10" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Blockchain-Powered</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transparent
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Mess </span>
                Payments
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Every meal logged on blockchain. No more disputes between students and mess owners. 
                Complete transparency in hostel and college food payments.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Mess Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Transactions</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Blockchain mess payment system"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-xl p-4 shadow-glow">
              <Shield className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm font-medium">Tamper Proof</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-xl p-4 shadow-glow">
              <Users className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm font-medium">Multi-User</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;