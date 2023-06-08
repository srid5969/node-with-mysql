import "module-alias/register";
import { main } from "app/app";
import express, { Application } from "express";

const app: Application = express();
main(app).then(() => {
  console.log("up and running");
});
