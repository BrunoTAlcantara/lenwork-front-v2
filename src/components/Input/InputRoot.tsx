import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps {
  children: ReactNode;
  className: string;
}

const InputRoot = ({ children, className }: InputProps) => {
  const mergedClasses = twMerge(
    "flex",
    "flex-col",
    "w-full",
    "h-16",
    "mb-10",
    className
  );

  return <div className={mergedClasses}>{children}</div>;
};

export default InputRoot;
