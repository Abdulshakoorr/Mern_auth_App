import express from "express";
import { dbConnection } from "../config/databaseConnection.js";
import router from "../routes/userRoutes.js";

const app = express();
const PORT = process.env.APP_PORT || 3000;
app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Auth App >> ",
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on PORT http://localhost:${PORT}`);
});
