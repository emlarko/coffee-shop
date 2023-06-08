import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import styled from 'styled-components'
import { Container, Row } from "../Styled";

import Oddkin from "../assets/oddkin-logo.webp"

const Background = styled.div`
  background-color: #efe5da;
`

const Image = styled.img `
  width: 30%;
  margin: 5px auto;
`
const Description = styled.div`
  margin: 0px auto;
  text-align: center;
  font-size: 20px;
  width: 90%;
`

const Shop = () => {
    return (
      <Background>
      <Container>
        <Row><Cart />
        <Image src ={Oddkin}/>
        </Row>
        <Description>
        <p>
          Discover a collection of the very best specialty coffee - sourced, roasted and packed with love by us in Bristol. <br />
          Our specialty coffees come from seven origin countries around the world. <br />
          Each bean has been grown at optimal altitudes in tropical climates, using traditional and experimental coffee processing methods to make the highest quality single origin coffees.
        </p>
        </Description>
        <CategoryMenu />
        <ProductList />
        </Container>
      </Background>
    );
  };
  
  export default Shop;