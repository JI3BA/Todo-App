import {FC, useState} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Header.scss'
import MyButton from '../MyButton/MyButton'
import { Note } from '../../context/contexts/NoteContext'
import { useNote } from '../../context/contexts'

interface addHeaderProps{
    mode: 'add',
}

interface EditHeaderProps{
    mode: 'edit',
    editNote: Omit<Note, 'id' | 'checked'>,
}

type HeaderProps = addHeaderProps | EditHeaderProps;

const Header: FC<HeaderProps> = (props) => {
    const { addNewNote, changeNote }  = useNote()
    const isEdit = props.mode === 'edit';
    const [note, setNote] = useState(isEdit ? props.editNote : {title: '', body: '', tag: ''})
    // const [tag, setTag] = useState({tag: ''})

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (isEdit) {
            return changeNote(note);
        }
        
        addNewNote(note);
        setNote({title: '', body: '', tag: ''});
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setNote({ ...note, [name]: value });
    };
    
    return(
        <div className='todo-list__header'>
                <form className='form'>
                    <div className='todo-list__inputs'>
                            <MyInput placeholder='Title' value={note.title} onChange={onChange} name='title'/>
                            <MyInput placeholder='Body' value={note.body} onChange={onChange} name='body'/>
                            <MyInput placeholder='Tags' value={note.tag} onChange={onChange} name='tag'/>
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