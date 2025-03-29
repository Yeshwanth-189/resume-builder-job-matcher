// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AnimatedDivider = () => (
  <motion.hr
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    style={{
      border: 'none',
      borderTop: '1px solid rgb(165, 165, 165)',
      margin: '8px 0',
    }}
  />
);

export default AnimatedDivider;
