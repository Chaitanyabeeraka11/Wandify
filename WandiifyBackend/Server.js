// server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import songRouter from "./src/routes/SongRoute.js";
import connectDB from "./src/config/MongoDb.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import albumRouter from "./src/routes/albumRoutes.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

console.log("Cloudinary Config in Server:", cloudinary.config().cloud_name);

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsPath = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

connectDB();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Received request for:", req.url);
  next();
});

app.use("/uploads", express.static(uploadsPath));
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.get("/", (req, res) => res.send("API working"));

app.get("/debug-uploads", (req, res) => {
  fs.readdir(uploadsPath, (err, files) => {
    if (err) {
      return res
        .status(500)
        .send(`Error reading uploads directory: ${err.message}`);
    }
    res.json({
      uploadsPath,
      files,
    });
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
  console.log(`Uploads directory: ${uploadsPath}`);
});
