import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/complete");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8 text-center">
      <div className="max-w-2xl">
        <div className="mb-8 inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/20 shadow-glow-primary">
          <CheckCircle className="h-20 w-20 text-primary" />
        </div>

        <h1 className="text-6xl font-bold text-foreground mb-4">
          Payment Successful
        </h1>

        <p className="text-2xl text-muted-foreground mb-8">
          Dispensing your shake...
        </p>

        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent mb-8"></div>

        <p className="text-lg text-muted-foreground">
          Please wait while we prepare your order
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
