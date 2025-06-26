import { Schema, Types, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  color: { type: String, required: true },
  categoryId: { type: Types.ObjectId, ref: "Category", required: true },
  salesmanId: { type: Types.ObjectId, ref: "Salesman", required: true },
});

const Product = model("Product", productSchema);

export default Product;
