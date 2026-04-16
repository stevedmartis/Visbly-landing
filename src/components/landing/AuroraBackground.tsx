import { motion, type MotionValue, useTransform } from "framer-motion";

interface AuroraBackgroundProps {
  scrollProgress?: MotionValue<number>;
}

const AuroraBackground = ({ scrollProgress }: AuroraBackgroundProps) => {
  const scale1 = scrollProgress ? useTransform(scrollProgress, [0, 0.5, 1], [1, 1.4, 1]) : 1;
  const scale2 = scrollProgress ? useTransform(scrollProgress, [0, 0.5, 1], [1, 1.2, 0.9]) : 1;
  const x1 = scrollProgress ? useTransform(scrollProgress, [0, 0.5, 1], [0, 100, -50]) : 0;
  const y1 = scrollProgress ? useTransform(scrollProgress, [0, 0.5, 1], [0, -80, 50]) : 0;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-30 blur-[140px]"
        style={{
          background: "radial-gradient(circle, hsl(246 100% 50% / 0.6), transparent 70%)",
          animation: "aurora-1 20s ease-in-out infinite",
          scale: scale1,
          x: x1,
          y: y1,
        }}
      />
      <motion.div
        className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, hsl(280 80% 50% / 0.5), transparent 70%)",
          animation: "aurora-2 25s ease-in-out infinite",
          scale: scale2,
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
};

export default AuroraBackground;
