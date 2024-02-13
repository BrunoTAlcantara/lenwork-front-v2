import { ReactNode } from "react";

export interface InputProps {
  children: ReactNode;
}

const InputRoot = ({ children }: InputProps) => {
  return <div className="flex  flex-col w-full h-16 mb-10">{children}</div>;
};

export default InputRoot;
