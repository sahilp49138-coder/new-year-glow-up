import { motion } from "framer-motion";

const NewYearGlowBadge = () => {
  return (
    <motion.div
      className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold/10 via-gold-light/20 to-gold/10 backdrop-blur-sm border border-gold/30"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {/* Left sparkle */}
      <motion.span 
        className="text-gold-light text-lg"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ✦
      </motion.span>
      
      {/* Text with subtle glow */}
      <span className="text-sm font-semibold text-foreground tracking-wide">
        New Year 2026 Special Offers
      </span>
      
      {/* Right sparkle */}
      <motion.span 
        className="text-gold-light text-lg"
        animate={{ 
          rotate: [360, 180, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        ✦
      </motion.span>

      {/* Glow effect behind */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-50"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 90% 50% / 0.2), transparent 70%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default NewYearGlowBadge;