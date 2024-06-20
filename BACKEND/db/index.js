import mongoose from "mongoose";
import { config } from "dotenv";


config()
const connection = mongoose.connect( process.env.db , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default connection;
