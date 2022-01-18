import React, { Component } from "react";
import PDF from "../PDF/PDF";
import Button from "../Button/Button";
import { Element } from "react-scroll";

import {
    AboutContainer,
    ContentWrapper,
    AboutHeader,
    BioWrapper,
    BioTextWrapper,
    ProfilePic,
    BioText,
} from "./AboutStyles";

import profileImage from "../../assets/jeremy.jpg";

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
                        <BioWrapper>
                            <ProfilePic src={profileImage} />
                            <BioTextWrapper>
                                <BioText>
                                    Hello. I'm Jeremy, a software developer, an
                                    educator, and a musician living in the San
                                    Francisco Bay Area. I am a natural leader
                                    and have been consistently recognized as an
                                    effective communicator and skilled at
                                    coordinating and leading cross-functional
                                    teams in a fast-paced environment. I thrive
                                    on finding solutions to complex challenges,
                                    and I love turning ideas into reality.
                                </BioText>
                                <Button
                                    name="View Resume"
                                    color="#444649"
                                    border="2px solid #444649"
                                    hoverFontColor="#fffdff"
                                    bgColor="#444649"
                                    borderColor="#444649"
                                    width="180px"
                                    fontSize="1.2rem"
                                    onClick={this.togglePDF}
                                />
                            </BioTextWrapper>
                        </BioWrapper>
                    </ContentWrapper>
                    <PDF toggle={this.togglePDF} isOpen={this.state.modal} />
                </AboutContainer>
            </Element>
        );
    }
}

export default About;
