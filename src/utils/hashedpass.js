import { compare, hash } from "bcrypt";

export class Crypto {
  async encrypt(data) {
    return await hash(data, 7);
  }
  async decrypt(data, hashedPass) {
    return await compare(data, hashedPass);
  }
}
