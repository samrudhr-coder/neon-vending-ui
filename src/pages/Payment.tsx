import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, QrCode } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handlePayment = (method: string) => {
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      // 80% success rate for demo
      const success = Math.random() > 0.2;
      navigate(success ? "/success" : "/failed");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 text-center">
          PROTOLIFT
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Choose Payment Method
        </p>

        {/* Order Summary */}
        <Card className="bg-card border-2 border-primary/30 p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-lg">
              <span className="text-muted-foreground">Whey Protein Shake x1</span>
              <span className="text-foreground font-semibold">₹120</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-muted-foreground">Extra scoop</span>
              <span className="text-foreground font-semibold">₹40</span>
            </div>
            <div className="border-t border-border pt-3 mt-3 flex justify-between text-2xl">
              <span className="text-foreground font-bold">Total</span>
              <span className="text-primary font-bold">₹160</span>
            </div>
          </div>
        </Card>

        {/* Payment Methods */}
        <div className="space-y-6">
          <Button
            variant="kiosk"
            className="w-full"
            onClick={() => handlePayment("razorpay")}
            disabled={processing}
          >
            <CreditCard className="h-8 w-8 mr-4" />
            <span>Pay with Razorpay</span>
          </Button>

          <Button
            variant="outline"
            size="xl"
            className="w-full"
            onClick={() => handlePayment("upi")}
            disabled={processing}
          >
            <QrCode className="h-8 w-8 mr-4" />
            <span>Scan UPI QR Code</span>
          </Button>
        </div>

        {processing && (
          <div className="mt-8 text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-xl text-muted-foreground mt-4">Processing payment...</p>
          </div>
        )}

        <Button
          variant="ghost"
          className="w-full mt-8"
          onClick={() => navigate(-1)}
          disabled={processing}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Payment;
