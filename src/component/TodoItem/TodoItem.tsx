import {FC} from 'react'
import MyButton from '../MyButton/MyButton'
import '../../styles/TodoItem.scss'

const TodoItem: FC = (props) => {
    return(
        <div className='todo-item'>
            <p className="todo-item__title">Title</p>
            <div>
                <p className="todo-item__line"></p>
            </div>
            <p className='todo-item__title'>Body</p>
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