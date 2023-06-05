import React from "react";
import styled from 'styled-components'
import { Container } from "../Styled";
import { Row } from "../Styled"
import { Col } from "../Styled"
import Cappuccino from '../assets/cappuccino.jpg'
import Martini from '../assets/espresso-martini.jpg'

const Image = styled.img `
  width: 100%;
  position: relative;
`
const Title = styled.div `
  padding: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  color: white;
`

const Home = () => {
  return (
    <Container>
      <Row>
        <Image src={Cappuccino}/>
        <Title>
          <h1>Brunch</h1>
          <h3>Coffee / Breakfast / Cake</h3>
        </Title>
        </Row>
        <Row>
        <Image src={Martini}/>
        <Title>
          <h1>Weekend Evening</h1>
          <h3>Craft Beer / Cocktails / Street Food</h3>
        </Title> 
        </Row>
        <Row>
          <Col size={1}>
          <h3>Opening Times</h3>
          <ul>
            <li>Monday - Thursday   8:30am - 4pm</li>
            <li>Friday  8:30am - 10:00pm</li>
            <li>Saturday 9am - 10:00pm</li>
            <li>Sunday  9am - 3pm</li>
            <li>Brunch is served Wednesday - Sunday 9am - 2pm</li>
          </ul>
          </Col>
        </Row>
      </Container>
  )
};

export default Home;
