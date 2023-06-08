import React from 'react'
import { Link } from 'react-router-dom';
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import styled from 'styled-components'
import Logo from '../../assets/cup-logo.jpg'
import Auth from '../../utils/auth'

const Image = styled.img `
 width: 100px;
`

const Navbar = () => {
  return (
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/menu" activeStyle>
            Menu
          </MenuLink>
          <MenuLink to="/contact" activeStyle>
            Contact
          </MenuLink>
          <MenuLink to="/shop" activeStyle>
            Shop
          </MenuLink>
          {
            Auth.loggedIn() ? (
                <>
                <MenuLink onClick = {Auth.logout}>Logout</MenuLink>
                </>
            ) : (
                <MenuLink to="/login" activeStyle>
                Login
              </MenuLink>
            )
          }
         
        </Menu>
      <Link to="/"><Image src={Logo}/></Link>
      </PrimaryNav>
  )
}
export default Navbar