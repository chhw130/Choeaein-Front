import { TypeOptions, toast } from "react-toastify";

export const useToast = (
  contents: string,
  colorMode: string | null,
  status: TypeOptions
) => {
  const customToast =
    colorMode !== "light"
      ? toast.dark(contents, {
          toastId: "id",
          type: status,
        })
      : toast(contents, {
          toastId: "id",
          type: status,
        });

  return customToast;
};
