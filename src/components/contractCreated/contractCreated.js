import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateContractAddress, updatePromise, updateCurrentPlayer, updateIsToPlay } from '../../redux/slices';
import './AccInfo.css'
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../loadingScreen/Loading";
import selectors from '../../redux/selectors';
import Interact from '../../utils/interact';


const ContractCreated = () => {
    const dispatch = useDispatch();
    const contractAddress = useSelector(selectors.selectContractAddress);
    const wager = useSelector(selectors.selectWager);
    const account = useSelector(selectors.selectAccount);
    const reachBackend = useSelector(selectors.selectReachBackend);
    const currentPlayer = useSelector(selectors.selectCurrentPlayer)
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const createContract = async () => {
        const getCard = async () => {
            dispatch(updateIsToPlay(true))
            return await new Promise((resolve) => {
                if (!/daemon/.test(window.location.href)){
                    navigate('/daemon');
                }

                dispatch(updatePromise(resolve));
            })
        }

        const viewResult = (result) => {
            if (result === 0) {
                if (currentPlayer === "Klaus") {
                    navigate('/win');
                }
                else {
                    navigate('/lose');
                }
            }
            else if (result == 1) {
                alert("It is a draw! Playing another round to determine winner.")
            }
            else if (result == 2){
                if (currentPlayer === "Klaus") {
                    navigate('/lose');
                }
                else {
                    navigate('/win');
                }
            }
            else {
                alert(result)
            }
        }

        const random = () => {
            return Math.floor((Math.random() * 1000))
        }

        const interactInterface = {
            ...Interact,
            getCard,
            wager,
            deadline: 120,
            random,
            viewResult,
        };

        const contract = account.contract(reachBackend);
        reachBackend.Klaus(contract, interactInterface);

        const address = JSON.stringify(await contract.getInfo());

        dispatch(updateContractAddress(address));
        dispatch(updateCurrentPlayer("Klaus"));

        setIsLoading(false);
    }

    useEffect(() => {
        createContract();
    }, [])

    return (
        <>
            <div className='accDisplay'>
                <h3 className=''>Give the following contract information to the second player</h3>
            </div>
            <div className='area-view '>
                <div className="w-30">
                
                    <label for="">Contract Address</label>
                    <textarea  
                        className="form-control" id="" rows="3"
                        value={contractAddress}
                        readOnly={true}

                    ></textarea>

                    
                </div>

            </div>
            <Loading isLoading={isLoading}/>
        </>
    )
}

export default ContractCreated;