import "module-alias/register";
import { userRouter } from "app/user/router/user";
import bodyParser from "body-parser";
import { middleware } from "common/ErrorHandler/afterMiddleWare";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import morgan from "morgan";

if (dotenv.config().error) throw Error("Cannot find dot env file");
const port: number = Number(process.env.PORT) || 8080;

const app: Express = express();
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(morgan("short"));
const baseUrl: string = process.env.API_PREFIX || "";

app.use(baseUrl, userRouter);
app.use(middleware);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});