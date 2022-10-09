import { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data.json';
import Comment from './components/Comment';
import Reply from './components/Reply';
import NewComment from './components/NewComment';
import MyModal from './components/MyModal';
import CommentModal from './components/CommentModal';
import { resolve } from 'path';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [parent]: any = useAutoAnimate({
    duration: 500,
    easing: 'ease-in-out',
  });
  const [isEnabled, setIsEnabled] = useState(true);
  let rawData: any = data;
  let processedObject = rawData.comments.map((comment: any) => {
    if (comment.replies.length > 0) {
      return {
        ...comment,
        isSelected: false,
        isEdited: false,
        replies: comment.replies.map((reply: string[]) => {
          return { ...reply, isSelected: false, isEdited: false };
        }),
      };
    } else {
      return { ...comment, isSelected: false, isEdited: false };
    }
  });
  rawData.comments = processedObject;

  let [mydata, setData] = useState(
    JSON.parse(localStorage.getItem('myData')!) || rawData
  );
  useEffect(() => {
    console.log('setting item...');
    localStorage.setItem('myData', JSON.stringify(mydata));
  }, [mydata]);

  const [show, setShow] = useState(false);
  const [forwardedReply, setforwadedReply] = useState({});
  const [forwardedComment, setforwardedComment] = useState({});

  const [commentShow, setCommentShow] = useState(false);
  const closeCommentModal = () => setCommentShow(false);
  const openCommentModal = () => setCommentShow(true);

  let deleted = useRef();

  const closeModal = () => setShow(false);
  const openModal = (e: any, myforwardedReply: any) => {
    setforwadedReply(myforwardedReply);
    setShow(true);
    console.log(e.target);
    console.log(myforwardedReply);
  };
  console.log(forwardedReply);
  console.log(forwardedComment);

  function deleteReply() {
    setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((comment: any) => {
          console.log('tsting if it reaches here');
          console.log(forwardedReply);
          if (comment.replies.includes(forwardedReply)) {
            console.log('match found!!');
            console.log(forwardedReply);
            console.log(comment);
            return {
              ...comment,
              replies: comment.replies.filter(
                (reply: any) => reply !== forwardedReply
              ),
            };
          } else {
            return comment;
          }
        }),
      };
    });
    closeModal();
  }
  function deleteComment() {
    setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.filter((comment: any) => {
          return comment !== forwardedComment;
        }),
      };
    });
    closeCommentModal();
  }
  function openMyCommentModal(selectedComment: any) {
    console.log(selectedComment);
    setforwardedComment(selectedComment);
    openCommentModal();
  }

  let renderedArray: JSX.Element[] = mydata.comments.map((comment: any) => {
    if (comment.replies.length !== 0) {
      return (
        <>
          <Comment
            {...comment}
            currentData={mydata}
            comment={comment}
            id={comment.id}
            setData={setData}
            currentUser={mydata.currentUser.username}
            openMyCommentModal={openMyCommentModal}
          >
            {' '}
          </Comment>
          {comment.replies.map((reply: any) => {
            return (
              <Reply
                {...reply}
                currentUser={mydata.currentUser.username}
                currentData={mydata}
                reply={reply}
                setData={setData}
                id={reply.id}
                comment={comment}
                openModal={openModal}
              ></Reply>
            );
          })}
        </>
      );
    } else {
      return (
        <Comment
          {...comment}
          currentData={mydata}
          comment={comment}
          setData={setData}
          currentUser={mydata.currentUser.username}
          openMyCommentModal={openMyCommentModal}
        ></Comment>
      );
    }
  });

  return (
    <>
      <div className="App" ref={parent}>
        {renderedArray}
        <NewComment currentData={mydata} setData={setData}></NewComment>
      </div>
      {show && (
        <div className="myModalContainer">
          <MyModal
            show={show}
            closeModal={closeModal}
            forwadedReply={forwardedReply}
            forwardedComment={forwardedComment}
            currentData={mydata}
            setData={setData}
            deleteReply={deleteReply}
          ></MyModal>
        </div>
      )}
      {commentShow && (
        <div className="myModalContainer" onClick={closeCommentModal}>
          <CommentModal
            show={commentShow}
            deleteComment={deleteComment}
            closeCommentModal={closeCommentModal}
          ></CommentModal>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
