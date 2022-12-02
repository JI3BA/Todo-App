import {FC} from 'react'
import MyButton from '../MyButton/MyButton'

interface ItemProps{
    children: React.ReactNode
}

const TodoItem = ({children}: ItemProps) => {
    return(
        <div className='todo-item__container'>
            <p className="todo-item__title">Title</p>
            <div>
                <p className="todo-item__line"></p>
            </div>
            <p className='todo-item__title'>Body</p>
            <div>
                <MyButton>Open</MyButton>
                <MyButton>Change</MyButton>
                <MyButton>Delete</MyButton>
            </div>
        </div>
    )
}

export default TodoItem