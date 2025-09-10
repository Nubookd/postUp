import React from "react";
import styles from "./TaskPointContent.module.scss";

export default function TaskContent({ point }) {
  return (
    <div className={styles["task__point-item"]}>
      <p className={styles["task__point-text"]}>
        <span className={styles["task__point-title"]}>Пункт-{point.id}: </span>
        {point.text}
      </p>
      <p className={styles["task__point-deadline"]}>
        <span className={styles["task__deadline-label"]}>Срок: </span>
        {point.deadline}
      </p>
    </div>
  );
}
