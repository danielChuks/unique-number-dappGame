import Navbar from './components/navbar/Navbar'
import './App.css';
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage';
import Error from './pages/ErrorPage';
import Scroll from '../src/components/Scroll';
import Daemon from './pages/DaemonGame';

function App() {
  return (
   
      <>
       <Router>
        <Navbar /> 
            <Scroll>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/daemon' element={<Daemon />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes> 
        </Scroll>
      </Router>
    </>
   
  );
    
}

export default App;
