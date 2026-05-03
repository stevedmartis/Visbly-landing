import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-foreground/5 bg-background relative overflow-hidden">
      {/* Sutil gradiente de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-8">
          
          {/* Columna Branding */}
          <div className="col-span-2 lg:col-span-2">
            <img src="/visbly_logo.png" alt="Visbly Logo" className="h-8 w-auto mb-6 opacity-90" />
            <p className="text-muted-foreground max-w-xs mb-8 text-sm leading-relaxed">
              El primer Director Creativo de IA diseñado para Media Buyers y fundadores que necesitan escalar su estrategia creativa.
            </p>
            <div className="flex gap-4">
              {/* Espacio para redes sociales si las hay */}
              <div className="w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                <span className="text-xs">𝕏</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          {/* Columna Producto */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-widest">Producto</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors"><a href="#">Growth Engine</a></li>
              <li className="hover:text-primary transition-colors"><a href="#">Smart Ad Editor</a></li>
              <li className="hover:text-primary transition-colors"><a href="#">Marketing Brain</a></li>
              <li className="hover:text-primary transition-colors"><a href="#">Integraciones</a></li>
            </ul>
          </div>

          {/* Columna Compañía */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-widest">Compañía</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors"><a href="#">Sobre nosotros</a></li>
              <li className="hover:text-primary transition-colors"><a href="#">Blog</a></li>
              <li className="hover:text-primary transition-colors"><a href="mailto:hola@visblyai.com">Contacto</a></li>
            </ul>
          </div>

          {/* Columna Legal (Crítica para Meta) */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors"><a href="/privacy">Privacidad</a></li>
              <li className="hover:text-primary transition-colors"><a href="/terms">Términos</a></li>
              <li className="hover:text-primary transition-colors"><a href="/delete-data">Eliminar Datos</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-foreground/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Visbly. Todos los derechos reservados. Impulsado por IA para marketers de élite.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-tighter">Hecho con ❤️ en Latam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
