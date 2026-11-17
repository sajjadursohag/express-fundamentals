import { Router} from "express";
import { userController } from "./user.controller";

const router = Router();
// /api/v1/users/
router.post("/", userController.createUSer);

export const userRoute = router;
