import '../../../styles/MyInput.scss'
import { InputProps } from '../MyInput'


const MyInputTags = ({placeholder, value, name, ...rest}: InputProps) => {
    return(
        <input className='input__tags' type='text' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}

export default MyInputTags