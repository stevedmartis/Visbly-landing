import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, ChevronDown } from "lucide-react";
import { trackLead } from "@/lib/meta-pixel";
import AuroraBackground from "./AuroraBackground";
import ImmersiveHero from "./ImmersiveHero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Pricing from "./Pricing";
import AppStoreButtons from "./AppStoreButtons";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import screen1 from "@/assets/screen1.webp";
import screen2 from "@/assets/screen2.webp";
import screen3 from "@/assets/screen3.webp";
import screen4 from "@/assets/screen4.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as Easing },
};

const LandingPage = () => {
  const isMobile = useIsMobile();
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const storeLink = useMemo(() => {
    if (typeof window === "undefined") return "https://play.google.com/store/apps/details?id=cl.freeily.visbly";
    const userAgent = window.navigator.userAgent || window.navigator.vendor;
    const isApple = /iPad|iPhone|iPod|Macintosh|Mac OS X/.test(userAgent);
    return isApple
      ? "https://apps.apple.com/us/app/visbly/id6761484670"
      : "https://play.google.com/store/apps/details?id=cl.freeily.visbly";
  }, []);

  const agents = [
    { emoji: "🧠", name: "Audit Agent", subtitle: "Brand Strategy", desc: "Analiza cualquier URL y redes para extraer y clonar el ADN de tu marca, asegurando consistencia total en cada anuncio.", gradient: "from-blue-500/20 to-purple-500/20" },
    { emoji: "📝", name: "UGC Script Planner", subtitle: "Weekly Playbook", desc: "Planifica una semana completa de videos y redacta los guiones bajo arquetipos no lineales de alta retención como la Doble Caída.", gradient: "from-purple-500/20 to-pink-500/20" },
    { emoji: "🎨", name: "Creative Agent", subtitle: "Visual Studio", desc: "Diseña creativos de alto impacto con estética premium y layouts validados para maximizar tu CTR.", gradient: "from-pink-500/20 to-orange-500/20" },
    { emoji: "🚀", name: "Meta Orchestrator", subtitle: "Direct Execution", desc: "Tus agentes lanzan y escalan campañas a Meta directamente desde Visbly. Automatización de extremo a extremo.", gradient: "from-orange-500/20 to-red-500/20" },
  ];

  const metrics = [
    { metric: "Tiempo de Creación", before: "3 - 5 Días", after: "30 Segundos", impact: "99% Faster" },
    { metric: "Costo por Ángulo", before: "$250 - $500", after: "< $1 USD", impact: "80% Reducción" },
    { metric: "Rendimiento (CTR)", before: "Promedio", after: "+24% Avg", impact: "Alto Impacto" },
  ];

  const contrasts = [
    {
      icon: "⏱️",
      title: "Velocidad",
      old: "3-5 días por ángulo",
      visbly: "30 segundos",
      label: "Iteración Instantánea"
    },
    {
      icon: "💸",
      title: "Costos",
      old: "$250 - $500 USD",
      visbly: "< $1 USD",
      label: "Escalabilidad Total"
    },
    {
      icon: "🧠",
      title: "Creatividad",
      old: "Humano-dependiente",
      visbly: "IA Multi-Agente",
      label: "Ángulos Infinitos"
    },
  ];

  const socialProof = [
    { value: "2,400+", label: "Ángulos generados" },
    { value: "98%", label: "Satisfacción" },
    { value: "30s", label: "Tiempo promedio" },
    { value: "4.8★", label: "App Store Rating" },
  ];

  const faqs = [
    {
      q: "¿En qué se diferencia Visbly de Meta Advantage+?",
      a: "Advantage+ optimiza la entrega de tus anuncios dentro de Meta, pero no genera creativos ni analiza tu marca. Visbly va más allá: identifica ángulos de venta, clona tu ADN de marca, genera anuncios premium y los lanza directamente — todo automatizado por 4 agentes de IA especializados. Son complementarios: usa Visbly para crear y Advantage+ para entregar.",
    },
    {
      q: "¿Necesito experiencia en Meta Ads para usar Visbly?",
      a: "No. Visbly está diseñado tanto para media buyers experimentados como para emprendedores que quieren resultados sin complejidad. Los agentes guían cada paso y automatizan las decisiones técnicas.",
    },
    {
      q: "¿Qué pasa después de los 7 días de prueba gratis?",
      a: "Al terminar tu trial, puedes elegir el plan que mejor se adapte a tu negocio. No se te cobrará nada automáticamente — tú decides si continuar. Sin compromisos, sin letra chica.",
    },
    {
      q: "¿Visbly reemplaza a un diseñador o agencia?",
      a: "Visbly no reemplaza la creatividad humana, la potencia. Automatiza las tareas repetitivas (generación de variantes, análisis de rendimiento, lanzamiento de campañas) para que te enfoques en estrategia y storytelling. Muchos agencies usan Visbly para multiplicar su capacidad de producción.",
    },
    {
      q: "¿Puedo conectar más de una cuenta publicitaria?",
      a: "Sí. El plan Starter permite 1 cuenta, Scale hasta 3, e Infinity cuentas ilimitadas. Ideal para agencias o negocios con múltiples marcas.",
    },
    {
      q: "¿Cómo funciona la clonación de ADN de marca?",
      a: "Visbly analiza tus fuentes digitales — website, LinkedIn, Instagram, Notion, GitHub — para entender tu voz, estética y posicionamiento. Luego, los agentes generan anuncios que suenan y se ven exactamente como tu marca, con 100% de fidelidad.",
    },
    {
      q: "¿Cómo funciona el Planificador UGC Semanal y qué es el arquetipo de Doble Caída?",
      a: "El Planificador UGC de Visbly genera un playbook de contenido de 7 días adaptando tu ADN de marca a guiones estructurados para retención (Atracción, Confianza, Conversión). El arquetipo de 'Doble Caída' es una fórmula basada en el efecto Zeigarnik que utiliza una interrupción de patrón en los primeros 3 segundos y una crisis inesperada en el segundo 15 para elevar drásticamente el tiempo de reproducción de tus videos.",
    },
    {
      q: "¿Es compatible con mi modelo de negocio (E-commerce, SaaS, Servicios)?",
      a: "Totalmente. Visbly está optimizado de forma nativa para múltiples modelos. Si tienes un E-commerce, el motor prioriza layouts de producto de alto impacto visual y badges de confianza. Si vendes software (SaaS) o servicios profesionales, la IA estructura anuncios basados en objeción-solución, comparativas Old vs New y KPIs corporativos para captar leads. Los agentes adaptan la estrategia y la estética al ADN de tu marca.",
    },
  ];

  const handleCtaClick = () => {
    trackLead();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={pageRef} className="relative">
      <AuroraBackground scrollProgress={scrollYProgress} />
      <Navbar />

      <ImmersiveHero />

      {/* ═══ SOCIAL PROOF ═══ */}
      <section className="py-8 px-6 relative border-y border-foreground/5 bg-foreground/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {socialProof.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-primary font-display">{item.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTRAST / PROBLEM ═══ */}
      <section className="pt-16 pb-6 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">El Desafío</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              El Cuello de Botella Creativo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Mantener el rendimiento de tus campañas exige una rotación constante de anuncios. Ya sea que tengas un <strong className="font-semibold text-foreground">E-commerce</strong> escalando ventas de producto, un <strong className="font-semibold text-foreground">SaaS</strong> captando leads o una firma de <strong className="font-semibold text-foreground">servicios profesionales</strong>, Visbly contrata a tu propio equipo de agentes de IA especializados que automatizan tu estrategia, diseño de creativos y ejecución en Meta Ads 24/7 — sin el costo de una agencia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contrasts.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] ${isMobile ? '' : 'backdrop-blur-sm'} overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl">{item.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-6">{item.title}</h3>

                <div className="space-y-6">
                  <div className="opacity-50">
                    <span className="text-xs uppercase tracking-wider font-semibold block mb-1">Método Tradicional</span>
                    <div className="text-lg line-through text-muted-foreground decoration-primary/50">{item.old}</div>
                  </div>

                  <div className="relative">
                    <span className="text-xs uppercase tracking-wider font-semibold text-secondary block mb-1">Con Visbly</span>
                    <div className="text-2xl font-bold text-foreground">{item.visbly}</div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-foreground/5 text-sm font-medium text-secondary/80 tracking-wide uppercase">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POWERS SUMMARY ═══ */}
      <section id="powers" className="pt-16 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">La Solución</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Tus Agentes con Superpoderes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuatro agentes de IA especializados que trabajan en sincronía para automatizar tu marketing de extremo a extremo.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`group relative p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] ${isMobile ? '' : 'backdrop-blur-sm'} hover:border-primary/30 transition-all duration-500`}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <span className="text-4xl">{agent.emoji}</span>
                  <h3 className="text-xl font-bold text-foreground mt-4">{agent.name}</h3>
                  <span className="text-sm text-secondary font-medium">{agent.subtitle}</span>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{agent.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STEP 1: AUDIT AGENT FEATURE SECTION ═══ */}
      <section className="py-20 px-6 relative overflow-hidden border-t border-foreground/5 bg-foreground/[0.01]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square max-w-[800px] bg-gradient-to-tr from-secondary/10 to-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Column 1: Visual Phone Mockup (Left on Desktop) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Glow behind device */}
                <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[60px] opacity-50" />

                {/* iPhone Pro Frame simulation */}
                <div className="relative p-[9px] bg-gradient-to-b from-[#2b2b2d] via-[#1c1c1e] to-[#0c0c0d] rounded-[2.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-black/40 w-[240px] sm:w-[260px]">
                  <div className="absolute inset-[1px] rounded-[2.7rem] border border-white/5 pointer-events-none z-30" />

                  {/* Screen Content */}
                  <div className="relative z-10 rounded-[2.3rem] overflow-hidden aspect-[9/19.5] bg-[#050505] border-[3px] border-[#08080a]">
                    <img
                      src={screen1}
                      alt="Audit Agent App Screen"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Top Island */}
                    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[34%] h-[14px] bg-black rounded-full z-40 border border-white/5" />

                    {/* Bottom Line */}
                    <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[36%] h-[3px] bg-white/20 rounded-full z-40" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 2: Info & Pitch (Right on Desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
              <motion.span
                {...fadeInUp}
                className="text-secondary font-semibold text-sm uppercase tracking-widest"
              >
                Paso 1: Audit Agent
              </motion.span>
              <motion.h2
                {...fadeInUp}
                className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 font-display leading-tight"
              >
                Clona tu ADN de Marca
                <br />
                <span className="text-primary">Con Fidelidad del 100%</span>
              </motion.h2>
              <motion.p
                {...fadeInUp}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Visbly escanea tus fuentes digitales para entender tu negocio en profundidad, sin importar tu modelo. Ya sea que tengas una tienda online (<strong className="font-semibold text-foreground">E-commerce</strong>), una plataforma tecnológica (<strong className="font-semibold text-foreground">SaaS</strong>) o una firma de <strong className="font-semibold text-foreground">servicios/consultoría</strong>, analizamos tu web, LinkedIn o Instagram para extraer automáticamente tu tono de voz, propuesta de valor, colores y arquetipos de comunicación al instante.
              </motion.p>

              {/* Bullet Points */}
              <div className="space-y-4 text-left">
                <motion.div {...fadeInUp} className="flex gap-3">
                  <span className="text-primary font-bold text-xl">🧠</span>
                  <div>
                    <h4 className="font-bold text-foreground">Extracción Inteligente</h4>
                    <p className="text-sm text-muted-foreground mt-1">Conecta tu web o redes y deja que nuestros agentes extraigan el ADN de tu negocio de forma inmediata.</p>
                  </div>
                </motion.div>
                <motion.div {...fadeInUp} className="flex gap-3">
                  <span className="text-primary font-bold text-xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-foreground">Consistencia Total</h4>
                    <p className="text-sm text-muted-foreground mt-1">Garantiza que cada guión de video, anuncio o copy generado hable con la voz real de tu marca en cada canal.</p>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STEP 2: UGC PLANNER FEATURE SECTION ═══ */}
      <section className="py-20 px-6 relative overflow-hidden border-t border-foreground/5 bg-foreground/[0.01]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square max-w-[800px] bg-gradient-to-tr from-primary/10 to-secondary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Column 1: Info & Pitch */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              <motion.span
                {...fadeInUp}
                className="text-secondary font-semibold text-sm uppercase tracking-widest"
              >
                Paso 2: UGC Script Planner
              </motion.span>
              <motion.h2
                {...fadeInUp}
                className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 font-display leading-tight"
              >
                Planifica tu Playbook UGC
                <br />
                <span className="text-primary">Completo en Segundos</span>
              </motion.h2>
              <motion.p
                {...fadeInUp}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Los anuncios exitosos no son casualidad; siguen una estructura psicológica. Visbly diseña un calendario editorial de 7 días adaptando dinámicamente tu ADN de marca en guiones listos para grabar, organizados por etapas de embudo para romper la ceguera publicitaria.
              </motion.p>

              {/* Archetypes grid list */}
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <motion.div
                  {...fadeInUp}
                  className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 text-red-500 font-bold text-sm">🪤</span>
                    <h3 className="font-bold text-foreground">Doble Caída (Zeigarnik)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Estructura no lineal de alta retención. Inicia con un pattern interrupt físico de alto impacto y genera un giro/crisis inesperado en el segundo 15 para mantener al espectador pegado a la pantalla.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 font-bold text-sm">🧲</span>
                    <h3 className="font-bold text-foreground">Atracción Viral</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Diseñado específicamente para audiencias frías. Utiliza anti-hooks disruptivos que cuestionan mitos comunes del sector para detener el scroll de forma inmediata.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 text-green-500 font-bold text-sm">🛡️</span>
                    <h3 className="font-bold text-foreground">Generación de Confianza</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Historias de vulnerabilidad del fundador o casos reales. Genera conexión y credibilidad sincera antes de empujar la venta directa.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 font-bold text-sm">⚡</span>
                    <h3 className="font-bold text-foreground">Conversión & Cierre</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enfoque en los beneficios y transformación definitiva, respaldado por sellos de autoridad y testimonios reales con un llamado a la acción claro y urgente.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Column 2: Visual Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Glow behind device */}
                <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[60px] opacity-50" />

                {/* iPhone Pro Frame simulation */}
                <div className="relative p-[9px] bg-gradient-to-b from-[#2b2b2d] via-[#1c1c1e] to-[#0c0c0d] rounded-[2.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-black/40 w-[240px] sm:w-[260px]">
                  <div className="absolute inset-[1px] rounded-[2.7rem] border border-white/5 pointer-events-none z-30" />

                  {/* Screen Content */}
                  <div className="relative z-10 rounded-[2.3rem] overflow-hidden aspect-[9/19.5] bg-[#050505] border-[3px] border-[#08080a]">
                    <img
                      src={screen4}
                      alt="UGC Script Planner App Screen"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Top Island */}
                    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[34%] h-[14px] bg-black rounded-full z-40 border border-white/5" />

                    {/* Bottom Line */}
                    <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[36%] h-[3px] bg-white/20 rounded-full z-40" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STEP 3: CREATIVE STUDIO FEATURE SECTION ═══ */}
      <section className="py-20 px-6 relative overflow-hidden border-t border-foreground/5 bg-foreground/[0.01]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square max-w-[800px] bg-gradient-to-tr from-secondary/10 to-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Column 1: Visual Phone Mockup (Left on Desktop) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Glow behind device */}
                <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[60px] opacity-50" />

                {/* iPhone Pro Frame simulation */}
                <div className="relative p-[9px] bg-gradient-to-b from-[#2b2b2d] via-[#1c1c1e] to-[#0c0c0d] rounded-[2.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-black/40 w-[240px] sm:w-[260px]">
                  <div className="absolute inset-[1px] rounded-[2.7rem] border border-white/5 pointer-events-none z-30" />

                  {/* Screen Content */}
                  <div className="relative z-10 rounded-[2.3rem] overflow-hidden aspect-[9/19.5] bg-[#050505] border-[3px] border-[#08080a]">
                    <img
                      src={screen2}
                      alt="Creative Agent App Screen"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Top Island */}
                    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[34%] h-[14px] bg-black rounded-full z-40 border border-white/5" />

                    {/* Bottom Line */}
                    <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[36%] h-[3px] bg-white/20 rounded-full z-40" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 2: Info & Pitch (Right on Desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
              <motion.span
                {...fadeInUp}
                className="text-secondary font-semibold text-sm uppercase tracking-widest"
              >
                Paso 3: Creative Agent
              </motion.span>
              <motion.h2
                {...fadeInUp}
                className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 font-display leading-tight"
              >
                Creativos de Élite
                <br />
                <span className="text-primary">Diseñados para Convertir</span>
              </motion.h2>
              <motion.p
                {...fadeInUp}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Visbly transforma automáticamente tus ángulos de venta en creativos visuales premium. Nuestro Creative Agent utiliza layouts de alto impacto con contrastes de color calculados para maximizar tu CTR en Meta Ads, respetando al 100% tus fuentes y colores corporativos.
              </motion.p>

              {/* Bullet Points */}
              <div className="space-y-4 text-left">
                <motion.div {...fadeInUp} className="flex gap-3">
                  <span className="text-primary font-bold text-xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-foreground">Variantes Instantáneas</h4>
                    <p className="text-sm text-muted-foreground mt-1">Genera múltiples versiones visuales a partir de un solo guión para evitar la fatiga creativa y optimizar tus pruebas A/B.</p>
                  </div>
                </motion.div>
                <motion.div {...fadeInUp} className="flex gap-3">
                  <span className="text-primary font-bold text-xl">🎨</span>
                  <div>
                    <h4 className="font-bold text-foreground">Fidelidad Estética Pro</h4>
                    <p className="text-sm text-muted-foreground mt-1">Nada de plantillas genéricas. Los agentes aplican tus directrices visuales, logotipos y tipografía de manera estricta.</p>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STEP 4: META ORCHESTRATOR FEATURE SECTION ═══ */}
      <section className="py-20 px-6 relative overflow-hidden border-t border-foreground/5 bg-foreground/[0.01]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square max-w-[800px] bg-gradient-to-tr from-primary/10 to-secondary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Column 1: Info & Pitch */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              <motion.span
                {...fadeInUp}
                className="text-secondary font-semibold text-sm uppercase tracking-widest"
              >
                Paso 4: Meta Orchestrator
              </motion.span>
              <motion.h2
                {...fadeInUp}
                className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 font-display leading-tight"
              >
                Pauta en Piloto Automático
                <br />
                <span className="text-primary">Lanza y Escala sin Esfuerzo</span>
              </motion.h2>
              <motion.p
                {...fadeInUp}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Tu equipo de agentes no solo piensa y diseña; ejecuta directamente. Conecta tu cuenta publicitaria de Facebook Ads en segundos y deja que Meta Orchestrator cree las campañas, configure los conjuntos de anuncios y asigne los presupuestos de forma óptima.
              </motion.p>

              {/* Bullet Points */}
              <div className="space-y-4 text-left">
                <motion.div {...fadeInUp} className="flex gap-3">
                  <span className="text-primary font-bold text-xl">🚀</span>
                  <div>
                    <h4 className="font-bold text-foreground">Lanzamiento Directo en 1 Clic</h4>
                    <p className="text-sm text-muted-foreground mt-1">Exporta tus anuncios y copies finales directamente al Administrador de Anuncios de Meta sin salir de Visbly.</p>
                  </div>
                </motion.div>
                <motion.div {...fadeInUp} className="flex gap-3">
                  <span className="text-primary font-bold text-xl">📈</span>
                  <div>
                    <h4 className="font-bold text-foreground">Optimización de Presupuesto</h4>
                    <p className="text-sm text-muted-foreground mt-1">Monitorea el rendimiento 24/7 y redistribuye los fondos hacia los anuncios ganadores para maximizar el ROAS.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Column 2: Visual Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Glow behind device */}
                <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[60px] opacity-50" />

                {/* iPhone Pro Frame simulation */}
                <div className="relative p-[9px] bg-gradient-to-b from-[#2b2b2d] via-[#1c1c1e] to-[#0c0c0d] rounded-[2.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-black/40 w-[240px] sm:w-[260px]">
                  <div className="absolute inset-[1px] rounded-[2.7rem] border border-white/5 pointer-events-none z-30" />

                  {/* Screen Content */}
                  <div className="relative z-10 rounded-[2.3rem] overflow-hidden aspect-[9/19.5] bg-[#050505] border-[3px] border-[#08080a]">
                    <img
                      src={screen3}
                      alt="Meta Orchestrator App Screen"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Top Island */}
                    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[34%] h-[14px] bg-black rounded-full z-40 border border-white/5" />

                    {/* Bottom Line */}
                    <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[36%] h-[3px] bg-white/20 rounded-full z-40" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══ METRICS ═══ */}
      <section className="py-12 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Impacto</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Métricas de Transformación
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`rounded-3xl border border-foreground/10 bg-foreground/[0.02] ${isMobile ? '' : 'backdrop-blur-sm'} overflow-hidden`}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-foreground/10">
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Métrica</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Antes</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Con Visbly</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-secondary">Impacto</th>
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

      {/* ═══ NOSOTROS ═══ */}
      <section id="about" className="py-20 px-6 relative overflow-hidden border-t border-foreground/5 bg-foreground/[0.01]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square max-w-[800px] bg-gradient-to-tr from-primary/10 to-secondary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Quiénes Somos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Somos un equipo apasionado de media buyers, diseñadores e ingenieros de IA. Creamos Visbly para democratizar el marketing de performance de élite, eliminando la fricción operativa de la producción creativa para que marcas de todo el mundo puedan escalar de forma rentable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
          >
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-foreground/[0.02] border border-foreground/10 backdrop-blur-sm">
              <span className="text-sm font-semibold text-muted-foreground mr-2">Síguenos en redes:</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/visbly.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:border-primary/50 transition-colors group"
                  title="Instagram"
                >
                  <img src="/ig.webp" alt="Instagram" className="w-4 h-4 object-contain opacity-75 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://tiktok.com/@visbly.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:border-primary/50 transition-colors group"
                  title="TikTok"
                >
                  <img src="/tiktok.webp" alt="TikTok" className="w-4 h-4 object-contain opacity-75 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/company/visbly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:border-primary/50 transition-colors group"
                  title="LinkedIn"
                >
                  <img src="/linkedin.webp" alt="LinkedIn" className="w-4 h-4 object-contain opacity-75 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <Pricing />

      {/* ═══ PARTNERS / TECH STACK ═══ */}
      <Partners />

      {/* ═══ TESTIMONIALS ═══ */}
      <Testimonials />

      {/* ═══ FAQ ═══ */}
      <section className="py-16 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Todo lo que necesitas saber antes de empezar.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className={`absolute inset-0 bg-primary/5 rounded-[60px] ${isMobile ? 'blur-[40px]' : 'blur-[100px]'}`} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-display leading-tight">
              Deja de Quemar Presupuesto.
              <br />
              <span className="text-primary">Empieza a Escalar.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
              Únete a los Media Buyers que ya están rompiendo el cuello de botella creativo con Visbly.
            </p>
            <p className="text-sm text-secondary/80 font-medium mb-10">
              7 días gratis · Cancela cuando quieras
            </p>
            <div className="relative inline-flex mb-10 group">
              {/* Glow behind button */}
              <div className="absolute -inset-4 bg-primary/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Drawing SVG border */}
              <svg className="absolute -inset-[1.2px] w-[calc(100%+2.4px)] h-[calc(100%+2.4px)] pointer-events-none rounded-[14px] z-10">
                <rect
                  x="0.6"
                  y="0.6"
                  width="calc(100% - 1.2px)"
                  height="calc(100% - 1.2px)"
                  rx="14"
                  fill="transparent"
                  stroke="url(#neon-grad)"
                  strokeWidth="1.2"
                  pathLength="100"
                  className="cta-border-rect"
                  style={{
                    transform: 'scaleX(-1)',
                    transformOrigin: 'center',
                  }}
                />
                <defs>
                  <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Shimmer sweep overlay */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-20"
              >
                <div
                  className="absolute inset-0 w-[50%] h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    animation: 'shimmer-sweep 4s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Button content */}
              <a
                href={storeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="relative z-10 inline-flex items-center gap-3 px-10 py-4 bg-[#0a0c14] text-white rounded-xl font-semibold text-lg transition-all duration-300 group-hover:bg-[#0f1120] overflow-hidden"
              >
                {/* Glowing gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 via-[#818CF8]/25 to-[#ec4899]/20 opacity-0 pointer-events-none cta-bg-glow" />

                <span className="relative z-10 flex items-center gap-3">
                  Prueba Visbly Gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Disponible en</span>
              <AppStoreButtons className="justify-center scale-90 md:scale-100" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};

export default LandingPage;
