import React from 'react'
import './Input.scss';

const Input = ({tipo, placeholder, label}) => {
    return (
        <div className='Input'>
            <label >{label}</label>
            <input type={tipo} placeholder={placeholder}/>
        </div>
    )
}

export default Input;