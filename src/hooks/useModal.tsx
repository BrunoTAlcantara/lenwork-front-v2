"use client";
import { useState } from "react";

function useVisibilityControl() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  const toggleVisibility = () => {
    setIsOpen((prevState) => !prevState);
  };

  return {
    isOpen,
    onClose,
    toggleVisibility,
    onOpen,
  };
}

export default useVisibilityControl;
