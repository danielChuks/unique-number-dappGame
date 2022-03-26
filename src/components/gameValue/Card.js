import React from 'react';
import IMAGES from './images.js';
import './Card.css'


const Card = () =>{
    return (
        <div className='view'>
         
             {/* IMAGES && IMAGES.map((item) => 
                 <div key={item.id}>
                    <img src={item.image} className='' alt='display'/>  
                 </div>
             ) */}
             <img src={IMAGES[0]} alt='dis' />
         
        </div>
        
    )
}

export default Card;