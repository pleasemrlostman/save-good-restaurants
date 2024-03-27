import { useEffect } from "react";
import api from "@/api";
import { Input } from "@/components/form/Input";
import { FieldErrors, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  RegisterSchemaType,
  registerSchema,
} from "@/zod/user-register/userRegisterScheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/_utils";

function App() {
  const test = async () => {
    const res = await api("/api/jobs");
    return res;
  };

  useEffect(() => {
    test();
  }, []);

  const methods = useForm<RegisterSchemaType>({
    defaultValues: {
      id: "",
      password: "",
      passwordCheck: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    data;
  };
  const onError = (err: FieldErrors<RegisterSchemaType>) => {
    err;
  };

  return (
    <>
      <form
        className="flex flex-col gap-2"
        onSubmit={methods.handleSubmit(onSubmit, onError)}
      >
        <Input
          type="text"
          name="id"
          control={methods.control}
          withErrorMessage
        />
        <Input
          type="text"
          name="password"
          control={methods.control}
          withErrorMessage
        />
        <Input
          type="text"
          name="passwordCheck"
          control={methods.control}
          withErrorMessage
        />
        <input
          className={cn(
            "border",
            !methods.formState.isValid ? "bg-gray text-gray-light" : "",
          )}
          type="submit"
        />
      </form>
      <DevTool control={methods.control} />
    </>
  );
}

export default App;
