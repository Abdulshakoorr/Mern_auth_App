import mongoose from "mongoose";
import { data } from "./dotenvData.js";

export const dbConnection = mongoose
  .connect(data.database_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to the database`);
  })
  .catch((err) => {
    console.log(`connection failed ${err}`);
  });
