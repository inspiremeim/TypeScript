import { forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & React.ComponentPropsWithoutRef<"input">;

const CustomInput = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props }: InputProps,
  ref,
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});

export default CustomInput;
