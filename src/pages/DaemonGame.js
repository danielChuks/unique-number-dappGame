import React from "react";
import Card from '../components/gameValue/Card'




const DaemonGame = () => {
    return(
        <>
            <div className="layout">
                <h4>{'Welcome to the Daemon game pick a card find the unique number'}</h4>
                <Card />
            </div>
        </>
    )
}


export default DaemonGame;