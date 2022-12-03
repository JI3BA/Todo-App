import {FC, useState, useEffect} from 'react'
import '../../styles/Main.scss'
import TodoItem from '../TodoItem/TodoItem'
import { Note } from '../NoteForm/NoteForm'
import MyButton from '../MyButton/MyButton'

interface MainProps{
    notes: Note[],
    remove: (id: Note['id']) => void
}

const Main: FC<MainProps>= ({notes, remove}) => {
    

    return(
        <div className='main'>
            {notes.length === 0 ? 
            <div>
                <h1>Notes not found!</h1>
            </div>
            :
            notes.map(note => {
                return(
                    <div className='todo-item' key={note.id}>
                        <p className="todo-item__title">{note.title}</p>
                        <div>
                            <p className="todo-item__line"></p>
                        </div>
                        <p className='todo-item__title'>{note.body}</p>
                        <p className='todo-item__title'>Tags</p>
                        <div className='todo-item__buttons'>
                            <MyButton>Open</MyButton>
                            <MyButton>Edit</MyButton>
                            <MyButton onClick={() => remove(note.id)}>Delete</MyButton>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Main