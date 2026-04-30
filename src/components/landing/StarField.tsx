import { useMemo } from "react";
import { motion, type MotionValue, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface StarFieldProps {
  scrollProgress?: MotionValue<number>;
}

const StarField = ({ scrollProgress }: StarFieldProps) => {
  const isMobile = useIsMobile();
  
  const stars = useMemo(() => {
    const count = isMobile ? 40 : 80;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.6 + 0.1,
    }));
  }, [isMobile]);

  const rotate = scrollProgress
    ? useTransform(scrollProgress, [0, 1], [0, 45])
    : 0;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={{ rotate }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default StarField;

