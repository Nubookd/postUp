import React from "react";
import styles from "./TaskHeader.module.scss";
import DeleteTaskButton from "../DeleteTaskButton/DeleteTaskButton";

export default function TaskHeader({currentTask, deleteTask}) {
  return (
    <div className={styles.task__header}>
      <h2 className={styles["task__title"]}>{currentTask.taskTitle}</h2>
      <DeleteTaskButton
        classes={styles["task__delete-button"]}
        onClick={() => deleteTask(currentTask.id)}
        aria-label={`Удалить задачу '${currentTask.taskTitle}'`}
      />
    </div>
  );
}
