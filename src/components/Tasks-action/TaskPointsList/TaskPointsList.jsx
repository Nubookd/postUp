import React from "react";
import styles from "./TaskPointsList.module.scss";
import TaskPointContent from "../TaskPointContent/TaskPointContent";
import CustomCheckbox from "../../CustomCheckbox/CustomCheckbox";

export default function TaskPointsList({
  currentTask,
  handleIsCompleteChange,
}) {
  const post = () => console.log(currentTask.points);
  return (
    <>
      {currentTask.points && currentTask.points.length > 0 ? (
        <div className={styles.task__points}>
          <ul className={styles["task__points-list"]}>
            {currentTask.points.map((point) => (
              <li
                key={`task-${currentTask.id}-point-${point.id}`}
                id={point.id}
                className={
                  point.isComplete
                    ? `${styles.task__point} ${styles["task__point-isComplete"]}`
                    : styles.task__point
                }
              >
                <TaskPointContent point={point} />
                <CustomCheckbox
                  checked={point.isComplete || false}
                  onChange={() => {
                    handleIsCompleteChange(point.id);

                    post();
                  }}
                  id={`taskCheckbox-${point.id}`}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={styles["task__title-void"]}>Points No</p>
      )}
    </>
  );
}
