import TaskChart from "../Tasks-action/TaskChart/TaskChart";
import TasksInner from "../Tasks-action/TasksInner/TasksInner";
import styles from "./Main.module.scss";

export default function Main() {

  return (
    <main className={styles.main}>
      <TasksInner />
      <TaskChart/>
    </main>
  );
}
