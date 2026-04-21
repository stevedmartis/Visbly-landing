import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import StarField from "./StarField";
import screenDashboard from "@/assets/screen-dashboard.jpg";
import screenEditor from "@/assets/screen-editor.jpg";
import screenStudio from "@/assets/screen-studio.jpg";
import screenAudit from "@/assets/screen-audit.jpg";
import screenTrends from "@/assets/screen-trends.jpg";
import screenBrand from "@/assets/screen-brand.jpg";
import screenAnalytics from "@/assets/screen-analytics.jpg";

const screens = [
  screenDashboard,
  screenTrends,
  screenEditor,
  screenStudio,
  screenBrand,
  screenAudit,
  screenAnalytics,
];

const heroSteps = [
  { subtitle: "AI Creative Director", title: "Tu Director Creativo de IA" },
  { subtitle: "Growth Engine", title: "Ángulos de Venta en Segundos" },
  { subtitle: "Smart Ad Editor", title: "Editor Studio en Tiempo Real" },
  { subtitle: "AI Visuals", title: "Fondos de Estudio por IA" },
  { subtitle: "Brand DNA", title: "ADN de Marca Automático" },
  { subtitle: "Marketing Brain", title: "Auditoría Instantánea de URLs" },
  { subtitle: "Analytics", title: "Métricas de Alto Rendimiento" },
];

const N = heroSteps.length;
const stepSize = 1 / N;
const transition = stepSize * 0.22;
const last = N - 1;

type Range = {
  enterStart: number;
  enterEnd: number;
  holdStart: number;
  holdEnd: number;
  exitStart: number;
  exitEnd: number;
};

const ranges: Range[] = heroSteps.map((_, i) => {
  const start = i * stepSize;
  const end = start + stepSize;
  return {
    enterStart: i === 0 ? 0 : start,
    enterEnd: i === 0 ? 0 : start + transition,
    holdStart: i === 0 ? 0 : start + transition,
    holdEnd: i === last ? 1 : end - transition,
    exitStart: i === last ? 1 : end - transition,
    exitEnd: i === last ? 1 : end,
  };
});

// Phone keyframes per step: [xVw, rotateY, rotateX, scale]
const phoneKF: [number, number, number, number][] = [
  [0, 0, 0, 1],
  [8, -8, 2, 0.98],
  [-6, 6, -2, 1.02],
  [0, -12, 4, 0.95],
  [10, 10, 0, 1],
  [-8, -6, -2, 0.98],
  [0, 0, 0, 1.05],
];

interface StepHookResult {
  phoneY: MotionValue<string>;
  phoneOpacity: MotionValue<number>;
  textY: MotionValue<number>;
  textOpacity: MotionValue<number>;
  dotOpacity: MotionValue<number>;
  dotScale: MotionValue<number>;
}

// Hook to compute all transforms for a single step (called consistently in order)
function useStepTransforms(progress: MotionValue<number>, i: number): StepHookResult {
  const r = ranges[i];

  // phone Y (vh) and opacity
  let yIn: number[], yOut: number[], opIn: number[], opOut: number[];
  if (i === 0) {
    yIn = [0, r.exitStart, r.exitEnd, 1];
    yOut = [0, 0, -135, -135];
    opIn = yIn;
    opOut = [1, 1, 0, 0];
  } else if (i === last) {
    yIn = [0, r.enterStart, r.enterEnd, 1];
    yOut = [135, 135, 0, 0];
    opIn = yIn;
    opOut = [0, 0, 1, 1];
  } else {
    yIn = [0, r.enterStart, r.enterEnd, r.exitStart, r.exitEnd, 1];
    yOut = [135, 135, 0, 0, -135, -135];
    opIn = yIn;
    opOut = [0, 0, 1, 1, 0, 0];
  }

  const yVh = useTransform(progress, yIn, yOut);
  const phoneY = useTransform(yVh, (v) => `${v}vh`);
  const phoneOpacity = useTransform(progress, opIn, opOut);

  // text
  let tIn: number[], tYOut: number[], tOpOut: number[];
  if (i === 0) {
    tIn = [0, r.exitStart, r.exitEnd, 1];
    tYOut = [0, 0, -24, -24];
    tOpOut = [1, 1, 0, 0];
  } else if (i === last) {
    tIn = [0, r.enterStart, r.enterEnd, 1];
    tYOut = [24, 24, 0, 0];
    tOpOut = [0, 0, 1, 1];
  } else {
    tIn = [0, r.enterStart, r.enterEnd, r.exitStart, r.exitEnd, 1];
    tYOut = [24, 24, 0, 0, -24, -24];
    tOpOut = [0, 0, 1, 1, 0, 0];
  }
  const textY = useTransform(progress, tIn, tYOut);
  const textOpacity = useTransform(progress, tIn, tOpOut);

  // dot — active during hold
  let dIn: number[], dOpOut: number[], dScOut: number[];
  if (i === 0) {
    dIn = [0, r.exitStart, r.exitEnd, 1];
    dOpOut = [1, 1, 0.3, 0.3];
    dScOut = [1.8, 1.8, 1, 1];
  } else if (i === last) {
    dIn = [0, r.enterStart, r.enterEnd, 1];
    dOpOut = [0.3, 0.3, 1, 1];
    dScOut = [1, 1, 1.8, 1.8];
  } else {
    dIn = [0, r.enterStart, r.enterEnd, r.exitStart, r.exitEnd, 1];
    dOpOut = [0.3, 0.3, 1, 1, 0.3, 0.3];
    dScOut = [1, 1, 1.8, 1.8, 1, 1];
  }
  const dotOpacity = useTransform(progress, dIn, dOpOut);
  const dotScale = useTransform(progress, dIn, dScOut);

  return { phoneY, phoneOpacity, textY, textOpacity, dotOpacity, dotScale };
}

const ImmersiveHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Call hooks in fixed order (Rules of Hooks compliant)
  const s0 = useStepTransforms(scrollYProgress, 0);
  const s1 = useStepTransforms(scrollYProgress, 1);
  const s2 = useStepTransforms(scrollYProgress, 2);
  const s3 = useStepTransforms(scrollYProgress, 3);
  const s4 = useStepTransforms(scrollYProgress, 4);
  const s5 = useStepTransforms(scrollYProgress, 5);
  const s6 = useStepTransforms(scrollYProgress, 6);
  const steps = [s0, s1, s2, s3, s4, s5, s6];

  const scrollIndicatorO = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <div ref={heroRef} className="relative" style={{ height: `${N * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <StarField scrollProgress={scrollYProgress} />

        {/* Phones */}
        {screens.map((src, i) => {
          const st = steps[i];
          const kf = phoneKF[i];
          return (
            <div
              key={i}
              className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                style={{
                  x: `${kf[0]}vw`,
                  y: st.phoneY,
                  opacity: st.phoneOpacity,
                  rotateY: kf[1],
                  rotateX: kf[2],
                  scale: kf[3],
                  transformPerspective: 1200,
                }}
              >
                <div className="absolute -inset-20 bg-primary/15 rounded-full blur-[100px]" />
                <PhoneMockup className="relative z-10 w-[220px] md:w-[260px] lg:w-[280px]">
                  <img
                    src={src}
                    className="w-full h-full object-cover"
                    alt=""
                    loading={i === 0 ? undefined : "lazy"}
                  />
                </PhoneMockup>
              </motion.div>
            </div>
          );
        })}

        {/* Text overlays */}
        <div className="absolute top-[12%] md:top-[15%] left-0 right-0 z-20 text-center px-6">
          {heroSteps.map((step, i) => (
            <motion.div
              key={i}
              className="absolute inset-x-0"
              style={{ opacity: steps[i].textOpacity, y: steps[i].textY }}
            >
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-[0.2em]">
                {step.subtitle}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 font-display leading-tight">
                {step.title}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {heroSteps.map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary"
              style={{ opacity: steps[i].dotOpacity, scale: steps[i].dotScale }}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorO }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <motion.div className="w-5 h-7 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-1 h-1.5 bg-muted-foreground rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveHero;
