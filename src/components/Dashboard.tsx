import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Wallet, 
  Receipt, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Filter
} from "lucide-react";

const Dashboard = () => {
  const recentTransactions = [
    {
      id: "0x1a2b3c...",
      type: "Breakfast",
      amount: "₹45",
      time: "8:30 AM",
      status: "confirmed",
      mess: "North Block Mess"
    },
    {
      id: "0x4d5e6f...",
      type: "Lunch",
      amount: "₹65",
      time: "1:15 PM",
      status: "confirmed",
      mess: "Central Mess"
    },
    {
      id: "0x7g8h9i...",
      type: "Dinner",
      amount: "₹55",
      time: "7:45 PM",
      status: "pending",
      mess: "South Block Mess"
    },
    {
      id: "0x1j2k3l...",
      type: "Snacks",
      amount: "₹25",
      time: "4:20 PM",
      status: "confirmed",
      mess: "Canteen"
    }
  ];

  const stats = [
    {
      label: "Current Balance",
      value: "₹1,240",
      change: "+₹200",
      icon: Wallet,
      positive: true
    },
    {
      label: "This Month",
      value: "₹2,450",
      change: "-₹150",
      icon: TrendingUp,
      positive: false
    },
    {
      label: "Total Meals",
      value: "127",
      change: "+12",
      icon: Receipt,
      positive: true
    },
    {
      label: "Avg/Day",
      value: "₹85",
      change: "+₹5",
      icon: Clock,
      positive: true
    }
  ];

  return (
    <section className="py-20 bg-background" id="dashboard">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Your Dashboard</h2>
              <p className="text-muted-foreground">Track your mess payments and blockchain transactions</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="default" size="sm">
                <Plus className="h-4 w-4" />
                Add Meal
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-smooth">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm flex items-center gap-1 ${
                      stat.positive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stat.change}
                      <span className="text-xs">vs last month</span>
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Recent Transactions */}
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
            <div className="p-6 border-b border-border/50">
              <h3 className="text-xl font-semibold text-foreground">Recent Transactions</h3>
              <p className="text-muted-foreground">Your latest blockchain-verified meal payments</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-border/30 hover:border-primary/30 transition-smooth">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Receipt className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{transaction.type}</p>
                        <p className="text-sm text-muted-foreground">{transaction.mess}</p>
                        <p className="text-xs text-muted-foreground font-mono">{transaction.id}</p>
                      </div>
                    </div>
                    
                    <div className="text-right flex items-center gap-3">
                      <div>
                        <p className="font-semibold text-foreground">{transaction.amount}</p>
                        <p className="text-sm text-muted-foreground">{transaction.time}</p>
                      </div>
                      <Badge variant={transaction.status === "confirmed" ? "default" : "secondary"}>
                        {transaction.status === "confirmed" ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <AlertCircle className="h-3 w-3 mr-1" />
                        )}
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-6">
                <Button variant="outline">View All Transactions</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;