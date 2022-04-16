import React from 'react';
import IMAGES from './images.js';
import './Card.css'



const Card = () => {
    return (
        <div className='view'>
         {  
             IMAGES && IMAGES.map((item) => 
                 <div  className='br3 pa3 ma3 grow shadow-5 pointer size' key={item.id}>
                    <img src={item.image} height='275' alt='display'/>  
                 </div>
             )
         }  
        </div>
    )
}
export default Card;