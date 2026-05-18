import { motion } from "framer-motion";

const Ecosystem = () => {
  const sources = [
    { name: "LinkedIn", icon: "/linkedin.webp", type: "Social DNA" },
    { name: "Facebook", icon: "https://cdn.simpleicons.org/facebook", type: "Ad Context" },
    { name: "Instagram", icon: "/ig.webp", type: "Visual DNA" },
    { name: "Notion", icon: "https://cdn.simpleicons.org/notion/white", type: "Docs & Strategy" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", type: "Technical DNA" },
    { name: "Websites", icon: "https://www.vectorlogo.zone/logos/google_chrome/google_chrome-icon.svg", type: "Full Domain Scan" },
  ];

  return (
    <section className="pt-12 pb-24 px-6 relative border-y border-foreground/5 bg-foreground/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-widest"
            >
              Conectividad Total
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display"
            >
              Inyecta tu ADN desde cualquier fuente
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Visbly no solo genera anuncios; entiende tu negocio. Analizamos tus fuentes digitales para que la IA escriba, diseñe y piense exactamente como tú.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-foreground/10">
                <span className="text-primary font-bold text-xl block">100%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Fidelidad de Marca</span>
              </div>
              <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-foreground/10">
                <span className="text-primary font-bold text-xl block">Multi-Canal</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Output en Segundos</span>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-6 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />

            {sources.map((source, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group flex flex-col items-center p-6 rounded-3xl border border-foreground/10 bg-black/40 backdrop-blur-xl"
              >
                <div className="h-12 w-12 flex items-center justify-center mb-4">
                  <img
                    src={source.icon}
                    alt={source.name}
                    className="h-full w-auto object-contain transition-all duration-500"
                  />
                </div>
                <span className="text-xs font-bold text-foreground text-center">{source.name}</span>
                <span className="text-[10px] text-primary/60 text-center mt-1 uppercase tracking-tighter font-medium">{source.type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
