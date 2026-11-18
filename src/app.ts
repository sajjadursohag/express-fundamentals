import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
import { pool } from "./db";
import { userRoute } from "./modules/users/user.route";
const app: Application = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoute)

app.get("/", (req: Request, res: Response) => {
  console.log(req);
 
  res.status(200).json({
    success: true,
    message: "This is root route",
    author: "PH",
  });
});

export default app;
