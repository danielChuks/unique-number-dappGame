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
    const [cardOrder, setCardOrder] = useState([0, 1, 2, 3])
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

    const shuffleCards = () => {
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

        setCardOrder([first, second, third, fourth]);
        console.log([first, second, third, fourth])
    }

    return(
        <>
            <div className="layout">
                <h4>{'Welcome to the Daemon game.'}</h4>
                <p>
                    { isToPlay? 'It is your turn, pick a card' : 'Hold on...' }
                </p>
                <p>
                    { displayCard? `You played the card ${cardPlayed}` : '' }
                </p>
                <Card 
                    handleSelect={handleGamePlay}
                    cardOrder={cardOrder}
                />
            </div>
        </>
    )
}


export default DaemonGame;