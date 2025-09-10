import React from "react";
import styles from "./TaskBody.module.scss";
import TaskProgressScale from "../TaskProgressScale/TaskProgressScale";
import TaskPointsList from "../TaskPointsList/TaskPointsList";

export default function TaskBody({ currentTask, handleIsCompleteChange }) {
  const completedCountPoints =
    currentTask.points.filter((p) => p.isComplete).length || 0;
  const totalPoints = currentTask.points.length || 0;

  return (
    <>
      <TaskPointsList
        currentTask={currentTask}
        handleIsCompleteChange={handleIsCompleteChange}
      />
      <TaskProgressScale max={totalPoints} value={completedCountPoints} />
    </>
  );
}
