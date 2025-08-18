import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Users, 
  BarChart3, 
  Smartphone, 
  Lock 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Tamper-Proof Records",
      description: "Every meal transaction is permanently recorded on blockchain, ensuring complete transparency and preventing disputes."
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Instant meal logging and payment verification. Students and mess owners see transactions in real-time."
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Seamlessly handles students, mess owners, and administrative staff with role-based access controls."
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Detailed insights into spending patterns, meal preferences, and usage statistics for better planning."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for smartphones with offline support. Works perfectly in areas with poor connectivity."
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Encrypted payment processing with blockchain verification ensures your money is always protected."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> MessChain</span>?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Revolutionary blockchain technology meets everyday mess management. 
            Experience transparency, efficiency, and trust like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-glow/10 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Mess Management?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of students and mess owners who have already eliminated payment disputes 
            and streamlined their food service operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow/30 transition-smooth">
              Start Free Trial
            </button>
            <button className="bg-card/50 backdrop-blur-sm border border-primary/20 text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 hover:border-primary/40 transition-smooth">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;