import { userRouter } from "app/user/router/user";
import bodyParser from "body-parser";
import { middleware } from "common/ErrorHandler/afterMiddleWare";
import { sequelize } from "configuration/database";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";

export const main = async (app: Application): Promise<void> => {
  if (dotenv.config().error) throw Error("Cannot find dot env file");
  const port: number = Number(process.env.PORT) || 8080;
  app.use(cors({ origin: "*" }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan("short"));
  const baseUrl: string = process.env.API_PREFIX || "";
  try {
    // await sequelize.authenticate();
    // sequelize.define('',{})
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  app.use(baseUrl, userRouter);
  app.use(middleware);
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
};
