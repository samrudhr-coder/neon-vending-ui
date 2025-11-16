import { Card } from "@/components/ui/card";
import { Activity, Package, ShoppingCart, Zap } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Orders Today",
      value: "247",
      icon: ShoppingCart,
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
    {
      title: "Successful Dispenses",
      value: "235",
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
    {
      title: "Failed Dispenses",
      value: "12",
      icon: Activity,
      color: "text-destructive",
      bgColor: "bg-destructive/20",
    },
    {
      title: "Low Stock Items",
      value: "3",
      icon: Package,
      color: "text-secondary",
      bgColor: "bg-secondary/20",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your vending machine performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="bg-card border-2 border-border hover:border-primary/50 transition-colors p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
            <h3 className="text-sm text-muted-foreground mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Machine Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-2 border-primary/30 p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Machine Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">Status</span>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                Online
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">Temperature</span>
              <span className="text-foreground">4°C</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">Firmware</span>
              <span className="text-foreground">v2.1.4</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">Last Sync</span>
              <span className="text-foreground">2 minutes ago</span>
            </div>
          </div>
        </Card>

        <Card className="bg-card border-2 border-primary/30 p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Popular Shakes</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <div>
                <div className="text-foreground font-semibold">Whey Protein</div>
                <div className="text-sm text-muted-foreground">108 orders</div>
              </div>
              <div className="text-2xl font-bold text-primary">44%</div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <div>
                <div className="text-foreground font-semibold">Mass Gainer</div>
                <div className="text-sm text-muted-foreground">87 orders</div>
              </div>
              <div className="text-2xl font-bold text-secondary">35%</div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <div>
                <div className="text-foreground font-semibold">Diet Shake</div>
                <div className="text-sm text-muted-foreground">52 orders</div>
              </div>
              <div className="text-2xl font-bold text-accent">21%</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
