import dotenv from "dotenv";

if (dotenv.config().error) throw Error("Cannot find ");
const configuration :any= {
  server: process.env.MSSQL_SERVER || "",
  user: process.env.MSSQL_USERNAME || "",
  password: process.env.MSSQL_PASSWORD || "",
  database: process.env.MSSQL_DATABASE || "",
  trustServerCertificate: true    
}
export default configuration;
 console.log(configuration);
 