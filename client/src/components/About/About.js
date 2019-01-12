import React, { Component } from 'react';
import { Element } from 'react-scroll';
import PDF from '../PDF/PDF';

import Button from '../Button/Button';
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
} from './AboutStyles';

import profileImage from '../../assets/jeremy.jpg';

class About extends Component {
  state = {
    modal: false,
  };

  togglePDF = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <Element name="About">
        <AboutContainer>
          <ContentWrapper>
            <AboutHeader>About</AboutHeader>
            <ProfilePic src={profileImage} />
            <Button
              name="View Resume"
              color="#444649"
              border="2px solid #444649"
              hoverFontColor="#fffdff"
              bgColor="#444649"
              borderColor="#444649"
              onClick={this.togglePDF}
            />
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
          <PDF toggle={this.togglePDF} isOpen={this.state.modal} />
        </AboutContainer>
      </Element>
    );
  }
}

export default About;
