import React from 'react'
import './Input.scss';

const Input = ({tipo, placeholder, label,ref}) => {
    return (
        <div className='Input'>
            <label >{label}</label>
            <input ref={ref}type={tipo} placeholder={placeholder}/>
        </div>
    )
}

export default Input;