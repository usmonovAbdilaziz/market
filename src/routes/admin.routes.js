import { Router } from "express";
import AdminController from "../controllers/admin.controller.js";

const controller = AdminController;
const router = Router();

router
  .post("/", controller.createAdmin)
  .post("/signin", controller.signinAdmin)
  .post("/confirm", controller.confirmSigninAdmin)
  .post("/logout", controller.logoutAdmin)
  .get("/", controller.getAllAdmins)
  .get("/:id", controller.getAdminById)
  .patch("/:id", controller.updateAdmin)
  .delete("/:id", controller.deleteAdmin);

export default router;
