import { Router } from "express";
import solidProductController from "../controllers/solidProduct.controller.js";

const controller = solidProductController;
const router = Router();

router
  .post("/", controller.createSolid)
  .get("/", controller.getAllSolidProduct)
  .get("/:id", controller.getSolidProductById)
  .patch("/:id", controller.updateSolidProduct)
  .delete("/:id", controller.deleteSolidProduct);

export default router;
