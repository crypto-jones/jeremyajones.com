import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import MediaQuery from 'react-responsive';
import { Dropdown } from 'reactstrap';

import {
  NavBarContainer,
  NavLink,
  NavLinkWrapper,
  Hamburger,
  DropdownMenuWrapper,
} from './NavBarStyles';

class NavBar extends Component {
  state = {
    dropdownOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  smoothScrollHome = () => {
    scroller.scrollTo('Home', {
      duration: 500,
      delay: 1,
      smooth: true,
    });

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  smoothScrollAbout = () => {
    scroller.scrollTo('About', {
      duration: 500,
      delay: 1,
      smooth: true,
    });

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  smoothScrollProjects = () => {
    scroller.scrollTo('Projects', {
      duration: 500,
      delay: 1,
      smooth: true,
    });

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  smoothScrollContact = () => {
    scroller.scrollTo('Contact', {
      duration: 500,
      delay: 1,
      smooth: true,
    });

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  render() {
    return (
      <Element name="NavBar">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          inNavbar={true}
        >
          <NavBarContainer>
            <NavLinkWrapper>
              <MediaQuery minWidth={801}>
                <NavLink onClick={this.smoothScrollHome}>HOME</NavLink>
                <NavLink onClick={this.smoothScrollAbout}>ABOUT</NavLink>
                <NavLink onClick={this.smoothScrollProjects}>PORTFOLIO</NavLink>
                <NavLink onClick={this.smoothScrollContact}>CONTACT</NavLink>
              </MediaQuery>
              <MediaQuery maxWidth={800}>
                <Hamburger className="fas fa-bars" onClick={this.toggle} />
                <DropdownMenuWrapper>
                  <NavLink onClick={this.smoothScrollHome}>HOME</NavLink>
                  <NavLink onClick={this.smoothScrollAbout}>ABOUT</NavLink>
                  <NavLink onClick={this.smoothScrollProjects}>
                    PORTFOLIO
                  </NavLink>
                  <NavLink onClick={this.smoothScrollContact}>CONTACT</NavLink>
                </DropdownMenuWrapper>
              </MediaQuery>
            </NavLinkWrapper>
          </NavBarContainer>
        </Dropdown>
      </Element>
    );
  }
}

export default NavBar;
