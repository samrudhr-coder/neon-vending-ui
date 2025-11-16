import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import wheyShake from "@/assets/whey-shake.jpg";
import massGainerShake from "@/assets/mass-gainer-shake.jpg";
import dietShake from "@/assets/diet-shake.jpg";

const products = {
  whey: {
    name: "Whey Protein Shake",
    image: wheyShake,
    calories: 350,
    protein: 30,
    price: 120,
  },
  mass: {
    name: "Mass Gainer Shake",
    image: massGainerShake,
    calories: 650,
    protein: 45,
    price: 180,
  },
  diet: {
    name: "Diet / Low-Cal Shake",
    image: dietShake,
    calories: 180,
    protein: 20,
    price: 100,
  },
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products[id as keyof typeof products];
  
  const [quantity, setQuantity] = useState(1);
  const [extraScoop, setExtraScoop] = useState(false);
  const [sugarFree, setSugarFree] = useState(false);

  if (!product) {
    navigate("/");
    return null;
  }

  const extraScoopPrice = 40;
  const totalPrice = (product.price + (extraScoop ? extraScoopPrice : 0)) * quantity;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-gradient-dark px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PROTOLIFT
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-card-glow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h2>
              
              <div className="flex gap-6 mb-8">
                <Card className="bg-card border-primary/30 px-6 py-3">
                  <div className="text-3xl font-bold text-primary">{product.calories}</div>
                  <div className="text-sm text-muted-foreground">Calories</div>
                </Card>
                <Card className="bg-card border-primary/30 px-6 py-3">
                  <div className="text-3xl font-bold text-primary">{product.protein}g</div>
                  <div className="text-sm text-muted-foreground">Protein</div>
                </Card>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="text-lg font-semibold text-foreground mb-3 block">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-14 w-14"
                  >
                    <Minus className="h-5 w-5" />
                  </Button>
                  <span className="text-4xl font-bold text-foreground w-16 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min(3, quantity + 1))}
                    className="h-14 w-14"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-4 mb-8">
                <label className="text-lg font-semibold text-foreground block">
                  Add-ons
                </label>
                
                <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                  <Checkbox
                    id="extra-scoop"
                    checked={extraScoop}
                    onCheckedChange={(checked) => setExtraScoop(checked as boolean)}
                    className="h-6 w-6"
                  />
                  <label
                    htmlFor="extra-scoop"
                    className="text-lg text-foreground cursor-pointer flex-1"
                  >
                    Extra scoop <span className="text-primary font-semibold">+₹40</span>
                  </label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                  <Checkbox
                    id="sugar-free"
                    checked={sugarFree}
                    onCheckedChange={(checked) => setSugarFree(checked as boolean)}
                    className="h-6 w-6"
                  />
                  <label
                    htmlFor="sugar-free"
                    className="text-lg text-foreground cursor-pointer flex-1"
                  >
                    Sugar-free
                  </label>
                </div>
              </div>

              {/* Price & Checkout */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-muted-foreground">Total Price</div>
                  <div className="text-5xl font-bold text-primary">₹{totalPrice}</div>
                </div>
              </div>

              <Button
                variant="neon"
                size="xl"
                onClick={() => navigate("/payment")}
                className="w-full"
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
