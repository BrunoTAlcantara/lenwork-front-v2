"use client";
import { ReactNode } from "react";

interface PopoverTriggerProps {
  children: ReactNode;
  toggleVisibility: () => void;
}

function PopoverTrigger({ children, toggleVisibility }: PopoverTriggerProps) {
  return <div onClick={toggleVisibility}>{children}</div>;
}

export default PopoverTrigger;
