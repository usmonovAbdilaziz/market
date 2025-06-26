import { Router } from "express";
import categoryController from "../controllers/category.controller.js";

const controller = categoryController;

const router = Router();
router
  .post("/", controller.creatCategory)
  .get("/", controller.getAllCategorys)
  .get("/:id", controller.getCategoryById)
  .patch("/:id", controller.updateCategory)
  .delete("/:id", controller.deleteCategory);

export default router;
