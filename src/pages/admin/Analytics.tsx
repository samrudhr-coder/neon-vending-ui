import { Card } from "@/components/ui/card";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">Track performance and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Sales Trend</h2>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            Chart visualization would go here
          </div>
        </Card>

        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Peak Hours</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">6:00 AM - 9:00 AM</span>
              <span className="text-primary font-bold">85 orders</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">5:00 PM - 8:00 PM</span>
              <span className="text-primary font-bold">112 orders</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">12:00 PM - 2:00 PM</span>
              <span className="text-primary font-bold">50 orders</span>
            </div>
          </div>
        </Card>

        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Payment Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">Razorpay</span>
              <span className="text-primary font-bold">78%</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">UPI</span>
              <span className="text-primary font-bold">22%</span>
            </div>
          </div>
        </Card>

        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Success Rate</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">Payment Success</span>
              <span className="text-primary font-bold">96.2%</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <span className="text-foreground font-semibold">Dispense Success</span>
              <span className="text-primary font-bold">95.1%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
