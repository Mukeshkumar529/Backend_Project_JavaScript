// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB();

dotenv.config({
  path: "./env",
});

/*Just one Example
function connectDb(){
}
connectDb()
*/

/*
First approach to connecting database 
// efi function

import express from "express";
const app = express();
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

      app.on("error", (error) => {
        console.log("ERROR :", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is running on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("ERROR:", error);
      throw error;
    }
  }
)();

*/
