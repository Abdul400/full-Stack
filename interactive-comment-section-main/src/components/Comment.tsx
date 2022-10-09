import React from 'react';
import downvote from '../assets/images/icon-minus.svg';
import upvote from '../assets/images/icon-plus.svg';
import avatar from '../assets/images/avatars/image-amyrobson.png';
import reply from '../assets/images/icon-reply.svg';
import Reply from '../components/Reply';
import close from '../assets/images/icon-close.svg';
import deleteIcon from '../assets/images/icon-delete.svg';
import editIcon from '../assets/images/icon-edit.svg';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Edit from './Edit';
import JSONdata from '../../../data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

const Comment = (props: {
  score: number;
  content: string;
  user: { username: string; image: { png: string; webp: string } };
  createdAt: string;
  currentData: any;
  comment: any;
  id: number;
  setData: any;
  currentUser: string;
  openMyCommentModal: any;
}) => {
  let [selectedPost, setSelectedPost] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  let commentTextArea: any = useRef('');
  let scrollTo: any = useRef('');
  let selectedComment: any = props.comment;
  let myEditor: any = useRef('');

  console.log(props.currentData);

  function replyToComment(e: any): any {
    console.log(selectedPost);
    setIsOpen(!isOpen);
    console.log(isOpen);
    let selectedItem = props.currentData.comments.find(
      (item: any) => item.id.toString() === e.target.value
    );

    setSelectedPost(selectedItem);
    // ----DO NOT DELETE!
    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((item: any) => {
          if (item === selectedItem) {
            return { ...item, isSelected: !item.isSelected };
          } else if (item.isSelected && item !== selectedPost) {
            return { ...item, isSelected: !item.isSelected };
          } else {
            return item;
          }
        }),
      };
    });
  }

  function getNewid() {
    let idNumber: number =
      props.currentData.comments.flatMap((comment: any) => comment.replies)
        .length + props.currentData.comments.length;
    return idNumber + 1;
  }
  function getcurrentUser() {
    let user = props.currentData.currentUser.username;
    return user;
  }
  function getcurrentUserImage() {
    let image = props.currentData.currentUser.image;
    return image;
  }

  function getCreatedDate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeOfDay: string;
    if (hours < 12) {
      timeOfDay = 'AM';
    } else {
      timeOfDay = 'PM';
    }

    return `${hours}:${minutes} ${timeOfDay}`;
  }

  function SendReply(e: any, item: any) {
    console.log(selectedPost);
    console.log(isOpen);

    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((item: any) => {
          if (item.isSelected) {
            return { ...item, isSelected: !item.isSelected };
          } else {
            return item;
          }
        }),
      };
    });
    let newReply = {
      id: getNewid(),
      content: commentTextArea.current.value,
      createdAt: moment().startOf('minutes').fromNow(),
      score: 0,
      replyingTo: item.user.username,
      isSelected: false,
      user: {
        image: getcurrentUserImage(),
        username: getcurrentUser(),
      },
    };

    console.log(newReply);
    let replyArray: any = item.replies;
    console.log(replyArray);
    replyArray.push(newReply);
    let newReplyArray = replyArray;
    console.log(newReplyArray);

    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((eachComment: any) => {
          if (eachComment === item) {
            console.log(eachComment);
            return { ...eachComment, replies: [...newReplyArray] };
          } else {
            return eachComment;
          }
        }),
      };
    });
    let newContent = commentTextArea.current.value;
    let allItems = scrollTo.current.parentNode.parentNode.children;
    setTimeout(() => {
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].textContent.includes(newContent)) {
          console.log(allItems[i]);
          allItems[i].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
          setTimeout(() => {
            allItems[i].animate(
              [
                // keyframes
                {
                  opacity: '0',
                  backgroundColor: 'white',
                },
                {
                  opacity: '0.5',
                  backgroundColor: '#ceceff',
                },
                {
                  opacity: '1',
                  backgroundColor: 'white',
                },
                {
                  opacity: '0.5',
                  backgroundColor: '#ceceff',
                },
                {
                  opacity: '1',
                  backgroundColor: 'white',
                },
              ],
              {
                duration: 2000,
                fill: 'both',
                easing: 'linear',
                // iterations: Infinity
              }
            );
          }, 500);
        }
      }
    }, 500);
  }

  function openEditor() {
    console.log(props.comment);
    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((item: any) => {
          if (item === props.comment) {
            return {
              ...item,
              isSelected: !item.isSelected,
            };
          } else if (item.isSelected && item !== props.comment) {
            return { ...item, isSelected: !item.isSelected };
          } else {
            return item;
          }
        }),
      };
    });
  }
  function updateComment() {
    console.log(myEditor.current.value);
    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((item: any) => {
          if (item === props.comment) {
            return {
              ...item,
              content: myEditor.current.value,
              isEdited: true,
            };
          } else {
            return item;
          }
        }),
      };
    });
    openEditor();
  }
  let currentScore: any = JSONdata.comments.find(
    (item) => item.id === props.comment.id
  );
  function increaseCount() {
    console.log('...increasing');
    if (
      props.comment.user.username !== props.currentData.currentUser.username
    ) {
      props.setData((prevData: any) => {
        return {
          ...prevData,
          comments: prevData.comments.map((comment: any) => {
            if (comment === props.comment) {
              if (
                props.comment.user.username !==
                  props.currentData.currentUser.username &&
                (currentScore.score === comment.score ||
                  currentScore.score - 1 === comment.score)
              ) {
                return { ...comment, score: comment.score + 1 };
              } else {
                return comment;
              }
            } else {
              return comment;
            }
          }),
        };
      });
    } else {
      notify();
    }
  }
  function decreaseCount() {
    if (
      props.comment.user.username !== props.currentData.currentUser.username
    ) {
      props.setData((prevData: any) => {
        return {
          ...prevData,
          comments: prevData.comments.map((comment: any) => {
            if (comment === props.comment) {
              if (
                currentScore.score === comment.score ||
                currentScore.score + 1 === comment.score
              ) {
                return { ...comment, score: comment.score - 1 };
              } else {
                return comment;
              }
            } else {
              return comment;
            }
          }),
        };
      });
    } else {
      notify();
    }
  }
  const notify = () =>
    toast.error('You cannot Downvote or Upvote your own comment!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  return (
    <div>
      <div className="comment" ref={scrollTo}>
        <div className="vote-counter p-2 m-0">
          <div className="counter-container">
            <img
              className="vote upvote"
              src={upvote}
              onClick={increaseCount}
              alt="upvote"
            />
            <p className="counter">{props.score}</p>
            <img
              className="vote downvote"
              src={downvote}
              alt="downvote"
              onClick={decreaseCount}
            />
          </div>
        </div>
        <div className="main-comment">
          <div className="info-section d-flex flex-row justify-content-start align-items-center">
            <img
              className="myavatar"
              src={props.user.image.webp}
              alt="image avatar"
            />
            <p className="username">{props.user.username}</p>
            {props.user.username === props.currentUser ? (
              <div className="thisUserContainer">
                <p className="thisUser">you</p>
              </div>
            ) : (
              ''
            )}
            <p className="created">{props.createdAt}</p>
            {props.user.username === props.currentUser ? (
              <>
                {props.comment.isEdited && <p className="edited">Edited</p>}
                <button
                  className="deleteComment"
                  onClick={(e) => props.openMyCommentModal(selectedComment)}
                  style={{
                    backgroundImage: `url(${deleteIcon})`,
                    backgroundPosition: '0% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '15%',
                    color: 'red',
                    textAlign: 'right',
                  }}
                >
                  Delete
                </button>
                <button
                  className="editComment"
                  style={{
                    backgroundImage: `url(${editIcon})`,
                    backgroundPosition: '0% 50%',
                    backgroundRepeat: 'no-repeat',
                    color: '#5257BB',
                    textAlign: 'right',
                  }}
                  onClick={(e) => openEditor()}
                >
                  {props.comment.isSelected ? 'Cancel' : 'Edit'}
                </button>
              </>
            ) : (
              <button
                className="replyBtn d-flex"
                onClick={(e) => replyToComment(e)}
                value={props.id}
                style={{
                  backgroundImage: `url(${
                    props.comment.isSelected ? close : reply
                  })`,
                  backgroundPosition: '5% 50%',
                  backgroundRepeat: 'no-repeat',
                  color: props.comment.isSelected ? 'red' : '',
                }}
              >
                {/* <img className="replyimage" src={reply} alt="reply" /> */}
                {props.comment.isSelected ? 'Close' : 'Reply'}
              </button>
            )}
          </div>
          <div className="comment-section h-80% w-100 pt-1">
            {props.comment.isSelected &&
            props.currentData.currentUser.username ===
              props.comment.user.username ? (
              ''
            ) : (
              <p className="replied">{props.content}</p>
            )}
          </div>
        </div>
      </div>
      {props.currentData.comments.map((item: any) => {
        if (
          props.comment === item &&
          item.isSelected &&
          item.user.username !== props.currentData.currentUser.username
        ) {
          return (
            <motion.div
              className="replyInput"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="newComment">
                <img
                  className="currentAvatar"
                  src={props.currentData.currentUser.image.png}
                  alt="current user"
                />
                <textarea
                  className="newCommentInput"
                  placeholder="Add a reply..."
                  ref={commentTextArea}
                  autoFocus
                >
                  {/* {`@${item.user.username} `} */}
                </textarea>
                <button
                  className="newCommentSend"
                  onClick={(e: any): any => SendReply(e, item)}
                >
                  REPLY
                </button>
              </div>
            </motion.div>
          );
        } else if (
          props.comment === item &&
          item.isSelected &&
          item.user.username === props.currentData.currentUser.username
        ) {
          return (
            <motion.div
              className="commentEditInputContainer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <textarea
                className="commentEditInput"
                ref={myEditor}
                defaultValue={props.comment.content}
                autoFocus
              ></textarea>
              <button className="commentUpdate" onClick={updateComment}>
                UPDATE
              </button>
            </motion.div>
          );
        }
      })}
    </div>
  );
};

export default Comment;
