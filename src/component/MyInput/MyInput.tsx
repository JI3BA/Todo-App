import '../../styles/MyInput.scss'

interface InputProps{
    placeholder: string,
    value?: string,
    onChange?: React.ChangeEventHandler,
    onFocus?: React.FocusEventHandler
}


const MyInput = ({placeholder, value, ...rest}: InputProps) => {
    return(
        <input className='input' type='text' placeholder={placeholder} value={value} {...rest}/>
    )
}

export default MyInput