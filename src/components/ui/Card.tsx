"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.12)" } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl shadow-lg shadow-black/5 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}