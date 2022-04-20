import React from 'react'
import './FirstContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import image from './images/algo.jpg'
import { Aminations } from '../designComponent/Amination';

const HomeView = () => {
  return (
    <div >
        <Container className='Display text-warning'>
          <Row>
          <div>
                <div className='d-flex justify-content-center text-warning mt-5'>
                   <h6>
                      {`Welcome to the the daemon unique number game, dont be scared we keep you anonymous. the game is simple get our unqiue number and win. `}  
                  </h6>
               </div>
               <Aminations />
          </div>   
          </Row>
        </Container>
        <Container>
        <Row>
            <div className='d-flex justify-content-center mt-5 '>
               <img className ='w-40' src={image} alt={'This is imgae could not display'} />
               <img className ='w-40' src={image} alt={'This is imgae could not display'} />
               <img className ='w-40' src={image} alt={'This is imgae could not display'} />
            </div>
        </Row>
        </Container>
      </div>
  )
}


export default HomeView;