import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app } from "./app.js";
import connectCloudinary from "./config/cloudinary.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error occured:", error);
      throw error;
    });

    connectCloudinary();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
