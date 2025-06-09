import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function ModalComponent({ show, handleClose, handleGo, data }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>{data?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Color: {data?.color}
          <br />
          Rating: {data?.rating}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
          <Button onClick={handleGo} variant="primary">
            AddToCart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
