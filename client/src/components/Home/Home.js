import React, { Component } from 'react';
import { Events, scrollSpy, scroller } from 'react-scroll';
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
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {});

    Events.scrollEvent.register('end', function(to, element) {});

    scrollSpy.update();
  }

  smoothScroll() {
    console.log('btn clicked');
    scroller.scrollTo('About', {
      duration: 500,
      delay: 1,
      smooth: true,
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <HomeContainer>
          <Particles />
          <HeaderContainer>
            <TextContainer>
              <NameText>Jeremy A. Jones</NameText>
              <JobText>Full Stack Developer</JobText>
            </TextContainer>
            <NavButton
              name="See My Work"
              color="#fff"
              border="2px solid #fff"
              bgColor="#E31B6D"
              borderColor="#E31B6D"
              onClick={this.smoothScroll}
            />
          </HeaderContainer>
        </HomeContainer>
      </div>
    );
  }
}

export default Home;
