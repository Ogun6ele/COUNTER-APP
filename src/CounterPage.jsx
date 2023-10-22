import React from 'react'
import { useState } from 'react'
// import './index.css'
import Button from "./Button"
import useCounter from './Hooks/useCounter'
import { Link } from "react-router-dom";

function CounterPage(){
    const { count, increment, decrement, handleReset, setValue} = useCounter(0);
    const[newCount, setNewCount] = useState("");

    function handleOnChange(e){
        
            setNewCount(e.target.value);
            e.target.value = newCount;
        
    }

    function handleOnClick() {
        setValue(newCount);
        setNewCount("");
    }
    return (
        <>
        <div className='counter-container'>
            <h1>Counter</h1>
            <div className='display'>{count}</div>
            <div className="counter-button">
            <Button click={increment} text="increment" />
            <Button click = {handleReset} text="reset" />
            <Button click={decrement} text="decrement" />
            <input value={newCount} onChange={handleOnChange} type='number' placeholder="Input Number" min={-999999} max={999999}></input>
            <Button  click={handleOnClick} text="Display Inputted Number"/>
            </div>
        </div>
        <div className='home-page'>
        <Link to='/'>
            <button  className='homepage-btn'>Back to Homepage</button>
        </Link>
        </div>
        </>
    )
}

export default CounterPage;