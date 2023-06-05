import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import styled from 'styled-components'
import { Container } from "../Styled";

import Oddkin from "../assets/oddkin-logo.webp"

const Image = styled.img `
  width: 30%;
  margin: 5px auto;
`
const Description = styled.div`
  margin: 5px auto;
  text-align: center
`

const Shop = () => {
    return (
      <Container>
        <Image src ={Oddkin}/>
        <Description>
        <p>
          Discover a collection of the very best specialty coffee - sourced, roasted and packed with love by us in Bristol. <br />
          Our specialty coffees come from seven origin countries around the world. <br />
          Each bean has been grown at optimal altitudes in tropical climates, using traditional and experimental coffee processing methods to make the highest quality single origin coffees.
        </p>
        </Description>
        <CategoryMenu />
        <ProductList />
        <Cart />
      </Container>
    );
  };
  
  export default Shop;