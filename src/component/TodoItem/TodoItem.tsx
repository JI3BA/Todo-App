import {FC} from 'react'
import MyButton from '../MyButton/MyButton'
import '../../styles/TodoItem.scss'
import { Note } from '../../context/contexts/NoteContext'

const TodoItem: FC<Note> = (notes) => {
    return(
        <div className='todo-item'>
            <p className="todo-item__title">{notes.title}</p>
            <div>
                <p className="todo-item__line"></p>
            </div>
            <p className='todo-item__title'>{notes.body}</p>
            <p className='todo-item__title'>Tags</p>
            <div className='todo-item__buttons'>
                <MyButton>Open</MyButton>
                <MyButton>Edit</MyButton>
                <MyButton>Delete</MyButton>
            </div>
        </div>
    )
}

export default TodoItem