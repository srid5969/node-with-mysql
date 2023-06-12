import validate from "common/validate/middleware";
import { Express } from "express";
import { SystemState } from "../model/systemState";
import { saveSystemStateController, getAllSystemStatesController, getSystemStateByIdController, updateSystemStateByIdController } from "../controller/systemState";

let router: Express = require("express").Router();

router.post("sys-state", validate(SystemState, ["register"]), saveSystemStateController);
router.get("/sys-state", getAllSystemStatesController);
router.get("/sys-state/:id", getSystemStateByIdController);
router.patch("/sys-state/:id", validate(SystemState, ["patch"]), updateSystemStateByIdController);
export default router;
