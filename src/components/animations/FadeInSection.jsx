import { Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, direction = 'up', delay = 0, threshold = 0.2 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold
  });

  const getAnimation = () => {
    const animations = {
      up: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
      },
      down: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-50px)',
      },
      left: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
      },
      right: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(50px)',
      },
      scale: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.8)',
      }
    };
    return animations[direction];
  };

  return (
    <Box
      ref={ref}
      sx={{
        ...getAnimation(),
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        visibility: inView ? 'visible' : 'hidden'
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInSection; 