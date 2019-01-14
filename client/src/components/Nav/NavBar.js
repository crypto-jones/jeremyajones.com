import React from 'react';
import { NavBarContainer, NavLink, NavLinkWrapper } from './NavBarStyles';
import { Element } from 'react-scroll';

const NavBar = () => {
  return (
    <Element name="NavBar">
      <NavBarContainer>
        <NavLinkWrapper>
          <NavLink>HOME</NavLink>
          <NavLink>ABOUT</NavLink>
          <NavLink>PORTFOLIO</NavLink>
          <NavLink>CONTACT</NavLink>
        </NavLinkWrapper>
      </NavBarContainer>
    </Element>
  );
};

export default NavBar;
