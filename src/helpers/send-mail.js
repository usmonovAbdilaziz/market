import { createTransport } from "nodemailer";
import config from "../config/app.js";

const transporter = createTransport({
  host: config.MAIL_HOST,
  port: config.MAIL_PORT,
  secure: true,
  auth: {
    user: config.OWNER_EMAIL,
    pass: config.MAIL_PASS,
  },
});

export function sendMailPromise(mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return reject(error);
      resolve(info);
    });
  });
}
