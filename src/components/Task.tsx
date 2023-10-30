import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskNumber: number) => void;
  onChangeTask: (taskNumberToEdit: number) => void;
}

export interface TaskType {
  id: number;
  description: string;
  isFinished: boolean;
}

export function Task({ task, onDeleteTask, onChangeTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCheckboxChanged() {
    onChangeTask(task.id);
  }
  return (
    <>
      <div className={styles.task}>
        <input
          type="checkbox"
          value={task.id}
          name="task"
          id={task.id.toString()}
          checked={task.isFinished}
          onChange={handleCheckboxChanged}
        />
        <label htmlFor={task.id.toString()}>{task.description}</label>
        <button title="Deletar task" onClick={handleDeleteTask}>
          <Trash size={24} />
        </button>
      </div>
    </>
  );
}
