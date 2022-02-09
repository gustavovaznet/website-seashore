//HEROSECTION

//IMPORTING
import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Row, Col, Image  } from 'react-bootstrap';
import phone1 from '../../assets/phone1.gif'

//HEROSECTION
const HeroSection = () => {
    return(        
        <Container fluid className="hero-bg">
            <Container>
                <Row >
                    <Col xs={{ order: 'first', span: 12 }}  md={{ order: 'first', span: 6 }} >
                        <h1 className="text-white slogan-1">Mais <span className="typical" >desempenho </span> e <span className="typical" >segurança</span> pra você<br/>
                        ao navegar na web</h1>
                        <h6 className="text-white slogan-3">Navegue na web com velocidade, sem anuncios e propagandas porém ao mesmo tempo mais protegido.</h6>                  
                        <button type="button" onclick="" className="mt-3 mr-2 mb-2 ml-2 btn-more" >
                            <Nav.Link href="" className="btn-mr">Saiba mais</Nav.Link>
                        </button>
                    </Col>                
                    <Col xs={{ order: 'last', span: 12 }}  md={{ order: 'last', span: 6 }} >                    
                        <Image  src={phone1} className="phone1" />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default HeroSection;
