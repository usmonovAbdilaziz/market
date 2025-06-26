import { Router } from "express";
import AdminController from "../controllers/admin.controller.js";
import { AuthGuard } from "../guards/auth.guard.js";
import { RolesGuard } from "../guards/roles.guard.js";
import { SelfGuard } from "../guards/self.guard.js";

const controller = AdminController;
const router = Router();

router
  .post("/", AuthGuard, RolesGuard(["superadmin"]), controller.createAdmin)
  .post("/signin", controller.signinAdmin)
  .post("/confirm", controller.confirmSigninAdmin)
  .post("/logout", AuthGuard, controller.logoutAdmin)
  .get("/", AuthGuard, RolesGuard(["superadmin"]), controller.getAllAdmins)
  .get("/:id", AuthGuard, SelfGuard, controller.getAdminById)
  .patch("/:id", AuthGuard, SelfGuard, controller.updateAdmin)
  .delete(
    "/:id",
    AuthGuard,
    RolesGuard(["superadmin"]),
    controller.deleteAdmin
  );

export default router;
