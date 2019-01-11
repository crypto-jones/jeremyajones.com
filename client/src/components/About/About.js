import React, { Component } from 'react';
import { Element } from 'react-scroll';

import {
  AboutContainer,
  ContentWrapper,
  AboutHeader,
  AboutSubHeader,
  IconContainer,
  Icon,
  IconTextWrapper,
  IconText,
  IconHeader,
  ProfilePic,
  SocialContainer,
  Astyle,
} from './AboutStyles';

import profileImage from '../../assets/jeremy.jpg';

class About extends Component {
  state = {};
  render() {
    return (
      <Element name="About">
        <AboutContainer>
          <ContentWrapper>
            <AboutHeader>About</AboutHeader>
            <ProfilePic src={profileImage} />
            {/* <SocialContainer>
              <Astyle>
                <i class="fab fa-github" />
              </Astyle>
            </SocialContainer> */}
            <AboutSubHeader>I build apps that are</AboutSubHeader>
            <IconContainer>
              <IconTextWrapper>
                <Icon className="fas fa-tachometer-alt" />
                <IconHeader>Performant</IconHeader>
                <IconText>
                  Blazing fast load times & lag-free interaction
                </IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon className="fas fa-mobile-alt" />
                <IconHeader>Responsive</IconHeader>
                <IconText>Sleek & elegant designs for any device size</IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon className="fas fa-lightbulb" />
                <IconHeader>Intuitive</IconHeader>
                <IconText>User-friendly, dynamic & accessible UI/UX</IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon className="fas fa-lock" />
                <IconHeader>Secure</IconHeader>
                <IconText>Unhackable systems architecture</IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon className="fas fa-rocket" />
                <IconHeader>Scalable</IconHeader>
                <IconText>Unlimited user base growth potential</IconText>
              </IconTextWrapper>
            </IconContainer>
          </ContentWrapper>
        </AboutContainer>
      </Element>
    );
  }
}

export default About;
