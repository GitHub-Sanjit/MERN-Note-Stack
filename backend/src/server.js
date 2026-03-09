import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

// console.log("MongoDB URI from .env:", process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
