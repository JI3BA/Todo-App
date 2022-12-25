import {ChangeEvent, FC} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Filter.scss'
import { useNote } from '../../context'

const Filter: FC = () => {
    const {filtered, setFilter} = useNote()

    const onChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value)
    }

    return(
        <div className='filter__container'>
    
            <div>
                <MyInput placeholder='Search by tags' value={filtered} onChange={onChangeFilter}/>
            </div>
            
        </div>
    )
}

export default Filter