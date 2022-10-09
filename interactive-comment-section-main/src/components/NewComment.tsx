import React from 'react';
import { useRef, useEffect } from 'react';
import moment from 'moment';

const NewComment = (props: { currentData: any; setData: any }) => {
  let newComment: any = useRef('');

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

  function createNewComment() {
    let comment = {
      id: getNewid(),
      content: newComment.current.value,
      createdAt: moment().startOf('minutes').fromNow(),
      isSelected: false,
      score: 0,
      user: {
        image: getcurrentUserImage(),
        username: getcurrentUser(),
      },
      replies: [],
    };
    console.log('test');
    console.log(props.currentData);
    if (newComment.current.value != '') {
      props.setData((prevData: any) => {
        return {
          ...prevData,
          comments: [...prevData.comments, comment],
        };
      });
    }
    //setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 1000);
  }

  useEffect(() => {
    let allItems: any = document.getElementsByClassName('App')[0].children;
    for (let i = 0; i < allItems.length; i++) {
      if (
        newComment.current.value != '' &&
        allItems[i].textContent.includes(newComment.current.value)
      ) {
        console.log(allItems[i]);
        allItems[i].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });

        allItems[i].animate(
          [
            // keyframes
            {
              opacity: '0',
              backgroundColor: 'white',
            },
            {
              opacity: '0.5',
              backgroundColor: '#d1ffd4',
            },
            {
              opacity: '1',
              backgroundColor: 'white',
            },
            {
              opacity: '0.5',
              backgroundColor: '#d1ffd4',
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
      }
    }
    newComment.current.value = '';
  }, [props.currentData]);

  return (
    <div className="newComment">
      <img
        className="currentAvatar"
        src={props.currentData.currentUser.image.png}
        alt="current user"
      />
      <textarea
        className="newCommentInput"
        placeholder="Add a new comment..."
        ref={newComment}
      ></textarea>
      <button className="newCommentSend" onClick={() => createNewComment()}>
        SEND
      </button>
    </div>
  );
};

export default NewComment;
