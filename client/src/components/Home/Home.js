import React, { Component } from 'react';
import {
  HomeContainer,
  HeaderContainer,
  TextContainer,
  Highlight,
} from './HomeStyles';
import NavButton from '../Button/Button';
import Particles from '../Particles/Particles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Particles />
        <HeaderContainer>
          <TextContainer>
            <Highlight>Jeremy A. Jones</Highlight>
            Full Stack Developer
          </TextContainer>
          <NavButton
            name="See My Work"
            color="#fff"
            border="2px solid #fff"
            bgColor="#E31B6D"
            borderColor="#E31B6D"
          />
        </HeaderContainer>
      </HomeContainer>
    );
  }
}

export default Home;
