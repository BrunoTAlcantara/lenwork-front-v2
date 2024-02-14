import { ElementType, forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: ElementType;
  label?: string;
}

const InputBase = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: Icon, type, error, label, ...props }, ref) => {
    return (
      <div className="flex w-full h-10 gap-1 items-center">
        <input
          type={type}
          className={
            "h-9 border-b-2 w-full  border-[#dbdbdb] bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus:text-[#555555] text-[#efeeed] disabled:cursor-not-allowed disabled:opacity-50 " +
            (error ? " border-b-2 border-red-500" : "")
          }
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
InputBase.displayName = "Input";

export { InputBase };
