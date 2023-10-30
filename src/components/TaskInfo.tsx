import { TaskType } from "./Task";
import styles from "./TaskInfo.module.css";

interface TaskInfoPropos {
  tasks: TaskType[];
}

export function TaskInfo({ tasks }: TaskInfoPropos) {
  return (
    <div className={styles.taskInfo}>
      <p>
        Tarefas criadas <span>{tasks.length}</span>
      </p>
      <p className={styles.taskInfoFinished}>
        Concluídas{" "}
        <span>
          {tasks.length > 0
            ? tasks.filter((task) => task.isFinished).length +
              " de " +
              tasks.length
            : tasks.length}
        </span>
      </p>
    </div>
  );
}
