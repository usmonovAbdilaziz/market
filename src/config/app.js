import { config } from "dotenv";
config();

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  OWNER_USER: process.env.OWNER_USER,
  OWNER_PASS: process.env.OWNER_PASS,
  OWNER_EMAIL: process.env.OWNER_EMAIL,
  OWNER_PHONE: process.env.OWNER_PHONE,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_TIME: process.env.ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_TIME: process.env.REFRESH_TOKEN_TIME,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PASS: process.env.MAIL_PASS,
};
