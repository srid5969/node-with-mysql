import { User } from "app/user/model/user";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

if (dotenv.config().error) throw Error("Cannot find ");
const configuration: any = {
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: process.env.MSSQL_USERNAME || "",
  password: process.env.MSSQL_PASSWORD || "",
  database: process.env.MSSQL_DATABASE || "",
  extra: {
    trustServerCertificate: true,
  },

  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
};
export default configuration;

export const AppDataSource = new DataSource(configuration);
AppDataSource.initialize().then(() => console.log("success"));
