import { motion } from 'framer-motion';

export const variants = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const MotionStep = ({ children }) => (
  <motion.div
    initial="exit"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

MotionStep.displayName = 'MotionStep';
