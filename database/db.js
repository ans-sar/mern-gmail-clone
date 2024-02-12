import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {
    const DB_URI =`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-kbaifjv-shard-00-00.apsaqud.mongodb.net:27017,ac-kbaifjv-shard-00-01.apsaqud.mongodb.net:27017,ac-kbaifjv-shard-00-02.apsaqud.mongodb.net:27017/?ssl=true&replicaSet=atlas-t3sdv4-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try{
mongoose.connect(DB_URI);
console.log('Database connected successfully')
  } catch (error) {
     console.log('Error while connection to the database',error)
  }

}
export default Connection;