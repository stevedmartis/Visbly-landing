import { motion } from "framer-motion";

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
      <button className="px-5 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg font-medium text-sm hover:bg-primary/20 transition-colors backdrop-blur-sm">
        Acceder
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
