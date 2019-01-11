import React, { Component } from 'react';
import {
  AboutContainer,
  ContentWrapper,
  AboutHeader,
  IconContainer,
  Icon,
  IconTextWrapper,
  IconText,
} from './AboutStyles';

class About extends Component {
  state = {};
  render() {
    return (
      <AboutContainer>
        <ContentWrapper>
          <AboutHeader>About</AboutHeader>
          <IconContainer>
            <IconTextWrapper>
              <Icon className="fas fa-tachometer-alt" />
              <IconText>
                Fast load times and lag free interaction, my highest priority.
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon className="fas fa-mobile-alt" />
              <IconText>
                Fast load times and lag free interaction, my highest priority.
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon className="fas fa-lightbulb" />
              <IconText>
                Fast load times and lag free interaction, my highest priority.
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon className="fas fa-lock" />
              <IconText>
                Fast load times and lag free interaction, my highest priority.
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon className="fas fa-rocket" />
              <IconText>
                Fast load times and lag free interaction, my highest priority.
              </IconText>
            </IconTextWrapper>
          </IconContainer>
        </ContentWrapper>
      </AboutContainer>
    );
  }
}

export default About;
