import { AppDataSource } from "configuration/database";
import { SystemLanguage } from "app/systemLanguage/model/systemLanguage";

const systemLanguageRepository = AppDataSource.getRepository(SystemLanguage);

export async function saveSystemLanguage(data: SystemLanguage) {
  return await systemLanguageRepository.save(data).catch((e) => e);
}
export async function getAllSystemLanguages() {
  return await systemLanguageRepository.find().catch((e) => e);
}
export async function getSystemLanguageById(id: string) {
  return await systemLanguageRepository.findOne({ where: { id } }).catch((e) => e);
}
export async function updateSystemLanguageById(id: string, data: SystemLanguage): Promise<any> {
  systemLanguageRepository.createQueryBuilder()
  let language: any = await systemLanguageRepository.findOneBy({
    id: id,
  });

  language.name = await data.name;
  !!data.log ? (language.log = data.log) : null;

  return await systemLanguageRepository.save(language).catch((e) => e);
}
