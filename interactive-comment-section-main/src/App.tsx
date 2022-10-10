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
import moment from 'moment';

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
  };

  function deleteReply() {
    setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((comment: any) => {
          if (comment.replies.includes(forwardedReply)) {
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
    commentDeleted();
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
    commentDeleted();
  }
  function openMyCommentModal(selectedComment: any) {
    setforwardedComment(selectedComment);
    openCommentModal();
  }

  let renderedArray: JSX.Element[] = mydata.comments.map((comment: any) => {
    if (comment.replies.length !== 0) {
      return (
        <>
          <Comment
            relativeTime={comment.relativeTime ? comment.relativeTime : ''}
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
                relativeTime={reply.relativeTime ? reply.relativeTime : ''}
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
          relativeTime={comment.relativeTime ? comment.relativeTime : ''}
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

  const commentDeleted = () =>
    toast.warning('comment/reply deleted', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  // function updateCommentDate() {
  //   //let timeNow = new Date().getTime() / 1000;
  //   setData((prevData: any) => {
  //     return {
  //       ...prevData,
  //       comments: prevData.comments.map((comment: any) => {
  //         if (typeof comment.createdAt === 'number') {
  //           return {
  //             ...comment,
  //             relativeTime: moment
  //               .unix(comment.createdAt)
  //               .local()
  //               .startOf('seconds')
  //               .fromNow(),
  //           };
  //         } else {
  //           return comment;
  //         }
  //       }),
  //     };
  //   });

  //   setData((prevData: any) => {
  //     return {
  //       ...prevData,
  //       comments: prevData.comments.map((comment: any) => {
  //         return {
  //           ...comment,
  //           replies: comment.replies.map((reply: any) => {
  //             if (typeof reply.createdAt === 'number') {
  //               return {
  //                 ...reply,
  //                 relativeTime: moment
  //                   .unix(reply.createdAt)
  //                   .local()
  //                   .startOf('seconds')
  //                   .fromNow(),
  //               };
  //             } else {
  //               return reply;
  //             }
  //           }),
  //         };
  //       }),
  //     };
  //   });

  //   // return moment.unix(timeNow).local().startOf('seconds').fromNow();
  //   //
  // }
  // setInterval(() => updateCommentDate(), 60000);

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
        <div className="myModalContainer">
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
