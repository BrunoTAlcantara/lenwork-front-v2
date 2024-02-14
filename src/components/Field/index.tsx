import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/Input";

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const Field: React.FC<InputProps> = ({ label, name, register, errors }) => {
  return (
    <Input.Root>
      <Input.Label label={label} />
      <Input.Base {...register(name)} error={!!errors[name]} />
      {errors[name] && (
        <Input.Error error={errors?.[name]?.message?.toString()} />
      )}
    </Input.Root>
  );
};

export default Field;
