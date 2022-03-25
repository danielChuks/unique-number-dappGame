import React from 'react';
import Card from './Card';

// //we the below destructioning because cardlist already has access to rebots so all we need to do is import cards
const CardList = ({ uniqueNum }) => {
    return(
        <div>
            {
            uniqueNum.map((unique, i) => {
                //the key help javascript remember which key is which
                return (
                <Card 
                 id={unique[i].id} 
                 name={unique[i].name} 
                 email={unique[i].email}
                 website={unique[i].website}
                 key={i} 
                 />
                );
            }
            )}    
         </div> 

    ) }




export default CardList;