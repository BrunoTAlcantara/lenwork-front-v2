import React from "react";
import { XCircle } from "lucide-react";

type ModalHeaderProps = {
  title?: string;
  subTitle?: string;
  onClose?: () => void;
};

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  subTitle,
  onClose,
}) => {
  return (
    <header className="w-full p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          {title && <h1 className="text-xl font-bold">{title}</h1>}
          {subTitle && <h2 className="text-xs text-gray-600">{subTitle}</h2>}
        </div>
        <div>
          {onClose && (
            <button onClick={() => onClose()}>
              <XCircle className="text-gray-700 hover:text-red-500" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default ModalHeader;
