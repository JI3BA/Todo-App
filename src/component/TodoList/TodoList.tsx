import React, {FC, useState} from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import '../../styles/TodoList.scss'

export interface Note{
    id: number,
    title: string,
    body: string,
    checked: boolean
}

const TodoList: FC = () => {
    const [notes, setNotes] = useState<Note[]>([])
    const [notesEdit, setNotesEdit] = useState<Note['id'] | null>(null);

    const addNewNote = ({title, body}: Omit<Note, 'id' | 'checked'>): void => {
        setNotes([...notes, {title, body, id: Date.now(), checked: false}])
    }
    const selectNotesEdit = (id: Note['id']) => {
        setNotesEdit(id);
      };

    const changeNote = ({ title, body }: Omit<Note, 'id' | 'checked'>) => {
        setNotes(
            notes.map((note) => {
            if (note.id === notesEdit) {
              return { ...note, title, body };
            }
            return note;
          })
        );
        setNotesEdit(null);
      };

    const removeNote = (id: Note['id']) => {
        setNotes(note => note.filter(note => note.id !== id))
    }

    const checkNote = (id: Note['id']) => {
        setNotes(
            notes.map((note) => {
                if(note.id === id){
                    return { ...note, checked: !note.checked }
                }
                  return note
                })
            )
    }

    return(
        <div className="wrapper">
            <Header mode='add' addNewNote={addNewNote} />
            <Main notes={notes} 
                removeNote={removeNote} 
                checkNote={checkNote} 
                selectNotesEdit={selectNotesEdit} 
                notesEdit={notesEdit}
                changeNote={changeNote}/>
        </div>
    )
}

export default TodoList