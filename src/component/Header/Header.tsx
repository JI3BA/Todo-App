import {FC, useState} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Header.scss'
import MyButton from '../MyButton/MyButton'
import { Note } from '../TodoList/TodoList'

interface addHeaderProps{
    mode: 'add',
    addNewNote({title, body}: Omit<Note, 'id' | 'checked'>): void,
}

interface EditHeaderProps{
    mode: 'edit',
    editNote: Omit<Note, 'id' | 'checked'>,
    changeNote: ({ title, body }: Omit<Note, 'id' | 'checked'>) => void,
}

type HeaderProps = addHeaderProps | EditHeaderProps;

const Header: FC<HeaderProps> = (props) => {
    const isEdit = props.mode === 'edit';
    const [note, setNote] = useState({title: '', body: ''})

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (isEdit) {
            return props.changeNote(note);
        }

        props.addNewNote(note);
        setNote({title: '', body: ''});
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setNote({ ...note, [name]: value });
    };
    
    return(
        <div className='todo-list__header'>
                <form className='form'>
                    <div className='todo-list__inputs'>
                            <MyInput placeholder='Body' value={note.title} onChange={onChange} name='title'/>
                            <MyInput placeholder='Title' value={note.body} onChange={onChange} name='body'/>
                    </div>

                    <div className='todo-list__buttons'>
                        {!isEdit && <MyButton onClick={onClick}>Add Note</MyButton>}
                        {isEdit && <MyButton onClick={onClick}>Edit Note</MyButton>}
                    </div>
                </form>
{/* 
                <div>
                    <p className="todo-list__line"></p>
                </div>
                <div>
                    <MyInput placeholder='Search'/>
                </div>
                <div>
                    <p className="todo-list__line"></p>
                </div> */}
        </div>
    )
}

export default Header