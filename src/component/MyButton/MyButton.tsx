import React from "react";
import '../../styles/MyButton.scss'
import '../../fonts/Fonts.scss'

interface ButtonProps{
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const MyButton = ({children, onClick}: ButtonProps) => {
    return(
            <button className="button" onClick={onClick}>{children}</button>
    )
}

export default MyButton