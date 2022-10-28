import React from 'react';
import styles from '../styles/about.module.css';

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.aboutMe}>
          <h1 className={styles.hello}>Hello There!</h1>
          <p className={styles.content}>
            My name is Abdulhafidh Adan and welcome to my blogging website. This
            is a personal blog that aims to break down a myriad of topics
            ranging from personal topic to technological and even philosophical
            topics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
