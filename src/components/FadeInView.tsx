"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInViewProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
};

const getInitialMotion = (direction: FadeInViewProps["direction"]) => {
  if (direction === "left") {
    return { opacity: 0, x: -32 };
  }

  if (direction === "right") {
    return { opacity: 0, x: 32 };
  }

  return { opacity: 0, y: 32 };
};

const FadeInView = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInViewProps) => {
  return (
    <motion.div
      initial={getInitialMotion(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
