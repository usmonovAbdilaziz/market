import { Router } from "express";
import salesmanController from "../controllers/salesman.controller.js";

const router = Router();
const controller = salesmanController;

router
  .post("/", controller.creatSalesman)
  .post("/signin", controller.signinSalesman)
  .post("/logout", controller.logoutSalesman)
  .get("/", controller.getAllSalesmans)
  .get("/:id", controller.getSalesmanById)
  .patch("/:id", controller.updateSalesman)
  .delete("/:id", controller.deleteSalesman);

export default router;
