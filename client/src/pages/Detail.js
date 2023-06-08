import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

import Oddkin from "../assets/oddkin-logo.webp"

import styled from 'styled-components';
import { Container, Col, Row } from '../Styled'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Background = styled.div`
  background-color: #efe5da;
`

const Logo = styled.img`
  width: 175px;
`

const Banner = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`

const Image = styled.img `
  display: flex;
  width: 500px;
  margin: 0px auto;
  @media screen and (min-width: 1201px){
    width: 700px;
  }
  @media screen and (max-width: 1200px) {
    width: 600px;
  }
  @media screen and (max-width: 1024px){
    width: 400px;
  }
  @media screen and (max-width: 768px){
    width: 400px;
  }
`


const Title = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 50px;
  text-align: center;
`

const Price = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin: 20px;
`

const Description = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 0px auto 0px auto;
  width: 500px;
`

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <Background>
       {cart && currentProduct ? (
        <Container>
          <Banner>
          <Cart />
          <Logo src ={Oddkin}/>
          <Link to="/shop">Back to Products</Link>
          </Banner>
          <Row>
          <Col size={1}>
          <Image
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </Col>
        <Col size={1}>
        <Title>{currentProduct.name}</Title>
      
          <Description>
          <Price>£{currentProduct.price}{' '}</Price>
            <p>{currentProduct.description}</p>
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </Description>
        </Col>
        </Row>
        </Container>
      ) : null}
      {loading ? <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" /> : null}
      
    </Background>
  );
}

export default Detail;
