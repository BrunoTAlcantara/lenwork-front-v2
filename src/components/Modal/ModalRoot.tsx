"use client";
import { ReactNode, useEffect } from "react";

import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { XCircle } from "lucide-react";

const modal = cva(
  [
    "leading-none",
    "flex",
    "flex-col",
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
      btnType: {
        button: "",
        icon: ["px-0", "rounded-full"],
      },
    },
    defaultVariants: {
      size: "md",
      btnType: "button",
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
  btnType,
  size,
}: ModalProps) {
  return (
    <div
      onClick={toggleVisibility}
      className={`
    fixed inset-0 flex justify-center items-center transition-all ease-in duration-300
    ${isOpen ? "visible bg-gray-500 bg-opacity-70 " : "invisible"}
  `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(modal({ size, btnType }))}
      >
        {children}
      </div>
    </div>
  );
}
