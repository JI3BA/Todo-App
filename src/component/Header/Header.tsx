import {FC, useState} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Header.scss'
import NoteForm, { Note } from '../NoteForm/NoteForm'


const Header: FC = () => {

    const [notes, setNotes] = useState<Array<Note>>([])

    const createNote = (newNote: Note) => {
         setNotes([...notes, newNote])
    }

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