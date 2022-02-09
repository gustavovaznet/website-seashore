//FEATURED

//IMPORTING
import React from 'react'
import MyCaro from '../MyCaro'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

//FEATURED
const Featured = () => {
    return(
        <Container className="mt-5 mb-5 featured">
        <MyCaro />
        </Container>
    );
}

export default Featured;
