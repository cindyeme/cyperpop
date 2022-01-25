import React from 'react';
import tw from 'twin.macro';

import { AnimatePresence, motion } from 'framer-motion';
/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import useInView from '@owaiswiz/use-in-view';

const StyledDiv = tw.div`bg-white font-display min-h-screen text-secondary-500 md:p-8 lg:p-8 sm:p-4 p-4 overflow-hidden`;
function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ['left', 'right'];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = 'left', offset = 30, children }) {
  const [ref, inView] = useInView(30);

  const x = { target: '0%' };

  if (direction === 'left') x.initial = '0%';
  else x.initial = '0%';

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={{
        x: inView && x.target,
        transition: {
          type: 'spring',
          damping: 19,
          duration: 0.3,
          ease: [0.6, 0.01, -0.05, 0.95],
        },
        transitionEnd: {
          x: inView && 0,
        },
      }}
      transition={{ type: 'spring', damping: 19 }}
      ref={ref}
    >
      {children}
    </motion.section>
  );
}

export default (props) => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);

const wrapper = {
  animate: {
    transition: {
      delayChildern: 0.4,
      staggerChildern: 0.1,
    },
  },
};
const xSlid = {
  initial: {
    x: -500,
    opacity: 1,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 19,
      duration: 0.7,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  exit: {
    opacity: 1,
    x: -500,
    transition: {
      type: 'spring',
      damping: 19,
      duration: 1.6,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const PageMotion = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div layout variants={wrapper} initial="initial" animate="show" exit="exit">
        <motion.div variants={xSlid}>{children}</motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
