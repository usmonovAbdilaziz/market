import { Schema, model } from "mongoose";

const clentSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const Clent = model("Clent", clentSchema);
export default Clent;
