import React from "react";
import Card from '../components/gameValue/Card'


/**
 * 
 * @returns this function returns the game value and cards as recieved from the gameValue component.
 */

const DaemonGame = () => {
    return(
        <>
            <div className="layout">
                <h4>{'Welcome to the Daemon game pick a card and start playing'}</h4>
                <Card />
            </div>
        </>
    )
}


export default DaemonGame;