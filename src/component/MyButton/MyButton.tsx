import React from "react";
import '../../styles/MyButton.scss'
import '../../fonts/Fonts.scss'

interface ButtonProps{
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

const MyButton = ({children, onClick, ...rest}: ButtonProps) => {
    return(
            <button className="button" onClick={onClick} {...rest} >{children}</button>
    )
}

export default MyButton