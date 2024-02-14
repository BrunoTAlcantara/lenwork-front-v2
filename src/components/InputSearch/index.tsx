import { Search } from "lucide-react";
import { Input } from "../ui/Input";

export interface InputSearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function InputSearch({ ...rest }: InputSearchProps) {
  return (
    <div className="flex items-center max-w-80 justify-end">
      <Input.Icon icon={Search} className="text-gray-400 mr-2" />
      <Input.Base {...rest} />
    </div>
  );
}

export default InputSearch;
