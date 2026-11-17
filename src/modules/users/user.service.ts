import { pool } from "../../db";
import type { IUser } from "./user.interface";

const createUserIntoDB = async (payLoad: IUser) => {
  // console.log(req.body);
  const { name, email, age, password } = payLoad;
  // console.log(password);

  const result = await pool.query(
    `
            INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *
          `,
    [name, email, password, age],
  );
  return result;
};

export const userService = {
  createUserIntoDB,
};
