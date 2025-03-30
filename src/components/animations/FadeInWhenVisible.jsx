import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInWhenVisible = ({ children, delay = 0, direction = "up" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: direction === "scale" ? 0.8 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible; 