import dotenv from "dotenv";
dotenv.config();

export const data = {
  database_Url: process.env.database_url,
  APP_PORT: process.env.APP_PORT,
};
