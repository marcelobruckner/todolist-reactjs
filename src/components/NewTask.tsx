import styles from "./NewTask.module.css";
import { Task, TaskType } from "./Task";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import clipboard from "../assets/Clipboard.svg";
import { TaskInfo } from "./TaskInfo";

export function NewTask() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskType = {
      id: Math.random().valueOf(),
      description: newTaskText,
      isFinished: false,
    };

    setTasks([...tasks, newTask]);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteTask(taskIdToDelete: number) {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task.id != taskIdToDelete;
    });
    setTasks([...taskWithoutDeletedOne]);
  }

  function changeTask(taskNumberToEdit: number) {
    const tasksEdited = tasks.map((task) => {
      if (task.id === taskNumberToEdit) {
        task.isFinished = !task.isFinished;
      }
      return task;
    });

    setTasks([...tasksEdited]);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask}>
        <div className={styles.newTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            required
            onInvalid={handleNewTaskInvalid}
          />
          <button>
            Criar
            <PlusCircle size={24} />
          </button>
        </div>
      </form>

      <TaskInfo tasks={tasks} />

      {/* EXIBICAO DA LISTA DE TASKS */}
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onChangeTask={changeTask}
          />
        );
      })}
      {/* EXIBICAO SE NAO TIVER TASKS */}
      {tasks.length == 0 && (
        <div className={styles.noContent}>
          <img src={clipboard} />
          <p>Você ainda não tem tarefas cadastradas </p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </>
  );
}
