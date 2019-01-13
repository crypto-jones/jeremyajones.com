import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

import {
  ContactContainer,
  ContentWrapper,
  ContactHeader,
  ContactSubHeader,
  ContactForm,
  ButtonWrapper,
} from './ContactStyles';

import Button from '../Button/Button';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Contact extends Component {
  state = { name: '', email: '', message: '' };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;
    const valid =
      name.length > 0 &&
      email.length > 0 &&
      email.includes('@') &&
      email.includes('.') &&
      message.length > 0;

    if (valid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...this.state }),
      })
        .then(() =>
          alert(
            `Hey! Thanks for contacting me. I'll get back to you soon as I can.`
          )
        )
        .catch(error =>
          alert(
            `Oops! Something went wrong. Contact me at ${
              process.env.REACT_APP_EMAIL
            }.`
          )
        );

      this.setState({ name: '', email: '', message: '' });
    } else if (name.length <= 0) {
      alert('Please enter your name.');
    } else if (email.length <= 0) {
      alert('Please enter your email address.');
    } else if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
    } else if (message.length <= 0) {
      alert('Please enter your message.');
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <ContactContainer>
        <ContentWrapper>
          <ContactHeader>Contact</ContactHeader>
          <ContactSubHeader>Want to work together?</ContactSubHeader>
          <ContactForm>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  bsSize="lg"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  bsSize="lg"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={message}
                  placeholder="Message"
                  bsSize="lg"
                  style={{ height: '200px' }}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Form>
          </ContactForm>
          <ButtonWrapper>
            <Button
              name="Send Message"
              color="#c0c0c0"
              border="2px solid #c0c0c0"
              bgColor="#9d967c"
              hoverFontColor="#182327"
              borderColor="#9d967c"
              onClick={this.handleSubmit}
            />
          </ButtonWrapper>
        </ContentWrapper>
      </ContactContainer>
    );
  }
}

export default Contact;
