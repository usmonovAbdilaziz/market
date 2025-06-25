import config from "../config/app.js";
import Admin from "../models/admin.model.js";
import { Crypto } from "../utils/hashedpass.js";

const cryupto = new Crypto();

export const createOwner = async () => {
  try {
    const owner = await Admin.findOne({ role: "superadmin" });
    if (!owner) {
      const hashPass = await cryupto.encrypt(config.OWNER_PASS);
      await Admin.create({
        phone: config.OWNER_PHONE,
        email: config.OWNER_EMAIL,
        username: config.OWNER_USER,
        password: hashPass,
        role: "superadmin",
      });
      console.log("Owner created succesfully");
    }
  } catch (error) {
    console.log("Error on created owner", error);
  }
};
