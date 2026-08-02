"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

export function IntroLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("ookah-intro-seen");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!seen && !reduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client capability check (sessionStorage) gates the intro animation
      setShow(true);
      sessionStorage.setItem("ookah-intro-seen", "1");
      const timer = setTimeout(() => setShow(false), 1400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-1/3 h-px w-24 origin-center bg-gradient-to-r from-transparent via-violet-bright to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
