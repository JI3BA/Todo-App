import '../../styles/MyInput.scss'

interface InputProps{
    placeholder: string,
    value?: string,
    name?: string,
    onChange?: React.ChangeEventHandler,
    onKeyDown?: React.KeyboardEventHandler,
}


const MyInput = ({placeholder, value, name, ...rest}: InputProps) => {
    return(
        <input className='input' type='text' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}

export default MyInput