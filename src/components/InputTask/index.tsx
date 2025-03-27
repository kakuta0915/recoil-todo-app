import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inputTaskState } from "../../status/inputTaskState";
import { addTaskState } from "../../status/addTaskState";
import styles from "./index.module.css";

const getKey = () => Math.random().toString(36).substring(2);

function InputTask() {
  const inputTask = useRecoilValue(inputTaskState);
  const setInputTask = useSetRecoilState(inputTaskState);
  const [addTask, setAddTask] = useRecoilState(addTaskState);

  const handleClick = () => {
    setAddTask([...addTask, { id: getKey(), title: inputTask }]);
    setInputTask("");
  };

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTask(e.target.value);
      console.log(inputTask);
    },
    [inputTask]
  );

  return (
    <div className={styles.inputField}>
      <input
        type="text"
        className={styles.inputText}
        onChange={onChange}
        value={inputTask}
      />
      <button
        type="button"
        className={styles.inputButton}
        onClick={handleClick}
      >
        追加
      </button>
    </div>
  );
}

export default InputTask;
