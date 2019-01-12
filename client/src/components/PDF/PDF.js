import React from 'react';
import { PDFObject } from 'react-pdfobject';
import { Modal } from 'reactstrap';
import resume from '../../assets/jeremyjones-resume2019.pdf';

class PDFModal extends React.Component {
  render() {
    const { toggle, isOpen } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggle} size="lg">
        <PDFObject url={resume} height="1080px" />
      </Modal>
    );
  }
}

export default PDFModal;
