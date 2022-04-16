import React from "react";
import './CtcInfo.css' 
import { Link } from "react-router-dom";



const CtcInfo = () =>{
    return(
        <>
            <div className='body'>
            <div className='ctcDisplay'>
                <h3 className=''>Create a contract</h3>
                </div>
                <div className='ctc-area-view '>
                    <div className="w-30">
                        <label for="">Enter Your Name</label>
                        <input type="name" className="form-control" id="" placeholder=""/>
                        <label for="">Include Your Wager </label>
                        <textarea className="form-control" id="" rows="3"></textarea>
                        <Link to='/daemon' ><button className='btn btn-lg btn-success mt-3 grow'>Submit</button></Link> 
                    </div>
                </div>     
            </div>
        </>
    )
}


export default CtcInfo;