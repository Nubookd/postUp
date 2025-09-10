import React from "react";
import styles from "./CrossPlusIcon.module.scss";

export default function CrossPlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={styles['cross__icon-plus']}
    >
      <path
        d="M0.928833 8H7.9999M15.071 8H7.9999M7.9999 8V0.928932V15.0711"
        stroke="#594336"
        strokeWidth="3"
      />
    </svg>
  );
}
