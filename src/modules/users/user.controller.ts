import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";

const createUSer = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUserIntoDB(req.body);

    // console.log(result);

    res.status(201).json({
      success: true,
      message: "User created!",
      data: result.rows[0],
      // data: { name, age },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersFromDB();
    // console.log(result)
    res.status(200).json({
      success: true,
      message: "User retrieved Successfully",
      data: result.rows,
      // data: { name, age },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userService.getSingleUserFromDB(id as string);

    // console.log(result);
    res.status(200).json({
      success: true,
      message: "User retrived Successfully!",
      data: result.rows[0],
      // data: { name, age },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userService.updateUserFromDB(req.body, id as string);

    // console.log(result);
    res.status(200).json({
      success: true,
      message: "Users UPDATED Successfully!",
      data: result.rows[0],
      // data: { name, age },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
   const result = await userService.deleteUserFromDB(id as string)
    // console.log(result);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Users Deleted Successfully!",
      // data: result.rows[0],
      // data: { name, age },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
};

export const userController = {
  createUSer,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
};
