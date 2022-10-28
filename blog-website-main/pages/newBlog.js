import React, { useRef, useState } from 'react';
import style from '../styles/newBlog.module.css';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

const newBlog = () => {
  const Image = useRef(null);
  const myTitle = useRef();
  const myPreview = useRef();
  const content = useRef('');
  const [myValue, setValue] = useState('');

  async function uploadContent() {
    let myObject = {
      image: Image.current.value,
      title: myTitle.current.value,
      preview: myPreview.current.value,
      date: new Date().toLocaleDateString(),
      body: myValue,
    };

    const response = await fetch('/api/createPost', {
      method: 'POST',
      body: JSON.stringify(myObject),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data.message === 'blog inserted successfully') {
      Image.current.value = '';
      myPreview.current.value = '';
      myTitle.current.value = '';
      setValue('');
    }
  }

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <div className={style.imageContainer}>
          <label htmlFor="myUpload">Image URL :</label>
          <input
            type="text"
            placeholder="Enter Img url.."
            className={style.textarea}
            ref={Image}
          />
        </div>
        <div className={style.titleContainer}>
          <label htmlFor="myTitle">Title of Blog Post: </label>
          <input
            type="text"
            placeholder="Enter Title.."
            className={style.textarea}
            ref={myTitle}
          />
        </div>
        <div className={style.titleContainer}>
          <label htmlFor="myTitle">Blog Preview </label>
          <input
            type="text"
            placeholder="Enter preview text.."
            className={style.textarea}
            ref={myPreview}
          />
        </div>
        <div className={style.myTextAreaContainer}>
          <label htmlFor="myTextarea">Content of Blog Post :</label>
          {/* <textarea
            id="myTextarea"
            placeholder="type content here..."
            className={style.content}
            ref={content}
          /> */}
          <ReactQuill
            style={{
              width: '100%',
              height: '65%',
              marginTop: '1rem',
              color: '#515a47',
            }}
            theme="snow"
            value={myValue}
            onChange={setValue}
            className={style.quill}
          />
        </div>

        <button className={style.button} onClick={uploadContent}>
          Submit Blog Content
        </button>
      </div>
    </div>
  );
};

export default newBlog;
