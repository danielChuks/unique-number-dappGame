import React from "react";
import HomeView from "../components/contents/FirstContent";
import { useState, useEffect } from "react";



const HomePage = ({reach, reachBackend}) => {
    const [accout, setAccount] = useState({})
    const connectToDefaultAccount = async () => {
        const userAccount =  await reach.getDefaultAccount();
        setAccount(userAccount)
        console.log(userAccount);
    }
    useEffect(() =>{
        connectToDefaultAccount();
    },[]);

    return(
        <>
         <HomeView />
        </>
    )
}



export default HomePage;