import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_Qc1LGahOFy3d@ep-raspy-breeze-ao25t6of.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});
console.log(pool);

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  //   res.send("Hello World!");
  res.status(200).json({
    success: true,
    message: "This is root route",
    author: "PH",
  });
});

app.post("/", async (req: Request, res: Response) => {
  // console.log(req.body);
  const { name, age, password } = req.body;
  console.log(password);
  res.status(200).json({
    success: true,
    message: "This is a taste API!",
    data: { name, age },
  });
});

app.listen(port, () => {
  console.log(`The Express Server is Running on port ${port}`);
});
