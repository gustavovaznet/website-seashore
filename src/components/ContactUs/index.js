//CONTACTUS

//IMPORTING
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Col, Row } from 'react-bootstrap';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { RiLinkedinFill } from 'react-icons/ri';
import { CgFacebook } from 'react-icons/cg';
import logoImg from '../../assets/logo.svg'

//CONTACTUS
const ContactUs = () => {
    return(        
        <Container fluid className="contact-us">        
            <Container>                
                <Row>
                    <Col xs={12} md={4} className="mb-5 mt-5 ml-3 mr-3">        
                        <Container>
                            <img
                            src={logoImg}
                            width="40%"
                            height="40%"
                            className="d-inline-block align-top brandlogo"
                            alt="React Bootstrap logo"
                            />
                            <p className="text-white mt-3 mb-2">
                            SSR Acessoria e Sistemas<br />
                            CNPJ 99.999.999/0001-99<br />
                            Av das Palmeiras n° 5252 Diadema-SP
                            </p>
                            <p className="mt-3">
                            <a href="/" className="mr-3"><FiInstagram size={20} style={{ color:'white' }} /></a>
                            <a href="/" className="mr-3"><RiLinkedinFill size={20} style={{ color:'white' }} /></a>
                            <a href="/" className="mr-3"><FiTwitter size={20} style={{ color:'white' }} /></a>
                            <a href="/" className="mr-3"><CgFacebook size={20} style={{ color:'white' }} /></a>
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={2} className="mb-5 mt-5 ml-3 mr-3">
                        <Container>
                            <h6>Links Ùteis</h6>                            
                            <ul>
                                <li><a href="/">Downloads</a></li>
                                <li><a href="/">Plataformas</a></li>
                                <li><a href="/">Termos de uso</a></li>
                                <li><a href="/">Planos</a></li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={12} md={2} className="mb-5 mt-5 ml-3 mr-3">
                        <Container>
                            <h6>SAC</h6>                            
                            <ul>
                                <li><a href="/">Suporte</a></li>
                                <li><a href="/">Dúvidas</a></li>
                                <li><a href="/">Reclamações</a></li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={12} md={2} className="mb-5 mt-5 ml-3 mr-3">
                        <Container>
                            <h6>Cultura</h6>                            
                            <ul>
                                <li><a href="/">História</a></li>
                                <li><a href="/">Imprensa</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Carreiras</a></li>
                            </ul>
                        </Container>
                    </Col>
                </Row>       
            </Container>
        </Container>
    );
}

export default ContactUs;
