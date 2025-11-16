import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { toast } from "sonner";
import protoliftLogo from "@/assets/protolift-logo.png";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePinInput = (digit: string) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleLogin = () => {
    setLoading(true);
    // Demo PIN: 1234
    setTimeout(() => {
      if (pin === "1234") {
        toast.success("Login successful!");
        navigate("/admin/dashboard");
      } else {
        toast.error("Invalid PIN. Try 1234");
        setPin("");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-8">
      <Card className="w-full max-w-md p-8 bg-card border-2 border-primary/30 shadow-card-glow">
        <div className="mb-8 text-center">
          <img 
            src={protoliftLogo} 
            alt="Protolift" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Portal</h1>
          <p className="text-muted-foreground">Enter your PIN to continue</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center text-2xl font-bold ${
                  pin.length > i
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-border text-muted-foreground"
                }`}
              >
                {pin.length > i ? "•" : ""}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                variant="outline"
                size="lg"
                onClick={() => handlePinInput(num.toString())}
                disabled={loading || pin.length >= 4}
                className="text-xl font-bold h-16"
              >
                {num}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div />
            <Button
              variant="outline"
              size="lg"
              onClick={() => handlePinInput("0")}
              disabled={loading || pin.length >= 4}
              className="text-xl font-bold h-16"
            >
              0
            </Button>
            <Button
              variant="destructive"
              size="lg"
              onClick={handleDelete}
              disabled={loading || pin.length === 0}
              className="h-16"
            >
              ⌫
            </Button>
          </div>

          <Button
            variant="neon"
            size="lg"
            onClick={handleLogin}
            disabled={loading || pin.length !== 4}
            className="w-full"
          >
            <Lock className="h-5 w-5 mr-2" />
            {loading ? "Verifying..." : "Login"}
          </Button>
        </div>

        <Button
          variant="ghost"
          className="w-full"
          onClick={() => navigate("/")}
        >
          Back to Kiosk
        </Button>
      </Card>
    </div>
  );
};

export default AdminLogin;
