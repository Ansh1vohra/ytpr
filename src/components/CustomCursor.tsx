"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CustomCursorProps {
  isHovered: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isHovered }) => {
  // Track hover state for scaling and opacity
  // Motion values for smooth cursor movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation config
  const springConfig = { damping: 20, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Inner glowing circle only */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-50 shadow-lg"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.9 : 1,
          boxShadow: isHovered
            ? "0 0 15px 5px rgba(255, 255, 255, 0.6)"
            : "0 0 8px rgba(255, 255, 255, 0.3)",
          transition: "opacity 0.3s ease, box-shadow 0.3s ease",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
};

export default CustomCursor;
