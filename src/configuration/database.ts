import dotenv from "dotenv";
import mysql from "mysql";
import { CREATE_USERS_TABLE_QUERY } from "resources/query/user/user";
import { promisify } from "util";

if (dotenv.config().error) throw Error("Cannot find ");

export const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "",
  user: process.env.MYSQL_USERNAME || "",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "",
});
connection.connect(async function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  await query(CREATE_USERS_TABLE_QUERY);

  console.log("connected as id " + connection.threadId);
});
export const query = promisify(connection.query).bind(connection);
