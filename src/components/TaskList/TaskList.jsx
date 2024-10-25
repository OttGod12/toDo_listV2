import { TaskItem } from './TaskItem/TaskItem'
import styles from './TaskList.module.css'

export function TaskList() {

    const listaTarefas = [
        {id:1, tarefa: "Estudar"},
        {id:2, tarefa: "Exercícios"},
        {id:3, tarefa: "Escola"},

    ]



    return (
        <ul className={styles.TaskList} >

          {
            listaTarefas.map(item => <TaskItem texto={item.tarefa}/>)
          }        

        </ul>
    )
}