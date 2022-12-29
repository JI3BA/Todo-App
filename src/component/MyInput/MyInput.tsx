import '../../styles/MyInput.scss'

export interface InputProps{
    placeholder: string,
    value: string,
    name?: string,
    onChange: React.ChangeEventHandler,
    onKeyDown?: React.KeyboardEventHandler,
    onKeyUp?: React.KeyboardEventHandler,
    onBlur?: React.FocusEventHandler,
}


const MyInput = ({placeholder, value, name, ...rest}: InputProps) => {
    return(
        <input className='input' type='text' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}

export default MyInput