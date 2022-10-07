import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

function CommentModal({ closeCommentModal, show, deleteComment }: any) {
  return (
    <>
      <Modal
        show={show}
        keyboard={false}
        onHide={() => closeCommentModal()}
        bsPrefix="myModal"
      >
        <Modal.Header closeButton>
          <Modal.Title bsPrefix="headerTitle">Delete Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix="cancelButton"
            variant="secondary"
            onClick={() => closeCommentModal()}
          >
            No, Cancel
          </Button>
          <Button
            bsPrefix="deleteButton"
            variant="danger"
            onClick={() => deleteComment()}
          >
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentModal;
