"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = { stiffness: 500, damping: 40, mass: 0.4 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  useEffect(() => {
    const canHover = window.matchMedia(
      "(pointer: fine) and (hover: hover)"
    ).matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!canHover || reduceMotion) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client capability check (matchMedia) gates the custom cursor
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setActive(!!target.closest("a, button, [data-cursor-interactive]"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-screen"
      style={{
        x: sx,
        y: sy,
        opacity: visible ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ scale: active ? 2.4 : 1 }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      <div className="h-3 w-3 rounded-full bg-violet-bright shadow-[0_0_22px_7px_rgba(168,85,247,0.6)]" />
    </motion.div>
  );
}
