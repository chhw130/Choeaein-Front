import React from "react";
import { toast } from "react-toastify";

export const useToast = (
  contents: string,
  colorMode: string,
  status: string
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
