import { Schema, Types, model } from "mongoose";

const solidProductSchema = new Schema({
  productId: { type: Types.ObjectId, required: true, ref: "Product" },
  clentId: { type: Types.ObjectId, required: true, ref: "Client" },
  quantity: { type: String, required: true },
  totalPrice: { type: String, required: true },
});

const SolidProduct = model("SolidProduct", solidProductSchema);
export default SolidProduct;
