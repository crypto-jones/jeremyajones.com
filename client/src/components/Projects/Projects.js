import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Element } from 'react-scroll';

import {
  ProjectContainer,
  ProjectHeader,
  ThumbnailContainer,
  ContentWrapper,
  Thumbnail,
} from './ProjectStyles';

import proofd from '../../assets/01.jpg';
import cryptoGym from '../../assets/02.jpg';
import profJones from '../../assets/03.jpg';
import bcad from '../../assets/04.jpg';
import reactMovies from '../../assets/05.jpg';
import walletWatcher from '../../assets/06.jpg';

const thumbSize = { width: '370px', height: '217px' };
const fullSize = { width: '740px', height: '434px' };

class Projects extends Component {
  state = {
    modal: false,
  };

  toggleProofd = () => {
    console.log('clicked');
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <Element name="Projects">
        <ProjectContainer>
          <ContentWrapper>
            <ProjectHeader>Projects</ProjectHeader>
            <ThumbnailContainer>
              <Thumbnail
                src={proofd}
                style={thumbSize}
                onClick={this.toggleProofd}
                alt="Proofd"
              />
              <Thumbnail
                src={cryptoGym}
                style={thumbSize}
                onClick={this.openLightbox}
                alt="CryptoGym"
              />
              <Thumbnail
                src={profJones}
                style={thumbSize}
                onClick={this.openLightbox}
                alt="Professor Jones Music"
              />
              <Thumbnail
                src={bcad}
                style={thumbSize}
                onClick={this.openLightbox}
                alt="BC/AD"
              />
              <Thumbnail
                src={reactMovies}
                style={thumbSize}
                onClick={this.openLightbox}
                alt="React Movies"
              />
              <Thumbnail
                src={walletWatcher}
                style={thumbSize}
                onClick={this.openLightbox}
                alt="WalletWatcher"
              />
            </ThumbnailContainer>
          </ContentWrapper>
        </ProjectContainer>

        {/* Modal Proofd*/}
        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggleProofd}>
          <ModalHeader toggle={this.toggleProofd}>Proofd</ModalHeader>
          <ModalBody>
            <Thumbnail src={proofd} style={fullSize} alt="Proofd" />
          </ModalBody>
          <ModalBody onClick={this.toggleProofd}>
            A blockchain verification platform
          </ModalBody>
          <ModalFooter>
            <Button
              color="info"
              onClick={this.toggleProofd}
              href="https://proofd.app"
              target="_blank"
            >
              View Site
            </Button>{' '}
            <Button
              color="secondary"
              onClick={this.toggleProofd}
              href="https://github.com/Lambda-School-Labs/ChainPointDocusign"
              target="_blank"
            >
              Repo
            </Button>
          </ModalFooter>
        </Modal>
      </Element>
    );
  }
}

export default Projects;
