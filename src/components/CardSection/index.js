//CARDSECTION

//IMPORTING
import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import MyCard from '../MyCard';

//CARDSECTION
const CardSection = () => {
    return(       
        <Container fluid className="card-sec">
        <Container >        
            <h1 className="text-center card-sec-heading">Vantagens que você só encontrará no nosso App:</h1>
            <Row className="mt-5">
            <Col xs={12} md={4} className="d-flex justify-content-center" >            
                <MyCard
                emoji="🚀"
                heading="Mais desempenho"
                content="Aumente o desempenho da sua nevegação e de todas as pesquisas.
                Elimine proagandas e anúncios indesejáveis, inclusive restringindo a necessidade de aceite de cookies dos sites visitados."
                />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center" >
                <MyCard
                emoji="🔒"
                heading="Segurança"
                content="Você sem preocupações com segurança.
                Nosso app aumenta a segurança na sua navegação bloqueando sites maliciosos e evitando problemas no seu Android."
                />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center" >            
                <MyCard
                emoji="🤝"
                heading="Comunidade"
                content="Somos mais de 150mil.
                São milhares de usuários pelo mundo usando o Seashore, temos uma extensa e unida comunidade."
                />
            </Col>
          </Row>        
        </Container>
        </Container>
    );
}

export default CardSection;
