import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Enciende tu tracción inicial",
      price: "4.990",
      originalPrice: "7.990",
      period: "/ mes",
      promo: "Primer mes a precio especial",
      features: [
        "3 Growth Sprints diarios",
        "1 Persona de IA (Tú)",
        "Análisis de 1 Sitio Web / ADN",
        "Canal: Meta (FB/IG)",
        "Soporte por Comunidad",
      ],
      cta: "Empezar Ahora",
      highlight: false,
    },
    {
      name: "Scale",
      subtitle: "Para agencias y equipos en crecimiento",
      price: "7.990",
      period: "/ mes",
      features: [
        "10 Growth Sprints diarios",
        "3 Personas de IA (Equipo)",
        "Análisis de 5 Sitios Web / ADN",
        "Canales: Meta + LinkedIn",
        "Soporte Prioritario",
      ],
      cta: "Escalar Ahora",
      highlight: true,
    },
    {
      name: "Infinity",
      subtitle: "Dominio total para grandes compañías",
      price: "9.990",
      period: "/ mes",
      features: [
        "Sprints Ilimitados",
        "Personas de IA Ilimitadas",
        "ADN de Marca Ilimitado",
        "Todos los canales (TikTok inc.)",
        "Account Manager dedicado",
      ],
      cta: "Contactar Ventas",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-widest"
          >
            Inversión
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 font-display"
          >
            Planes que escalan contigo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Elige el motor que mejor se adapte a tu ritmo de crecimiento.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[32px] border ${
                plan.highlight
                  ? "border-primary/50 bg-primary/[0.03] shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                  : "border-foreground/10 bg-foreground/[0.02]"
              } backdrop-blur-xl flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
              </div>

              <div className="mb-8 flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">${plan.originalPrice}</span>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-tighter bg-primary/10 px-2 py-0.5 rounded">
                      Promo Lanzamiento
                    </span>
                  </div>
                )}
                {plan.promo && <p className="text-[10px] text-primary/80 mt-2 font-medium">{plan.promo}</p>}
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-primary/20">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                    : "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
