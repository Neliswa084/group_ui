import React from 'react'
import button from './Button.module.css'

interface ButtonProps{
    text: string;
    style?: React.CSSProperties;
    className?: string;

}

export const Button: React.FC<ButtonProps> = ({ text, style, className}) => {
  return (
    
  
        <button className={`${button.btn} ${className || ""}`} style={style}>
            {text}
            </button>
        

    
        
   
    
  )
}
