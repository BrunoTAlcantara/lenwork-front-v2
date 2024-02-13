export interface InputProps {
  label: string;
}

const InputLabel = ({ label }: InputProps) => {
  return (
    <span className="text-[#999999] font-bold mb-1 mt-2 text-base">
      {label}
    </span>
  );
};

export default InputLabel;
