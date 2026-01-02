import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGO_DB_URL}/${DB_NAME}`
    );

    console.log(`\nMongoDB connected || DB Host: ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
