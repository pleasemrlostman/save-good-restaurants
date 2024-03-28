import { cn } from "@/_utils";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type InputType = React.ComponentPropsWithoutRef<"input">;

const VanilaCheckbox = ({
  ...props
}: React.ComponentPropsWithoutRef<"input">) => {
  return <input {...props} type="checkbox" />;
};

const Checkbox = <T extends FieldValues>({
  name,
  control,
  ...props
}: UseControllerProps<T> & InputType) => {
  const {
    field,
    // fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="flex items-center justify-center">
      <input
        {...field}
        {...props}
        id={field.name}
        value={field.value}
        type="checkbox"
        className={cn(
          "appearance-none w-4 h-4 border",
          field.value ? "bg-blue" : "bg-gray",
        )}

        // className="hidden"
      />
    </div>
  );
};

export { VanilaCheckbox, Checkbox };
