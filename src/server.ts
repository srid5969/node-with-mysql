import "module-alias/register";
import { main } from "app/app";
import express, { Application } from "express";
import { AppDataSource } from "configuration/database";

const app: Application = express();
main(app).then(() => console.log("up and running"));
AppDataSource.initialize().then(() => console.log("success"));
