import { User } from "app/user/model/user";
import { AppDataSource } from "configuration/database";
import sql from "mssql";
import { deleteUserQuery, editUserQuery, getUserByIdQuery, insertUser } from "resources/query/user/user";
const userRepository = AppDataSource.getRepository(User);

export async function saveUser(data: User) {
  return await userRepository.save(data);
}
export async function listUsers(): Promise<any> {
  return await userRepository.find().catch((e) => e);
}
export async function editUserName(id: string, data: User): Promise<any> {
  const user:any=userRepository.findOneBy({
    id: Number(id),
  });
  user.name=''
  return await userRepository.save(data).catch((e) => e);
}
export async function deleteUser(id: string): Promise<any> {
  const request = new sql.Request();
  request.input("id", sql.VarChar, id);
  return await request.query(deleteUserQuery).catch((e) => e);
}
export async function getUserById(id: string): Promise<any> {
  return await userRepository.findOneBy({
    id: Number(id),
  });
}
