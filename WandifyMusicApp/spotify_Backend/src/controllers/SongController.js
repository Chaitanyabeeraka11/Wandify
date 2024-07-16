import { v2 as cloudinary } from "cloudinary";
import Song from "../models/songModels.js";
import fs from "fs";
import util from "util";
const unlinkFile = util.promisify(fs.unlink);

export const addSong = async (req, res) => {
  try {
    const { name, album, duration } = req.body; // Include duration in the request body
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "auto",
      folder: "songs",
    });

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
      folder: "song_covers",
    });

    const newSong = new Song({
      name,
      album,
      duration, // Add duration field here
      file: audioUpload.secure_url, // Use 'file' instead of 'audioUrl'
      image: imageUpload.secure_url, // Use 'image' instead of 'imageUrl'
    });

    await newSong.save();

    // Clean up local files after upload
    await unlinkFile(audioFile.path);
    await unlinkFile(imageFile.path);

    res.status(201).json({
      message: "Song added successfully",
      song: newSong,
    });
  } catch (error) {
    console.error("Error adding song:", error);
    res
      .status(500)
      .json({ message: "Error adding song", error: error.message });
  }
};

export const listSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    console.error("Error listing songs:", error);
    res
      .status(500)
      .json({ message: "Error listing songs", error: error.message });
  }
};
