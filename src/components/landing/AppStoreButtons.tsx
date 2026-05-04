import { motion } from "framer-motion";

const AppStoreButtons = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-12 md:h-14 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          alt="Download on the App Store"
          className="h-full w-auto"
        />
      </motion.a>

      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-12 md:h-14 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          className="h-full w-auto"
        />
      </motion.a>
    </div>
  );
};

export default AppStoreButtons;
