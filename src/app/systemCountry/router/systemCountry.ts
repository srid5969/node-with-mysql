import validate from "common/validate/middleware";
import { Express } from "express";import { SystemCountry } from "../model/systemCountry";
import { getAllSystemCountriesController, getSystemCountryByIdController, saveSystemCountryController, updateSystemCountryByIdController } from "../controller/systemCountry";
let router: Express = require("express").Router();

router.post("sys-country", validate(SystemCountry, ["register"]), saveSystemCountryController);
router.get("/sys-country", getAllSystemCountriesController);
router.get("/sys-country/:id", getSystemCountryByIdController);
router.patch("/sys-country/:id", validate(SystemCountry, ["patch"]), updateSystemCountryByIdController);
export default router;
