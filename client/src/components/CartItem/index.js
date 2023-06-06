import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Image = styled.img `
  width: 100px;
  padding: 0;
  margin: 0 .5rem 1rem 0;
`
const Icon =styled.span`
  font-size: 25px;
  cursor: pointer;
  color: grey;
  &:hover {
      color: #217262;
  }
`
const Qty = styled.input`
  font-size: 18px;
  width: 20%;
  margin: 10px;
`

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div>
      <div>
        <Image
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <Qty
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <Icon
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Icon>
        </div>
      </div>
    </div>
  );
}

export default CartItem;