import React from 'react';
import { useRouter } from 'next/router';
import style from '../styles/page.module.css';
import { MongoClient } from 'mongodb';
import parse from 'html-react-parser';

const pageId = ({ post }) => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <div className={style.imageContainer}>
          <img className={style.image} src={post[0].image} alt="main Image" />
        </div>
        <div className={style.contents}>
          <p className={style.post}>{post[0].date}</p>
          <h3 className={style.title}>{post[0].title}</h3>
          <div className={style.body}>{parse(post[0].body)}</div>
        </div>
      </div>
    </div>
  );
};

export default pageId;

export async function getStaticPaths() {
  const uri =
    'mongodb+srv://abdul400:sSEQBwMLwxoE5h1L@cluster0.kur9zqh.mongodb.net/?retryWrites=true&w=majority';
  const client = await MongoClient.connect(uri);

  const database = client.db('blogs');
  const blogs = database.collection('blogs');
  console.log(blogs);
  const allPosts = await blogs.find().toArray();
  client.close();

  return {
    paths: allPosts.map((post) => {
      return {
        params: { pageId: post._id.toString() },
      };
    }),
    fallback: blocking,
  };
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`https://dummyjson.com/posts/${params.pageId}`);
  // const post = await res.json();
  const uri =
    'mongodb+srv://abdul400:sSEQBwMLwxoE5h1L@cluster0.kur9zqh.mongodb.net/?retryWrites=true&w=majority';
  const client = await MongoClient.connect(uri);

  const database = client.db('blogs');
  const blogs = database.collection('blogs');
  const allPosts = await blogs.find().toArray();
  console.log(allPosts);
  client.close();
  const finalArray = allPosts.map((post) => ({
    id: post._id.toString(),
    image: post.image,
    title: post.title,
    date: post.date,
    body: post.body,
  }));

  return {
    props: { post: finalArray.filter((post) => post.id === params.pageId) },
  };
}
