import {FC, useMemo, useState} from 'react'
import { useNote , Note} from '../../context/contexts'
import '../../styles/Main.scss'
import Header from '../Header/Header'
import MyButton from '../MyButton/MyButton'


const Main: FC = () => {  
    const {notes, filtered, removeNote, checkNote, selectNotesEdit, notesEdit, openModalNote} = useNote()

    const filterNote = useMemo<Note[]>(() => {
        if(filtered){
            return notes.filter(note => note.tagArray.some(item => item.toLowerCase().includes(filtered.toLowerCase())))
        }else{
            return notes
        }
    }, [notes, filtered])

    if(!filterNote.length){
        return (
            <div className='main__title'>
                <h1>Notes not found!</h1>
            </div>
        )
    }

    return(
        <div className='main'>
            {/* {modal &&   <div className='modal'>
                            <div className="modal__container">
                                <div onClick={() => checkNote(modalNote[0].id)}>
                                    <p className="todo-item__title" 
                                        style={{opacity: modalNote[0].checked ? 0.5 : 1,textDecoration: modalNote[0].checked ? 'line-through' : 'none'}}
                                        onClick={() => checkNote(modalNote[0].id)}
                                    >
                                        {modalNote[0].title}
                                    </p>

                                    <p className='todo-item__body'>{modalNote[0].body}</p>
                                    <p className='todo-item__body'><span className='todo-item__body--bold'>Tags:</span>
                                                                {modalNote[0].tagArray.map((item, index) => <span key={index} className='todo-item__tag'>{item}</span>)}                             
                                    </p>
                                </div>

                                <div className='modal__buttons'>
                                    <p className='button__close' onClick={() => setModal(false)}>X</p>
                                </div>
                            </div>
                        </div>
            } */}

            {filterNote.map(note => {
                if(note.id === notesEdit) return <Header key={note.id} mode='edit' editNote={note}/>
                return(
                    <div className='todo-item' key={note.id}>
                        <div onClick={() => checkNote(note.id)}>
                            <p className="todo-item__title" 
                                style={{opacity: note.checked ? 0.5 : 1,textDecoration: note.checked ? 'line-through' : 'none'}}
                                onClick={() => checkNote(note.id)}
                            >
                                {note.title}
                            </p>
                            <p className='todo-item__body' 
                                style={{opacity: note.checked ? 0.5 : 1, textDecoration: note.checked ? 'line-through' : 'none'}}
                                onClick={() => checkNote(note.id)}>
                                    {note.body}
                            </p>
                            <p className='todo-item__body'><span className='todo-item__body--bold'>Tags:</span>
                                                        {note.tagArray.map((item, index) => <span key={index} className='todo-item__tag'>{item}</span>)}                             
                            </p>
                        </div>
                
                        <div className='todo-item__buttons'>
                            <div className='buttons__container'>
                                <MyButton onClick={() => openModalNote(note.id)}>Open</MyButton>
                                <MyButton onClick={() => selectNotesEdit(note.id)}>Edit</MyButton>
                                <MyButton onClick={() => removeNote(note.id)}>Delete</MyButton>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Main