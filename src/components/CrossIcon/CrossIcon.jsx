import React from "react";
import styles from "./CrossIcon.module.scss";

export default function CrossIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={styles.cross__icon}
    >
      <path
        d="M2 2L7 7M12 12L7 7M7 7L12 2L2 12"
        stroke="#594336"
        strokeWidth="3"
      />
    </svg>
  );
}
