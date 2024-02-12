import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "leading-none",
    "flex",
    "gap-2",
    "items-center",
    "justify-center",
    "focus:outline-none",
    "focus-visible:ring-4",
    "transition-all",
    "rounded-lg",
    "ring-red-300",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary",
          "text-white",
          "hover:bg-primary/70",
          "active:bg-primary-700",
          "focus-visible:bg-primary-600",
          "disabled:bg-[#f6f6f6]",
          "disabled:text-[#dddcdc]",
        ],
        outline: [
          "bg-theme-base",
          "text-theme-600",
          "border-2",
          "border-theme-600",
          "hover:bg-theme-100",
          "active:bg-theme-200",
          "disabled:bg-theme-base",
          "disabled:border-theme-200",
          "disabled:text-theme-400",
        ],

        danger: [
          "bg-red-500",
          "text-white",
          "hover:bg-red-600",
          "active:bg-red-700",
          "focus-visible:bg-red-600",
          "disabled:bg-[#f6f6f6]",
          "disabled:text-[#dddcdc]",
        ],
        success: [
          "bg-green-500",
          "text-white",
          "hover:bg-green-600",
          "active:bg-green-700",
          "focus-visible:bg-green-600",
          "disabled:bg-[#f6f6f6]",
          "disabled:text-[#dddcdc]",
        ],
      },
      size: {
        sm: ["text-sm", "py-1.5", "min-h-9", "px-3"],
        md: ["text-sm", "py-2", "min-h-10", "px-5"],
        lg: ["text-md", "py-2.5", "min-h-11", "px-5"],
        xl: ["text-md", "py-3", "min-h-12", "px-6"],
      },
      btnType: {
        button: "",
        icon: ["px-0", "rounded-full"],
      },
    },
    compoundVariants: [
      { btnType: "icon", size: "sm", class: "h-10 w-10" },
      { btnType: "icon", size: "md", class: "h-11 w-11" },
      { btnType: "icon", size: "lg", class: "h-12 w-12" },
      { btnType: "icon", size: "xl", class: "h-[52px] w-[52px]" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      btnType: "button",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  btnType,
  ...props
}) => (
  <button
    className={twMerge(button({ variant, size, btnType, className }))}
    {...props}
  />
);
