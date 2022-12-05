import {FC} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Filter.scss'


const Filter: FC = () => {
    return(
        <div className='filter__container'>
            <div> 
                <p className="filter__line"></p>
            </div>
            <div>
                <MyInput placeholder='Search'/>
            </div>
            <div>
                <p className="filter__line"></p>
            </div>
        </div> 
    )
}

export default Filter