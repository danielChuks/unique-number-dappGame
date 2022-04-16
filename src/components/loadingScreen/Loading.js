import React from "react";
import './Loading.css';



const Loading = ({ isLoading }) => {
    const loadContainerClassName = isLoading ? 'load-container' : 'hide'
    return(
        <>
            <div className={loadContainerClassName}>
                <div className="load"></div>
            </div>
        </>
    )
}

export default Loading;