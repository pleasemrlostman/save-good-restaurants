import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

const useGlobalMutate = <
  T extends (param?: Z) => Promise<AxiosResponse<K>>,
  K extends (res?: AxiosResponse<K>) => void,
  Z,
>(
  axiosCallback: T,
  callbackAfterSuccess: K,
  isErrorMessage?: boolean,
) => {
  const onSuccess = (res: AxiosResponse<K>) => {
    if (res.status === 200) callbackAfterSuccess(res);
  };

  const { mutate, error, isSuccess, data } = useMutation({
    mutationFn: (params: Z) => axiosCallback(params),
    onSuccess: onSuccess,
    onError: (error: AxiosError) => {
      if (isErrorMessage) {
        if (!error.response) return;

        const returnData = error.response.data as {
          code: string;
          message: string;
        };
        alert(returnData?.message);
      }
    },
  });

  return { updateMutate: mutate, error, isSuccess, data };
};

export default useGlobalMutate;
