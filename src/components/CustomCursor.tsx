"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi"; // Northeast-pointing arrow

interface CustomCursorProps {
  isHovered: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isHovered }) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isMobile, setIsMobile] = useState(false);

  const springConfig = { damping: 20, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if mobile/tablet
    const checkIfMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [mouseX, mouseY, isMobile]);

  useEffect(() => {
    if (isHovered && !isMobile) {
      document.body.classList.add('cursor-none');
    } else {
      document.body.classList.remove('cursor-none');
    }
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, [isHovered, isMobile]);

  if (isMobile || !isHovered) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-16 h-16 rounded-full bg-white pointer-events-none z-[9999] backdrop-blur-sm flex items-center justify-center"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: "-50%",
        y: "-50%",
        transition: "opacity 0.2s ease",
      }}
    >
      <FiArrowUpRight className="text-black text-2xl" />
    </motion.div>
  );
};

export default CustomCursor;