import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Header from 'components/headers/light.js';
import Footer from 'components/footers/MiniCenteredFooter';

import tw from 'twin.macro';

export const Main = tw.div`bg-white font-display text-secondary-500  `;

const xSlid = {
  initial: {
    x: 0,
    opacity: 1,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  exit: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const PageMotion = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div layout  initial="initial" animate="show" exit="exit">
        <motion.div variants={xSlid}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
