import React, { useState } from "react";
import './CtcInfo.css' 
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateWager } from "../../redux/slices";


const CtcInfo = () => {
    const [wager, setWager] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setWager(event.target.value);
    }
    
    const handleSubmit = () => {
        dispatch(updateWager(wager));
        navigate('/contract-created');
    }

    return(
        <>
            <div className='body text-warning'>
            <div className='ctcDisplay'>
                <h3 className=''>Create a contract</h3>
                </div>
                <div className='ctc-area-view '>
                    <div className="w-30">
                        <label for="">Include Your Wager </label>
                        <input type='number' className="form-control" id="wager" value={wager} onChange={handleChange}/>
                        <button className='btn btn-lg btn-warning mt-3 grow' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>     
            </div>
        </>
    )
}


export default CtcInfo;