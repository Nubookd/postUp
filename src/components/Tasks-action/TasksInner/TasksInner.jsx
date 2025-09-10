import React, { useRef, useState } from "react";
import styles from "./TasksInner.module.scss";
import ModalCreateTask from "../ModalCreateTask/ModalCreateTask";
import TaskButton from "../TaskButton/TaskButton";
import Tasks from "../Tasks/Tasks";

export default function TasksInner() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const taskIdRef = useRef(0);

  const closeModal = () => {
    setShowModal(false);
  };

  const addTask = (newTask) => {
    taskIdRef.current += 1;
    const newId = taskIdRef.current;
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: newId }]);
    setShowModal(false);
    return newId;
  };

  const deleteTask = (idToDelete) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks
        .filter((task) => task.id !== idToDelete)
        .map((task, index) => ({
          ...task,
          id: index + 1,
        }));
      taskIdRef.current = newTasks.length;
      return newTasks;
    });
  };

  return (
    <section className={styles.tasks__section}>
      <h2 className={styles.tasks__title}>Tasks</h2>
      <div className={styles.tasks__inner}>
        <Tasks tasks={tasks} deleteTask={deleteTask} />
        {showModal && (
          <ModalCreateTask
            taskId={taskIdRef.current}
            closeModal={closeModal}
            addTask={addTask}
            showModal={showModal}
          />
        )}
        <TaskButton
          onClick={() => {
            setShowModal(true);
            console.log(showModal);
          }}
          className={styles.task__button}
        />
      </div>
    </section>
  );
}
