import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { Element } from 'react-scroll';

import {
  ProjectContainer,
  ProjectHeader,
  ThumbnailContainer,
  ContentWrapper,
  Thumbnail,
  Astyle,
  FullSize,
  ModalTextWrapper,
  ModalTitle,
  ModalSubTitle,
  ModalDescription,
} from './ProjectStyles';

import proofd from '../../assets/01.jpg';
import cryptoGym from '../../assets/02.jpg';
import profJones from '../../assets/03.jpg';
import bcad from '../../assets/04.jpg';
import reactMovies from '../../assets/05.jpg';
import walletWatcher from '../../assets/06.jpg';

const thumbSize = { width: '370px', height: '217px' };
const fullSize = { width: '96%' };

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
          <ModalBody>
            <FullSize src={proofd} style={fullSize} alt="Proofd" />
          </ModalBody>
          <ModalHeader style={{ paddingTop: '0' }}>
            <ModalTextWrapper>
              <ModalTitle>Proofd</ModalTitle>
              <ModalSubTitle>
                A blockchain enabled verification platform
              </ModalSubTitle>
              <ModalDescription>
                Proofd allows users to securely link a hash of any data, such as
                important documents, to the Bitcoin blockchain. It was built
                with React, Redux, Styled Components, Node.js, Express, and
                PostgreSQL with Chainpoint, DocuSign, Auth0, and Stripe API
                integration.
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalHeader toggle={this.toggleProofd}>
            <Astyle href="https://proofd.app" target="_blank">
              <i className="fas fa-globe fa-2x" />
            </Astyle>{' '}
            <Astyle
              onClick={this.toggleProofd}
              href="https://github.com/Lambda-School-Labs/ChainPointDocusign"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
          </ModalHeader>
        </Modal>
      </Element>
    );
  }
}

export default Projects;
