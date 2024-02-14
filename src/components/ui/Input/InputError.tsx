export interface InputProps {
  error?: string;
}

const InputError = ({ error }: InputProps) => {
  return <span className="text-red-500 mt-1 text-sm">{error}</span>;
};

export default InputError;
