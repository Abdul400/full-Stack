import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

function MyModal({
  closeModal,
  show,
  forwadedReply,
  currentData,
  setData,
  deleteReply,
  forwardedComment,
  deleteComment,
}: any) {
  console.log(forwadedReply);
  console.log(forwardedComment);

  // function deleteReply() {
  //   console.log('deleting...');
  // setData((prevData: any) => {
  //   return {
  //     ...prevData,
  //     comments: prevData.comments.map((comment: any) => {
  //       if (comment.replies.includes(forwadedReply)) {
  //         console.log('match found!!');
  //         console.log(forwadedReply);
  //         console.log(comment);
  //         return {
  //           ...comment,
  //           replies: comment.replies.filter(
  //             (reply: any) => reply !== forwadedReply
  //           ),
  //         };
  //       } else {
  //         return comment;
  //       }
  //     }),
  //   };
  // });

  // console.log(currentData);
  // let myreplyArray: any = [];
  // let myComment: any = {};
  // for (let i = 0; i < currentData.comments.length; i++) {
  //   for (let j = 0; j < currentData.comments[i].replies.length; j++) {
  //     if (currentData.comments[i].replies[j].id === forwadedReply.id) {
  //       myreplyArray = currentData.comments[i].replies;
  //     }
  //   }
  // }
  // let mynewReplyArray = myreplyArray.filter(
  //   (item: any) => item.id != forwadedReply.id
  // );
  // console.log(myreplyArray);
  // console.log(mynewReplyArray);

  // setData((prevData: any) => {
  //   return {
  //     ...prevData,
  //     comments: prevData.comments.map((comment: any) => {
  //       if (comment.replies.includes(forwadedReply)) {
  //         return {
  //           ...comment,
  //           replies: [...mynewReplyArray],
  //         };
  //       } else {
  //         return comment;
  //       }
  //     }),
  //   };
  // });
  // }
  // console.log(forwadedReply);

  return (
    <>
      <Modal
        show={show}
        keyboard={false}
        onHide={() => closeModal()}
        bsPrefix="myModal"
      >
        <Modal.Header closeButton>
          <Modal.Title bsPrefix="headerTitle">Delete Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this reply? This will remove the reply
          and can't be undone
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsPrefix="cancelButton"
            variant="secondary"
            onClick={() => closeModal()}
          >
            No, Cancel
          </Button>
          <Button
            bsPrefix="deleteButton"
            variant="danger"
            onClick={() => deleteReply()}
          >
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
