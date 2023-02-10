import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Alright");
});

app.listen(PORT, () => {
  console.log(`Server started & listening on port : ${PORT}`);
});
