import { motion } from "framer-motion";
import { motion as motionConfig } from "../../config/motion";

export default function PageTransition({
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: motionConfig.duration.normal,
        ease: motionConfig.easing,
      }}
    >
      {children}
    </motion.div>
  );
}