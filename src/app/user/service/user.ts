import { User } from "app/user/model/user";
import sql, { query } from "mssql";
import { deleteUserQuery, editUserQuery, getAllUsers, getUserByIdQuery, insertUser } from "resources/query/user/user";

export async function saveUser(data: User) {
  const request = new sql.Request();
  request.input("id", sql.VarChar, data.id);
  request.input("name", sql.VarChar, data.name);
  request.input("password", sql.VarChar, data.password);

  return await request.query(insertUser).catch((e) => e);
}
export async function listUsers(): Promise<any> {
  return await query(getAllUsers);
}
export async function editUserName(id: string, data: User): Promise<any> {
  const request = new sql.Request();
  request.input("name", sql.VarChar, data.name);
  // request.input("password", sql.VarChar, data.password);
  return await request.query(editUserQuery).catch((e) => e);
}
export async function deleteUser(id: string): Promise<any> {
  return await query(deleteUserQuery + ` where id=${id}`);
}
export async function getUserById(id: string): Promise<any> {
  return await query(getUserByIdQuery + ` where id=${id}`);
}
