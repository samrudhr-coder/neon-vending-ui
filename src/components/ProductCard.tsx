import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  calories: number;
  protein: number;
  price: number;
}

export const ProductCard = ({ id, name, image, calories, protein, price }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="bg-card border-2 border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all cursor-pointer overflow-hidden group">
      <div onClick={() => navigate(`/product/${id}`)} className="p-6">
        <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        
        <div className="flex gap-4 mb-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="text-primary font-semibold">{calories}</span> cal
          </span>
          <span className="flex items-center gap-1">
            <span className="text-primary font-semibold">{protein}g</span> protein
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-primary">₹{price}</span>
          <Button variant="neon" size="lg">
            Order Now
          </Button>
        </div>
      </div>
    </Card>
  );
};
