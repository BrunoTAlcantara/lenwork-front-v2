import { Search } from "lucide-react";
import { Input } from "../Input";
import InputRoot from "../Input/InputRoot";
export interface InputSearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function InputSearch({ ...rest }: InputSearchProps) {
  return (
    <div className="flex items-center justify-end">
      <Input.Icon icon={Search} className="text-gray-400 mr-2" />
      <Input.Base {...rest} />
    </div>
  );
}

export default InputSearch;
