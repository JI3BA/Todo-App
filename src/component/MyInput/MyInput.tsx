import '../../styles/MyInput.scss'

interface InputProps{
    placeholder: string
}


const MyInput = ({placeholder}: InputProps) => {
    return(
        <input className='input' type='text' placeholder={placeholder}/>
    )
}

export default MyInput