import { Dumbbell, Droplet, Zap, Activity, Award, Target } from "lucide-react";

const FloatingBackground = () => {
  const floatingElements = [
    { Icon: Dumbbell, delay: "0s", animation: "animate-float-slow", position: "top-[10%] left-[10%]", size: 60, opacity: 0.15 },
    { Icon: Droplet, delay: "1s", animation: "animate-float-medium", position: "top-[20%] right-[15%]", size: 50, opacity: 0.12 },
    { Icon: Zap, delay: "0.5s", animation: "animate-float-fast", position: "top-[60%] left-[8%]", size: 70, opacity: 0.1 },
    { Icon: Activity, delay: "1.5s", animation: "animate-float-slow", position: "top-[40%] right-[10%]", size: 55, opacity: 0.13 },
    { Icon: Award, delay: "2s", animation: "animate-float-medium", position: "top-[70%] right-[20%]", size: 65, opacity: 0.11 },
    { Icon: Target, delay: "0.8s", animation: "animate-float-fast", position: "top-[85%] left-[15%]", size: 50, opacity: 0.14 },
    { Icon: Dumbbell, delay: "1.2s", animation: "animate-float-medium", position: "top-[30%] left-[85%]", size: 55, opacity: 0.12 },
    { Icon: Droplet, delay: "1.8s", animation: "animate-float-slow", position: "top-[50%] left-[5%]", size: 60, opacity: 0.1 },
    { Icon: Zap, delay: "0.3s", animation: "animate-float-fast", position: "top-[15%] right-[30%]", size: 45, opacity: 0.15 },
    { Icon: Activity, delay: "2.2s", animation: "animate-float-medium", position: "top-[75%] left-[80%]", size: 50, opacity: 0.13 },
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
      <div className="absolute top-[20%] left-[30%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-secondary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default FloatingBackground;
