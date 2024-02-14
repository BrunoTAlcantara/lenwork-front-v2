import React, { ReactNode } from "react";

type ModalContentProps = {
  children: ReactNode;
};

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <div className="h-full p-4 overflow-auto W max-h-[70vh] ">{children}</div>
  );
};

export default ModalContent;
