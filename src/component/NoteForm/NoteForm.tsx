import React, {FC, useState} from 'react'
import MyButton from '../MyButton/MyButton'
import MyInput from '../MyInput/MyInput'
import '../../styles/TodoList.scss'

const NoteForm: FC = () => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        
        const newPost = {
            ...post,
            id: Date.now()
        }

        //create(newPost)
        setPost({title:'', body: ''})
    }

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPost({...post, title: event.target.value})
    }

    const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPost({...post, body: event.target.value})
    }

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
        console.log(event.currentTarget);
        
    }

    return(
        <form className='form'>
            <div className='todo-list__inputs'>
                    <MyInput placeholder='Body' value={post.title} onChange={handleChangeTitle}/>
                    <MyInput placeholder='Title' value={post.body} onChange={handleChangeBody}/>
                </div>
                <div className='todo-list__buttons'>
                    <MyButton onClick={addNewPost}>Add Note</MyButton>
                </div>
        </form>
    )
}

export default NoteForm