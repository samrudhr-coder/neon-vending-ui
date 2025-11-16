import { ProductCard } from "@/components/ProductCard";
import wheyShake from "@/assets/whey-shake.jpg";
import massGainerShake from "@/assets/mass-gainer-shake.jpg";
import dietShake from "@/assets/diet-shake.jpg";

const products = [
  {
    id: "whey",
    name: "Whey Protein Shake",
    image: wheyShake,
    calories: 350,
    protein: 30,
    price: 120,
  },
  {
    id: "mass",
    name: "Mass Gainer Shake",
    image: massGainerShake,
    calories: 650,
    protein: 45,
    price: 180,
  },
  {
    id: "diet",
    name: "Diet / Low-Cal Shake",
    image: dietShake,
    calories: 180,
    protein: 20,
    price: 100,
  },
];

const Kiosk = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-gradient-dark px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            PROTOLIFT
          </h1>
          <p className="text-muted-foreground text-lg">Smart Gym Nutrition</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Choose Your Shake
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Freshly prepared in 60 seconds
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-8 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Powered by <span className="text-primary font-semibold">Protolift</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Kiosk;
