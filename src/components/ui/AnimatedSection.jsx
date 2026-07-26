import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useAnimations';
import './AnimatedSection.css';

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  fadeLeft: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimatedSection({
  children, animation = 'fadeUp', delay = 0, duration = 0.6,
  className = '', as = 'div', stagger = false, ...props
}) {
  const [ref, isInView] = useInView();
  const Tag = motion[as] || motion.div;

  const containerVariants = stagger ? {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
  } : {};

  return (
    <Tag
      ref={ref}
      className={`animated-section ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger ? containerVariants : variants[animation]}
      transition={stagger ? {} : { duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function AnimatedItem({ children, animation = 'fadeUp', className = '' }) {
  return (
    <motion.div className={className} variants={variants[animation]}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}
