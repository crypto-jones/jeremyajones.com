import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import { Element } from "react-scroll";

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
    ModalFooter,
} from "./ProjectStyles";

import anchored from "../../assets/01.jpg";
import cryptoGym from "../../assets/02.jpg";
import profJones from "../../assets/03.jpg";
import bcad from "../../assets/04.jpg";
import reactMovies from "../../assets/05.jpg";
import walletWatcher from "../../assets/06.jpg";

const thumbSize = { width: "370px", height: "217px" };
const fullSize = { width: "100%" };

class Projects extends Component {
    state = {
        modalAnchored: false,
        modalCrytpoGym: false,
        modalProfJones: false,
        modalBCAD: false,
        modalReactMovies: false,
        modalWalletWatcher: false,
    };

    toggleAnchored = () => {
        this.setState({
            modalAnchored: !this.state.modalAnchored,
        });
    };

    toggleCryptoGym = () => {
        this.setState({
            modalCrytpoGym: !this.state.modalCrytpoGym,
        });
    };

    toggleProfJones = () => {
        this.setState({
            modalProfJones: !this.state.modalProfJones,
        });
    };

    toggleBCAD = () => {
        this.setState({
            modalBCAD: !this.state.modalBCAD,
        });
    };

    toggleReactMovies = () => {
        this.setState({
            modalReactMovies: !this.state.modalReactMovies,
        });
    };

    toggleWalletWatcher = () => {
        this.setState({
            modalWalletWatcher: !this.state.modalWalletWatcher,
        });
    };

    render() {
        return (
            <Element name="Projects">
                <ProjectContainer>
                    <ContentWrapper>
                        <ProjectHeader>Portfolio</ProjectHeader>
                        <ThumbnailContainer>
                            <Thumbnail
                                src={anchored}
                                style={thumbSize}
                                onClick={this.toggleAnchored}
                                alt="Anchored"
                            />
                            <Thumbnail
                                src={cryptoGym}
                                style={thumbSize}
                                onClick={this.toggleCryptoGym}
                                alt="CryptoGym"
                            />
                            <Thumbnail
                                src={profJones}
                                style={thumbSize}
                                onClick={this.toggleProfJones}
                                alt="Professor Jones Music"
                            />
                            <Thumbnail
                                src={bcad}
                                style={thumbSize}
                                onClick={this.toggleBCAD}
                                alt="BC/AD"
                            />
                            <Thumbnail
                                src={reactMovies}
                                style={thumbSize}
                                onClick={this.toggleReactMovies}
                                alt="React Movies"
                            />
                            <Thumbnail
                                src={walletWatcher}
                                style={thumbSize}
                                onClick={this.toggleWalletWatcher}
                                alt="WalletWatcher"
                            />
                        </ThumbnailContainer>
                    </ContentWrapper>
                </ProjectContainer>

                {/* Modal Anchored*/}
                <Modal
                    centered
                    isOpen={this.state.modalAnchored}
                    toggle={this.toggleAnchored}
                >
                    <ModalBody>
                        <a
                            href="https://youtu.be/2QY0qJcTla"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FullSize
                                src={anchored}
                                style={fullSize}
                                alt="Anchored"
                            />
                        </a>
                    </ModalBody>
                    <ModalHeader style={{ paddingTop: "0" }}>
                        <ModalTextWrapper>
                            <ModalTitle>Anchored</ModalTitle>
                            <ModalSubTitle>
                                A blockchain enabled verification platform
                            </ModalSubTitle>
                            <ModalDescription>
                                Anchored allows users to securely link a hash of
                                any data, such as important documents, to the
                                Bitcoin blockchain. It was built with React,
                                Redux, Node.js, Express, and PostgreSQL with
                                Chainpoint, DocuSign, Auth0, and Stripe API
                                integration.
                            </ModalDescription>
                        </ModalTextWrapper>
                    </ModalHeader>
                    <ModalFooter toggle={this.toggleAnchored}>
                        <Astyle
                            href="https://github.com/Lambda-School-Labs/anchored.app"
                            target="_blank"
                        >
                            <i className="fab fa-github fa-2x" />
                        </Astyle>
                        <Astyle
                            href="https://youtu.be/2QY0qJcTlac"
                            target="_blank"
                        >
                            <i className="fab fa-youtube fa-2x" />
                        </Astyle>
                    </ModalFooter>
                </Modal>

                {/* Modal CryptoGym */}
                <Modal
                    centered
                    isOpen={this.state.modalCrytpoGym}
                    toggle={this.toggleCryptoGym}
                >
                    <ModalBody>
                        <a
                            href="https://cryptogym.netlify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FullSize
                                src={cryptoGym}
                                style={fullSize}
                                alt="Crypto Gym"
                            />
                        </a>
                    </ModalBody>
                    <ModalHeader style={{ paddingTop: "0" }}>
                        <ModalTextWrapper>
                            <ModalTitle>CryptoGym</ModalTitle>
                            <ModalSubTitle>
                                An interactive training center for blockchain
                                technology
                            </ModalSubTitle>
                            <ModalDescription>
                                CryptoGym teaches developers blockchain
                                technology one rep at a time. Users can select
                                their preferred programming language and work
                                step by step through the code for the respective
                                exercise. It was built with React, Express, and
                                Node.js.
                            </ModalDescription>
                        </ModalTextWrapper>
                    </ModalHeader>
                    <ModalFooter toggle={this.toggleCryptoGym}>
                        <Astyle
                            href="https://cryptogym.netlify.com"
                            target="_blank"
                        >
                            <i className="fas fa-globe fa-2x" />
                        </Astyle>{" "}
                        <Astyle
                            href="https://github.com/helios-coop/cryptogym"
                            target="_blank"
                        >
                            <i className="fab fa-github fa-2x" />
                        </Astyle>
                    </ModalFooter>
                </Modal>

                {/* Modal Professor Jones Music */}
                <Modal
                    centered
                    isOpen={this.state.modalProfJones}
                    toggle={this.toggleProfJones}
                >
                    <ModalBody>
                        <a
                            href="https://www.professorjonesmusic.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FullSize
                                src={profJones}
                                style={fullSize}
                                alt="Professor Jones Music"
                            />
                        </a>
                    </ModalBody>
                    <ModalHeader style={{ paddingTop: "0" }}>
                        <ModalTextWrapper>
                            <ModalTitle>Professor Jones Music</ModalTitle>
                            <ModalSubTitle>
                                A modern website for a musical artist
                            </ModalSubTitle>
                            <ModalDescription>
                                ProfessorJonesMusic.com is a site I created to
                                showcase my music as well as my visual art. It
                                was built with React, Express, and Node.js with
                                YouTube, Bandsintown, and Stripe API
                                integration.
                            </ModalDescription>
                        </ModalTextWrapper>
                    </ModalHeader>
                    <ModalFooter toggle={this.toggleProfJones}>
                        <Astyle
                            href="https://www.professorjonesmusic.com"
                            target="_blank"
                        >
                            <i className="fas fa-globe fa-2x" />
                        </Astyle>{" "}
                    </ModalFooter>
                </Modal>

                {/* Modal BCAD */}
                <Modal
                    centered
                    isOpen={this.state.modalBCAD}
                    toggle={this.toggleBCAD}
                >
                    <ModalBody>
                        <a
                            href="https://devpost.com/software/b-c-a-d-boock-chain-artifact-database"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FullSize
                                src={bcad}
                                style={fullSize}
                                alt="Blockchain Artifact Database"
                            />
                        </a>
                    </ModalBody>
                    <ModalHeader style={{ paddingTop: "0" }}>
                        <ModalTextWrapper>
                            <ModalTitle>BC/AD</ModalTitle>
                            <ModalSubTitle>
                                A blockchain solution for authenticating
                                artifacts
                            </ModalSubTitle>
                            <ModalDescription>
                                Blockchain Artifact Database was an ETH San
                                Francisco 2018 project. It's a system for
                                authenticating unique artifacts, antiquities,
                                and collectibles verified by experts. It was
                                built with React, Express, Node.js, Web3.js, and
                                Solidity with Twitter API integration.
                            </ModalDescription>
                        </ModalTextWrapper>
                    </ModalHeader>
                    <ModalFooter toggle={this.toggleBCAD}>
                        <Astyle
                            href="https://devpost.com/software/b-c-a-d-boock-chain-artifact-database"
                            target="_blank"
                        >
                            <i className="fas fa-globe fa-2x" />
                        </Astyle>{" "}
                        <Astyle
                            href="https://github.com/BC-AD/BC-AD"
                            target="_blank"
                        >
                            <i className="fab fa-github fa-2x" />
                        </Astyle>
                        <Astyle
                            href="https://youtu.be/Vkq6gAvUT5M"
                            target="_blank"
                        >
                            <i className="fab fa-youtube fa-2x" />
                        </Astyle>
                    </ModalFooter>
                </Modal>

                {/* Modal React Movies */}
                <Modal
                    centered
                    isOpen={this.state.modalReactMovies}
                    toggle={this.toggleReactMovies}
                >
                    <ModalBody>
                        <a
                            href="https://react-movies-jeremy-jones.netlify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FullSize
                                src={reactMovies}
                                style={fullSize}
                                alt="React Movies"
                            />
                        </a>
                    </ModalBody>
                    <ModalHeader style={{ paddingTop: "0" }}>
                        <ModalTextWrapper>
                            <ModalTitle>React Movies</ModalTitle>
                            <ModalSubTitle>
                                An app that displays details & trailers of films
                            </ModalSubTitle>
                            <ModalDescription>
                                React Movies is a UI-focused app that allows
                                users to search for in real-time any film ever
                                published to the Movie DB with blazing fast
                                rendering. A user can click on the movie card,
                                watch the trailer and get more details. This app
                                was built with React with the Movie Database API
                                integration.
                            </ModalDescription>
                        </ModalTextWrapper>
                    </ModalHeader>
                    <ModalFooter toggle={this.toggleReactMovies}>
                        <Astyle
                            href="https://react-movies-jeremy-jones.netlify.com"
                            target="_blank"
                        >
                            <i className="fas fa-globe fa-2x" />
                        </Astyle>{" "}
                        <Astyle
                            href="https://github.com/crypto-jones/react-movies"
                            target="_blank"
                        >
                            <i className="fab fa-github fa-2x" />
                        </Astyle>
                    </ModalFooter>
                </Modal>

                {/* Modal WalletWatcher */}
                <Modal
                    centered
                    isOpen={this.state.modalWalletWatcher}
                    toggle={this.toggleWalletWatcher}
                >
                    <ModalBody>
                        <a
                            href="https://walletwatcher.netlify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FullSize
                                src={walletWatcher}
                                style={fullSize}
                                alt="React Movies"
                            />
                        </a>
                    </ModalBody>
                    <ModalHeader style={{ paddingTop: "0" }}>
                        <ModalTextWrapper>
                            <ModalTitle>WalletWatcher</ModalTitle>
                            <ModalSubTitle>
                                An app that monitors Ethereum addresses
                            </ModalSubTitle>
                            <ModalDescription>
                                WalletWatcher was a Lambda School Hackathon 2018
                                project that was awarded a third place prize and
                                "most likely to become a startup." It allows
                                users to monitor any Ethereum-based address and
                                receive SMS notifications. It was built with
                                React, Express, Node.js, and MongoDB with Twilio
                                and Etherscan API integration.
                            </ModalDescription>
                        </ModalTextWrapper>
                    </ModalHeader>
                    <ModalFooter toggle={this.toggleWalletWatcher}>
                        <Astyle
                            href="https://walletwatcher.netlify.com"
                            target="_blank"
                        >
                            <i className="fas fa-globe fa-2x" />
                        </Astyle>{" "}
                        <Astyle
                            href="https://github.com/wallet-watcher/wallet-watcher"
                            target="_blank"
                        >
                            <i className="fab fa-github fa-2x" />
                        </Astyle>
                        <Astyle
                            href="https://www.youtube.com/watch?v=DmIB3gslWdg"
                            target="_blank"
                        >
                            <i className="fab fa-youtube fa-2x" />
                        </Astyle>
                    </ModalFooter>
                </Modal>
            </Element>
        );
    }
}

export default Projects;
