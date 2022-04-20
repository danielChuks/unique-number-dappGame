import React, {useState, useEffect} from "react";
import './Information.css'
import { Link, useNavigate } from "react-router-dom";
import Loading from "../loadingScreen/Loading";
import { useSelector, useDispatch } from 'react-redux'
import selectors from "../../redux/selectors";
import { updateAccount } from "../../redux/slices";

const Information = () => {
    const [isloading, setIsloading] = useState(true);
    const navigate = useNavigate();
    const reach = useSelector(selectors.selectReach);
    const dispatch = useDispatch();
    const connectedWithMnemonic = useSelector(selectors.selectConnectedWithMnemonic);

    const connectAccount = async () => {
        try {
            const account = await reach.getDefaultAccount();
            dispatch(updateAccount(account));;
            setIsloading(false);
        } catch (error) {
            navigate('/connection-error');
        }
    }

    useEffect(() =>{
        if (!connectedWithMnemonic) {
            connectAccount();
        }
        else {
            setIsloading(false);
        }
    }, [])
    return(
            <>
                <div className="display">
                    <h1 className="content text-warning">How would you like to play </h1>
                </div>
                <div className="buttonDiv">
                    <Link to='/ctc-info'><button className="btn btn-warning py-3 button grow"> Create a new game</button></Link>
                    <Link to='/acc-info'><button className="btn btn-warning py-3 buttonStyle grow">Join existing game</button></Link>
                </div>
                <Loading isLoading={isloading}/>
            </>

    )
}



export default Information;