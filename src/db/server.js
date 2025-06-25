import config from "../config/app.js";
import { connect } from "mongoose";

const MONGO_URI = config.MONGO_URI;
export const connectDB = async () => {
  try {
    await connect(MONGO_URI);
    console.log("Mongo db connected");
  } catch (error) {
    console.log("Mongo db connect error", error);
  }
};
