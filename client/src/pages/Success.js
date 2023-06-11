import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import styled from 'styled-components';

const Container = styled.div`
  height: 560;
  clear: both; 
  padding-top: 120; 
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  & h1 {
    font-size: 60px;
  }
`


function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Container>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Container>
    </div>
  );
}

export default Success;