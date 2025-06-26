import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router();
const controller = productController;

router
  .post("/", controller.createProduct)
  .get("/", controller.getAllProduct)
  .get("/:id", controller.getProductById)
  .patch("/:id", controller.updateProduct)
  .delete("/:id", controller.deleteProduct);

export default router;
