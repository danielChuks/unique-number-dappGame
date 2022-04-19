import React from "react";
import HomeView from "../components/homeDisplay/FirstContent";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { updateReach, updateReachBackend } from '../redux/slices/index';
import Selector from '../redux/selectors'


const HomePage = ({reach, reachBackend}) => {
    const [accout, setAccount] = useState({})

    const connectToDefaultAccount = async () => {
        const userAccount =  await reach.getDefaultAccount();
        setAccount(userAccount);
        console.log(userAccount);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(reach)
        dispatch(updateReach(reach));
        dispatch(updateReachBackend(reachBackend));
    },[]);

    return(
        <>
         <HomeView />
        </>
    )
}



export default HomePage;