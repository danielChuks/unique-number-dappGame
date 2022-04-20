import React from "react";
import './Pages.css'
import { Link } from "react-router-dom";


const ConnectionErrorPage = () => {
    return(
        <>
            <div className="errorDisplay text-warning">
                <p>
                    Unable to connect to your account. Please enable popups for this site on your browser and click <Link to='/information'>here to retry</Link>.
                </p>
            </div>
            <div className="text-warning errorDisplay1">
                <p>
                    Do you have a mnemonic key <Link to='/mnemonic'>Click here to connect with Mnemonic Key</Link>.
                </p>
            </div>
        </>
    )
}

export default ConnectionErrorPage;