import { Request, Response } from "express";
import { getAllSystemCountries,getSystemCountryById,saveSystemCountry,updateSystemCountryById } from "../service/systemCountry";

export async function saveSystemCountryController(req: Request, res: Response) {
  const data = await saveSystemCountry(req.body).catch((e) => e);
  res.json(data);
}
export async function getAllSystemCountriesController(req: Request, res: Response) {
  const data = await getAllSystemCountries().catch((e) => e);
  res.json(data);
}
export async function getSystemCountryByIdController(req: Request, res: Response) {
  const data = await getSystemCountryById(req.params.id).catch((e) => e);
  res.json(data);
}

export async function updateSystemCountryByIdController(req: Request, res: Response) {
  const data = await updateSystemCountryById(req.params.id, req.body).catch((e: any) => e);
  res.json(data);
}
