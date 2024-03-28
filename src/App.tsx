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
import { Checkbox } from "./components/form/Checkbox";

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
      allCheck: false,
      check: {
        a: false,
        b: false,
        c: false,
      },
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    // console.log("data", data);
    data;
  };
  const onError = (err: FieldErrors<RegisterSchemaType>) => {
    // console.log("err", err);
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
        <Checkbox name="allCheck" control={methods.control} />
        <Checkbox name="check.a" control={methods.control} value="0" />
        <Checkbox name="check.b" control={methods.control} value="1" />
        <Checkbox name="check.c" control={methods.control} value="2" />
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
