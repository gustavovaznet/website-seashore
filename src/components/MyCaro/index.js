//MYCARO

//IMPORTING
import React from 'react'
import Carousel from "react-elastic-carousel";
import { Container, Image } from 'react-bootstrap';
import caro1 from '../../assets/caro1.png'
import caro2 from '../../assets/caro2.png'
import caro3 from '../../assets/caro3.png'
import caro4 from '../../assets/caro4.png'
import caro5 from '../../assets/caro5.png'
import caro6 from '../../assets/caro6.png'
import caro7 from '../../assets/caro7.png'
import Item from './style';
import './styles.css';

//BREAKPOINTS
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2 },
    { width: 568, itemsToShow: 3 },
    { width: 868, itemsToShow: 4 },
    { width: 900, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 }
  ];
  
  //MYCARO
  const MyCaro = () => {
    return (
      <>
        <Container fluid>
          <Container>
            <h1 style={{ textAlign:"center" }}>Nossos Parceiros</h1>
            <div className="App">
              <Carousel breakPoints={breakPoints}>
                <Item> <Image src={caro1} height="100%" width="100%" /> </Item>
                <Item> <Image src={caro2} height="100%" width="100%" /> </Item>
                <Item> <Image src={caro3} height="100%" width="100%" /> </Item>
                <Item> <Image src={caro4} height="100%" width="100%" /> </Item>
                <Item> <Image src={caro5} height="100%" width="100%" /> </Item>
                <Item> <Image src={caro6} height="100%" width="100%" /> </Item>
                <Item> <Image src={caro7} height="100%" width="100%" /> </Item>
              </Carousel>
            </div>
            </Container> 
        </Container>
      </>
    );
  }

  export default MyCaro;
