import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Plus } from "lucide-react";

const inventoryItems = [
  { name: "Whey Protein Powder", remaining: 4500, capacity: 5000, unit: "g", lowThreshold: 1000 },
  { name: "Milk", remaining: 8500, capacity: 10000, unit: "ml", lowThreshold: 2000 },
  { name: "Banana", remaining: 15, capacity: 30, unit: "pcs", lowThreshold: 5 },
  { name: "Strawberry", remaining: 12, capacity: 20, unit: "pcs", lowThreshold: 5 },
  { name: "Chocolate Syrup", remaining: 800, capacity: 2000, unit: "ml", lowThreshold: 500 },
  { name: "Vanilla Syrup", remaining: 1200, capacity: 2000, unit: "ml", lowThreshold: 500 },
  { name: "Oats", remaining: 300, capacity: 3000, unit: "g", lowThreshold: 500 },
  { name: "Peanut Butter", remaining: 200, capacity: 1000, unit: "g", lowThreshold: 200 },
];

const Inventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Inventory</h1>
          <p className="text-muted-foreground">Manage stock levels and ingredients</p>
        </div>
        <Button variant="neon" size="lg">
          <Plus className="h-5 w-5 mr-2" />
          Add Ingredient
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {inventoryItems.map((item) => {
          const percentage = (item.remaining / item.capacity) * 100;
          const isLow = item.remaining <= item.lowThreshold;

          return (
            <Card
              key={item.name}
              className={`bg-card border-2 p-6 ${
                isLow ? "border-destructive/50" : "border-border"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.remaining} / {item.capacity} {item.unit}
                  </p>
                </div>
                {isLow && (
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm font-semibold">Low Stock</span>
                  </div>
                )}
              </div>

              <Progress
                value={percentage}
                className="mb-4"
              />

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{percentage.toFixed(0)}%</span>
                <Button variant="outline" size="sm">
                  Refill
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Inventory;
