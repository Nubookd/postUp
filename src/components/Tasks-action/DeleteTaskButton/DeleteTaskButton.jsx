import React from "react";
import styles from "./DeleteTaskButton.module.scss";
import CrossIcon from "../../CrossIcon/CrossIcon.jsx";
import Button from "../../Button/Button.jsx";

export default function DeleteTaskButton({ classes, onClick }) {
  return (
    <Button classes={classes} onClick={onClick}>
      <CrossIcon />
      <p>Удалить задачу</p>
    </Button>
  );
}
