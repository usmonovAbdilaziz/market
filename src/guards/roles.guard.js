import { handleError } from "../helpers/error.succes.js";

export const RolesGuard = (includeRoles = []) => {
  return (req, res, next) => {
    console.log(req.user);
    if (!includeRoles.includes(req.user?.role)) {
      return handleError(res, "Forbidden user", 403);
    }
    next();
  };
};
