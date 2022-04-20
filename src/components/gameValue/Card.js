import React from 'react';
import IMAGES from './images.js';
import './Card.css'



const Card = ({handleSelect, cardOrder, valueOrder}) => {
    const generateCards = () => {
        let cards = [];

        cardOrder.forEach((order, index) => {
            cards.push(
                <div  className='br3 pa3 ma3 grow shadow-5 pointer size'  key={order}>
                        <img 
                            src={IMAGES[order].image} 
                            height='275' 
                            alt='display'
                            onClick = {
                                () => handleSelect(valueOrder[index])
                            }    
                    />  
                </div>
            )
        })

        return cards
    }
    return (
        <>

            <div className='Cards'>
                {
                    generateCards()
                }
            </div>
        </>
    )
}
export default Card;