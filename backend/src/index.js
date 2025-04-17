import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js"; // Import the connectDB function to establish a connection to the database
import authRoutes from "./routes/auth.route.js"; // Import the authRouter

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  console.log('Server is running on POST:'+ PORT);
  connectDB(); // Call the connectDB function to establish a connection to the database
});