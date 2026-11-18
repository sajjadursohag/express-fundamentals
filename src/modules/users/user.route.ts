import { Router } from "express";
import { userController } from "./user.controller";
import app from "../../app";

const router = Router();
// /api/v1/users/
router.post("/", userController.createUSer);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export const userRoute = router;
