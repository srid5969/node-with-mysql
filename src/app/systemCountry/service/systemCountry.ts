import { AppDataSource } from "configuration/database";
import { SystemCountry } from "../model/systemCountry";

const systemCountryRepository = AppDataSource.getRepository(SystemCountry);

export async function saveSystemCountry(data: SystemCountry) {
  return await systemCountryRepository.save(data).catch((e) => e);
}
export async function getAllSystemCountries() {
  return await systemCountryRepository.find().catch((e) => e);
}
export async function getSystemCountryById(id: string) {
  return await systemCountryRepository.findOne({ where: { id } }).catch((e) => e);
}
export async function updateSystemCountryById(id: string, data: SystemCountry): Promise<any> {
  systemCountryRepository.createQueryBuilder();
  let country: any = await systemCountryRepository.findOneBy({
    id: id,
  });

  country.name = await data.name;
  !!data.log ? (country.log = data.log) : null;

  return await systemCountryRepository.save(country).catch((e) => e);
}
