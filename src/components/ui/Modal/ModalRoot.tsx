import { ReactNode } from "react";
import { motion } from "framer-motion";

import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const modal = cva(
  [
    "leading-none",
    "flex",
    "flex-col",
    "min-w-72",
    "gap-5",
    "bg-white",
    "rounded-xl",
    "shadow",
    "text-black",
    "items-center",
    "justify-center",
    "transition-all",
  ],
  {
    variants: {
      size: {
        sm: ["text-sm", "py-1.5", "w-1/4", "px-3"],
        md: ["text-sm", "w-2/5"],
        lg: ["text-md", "py-2.5", "w-3/4", "px-5"],
        full: ["text-md", "py-3", "w-full", "px-6"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface ModalProps extends VariantProps<typeof modal> {
  children: ReactNode;
  isOpen: boolean;
  toggleVisibility: () => void;
}

export default function ModalRoot({
  isOpen,
  toggleVisibility,
  children,
  size,
}: ModalProps) {
  return (
    <motion.div
      onClick={toggleVisibility}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 flex justify-center backdrop-blur-sm bg-gray-300 items-center 0 bg-opacity-70 transition-opacity ease-in duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(modal({ size }))}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
