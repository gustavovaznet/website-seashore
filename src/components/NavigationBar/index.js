//NAVIGATION BAR

//IMPORTING
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Navbar, Nav, Container  } from 'react-bootstrap';
import logoImg from '../../assets/logo.svg';

//NAVIGATIONBAR
const NavigationBar = () => {
    return(       
      <Container fluid className="navbg">
        <Container>
          <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
          <Navbar.Brand>
          <img
            src={logoImg}
            width="50%"
            height="50%"
            className="d-inline-block align-top brandlogo"
            alt="Logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">            
            </Nav>
            <Nav>
              <button type="button" className="mt-2 mr-2 mb-2 ml-2 btn-download" >
                <Nav.Link>Download</Nav.Link>
              </button>            
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    );
}

export default NavigationBar;
