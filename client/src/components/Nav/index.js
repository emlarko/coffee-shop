import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const Navbar = () => {
  return (
    <>
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
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar