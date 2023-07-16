import { atom } from "recoil";

const categoryState = atom({
  key: "categoryState",
  default: ["broadcast", "event", "release", "congrats", "buy"],
});

export { categoryState };
