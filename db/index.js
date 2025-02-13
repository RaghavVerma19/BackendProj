import mongoose from "mongoose";
import { DbName } from "../src/constants.js";

const connectDb = async () => {
  try {
    const DbConnection = await mongoose.connect(
      `${process.env.CON_STR}/${DbName}`,
    );
    console.log(
      `Successfully connected to database on : ${DbConnection.connection.host}`,
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
