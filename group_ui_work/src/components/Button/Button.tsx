import React from 'react'

interface ButtonProps{
    text: string;
    style?: React.CSSProperties;
    className?: string;

}

export const Button: React.FC<ButtonProps> = ({ text, style, className}) => {
  return (
    <div>
    
        {text}
    </div>
  )
}
