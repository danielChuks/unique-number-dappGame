import Navbar from './components/navbar/Navbar'
import './App.css';
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage';
import Error from './pages/ErrorPage';
import Daemon from './pages/DaemonGame';



function App ({ reach, reachBackend }){
  return (
   
      <>
       <Router>
        <Navbar /> 
              <Routes>
                <Route path='/' element={<Home reach={reach} reachBackend={ reachBackend } />}></Route>
                <Route path='/daemon' element={<Daemon reach={reach} reachBackend={ reachBackend }/>}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes> 
      </Router>
    </>
   
  );
    
}

export default App;
