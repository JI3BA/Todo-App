import {ChangeEvent, FC, useState} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Filter.scss'

const Filter: FC = () => {
    const [filtered, setFiltered] = useState({tag: ''})
    
    const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiltered({tag: event.target.value})
    }

    return(
        <div className='filter__container'>
            <div> 
                <p className="filter__line"></p>
            </div>
            <div>
                <MyInput placeholder='Search' value={filtered.tag} onChange={onChangeFilter}/>
            </div>
            <div>
                <p className="filter__line"></p>
            </div>
        </div> 
    )
}

export default Filter