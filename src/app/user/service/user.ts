import { User } from "app/user/model/user";
import { query } from "configuration/database";
import { deleteUserQuery, editUserQuery, getAllUsers, getUserByIdQuery, insertUser } from "resources/query/user/user";

export async function saveUser(data: User) {
  return await query(`${insertUser} ('${data.name}','${data.password}')`);
}
export async function listUsers(): Promise<User[]> {
  return (await query(getAllUsers)) as User[];
}
export async function editUserName(id: string, data: User): Promise<any> {
  return await query(editUserQuery + `name=${data.name} where id=${id}`);
}
export async function deleteUser(id: string): Promise<any> {
  return await query(deleteUserQuery + ` where id=${id}`);
}
export async function getUserById(id: string): Promise<any> {
  return await query(getUserByIdQuery + ` where id=${id}`);
}