import React, { ReactNode } from "react";

type ModalActionsProps = {
  children: ReactNode;
  onCancel?: () => void;
};

const ModalActions: React.FC<ModalActionsProps> = ({ children }) => {
  return (
    <footer className="w-full p-4 rounded-b-xl  bg-gray-50">
      <div className="container mx-auto flex justify-end items-center gap-3">
        {children}
      </div>
    </footer>
  );
};

export default ModalActions;
