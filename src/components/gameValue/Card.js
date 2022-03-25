import React from 'react';


const Card = ({email, id, website}) =>{
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw shadow-5'>
            <img alt='photos' src ={`https://robohash.org/v${id}?200x200`} />
            <div>
                <h3>{email}</h3>
                <p>{email}</p>
                <p>{website}</p>
            </div>
        </div>
    )
}

export default Card;