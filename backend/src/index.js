import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // Middleware to parse cookies
import cors from "cors"; // Middleware to enable CORS (Cross-Origin Resource Sharing)

import path from "path"; // Importing path module to handle file paths

import { connectDB } from "./lib/db.js"; // Import the connectDB function to establish a connection to the database
import authRoutes from "./routes/auth.route.js"; // Import the authRouter
import messageRoutes from "./routes/message.route.js";; // Import the messageRouter

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const __dirname = path.resolve(); // Get the current directory name

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, () => {
  console.log('Server is running on POST:'+ PORT);
  connectDB(); // Call the connectDB function to establish a connection to the database
});