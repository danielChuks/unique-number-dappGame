import React, { useState, useEffect } from 'react'
import './AccInfo.css'
import { Link } from 'react-router-dom'
// import ErrorScreen from '../errorScreen/ErrorScreen'



const AccInfo = () => {
    const [contractFiled, setContractField] = useState('')
    const [wager, setWager] = useState('')

    console.log(wager)

    return (
        <>
            <div className='accDisplay'>
                <h3 className=''>Enter your contract information</h3>
            </div>
            <div className='area-view '>
                <div className="w-30">
                
                    <label for="">Enter Contract Address</label>
                    <textarea onChange={event => setContractField(event.target.value)} 

                    className="form-control" id="" rows="3"></textarea>

                    <Link to='/daemon'><button className='btn btn-success mt-3 grow'>Submit</button></Link>
                </div>

            </div>
        </>
    )
}

export default AccInfo;