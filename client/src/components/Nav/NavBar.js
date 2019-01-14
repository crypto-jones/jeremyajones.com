import React, { Component } from 'react';
import { NavBarContainer, NavLink, NavLinkWrapper } from './NavBarStyles';
import { Element, scroller } from 'react-scroll';

class NavBar extends Component {
  smoothScrollHome() {
    scroller.scrollTo('Home', {
      duration: 500,
      delay: 1,
      smooth: true,
    });
  }

  smoothScrollAbout() {
    scroller.scrollTo('About', {
      duration: 500,
      delay: 1,
      smooth: true,
    });
  }

  smoothScrollProjects() {
    scroller.scrollTo('Projects', {
      duration: 500,
      delay: 1,
      smooth: true,
    });
  }

  smoothScrollContact() {
    scroller.scrollTo('Contact', {
      duration: 500,
      delay: 1,
      smooth: true,
    });
  }

  render() {
    return (
      <Element name="NavBar">
        <NavBarContainer>
          <NavLinkWrapper>
            <NavLink onClick={this.smoothScrollHome}>HOME</NavLink>
            <NavLink onClick={this.smoothScrollAbout}>ABOUT</NavLink>
            <NavLink onClick={this.smoothScrollProjects}>PORTFOLIO</NavLink>
            <NavLink onClick={this.smoothScrollContact}>CONTACT</NavLink>
          </NavLinkWrapper>
        </NavBarContainer>
      </Element>
    );
  }
}

export default NavBar;
