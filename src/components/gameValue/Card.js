import React from 'react';
import IMAGES from './images.js';
import './Card.css'


const handleClicked = () => {
   const name = prompt("Who are you ??")
    if(name === 'Alice'){
        return prompt(`hello ${name}`)
    }else{
        return prompt(`${name} You are not a member!`)
    }
}

const Card = () =>{
    return (
        <div className='view'>
         {  
             IMAGES && IMAGES.map((item) => 
                 <div  className='br3 pa3 ma3 grow shadow-3 pointer size' key={item.id}>
                    <img onClick={handleClicked} src={item.image} height='275' alt='display'/>  
                 </div>
             )
         }  
        </div>
    )
}
export default Card;