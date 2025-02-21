import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "../db/index.js";
import { DbName } from "./constants.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database Connection Failed -- error =>", error);
  });

//routes handling
import userRouter from "../routes/userRoutes.js";

app.use("/api/v1/users", userRouter);
