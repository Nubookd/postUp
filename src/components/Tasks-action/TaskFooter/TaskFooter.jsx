import React, {useState} from "react";
import styles from "./TaskFooter.module.scss";
import DetailTaskButton from "../DetailTaskButton/DetailTaskButton";
import TaskChart from "../TaskChart/TaskChart"

export default function TaskFooter({ currentTask }) {
  const [showDetailsTask, setShowDetailsTask] = useState(false);
  return (
    <div className={styles["task__footer"]}>
      <DetailTaskButton
        onClick={() => {
          setShowDetailsTask(!showDetailsTask);
          console.log(currentTask);
        }}
        isActive={showDetailsTask}
      />
      {showDetailsTask ? <TaskChart currentTask={currentTask}/> : "Post"}
    </div>
  );
}
