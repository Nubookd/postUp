import React from "react";
import styles from "./Tasks.module.scss";

import Task from "../Task/Task";

export default function Tasks({ tasks, deleteTask }) {
  

  return (
    <>
      {tasks.length === 0 ? (
        <p className={styles["tasks__title-none"]}>Пока пусто</p>
      ) : (
        tasks.map((task) => <Task deleteTask={deleteTask} key={task.id} task={task} id={task.id} />)
      )}
    </>
  );
}
