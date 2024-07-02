import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017";

export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to database:", err);
    });
};