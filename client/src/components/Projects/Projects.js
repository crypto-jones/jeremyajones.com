import React, { Component } from 'react';
import { ProjectContainer } from './ProjectStyles';
import { Element } from 'react-scroll';

class Projects extends Component {
  state = {};
  render() {
    return (
      <ProjectContainer>
        <Element name="Projects">
          <div>Projects</div>
        </Element>
      </ProjectContainer>
    );
  }
}

export default Projects;
