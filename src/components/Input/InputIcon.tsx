import { ElementType } from "react";

export interface IconProps {
  icon: ElementType;
  className?: string;
}

const InputIcon = ({ icon: Icon, className }: IconProps) => {
  return <Icon className={className} />;
};

export default InputIcon;
