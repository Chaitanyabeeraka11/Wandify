import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadPath = path.join(__dirname, "..", "uploads");

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Upload path:", uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    console.log("Saving file:", file.originalname);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log("Received file:", file.originalname);
    cb(null, true);
  },
});

export default upload;
