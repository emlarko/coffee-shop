import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 100px;
  display: flex;
  background: white;
  justify-content: space-between;
  padding:  10px 15px;
`

export const MenuLink = styled(Link)`
  font-family: "Bebas Neue", sans-serif;
  font-size: 25px;
  color: black;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &:hover {
    color: #217262;
    cursor: pointer;
  }
  &.active {
    text-decoration: underline;
  }
`

export const Hamburger = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`