import React from "react";
import styles from "./DetailIcon.module.scss";

export default function DetailIcon({ classes, isActive }) {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      className={isActive ? styles['detail__icon-active'] : styles.detail__icon}
    >
      <path
        d="M2 2L10 10L18 2"
        stroke="#594336"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
