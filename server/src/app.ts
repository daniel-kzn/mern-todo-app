import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import todoRouter from "./routes/todo";

dotenv.config();
const app = express();

// Middlewares
app
  .use(express.json())
  .use(cors())
  .use(
    morgan(
      "\x1b[33m:method \x1b[36m:url \x1b[32m:status - \x1b[35m:response-time ms"
    )
  );

// Routes
app.use("/api/todo/", todoRouter);

// Connected to Mongo & Start the server

mongoose
  .connect(
    `mongodb://${process.env.MONGO_CONTAINER_IP}:${process.env.MONGO_CONTAINER_PORT}/${process.env.MONGO_DATABASE}`,
    { user: process.env.MONGO_ROOT_USER, pass: process.env.MONGO_ROOT_PASSWORD }
  )
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started & listening on port : ${process.env.PORT}`);
    });
  })
  .catch((err: string) => {
    console.log(err);
  });
