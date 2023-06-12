import { User } from "app/user/model/user";
import { AppDataSource } from "configuration/database";
const userRepository = AppDataSource.getRepository(User);

export async function saveUser(data: User) {
  return await userRepository.save(data);
}
export async function listUsers(): Promise<any> {
  return await userRepository.find().catch((e) => e);
}
export async function editUserName(id: string, data: User): Promise<any> {
  let user: any =await userRepository.findOneBy({
    id: Number(id),
  });
  
  user.name =await data.name;
  console.log(user,'==========================================');
  return await userRepository.save(user).catch((e) => e);
}
export async function deleteUser(id: string): Promise<any> {
  return await userRepository.delete({ id: Number(id) }).catch((e) => e);
}
export async function getUserById(id: string): Promise<any> {
  return await userRepository.findOneBy({
    id: Number(id),
  });
}
