import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import NavButton from '../Button/Button';
import Particles from '../Particles/Particles';
import {
  HomeContainer,
  HeaderContainer,
  TextContainer,
  NameText,
  JobText,
} from './HomeStyles';

class Home extends Component {
  smoothScroll() {
    scroller.scrollTo('NavBar', {
      duration: 500,
      delay: 1,
      smooth: true,
    });
  }

  render() {
    return (
      <Element name="Home">
        <HomeContainer>
          <Particles />
          <HeaderContainer>
            <TextContainer>
              <NameText>Jeremy A. Jones</NameText>
              <JobText>Full Stack Developer</JobText>
            </TextContainer>
            <NavButton
              name="See My Work"
              color="#c0c0c0"
              border="2px solid #c0c0c0"
              bgColor="#9d967c"
              hoverFontColor="#182327"
              borderColor="#9d967c"
              onClick={this.smoothScroll}
            />
          </HeaderContainer>
        </HomeContainer>
      </Element>
    );
  }
}

export default Home;
