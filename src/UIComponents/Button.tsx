import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  className: string;
  children?: React.ReactNode;
  onClick: () => void;
  index: number;
}

const Button = ({ type, className, children, onClick, index }: ButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default Button;
