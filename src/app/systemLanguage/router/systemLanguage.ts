import validate from "common/validate/middleware";
import { Express } from "express";
import { saveSystemLanguageController, getAllSystemLanguagesController, getSystemLanguageByIdController, updateSystemLanguageByIdController } from "../controller/systemLanguage";
import { SystemLanguage } from "../model/systemLanguage";
let router: Express = require("express").Router();

router.post("/sys-lang", validate(SystemLanguage, ["register"]), saveSystemLanguageController);
router.get("/sys-lang", getAllSystemLanguagesController);
router.get("/sys-lang/:id", getSystemLanguageByIdController);
router.patch("/sys-lang/:id", validate(SystemLanguage, ["patch"]), updateSystemLanguageByIdController);
export default router;
