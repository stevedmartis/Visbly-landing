import { useRef } from "react";
import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import PhoneMockup from "./PhoneMockup";
import StarField from "./StarField";
import Navbar from "./Navbar";
import screenDashboard from "@/assets/screen-dashboard.jpg";
import screenEditor from "@/assets/screen-editor.jpg";
import screenStudio from "@/assets/screen-studio.jpg";
import screenAudit from "@/assets/screen-audit.jpg";
import screenTrends from "@/assets/screen-trends.jpg";
import screenBrand from "@/assets/screen-brand.jpg";
import screenAnalytics from "@/assets/screen-analytics.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as Easing },
};

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

// Phone position/perspective per step: [x%, y%, rotateY, rotateX, scale]
const phoneKeyframes = [
  [0, 0, 0, 0, 1],        // center
  [15, -2, -12, 3, 0.95],  // right tilt
  [-10, 3, 8, -2, 1.05],   // left slight
  [0, -5, -20, 5, 0.9],    // dramatic right perspective
  [20, 0, 15, 0, 1],       // right
  [-15, 5, -10, -3, 0.95], // left tilt
  [0, 0, 0, 0, 1.05],      // center big
];

const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Star field rotation
  const starProgress = scrollYProgress;

  // Aurora glow transforms
  const auroraHue = useTransform(scrollYProgress, [0, 0.5, 1], [246, 280, 246]);
  const auroraScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

  // Each step owns a slot of scroll progress. Inside that slot:
  //  - first 20%: phone enters from below (y: 135vh -> 0) + fades in
  //  - middle 60%: phone HELD at center, full opacity
  //  - last 20%: phone exits upward (y: 0 -> -135vh) + fades out
  // First/last steps skip their enter/exit so they stay visible at the edges.
  const stepSize = 1 / heroSteps.length;
  const transition = stepSize * 0.18;
  const last = heroSteps.length - 1;

  const stepRanges = heroSteps.map((_, i) => {
    const start = i * stepSize;
    const end = start + stepSize;
    return {
      start,
      end,
      enterStart: i === 0 ? 0 : start,
      enterEnd: i === 0 ? 0 : start + transition,
      exitStart: i === last ? 1 : end - transition,
      exitEnd: i === last ? 1 : end,
    };
  });

  const phoneTransforms = heroSteps.map((_, i) => {
    const { enterStart, enterEnd, exitStart, exitEnd } = stepRanges[i];
    const kf = phoneKeyframes[i];

    let input: number[], yOut: number[], opOut: number[];
    if (i === 0) {
      input = [0, exitStart, exitEnd, 1];
      yOut = [0, 0, -135, -135];
      opOut = [1, 1, 0, 0];
    } else if (i === last) {
      input = [0, enterStart, enterEnd, 1];
      yOut = [135, 135, 0, 0];
      opOut = [0, 0, 1, 1];
    } else {
      input = [0, enterStart, enterEnd, exitStart, exitEnd, 1];
      yOut = [135, 135, 0, 0, -135, -135];
      opOut = [0, 0, 1, 1, 0, 0];
    }

    return {
      x: `${kf[0]}vw`,
      y: useTransform(scrollYProgress, input, yOut),
      opacity: useTransform(scrollYProgress, input, opOut),
      rotateY: kf[2],
      rotateX: kf[3],
      scale: kf[4],
    };
  });

  const textTransforms = heroSteps.map((_, i) => {
    const { enterStart, enterEnd, exitStart, exitEnd } = stepRanges[i];
    let input: number[], opOut: number[], yOut: number[];
    if (i === 0) {
      input = [0, exitStart, exitEnd, 1];
      opOut = [1, 1, 0, 0];
      yOut = [0, 0, -32, -32];
    } else if (i === last) {
      input = [0, enterStart, enterEnd, 1];
      opOut = [0, 0, 1, 1];
      yOut = [24, 24, 0, 0];
    } else {
      input = [0, enterStart, enterEnd, exitStart, exitEnd, 1];
      opOut = [0, 0, 1, 1, 0, 0];
      yOut = [24, 24, 0, 0, -32, -32];
    }
    return {
      opacity: useTransform(scrollYProgress, input, opOut),
      y: useTransform(scrollYProgress, input, yOut),
    };
  });

  // Scroll indicator fade
  const scrollIndicatorO = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  const agents = [
    { emoji: "🔍", name: "Discovery Agent", subtitle: "Growth Engine", desc: "Escanea tendencias en LinkedIn y Google para encontrar ganchos psicológicos en segundos.", gradient: "from-blue-500/20 to-purple-500/20" },
    { emoji: "🎨", name: "Creative Agent", subtitle: "Visual Engine", desc: "Genera anuncios de alto rendimiento con layouts probados que respetan tu marca.", gradient: "from-purple-500/20 to-pink-500/20" },
    { emoji: "🧠", name: "Audit Agent", subtitle: "Marketing Brain", desc: "Auditorías instantáneas de URLs para detectar fallos y extraer el ADN de marca.", gradient: "from-pink-500/20 to-orange-500/20" },
  ];

  const features = [
    { title: "Growth Engine", subtitle: "The Spark", desc: "Generación masiva de ángulos de venta basados en tendencias reales. No adivinamos; usamos señales del mercado.", icon: "⚡" },
    { title: "Smart Ad Editor", subtitle: "Studio Grade", desc: "Editor de alta fidelidad con manipulación de activos 3D, tipografías y sombras en tiempo real.", icon: "🎨" },
    { title: "Studio Generation", subtitle: "AI Visuals", desc: "Fondos y escenas de producto tipo 'Estudio' generados por IA, basados en el ADN de tu marca.", icon: "📸" },
    { title: "Marketing Brain", subtitle: "The Core", desc: "Ingiere cualquier landing page para entender la psicología de la oferta de forma autónoma.", icon: "🧠" },
  ];

  const metrics = [
    { metric: "Tiempo de Creación", before: "3 - 5 Días", after: "30 Segundos", impact: "99% Faster" },
    { metric: "Costo por Ángulo", before: "$250 - $500", after: "< $1 USD", impact: "80% Reducción" },
    { metric: "Rendimiento (CTR)", before: "Promedio", after: "+24% Avg", impact: "Alto Impacto" },
  ];

  const problems = [
    { icon: "⏱️", stat: "3-5 días", label: "Tiempo promedio", sub: "Por cada iteración creativa" },
    { icon: "💸", stat: "$250-500", label: "Costo por ángulo", sub: "Con agencias o freelancers" },
    { icon: "📉", stat: "10x", label: "Más rápido", sub: "Se agota la creatividad" },
  ];

  return (
    <div className="relative">
      <AuroraBackground scrollProgress={scrollYProgress} />
      <Navbar />

      {/* ═══ IMMERSIVE SCROLL HERO — 7 steps ═══ */}
      <div ref={heroRef} className="relative" style={{ height: "800vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Star field */}
          <StarField scrollProgress={starProgress} />

          {/* Individual phones — each slides up/out, new enters from bottom */}
          {screens.map((src, i) => {
            const pt = phoneTransforms[i];
            return (
              <div key={i} className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <motion.div
                  style={{
                    x: pt.x,
                    y: useTransform(pt.y, (v) => `${v}vh`),
                    opacity: pt.opacity,
                    rotateY: pt.rotateY,
                    rotateX: pt.rotateX,
                    scale: pt.scale,
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

          {/* Text overlays — top area */}
          <div className="absolute top-[12%] md:top-[15%] left-0 right-0 z-20 text-center px-6">
            {heroSteps.map((step, i) => (
              <motion.div
                key={i}
                className="absolute inset-x-0"
                style={{ opacity: textTransforms[i].opacity, y: textTransforms[i].y }}
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

          {/* Step dots indicator */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
            {heroSteps.map((_, i) => {
              const { enterStart, enterEnd, exitStart, exitEnd } = stepRanges[i];
              const dotO = i === 0
                ? useTransform(scrollYProgress, [0, exitStart, exitEnd, 1], [1, 1, 0.25, 0.25])
                : i === heroSteps.length - 1
                  ? useTransform(scrollYProgress, [0, enterStart, enterEnd, 1], [0.25, 0.25, 1, 1])
                  : useTransform(scrollYProgress, [0, enterStart, enterEnd, exitStart, exitEnd, 1], [0.25, 0.25, 1, 1, 0.25, 0.25]);
              const dotScale = i === 0
                ? useTransform(scrollYProgress, [0, exitStart, exitEnd, 1], [1.9, 1.9, 1, 1])
                : i === heroSteps.length - 1
                  ? useTransform(scrollYProgress, [0, enterStart, enterEnd, 1], [1, 1, 1.9, 1.9])
                  : useTransform(scrollYProgress, [0, enterStart, enterEnd, exitStart, exitEnd, 1], [1, 1, 1.9, 1.9, 1, 1]);
              return (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  style={{ opacity: dotO, scale: dotScale }}
                />
              );
            })}
          </div>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity: scrollIndicatorO }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
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

      {/* ═══ PROBLEM ═══ */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">El Problema</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 font-display">
              El Cuello de Botella Creativo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
              La fatiga creativa en Meta y TikTok ocurre 10x más rápido que hace dos años. Mantener el rendimiento exige una rotación constante que hoy es costosa, lenta y humano-dependiente.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm"
              >
                <span className="text-4xl">{item.icon}</span>
                <div className="text-3xl font-bold text-foreground mt-4">{item.stat}</div>
                <div className="text-foreground/80 font-medium mt-2">{item.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AGENTS ═══ */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">La Solución</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 font-display">
              Arquitectura Multi-Agente
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres agentes de IA especializados que trabajan en sincronía para producir creativos de alto rendimiento.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="group relative p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <span className="text-4xl">{agent.emoji}</span>
                  <h3 className="text-xl font-bold text-foreground mt-4">{agent.name}</h3>
                  <span className="text-sm text-primary font-medium">{agent.subtitle}</span>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{agent.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES DETAILED ═══ */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Ecosistema Pro</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 font-display">
              Funcionalidades
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm"
              >
                <span className="text-3xl">{feat.icon}</span>
                <span className="text-primary font-semibold text-xs uppercase tracking-widest ml-3">{feat.subtitle}</span>
                <h3 className="text-2xl font-bold text-foreground mt-3">{feat.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METRICS ═══ */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Impacto</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 font-display">
              Métricas de Transformación
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-foreground/10">
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Métrica</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Antes</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Con Visbly</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-primary">Impacto</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row, i) => (
                    <tr key={i} className="border-b border-foreground/5 last:border-0">
                      <td className="px-6 py-5 font-medium text-foreground">{row.metric}</td>
                      <td className="px-6 py-5 text-muted-foreground line-through opacity-60">{row.before}</td>
                      <td className="px-6 py-5 text-foreground font-semibold">{row.after}</td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold whitespace-nowrap">
                          {row.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[60px] blur-[100px]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 font-display leading-tight">
              Deja de Quemar Presupuesto.
              <br />
              <span className="text-primary">Empieza a Escalar.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Únete a los Media Buyers que ya están generando creativos de alto rendimiento en segundos.
            </p>
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_hsl(246_100%_50%/0.5)] hover:shadow-[0_0_60px_hsl(246_100%_50%/0.6)]">
              Comenzar Ahora — Es Gratis
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 px-6 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-foreground font-bold text-xl font-display">Visbly</span>
          <span className="text-muted-foreground text-sm">© 2026 Visbly. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
