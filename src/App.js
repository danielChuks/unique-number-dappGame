import Navbar from './components/navbar/Navbar'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage';
import Error from './pages/ErrorPage';
import Daemon from './pages/DaemonGame';
import ConnectionErrorPage from './pages/ConnectionErrorPage';
import Information from './components/informationScreen/Information';
import AccInfo from './components/accInfo/AccInfo';
import CtcInfo from './components/ctcInfo/CtcInfo';
import Loading from './components/loadingScreen/Loading';
import ContractCreated from './components/contractCreated/contractCreated';
import WinerUpdate from './components/winPage/WinerUpdate';
import LoseUpdate from './components/winPage/LoseDate';
import Mnemonic from './components/keyphrase/keyphrase';

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
                <Route path='/contract-created' element={<ContractCreated/>}></Route>
                <Route path='/connection-error' element={<ConnectionErrorPage />}></Route>
                <Route path='/win' element= {<WinerUpdate/>}></Route>
                <Route path='/lose' element={<LoseUpdate/>}></Route>
                <Route path='/mnemonic' element={<Mnemonic/>}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes> 
      </Router>
    </>
   
  );
    
}

export default App;
