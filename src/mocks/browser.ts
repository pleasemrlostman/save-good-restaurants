import { setupWorker } from "msw/browser";
import { handlers } from "./handlers"; // 이 부분은 추후에 작성

export const worker = setupWorker(...handlers);
