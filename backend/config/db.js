import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load variables from .env

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ DB connected");
  } catch (error) {
    console.error("❌ DB connection error:", error.message);
    process.exit(1); // exit if DB connection fails
  }
};
