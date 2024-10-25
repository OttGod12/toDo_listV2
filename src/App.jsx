import { Header } from './components/Header/Header.jsx'
import { Main } from './components/Main/Main.jsx'
import { Footer } from './components/Footer/Footer.jsx'

import styles from "./App.module.css"
import { TaskList } from './components/TaskList/TaskList.jsx'



export function App(){
  return(
    <div className= {styles.App}>
      <Header></Header>
      <Main>
        <form>
          <input type="text" />
          <button>+</button>
        </form>

        <TaskList/>
        
      </Main>
      <Footer autor="Otávio" ></Footer>
    </div>
  
  )
}



  





  
