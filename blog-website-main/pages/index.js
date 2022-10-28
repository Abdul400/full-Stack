import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Cards from '../components/Cards';
import { MongoClient } from 'mongodb';

export default function Home({ allPosts }) {
  return (
    <div className={styles.container}>
      <Cards allPosts={allPosts}></Cards>
    </div>
  );
}

export async function getStaticProps() {
  // const res = await fetch('https://dummyjson.com/posts');
  // const allPosts = await res.json();
  // return {
  //   props: {
  //     allPosts,
  //   },
  // };
  const uri =
    'mongodb+srv://abdul400:sSEQBwMLwxoE5h1L@cluster0.kur9zqh.mongodb.net/?retryWrites=true&w=majority';
  const client = await MongoClient.connect(uri);

  const database = client.db('blogs');
  const blogs = database.collection('blogs');
  const allPosts = await blogs.find().toArray();
  client.close();
  return {
    props: {
      allPosts: allPosts.map((post) => ({
        id: post._id.toString(),
        image: post.image || null,
        title: post.title,
        preview: post.preview || null,
        date: post.date,
        body: post.body,
      })),
    },
  };
}
