import React, { useRef, useState, useEffect } from "react";
import styles from "./ModalCreateTask.module.scss";

import CloseButton from "../../CloseButton/CloseButton.jsx";
import ModalCreatePointTask from "../ModalCreatePointTask/ModalCreatePointTask";
import TaskButton from "../TaskButton/TaskButton.jsx";

export default function ModalCreateTask({ addTask, closeModal, showModal, taskId }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [points, setPoint] = useState([]); // {}
  const pointIdRef = useRef(0);

  const handleCreateTask = (event) => {
    event.preventDefault();
    if (!taskTitle.trim() || points.length === 0) return;

    const newTask = {
      taskTitle: taskTitle,
      points: points,
    };

    addTask(newTask);
    setTaskTitle("");
    setPoint([]);
    pointIdRef.current = 1;
  };

  const addPointTask = (newPoint) => {
    pointIdRef.current += 1;
    const newId = `${taskId + 1}-${pointIdRef.current}`;
    setPoint((prevPoints) => [...prevPoints, { ...newPoint, id: newId }]);
    return newId;
  };

  const deletePoint = (idToDelete) => {
    setPoint(
      points
        .filter((point) => point.id !== idToDelete)
        .map((item, index) => ({ ...item, id: index + 1 }))
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  return (
    <section
      className={!showModal ? styles.modal : `${styles.modal} ${styles.active}`}
      onClick={closeModal}
    >
      <div className={styles.modal__inner} onClick={(e) => e.stopPropagation()}>
        <CloseButton classes={styles.close__modal} onClick={closeModal} />
        <div className={styles["modal__inner-container"]}>
          <h2 className={styles.modal__title}>Задача</h2>
          <div className={styles["task__title-inner"]}>
            <h3 className={styles.task__title}>
              {taskTitle === "" ? "Task" : taskTitle}
            </h3>
            <input
              type="text"
              id="task-title"
              className={styles["task__title-input"]}
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Название задачи"
            />
          </div>
          <div className={styles["points__task-inner"]}>
            {points.length === 0 ? (
              ""
            ) : (
              <h3 className={styles.points__title}>Пункты</h3>
            )}
            {points.map((point, index) => (
              <div key={point.id || index} className={styles.point__item}>
                <div className={styles["point__item-inner"]}>
                  <p className={styles["point__item-title"]}>
                    <span className={styles["point__item-title-span"]}>
                      Пункт {index + 1}:{" "}
                    </span>
                    {point.text}
                  </p>
                  <p className={styles["point__item-deadline"]}>
                    <span className={styles["point__item-deadline-span"]}>
                      Срок:{" "}
                    </span>
                    {point.deadline}
                  </p>
                </div>
                <div className={styles["point__action-button"]}>
                  <CloseButton
                    onClick={() => {
                      deletePoint(point.id);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <ModalCreatePointTask addPointTask={addPointTask} />

          <div className={styles.buttons__wrapper}>
            <TaskButton onClick={handleCreateTask}>Создать задачу</TaskButton>
          </div>
        </div>
      </div>
    </section>
  );
}
