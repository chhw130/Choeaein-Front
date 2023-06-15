import React from "react";
import { toast } from "react-toastify";

export const useToast = (contents: string) => {
  const customToast = toast.dark(contents, {
    position: toast.POSITION.TOP_CENTER,
    className: "foo-bar",
    toastId: "id",
  });

  return customToast;
};
