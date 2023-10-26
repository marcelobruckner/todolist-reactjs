import todoLogo from "./assets/todo-logo.svg";
import buttonAdd from "./assets/plus.svg";
import clipboard from "./assets/Clipboard.svg";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  const tarefasCriadas = 5;
  const tarefasConcluidas = 3;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={todoLogo} />
      </div>
      <div className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <img src={buttonAdd} />
        </button>
      </div>
      <div className={styles.tasks}>
        <div className={styles.taskInfo}>
          <span className={styles.taskInfoCreated}>
            Tarefas criadas {tarefasCriadas}
          </span>
          <span className={styles.taskInfoFinished}>
            Concluídas {tarefasConcluidas} de {tarefasCriadas}
          </span>
        </div>

        <div className={styles.taskContent}>
          <img src={clipboard} />
          <div>
            <p>Você ainda não tem tarefas cadastradas </p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
