import Navbar from './components/navbar/Navbar'
import './App.css';
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage';
import Error from './pages/ErrorPage';
import Daemon from './pages/DaemonGame';
import Information from './components/informationScreen/Information';
import AccInfo from './components/accInfo/AccInfo';
import CtcInfo from './components/ctcInfo/CtcInfo';
import Loading from './components/loadingScreen/Loading'


function App ({ reach, reachBackend }){
  return (
      <>
       <Router>
        <Navbar /> 
              <Routes>
                <Route path='/' element={<Home reach={reach} reachBackend={ reachBackend } />}></Route>
                <Route path='/information' element= {<Information/>}> </Route>
                <Route path='acc-info' element= {<AccInfo />}></Route>
                <Route path='ctc-info' element={<CtcInfo/>}></Route>
                <Route path='loading' element={<Loading/>}></Route>
                <Route path='/daemon' element={<Daemon reach={reach} reachBackend={ reachBackend }/>}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes> 
      </Router>
    </>
   
  );
    
}

export default App;
