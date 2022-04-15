import React from 'react'
import './FirstContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import image from './images/baner.jpg'
import { Aminations } from '../designComponent/Amination';

const HomeView = () => {
  return (
    <div >
        <Container className='Display'>
          <Row>
           <Aminations />
          </Row>
        </Container>
        <Container>
        <Row>
            <div className='d-flex justify-content-center mt-5'>
               <img src={image} alt={'This is imgae could not display'} />
            </div>
        </Row>
        </Container>
        <Container>
        <Row>
            <div className='d-flex justify-content-center mt-5 mx-auto'>
                  <p>{`Welcome to the the daemon unique number game, dont be scared we keep you anonymous. the game is simple get our unqiue number and win. `} </p>
            </div>
        </Row>
        </Container>
      </div>
  )
}


export default HomeView;