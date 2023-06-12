import { Request, Response } from "express";
import { saveSystemLanguage, getAllSystemLanguages, getSystemLanguageById, updateSystemLanguageById } from "../service/systemLanguage";

export async function saveSystemLanguageController(req: Request, res: Response) {
  const data = await saveSystemLanguage(req.body).catch((e) => e);
  res.json(data);
}
export async function getAllSystemLanguagesController(req: Request, res: Response) {
  const data = await getAllSystemLanguages().catch((e) => e);
  res.json(data);
}
export async function getSystemLanguageByIdController(req: Request, res: Response) {
  const data = await getSystemLanguageById(req.params.id).catch((e) => e);
  res.json(data);
}

export async function updateSystemLanguageByIdController(req: Request, res: Response) {
  const data = await updateSystemLanguageById(req.params.id, req.body).catch((e: any) => e);
  res.json(data);
}
