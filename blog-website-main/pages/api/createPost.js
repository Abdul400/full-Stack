// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const client = await MongoClient.connect(
    //   'mongodb+srv://abdul400:sSEQBwMLwxoE5h1L@cluster0.kur9zqh.mongodb.net/blogs?retryWrites=true&w=majority'
    // );
    const client = new MongoClient(
      'mongodb+srv://abdul400:sSEQBwMLwxoE5h1L@cluster0.kur9zqh.mongodb.net/blogs?retryWrites=true&w=majority'
    );
    const db = client.db();

    const blogsCollection = db.collection('blogs');
    const result = await blogsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: 'blog inserted successfully' });
  }
}

export default handler;
