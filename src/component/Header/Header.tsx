import {FC, useState} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Header.scss'
import MyButton from '../MyButton/MyButton'
import { Note, TagsNote } from '../../context/contexts/NoteContext'
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
    const {addNewNote, addTagsNote, changeNote}  = useNote()
    const isEdit = props.mode === 'edit';
    const [note, setNote] = useState(isEdit ? props.editNote : {title: '', body: '', tagArray: []})
    // const [tag, setTag] = useState({tag: ''})

    // For HASHTAGS INPUT
    // const [tags, setTags] = useState({tag: ['']})
    const [inputTag , setInputTag] = useState('')
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (isEdit) {
            return changeNote(note);
        }

        addNewNote(note);
        //addTagsNote(tags)
        //setTags({tag: ['']})
        setNote({title: '', body: '', tagArray: []});
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setNote({ ...note, [name]: value });
    };

    const onChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputTag(value);
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        // @ts-ignore
        const trimmedInput = inputTag.trim();
      
        if (key === ',' && trimmedInput.length && !note.tagArray.includes(trimmedInput)) {
          e.preventDefault();
    
          //setTags([...tag, trimmedInput]);
          setNote({...note, tagArray: [...note.tagArray, inputTag]})
          setInputTag('');
        }
        // @ts-ignore
        if (key === "Backspace" && !inputTag.length && note.tagArray.length && isKeyReleased) {
          const tagsCopy = [...note.tagArray];
          const poppedTag = tagsCopy.pop();

          e.preventDefault();

          setNote({...note, tagArray: tagsCopy});
          // @ts-ignore
          setInputTag(poppedTag);
        }
      
        setIsKeyReleased(false);
    };
      
    const onKeyUp = () => {
        setIsKeyReleased(true);
    }
    
    return(
        <div className='todo-list__header'>
                <form className='form'>
                    <div className='todo-list__inputs'>
                            <MyInput placeholder='Title' value={note.title} onChange={onChange} name='title'/>
                            <MyInput placeholder='Body' value={note.body} onChange={onChange} name='body'/>
                            <div className='todo-list__tags'>
                               {note.tagArray.map((item, index) => <div className='tags__container' key={index}>
                                                            {item},
                                                        </div>)}
                            </div>
                                <MyInput placeholder='Tags'
                                        value={inputTag} 
                                        onChange={onChangeTag} 
                                        onKeyDown={onKeyDown}
                                        onKeyUp={onKeyUp} 
                                        name='tag'/>
                            
                    </div>

                    <div className='todo-list__buttons'>
                        {!isEdit && <MyButton onClick={onClick}>Add Note</MyButton>}
                        {isEdit && <MyButton onClick={onClick}>Edit Note</MyButton>}
                    </div>
                </form>
        </div>
    )
}

export default Header