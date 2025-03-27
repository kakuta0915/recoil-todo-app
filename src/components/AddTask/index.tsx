import React from "react";
import { useRecoilValue } from "recoil";
import { addTaskState } from "../../status/addTaskState";
import styles from "./index.module.css";

function AddTask() {
  const addTask = useRecoilValue(addTaskState);

  return (
    <div className={styles.taskField}>
      <ul className={styles.taskList}>
        {addTask.map((task) => {
          return (
            <li key={task.id} className={styles.taskItem}>
              {task.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AddTask;
