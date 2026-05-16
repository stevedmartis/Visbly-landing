import { motion } from "framer-motion";
import AppStoreButtons from "./AppStoreButtons";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/visbly_logo.png" alt="Visbly Logo" className="h-8 w-auto" />
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8">
          <a href="#powers" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Poderes</a>
          <a href="#pricing" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Precios</a>
          <a href="/support" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Soporte</a>
        </div>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
