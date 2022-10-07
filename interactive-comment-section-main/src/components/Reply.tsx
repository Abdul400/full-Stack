import React from 'react';
import downvote from '../assets/images/icon-minus.svg';
import upvote from '../assets/images/icon-plus.svg';
import avatar from '../assets/images/avatars/image-amyrobson.png';
import reply from '../assets/images/icon-reply.svg';
import deleteIcon from '../assets/images/icon-delete.svg';
import editIcon from '../assets/images/icon-edit.svg';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import close from '../assets/images/icon-close.svg';

const Reply = (props: {
  score: number;
  content: string;
  user: { username: string; image: { png: string; webp: string } };
  createdAt: string;
  currentUser: string;
  replyingTo: string;
  currentData: any;
  reply: any;
  setData: any;
  id: number;
  comment: any;
  openModal: any;
}) => {
  let myArray = props.currentData.comments.flatMap((comment: any) => {
    return comment.replies.map((reply: any) => {
      return reply;
    });
  });

  let myforwardedReply: any = props.reply;
  let [isOpen, setIsOpen] = useState(false);
  let [myReply, setMyreply]: any = useState({});
  let commentTextArea: any = useRef();
  let scrollTo: any = useRef();
  let myReplyEditor: any = useRef();

  function replyToComment(e: any): any {
    let selectedItem = props.currentData.comments;
    let selectedReply: any;

    for (let i = 0; i < selectedItem.length; i++) {
      for (let j = 0; j < selectedItem[i].replies.length; j++) {
        if (selectedItem[i].replies[j].id === parseInt(e.target.value)) {
          selectedReply = selectedItem[i].replies[j];
        }
      }
    }
    setMyreply(selectedReply);
    setIsOpen(!isOpen);

    //  ----DO NOT DELETE!
    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((item: any) => {
          return {
            ...item,
            replies: item.replies.map((reply: any) => {
              if (reply === selectedReply) {
                return { ...reply, isSelected: !reply.isSelected };
              } else if (reply.isSelected && item !== selectedReply) {
                return { ...reply, isSelected: !reply.isSelected };
              } else {
                return reply;
              }
            }),
          };
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
    console.log(myReply);
    console.log(isOpen);

    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((item: any) => {
          return {
            ...item,
            replies: item.replies.map((reply: any) => {
              if (reply === myReply) {
                return { ...reply, isSelected: !reply.isSelected };
              } else if (reply != myReply && reply.isSelected) {
                return { ...reply, isSelected: !reply.isSelected };
              } else {
                return reply;
              }
            }),
          };
        }),
      };
    });
    let newReply = {
      id: getNewid(),
      content: commentTextArea.current.value,
      createdAt: getCreatedDate(),
      score: 0,
      replyingTo: item.user.username,
      isSelected: false,
      replies: [],
      user: {
        image: getcurrentUserImage(),
        username: getcurrentUser(),
      },
    };

    console.log(newReply);
    let replyArray: any = props.comment.replies;
    console.log(replyArray);
    replyArray.push(newReply);
    let newReplyArray = replyArray;
    console.log(newReplyArray);

    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((eachComment: any) => {
          if (eachComment === props.comment) {
            console.log(eachComment);
            return { ...eachComment, replies: [...newReplyArray] };
          } else {
            console.log('hereeeee');
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

    let number: number =
      props.currentData.comments.flatMap((comment: any) => comment.replies)
        .length + props.currentData.comments.length;

    // setTimeout(() => {
    //   let myItem = scrollTo.current.parentNode.parentNode.children[number - 1];
    //   console.log(scrollTo.current.parentNode.parentNode.children);
    //   myItem.scrollIntoView({ behavior: 'smooth' });
    // }, 1000);
    //scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  }

  // function deleteReply(e: any) {
  //   console.log(e.target);
  //   console.log(props.reply);
  // }

  function openEditor() {
    console.log(props.comment);
    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((item: any) => {
          return {
            ...item,
            replies: item.replies.map((reply: any) => {
              if (reply === props.reply) {
                return { ...reply, isSelected: !reply.isSelected };
              } else if (reply.isSelected && item !== props.reply) {
                return { ...reply, isSelected: !reply.isSelected };
              } else {
                return reply;
              }
            }),
          };
        }),
      };
    });
  }
  function updateReply() {
    console.log(myReplyEditor.current.value);
    props.setData((prevData: any) => {
      return {
        ...prevData,
        comments: prevData.comments.map((item: any) => {
          return {
            ...item,
            replies: item.replies.map((reply: any) => {
              if (reply === props.reply) {
                return { ...reply, content: myReplyEditor.current.value };
              } else {
                return reply;
              }
            }),
          };
        }),
      };
    });
    openEditor();
  }

  return (
    <div>
      <div className="reply" ref={scrollTo}>
        <div className="vote-counter p-2 m-0">
          <div className="counter-container">
            <img className="vote upvote" src={upvote} alt="upvote" />
            <p className="counter">{props.score}</p>
            <img className="vote downvote" src={downvote} alt="downvote" />
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
                <button
                  className="deleteComment"
                  onClick={(e) => props.openModal(e, myforwardedReply)}
                  style={{
                    backgroundImage: `url(${deleteIcon})`,
                    backgroundPosition: '0% 50%',
                    backgroundRepeat: 'no-repeat',
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
                  onClick={openEditor}
                >
                  Edit
                </button>
              </>
            ) : (
              <button
                className="replyBtn d-flex"
                style={{
                  backgroundImage: `url(${
                    props.reply.isSelected ? close : reply
                  })`,
                  backgroundPosition: '5% 50%',
                  backgroundRepeat: 'no-repeat',
                  color: props.reply.isSelected ? 'red' : '',
                }}
                value={props.id}
                onClick={(e) => replyToComment(e)}
              >
                {props.reply.isSelected ? 'Close' : 'Reply'}
              </button>
            )}
          </div>
          <div className="comment-section h-80% w-100 pt-1">
            <p>
              {props.reply.isSelected &&
              props.currentData.currentUser.username ===
                props.reply.user.username ? (
                ''
              ) : (
                <>
                  <span className="replyTo">@{props.replyingTo} </span>
                  <p className="replied">{props.content}</p>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      {/* {props.currentData.comments.map((comment: any) => {
        return comment.replies.map((reply: any) => {
          if (!reply.isSelected) {
            return (
              <div className="replyInput">
                <div className="newComment">
                  <img
                    className="currentAvatar"
                    src={props.currentData.currentUser.image.png}
                    alt="current user"
                  />
                  <textarea
                    className="newCommentInput"
                    placeholder="Add a comment..."
                  ></textarea>
                  <button className="newCommentSend">REPLY</button>
                </div>
              </div>
            );
          }
        });
      })} */}
      {myArray.map((item: any) => {
        if (
          item === props.reply &&
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
                ></textarea>
                <button
                  className="newCommentSend"
                  onClick={(e) => SendReply(e, item)}
                >
                  REPLY
                </button>
              </div>
            </motion.div>
          );
        } else if (
          props.reply === item &&
          item.isSelected &&
          item.user.username === props.currentData.currentUser.username
        ) {
          return (
            <motion.div
              className="editInputContainer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <textarea
                className="newCommentInput editInput"
                ref={myReplyEditor}
                defaultValue={props.reply.content}
                autoFocus
              ></textarea>
              <button
                className="newCommentSend update replyUpdate"
                onClick={updateReply}
              >
                Update
              </button>
            </motion.div>
          );
        }
      })}
    </div>
  );
};

export default Reply;
