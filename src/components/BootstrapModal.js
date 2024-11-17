import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SwiperCom from './Swiper';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdClose } from "react-icons/io";

export default class BootStrapModal extends Component {

  render() {
    
    let show = this.props.isModalOpen;
    let handleClose = this.props.closeModal;
    let resumeData = this.props.resumeData;
    let modalContent = this.props.modalContent;

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title className='modal-header'>{modalContent.name}</Modal.Title>
            <IoMdClose className='close' onClick={handleClose}/>
          </Modal.Header>
          
          <div>
            <SwiperCom
              resumeData={resumeData}
              modalContent={modalContent}
            />
          </div>
          <Modal.Body>
            {modalContent.description && modalContent.description[0] ? modalContent.description[0] : null}
          </Modal.Body>
          <Modal.Footer>
            <Button id='close-btn' variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    )
    
  };
}