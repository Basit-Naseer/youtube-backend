import dotenv from "dotenv";
import connectBD from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectBD()
  .then(() => {
    app.on("Error", (error) => {
      console.log("Error occur in server side", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoBD connection failed !!!!", err);
  });
