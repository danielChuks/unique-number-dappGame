import React from 'react';
import IMAGES from './images.js';
import './Card.css'



const Card = ({handleSelect, cardOrder}) => {
    const generateCards = () => {
        let cards = [];

        for (let order of cardOrder) {
            cards.push(
                <div  className='br3 pa3 ma3 grow shadow-5 pointer size'  key={order}>
                        <img 
                            src={IMAGES[order].image} 
                            height='275' 
                            alt='display'
                            onClick = {
                                () => handleSelect(order)
                            }    
                    />  
                </div>
            )
        }

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