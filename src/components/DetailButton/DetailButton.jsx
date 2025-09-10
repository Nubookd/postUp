import React from "react";
import styles from "./DetailButton.module.scss";
import Button from "../Button/Button";
import DetailIcon from "../DetailIcon/DetailIcon";

export default function DetailButton({ onClick, isActive }) {
  return (
    <Button classes={styles["detail__button"]} onClick={onClick}>
      <span className={styles["detail__button-title"]}>
        {isActive ? "Скрыть" : "Подробнее"}
      </span>
      <DetailIcon isActive={isActive} />
    </Button>
  );
}
