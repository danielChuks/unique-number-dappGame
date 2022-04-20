import React, { Fragment } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(
             <>
               <div className='nav fixed-top bg-black py-3' >
                    <Link to='/' style={{paddingLeft: 13, textDecoration: 'none',  color: ''}}> 
                        <h1 className='brand grow text-warning'> Daemon </h1> 
                    </Link>

                    <Link to='/information' style={{paddingRight: 18, textDecoration: 'none'}}>
                        <button className='navButton btn btn-warning d-flex justify-content-right mt-3 grow'>{'Play Daemon Game '}</button> 
                    </Link>
                </div>
            </> 
       
    ) 
}


export default Navbar;