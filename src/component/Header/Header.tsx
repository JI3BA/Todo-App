import {FC} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Header.scss'
import NoteForm from '../NoteForm/NoteForm'

const Header: FC = () => {

    return(
        <div className='todo-list__header'>
                <NoteForm />
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