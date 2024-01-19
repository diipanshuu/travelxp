// utils/db.js

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://diipanshuu:TPC4GEiXnBufHggs@cluster0.crhbch1.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let database;

export const connectToDatabase = async () => {
  if (!database) {
    await client.connect();
    database = client.db('travelxp');
  }
  return database;
};
