import React from 'react';
import cardStyles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import pageId from '../pages/[pageId]';
import parse from 'html-react-parser';

const Card = ({ post }) => {
  const router = useRouter();
  // const id = router.query;
  // console.log(id);

  const reRoute = () => {
    router.push(`/${post.id}`);
  };
  return (
    <div className={cardStyles.cardStyles}>
      <img src={post.image} alt="blog Image" />
      <h3>{post.title}</h3>
      {post.preview && <p className={cardStyles.preview}>{post.preview}</p>}
      {/* <p>{parse(post.body.split('').slice(0, 60).join(''))}...</p> */}
      {/* <Link href={`/${post.id}`}>
        <button> Read More</button>
      </Link> */}
      <button onClick={reRoute}> Read More</button>
    </div>
  );
};

export default Card;
