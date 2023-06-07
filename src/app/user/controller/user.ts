import { Request, Response } from "express";
import { deleteUser, editUserName, getUserById, listUsers, saveUser as SaveUsers } from "../service/user";


export const saveUser = async (req: Request, res: Response) => {
  res.send(await SaveUsers(req.body));
};
export const listAllUsers = async (req: Request, res: Response) => {
  res.send(await listUsers());
};
export const editUser = async (req: Request, res: Response) => {
  res.send(await editUserName(req.params.id || "", req.body));
};
export const deleteUserController = async (req: Request, res: Response) => {
  res.send(await deleteUser(req.params.id || ""));
};
export const getUserByIdController = async (req: Request, res: Response) => {
  res.send(await getUserById(req.params.id || ""));
};
