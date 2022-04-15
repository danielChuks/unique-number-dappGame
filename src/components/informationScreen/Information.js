import React from "react";
import './Information.css'
import { Link } from "react-router-dom";

const Information = () => {
    return(
        <>
            <div className="display">
                <h1 className="content">How would you like to play </h1>
            </div>
            <div className="buttonDiv">
                <Link to='/ctc-info'><button className="btn btn-success py-3 button"> Create a new game</button></Link>
                <Link to='/acc-info'><button className="btn btn-success py-3 buttonStyle">Join existing game</button></Link>
            </div>
        </>

    )
}



export default Information;