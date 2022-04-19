import React from "react";
import './Pages.css'
import { Link } from "react-router-dom";


const ConnectionErrorPage = () => {
    return(
        <>
            <div className="errorDisplay">
                <h5>
                    Unable to connect to your account. Please enable popups for this site on your browser and  
                    click <Link to='/information'>here to retry</Link>.
                </h5>
                <h5>
                    <Link to='/mnemonic'>Click here to connect with Mnemonic Key</Link>.
                </h5>
            </div>
        </>
    )
}

export default ConnectionErrorPage;