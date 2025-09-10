import React from "react";
import styles from "./CustomCheckbox.module.scss";

export default function CustomCheckbox({ checked, onChange, id }) {
  return (
    <div className={styles["task__point-checkbox"]}>
      <input
        type="checkbox"
        className={styles["task__point-checkbox-input"]}
        id={id}
        checked={checked}
        onChange={onChange}
        // disabled
      />
      <label htmlFor={id} className={styles["task__point-checkbox-label"]}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          className={styles["task__point-checkbox-icon"]}
        >
          <path
            d="M6.26091 49.7392C1.91298 45.3913 1.91308 10.609 6.26091 6.26097C10.6087 1.91298 45.3913 1.91304 49.7392 6.26097C54.087 10.6089 54.0869 45.3913 49.7392 49.7392C45.3915 54.0872 10.6088 54.0872 6.26091 49.7392Z"
            stroke="#4077DE"
            strokeWidth="5"
            className={styles["task__point-checkbox-icon-border"]}
          />
          <path
            d="M14.9565 28L24.7391 36.6957L41.0434 19.3044"
            stroke="#6EA340"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles["task__point-checkbox-icon-tick"]}
          />
        </svg>
      </label>
    </div>
  );
}
