//WHATWEOFFER

//IMPORTING
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import feature from '../../assets/feature1.gif'

//WHATWEOFFER
const WhatWeOffer = () => {
    return(       
        <Container fluid className="wwo-sec">
            <Container className="sub-section">
                <Row className="mt-5">
                    <Col xs={{ order: 'first', span: 12 }}  md={{ order: 'first', span: 6 }} >
                        <Image  src={feature} height="80%" className="feature" />
                    </Col>
                    <Col xs={{ order: 'last', span: 12 }}  md={{ order: 'last', span: 6 }} className="test" >                    
                        <h1>Sabia que pode usar nosso app gratuitamente? Veja só os nossos planos:</h1><br />
                        <h6>
                            <ul>
                                <li>Versão gratuita de teste por 30 dias</li><br />
                                <li>Licença Plus por apenas R$ 7,99 por mensal</li><br />
                                <li>Licença Silver por apenas R$ 12,99 mensal</li><br />
                                <li>Licença Gold completa por apenas R$ 18,99 mensal</li>                             
                            </ul>
                        </h6>    
                    </Col>
                </Row>        
            </Container>
        </Container>
    );
}

export default WhatWeOffer;
