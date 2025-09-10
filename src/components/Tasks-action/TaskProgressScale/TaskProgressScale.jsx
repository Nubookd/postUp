import React from "react";
import styles from "./TaskProgressScale.module.scss";

export default function TaskProgressScale({ max, value }) {
  const progressValue = Math.min(Math.max(value, 0), max);
  const percentage = Math.round((progressValue / max) * 100);

  return (
    <div className={styles["progress-container"]}>
      <div className={styles["progress-bg"]}>
        <div
          className={styles["progress-bar"]}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className={styles["progress-value"]}>{percentage}%</span>
    </div>
  );
}
