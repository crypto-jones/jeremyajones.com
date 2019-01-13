import React from 'react';
import { NavBarContainer } from './NavBarStyles';
import { Element } from 'react-scroll';

const NavBar = () => {
  return (
    <Element name="NavBar">
      <NavBarContainer />
    </Element>
  );
};

export default NavBar;
