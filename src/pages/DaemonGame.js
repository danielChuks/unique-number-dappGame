import React, { useState } from "react";
import Card from '../components/gameValue/Card';
import selectors from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { updateIsToPlay, updatePromise } from "../redux/slices";


/**
 * 
 * @returns this function returns the game value and cards as recieved from the gameValue component.
 */

const DaemonGame = () => {
    const CARDS = ['Ghost', 'Witch', 'Mouse', 'Pawn'];
    const [cardOrder, setCardOrder] = useState(shuffleNumbers());
    const [valueOrder, setValueOrder] = useState(shuffleNumbers());

    const promise = useSelector(selectors.selectPromise);
    const dispatch = useDispatch();
    const isToPlay = useSelector(selectors.selectIsToPlay);
    const [displayCard, setDisplayCard] = useState(false)
    const [cardPlayed, setCardPlayed] = useState(CARDS[0]);
    const currentPlayer = useSelector(selectors.selectCurrentPlayer)

    const handleGamePlay = (value) => {
        try {
            shuffleCards();
            
            promise.resolve(value);
            console.log("You selected "+value);
            dispatch(updateIsToPlay(false));
            dispatch(updatePromise({}));
            setCardPlayed(CARDS[value]);
            setDisplayCard(true);

            // shuffleCards();
            
        } catch(err) {
            alert("It is not your turn to play. Hold on.")
            console.log(err)
        }
    };

    function shuffleNumbers () {
        let first = Math.floor(Math.random() * 3);
        let second = first;

        while (second === first) {
            second = Math.floor(Math.random() * 3);
        }

        let third = second;

        while (third === second || third === first) {
            third = Math.floor(Math.random() * 3);
        }

        let fourth = 6 - (first + second + third);

        return [first, second, third, fourth];
    };


    const shuffleCards = () => {
        setCardOrder(shuffleNumbers());
        setValueOrder(shuffleNumbers());
    }

    
    return(
        <>
            <div className="layout text-warning">
                <h4>{'Welcome to the Daemon game.'}</h4>
                <div className="pt-3 interact">
                   <h5>{ isToPlay? 'It is your turn, pick a card' : 'Hold on...' }</h5> 
                </div>
                <div className="pt-3 interact">
                    { displayCard? `You played the card ${cardPlayed}` : '' }
                </div>
                <Card 
                    handleSelect={handleGamePlay}
                    cardOrder={cardOrder}
                    valueOrder={valueOrder}
                />
            </div>
        </>
    )
}


export default DaemonGame;