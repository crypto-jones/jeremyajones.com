import React, { Component } from 'react';

import {
  ContactContainer,
  ContentWrapper,
  ContactHeader,
  ContactSubHeader,
} from './ContactStyles';

class Contact extends Component {
  state = {};
  render() {
    return (
      <ContactContainer>
        <ContentWrapper>
          <ContactHeader>Contact</ContactHeader>
          <ContactSubHeader>Want to work together?</ContactSubHeader>
        </ContentWrapper>
      </ContactContainer>
    );
  }
}

export default Contact;
