"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

interface PopoverProps {
  children: ReactNode;

  isOpen: boolean;
  onClose: () => void;
}

function Popover({ children, isOpen, onClose }: PopoverProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className="w-fit h-fit relative flex justify-center transition-all duration-700"
    >
      <div
        hidden={!isOpen}
        className="min-w-fit w-[150px] h-fit absolute transition-all duration-700  z-50 "
      >
        <div className=" bg-white rounded-xl p-3  transition-all duration-700 shadow-[10px_30px_150px_rgba(46,38,92,0.25)] mb-[10px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popover;
