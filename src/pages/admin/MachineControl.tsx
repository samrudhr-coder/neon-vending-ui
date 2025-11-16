import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Power, RefreshCw, Zap, ThermometerSun, Wifi } from "lucide-react";
import { toast } from "sonner";

const MachineControl = () => {
  const handleTestDispense = () => {
    toast.success("Test dispense initiated");
  };

  const handleRestart = () => {
    toast.success("Machine restart scheduled");
  };

  const handleSync = () => {
    toast.success("Syncing machine data...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Machine Control</h1>
        <p className="text-muted-foreground">Monitor and control your vending machine</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-card border-2 border-primary/30 p-6 lg:col-span-2">
          <h2 className="text-2xl font-bold text-foreground mb-6">Machine Status</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Power className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold">Machine ID</span>
              </div>
              <span className="text-foreground font-mono">PROTO-VM-001</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Wifi className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold">Status</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                Online
              </span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/20">
                  <ThermometerSun className="h-5 w-5 text-secondary" />
                </div>
                <span className="text-foreground font-semibold">Temperature</span>
              </div>
              <span className="text-foreground">4°C</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold">Firmware</span>
              </div>
              <span className="text-foreground font-mono">v2.1.4</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <RefreshCw className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold">Last Sync</span>
              </div>
              <span className="text-muted-foreground">2 minutes ago</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="neon" size="lg" onClick={handleTestDispense} className="w-full">
              <Zap className="h-5 w-5 mr-2" />
              Test Dispense
            </Button>
            <Button variant="outline" size="lg" onClick={handleRestart} className="w-full">
              <Power className="h-5 w-5 mr-2" />
              Restart Machine
            </Button>
            <Button variant="outline" size="lg" onClick={handleSync} className="w-full">
              <RefreshCw className="h-5 w-5 mr-2" />
              Sync Now
            </Button>
          </div>
        </Card>

        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Real-time Stats</h2>
          <div className="space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Orders Today</div>
              <div className="text-4xl font-bold text-primary">247</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Success Rate</div>
              <div className="text-4xl font-bold text-primary">95%</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Revenue Today</div>
              <div className="text-4xl font-bold text-primary">₹32,680</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Uptime</div>
              <div className="text-4xl font-bold text-primary">99.8%</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MachineControl;
