import React from "react";

const Scroll = ({children}) => {
    return(
        <div style={{overflow: 'scroll', border: '2px solid black', height: '950px'}}>
            {children}
        </div>
    )
}

export default Scroll;