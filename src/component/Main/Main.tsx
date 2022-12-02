import {FC} from 'react'
import '../../styles/Main.scss'
import TodoItem from '../TodoItem/TodoItem'

const Main: FC = () => {
    return(
        <div className='main'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
        </div>
    )
}

export default Main