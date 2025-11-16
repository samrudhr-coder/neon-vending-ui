import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Settings = () => {
  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Configure your vending machine</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Payment Configuration</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="razorpay-key" className="text-foreground">Razorpay API Key</Label>
              <Input
                id="razorpay-key"
                type="password"
                placeholder="rzp_••••••••••••"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="razorpay-secret" className="text-foreground">Razorpay Secret Key</Label>
              <Input
                id="razorpay-secret"
                type="password"
                placeholder="••••••••••••"
                className="mt-2"
              />
            </div>
            <Button variant="neon" onClick={handleSave}>
              Save Payment Settings
            </Button>
          </div>
        </Card>

        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Machine Configuration</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="machine-id" className="text-foreground">Machine ID</Label>
              <Input
                id="machine-id"
                defaultValue="PROTO-VM-001"
                className="mt-2"
                disabled
              />
            </div>
            <div>
              <Label htmlFor="network" className="text-foreground">Network SSID</Label>
              <Input
                id="network"
                placeholder="WiFi Network Name"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="temperature" className="text-foreground">Target Temperature (°C)</Label>
              <Input
                id="temperature"
                type="number"
                defaultValue="4"
                className="mt-2"
              />
            </div>
            <Button variant="neon" onClick={handleSave}>
              Save Machine Settings
            </Button>
          </div>
        </Card>

        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Product Management</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="whey-price" className="text-foreground">Whey Protein Price (₹)</Label>
              <Input
                id="whey-price"
                type="number"
                defaultValue="120"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="mass-price" className="text-foreground">Mass Gainer Price (₹)</Label>
              <Input
                id="mass-price"
                type="number"
                defaultValue="180"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="diet-price" className="text-foreground">Diet Shake Price (₹)</Label>
              <Input
                id="diet-price"
                type="number"
                defaultValue="100"
                className="mt-2"
              />
            </div>
            <Button variant="neon" onClick={handleSave}>
              Save Product Prices
            </Button>
          </div>
        </Card>

        <Card className="bg-card border-2 border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Admin Account</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="current-pin" className="text-foreground">Current PIN</Label>
              <Input
                id="current-pin"
                type="password"
                placeholder="••••"
                maxLength={4}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="new-pin" className="text-foreground">New PIN</Label>
              <Input
                id="new-pin"
                type="password"
                placeholder="••••"
                maxLength={4}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="confirm-pin" className="text-foreground">Confirm New PIN</Label>
              <Input
                id="confirm-pin"
                type="password"
                placeholder="••••"
                maxLength={4}
                className="mt-2"
              />
            </div>
            <Button variant="neon" onClick={handleSave}>
              Change PIN
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
