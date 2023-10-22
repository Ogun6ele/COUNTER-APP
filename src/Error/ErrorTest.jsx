import React from "react";
import { Link } from "react-router-dom";
import '../index.css';
import Button from "../Button";


function ErrorTest() {
	const throwError = () => {
		throw new Error("=====ERROR======");
	};

	return (
		
        <div className="error-test">
			<h1 style={{color: "red"}}>The page you're looking for does not exist.</h1>
            <p  >Click on link below to return home</p>

			<Link to="/">
                <Button text="Back to Homepage" style={{color: "white", backgroundColor: "red"}}/>
            </Link>
        </div>

           
			
		
	);
}

export default ErrorTest;