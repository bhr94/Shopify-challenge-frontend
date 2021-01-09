import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from "reactstrap";


const ModalExample = (props) => {
  const { buttonLabel, className } = props;
  return (
      <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
        <Alert color ="danger">You already have 5 nominations</Alert>
      </Modal>
  );
};

export default ModalExample;
