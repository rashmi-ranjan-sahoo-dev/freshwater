/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
          animate={{ x: position.x - 6, y: position.y - 6 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
         className="pointer-events-none fixed top-0 left-0 z-[9999]"
          style={{
        transform: `translate3d(${position.x - 6}px, ${
          position.y - 6
        }px, 0)`,
      }}
    >
      <div className="w-4 h-4 bg-gray-500 rounded-full opacity-80"></div>
    </motion.div>
  );
};

export default CustomCursor;
