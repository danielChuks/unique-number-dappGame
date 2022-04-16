import React from 'react'
import './AccInfo.css'
import { Link } from 'react-router-dom'


const AccInfo = () => {
    return(
        <>
            <div className='accDisplay'>
                <h3 className=''>Enter your contract information</h3>
            </div>
            <div className='area-view '>
                    <div className="w-30">
                        <label for="">Enter your Name</label>
                        <input type="email" className="form-control" id="" placeholder=""/>
                        <label for="">Accept Wager ? </label>
                        <textarea className="form-control" id="" rows="3"></textarea>
                        <label for="">Enter Contract Address</label>
                        <textarea className="form-control" id="" rows="3"></textarea>
                        <Link to='/daemon' ><button className='btn btn-lg btn-success mt-3 submit grow'>Submit</button></Link> 
                    </div>

                </div>      
        </>
    )
}

export default AccInfo;