import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderComplete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8 text-center">
      <div className="max-w-2xl">
        <div className="mb-8 inline-flex items-center justify-center w-40 h-40 rounded-full bg-primary/20 shadow-glow-primary animate-pulse">
          <CheckCircle className="h-28 w-28 text-primary" />
        </div>

        <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
          Your Shake is Ready!
        </h1>

        <p className="text-3xl text-foreground mb-4 font-semibold">
          Please collect from the dispenser
        </p>

        <p className="text-2xl text-muted-foreground mb-12">
          Thank you for choosing Protolift
        </p>

        <div className="mt-12 p-6 rounded-xl bg-card border-2 border-primary/30">
          <p className="text-lg text-muted-foreground">
            Returning to home screen in 5 seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
