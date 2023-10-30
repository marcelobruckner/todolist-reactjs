import styles from "./Header.module.css";
import todoLogo from "../assets/todo-logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoLogo} />
    </div>
  );
}
