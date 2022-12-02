import React, {FC, useState} from 'react'
import MyButton from '../MyButton/MyButton'
import MyInput from '../MyInput/MyInput'
import '../../styles/TodoList.scss'

export interface Note{
    id?: number,
    title: string,
    body: string,
}

const NoteForm: FC = () => {

    const [note, setNote] = useState<Note>({title: '', body: '', id: Date.now()})

    const addNewPost = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        
        const newPost = {
            ...note
        }
        //create(newPost)
        console.log(note);
        
        setNote({title:'', body: ''})
    }

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNote({...note, title: event.target.value, id: Date.now()})
    }

    const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNote({...note, body: event.target.value, id: Date.now()})
    }

    return(
        <form className='form'>
            <div className='todo-list__inputs'>
                    <MyInput placeholder='Body' value={note.title} onChange={handleChangeTitle}/>
                    <MyInput placeholder='Title' value={note.body} onChange={handleChangeBody}/>
                </div>
                <div className='todo-list__buttons'>
                    <MyButton onClick={addNewPost}>Add Note</MyButton>
                </div>
        </form>
    )
}

export default NoteForm