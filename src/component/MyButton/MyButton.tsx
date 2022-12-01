import React from "react";
import '../../styles/MyButton.scss'
import '../../fonts/Fonts.scss'

interface ButtonProps{
    children: React.ReactNode
}

const MyButton = ({children}: ButtonProps) => {
    return(
            <button className="button">{children}</button>
    )
}

export default MyButton