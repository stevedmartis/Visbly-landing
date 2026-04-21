import { motion, useTransform, type MotionValue } from "framer-motion";
import { useMemo } from "react";

interface AdTemplateWallProps {
  scrollProgress: MotionValue<number>;
}

type Template = {
  bg: string;
  badge?: string;
  headline: string;
  sub?: string;
  align?: "left" | "center";
  textClass?: string;
};

// Placeholder ad templates — vibrant gradients + bold copy
const templates: Template[] = [
  { bg: "linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%)", badge: "NEW", headline: "AI Ads in Seconds", sub: "Powered by Visbly", textClass: "text-white" },
  { bg: "linear-gradient(135deg,#ec4899 0%,#f43f5e 100%)", badge: "50% OFF", headline: "Scale Your Brand", textClass: "text-white" },
  { bg: "linear-gradient(135deg,#0f172a 0%,#1e293b 100%)", headline: "SaaS Growth", sub: "Built for founders", textClass: "text-white", align: "left" },
  { bg: "linear-gradient(135deg,#f59e0b 0%,#ef4444 100%)", badge: "HOT", headline: "Trending Now", textClass: "text-white" },
  { bg: "linear-gradient(135deg,#10b981 0%,#059669 100%)", headline: "+248% ROI", sub: "Proven results", textClass: "text-white" },
  { bg: "linear-gradient(135deg,#fafafa 0%,#e5e7eb 100%)", headline: "Pure Studio", sub: "AI Backgrounds", textClass: "text-slate-900", align: "left" },
  { bg: "linear-gradient(135deg,#7c3aed 0%,#2563eb 100%)", badge: "BETA", headline: "Brand DNA", textClass: "text-white" },
  { bg: "linear-gradient(135deg,#0ea5e9 0%,#06b6d4 100%)", headline: "Launch Faster", sub: "Ship in days", textClass: "text-white" },
  { bg: "linear-gradient(135deg,#1e1b4b 0%,#312e81 100%)", badge: "PRO", headline: "Creative AI", textClass: "text-white", align: "left" },
  { bg: "linear-gradient(135deg,#fb7185 0%,#a855f7 100%)", headline: "Drop Soon", sub: "Limited release", textClass: "text-white" },
  { bg: "linear-gradient(135deg,#fde047 0%,#f97316 100%)", badge: "★ 4.9", headline: "Loved by Teams", textClass: "text-slate-900" },
  { bg: "linear-gradient(135deg,#0f766e 0%,#14b8a6 100%)", headline: "Smart Editor", sub: "Studio grade", textClass: "text-white" },
];

const AdCard = ({ tpl }: { tpl: Template }) => (
  <div
    className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-white/10 flex flex-col justify-between p-4"
    style={{ background: tpl.bg, width: 160, height: 220 }}
  >
    {tpl.badge && (
      <span
        className={`self-start text-[9px] font-bold tracking-widest px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm ${tpl.textClass}`}
      >
        {tpl.badge}
      </span>
    )}
    <div className={`${tpl.align === "left" ? "text-left" : "text-center"} ${tpl.textClass}`}>
      <div className="text-base font-extrabold leading-tight font-display">{tpl.headline}</div>
      {tpl.sub && <div className="text-[10px] opacity-80 mt-1 font-medium">{tpl.sub}</div>}
    </div>
    {/* faux CTA */}
    <div className={`self-stretch h-6 rounded-md bg-white/15 backdrop-blur-sm flex items-center justify-center text-[9px] font-semibold tracking-wide ${tpl.textClass}`}>
      LEARN MORE →
    </div>
  </div>
);

const Row = ({
  scrollProgress,
  direction,
  speed,
  yOffset,
  rotate,
  startIndex,
  count = 14,
}: {
  scrollProgress: MotionValue<number>;
  direction: 1 | -1;
  speed: number;
  yOffset: number;
  rotate: number;
  startIndex: number;
  count?: number;
}) => {
  const items = useMemo(
    () => Array.from({ length: count }, (_, i) => templates[(startIndex + i) % templates.length]),
    [startIndex, count]
  );

  // Each row drifts horizontally with scroll
  const baseX = useTransform(scrollProgress, [0, 1], [0, direction * speed]);
  const x = useTransform(baseX, (v) => `${v}px`);

  return (
    <motion.div
      className="absolute left-1/2 flex gap-5 will-change-transform"
      style={{
        x,
        top: `${yOffset}%`,
        rotate: `${rotate}deg`,
        translateX: "-50%",
      }}
    >
      {items.map((tpl, i) => (
        <AdCard key={i} tpl={tpl} />
      ))}
    </motion.div>
  );
};

const AdTemplateWall = ({ scrollProgress }: AdTemplateWallProps) => {
  // Whole wall rotates slightly + zooms in 3D as user scrolls
  const wallRotate = useTransform(scrollProgress, [0, 1], [0, -8]);
  const wallScale = useTransform(scrollProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 3D perspective container */}
      <motion.div
        className="absolute inset-0"
        style={{
          rotate: wallRotate,
          scale: wallScale,
          transformPerspective: 1400,
          rotateX: 12,
        }}
      >
        <Row scrollProgress={scrollProgress} direction={-1} speed={1200} yOffset={-5} rotate={0} startIndex={0} />
        <Row scrollProgress={scrollProgress} direction={1}  speed={1400} yOffset={18} rotate={0} startIndex={3} />
        <Row scrollProgress={scrollProgress} direction={-1} speed={1100} yOffset={42} rotate={0} startIndex={6} />
        <Row scrollProgress={scrollProgress} direction={1}  speed={1500} yOffset={66} rotate={0} startIndex={9} />
        <Row scrollProgress={scrollProgress} direction={-1} speed={1300} yOffset={88} rotate={0} startIndex={2} />
      </motion.div>

      {/* Radial focus mask — keeps phone the hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 55% at center, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.7) 35%, hsl(var(--background) / 0.4) 60%, transparent 100%)",
        }}
      />
      {/* Edge fades */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
    </div>
  );
};

export default AdTemplateWall;
