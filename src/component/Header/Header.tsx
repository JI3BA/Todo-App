import {FC, useState, useEffect} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Header.scss'
import NoteForm, { Note } from '../NoteForm/NoteForm'

interface HeaderProps{
    notesCall(notes: Array<Note>): void
}

const Header: FC<HeaderProps> = (props) => {

    const [notes, setNotes] = useState<Array<Note>>([])

    const createNote = (newNote: Note) => {
         setNotes([...notes, newNote])
    }

    useEffect(() => props.notesCall(notes), [notes])

    return(
        <div className='todo-list__header'>
                <NoteForm create={createNote}/>
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