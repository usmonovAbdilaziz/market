import { Router } from "express";
import clentController from "../controllers/clent.controller.js";

const controller = clentController;

const router = Router();

router
  .post("/", controller.creatClent)
  .post("/signin", controller.signinClent)
  .post("/logout", controller.logoutClent)
  .get("/", controller.getAllClents)
  .get("/:id", controller.getClentById)
  .patch("/:id", controller.updateClent)
  .delete("/:id", controller.deleteClent);

export default router;
