import { atom } from "recoil";
import { Task } from "../types/Task";

export const addTaskState = atom<Array<Task>>({
  key: "addTaskState",
  default: [],
});
