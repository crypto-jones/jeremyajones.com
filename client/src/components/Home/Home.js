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
              color="#c0c0c0"
              border="2px solid #c0c0c0"
              bgColor="#9d967c"
              hoverFontColor="#182327"
              borderColor="#9d967c"
              onClick={this.smoothScroll}
            />
          </HeaderContainer>
        </HomeContainer>
      </div>
    );
  }
}

export default Home;
