import React from "react";
import styles from "./DetailTaskButton.module.scss";
import DetailButton from "../../DetailButton/DetailButton";

export default function DetailTaskButton({ onClick, isActive }) {
  return (
    <div
      className={`${styles.task__detailButton} ${
        isActive ? styles["task__detailButton--active"] : ""
      }`}
      onClick={onClick}
      aria-expanded={isActive}
      aria-label={isActive ? "Скрыть детали" : "Показать детали"}
      type="button"
    >
      <svg
        width="50"
        height="46"
        viewBox="0 0 70 65"
        aria-hidden="true"
        className={styles.task__detailButtonBg}
      >
        <path
          d="M69.2708 58.3523H6.5625V0.738636C6.5625 0.332386 6.23438 0 5.83333 0H0.729167C0.328125 0 0 0.332386 0 0.738636V64.2614C0 64.6676 0.328125 65 0.729167 65H69.2708C69.6719 65 70 64.6676 70 64.2614V59.0909C70 58.6847 69.6719 58.3523 69.2708 58.3523ZM16.2057 44.1058C16.4883 44.392 16.944 44.392 17.2357 44.1058L29.8411 31.4013L41.4714 43.2564C41.7539 43.5426 42.2188 43.5426 42.5013 43.2564L67.6029 17.8381C67.8854 17.5518 67.8854 17.081 67.6029 16.7947L63.9935 13.1385C63.8564 13.001 63.6714 12.9239 63.4785 12.9239C63.2857 12.9239 63.1006 13.001 62.9635 13.1385L42 34.3651L30.388 22.5284C30.251 22.3909 30.0659 22.3138 29.873 22.3138C29.6802 22.3138 29.4951 22.3909 29.3581 22.5284L12.6055 39.397C12.4698 39.5358 12.3936 39.7233 12.3936 39.9187C12.3936 40.114 12.4698 40.3015 12.6055 40.4403L16.2057 44.1058Z"
          fill="#de6f40ff"
          fillOpacity="0.5"
          className={styles.task__detailButtonBg}
        />
      </svg>
      <DetailButton onClick={onClick} isActive={isActive}/>
    </div>
  );
}
