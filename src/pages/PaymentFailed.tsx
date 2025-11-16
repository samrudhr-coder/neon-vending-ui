import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8 text-center">
      <div className="max-w-2xl">
        <div className="mb-8 inline-flex items-center justify-center w-32 h-32 rounded-full bg-destructive/20">
          <XCircle className="h-20 w-20 text-destructive" />
        </div>

        <h1 className="text-6xl font-bold text-foreground mb-4">
          Payment Failed
        </h1>

        <p className="text-2xl text-muted-foreground mb-12">
          Your payment could not be processed
        </p>

        <div className="space-y-4">
          <Button
            variant="neon"
            size="xl"
            className="w-full max-w-md"
            onClick={() => navigate("/payment")}
          >
            Try Again
          </Button>

          <Button
            variant="ghost"
            size="xl"
            className="w-full max-w-md"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
