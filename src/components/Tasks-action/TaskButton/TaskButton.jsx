import React, { useState } from "react";
import styles from "./TaskButton.module.scss";
import Button from "../../Button/Button";
import CrossPlusIcon from "../../CrossPlusIcon/CrossPlusIcon";

export default function TaskButton({ onClick }) {
  return (
    <Button classes={styles.tasks__button} onClick={onClick}>
      <CrossPlusIcon />
      Создать задачу
    </Button>
  );
}
