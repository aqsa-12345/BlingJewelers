import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
// import { contactRoutes } from "./routes/contactRoutes";

import { authRoutes } from "./routes/authRoutes.js";
import { adminRoutes } from "./routes/adminRoutes.js";
import { productRoutes } from "./routes/productRoutes.js";
import { contactRoutes } from "./routes/contactRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
  console.log("hello");
})

// MongoDB connection
const MONGO_URI = "mongodb+srv://aqsawasim347_db_user:aQsa123@cluster0.jfgugxw.mongodb.net/?appName=Cluster0";
  mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

// Routes
app.use("/", authRoutes);
app.use("/", adminRoutes);
app.use("/", productRoutes);
app.post("/", contactRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
