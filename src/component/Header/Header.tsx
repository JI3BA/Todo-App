import {FC, useState} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Header.scss'
import MyButton from '../MyButton/MyButton'
import { Note } from '../../context/contexts/NoteContext'
import { useNote } from '../../context/contexts'
import MyInputTags from '../MyInput/MyInputTags/MyInputTags'

interface addHeaderProps{
    mode: 'add',
}

interface EditHeaderProps{
    mode: 'edit',
    editNote: Omit<Note, 'id' | 'checked' | 'filterTag'>,
}

type HeaderProps = addHeaderProps | EditHeaderProps;

const Header: FC<HeaderProps> = (props) => {
    const {addNewNote, changeNote}  = useNote()
    const isEdit = props.mode === 'edit';
    const [note, setNote] = useState(isEdit ? props.editNote : {title: '', body: '', tagArray: []})

    // For HASHTAGS INPUT
    const [inputTag , setInputTag] = useState<string>('')
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    // Valid Form

    const [formValid, setFormValid] = useState<boolean>(false)
    const [nickDirty, setNickDirty] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (isEdit) {
            return changeNote(note);
        }

        addNewNote(note);
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

        const trimmedInput: string = inputTag.trim();
      
        if ((key === ',' || key === 'Enter') && trimmedInput.length && !note.tagArray.includes(trimmedInput)) {
          e.preventDefault();

          setNote({...note, tagArray: [...note.tagArray, inputTag]})
          setInputTag('');
        }
        
        if (key === "Backspace" && !inputTag.length && note.tagArray.length && isKeyReleased) {
          const tagsCopy: string[] = [...note.tagArray];
          const poppedTag: string = tagsCopy.pop()!;

          e.preventDefault();

          setNote({...note, tagArray: tagsCopy});
          
          setInputTag(poppedTag);
        }
      
        setIsKeyReleased(false);
    };
      
    const onKeyUp = () => {
        setIsKeyReleased(true);
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if(e.target.value.length < 2){
            setNickDirty(true)
            setErrorMessage('Add more 2 words')
            setFormValid(false) 
        }else{
            setNickDirty(false)
            setErrorMessage('')
            setFormValid(true) 
        }
    }
    
    return(
        <div className='todo-list__header'>
            <form className='form'>
                <div className='todo-list__inputs'>
                        <MyInput placeholder='Title' value={note.title} onChange={onChange} name='title'/>

                    <div className='input__container'>
                        {nickDirty ? <div className='input__error'>{errorMessage}</div> : <div className='input__none'></div>}
                        <MyInput onBlur={onBlur} placeholder='Body' value={note.body} onChange={onChange} name='body'/>
                    </div>

                    <div className='todo-list__tags'>
                        {note.tagArray.map((item, index) => 
                                                <div className='tags__name' key={index}>
                                                    {item}
                                                </div>)
                        }
                        <MyInputTags placeholder='Tags'
                            value={inputTag} 
                            onChange={onChangeTag} 
                            onKeyDown={onKeyDown}
                            onKeyUp={onKeyUp} 
                            name='tag'/>
                    </div>

                </div>

                <div className='todo-list__buttons'>
                    {!isEdit && <MyButton disabled={!formValid} onClick={onClick}>Add Note</MyButton>}
                    {isEdit && <MyButton disabled={!formValid} onClick={onClick}>Edit Note</MyButton>}
                </div>
            </form>
        </div>
    )
}

export default Header