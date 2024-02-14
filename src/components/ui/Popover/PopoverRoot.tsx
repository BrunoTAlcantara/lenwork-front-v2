"use client";
import { ReactNode, useEffect, useRef } from "react";

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
    <div ref={wrapperRef} className="w-fit h-fit relative flex justify-center ">
      <div
        hidden={!isOpen}
        className="min-w-fit w-[150px] h-fit absolute mt-14 mr-20  z-50 "
      >
        <div className=" bg-white rounded-xl p-3  shadow-sm border ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popover;
