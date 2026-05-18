import { motion } from "framer-motion";
import { trackLead } from "@/lib/meta-pixel";

const AppStoreButtons = ({ className = "" }: { className?: string }) => {
  const handleDownload = () => {
    trackLead();
  };

  return (
    <div className={`flex flex-nowrap items-center gap-2 sm:gap-4 ${className}`}>
      <motion.a
        href="#"
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-10 sm:h-12 md:h-14 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          alt="Download on the App Store"
          className="h-full w-auto"
        />
      </motion.a>

      <motion.a
        href="https://play.google.com/store/apps/details?id=cl.freeily.visbly"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-10 sm:h-12 md:h-14 transition-all"
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
