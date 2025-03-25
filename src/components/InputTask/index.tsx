import React from "react";
import styles from "./index.module.css";

function InputTask() {
  return (
    <div className={styles.inputField}>
      <input type="text" className={styles.inputText} />
      <button type="button" className={styles.inputButton}>
        追加
      </button>
    </div>
  );
}

export default InputTask;
