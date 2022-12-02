import {FC} from 'react'
import MyButton from '../MyButton/MyButton'
import MyInput from '../MyInput/MyInput'
import '../../styles/Header.scss'

const Header: FC = () => {
    return(
        <div className='todo-list__header'>
                <div className='todo-list__inputs'>
                    <MyInput placeholder='Body'/>
                    <MyInput placeholder='Title'/>
                </div>
                <div className='todo-list__buttons'>
                    <MyButton>Add Notes</MyButton>
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
    )
}

export default Header