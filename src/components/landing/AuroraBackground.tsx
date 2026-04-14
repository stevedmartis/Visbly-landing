const AuroraBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-background" />
    <div
      className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-30 blur-[140px]"
      style={{
        background: "radial-gradient(circle, hsl(246 100% 50% / 0.6), transparent 70%)",
        animation: "aurora-1 20s ease-in-out infinite",
      }}
    />
    <div
      className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full opacity-20 blur-[130px]"
      style={{
        background: "radial-gradient(circle, hsl(280 80% 50% / 0.5), transparent 70%)",
        animation: "aurora-2 25s ease-in-out infinite",
      }}
    />
    <div
      className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
      style={{
        background: "radial-gradient(circle, hsl(200 90% 50% / 0.4), transparent 70%)",
        animation: "aurora-3 22s ease-in-out infinite",
      }}
    />
  </div>
);

export default AuroraBackground;
