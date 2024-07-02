import express from 'express';
import { config } from "dotenv";
const app = express();
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
config({ path: "./config.env" });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
    cors({
      origin: ['http://localhost:5173/', 'http://frontend-url-two.com'],
      methods: ['GET', 'POST', 'DELETE', 'PUT'],
      credentials: true,
    })
  );
 
  app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );
  app.use("/api/v1/message", messageRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/appointment", appointmentRouter);
  dbConnection();

export default app;