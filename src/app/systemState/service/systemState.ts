import { AppDataSource } from "configuration/database";
import { SystemState } from "../model/systemState";

const systemStateRepository = AppDataSource.getRepository(SystemState);

export async function saveSystemState(data: SystemState) {
  return await systemStateRepository.save(data).catch((e) => e);
}
export async function getAllSystemStates() {
  return await systemStateRepository.find().catch((e) => e);
}
export async function getSystemStateById(id: string) {
  return await systemStateRepository.findOne({ where: { id } }).catch((e) => e);
}
export async function updateSystemStateById(id: string, data: SystemState): Promise<any> {
  systemStateRepository.createQueryBuilder();
  let state: any = await systemStateRepository.findOneBy({
    id: id,
  });

  state.name = await data.name;
  !!data.log ? (state.log = data.log) : null;

  return await systemStateRepository.save(state).catch((e) => e);
}
