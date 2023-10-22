import React from 'react'
import { useState } from "react";
import './index.css'
import Button from './Button';
import { Link } from "react-router-dom";

function Home(){
    const [hasError, setHasError] = useState(false);

    if (hasError) {
      throw new Error("Error occured somewhere in the react tree");
    }
  

    return(
        <div className='home-container'>
            <h1>Counter App</h1>
            <div className='home-button'>
            <Link to="/counterpage">
                <Button text="View Counter App" />
            </Link>
            <Link to="/errortest">
                <Button style={{color: 'white', backgroundColor: 'red'}} text="Error Boundary" click={() => setHasError(true)}/>
            </Link>
            <Link to="/errorpage">
                <Button text="404 Page" click={() => setHasError(true)} />
            </Link>
            
            </div>
        </div>
    )
}

export default Home;