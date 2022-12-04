import {FC} from 'react'
import '../../styles/Main.scss'
import Header from '../Header/Header'
import MyButton from '../MyButton/MyButton'
import { Note } from '../TodoList/TodoList'

interface NoteItemProps{
    notes: Note[],
    notesEdit: Note['id'] | null,
    removeNote(id: Note['id']): void,
    checkNote(id: Note['id']): void,
    selectNotesEdit(id: Note['id']): void,
    changeNote({ title, body }: Omit<Note, 'id' | 'checked'>):void,
}

const Main: FC<NoteItemProps> = ({notes, removeNote, checkNote, selectNotesEdit, notesEdit, changeNote}) => {  

    return(
        <div className='main'>
            {notes.length === 0 ? 
            <div style={{marginTop: 10}}>
                <h1>Notes not found!</h1>
            </div>
            :
            notes.map(note => {
                if(note.id === notesEdit) return <Header key={note.id} mode='edit' changeNote={changeNote} editNote={note}/>
                return(
                    <div className='todo-item' key={note.id}>
                        <p className="todo-item__title" 
                            style={{opacity: note.checked ? 0.5 : 1,textDecoration: note.checked ? 'line-through' : 'none'}}
                            onClick={() => checkNote(note.id)}
                        >
                            {note.title}
                        </p>
                        <div>
                            <p className="todo-item__line"></p>
                        </div>
                        <p className='todo-item__body' onClick={() => checkNote(note.id)}>{note.body}</p>
                        <p className='todo-item__body'>Tags</p>
                        <div className='todo-item__buttons'>
                            <MyButton>Open</MyButton>
                            <MyButton onClick={() => selectNotesEdit(note.id)}>Edit</MyButton>
                            <MyButton onClick={() => removeNote(note.id)}>Delete</MyButton>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Main