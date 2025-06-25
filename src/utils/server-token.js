import jwt from "jsonwebtoken";
import config from "../config/app.js";
export class Token {
  async generateAccesToken(payload) {
    return jwt.sign(payload, config.ACCESS_TOKEN_KEY, {
      expiresIn: config.ACCESS_TOKEN_TIME,
    });
  }
  async generateRefreshToken(payload) {
    return jwt.sign(payload, config.REFRESH_TOKEN_KEY, {
      expiresIn: config.REFRESH_TOKEN_KEY,
    });
  }
  async tokenVerfy(token, secretKey) {
    return jwt.verify(token, secretKey);
  }
}
