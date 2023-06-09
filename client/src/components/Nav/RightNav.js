import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  display:flex;
  flex-flow: colum nowrap;
  z-index: 10;
  display: none;


  a {
    padding: 0 1.2rem;
    line-height: 5;
    font-family: "Bebas Neue", sans-serif;
    font-size: 25px;
    height:100vh;
    &:hover {
        color: #217262;
        cursor: pointer;
      }
      &.active {
        text-decoration: underline;
      }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #efe5da;
    color:black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: black;
      
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/" activeStyle>
            Home
          </Link></li> 
          <li><Link to="/menu" activeStyle>
            Menu
          </Link></li> 

          <li>
            <Link to="/contact" activeStyle>
            Contact
          </Link>
          </li>
          <li><Link to="/shop" activeStyle>
            Shop
          </Link></li> 
    </Ul>
  )
}

export default RightNav