"use client";
import { ReactNode } from "react";

interface PopoverContentProps {
  children: ReactNode;
}

function PopoverContent({ children }: PopoverContentProps) {
  return <div className="h-full p-4 mb-[10px]">{children}</div>;
}

export default PopoverContent;
