import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovered(true);
        setCursorType("pointer");
      } else if (target.closest("[data-cursor='project']")) {
        setIsHovered(true);
        setCursorType("project");
      } else {
        setIsHovered(false);
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1000] hidden md:block">
      {/* Main Glowing Circle */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-brand-cyan/50 mix-blend-screen flex items-center justify-center"
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered
            ? cursorType === "project"
              ? "rgba(124, 58, 237, 0.15)"
              : "rgba(0, 212, 255, 0.1)"
            : "rgba(0, 212, 255, 0)",
          borderColor: cursorType === "project" ? "#7C3AED" : "#00D4FF",
        }}
      >
        <motion.div
          className="w-1 h-1 bg-brand-cyan rounded-full"
          animate={{
            scale: isHovered ? 0 : 1,
          }}
        />
      </motion.div>

      {/* Trailing Glow */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-brand-cyan/5 blur-3xl"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
        }}
      />
    </div>
  );
}
