import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Auth App ",
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on PORT http://localhost:${PORT}`);
});
