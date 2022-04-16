import React from "react";
import HomeView from "../components/homeDisplay/FirstContent";
import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import { updateReach, updateReachBackend } from '../redux/slices/index';


const HomePage = ({reach, reachBackend}) => {
    const [accout, setAccount] = useState({})
    const connectToDefaultAccount = async () => {
        const userAccount =  await reach.getDefaultAccount();
        setAccount(userAccount);
        console.log(userAccount);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateReach(JSON.stringify(reach)));
        dispatch(updateReachBackend(JSON.stringify(reachBackend)));
    },[]);

    return(
        <>
         <HomeView />
        </>
    )
}



export default HomePage;