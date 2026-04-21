import { motion, useTransform, type MotionValue } from "framer-motion";
import { useMemo } from "react";
import ad1 from "@/assets/ad-placeholder-1.jpg";
import ad2 from "@/assets/ad-placeholder-2.jpg";
import ad3 from "@/assets/ad-placeholder-3.jpg";
import ad4 from "@/assets/ad-placeholder-4.jpg";
import ad5 from "@/assets/ad-placeholder-5.jpg";
import ad6 from "@/assets/ad-placeholder-6.jpg";

interface AdTemplateWallProps {
  scrollProgress: MotionValue<number>;
}

// Placeholder ad images — replace these paths with real ad creatives later
const adImages = [ad1, ad2, ad3, ad4, ad5, ad6];

const AdCard = ({ src }: { src: string }) => (
  <div
    className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.45)] border border-white/10 shrink-0"
    style={{ width: 160, height: 220 }}
  >
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
      draggable={false}
    />
  </div>
);

const Row = ({
  scrollProgress,
  direction,
  speed,
  yOffset,
  startIndex,
  count = 14,
}: {
  scrollProgress: MotionValue<number>;
  direction: 1 | -1;
  speed: number;
  yOffset: number;
  startIndex: number;
  count?: number;
}) => {
  const items = useMemo(
    () => Array.from({ length: count }, (_, i) => adImages[(startIndex + i) % adImages.length]),
    [startIndex, count]
  );

  const baseX = useTransform(scrollProgress, [0, 1], [0, direction * speed]);

  return (
    <motion.div
      className="absolute left-1/2 flex gap-5 will-change-transform"
      style={{
        x: baseX,
        top: `${yOffset}%`,
        translateX: "-50%",
      }}
    >
      {/* Inner track: continuous idle drift, independent of scroll */}
      <motion.div
        className="flex gap-5"
        animate={{ x: direction * -240 }}
        transition={{
          duration: 30 + (startIndex % 3) * 6,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {items.map((src, i) => (
          <AdCard key={i} src={src} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const AdTemplateWall = ({ scrollProgress }: AdTemplateWallProps) => {
  const wallRotate = useTransform(scrollProgress, [0, 1], [0, -8]);
  const wallScale = useTransform(scrollProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          rotate: wallRotate,
          scale: wallScale,
          transformPerspective: 1400,
          rotateX: 12,
        }}
      >
        <Row scrollProgress={scrollProgress} direction={-1} speed={1200} yOffset={-5} startIndex={0} />
        <Row scrollProgress={scrollProgress} direction={1}  speed={1400} yOffset={18} startIndex={2} />
        <Row scrollProgress={scrollProgress} direction={-1} speed={1100} yOffset={42} startIndex={4} />
        <Row scrollProgress={scrollProgress} direction={1}  speed={1500} yOffset={66} startIndex={1} />
        <Row scrollProgress={scrollProgress} direction={-1} speed={1300} yOffset={88} startIndex={3} />
      </motion.div>

      {/* Radial focus mask — keeps phone the hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 55% at center, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.7) 35%, hsl(var(--background) / 0.4) 60%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
    </div>
  );
};

export default AdTemplateWall;
