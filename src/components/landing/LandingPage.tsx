import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import PhoneMockup from "./PhoneMockup";
import Navbar from "./Navbar";
import screenDashboard from "@/assets/screen-dashboard.jpg";
import screenEditor from "@/assets/screen-editor.jpg";
import screenStudio from "@/assets/screen-studio.jpg";
import screenAudit from "@/assets/screen-audit.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const LandingPage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end end"],
  });

  // Phone transforms for features section
  const phoneX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 80, 0, -80, 0]);
  const phoneRotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -15, 0, 15, 0]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87, 1], [0.95, 1, 1, 0.88, 0.88, 1.05, 1.05, 1, 1]);

  // Screen opacities
  const s1O = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.25], [1, 1, 1, 0]);
  const s2O = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const s3O = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const s4O = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 1]);

  // Text section transforms
  const t1O = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.25], [0, 1, 1, 0]);
  const t1Y = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.25], [30, 0, 0, -30]);
  const t2O = useTransform(scrollYProgress, [0.22, 0.3, 0.43, 0.5], [0, 1, 1, 0]);
  const t2Y = useTransform(scrollYProgress, [0.22, 0.3, 0.43, 0.5], [30, 0, 0, -30]);
  const t3O = useTransform(scrollYProgress, [0.47, 0.55, 0.68, 0.75], [0, 1, 1, 0]);
  const t3Y = useTransform(scrollYProgress, [0.47, 0.55, 0.68, 0.75], [30, 0, 0, -30]);
  const t4O = useTransform(scrollYProgress, [0.72, 0.8, 0.93, 1], [0, 1, 1, 1]);
  const t4Y = useTransform(scrollYProgress, [0.72, 0.8, 0.93, 1], [30, 0, 0, 0]);

  // Secondary phones
  const phone2O = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const phone3O = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);

  const features = [
    { title: "Growth Engine", subtitle: "The Spark", desc: "Generación masiva de ángulos de venta basados en tendencias reales. No adivinamos; usamos señales del mercado.", opacity: t1O, y: t1Y },
    { title: "Smart Ad Editor", subtitle: "Studio Grade", desc: "Editor de alta fidelidad con manipulación de activos 3D, tipografías y sombras en tiempo real.", opacity: t2O, y: t2Y },
    { title: "Studio Generation", subtitle: "AI Visuals", desc: "Fondos y escenas de producto tipo 'Estudio' generados por IA, basados en el ADN de tu marca.", opacity: t3O, y: t3Y },
    { title: "Marketing Brain", subtitle: "The Core", desc: "Ingiere cualquier landing page para entender la psicología de la oferta de forma autónoma.", opacity: t4O, y: t4Y },
  ];

  const agents = [
    { emoji: "🔍", name: "Discovery Agent", subtitle: "Growth Engine", desc: "Escanea tendencias en LinkedIn y Google para encontrar ganchos psicológicos en segundos.", gradient: "from-blue-500/20 to-purple-500/20" },
    { emoji: "🎨", name: "Creative Agent", subtitle: "Visual Engine", desc: "Genera anuncios de alto rendimiento con layouts probados que respetan tu marca.", gradient: "from-purple-500/20 to-pink-500/20" },
    { emoji: "🧠", name: "Audit Agent", subtitle: "Marketing Brain", desc: "Auditorías instantáneas de URLs para detectar fallos y extraer el ADN de marca.", gradient: "from-pink-500/20 to-orange-500/20" },
  ];

  const metrics = [
    { metric: "Tiempo de Creación", before: "3 - 5 Días", after: "30 Segundos", impact: "99% Faster" },
    { metric: "Costo por Ángulo", before: "$250 - $500", after: "< $1 USD", impact: "80% Reducción" },
    { metric: "Rendimiento (CTR)", before: "Promedio", after: "+24% Avg", impact: "Alto Impacto" },
  ];

  const problems = [
    { icon: "⏱️", stat: "3-5 días", label: "Tiempo promedio de creación", sub: "Por cada iteración creativa" },
    { icon: "💸", stat: "$250-500", label: "Costo por ángulo", sub: "Con agencias o freelancers" },
    { icon: "📉", stat: "10x", label: "Más rápido", sub: "Se agota la creatividad" },
  ];

  return (
    <div className="relative">
      <AuroraBackground />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">AI-Powered Creative Engine</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6 font-display leading-[1.1]">
              Tu Director Creativo{" "}
              <span className="text-primary">de IA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Transforma una URL en ángulos de venta y anuncios Pro en segundos. Sin agencias. Sin esperas.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_hsl(246_100%_50%/0.4)]">
                Empezar Gratis
              </button>
              <button className="px-8 py-3.5 border border-foreground/20 text-foreground rounded-xl font-semibold text-lg hover:bg-foreground/5 transition-all">
                Ver Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative" style={{ animation: "float 6s ease-in-out infinite" }}>
              <div className="absolute -inset-12 bg-primary/20 rounded-full blur-[80px]" />
              <PhoneMockup className="relative z-10">
                <img src={screenDashboard} className="w-full h-full object-cover" alt="Visbly Dashboard" />
              </PhoneMockup>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-muted-foreground rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

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

      {/* ═══ SOLUTION / AGENTS ═══ */}
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

      {/* ═══ FEATURES SHOWCASE — scroll-driven ═══ */}
      <div ref={featuresRef} className="h-[500vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-center relative">
            {/* Text sections — left side */}
            <div className="absolute left-6 md:left-12 lg:left-20 max-w-sm z-20">
              {features.map((section, i) => (
                <motion.div key={i} className="absolute" style={{ opacity: section.opacity, y: section.y }}>
                  <span className="text-primary font-semibold text-sm uppercase tracking-widest">{section.subtitle}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-display">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{section.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Main phone — right side */}
            <motion.div
              className="ml-auto mr-0 md:mr-16 relative"
              style={{
                x: phoneX,
                rotateY: phoneRotateY,
                scale: phoneScale,
                transformPerspective: 1200,
              }}
            >
              <div className="absolute -inset-16 bg-primary/10 rounded-full blur-[100px]" />
              <PhoneMockup className="relative z-10 w-[240px] md:w-[280px]">
                <div className="relative w-full h-full">
                  <motion.img src={screenDashboard} style={{ opacity: s1O }} className="absolute inset-0 w-full h-full object-cover" alt="" />
                  <motion.img src={screenEditor} style={{ opacity: s2O }} className="absolute inset-0 w-full h-full object-cover" alt="" loading="lazy" />
                  <motion.img src={screenStudio} style={{ opacity: s3O }} className="absolute inset-0 w-full h-full object-cover" alt="" loading="lazy" />
                  <motion.img src={screenAudit} style={{ opacity: s4O }} className="absolute inset-0 w-full h-full object-cover" alt="" loading="lazy" />
                </div>
              </PhoneMockup>
            </motion.div>

            {/* Secondary phones (appear during Studio section) */}
            <motion.div
              className="absolute right-[10%] top-[12%] hidden lg:block"
              style={{ opacity: phone2O, rotateY: -25, rotateZ: 5, scale: 0.65, transformPerspective: 1200 }}
            >
              <PhoneMockup className="w-[200px]">
                <img src={screenStudio} className="w-full h-full object-cover" alt="" loading="lazy" />
              </PhoneMockup>
            </motion.div>

            <motion.div
              className="absolute left-[50%] bottom-[8%] hidden lg:block"
              style={{ opacity: phone3O, rotateY: 20, rotateZ: -5, scale: 0.6, transformPerspective: 1200 }}
            >
              <PhoneMockup className="w-[180px]">
                <img src={screenEditor} className="w-full h-full object-cover" alt="" loading="lazy" />
              </PhoneMockup>
            </motion.div>
          </div>
        </div>
      </div>

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
