import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {
  HomeContainer,
  HeaderContainer,
  TextContainer,
  Highlight,
} from './HomeStyles.js';
import NavButton from '../Button/Button.js';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              color: {
                value: ['#E31B6D', '#00d8ff'],
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 225,
                color: '#ffffff',
                opacity: 0.9,
                width: 0.2,
              },
              move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 1,
                  speed: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
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
