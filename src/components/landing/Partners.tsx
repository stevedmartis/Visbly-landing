import { motion } from "framer-motion";

const partners = [
  { name: "Meta Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Google Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
  { name: "RevenueCat", logo: "https://vignette.wikia.nocookie.net/logopedia/images/d/d8/RevenueCat_Logo.png" }, // Fallback to text if broken
  { name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
  { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
];

const Partners = () => {
  return (
    <section className="py-12 border-y border-foreground/5 bg-foreground/[0.01] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.3em] mb-10">
          Potenciado por Tecnología de Clase Mundial
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              {partner.logo.endsWith('.svg') || partner.logo.endsWith('.png') ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                />
              ) : null}
              <span className="text-sm md:text-lg font-bold font-display tracking-tight text-foreground/80 group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
