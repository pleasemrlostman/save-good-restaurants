declare module "user-register" {
  export type userRegisterType = {
    id: string | "";
    email: string;
    nickname: string;
    password: string;
    passwordCheck: string;
  };
}
