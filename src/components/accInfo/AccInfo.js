import React, { useState, useEffect } from 'react'
import './AccInfo.css'
import { Link, useNavigate } from 'react-router-dom'
import selectors from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import interact from '../../utils/interact';
import Loading from '../loadingScreen/Loading';
import { updatePromise, updateCurrentPlayer, updateIsToPlay } from '../../redux/slices';

// import ErrorScreen from '../errorScreen/ErrorScreen'



const AccInfo = () => {
    const [contractField, setContractField] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reachBackend = useSelector(selectors.selectReachBackend);
    const account = useSelector(selectors.selectAccount);
    const currentPlayer = useSelector(selectors.selectCurrentPlayer)

    const handleChange = (event) => {
        setContractField(event.target.value);
        setDisplayError(false)
    }

    const acceptWager = (wager) => {
        alert('Accept wager of ' + wager+ '?');
    }

    const getCard = async () => {
        dispatch(updateIsToPlay(true));
        return await new Promise((resolve) => {
            dispatch(updatePromise(resolve));
        })
    }

    // const viewResult = (result) => {
    //     if (result == 0) {
    //         if (currentPlayer === "Klaus") {
    //             navigate('/win');
    //         }
    //         else {
    //             navigate('/lose');
    //         }
    //     }
    //     else if (result == 1) {
    //         alert("It is a draw! Playing another round to determine winner.")
    //     }
    //     else if (result == 2){
    //         if (currentPlayer === "Klaus") {
    //             navigate('/win');
    //         }
    //         else {
    //             navigate('/lose');
    //         }
    //     }
    //     else {
    //         alert(result);
    //     }
    // }

    const viewResult = (result) => {
        if (result == 0) {
            navigate('/lose');
        }
        else if (result == 1) {
            alert("It is a draw! Playing another round to determine winner.");
        }
        else if (result == 2){
            navigate('/win');
        }
        else {
            alert(result);
        }
    }


    const onSubmit = async () => {
        try {
            setIsLoading(true);
            dispatch(updateCurrentPlayer("Elena"))

            const contract = await account.contract(reachBackend, JSON.parse(contractField));

            const interacInterface = {
                ...interact,
                getCard,
                acceptWager,
                viewResult,
            };

            reachBackend.Elena(contract, interacInterface);

            navigate('/daemon');
        }
        catch(error) {
            setIsLoading(false);
            setDisplayError(true);
        }

    }

    return (
        <>
            <div className='accDisplay text-warning'>
                <h3 className=''>Enter your contract information</h3>
            </div>
            <div className='area-view text-warning'>
                <div className="w-30">
                
                    <label for="">Enter Contract Address</label>
                    <textarea 
                        onChange={handleChange} 
                        className="form-control" 
                        id="" 
                        rows="3"
                        value={contractField}
                    ></textarea>
                    {
                        displayError?
                            <p style={{color: 'red'}}><small>*Inavlid contract address.</small></p>
                            :
                            null
                    }
                    

                    <button className='btn btn-warning mt-3 grow' onClick={onSubmit}>Submit</button>
                </div>

            </div>

            <Loading isLoading={isLoading}/>
        </>
    )
}

export default AccInfo;