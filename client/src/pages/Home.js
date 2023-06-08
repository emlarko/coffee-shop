import React from "react";
import styled from 'styled-components'
import { Container } from "../Styled";
import { HomeRow } from "../Styled"
import { Col } from "../Styled"
import Cappuccino from '../assets/cappuccino.jpg'
import Martini from '../assets/espresso-martini.jpg'
import Map from '../components/Map'


const Image = styled.img `
  width: 100%;
  position: relative;
`
const Title = styled.div `
font-family: "Bebas Neue", sans-serif;
padding: 10px;
position: absolute;
display: flex;
flex-direction: column;
color: white;
  @media screen and (min-width: 1201px){
    & h1 {
      font-size: 120px;
    }
    & h3 {
      font-size: 80px;
    }
  }
  @media screen and (max-width: 1200px) {
    & h1 {
      font-size: 100px;
    }
    & h3 {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 1024px){
    & h1 {
      font-size: 80px;
    }
    & h3 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 768px){
    & h1 {
      font-size: 50px;
    }
    & h3 {
      font-size: 30px;
    }
  }
`

const Home = () => {
  return (
    <Container>
      <HomeRow>
        <Image src={Cappuccino}/>
        <Title>
          <h1>Brunch</h1>
          <h3>Coffee / Breakfast / Cake</h3>
        </Title>
        </HomeRow>
        <HomeRow>
        <Image src={Martini}/>
        <Title>
          <h1>Weekend Evening</h1>
          <h3>Craft Beer / Cocktails / Street Food</h3>
        </Title> 
        </HomeRow>
        <HomeRow>
          <Col size={1}>
          <h1>Opening Times</h1>
          <ul>
            <li>Monday - Thursday   8:30am - 4pm</li>
            <li>Friday  8:30am - 10:00pm</li>
            <li>Saturday 9am - 10:00pm</li>
            <li>Sunday  9am - 3pm</li>
            <li>Brunch is served Wednesday - Sunday 9am - 2pm</li>
          </ul>
          </Col>
          <Col size={1}>
            
          <Map />
          
          </Col>
        </HomeRow>
        
      </Container>
  )
};

export default Home;
