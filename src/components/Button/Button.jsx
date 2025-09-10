import styles from "./Button.module.scss";

export default function Button({ classes, children, onClick }) {
  return (
    <button
      className={classes ? `${styles.button} ${classes}` : styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
