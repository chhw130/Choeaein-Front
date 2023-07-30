import { useColorMode } from "@chakra-ui/react";
import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import { findID } from "../API/CSRSetting";
import { toast } from "react-toastify";
import { FindIDFormType } from "@/component/findPage/findId/FindID";

interface UseFindIDType {
  findIdHandler: UseMutateAsyncFunction<any, unknown, FindIDFormType, unknown>;
  idData: { ID: string };
}

const useFindID = (): UseFindIDType => {
  const { colorMode } = useColorMode();

  const { mutateAsync: findIdHandler, data: idData } = useMutation(
    (data: FindIDFormType) => findID(data),
    {
      onError: () => {
        toast("정보가 정확하지 않습니다.", {
          type: "error",
          theme: colorMode,
          toastId: "findID",
        });
      },
    }
  );

  return { findIdHandler, idData };
};

export default useFindID;
