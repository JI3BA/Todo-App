import React, {FC} from 'react'
import MyButton from '../MyButton/MyButton'
import '../../styles/TodoList.scss'
import MyInput from '../MyInput/MyInput'

const TodoList: FC = () => {
    return(
        <div className="wrapper">
            <div className='todo-list__header'>
                <div className='todo-list__inputs'>
                    <MyInput placeholder='Body'/>
                    <MyInput placeholder='Title'/>
                </div>
                <div className='todo-list__buttons'>
                    <MyButton>Add Posts</MyButton>
                </div>
                <div>
                    <p className="todo-list__line"></p>
                </div>
                <div>
                    <MyInput placeholder='Search'/>
                </div>
                <div>
                    <p className="todo-list__line"></p>
                </div>
            </div>
        </div>
    )
}

export default TodoList