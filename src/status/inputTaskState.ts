import { atom } from "recoil";

export const inputTaskState = atom<string>({
  key: "inputTaskState",
  default: "",
});
