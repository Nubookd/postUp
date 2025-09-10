import React, { useState } from "react";
import styles from "./ModalCreatePointTask.module.scss";
import Button from "../../Button/Button";

export default function ModalCreatePointTask({ addPointTask }) {
  const [pointText, setPointText] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pointText.trim() || !deadline.trim()) return;

    const newPoint = {
      text: pointText,
      deadline: deadline,
      isComplete: false,
    };

    addPointTask(newPoint);
    setPointText("");
    setDeadline("");
  };

  return (
    <form className={styles["point__task-inner"]} onSubmit={handleSubmit}>
      <label htmlFor="point-text">Описание пункта:</label>
      <input
        type="text"
        id="point-text"
        placeholder="Введите описание"
        value={pointText}
        onChange={(event) => setPointText(event.target.value)}
        required
      />

      <label htmlFor="point-deadline">Срок выполнения:</label>
      <input
        type="number"
        placeholder="Введите число"
        id="point-deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
      />
      {/* <input
        type="data"
        id="point-deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        min={Date.now}
      /> */}
      <Button type="submit" classes={styles["create__point-button"]}>
        Добавить пункт
      </Button>
    </form>
  );
}
