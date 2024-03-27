import { z } from "zod";

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export const registerSchema = z
  .object({
    id: z
      .string({
        required_error: "아이디를 입력해주세요",
      })
      .nonempty("아이디를 입력해주세요.")
      .regex(
        /^[a-z0-9]{2,10}$/,
        "영문 소문자 또는 영문+숫자 조합 2~10자리를 입력해주세요.",
      ),
    // .max(10, {
    //   message: "10글자 이내로 작성해주세요",
    // })
    // .min(2, {
    //   message: "2글자 이상 작성해주세요",
    // }),
    password: z
      .string({
        required_error: "비밀번호를 입력해주세요",
      })
      .nonempty("비밀번호를 입력해주세요.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
        "영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요.",
      ),
    passwordCheck: z
      .string({
        required_error: "비밀번호를 다시 입력해주세요",
      })
      .nonempty("비밀번호를 다시 입력해주세요."),
    // recommendationCode: z
    //   .string()
    //   .regex(/^[a-z]{0,}$/, "추천코드는 소문자로 입력 가능합니다")
    //   .optional(),
    // agree: z.string(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호가 일치하지 않습니다.",
  });
