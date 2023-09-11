import express from "express";
import { dbConnection } from "../config/databaseConnection.js";
import router from "../routes/userRoutes.js";
import cors from "cors";
const app = express();
const PORT = process.env.APP_PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`server is listening on PORT http://localhost:${PORT}`);
});
