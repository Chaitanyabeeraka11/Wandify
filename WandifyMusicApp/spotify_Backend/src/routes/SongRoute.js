import { addSong, listSongs } from "../controllers/SongController.js"; // Ensure the file extension is included
import express from "express";
import upload from "../middleware/Multer.js";
const songRouter = express.Router();

songRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  addSong
);
songRouter.get("/list", listSongs);

export default songRouter;
