import { cn } from "@/_utils";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type InputType = React.ComponentPropsWithoutRef<"input"> & {
  withErrorMessage?: boolean;
};

const Input = <T extends FieldValues>({
  name,
  control,
  withErrorMessage = false,
  ...props
}: UseControllerProps<T> & InputType) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <>
      <input
        {...field}
        {...props}
        className={cn("border", error && "border-pink")}
      />
      {withErrorMessage && <p>{error?.message}</p>}
    </>
  );
};

export { Input };
