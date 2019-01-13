import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

import {
  ContactContainer,
  ContentWrapper,
  ContactHeader,
  ContactSubHeader,
  ContactForm,
} from './ContactStyles';

import Button from '../Button/Button';

class Contact extends Component {
  state = {};
  render() {
    return (
      <ContactContainer>
        <ContentWrapper>
          <ContactHeader>Contact</ContactHeader>
          <ContactSubHeader>Want to work together?</ContactSubHeader>
          <ContactForm>
            <Form>
              <FormGroup>
                <Input type="text" name="name" size="lg" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  size="lg"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  size="lg"
                  style={{ height: '200px' }}
                />
              </FormGroup>
              <Button
                name="Submit"
                color="#c0c0c0"
                border="2px solid #c0c0c0"
                bgColor="#9d967c"
                hoverFontColor="#182327"
                borderColor="#9d967c"
                // onClick={this.handleSubmit}
              />
            </Form>
          </ContactForm>
        </ContentWrapper>
      </ContactContainer>
    );
  }
}

export default Contact;
