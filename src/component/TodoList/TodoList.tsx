import {FC} from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Filter from '../Filter/Filter'
import Modal from '../Modal/Modal'
import '../../styles/TodoList.scss'
import { NoteProvider } from '../../context/contexts'

const TodoList: FC = () => { 

    return(
        <NoteProvider>
            <div className="wrapper">
                <Header mode='add'/>
                <Modal />
                <Filter />
                <Main />
            </div>
        </NoteProvider>
    )
}

export default TodoList