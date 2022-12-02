import React, {FC} from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import '../../styles/TodoList.scss'

const TodoList: FC = () => {
    return(
        <div className="wrapper">
            <Header />
            <Main />
        </div>
    )
}

export default TodoList