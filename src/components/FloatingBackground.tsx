import { Dumbbell, Droplet, Zap, Activity, Award, Target, TrendingUp, Heart, Flame, Sparkles, Circle } from "lucide-react";

const FloatingBackground = () => {
  const floatingElements = [
    // Top section
    { Icon: Dumbbell, delay: "0s", animation: "animate-float-slow", position: "top-[5%] left-[5%]", size: 60, opacity: 0.15 },
    { Icon: Droplet, delay: "1s", animation: "animate-float-medium", position: "top-[8%] left-[25%]", size: 50, opacity: 0.12 },
    { Icon: Zap, delay: "0.5s", animation: "animate-float-fast", position: "top-[12%] left-[45%]", size: 70, opacity: 0.1 },
    { Icon: Activity, delay: "1.5s", animation: "animate-float-slow", position: "top-[6%] left-[65%]", size: 55, opacity: 0.13 },
    { Icon: Award, delay: "2s", animation: "animate-float-medium", position: "top-[10%] left-[85%]", size: 65, opacity: 0.11 },
    { Icon: Target, delay: "0.8s", animation: "animate-float-fast", position: "top-[15%] left-[95%]", size: 50, opacity: 0.14 },
    
    // Upper middle section
    { Icon: TrendingUp, delay: "1.2s", animation: "animate-float-medium", position: "top-[25%] left-[3%]", size: 55, opacity: 0.12 },
    { Icon: Heart, delay: "1.8s", animation: "animate-float-slow", position: "top-[28%] left-[20%]", size: 60, opacity: 0.1 },
    { Icon: Flame, delay: "0.3s", animation: "animate-float-fast", position: "top-[22%] left-[38%]", size: 45, opacity: 0.15 },
    { Icon: Sparkles, delay: "2.2s", animation: "animate-float-medium", position: "top-[30%] left-[58%]", size: 50, opacity: 0.13 },
    { Icon: Circle, delay: "0.7s", animation: "animate-float-slow", position: "top-[26%] left-[78%]", size: 55, opacity: 0.11 },
    { Icon: Dumbbell, delay: "1.5s", animation: "animate-float-fast", position: "top-[32%] left-[92%]", size: 60, opacity: 0.14 },
    
    // Middle section
    { Icon: Droplet, delay: "1.1s", animation: "animate-float-medium", position: "top-[45%] left-[8%]", size: 65, opacity: 0.12 },
    { Icon: Zap, delay: "0.9s", animation: "animate-float-slow", position: "top-[48%] left-[28%]", size: 50, opacity: 0.15 },
    { Icon: Activity, delay: "2.1s", animation: "animate-float-fast", position: "top-[42%] left-[48%]", size: 55, opacity: 0.1 },
    { Icon: Award, delay: "0.4s", animation: "animate-float-medium", position: "top-[50%] left-[68%]", size: 70, opacity: 0.13 },
    { Icon: Target, delay: "1.7s", animation: "animate-float-slow", position: "top-[46%] left-[88%]", size: 60, opacity: 0.11 },
    
    // Lower middle section
    { Icon: TrendingUp, delay: "1.3s", animation: "animate-float-fast", position: "top-[62%] left-[5%]", size: 55, opacity: 0.14 },
    { Icon: Heart, delay: "0.6s", animation: "animate-float-medium", position: "top-[65%] left-[22%]", size: 50, opacity: 0.12 },
    { Icon: Flame, delay: "2.3s", animation: "animate-float-slow", position: "top-[68%] left-[42%]", size: 65, opacity: 0.1 },
    { Icon: Sparkles, delay: "1.4s", animation: "animate-float-fast", position: "top-[64%] left-[62%]", size: 60, opacity: 0.15 },
    { Icon: Circle, delay: "0.2s", animation: "animate-float-medium", position: "top-[70%] left-[82%]", size: 55, opacity: 0.13 },
    
    // Bottom section
    { Icon: Dumbbell, delay: "1.9s", animation: "animate-float-slow", position: "top-[82%] left-[10%]", size: 70, opacity: 0.11 },
    { Icon: Droplet, delay: "0.1s", animation: "animate-float-fast", position: "top-[85%] left-[30%]", size: 50, opacity: 0.14 },
    { Icon: Zap, delay: "1.6s", animation: "animate-float-medium", position: "top-[88%] left-[50%]", size: 55, opacity: 0.12 },
    { Icon: Activity, delay: "2.4s", animation: "animate-float-slow", position: "top-[90%] left-[70%]", size: 60, opacity: 0.1 },
    { Icon: Award, delay: "0.5s", animation: "animate-float-fast", position: "top-[86%] left-[90%]", size: 65, opacity: 0.15 },
    
    // Additional scattered elements
    { Icon: Target, delay: "1.8s", animation: "animate-float-medium", position: "top-[18%] left-[12%]", size: 45, opacity: 0.13 },
    { Icon: TrendingUp, delay: "0.9s", animation: "animate-float-slow", position: "top-[35%] left-[15%]", size: 50, opacity: 0.11 },
    { Icon: Heart, delay: "2.2s", animation: "animate-float-fast", position: "top-[55%] left-[18%]", size: 55, opacity: 0.14 },
    { Icon: Flame, delay: "0.7s", animation: "animate-float-medium", position: "top-[75%] left-[25%]", size: 60, opacity: 0.12 },
    { Icon: Sparkles, delay: "1.5s", animation: "animate-float-slow", position: "top-[38%] left-[35%]", size: 50, opacity: 0.1 },
    { Icon: Circle, delay: "2.5s", animation: "animate-float-fast", position: "top-[58%] left-[52%]", size: 55, opacity: 0.15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.animation}`}
          style={{
            animationDelay: element.delay,
          }}
        >
          <element.Icon
            size={element.size}
            className="text-primary"
            style={{ opacity: element.opacity }}
          />
        </div>
      ))}
      
      {/* Glow effects */}
      <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-[50%] right-[30%] w-80 h-80 bg-secondary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[15%] left-[40%] w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[30%] right-[10%] w-64 h-64 bg-secondary/5 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-[40%] left-[10%] w-88 h-88 bg-primary/4 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

export default FloatingBackground;
