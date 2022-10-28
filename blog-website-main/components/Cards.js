import React from 'react';
import Card from './Card';
import styles from '../styles/Home.module.css';

const Cards = ({ allPosts }) => {
  return (
    <div className={styles.cardsContainer}>
      {allPosts.map((post) => {
        return <Card post={post} key={post.id}></Card>;
      })}
    </div>
  );
};

export default Cards;
