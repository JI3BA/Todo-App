import React, {FC, useState, useEffect} from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import '../../styles/TodoList.scss'
import { Note } from '../NoteForm/NoteForm'

interface TodoListProps{
    notesCall(notes: Note[]): void,
    notes: Note[]
}

const TodoList: FC<TodoListProps> = () => {
    const [notes, setNotes] = useState<Array<Note>>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('notes') || '[]') as Note[]
        setNotes(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(notes))
    }, [notes])

    const notesCall = (notes: Note[]) => {
        setNotes(notes)
    }

    const removeNote = (id: Note['id']) => {
        setNotes(prev => prev.filter(note => note.id !== id))
    }

    return(
        <div className="wrapper">
            <Header notesCall={notesCall}/>
            <Main notes={notes} remove={removeNote}/>
        </div>
    )
}

export default TodoList