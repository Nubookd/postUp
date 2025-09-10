import React, { useState, useEffect } from "react";
import styles from "./Task.module.scss";
import TaskHeader from "../TaskHeader/TaskHeader";
import TaskBody from "../TaskBody/TaskBody";
import TaskFooter from "../TaskFooter/TaskFooter";

export default function Task({ task, deleteTask }) {
  const [currentTask, setCurrentTask] = useState(task);

  

  const handleIsCompleteChange = (pointId) => {
    const updatedPoints = currentTask.points.map((p) =>
      p.id === pointId ? { ...p, isComplete: !p.isComplete } : p
    );

    const updatedTask = {
      ...currentTask,
      points: updatedPoints,
    };

    setCurrentTask(updatedTask);
    console.log(currentTask);
  };

  return (
    <section className={styles.task} id={`task-${task.id}`}>
      <TaskHeader currentTask={currentTask} deleteTask={deleteTask} />
      <TaskBody
        currentTask={currentTask}
        handleIsCompleteChange={handleIsCompleteChange}
      />
      <TaskFooter currentTask={currentTask} />
    </section>
  );
}
