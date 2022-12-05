import {FC} from 'react'
import { useNote } from '../../context/contexts'
import '../../styles/Main.scss'
import Header from '../Header/Header'
import MyButton from '../MyButton/MyButton'


const Main: FC = () => {  
    const {notes, removeNote, checkNote, selectNotesEdit, notesEdit} = useNote()
    return(
        <div className='main'>
            {notes.length === 0 ? 
            <div style={{marginTop: 10}}>
                <h1>Notes not found!</h1>
            </div>
            :
            notes.map(note => {
                if(note.id === notesEdit) return <Header key={note.id} mode='edit' editNote={note}/>
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
                        <p className='todo-item__body'><span className='todo-item__body--bold'>Tags:</span> {note.tag}</p>
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