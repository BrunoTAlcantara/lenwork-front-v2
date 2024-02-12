import React, { ReactNode } from "react";

type PopoverActionsProps = {
  children: ReactNode;
  onCancel?: () => void;
};

const PopoverActions: React.FC<PopoverActionsProps> = ({ children }) => {
  return (
    <footer className="w-full rounded-b-xl ">
      <div className="container mx-auto flex justify-end items-center gap-3">
        {children}
      </div>
    </footer>
  );
};

export default PopoverActions;
