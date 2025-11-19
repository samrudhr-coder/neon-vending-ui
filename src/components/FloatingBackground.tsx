const FloatingBackground = () => {
  const floatingShapes = [
    // Circles
    { type: "circle", delay: "0s", animation: "animate-float-slow", position: "top-[8%] left-[10%]", size: 80, color: "bg-primary/10" },
    { type: "circle", delay: "1s", animation: "animate-float-medium", position: "top-[15%] left-[70%]", size: 60, color: "bg-secondary/8" },
    { type: "circle", delay: "2s", animation: "animate-float-fast", position: "top-[35%] left-[85%]", size: 100, color: "bg-primary/12" },
    { type: "circle", delay: "0.5s", animation: "animate-float-slow", position: "top-[60%] left-[15%]", size: 70, color: "bg-secondary/10" },
    { type: "circle", delay: "1.5s", animation: "animate-float-medium", position: "top-[75%] left-[60%]", size: 90, color: "bg-primary/8" },
    
    // Squares
    { type: "square", delay: "0.8s", animation: "animate-float-fast", position: "top-[20%] left-[40%]", size: 50, color: "bg-primary/15" },
    { type: "square", delay: "1.8s", animation: "animate-float-slow", position: "top-[50%] left-[25%]", size: 65, color: "bg-secondary/12" },
    { type: "square", delay: "2.2s", animation: "animate-float-medium", position: "top-[80%] left-[80%]", size: 55, color: "bg-primary/10" },
    
    // Gradient blobs
    { type: "blob", delay: "1.2s", animation: "animate-float-slow", position: "top-[25%] left-[5%]", size: 120, color: "bg-gradient-to-br from-primary/10 to-transparent" },
    { type: "blob", delay: "0.3s", animation: "animate-float-medium", position: "top-[45%] left-[90%]", size: 110, color: "bg-gradient-to-tl from-secondary/10 to-transparent" },
    { type: "blob", delay: "1.7s", animation: "animate-float-fast", position: "top-[70%] left-[35%]", size: 130, color: "bg-gradient-to-br from-primary/8 to-secondary/5" },
    
    // Rings
    { type: "ring", delay: "0.6s", animation: "animate-float-medium", position: "top-[12%] left-[55%]", size: 75, color: "border-primary/15" },
    { type: "ring", delay: "1.9s", animation: "animate-float-slow", position: "top-[40%] left-[50%]", size: 85, color: "border-secondary/12" },
    { type: "ring", delay: "2.5s", animation: "animate-float-fast", position: "top-[85%] left-[10%]", size: 70, color: "border-primary/10" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingShapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.position} ${shape.animation}`}
          style={{
            animationDelay: shape.delay,
            width: shape.size,
            height: shape.size,
          }}
        >
          {shape.type === "circle" && (
            <div className={`w-full h-full rounded-full ${shape.color} blur-sm`} />
          )}
          {shape.type === "square" && (
            <div className={`w-full h-full ${shape.color} blur-sm rotate-45`} />
          )}
          {shape.type === "blob" && (
            <div className={`w-full h-full rounded-[40%] ${shape.color} blur-xl`} />
          )}
          {shape.type === "ring" && (
            <div className={`w-full h-full rounded-full border-4 ${shape.color}`} />
          )}
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
