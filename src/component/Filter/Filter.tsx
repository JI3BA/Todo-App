import {ChangeEvent, FC, useEffect, useMemo, useState} from 'react'
import MyInput from '../MyInput/MyInput'
import '../../styles/Filter.scss'
import { filterTag, useNote } from '../../context'

const Filter: FC = () => {
    const {filtered, setFilter} = useNote()

    const onChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value)
    }

    return(
        <div className='filter__container'>
            <div> 
                <p className="filter__line"></p>
            </div>
            <div>
                <MyInput placeholder='Search' value={filtered} onChange={onChangeFilter}/>
            </div>
            <div>
                <p className="filter__line"></p>
            </div>
        </div>
    )
}

export default Filter