import React from 'react'
import { useState } from 'react'
import './index.css'

function Button(props){
    return (
        <button onClick={props.click}>{props.text}</button>
    )
}

export default Button;